!function(root) {
  if (typeof document == 'undefined') return console.warn('Open test/index.html to run tests')
  if (![].indexOf || !document.querySelector || !window.addEventListener) return
  
  var common = typeof module != 'undefined' && !!module.exports
  var annex = common ? require('annex') : root.annex
  var cueing = common ? require('cueing') : root.cueing
  var jumps = ['a', 'b', 'c', 'd', 'e']
  var next = document.querySelector('[rel="next"]')
  var prev = document.querySelector('[rel="prev"]')
  var list = document.getElementById('jumps')
  if (!list) throw new Error('Required test markup is missing')
  
  function relate() {
    var hash = location.hash
    if (!hash) location.hash = hash = '#' + jumps[0]
    var current = jumps.indexOf(hash.slice(1))
    if (~current) {
      prev.removeAttribute('hidden')
      next.removeAttribute('hidden')
      prev.setAttribute('href', '#' + cueing.seek(jumps, current, -1))
      next.setAttribute('href', '#' + cueing.seek(jumps, current, 1))
    } else {
      prev.setAttribute('href', '')
      next.setAttribute('href', '')
      prev.setAttribute('hidden', '')
      next.setAttribute('hidden', '')
    }
  }
  
  annex(jumps.map(function(id) {
    return '<li><a href="#%" id="%">%</a>'.replace(/%/g, id)
  }).join('')).appendTo(list)
  relate()
  window.addEventListener('hashchange', relate, false)
}(this);