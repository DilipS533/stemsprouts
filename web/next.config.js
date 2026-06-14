/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Static export for GitHub Pages (produces out/ on build)
  output: 'export',
  // Ensure Next treats `web/` as the tracing root when multiple lockfiles exist
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
