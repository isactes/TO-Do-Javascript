import viteLogo from '/vite.svg'
import './App.css'
import MyFirstComponent from './components/first-components'
import CeroComponent from './components/cero-components/indeix'
import CountComponent from './components/count-component'
import PropsComponent from './components/props-component'
import FunctionAuxComp from './components/props-component/indexAuxCom'
import CounterTwo from './components/count-component/index2'

function App() {

  const names = "Fidel"
  const ages = 30

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
      <PropsComponent 
        name="Isac"
      />
      <PropsComponent
        name={names}
        age={ages} 
      />
      <FunctionAuxComp 
      name={names} 
      age={ages}
      />

      <CounterTwo />
    </>
  )
}

export default App
