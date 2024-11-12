import { useState } from "react"

const CountComponent = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Count funtion</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  )
}

export default CountComponent