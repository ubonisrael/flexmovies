/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
