module.exports.head = function (opts) {
  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="monokai.css">
    <script src="highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>`
}

module.exports.leftnav = function (opts) {
  function item (href, label) {
    var isSelected = (href == opts.current)
    return `<div class="leftnav-item ${isSelected ? 'selected' : ''}">
      <a href="${href}" title="${label}">${label}</a>
    </div>`
  }

  return `<div id="leftnav">
    ${item('/patchwork', 'Patchwork')}
    ${item('/secure-scuttlebutt', 'Secure Scuttlebutt')}
    <div class="leftnav-subitems">
      ${item('/docs/learn.html', 'Learn about the Protocol')}
    </div>
    ${item('/scuttlebot', 'Scuttlebot')}
    <div class="leftnav-subitems">
      ${item('/docs/intro-to-using-sbot.html', 'Introduction to Using Scuttlebot')}
    </div>
    ${item('/docs', 'Documentation')}
  </div>`
}