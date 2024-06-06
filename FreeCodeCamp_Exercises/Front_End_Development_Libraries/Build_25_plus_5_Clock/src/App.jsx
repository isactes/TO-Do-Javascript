import { useState, useEffect } from "react";
import Clock from "./components/freecodecamp";

function App() {
  const [breakLengthNumber, setBreakLengthNumber] = useState(5);
  const [sessionLengthNumber, setseSionLengthNumber] = useState(25);
  const [play, setPlay] = useState(false);
  const [timingType, setTimingType] = useState("SESSION");
  const [timeLeft, setTimeLeft] = useState(1500);

  // const audio = "beed"

  //  handlePlay play
  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

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
      setTimeLeft(timeLeft + 60)
    } else {
      console.log("You arrived to 60 of time 🕗 sessionLengthNumber");
    }
  };
  
  const handleSessionDrecrement = () => {
    if (sessionLengthNumber > 1) {
      setseSionLengthNumber(sessionLengthNumber - 1);
      setTimeLeft(timeLeft - 60)
    } else {
      console.log("You less to 1 of time 🕗 sessionLengthNumber");
    }
  };

  //  timeLeft
  const timeFormater = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formatedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formatedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${formatedMinutes}:${formatedSeconds}`;
  };

  const handlePlay = () => {
    clearTimeout(timeout);
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  const resetTimer =() => {
    // const audio = document.getElementById("beed")
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLengthNumber * 60)
      setTimingType("BREAK")
      // audio.play()
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLengthNumber * 60)
      setTimingType("SESSION")
      // audio.pause()
      // audio.currenTime = 0
    }

  }

  const clock = () => {
    if (play) {
      timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false)
    setTimeLeft(1500)
    setBreakLengthNumber(5)
    setseSionLengthNumber(25)
    setTimingType("SESSION")
    // const audio = document.getElementById("beed")
    // audio.pause()
    // audio.currenTime = 0
  }

  useEffect(() => {
    clock()
  }, [play, timeLeft, timeout])


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
        // handlePuase
        handlePuase={() => {}}
        // handleReset
        handleReset={handleReset}
        // Audio
        // idBeed={audio}
      />
    </>
  );
}

export default App;
