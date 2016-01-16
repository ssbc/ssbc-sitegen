module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'End-to-end Encryption - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/docs/ssb/end-to-end-encryption.html',
    content: gen.readMD('ssb/end-to-end-encryption.md')
  })
}