import {
  buttonSoundTree,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  treeSlider,
  rainSlider,
  shopSlider,
  fireSlider
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const soundBackgroundTree = new Audio('sounds/Floresta.wav')
  const soundBackgroundRain = new Audio('sounds/Chuva.wav')
  const soundBackgroundCoffeeShop = new Audio('sounds/Cafeteria.wav')
  const soundBackgroundFireplace = new Audio('sounds/Lareira.wav')

  soundBackgroundTree.loop = true
  soundBackgroundRain.loop = true
  soundBackgroundCoffeeShop.loop = true
  soundBackgroundFireplace.loop = true

  function buttonPress() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function soundTree() {
    buttonSoundTree.classList.contains('selected') ? soundBackgroundTree.play() : soundBackgroundTree.pause()
  }
  function soundRain() {
    soundBackgroundRain.play()

    if(!buttonSoundRain.classList.contains('selected')) {
      soundBackgroundRain.pause()
    }
  }

  function soundCoffeeShop() {
    soundBackgroundCoffeeShop.play()

    if(!buttonSoundCoffeeShop.classList.contains('selected')) {
      soundBackgroundCoffeeShop.pause()
    }
  }

  function soundFireplace() {
    soundBackgroundFireplace.play()

    if(!buttonSoundFireplace.classList.contains('selected')) {
      soundBackgroundFireplace.pause()
    }
  }

  function handleAudioVolume() {
    soundBackgroundTree.volume = treeSlider.value
    soundBackgroundRain.volume = rainSlider.value
    soundBackgroundCoffeeShop.volume = shopSlider.value
    soundBackgroundFireplace.volume = fireSlider.value
  }

  return {
    soundBackgroundTree,
    buttonPress,
    timeEnd,
    soundTree,
    soundRain,
    soundCoffeeShop,
    soundFireplace,
    handleAudioVolume,
  }
}
