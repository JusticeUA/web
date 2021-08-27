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

// console.log(oldArray);

let array1 = '1,2,3,4,5,6,7,8,9'
let array2 = array1.split(',')
console.log(array2);
array2.splice((array1.length),0,'10','11') 
 console.log(array2);

// let newArray = array1.concat()
// console.log(newArray);

let arrayToInt = array2.map(i => {
    return i * 2
})
console.log(arrayToInt);

let v1 = [1,2,3,4,5,6,7,8,9,11,13,15,17,20].filter(i => {
    
    return i % 2 !== 0
}).map(i=>{
    return i * 2 
})
console.log(v1);

//local

document.querySelector('.local button').addEventListener('click', event => {
    let value = document.querySelector('.local input').value

    let localObj = {
        text: value
    }

    localStorage.setItem('headerText', JSON.stringify(localObj))
})

document.addEventListener('DOMContentLoaded', function() {
    let localObj = {}
    try{
        let localObj = JSON.parse(localStorage.getItem('headerText'))
    } catch(e){
        
    }

   

    if (localObj && localObj.text && localObj.text.trim()){
        document.querySelector(".local h1").textContent = localObj.text
    }
   
})


function Car (name, year, color) {
    this.name = name
    this.year = year
    this.color = color
}

let car1 = new Car("ford", 2009, "red")    
let car2 = new Car("opel", 2019, "green")    
let car3 = new Car("bmw", 2007, "black") 

Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year
}

console.log(car1);
console.log(car2);
console.log(car3);
//////////////////////

let daewoo = Object.create({
    calculateDistancePerYear: function(){
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
}, {
    name: {
        value: "Daewoo",
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: "Lanos",
        enumerable: true,
        writable: false,
        confirugable: false
    },
    year: {
        value: 2006,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 260000,
        enumerable: true,
        writable: true,
        cpnfirugable: false
    },
    age: {
        enumerable: true,
        get: function(){
            console.log("получем вік")
            return new Date().getFullYear() - this.year
        },
        set: function(){
            console.log("встановлюємо значення");
        }
    }
})

console.log(daewoo);

for (let key in daewoo) {
    if (daewoo.hasOwnProperty(key)){
        console.log(key, daewoo[key]);
    }
    
}