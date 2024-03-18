const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const great = document.querySelector('#great')
const amazing = document.querySelector('#amazing')

toggles.forEach(toggle => toggle.addEventListener('change',
(e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
   if(good.checked && great.checked && amazing.checked) {
      if(good === theClickedOne) {
         amazing.checked = false
      }

      if(great === theClickedOne) {
         good.checked = false
      }

      if(amazing === theClickedOne) {
         great.checked = false
      }
   }
}