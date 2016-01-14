module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Install - Scuttlebot - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/sbot/install.html' }) }
      <div id="content">
        ${ gen.readMD('sbot/install.md') }
      </div>
    </body>
  </html>`
}