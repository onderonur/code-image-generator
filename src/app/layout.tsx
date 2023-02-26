import { Inter } from '@next/font/google';
import '@/styling/globals.css';
import { Metadata } from 'next';
import { APP_TITLE } from '@/common/CommonUtils';
import { BaseToastContainer } from '@/common/BaseToastContainer';

const font = Inter({ subsets: ['latin'] });

export function generateMetadata(): Metadata {
  const metaTitle = APP_TITLE;
  const metaDescription = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}`;
  const images = [
    {
      url: '/og-image.jpg',
      alt: `${metaTitle} Logo`,
      width: 1200,
      height: 630,
    },
  ];

  return {
    title: metaTitle,
    description: metaDescription,
    themeColor: '#0f172a',
    creator: 'Onur Önder',
    metadataBase: new URL(`${process.env.BASE_URL}${process.env.BASE_PATH}`),
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      type: 'website',
      title: metaTitle,
      description: metaDescription,
      siteName: APP_TITLE,
      locale: 'en_US',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images,
      creator: '@onderonur_',
    },
  };
}

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="bg-body-900 text-white">
        {children}
        <BaseToastContainer />
      </body>
    </html>
  );
}
