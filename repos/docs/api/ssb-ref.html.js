module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'SSB-Ref - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/ssb-ref.html' }) }
      <div id="content">
        ${ gen.readMD('api/ssb-ref.md') }
      </div>
    </body>
  </html>`
}