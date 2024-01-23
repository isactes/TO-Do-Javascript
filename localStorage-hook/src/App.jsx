import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormExample from './components/formsExample'
import FomrsExample2 from './components/formsExample2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-evenly items-center gap-x-1.5 gap-y-1.5">
      <h1>LocalStorage with React Hooks</h1>
       <FormExample/>
       <FomrsExample2/>
    </div>
    </>
  )
}

export default App
