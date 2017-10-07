const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');
const cssDev = ['style-loader', 'css-loader','sass-loader']
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use:  [
    {
      loader: 'string-replace-loader',
      query: {
        search: '/../images',
        replace: './images'
      }
    },
    {
        loader: "css-loader"
    },
    {
        loader: "postcss-loader"
    },{
        loader: "sass-loader"
    }],
  publicPath: '/dist/'
})

const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    bootstrap: bootstrapConfig
  },
  output:{
    path: path.resolve( __dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','env','stage-2']
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
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader'
        ]
      },

      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000&name=[name].[ext]',
        options:{
          publicPath:'dist/',
          outputPath:'fonts/'
        }

      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader?name=[name].[ext]',
        options:{
          publicPath:'dist/',
          outputPath:'fonts/'
        }
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.(js|scss)$/i,
        exclude:/node_modules/,
        loader: 'string-replace-loader',
        query: {
          search: '/../images',
          replace: './images'
        }
      }

    ]
  },
    plugins: [
      new HtmlWebpackPlugin({ //main page
        title: 'Marc Abbey',
        minify: {
          collapseWhitespace: true
        },
        hash:true,
        template: './index.html',
      }),
      new ExtractTextPlugin({
        filename: '/css/[name].css',
        disable: true,
        allChunks: true
    }),
      new webpack.HotModuleReplacementPlugin(), //hot module replacement
      new webpack.NamedModulesPlugin(), //hot module replacement
      // new PurifyCSSPlugin({
      //   paths: glob.sync([
      //     path.join(__dirname, 'src/*.html'),
      //     path.join(__dirname, 'src/js/*.js')
      //   ])
      // }) //only compile css associated in these files!... cool
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      port: 9002,
      stats:'errors-only',
      open:true
    }
}
