module.exports = function* () {
  var blue1 = '#0091FF'
  var blue1Dark = '#0051AA'
  var black1 = '#272822'
  var green1 = '#a6e22e'
  var green2 = '#8EBB32'
  var green2Dark = '#76923B'
  yield `
  body {
    display: flex;
    color: #555;
  }
  body:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: ${black1};
    z-index: -1;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    color: #000;
  }
  h1 {
    font-size: 3em;
    font-weight: normal;
    margin: 0px 0 30px 0;
    color: ${green1};
  }
  h2 {
    font-size: 2.25em;
    border-bottom: 1px solid #ddd;
  }
  h3 {
    font-size: 1.75em;
  }
  h4 {
    font-size: 1.25em;
  }
  h5 {
    font-size: 1em;
  }
  p, ul, ol {
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  #leftnav {
    flex: 0 0 200px;
    padding: 90px 20px;
  }
  .leftnav-item {  
    margin-bottom: 12px;
    padding-top: 12px;
    font-size: 21px;
    font-weight: 300;
  }
  .leftnav-subitems .leftnav-item {
    margin-left: 18px;
    font-size: 18px;
    padding: 0;
  }
  .leftnav-item a {
    color: #555;
    text-decoration: none;
  }
  .leftnav-item a:hover {
    color: #000;
  }
  .leftnav-item.selected a {
    color: ${green2};
  }
  .leftnav-item.selected a:hover {
    color: ${green2Dark};
  }
  #content {
    flex: 1;
    padding: 6px 20px;
  }
  `
}