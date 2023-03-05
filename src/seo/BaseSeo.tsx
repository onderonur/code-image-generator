import { APP_TITLE } from '@/common/CommonUtils';

export function BaseSeo() {
  const baseUrl = new URL(
    process.env.BASE_PATH as string,
    process.env.BASE_URL,
  ).toString();
  const metaTitle = APP_TITLE;
  const metaDescription = `Create your code images by choosing different themes and visual settings by using ${APP_TITLE}`;
  const image = {
    url: new URL('/og-image.jpg', baseUrl).toString(),
    alt: `${metaTitle} Logo`,
    width: '1200',
    height: '630',
  };

  return (
    <>
      <title>{APP_TITLE}</title>
      <meta name="description" content={metaDescription} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="creator" content="Onur Önder" />
      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_SITE_VERIFICATION}
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={APP_TITLE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:alt" content={image.alt} />
      <meta property="og:image:width" content={image.width} />
      <meta property="og:image:height" content={image.height} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image.url} />
      <meta property="twitter:image:alt" content={image.alt} />
      <meta property="twitter:creator" content="@onderonur_" />
    </>
  );
}
