/** @type {import('next').NextConfig} */
const status = require("./Context/status");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  status: status,
  images: {
    domains: ["dalaut-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
