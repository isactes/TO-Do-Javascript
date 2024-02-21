//import Title from "../title/title"
import ButtonNumber from "../button/button"
import { numberCalcu, symbolCalcu } from "../../utilities"
import { useState } from "react"
import AreaText from "../textArea/TextArea"


function Card() {

  const [result, setResult] = useState("0")
   

  return(
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <AreaText 
      id=""
      number={result}
      key=""
      />
      <div className="grid grid-cols-3 gap-2">
        {numberCalcu.map( number => (
          <ButtonNumber
          id={number.id}
          key=""
          number={number.number}
          />
        ))}
        {symbolCalcu.map(simbol => (
          <ButtonNumber
          key=""
          simbol={simbol.simbole}
          />
        ))}
      </div>
    </div>
  )}

export default Card