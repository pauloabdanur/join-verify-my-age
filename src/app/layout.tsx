import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const codecPro = localFont({
  src: '../../lib/fonts/Codec-Pro-Regular.ttf',
});

export const metadata: Metadata = {
  title: 'Join VerifyMyAge',
  description: 'Sign up flow for VerifyMyAge company',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={codecPro.className}>{children}</body>
    </html>
  );
}
