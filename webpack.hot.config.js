var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index/index.js'
  ],

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

  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
  ],

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
      },
      {
      test: /\.js?$/,
      loaders: ['react-hot'],
      include: path.join(__dirname, 'src/')
    }
    ]
  }
};
