module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'SSB-Keys - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/ssb-keys.html' }) }
      <div id="content">
        ${ gen.readMD('api/ssb-keys.md') }
      </div>
    </body>
  </html>`
}