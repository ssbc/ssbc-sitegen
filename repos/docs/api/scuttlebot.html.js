module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/api/scuttlebot.html' }) }
      <div id="content">
        ${ gen.readMD('api/scuttlebot.md') }
      </div>
    </body>
  </html>`
}