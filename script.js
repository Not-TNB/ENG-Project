AOS.init({
  duration: 800,
  offset: 0
});

window.onbeforeunload = function() {
  history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
}

async function getTime(id, location) {
  document.getElementById(id).innerHTML = new Date().toLocaleString('en-GB', {
    timeZone: location,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }) 
}

function updateLocations() {
  getTime('kyivTime', 'Africa/Cairo') // Kyiv and Cairo have the same timezone :D
  getTime('londonTime', 'Europe/London')
  getTime('parisTime', 'Europe/Paris')
  getTime('nycTime', 'America/New_York')
  getTime('tokyoTime', 'Asia/Tokyo')
  getTime('moscowTime', 'Europe/Moscow')
  getTime('dubaiTime', 'Asia/Dubai')
  getTime('beijingTime', 'Asia/Shanghai') // China only has one timezone so they put shanghai
  getTime('sydneyTime', 'Australia/Sydney')
  getTime('rjTime', 'Brazil/East') // Who the fuck created this naming system
  getTime('cairoTime', 'Africa/Cairo')
}

var today = new Date()
var h = (today.getHours() < 10) ? '0' + today.getHours() : today.getHours()
var m = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes()
var s = (today.getSeconds() < 10) ? '0' + today.getSeconds() : today.getSeconds()
document.getElementById('localTime').innerHTML = h+':'+m+':'+s

document.getElementById('details').innerHTML = today.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]

updateLocations()

var delayH = -3600*(h+6)-60*m
var delayM = -60*(30+m)
var delayS = -30.25-s
document.documentElement.style.setProperty('--delayH', delayH + 's')
document.documentElement.style.setProperty('--delayM', delayM + 's')
document.documentElement.style.setProperty('--delayS', delayS + 's')

setInterval(function() {
  var today = new Date()
  var h = (today.getHours() < 10) ? '0' + today.getHours() : today.getHours()
  var m = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes()
  var s = (today.getSeconds() < 10) ? '0' + today.getSeconds() : today.getSeconds()
  document.getElementById('localTime').innerHTML = h+':'+m+':'+s

  updateLocations()
}, 1)
