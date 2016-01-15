module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'MuxRPC - Documentation - SSBC',
    section: '/docs',
    path: '/docs/api/muxrpc.html',
    content: gen.readMD('api/muxrpc.md')
  })
}