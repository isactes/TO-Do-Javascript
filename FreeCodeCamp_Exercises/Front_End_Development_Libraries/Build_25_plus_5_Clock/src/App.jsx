import { useState } from "react";
import Clock from "./components/freecodecamp";

function App() {

  const [ breakLengthNumber, setBreakLengthNumber ] = useState(5)
  const [ sessionLengthNumber, setseSionLengthNumber ] = useState(25)
  const [ play, setPlay ] = useState(false)
  const [ timingType, setTimingType ] = useState("SESSION")


  //  title
  const title = timingType === "SESSION" ? "Session" : "Break"
  //  BREAK LENGTH
  const handleBreakIncrement = () => {
    if (breakLengthNumber < 60) {
      setBreakLengthNumber(breakLengthNumber + 1)
    } else {
      console.log("You arrived to 60 of time 🕗 breakLengthNumber")
    }
  }

  const handleBreakDecrement = () => {
    if (breakLengthNumber > 1) {
      setBreakLengthNumber(breakLengthNumber - 1)
    } else {
      console.log("You less to 1 of time 🕗 breakLengthNumber")
    }
  }

  //  SESSION LENGTH
  const handleSessionIncrement = () => {
    if(sessionLengthNumber < 60) {
      setseSionLengthNumber(sessionLengthNumber + 1)
    } else {
      console.log("You arrived to 60 of time 🕗 sessionLengthNumber")
    }
  }

  const handleSessionDrecrement = () => {
    if (sessionLengthNumber > 1) {
      setseSionLengthNumber(sessionLengthNumber -  1)
    } else {
      console.log("You less to 1 of time 🕗 sessionLengthNumber")
    }
  }





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
    // SESSION
    timeLeft={"25:00"}
    // Title
    title={title}
    />
    </>
  );
}

export default App;
