import viteLogo from '/vite.svg'
import './App.css'
import MyFirstComponent from './components/first-components'
import CeroComponent from './components/cero-components/indeix'
import CountComponent from './components/count-component'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <MyFirstComponent />
        </a>
      </div>
      <h1>React + Vite</h1>
      <CountComponent />
      <div>
        <CeroComponent / >
      </div>
    </>
  )
}

export default App
