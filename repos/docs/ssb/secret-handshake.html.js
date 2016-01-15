module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secret Handshake - SSB - SSBC',
    section: '/docs',
    path: '/docs/ssb/secret-handshake.html',
    content: gen.readMD('ssb/secret-handshake.md')
  })
}