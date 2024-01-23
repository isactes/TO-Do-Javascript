import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SoundDrumds from './components/drums/Drums'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SoundDrumds/>
    </>
  )
}

export default App
