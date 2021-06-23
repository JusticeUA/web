const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList =document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board =document.querySelector('#board')
const colors = ['red', '#008080', 'yellow', 'Wheat', 'orange', 'LawnGreen', 'pink', 'silver', 'gold','broun', 'purple', 'FireBrick','HotPink','LightSalmon','Chocolate','Gray']
const live = document.querySelector('#live')
 const reload = document.querySelector('#reload')

let lives = 3
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
   if (event.target.classList.contains('time-btn'))  {
      time = parseInt(event.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
   }
})

//  reload.addEventListener('click', event => {
    
//     screens[1].classList.remove('up')
//      screens[2].classList.add('down')
//     //  screens[0].classList.remove('up')
//     //  screens[1].classList.add('down')
    
//  })

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
       createRandomCircle() 
    } else mistake()
})



function startGame() {
    live.innerHTML = `${lives}`
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if (time ===0 ){
        finishGame()
    } else {
        let current = --time
        if (current <10){
         current = `0${current}`
        }
     setTime(current)
    }
    
}

function setTime (value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    board.innerHTML = `<h1>Cчет: <span class="primary"> ${score}</span></h1>`
    reload.innerHTML = '<button id="reload">играть еще(треба доробити=) поки що тільки F5</button>'
    timeEl.parentNode.classList.add('hide')
    live.parentNode.classList.add('hide')
}
function createRandomCircle(){
    
    const circle = document.createElement('div')
    setColor(circle)
    
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.right = `${x}px`

    board.append(circle)
}

function getRandomNumber (min, max){
   return Math.round(Math.random() * (max-min) + min)
}

function setColor (element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    
}

function getRandomColor (){
    return colors[Math.floor(Math.random()* colors.length)]
}

function mistake (){    
    board.style.backgroundColor = '#ff24247c'
    lives--
    live.innerHTML = `${lives}`
    if (lives==0){
        finishGame()
    }
    setTimeout(() => {
        board.style.backgroundColor = '#29323C'
    }, 50);
    
    
    
}

