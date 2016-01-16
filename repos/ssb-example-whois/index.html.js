module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Example "Whois" - Scuttlebot - SSBC',
    section: '/scuttlebot',
    path: '/ssb-example-whois',
    content: gen.readMD('README.md')
  })
}