/* querySelector()
   - allows you to select anything from html document
   - ex: ('h1') or ('.')
USE querySelectorAll:
   - targets all (not just one element)
   - puts it in a node list (similiar to an array) */
const panels = document.querySelectorAll('.panel')

/* Arrow function
   - pass in what you want to use for iteration (panel) */
panels.forEach((panel) => {
   panel.addEventListener('click', () => {
      removeActiveClasses() /* function */
      panel.classList.add('active')
   })
})

function removeActiveClasses() {
   panels.forEach((panel) => {
      panel.classList.remove('active')
   })
}