window.onbeforeunload = function() { window.scrollTo(0, 0); }

// initialize AOS (Animate On Scroll)
AOS.init({ 
  duration: 800,
  offset: 100,
  disable: 'mobile'
});

var book_cover = document.getElementById('coverBtn')
var body = document.getElementsByTagName('body')[0]
var container = document.getElementById('container')

book_cover.addEventListener('change', function() {
  if (this.checked) {
    container.style.opacity = '100%'
    body.style.overflowY = 'scroll'
  } else {
    container.style.opacity = '0%'
    body.style.overflowY = 'hidden'
    window.scrollTo(0, 0);
  }
})
