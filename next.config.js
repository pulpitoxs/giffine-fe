/** @type {import('next').NextConfig} */

const { version } = require("./package.json");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  publicRuntimeConfig: {
    version,
  },
};

module.exports = nextConfig;
