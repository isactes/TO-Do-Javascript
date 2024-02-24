//import Title from "../title/title"
import ButtonNumber from "../button/buttonNumber"
import ButtonCaracteres from "../button/buttonCaracteres"
import { numberCalcu, symbolCalcu } from "../../utilities"
import { useState } from "react"
import AreaText from "../textArea/TextArea"


function Card() {

  const [result, setResult] = useState("0")
  const [operator, setOperator] = useState(null)
  const [previousValue, setPreviousValue] = useState(null)

  const handleNumber = (value) => {
    if (result === "0") {
      setResult(`${value}`)
    } else {
      setResult(`${result}${value}`)
    }
  }

  const handleOperator = (value) => {
    setOperator(value);
    if (result !== "0") {
      setPreviousValue(result);
    }
    setResult("0")
  }

  const handleEqual = () => {
  const current = parseFloat(result);
  const previous = parseFloat(previousValue);
  let newResult;

  switch (operator) {
    case "+":
      newResult = previous + current;
      break;
    case "-":
      newResult = previous - current;
      break;
    case "x":
      newResult = previous * current;
      break;
    case "/":
      newResult = previous / current;
      break;
    default:
      newResult = result;
      break;
  }

  setResult(`${newResult}`);
  setOperator(null);
  setPreviousValue(null);
};


  const handleClear = () => {
    setResult("0");
    setOperator(null);
    setPreviousValue(null);
  }

  const handlePoint = () => {
    if (!result.includes(".")) {
      
      setResult(`${result}`)
    }
  }


  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <AreaText
        id="display"
        caracteres={result}
        key=""
      />
      <div className="grid grid-cols-3 gap-2">
        {numberCalcu.map(number => (
          <ButtonNumber
            id={number.id}
            key={number.id}
            number={number.number}
            onClick={() => handleNumber(number.number)}
          />
        ))}
        {symbolCalcu.map(simbol => (
          <ButtonCaracteres
            id={simbol.id}
            key={simbol.id}
            caracter={simbol.simbole}
            onClick={() => handleOperator(simbol.simbole)}
          />
        ))}
        <ButtonCaracteres
          id="equals"
          key={"equals"}
          onClick={handleEqual}
          caracter={"="}
        />
        <ButtonCaracteres
          id="clear"
          key={"clear"}
          onClick={() => handleClear("C")}
          caracter={"C"}
        />
        <ButtonCaracteres
          id="decimal"
          key={"decimal"}
          onClick={() => handlePoint(".")}
          caracter={"."}
        />
      </div>
    </div>
  )
}

export default Card