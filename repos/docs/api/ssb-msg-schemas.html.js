module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'SSB-Msg-Schemas - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/ssb-msg-schemas.html' }) }
      <div id="content">
        ${ gen.readMD('api/ssb-msg-schemas.md') }
      </div>
    </body>
  </html>`
}