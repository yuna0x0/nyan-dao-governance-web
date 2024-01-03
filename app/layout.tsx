import { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import "tocas/dist/tocas.min.css";
import './globals.css';
import { dAppName } from './constants';

const NotoSansTC = Noto_Sans_TC({ subsets: ['latin'] });
const Avenir = localFont({ src: './fonts/Avenir.woff2' });

export const metadata: Metadata = {
    title: dAppName,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${NotoSansTC.className} ${Avenir.className}`}>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tocas/4.2.5/tocas.min.js"></Script>
            <body>{children}</body>
        </html>
    )
}
