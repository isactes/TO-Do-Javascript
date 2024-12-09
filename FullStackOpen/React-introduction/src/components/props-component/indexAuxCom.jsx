const FunctionAuxComp = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return(
    <div>
      <h3>Destructuracion Confuncion de componente</h3>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in  {bornYear()}</p>
    </div>
  )
}

export default FunctionAuxComp