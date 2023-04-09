import { BaseToastContainer } from '@/common/BaseToastContainer';
import { Inter } from 'next/font/google';
import Layout from '@/layout/Layout';
import '@/styling/globals.css';
import classNames from 'classnames';
import { APP_TITLE } from '@/common/CommonUtils';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

const title = APP_TITLE;
const description = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}.`;

export const metadata = {
  title,
  description,
  themeColor: '#0f172a',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  creator: 'Onur Önder',
  applicationName: APP_TITLE,
  alternates: {
    canonical: '/',
  },
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
