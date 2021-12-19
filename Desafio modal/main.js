
const button = document.querySelector('#openModal')

const modal = document.querySelector('.modal-wrapper')

button.addEventListener('click', () => {modal.classList.remove('invisible')})

document.addEventListener('keydown', (event) => {
  // console.log(event) // ver teclas
  const theEscKey = event.key === 'Escape'

  if(theEscKey){
    modal.classList.add('invisible')
  }
  
})

