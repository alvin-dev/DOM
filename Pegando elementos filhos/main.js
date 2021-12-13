// navegando pelos elementos filhos

const element = document.querySelector('body')

console.log(element.childNodes);

console.log(element.children);

// leva em consideração os espaços vazios
console.log(element.firstChild);

// não leva em consideração os espaços vazios
console.log(element.firstElementChild);

console.log(element.lastChild);

console.log(element.lastElementChild);