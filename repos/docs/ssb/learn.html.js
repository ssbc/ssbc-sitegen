module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Learn about Secure Scuttlebutt - SSB - SSBC',
    section: '/docs',
    path: '/docs/ssb/learn.html',
    content: gen.readMD('ssb/learn.md')
  })
}