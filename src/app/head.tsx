import { APP_TITLE } from '@/common/CommonUtils';

const baseUrl = process.env.BASE_URL;
const basePath = process.env.BASE_PATH;

export default function Head() {
  const title = APP_TITLE;
  const description = `Create code images with ease by using ${APP_TITLE}`;
  const ogImageUrl = `${baseUrl}${basePath}/og-image.jpeg`;
  const ogImageAlt = `${title} Logo`;

  return (
    <>
      <title>{APP_TITLE}</title>
      <link rel="icon" href={`${basePath}/favicon.ico`} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content="#0f172a" />

      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_SITE_VERIFICATION}
      />

      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:creator" content="@onderonur_" />
    </>
  );
}
