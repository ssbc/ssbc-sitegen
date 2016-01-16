module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Secure Scuttlebutt - SSBC',
    section: '/scuttlebot',
    path: '/secure-scuttlebutt',
    content: gen.readMD('index.md')
  })
}