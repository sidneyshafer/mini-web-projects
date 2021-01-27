const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
   search.classList.toggle('active') // toggle() --adds and removes class 
   input.focus() // focuses on input (adds line to start typing)
})