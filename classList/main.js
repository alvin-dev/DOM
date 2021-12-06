const changeClass = document.querySelector('header')

changeClass.classList.add('txt-color', 'bg-color')

changeClass.classList.remove('txt-color')

function toggleClass() {
  changeClass.classList.toggle('txt-color')
}
const button = document.querySelector('button')
button.addEventListener('click', toggleClass)