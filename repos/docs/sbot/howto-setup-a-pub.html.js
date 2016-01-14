module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'HOWTO: Setup a Pub - Scuttlebot - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/sbot/howto-setup-a-pub.html' }) }
      <div id="content">
        ${ gen.readMD('sbot/howto-setup-a-pub.md') }
      </div>
    </body>
  </html>`
}