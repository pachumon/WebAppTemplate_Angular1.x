const path = require("path");
const ROOT = path.resolve(__dirname, "js");

module.exports = {
  context: ROOT,

  resolve: {
    extensions: [".ts", ".js"]
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  devtool: "inline-source-map",
  devServer: {}
};
