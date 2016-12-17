const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    "frontend/src/index.js",
  ],

  output: {
    path: resolve(__dirname, "frontend/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  resolve: {
    modules: [ "node_modules" ],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {frontend:  resolve(__dirname, "frontend")}
  },

  devServer: {
    hot: true,
    // activate hot reloading
    contentBase: resolve(__dirname, "frontend/src"),
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ["babel-loader"],
        include: path.join(__dirname, 'frontend/src')
      },
      {
        test: /\.s?css$/,
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1",
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

  devtool: "source-map",
}
