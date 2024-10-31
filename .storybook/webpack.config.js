module.exports = async ({ config }) => {
  // using file-loader for svg files to ensure they can be imported as static assets
  config.module.rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash].[ext]",
        },
      },
    ],
    type: "javascript/auto",
  });
  return config;
};
