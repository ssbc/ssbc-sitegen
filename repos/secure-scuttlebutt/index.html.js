module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secure Scuttlebutt - SSBC',
    section: '/docs',
    path: '/secure-scuttlebutt',
    content: gen.readMD('README.md')
  })
}