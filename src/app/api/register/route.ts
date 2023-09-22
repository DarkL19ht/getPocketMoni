import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

interface FormProps {
  email: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      status: 400,
      error: 'Request method not valid',
      message: 'Request method not valid',
    });
  }
  const body = req.body as FormProps;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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
        values: [[body.email]],
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'Thank you for subscribing to our waitlist',
      data: response.data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Something went wrong');
  }
}
