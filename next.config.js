const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,           // Disables the "compiling" activity indicator.
    autoPrerender: false,           // Disables the Next.js preview build customization overlay.
  },
  // Disable the Vercel deployment badge
  env: {
    NEXT_PUBLIC_VERCEL_NO_BADGE: "1",
  },
  webpack: (config) => {
    config.externals = [...(config.externals || [])];
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': path.resolve('./node_modules/three')
    }
    return config;
  },
}

module.exports = nextConfig 