module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'muxrpcli - Documentation - SSBC',
    section: '/docs',
    path: '/muxrpcli',
    content: gen.readMD('README.md')
  })
}