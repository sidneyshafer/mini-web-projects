const textEl = document.getElementById('text')
const text = 'Loading...'
let idx = 0
let speed = 300 / 1

writeText()

function writeText() {
   textEl.innerText = text.slice(0, idx)

   idx++

   if(idx > text.length) {
      idx = 0
   }

   setTimeout(writeText, speed)
}