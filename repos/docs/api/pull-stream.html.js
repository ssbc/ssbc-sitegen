module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Pull Stream - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/pull-stream.html' }) }
      <div id="content">
        ${ gen.readMD('api/pull-stream.md') }
      </div>
    </body>
  </html>`
}