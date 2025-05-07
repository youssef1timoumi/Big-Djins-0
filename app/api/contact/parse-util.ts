import { NextRequest } from 'next/server';
import { IncomingMessage } from 'http';
import { Readable } from 'stream';

export async function nextRequestToNodeRequest(req: NextRequest): Promise<IncomingMessage> {
  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  const body = req.body;
  if (!body) throw new Error('Missing request body');

  const reader = body.getReader();
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) this.push(null);
      else this.push(value);
    }
  });

  const nodeReq = Object.assign(stream, {
    headers,
    method: req.method,
    url: req.url,
  }) as unknown as IncomingMessage;

  return nodeReq;
}
