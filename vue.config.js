module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/search-engine-books/dist/'
    : '/'
}
