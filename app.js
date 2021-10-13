 const startBtn=document.querySelector('#start')
 const screens=document.querySelectorAll('.screen')
 const timeList=document.querySelector('#time-list')
 const colors=['#ba2222','#40E0D0','#dbde26','#B0C4DE','#4682B4','#10e565']
 let time=0
 let score=0
 timeEl=document.querySelector('#time')
 const board=document.querySelector('#board')

 startBtn.addEventListener('click',(event)=>{
     event.preventDefault()
     screens[0].classList.add('up')
 })

 board.addEventListener('click', event=>{
     if(event.target.classList.contains('circle')){
         score++
         //const color=getRandomColor()
         //event.target.style.backgroundColor='blue'
         event.target.remove()
         createRandomCircle()}
 })

 //делегирование событий
 //event.target это тот элемент по которому мы кликнули
 //если у event target есть класс time-btn то это кнопка
 timeList.addEventListener('click', event =>
 {
     if (event.target.classList.contains('time-btn')){
         // console.log(event.target)
          time=parseInt(event.target.getAttribute('data-time'))
          startGame()
     }
 })

  function startGame(){

       screens[1].classList.add('up')
      createRandomCircle()
      setInterval(decreaseTime, 1000)
      setTime(time)
}

function decreaseTime(){
    if (time===0){
        finishGame()
    }else {
        let current=--time
        if (current<10){
            current=`0${current}`
        }
        setTime(current)
    }

}

function setTime(value){
    timeEl.innerHTML=`00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML=`<h1>Ваш счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle(){
    const color=getRandomColor()
    const circle=document.createElement('div')
    circle.style.Color=color
    const size=getRandomNumber(10,60)
    const {width,height}=board.getBoundingClientRect()
    const x=getRandomNumber(0, width-size)
    const y=getRandomNumber(0, height-size)
    circle.classList.add('circle')
    circle.style.backgroundColor=color
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`
    circle.style.left=`${x}px`
    board.append(circle)
}

function  getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}



 function getRandomColor(){
     const index=Math.floor(Math.random()*colors.length)
     return colors[index]
 }

 function setColor(element){
     const color=getRandomColor()
     element.style.backgroundColor=color
     element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
 }