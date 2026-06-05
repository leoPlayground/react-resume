/** @type {import('next').NextConfig} */
const isGithubPages = true;
const nextConfig = {
  reactStrictMode: true,
  basePath: isGithubPages ? "/react-resume" : "",
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

if (isGithubPages) {
  nextConfig.assetPrefix = "https://leoplayground.github.io/react-resume";
}

module.exports = nextConfig;
