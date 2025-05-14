import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { title, image, content } = await req.json();
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    const markdown = `---\ntitle: "${title}"\nimage: "${image}"\n---\n\n${content}`;
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const filePath = path.join(blogDir, `${slug}.md`);

    await mkdir(blogDir, { recursive: true });
    await writeFile(filePath, markdown, 'utf8');

    return new NextResponse(`Blog post "${title}" saved successfully.`);
  } catch (err) {
    console.error(err);
    return new NextResponse('Failed to save blog post.', { status: 500 });
  }
}
