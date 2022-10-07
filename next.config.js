/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: { domains: ['googleapis.com', 'books.google.com'] },
};

module.exports = nextConfig;
