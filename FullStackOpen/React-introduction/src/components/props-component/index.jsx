const PropsComponent = ({name, age}) => {

    console.log("props", name, age)
    console.log("props name", name)
    console.log("props age", age)
  return(
    <>
    <div>
      <h3>Props: pasar datos a componentes</h3>
      <p>Hello my name is {name}</p>
      <p>Im {age} years old</p>
    </div>
    </>
  )
}

export default PropsComponent