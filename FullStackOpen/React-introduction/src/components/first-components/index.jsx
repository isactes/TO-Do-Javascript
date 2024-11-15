import reactLogo from '../../assets/react.svg'
const MyFirstComponent = () => {
  console.log("Hellos from my firts component")
  return (
    <>
      <img
        src={reactLogo}
        alt="React"
        className="logo react"
      />
    </>
  )
}

export default MyFirstComponent