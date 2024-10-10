/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // To make `next lint` check files and folders besides the default folders (`src`, `app` etc.):
    // https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
    dirs: [
      'src',
      'lint-staged.config.mjs',
      'postcss.config.js',
      'prettier.config.js',
      'tailwind.config.ts',
    ],
  },
};

export default nextConfig;
