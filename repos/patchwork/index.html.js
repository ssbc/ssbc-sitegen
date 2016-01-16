module.exports = function* (gen) {
  yield `<html>
    ${ gen.partials.head({ title: 'Patchwork - SSBC' }) }
    <body>
      <link rel="stylesheet" href="/patchwork.css">
      ${ gen.partials.topnav({ current: '/patchwork' }) }
      <header>
        <h1>${ rainbow(gen, 'patchwork') } alpha</h1>
        <div id="about">
          <span>End-to-end encrypted mail.</span>
          <span>Public social feeds.</span>            
          <span>No central servers.</span>
          <span>Sync over WiFi.</span>
          <span>Offline operation.</span>
          <span>GPL licensed.</span>
        </div>
      </header>
      <div id="layout">
        <div id="content">
          <section>${ gen.readMD('docs/install.md') }</section>
          <section>${ gen.readMD('docs/help-faq.md') }</section>
        </div>
      </div>
    </body>
  </html>`
}

function rainbow (gen, str) {
  return gen.tmpl(function *() {
    yield `<span class="rainbow">`
    for (var i=0; i < str.length; i++)
      yield `<span>${str.charAt(i)}</span>`
    yield `</span>`
  })
}