
const div = document.createElement('div')

div.innerHTML = 'olá !!'

const header = document.querySelector('header')

header.append(div)

const h1 = document.querySelector('h1')

// comment this
h1.prepend(div)
