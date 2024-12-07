import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // To make `next lint` check files and folders besides the default folders (`src`, `app` etc.):
    // https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
    dirs: [
      'config',
      'src',
      'eslint.config.mjs',
      'lint-staged.config.mjs',
      'next.config.ts',
      'postcss.config.js',
      'prettier.config.mjs',
      'tailwind.config.ts',
    ],
  },
};

export default nextConfig;
