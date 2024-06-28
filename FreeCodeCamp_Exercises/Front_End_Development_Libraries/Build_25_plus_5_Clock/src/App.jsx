import { useState, useEffect, useRef } from "react";
import Clock from "./components/freecodecamp";

function App() {
  const [breakLengthNumber, setBreakLengthNumber] = useState(5);
  const [sessionLengthNumber, setseSionLengthNumber] = useState(25);
  const [play, setPlay] = useState(false);
  const [timingType, setTimingType] = useState("SESSION");
  const [timeLeft, setTimeLeft] = useState(1500);

  const audio = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (play) {
      timeoutRef.current = setTimeout(() => {
        setTimeLeft((prevTimeLeft) => {
          if(prevTimeLeft === 0){
            if (timingType === "SESSION") {
              audio.current.play();
              setTimingType("BREAK");
              return breakLengthNumber * 60
            } else {
              audio.current.pause();
              audio.current.currentTime = 0
              setTimingType("SESSION");
                return sessionLengthNumber * 60
            }
          } else {
            return prevTimeLeft -1
          }
        })
      }, 1000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [play, timeLeft, timingType, breakLengthNumber, sessionLengthNumber])

  //  handlePlay play
  const handlePlay = () => {
  setPlay((prevPlay) => !prevPlay)
}

// handleReset
const handleReset = () => {
  clearTimeout(timeoutRef.current);
  setPlay(false)
  setTimeLeft(1500)
  setBreakLengthNumber(5)
  setseSionLengthNumber(25)
  setTimingType("SESSION");
  if (audio.current) {
    audio.current.pause();
    audio.current.currentTime = 0
  }
}

  //  title
  const title = timingType === "SESSION" ? "Session" : "Break";
  
  //  BREAK LENGTH
  const handleBreakIncrement = () => {
    if (breakLengthNumber < 60) {
      setBreakLengthNumber(breakLengthNumber + 1);
    } else {
      console.log("You arrived to 60 of time 🕗 breakLengthNumber");
    }
  };

  const handleBreakDecrement = () => {
    if (breakLengthNumber > 1) {
      setBreakLengthNumber(breakLengthNumber - 1);
    } else {
      console.log("You less to 1 of time 🕗 breakLengthNumber");
    }
  };

  //  SESSION LENGTH
  const handleSessionIncrement = () => {
    if (sessionLengthNumber < 60) {
      setseSionLengthNumber(sessionLengthNumber + 1);
      if(!play){
        setTimeLeft((sessionLengthNumber + 1) * 60)
      }
    } else {
      console.log("You arrived to 60 of time 🕗 sessionLengthNumber");
    }
  };
  
  const handleSessionDrecrement = () => {
    if (sessionLengthNumber > 1) {
      setseSionLengthNumber(sessionLengthNumber - 1);
      if(!play){
        setTimeLeft((sessionLengthNumber - 1) * 60)
      }
    } else {
      console.log("You less to 1 of time 🕗 sessionLengthNumber");
    }
  };


  //  timeLeft
  const timeFormater = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return (
    <>
      <Clock
        // BREAK LENGTH
        breakLengthNumber={breakLengthNumber}
        handleBreakIncrement={handleBreakIncrement}
        handleBreakDecrement={handleBreakDecrement}
        // SESSION LENGTH
        sessionLengthNumber={sessionLengthNumber}
        handleSessionIncrement={handleSessionIncrement}
        handleSessionDrecrement={handleSessionDrecrement}
        // Title
        title={title}
        // SESSION
        timeLeft={timeFormater()}
        // handlePlay
        handlePlay={handlePlay}
        // handleReset
        handleReset={handleReset}
        // Audio
        idBeed={"beep"}
        audioRef={audio}
      />
    </>
  );
}

export default App;
