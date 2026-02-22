/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      resolveAlias: {
        // Fix for workspace lockfile confusion
      }
    }
  }
}

module.exports = nextConfig