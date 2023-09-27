import { google } from 'googleapis';
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
  const res = await req.json()
   try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        // client_id: process.env.CLIEND_ID,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    const sheets = google.sheets({ auth, version: 'v4' });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[res.email]],
      },
    });

    return NextResponse.json({ message: "Successfully Processed",data: response.data },{status:200})

  } catch (error) {
    console.log(error);
  }
}