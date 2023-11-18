import '@/styles/globals.css';
import { BaseToastContainer } from '@/common/base-toast-container';
import { Inter } from 'next/font/google';
import { Layout } from '@/layout/layout';
import classNames from 'classnames';
import { APP_TITLE } from '@/common/common-utils';
import type { Viewport } from 'next';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

const title = APP_TITLE;
const description = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}.`;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH as string;

export const metadata = {
  title,
  description,
  metadataBase: new URL(basePath, baseUrl),
  creator: 'Onur Önder',
  applicationName: APP_TITLE,
  alternates: {
    canonical: '/',
  },
  icons: [
    {
      url: new URL(`${basePath}/favicon.ico`, baseUrl),
    },
  ],
  openGraph: {
    title,
    type: 'website',
    url: '/',
    description,
    siteName: APP_TITLE,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_TITLE,
    description,
    creator: '@onderonur_',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={classNames(inter.variable, 'font-sans')}>
      <body className="bg-body-900 text-white">
        <Layout>{children}</Layout>
        <BaseToastContainer />
      </body>
    </html>
  );
}
