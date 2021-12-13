const changeClass = document.querySelector('header')

// add class
changeClass.classList.add('txt-color', 'bg-color')

// remove class
changeClass.classList.remove('txt-color')

// toggle class
function toggleClass() {
  changeClass.classList.toggle('txt-color')
}

const button = document.querySelector('button')
button.addEventListener('click', toggleClass)