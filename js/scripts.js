import Sound from "./sounds.js"
import Event from "./events.js"
import Timer from "./timer.js"
import { 
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  buttonPlay,
  buttonStop
} from "./elements.js"

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  buttonPlay,
  buttonStop
})

Event({sound, timer})