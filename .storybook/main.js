module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-jest",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  staticDirs: ["../src/assets", "../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript-plugin",
  },

  docs: {
    autodocs: true,
  },
};
