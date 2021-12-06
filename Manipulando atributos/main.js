//add id
const setHeaderId = document.querySelector('header').setAttribute('id', 'header')

// add class
const setHeaderClass = document.querySelector('header').setAttribute('class', 'header-top')

// remove id
const removeId = document.querySelector('header').removeAttribute('id')

const header = document.querySelector('header')

console.log(header);

//pega um atributo
console.log(header.getAttribute('class'));