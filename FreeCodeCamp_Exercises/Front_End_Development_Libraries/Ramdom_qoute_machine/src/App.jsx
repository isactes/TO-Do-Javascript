import { useEffect, useState } from 'react'
import CardQoute from "./components/card/card"
import RamdomQouteUrl from "./api/ramdomQouteMachine/ramdomQouteMAchine"
function App() {

  const [qoute, setQoute ] =  useState(null)

  useEffect(() => {
    ramdomQouteMachine()
  },  [])

  const ramdomQouteMachine = async() => {
    try {
      const data =  await RamdomQouteUrl()
      setQoute(data)
    } catch (error) {
      console.error("And error fetching 💀💀", error)
      
    }
  }

  const handleQouteRamdon = async() => {
    await ramdomQouteMachine()
  }

  return (
    <>
    <div className="flex justify-center container mx-auto">
      {qoute && (
        <CardQoute
        author={qoute.author}
        text={qoute.content}
        newQoute={handleQouteRamdon}
        />
      )}
    </div>
    </>
  )
}

export default App
