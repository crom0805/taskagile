module.exports = {
  devServer: {
    port: 3000,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080'
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
        'bootstrap/dist/css/bootstrap.css'
      ]
    }
  }
}
