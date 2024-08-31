const startButton = document.querySelector("#start")
const timings = document.querySelector(".timer")
let seconds = 0
let min = 0
let hour = 0
function startStopwatch(){
     seconds++
     if (seconds>59) {
          seconds=0
          min++
          if(min > 59){
               min=0
               hour++
          }
     }
     timings.textContent = `${hour} : ${min} : ${seconds}`
}
startButton.addEventListener("click", function()
{
     let info = setInterval(startStopwatch, 1000);
     console.log(info)
     let final1 = seconds<10?`0${seconds}`:seconds
     let final2 = min<10?`0${min}`: min
     let final3 = hour<10?`0${hour}`: hour
     timings.textContent = `${final3} : ${final2} : ${final1}`
})


//==============================================================================


const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const timings = document.querySelector(".timer")
let seconds = 0
let min = 0
let hour = 0

let info = null
function startStopwatch(){
     seconds++
     if (seconds>59) {
          seconds=0
          min++
          if(min > 59){
               min=0
               hour++
          }
     }
   let final1 = seconds<10?`0${seconds}`:seconds
     let final2 = min<10?`0${min}`: min
     let final3 = hour<10?`0${hour}`: hour
     timings.textContent = `${final3} : ${final2} : ${final1}`
//      timings.textContent = `${hour} : ${min} : ${seconds}`
}
startButton.addEventListener("click", function()
{
     info = setInterval(startStopwatch, 1000);
     console.log(info)
    
})
stopButton.addEventListener("click", function(){
  clearInterval(info)
})