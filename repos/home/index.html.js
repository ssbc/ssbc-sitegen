module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Home - SSBC' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/' }) }
      <div id="content">
        ${ gen.readMD('README.md') }
      </div>
    </body>
  </html>`
}