var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/index/index.js',
//  entry: __dirname + '/src/index/index.ts',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/build/'
  },
  // Currently we need to add '.ts' to resolve.extensions array.
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js','.less']
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'typescript-loader'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
};
