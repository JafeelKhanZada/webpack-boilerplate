const HTMLPLUGIN = require("html-webpack-plugin");
const MINICSSPLUGIN = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.sass/,
        use: ["sass-loader", "css-loader", "style-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: ["file-loader"],
      },
      {
        test: /\/js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLPLUGIN({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MINICSSPLUGIN({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
