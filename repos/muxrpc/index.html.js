module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'MuxRPC - Documentation - SSBC',
    section: '/docs',
    path: '/muxrpc',
    content: gen.readMD('README.md')
  })
}