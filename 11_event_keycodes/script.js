const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
   insert.innerHTML = `
   <div class="key">
         ${event.key === ' ' ? 'Space' : event.key}
         <small>Event Key</small>
      </div>

      <div class="key">
         ${event.keyCode}
         <small>Event Key Code</small>
      </div>

      <div class="key">
         ${event.code}
         <small>Event Code</small>
      </div>
   `
})

/* ${e.key === ' ' ? 'Space' : e.key}
   - if the key is = to ' ' then output 'Space' else output the key */