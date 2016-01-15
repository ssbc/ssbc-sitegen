module.exports = function* (gen) {
  yield gen.partials.page({
    title: 'Home - SSBC',
    section: '/',
    path: '/',
    content: gen.readMD('README.md')
  })
}