module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'SSB-Config - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/ssb-config.html' }) }
      <div id="content">
        ${ gen.readMD('api/ssb-config.md') }
      </div>
    </body>
  </html>`
}