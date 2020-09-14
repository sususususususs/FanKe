/*
 * @Author: suwanqing
 * @Date: 2020-09-09 13:34:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-09 13:49:06
 * @Description: file content
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  devServer: {
    open: true,
    port: 8601,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    requireModuleExtension: false,
    sourceMap: false
  }
}
