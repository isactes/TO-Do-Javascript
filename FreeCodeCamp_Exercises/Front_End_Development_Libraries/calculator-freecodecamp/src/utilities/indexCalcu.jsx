// logica calculadora 
import { useState } from "react";

const [ result, setResult ] = useState("0")
const [ operator, setOperator ] = useState(null)
const [ previousValue, setPreviousValue] = useState(null)

const handleNumber = (value) => {
  if (result === "0") {
    setResult(`${value}`)
  } else {
    setResult(`${result}${value}`)
  }
}

const handleOperator = (value) => {
  setOperator(value);
  setPreviousValue(result);
  setResult("0")
}

const handleEqual = () => {
  const curren =  parseFloat(result)
  const previous = parseFloat(previousValue)
  let newResult;

  switch (operator) {
    case "+":
      newResult =  previous + curren
      break;
    case "-":
      newResult =  previous - curren
      break;
    case "x":
      newResult =  previous * curren
      break;
    case "/":
      newResult =  previous / curren
      break;
    default:
      newResult = result
      break;
  }

  setResult(`${newResult}`);
  setOperator(null);
  setPreviousValue(null)
}

const handleClear = () => {
  setResult("0");
  setOperator(null);
  setPreviousValue(null);
}

const handlePosNeg = () => {
  setResult(`${parseFloat(result) * 0.01}`)
}
