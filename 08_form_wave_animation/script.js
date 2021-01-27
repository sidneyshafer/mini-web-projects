const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
   label.innerHTML = label.innerText
      // spliting into an array
      .split('')

      // maping it to create each letter with a <span> around it
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)

      // turning it back into a string
      .join('')
})