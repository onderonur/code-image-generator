import { BaseToastContainer } from '@/common/BaseToastContainer';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { AppProps } from 'next/app';
import '@/styling/globals.css';
import Layout from '@/layout/Layout';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={classNames(inter.variable, 'font-sans')}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <BaseToastContainer />
    </div>
  );
}
