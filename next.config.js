const { nextI18NextRewrites } = require("next-i18next/rewrites");
const withImages = require("next-images");

const localeSubpaths = {};

module.exports = withImages({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  env: {
    REACT_APP_API_URL: "https://jsonplaceholder.typicode.com",
  },
});
