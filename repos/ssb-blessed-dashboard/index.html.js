module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Blessed Dashboard - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/ssb-blessed-dashboard',
    content: gen.readMD('README.md')
  })
}