const { resolve } = require('path')
const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'babel-polyfill',
      'webpack/hot/only-dev-server',
      'frontend/src/index.js',
    ],
    vendor: [
      'moment',
      'immutable',
      // 'react',
      // 'react-dom',
      // 'react-router',
      // 'redux',
    ],
  },

  output: {
    path: resolve(__dirname, 'frontend/dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: [ 'node_modules' ],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {frontend: resolve(__dirname, 'frontend')}
  },

  devServer: {
    // activate hot reloading
    hot: true,
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'frontend/src'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'frontend/src')
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'] // Specify the common bundle's name.
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
  ],
//   debug: DEBUG ? true : false,
// devtool: DEBUG ? 'cheap-module-eval-source-map' : 'hidden-source-map'
  devtool: 'source-map',
}
