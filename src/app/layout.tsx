import { Inter } from '@next/font/google';
import '@/styling/globals.css';

const font = Inter({ subsets: ['latin'] });

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={font.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-body-900 text-white">{children}</body>
    </html>
  );
}
