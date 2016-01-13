module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Secure Scuttlebutt' }) }
    <body>
      ${ gen.partials.leftnav({ current: '/secure-scuttlebutt' }) }
      <div id="content">
        ${ gen.readMD('README.md') }
      </div>
    </body>
  </html>`
}