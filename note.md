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