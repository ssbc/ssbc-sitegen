module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'SSB-Msgs - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/ssb-msgs.html' }) }
      <div id="content">
        ${ gen.readMD('api/ssb-msgs.md') }
      </div>
    </body>
  </html>`
}