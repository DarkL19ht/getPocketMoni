import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PocketMoni',
  description: 'PocketMoni by eTranzact',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: 'white' }}>
        <div className="debug-screens">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
