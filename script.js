let h1 = document.querySelector('.h1 h1')
let h3 = document.querySelector('.h1 h3')
let a1 = document.querySelector('.a1')
let box1 = document.querySelector('.box')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')

h1.innerHTML = '<h1 style="color: red;">GOOD</h1>'

document.querySelector('.h1 h2').innerHTML = 'very bed'
h3.textContent = 'cool!'

let input = document.querySelector('.main-container input')
let button = document.querySelector('#b1')
let button2 = document.querySelector('#b2')

button.addEventListener('click', event => {
    box1.classList.remove('blue')
    box1.classList.add('red')
    input.setAttribute('value', 'olololo')
    button.textContent = 'RED'
    h3.textContent = input.value
} )
button2.addEventListener('click', event => {
    box1.classList.add('blue')
    
    button2.textContent = 'blue'
    h3.textContent = input.value
} )
p1.addEventListener('mouseenter', function (){
    this.style.color='yellow'
})

p2.addEventListener('mouseenter', q => {
    p2.classList.add('green')
})
p1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
})
p2.addEventListener('mouseleave', q => {
    p2.classList.remove('green')
})


console.log(input.attributes);