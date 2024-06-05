import { useState } from "react";
import Clock from "./components/freecodecamp";

function App() {
  const [breakLengthNumber, setBreakLengthNumber] = useState(5);
  const [sessionLengthNumber, setseSionLengthNumber] = useState(25);
  const [play, setPlay] = useState(false);
  const [timingType, setTimingType] = useState("SESSION");
  const [timeLeft, setTimeLeft] = useState(1500);

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
    } else {
      console.log("You arrived to 60 of time 🕗 sessionLengthNumber");
    }
  };

  const handleSessionDrecrement = () => {
    if (sessionLengthNumber > 1) {
      setseSionLengthNumber(sessionLengthNumber - 1);
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
        handleReset={() => {}}
      />
    </>
  );
}

export default App;
