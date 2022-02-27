const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('module-alias/register');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const FontPreloadPlugin = require('webpack-font-preload-plugin');
const { argv } = require('process');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',
  target: 'web',
  entry: './src',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.woff$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: argv.env === 'prod' ? '[name].[contenthash].js' : '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
    new FontPreloadPlugin({}),
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
