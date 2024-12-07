import { Layout } from '@/core/layouts/components/layout';
import { APP_TITLE } from '@/core/shared/utils';
import '@/core/styles/globals.css';
import { BaseToastContainer } from '@/core/ui/components/base-toast-container';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

const title = APP_TITLE;
const description = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}.`;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH as string;

export const metadata: Metadata = {
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

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={twJoin(
        inter.variable,
        'font-sans antialiased [color-scheme:dark] selection:bg-secondary-200 selection:text-primary-700',
        // fluid font-size:
        // 14px - 16px for 640px - 1024px viewport
        'text-[clamp(0.875rem,0.667rem+0.52vw,1rem)]',
      )}
    >
      <body className="bg-body-950 text-white">
        <Layout>{children}</Layout>
        <BaseToastContainer />
      </body>
    </html>
  );
}
