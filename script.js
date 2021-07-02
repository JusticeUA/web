let h1 = document.querySelector('.h1 h1')
let h3 = document.querySelector('.h1 h3')
let a1 = document.querySelector('.a1')

h1.innerHTML = '<h1 style="color: red;">GOOD</h1>'

document.querySelector('.h1 h2').innerHTML = 'very bed'
h3.textContent = 'cool'

let input = document.querySelector('.main-container input')
let button = document.querySelector('.main-container button')

button.addEventListener('click', event => {
    // a1.classList.add = ('red')
    input.setAttribute('value', 'olololo')
} )

console.log(input.attributes);