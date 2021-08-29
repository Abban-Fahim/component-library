const tailwindConfig = require("../tailwind.config");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-tailwind-dark-mode",
  ],
};
