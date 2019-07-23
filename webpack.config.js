const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // new line

module.exports = {
  entry: './src/js/scripts.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin(),    // new line
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Memory',
      template: './src/index.html',
      inject: 'body'
    })

  ],
  module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'

      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    },
{
  test: /\.(wav|mp3|png|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'media',
        name: '[name].[ext]',
      }
}
   ]
}
  ]
}
};
