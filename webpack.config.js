const { rejects } = require("assert");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require('webpack');
const path = require("path");
// const { userArr, run } = require("./src/script");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "profileGeneratorWithGenerators.js",
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "profile generator with webpack and api",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};

//continue to configure webpack and all its loaders and plugins using the webpack documentation!!
//after continue to developing profile generator using mudold and api
