let h1 = document.querySelector('.h1 h1')
let h3 = document.querySelector('.h1 h3')
let a1 = document.querySelector('.a1')
let box1 = document.querySelector('.box')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let link = document.querySelector('.google')
let bigBox = document.querySelectorAll('.bigBox')

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
    this.style.backgroundColor = 'black'
})

p2.addEventListener('mouseenter', q => {
    p2.classList.add('green')
})
p1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})
p2.addEventListener('mouseleave', q => {
    p2.classList.remove('green')
})


console.log(input.attributes);

for (let i = 0; i<bigBox.length; i++){
    bigBox[i].addEventListener('click', function(event){
        event.stopPropagation()
        console.log(this.getAttribute('id'));
    })
}

link.addEventListener('click', changeLink)

function changeLink(event){
     event.preventDefault()
    // event.target.href = 'https://google.com'
    // event.target.href = 'https://instagram.com'
    console.log(event);
    let mybox = bigBox[0]

    // if (mybox.style.display === 'none'){
    //     mybox.style.display = 'flex'
    // } else {
    //     mybox.style.display = 'none'
    // } то шо нижче це то саме)
    mybox.style.display = mybox.style.display === 'none'
    ? 'flex'
    : 'none'
}

document.querySelector('.text').addEventListener('click', function(event){
    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p'){
        event.target.style.color = 'blue'
    }

    if (event.target.classList.contains('color')){
        event.target.style.color = 'green'
    }
})


let objArr = [
    {name: 'Vasya', age: 30},
    {name: 'Halya', age: 26},
    {name: 'Ruslan', age: 22},
    {name: 'Andriana', age: 22}
]

// let findAge = prompt('input age')

// let foundPerson = objArr.find(function(person){
//     return person.age === findAge
// })

// console.log(foundPerson);

let oldArray = [1,2,3,4,5,6,7,8,9].filter(i => {
    return i % 2 !== 0
})

console.log(oldArray);
