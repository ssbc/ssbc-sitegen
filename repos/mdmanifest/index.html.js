module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'mdmanifest - Documentation - SSBC',
    section: '/docs',
    path: '/mdmanifest',
    content: gen.readMD('README.md')
  })
}