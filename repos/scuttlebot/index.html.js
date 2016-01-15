module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/scuttlebot',
    content: gen.readMD('README.md')
  })
}