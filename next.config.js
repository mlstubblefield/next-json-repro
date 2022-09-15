/** @type {import("next").NextConfig} */
const config = {
  productionBrowserSourceMaps: true,
  assetPrefix: '/whatever',
  async rewrites() {
    return [
      {
        source: "/something",
        destination: "/",
      },
      {
        source: "/whatever/:slug*",
        destination: "/:slug*"
      }
    ];
  },
};

module.exports = config;
