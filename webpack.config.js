const HTMLPLUGIN = require("html-webpack-plugin");
const MINICSSPLUGIN = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    watchContentBase: true,
  },
  resolve: {
    // extensions: [".scss"],
  },
};
