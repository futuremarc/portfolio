const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const cssDev = ['style-loader', 'css-loader','sass-loader']
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader','sass-loader'],
  publicPath: '/dist'
})

const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    contact: './js/contact.js',
    bootstrap: bootstrapConfig
  },
  output:{
    path: path.resolve( __dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','env']
        }
      },
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        loader: cssConfig,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude:/node_modules/,
        loader: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader'
        ]
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'},
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'},
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery'},

    ]
  },
    plugins: [
      new HtmlWebpackPlugin({ //main page
        title: 'Marc Abbey',
        minify: {
          collapseWhitespace: true
        },
        hash:true,
        excludeChunks:['contact'],
        template: './index.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Contact',
        minify: {
          collapseWhitespace: true
        },
        hash:true,
        chunks:['contact'],
        filename: './../dist/contact.html',
        template: './contact.html',
      }),
      new ExtractTextPlugin({
        filename: '/css/[name].css',
        disable: !isProd,
        allChunks: true
    }),
      new webpack.HotModuleReplacementPlugin(), //hot module replacement
      new webpack.NamedModulesPlugin(), //hot module replacement
      new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, 'src/*.html'))
      }) //only compile css associated in these files!... cool
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      port: 9000,
      stats:'errors-only',
      open:true
    }
}
