module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Introduction to Using Scuttlebot - Documentation - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/docs/intro-to-using-sbot.html' }) }
      <div id="content">
        ${ gen.readMD('intro-to-using-sbot.md') }
      </div>
    </body>
  </html>`
}