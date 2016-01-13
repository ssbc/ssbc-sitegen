module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Documentation - Secure Scuttlebutt' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs' }) }
      <div id="content">
        ${ gen.readMD('README.md') }
      </div>
    </body>
  </html>`
}