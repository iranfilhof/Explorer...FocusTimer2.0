import { buttonStop } from "./elements.js"
import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  buttonPlay,
  buttonStop
}) {

  let minutes

  function controlsHide() {
    buttonPlay.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut)
  }

  function timeAddition() {
   minutes = prompt('Quantos minutos você deseja inserir?')
   minutesDisplay.innerText = String(minutes).padStart(2, "0")
  }

  function timeSubtraction() {
    minutes = prompt('Quantos minutos você deseja subtrair?')
    minutesDisplay.textContent = minutesDisplay.textContent - String(minutes).padStart(2, "0")
  
  }
  function timeIsOver() {
    minutesDisplay.innerText = "00"
    secondsDisplay.innerText = "00"
  }

  function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.innerText)
    let minutes = Number(minutesDisplay.innerText)
    let isFinished = minutes <= 0 && seconds <= 0

    minutesDisplay.innerText = String(minutes).padStart(2, "0")
    
    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.innerText = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.innerText = String(seconds - 1).padStart(2, "0")
    
    if(isFinished) {
      Sounds().timeEnd()
      timeIsOver()
      controlsHide()
      return
    }

    countdown()

  }, 1000)}

  return {
    countdown,
    pauseTimer,
    timeAddition,
    timeSubtraction,
    controlsHide
  }
}