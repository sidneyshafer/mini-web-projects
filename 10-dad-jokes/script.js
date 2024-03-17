const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING .then
function generateJoke() {
   const config = {
      headers: {
         // Key:      Value:
         'Accept': 'application/json'
      }
   }

   fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
      jokeEl.innerHTML = data.joke
   })
}
// ----------------------------------

// USING ASYNC/AWAIT
/* Easier Way to right fetch (async await):
   - whenever you use 'await' you must call the function 'async' */
async function generateJoke() {
   const config = {
      headers: {
         // Key:      Value:
         'Accept': 'application/json'
      }
   }

   const res = await fetch('https://icanhazdadjoke.com', config)

   const data = await res.json()

   jokeEl.innerHTML = data.joke
}