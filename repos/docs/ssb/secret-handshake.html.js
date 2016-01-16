module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secret Handshake - Scuttlebot - SSBC',
    section: '/docs',
    path: '/docs/ssb/secret-handshake.html',
    content: gen.readMD('ssb/secret-handshake.md')
  })
}