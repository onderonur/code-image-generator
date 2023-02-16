/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: process.env.BASE_PATH,
};

module.exports = nextConfig;
