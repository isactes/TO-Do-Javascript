import { useEffect } from "react";
import Sounds from "../../utilities/Sounds";
import  "./Drums.css"
function SoundDrumds() {

  useEffect(() => {
    handleUseEffect()
  }, [])



const handleUseEffect = () => {
  const useEffectHandle = document.addEventListener('keydown', (event) => {
    console.log('✨✨', event.key)
    handleOnclick(event.key) 
  })

  return useEffectHandle
}

const handleOnclick = (selector) => {
  const audio = document.getElementById(selector)
  if(audio){
    console.log('✨', audio)
    audio.play();
  }else{
    console.error('💀 error')
  }
}

  return(
    <div className="drum-pads">
      {Sounds.map(drum => (
        <button 
        key={drum.src}
        className="drum-pad" 
        id={drum.src}
        onClick={() => handleOnclick(drum.text)}
        >
          {drum.text}
          <audio
          className="clip"
          id={drum.text}
          src={drum.src}
          ></audio>
        </button>
      ))}
    </div>
  )}
 
export  default SoundDrumds