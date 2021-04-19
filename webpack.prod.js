const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './.prod.env'),
    }),
  ],
}
