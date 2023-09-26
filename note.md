```tsx
'use client'
import {useRouter} from "next/navigation"
import Link from "next/link"
const router = useRouter()
// client side navigation
<Link href="/">Users</Link> 
```
```js
@prisma/client
prima
axios
bcrypt
@types/bcrypt
next-auth
cloudinary
next-cloudinary
react-icons

vscode extensions
+JavaScript and TypeScript Nightly
```

```ts
prismadb.ts
import {PrismaClient} from '@prisma/client'
declare global {
    var prisma: PrismaClient | undefined
}
const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client
export default client
```

```js
NEXT_PUBLIC_API_KEY=publicapikey
process.env.NEXT_PUBLIC_API_KEY
```
## server component
- cannot listen to browser event
- cannot access browser APIs
- cannot maintain state
- cannot use effect

In next Js, all components inside the APP folder are server components by default

## Data source
- memory
- network
- file system

```js
const res = await fetch('/api/endpoints',{
    cache: "no-store"
})
const res = await fetch('/api/endpoints',{
    next: {
        revalidate: 10  // every 10secs
    }
})
const users: User[] = res.json()
```

## CSS module
- product.module.css 
```js
.card {
    color: red;
}
import styles from "./product.module.css"
<div className={styles.card}>
    Lorem Ipsum
</div>
```

```tsx
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
        client_id: process.env.CLIEND_ID,
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


```

```
console.developers. google.com/
https://console.cloud.google.com/apis/dashboard
https://console.cloud.google.com/apis/library
https://docs.google.com/spreadsheets/u/4
```