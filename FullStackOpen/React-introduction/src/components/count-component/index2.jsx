import { useState } from "react"

const CounterTwo = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return(
    <div>
      <h3>Counter con eventos con funcion</h3>
      <div>
        <p>Counter {counter}</p>
        <button onClick={increaseByOne}>Increase</button>
        <button onClick={setToZero}>Reset</button>
        <button onClick={decreaseByOne}>Decrease</button>
      </div>
    </div>
  )

}

export default CounterTwo