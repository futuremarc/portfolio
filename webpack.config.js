var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProd = process.env.NODE_ENV === 'production';
var bootstrapEntryPoints = require('./webpack.bootstrap.config');

var cssDev = ['style-loader', 'css-loader','sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader','sass-loader'],
  publicPath: '/dist'
})

var cssConfig = isProd ? cssProd : cssDev;

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/app.js',
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
        use: cssConfig
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader'
        ]
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },

    ]
  },
    plugins: [
      new HtmlWebpackPlugin({ //main page
        title: 'Portfolio',
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
        filename: 'app.css',
        disable: !isProd,
        allChunks: true
    }),
      new webpack.HotModuleReplacementPlugin(), //hot module replacement
      new webpack.NamedModulesPlugin() //hot module replacement

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
