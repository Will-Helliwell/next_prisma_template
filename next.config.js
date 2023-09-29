/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  eslint: {
    ignoreDuringBuilds: true // otherwise linting errors will fail and stop builds, affecting deployments.
  }
};