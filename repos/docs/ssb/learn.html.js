module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Learn about Secure Scuttlebutt - SSB - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/ssb/learn.html' }) }
      <div id="content">
        ${ gen.readMD('ssb/learn.md') }
      </div>
    </body>
  </html>`
}