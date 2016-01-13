module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Learn about Secure Scuttlebutt - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/learn.html' }) }
      <div id="content">
        ${ gen.readMD('learn.md') }
      </div>
    </body>
  </html>`
}