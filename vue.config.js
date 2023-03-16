'use strict'
const port = process.env.port || process.env.npm_config_port || 8888 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/', // 后台接口域名
        pathRewrite: { '^/api': '' },
        changeOrigin: true // 是否跨域
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
