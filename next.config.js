/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  basePath: isProduction ? "/leoPlayground" : "",
  assetPrefix: isProduction ? "https://leoPlayground.github.io/react-resume" : " ",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
