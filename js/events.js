import {
  buttonLightTheme,
  buttonDarkTheme,
  buttonPlay,
  buttonStop,
  buttonAddition,
  buttonSubtraction,
  buttonSoundTree,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  treeSlider,
  rainSlider,
  shopSlider,
  fireSlider,
} from "./elements.js"

export default function({sound, timer}) {

  function toggleDarkMode() {
      document.body.classList.toggle('dark-mode')
  }

  buttonLightTheme.addEventListener('click', function() {
    sound.buttonPress()
    buttonLightTheme.classList.toggle('hide')
    buttonDarkTheme.classList.toggle('hide')
    toggleDarkMode()

  })

  buttonDarkTheme.addEventListener('click', function() {
    sound.buttonPress()
    buttonLightTheme.classList.toggle('hide')
    buttonDarkTheme.classList.toggle('hide')
    toggleDarkMode()
    
  })

  buttonPlay.addEventListener('click', function() {
    sound.buttonPress()
    timer.countdown()
    timer.controlsHide()
  })

  buttonStop.addEventListener('click', function() {
    sound.buttonPress()
    timer.pauseTimer()
    timer.controlsHide()
  })

  buttonAddition.addEventListener('click', function() {
    sound.buttonPress()
    timer.timeAddition()
  })

  buttonSubtraction.addEventListener('click', function() {
    sound.buttonPress()
    timer.timeSubtraction()
  })

  buttonSoundTree.addEventListener('click', function() {
    buttonSoundTree.classList.toggle('selected')
    
    sound.soundTree()
  })
  
  buttonSoundRain.addEventListener('click', function() {
    buttonSoundRain.classList.toggle('selected')
    sound.soundRain()
  })
  
  buttonSoundCoffeeShop.addEventListener('click', function() {
    buttonSoundCoffeeShop.classList.toggle('selected')
    sound.soundCoffeeShop()
  })
  
  buttonSoundFireplace.addEventListener('click', function() {
    buttonSoundFireplace.classList.toggle('selected')
    sound.soundFireplace()
  })

  treeSlider.addEventListener('click', function() {
    sound.soundTree()
  })

  treeSlider.addEventListener('input', sound.handleAudioVolume)
  rainSlider.addEventListener('input', sound.handleAudioVolume)
  shopSlider.addEventListener('input', sound.handleAudioVolume)
  fireSlider.addEventListener('input', sound.handleAudioVolume)

}