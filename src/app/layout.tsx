import { BaseToastContainer } from '@/common/base-toast-container';
import { Inter } from 'next/font/google';
import Layout from '@/layout/layout';
import '@/styles/globals.css';
import classNames from 'classnames';
import { APP_TITLE } from '@/common/common-utils';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

const title = APP_TITLE;
const description = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}.`;

const images: OpenGraph['images'] = [
  {
    url: `/opengraph-image.jpg`,
    width: 1200,
    height: 630,
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH as string;

export const metadata = {
  title,
  description,
  themeColor: '#0f172a',
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
    images,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_TITLE,
    description,
    creator: '@onderonur_',
    images,
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
