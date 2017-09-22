module.exports = {

  //define entry point
  entry:'./src/main.js',

  //define output point
  output:{
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['env']
        }
      },
      {
        test: /\.scss$/,
        loader:'style-loader!css-loader!sass-loader'
      }
    ]
  }

}
