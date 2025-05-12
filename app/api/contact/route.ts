import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import { nextRequestToNodeRequest } from './parse-util';
import { NextRequest } from 'next/server';

// Mark route as dynamic for App Router
export const dynamic = 'force-dynamic';



export async function POST(req: NextRequest): Promise<Response> {
  const form = formidable({ multiples: false, uploadDir: '/tmp', keepExtensions: true });

  const nodeReq = await nextRequestToNodeRequest(req);


  return new Promise<Response>((resolve) => {
    form.parse(nodeReq, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return resolve(new Response(JSON.stringify({ error: 'Failed to parse form' }), { status: 500 }));
      }

        const { name, lastName, email, textarea, radio, checkboxes } = fields;
        const file = Array.isArray(files?.document) ? (files.document[0] as File) : (files?.document as unknown as File);

        try {
          // Google Sheets
          const credsPath = path.join(process.cwd(), 'app/api/contact/cred.json');
          const credsRaw = fs.readFileSync(credsPath, 'utf8');
          const creds = JSON.parse(credsRaw);

          const auth = new google.auth.GoogleAuth({
            credentials: creds,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });


          const sheets = google.sheets({ version: 'v4', auth });
          await sheets.spreadsheets.values.append({
            spreadsheetId: '1JL5fV2gTwNGDtOW7lzaHBrgr6D7sOUH0FS6QONprxTo',
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[
                Array.isArray(name) ? name[0] : name || '',
                Array.isArray(lastName) ? lastName[0] : lastName || '',
                Array.isArray(email) ? email[0] : email || '',
                Array.isArray(radio) ? radio[0] : radio || '',
                Array.isArray(textarea) ? textarea[0] : textarea || '',
                Array.isArray(checkboxes) ? checkboxes.join(', ') : checkboxes || '',
                file?.originalFilename || 'No file',
              ]],
            },
          });

          // Email
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: `"Contact Bot" <${process.env.SMTP_USER}>`,
            to: 'youssef.timoumi@esprit.tn',
            subject: `New Contact: ${name} ${lastName}`,
            text: Array.isArray(textarea) ? textarea.join('\n') : (textarea || ''),
            attachments: file && true ? [{
              filename: file.originalFilename || 'uploaded.file',
              path: file.filepath,
            }] : [],
          });
          console.log("done!!!");
          return resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
        } catch (error) {
          console.error('Submission error:', error);
          return resolve(new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 }));
        }
      });
    }
  );
}
