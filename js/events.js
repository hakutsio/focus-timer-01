import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
} from "./elements.js"


export default function ({controls, timer, sound}) {
  buttonPlay.addEventListener('click', function() {
    controls.btnPlay()
    timer.coutDown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', function() {
    controls.btnPause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })
  
  buttonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
  
    if(!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  return {
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    buttonPause,
    buttonPlay
  }
}