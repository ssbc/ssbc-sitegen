module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Scuttlebot - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/scuttlebot' }) }
      <div id="content">
        ${ gen.readMD('README.md') }
      </div>
    </body>
  </html>`
}