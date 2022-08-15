/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };

    return config;
  },
};

module.exports = {
  nextConfig,
};
