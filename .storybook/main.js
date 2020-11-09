const tailwindConfig = require("../tailwind.config.js");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            syntax: "postcss-scss",
            plugins: [
              "postcss-import",
              "tailwindcss",
              "autoprefixer"              
            ],
          },
        },
      },
    ],
    config.resolve.extensions.push('.ts');
    return config;
  },
}