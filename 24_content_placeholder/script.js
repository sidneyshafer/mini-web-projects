const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
   header.innerHTML = '<img src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D" alt="desktop computer image">'
   title.innerHTML = 'Lorem ipsum dolor sit amet.'
   excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cum.'
   profile_img.innerHTML = '<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile image">'
   name.innerHTML = 'Jane Doe'
   date.innerHTML = 'Dec 30, 2020'

   animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
   animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}