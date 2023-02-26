/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
