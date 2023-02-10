import { APP_TITLE } from '@/common/CommonUtils';

export default function Head() {
  const title = APP_TITLE;
  const description = `Create code images with ease by using ${APP_TITLE}`;

  return (
    <>
      <title>{APP_TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content="#0f172a" />

      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="TODO" />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@onderonur_" />
    </>
  );
}
