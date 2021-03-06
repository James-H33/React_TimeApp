var webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx', 
      ApplicationStyles: 'app/styles/app.sass',
    },
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude:/(node_modules|bower_components)/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
};
