window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

var book_cover = document.getElementById('coverBtn')
var body = document.getElementsByTagName("body")[0]
var rest = document.getElementById('rest')

book_cover.addEventListener('change', function() {
  if (this.checked) {
    body.style.overflowY = 'scroll'
    rest.style.display = 'block'
  } else {
    body.style.overflowY = 'hidden'
    window.scrollTo(0, 0);
  }
})