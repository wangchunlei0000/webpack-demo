const path = require('path')

module.exports = {
  // 打包模式 默认 - production（开发环境）development（开发环境）
  mode: 'production',
  // 入口文件
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}