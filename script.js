window.onbeforeunload = function() { window.scrollTo(0, 0); }

// initialize AOS (Animate On Scroll)
AOS.init({ 
  duration: 600,
  offset: 0
});

var book_cover = document.getElementById('coverBtn')
var body = document.getElementsByTagName('body')[0]
var plot = document.getElementById('plot')
var characters = document.getElementById('characters')
var settings = document.getElementById('settings')
var likesDislikes = document.getElementById('likesDislikes')

book_cover.addEventListener('change', function() {
  if (this.checked) {
    plot.style.opacity = "100%"
    characters.style.opacity = "100%"
    settings.style.opacity = "100%"
    likesDislikes.style.opacity = "100%"
    body.style.overflowY = 'scroll'
  } else {
    plot.style.opacity = "0%"
    characters.style.opacity = "0%"
    settings.style.opacity = "0%"
    likesDislikes.style.opacity = "0%"
    body.style.overflowY = 'hidden'
    window.scrollTo(0, 0);
  }
})
