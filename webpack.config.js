var webpack = require('webpack');

module.exports = {
  entry: { index: './index.js' },
  output: { filename: './[name].build.js' },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};