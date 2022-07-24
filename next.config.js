/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  swcMinify: true,
  images: {
    disableStaticImages: true,
    unoptimized: true,
    loader: 'custom',
    path: '',
  },
};

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
  ...nextConfig,
});
