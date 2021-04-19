const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common.js')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`)
  return merge(baseConfig, envConfig)
}
