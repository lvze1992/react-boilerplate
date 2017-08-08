var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var config = {
  entry: [
    // "webpack/hot/dev-server",
    // "webpack-dev-server/client?http://localhost:3000",
    "./app/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"],
        include: path.resolve(__dirname, "app")
      }
      // { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: ""
    })
  ]
};
module.exports = config;
