const prod = process.env.NODE_ENV === 'production';
const publicUrl = prod ? 'https://lCaveh.github.io/HighCladd' : '';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    publicPath: prod ? '/HighCladd/' : '/',
    filename: prod ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /\.test\.(ts|tsx)$/],
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: {
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(publicUrl),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: './public/assets', to: 'assets' }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    liveReload: true,
    compress: true,
    port: 3000,
    server: 'https',
    historyApiFallback: true,
    host: 'localhost',
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    open: true,
  },
  resolve: {
    alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@redux': path.resolve(__dirname, 'src/redux')
    },
  },
};
