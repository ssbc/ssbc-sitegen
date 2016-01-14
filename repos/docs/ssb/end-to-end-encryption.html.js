module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'End-to-end Encryption - SSB - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/ssb/end-to-end-encryption.html' }) }
      <div id="content">
        ${ gen.readMD('ssb/end-to-end-encryption.md') }
      </div>
    </body>
  </html>`
}