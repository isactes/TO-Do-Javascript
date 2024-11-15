const  CeroComponent = () => {

  const now = new Date()
  const a = 10
  const b = 20

  console.log("Function",  now,  a + b)

  return(
    <>
     <div>
      <h3>Date compónent</h3>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
     </div>
    </>
  )
}

export default CeroComponent