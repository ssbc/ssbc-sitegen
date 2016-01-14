module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Tutorial - Scuttlebot - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/sbot/tutorial.html' }) }
      <div id="content">
        ${ gen.readMD('sbot/tutorial.md') }
      </div>
    </body>
  </html>`
}