module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Example Private Message - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/ssb-example-pm',
    content: gen.readMD('README.md')
  })
}