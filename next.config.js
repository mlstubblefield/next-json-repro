/** @type {import("next").NextConfig} */
const config = {
  productionBrowserSourceMaps: true,
  async rewrites(){
    return [
      {
        source: "/",
        destination: "/1",
      }
    ]
  }
};

module.exports = config;
