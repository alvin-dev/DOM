
const div = document.createElement('div')

div.innerHTML = 'olá !!'

const body = document.querySelector('body')
const header = document.querySelector('header')

body.insertBefore(div, header.nextElementSibling)

body.insertBefore(div, header.nextElementSibling)