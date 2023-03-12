/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("./package.json");

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.tsx", "page.ts"],
  publicRuntimeConfig: {
    version,
  },
  images: {
    domains: ["i.ibb.co", "http2.mlstatic.com"], //your-external-link-hostname
  },
};

module.exports = nextConfig;
