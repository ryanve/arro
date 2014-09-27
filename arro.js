/*!
 * arro 0.1.0+201409271757
 * https://github.com/ryanve/arro
 * MIT License (c) 2014 Ryan Van Etten
 */
!function(win) {
  var uri, doc = win.document, loc = win.location, html = doc.documentElement
  if (!win.addEventListener || !doc.querySelector) return
  win.addEventListener('keydown', function(e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
    // Test for overflow-x to prevent breaking keyboard scrolling
    if (html.scrollWidth > html.offsetWidth) return
    var dest, curr, a, code = e.keyCode
    if (37 == code) a = doc.querySelector('[rel="prev"]')
    if (39 == code) a = doc.querySelector('[rel="next"]')
    if (!a || !a.href || a.href === loc.href) return
    if (!uri) uri = /^(\w+:)\/\/([\w.-]*)/
    if (!(dest = a.href.match(uri)) || !(curr = loc.href.match(uri))) return
    // Ensure the new URI is the same protocol and host as the current page
    if (dest[1] !== curr[1] || dest[2] !== curr[2]) return
    e.preventDefault()
    loc.href = a.href
  }, false)
}(window);