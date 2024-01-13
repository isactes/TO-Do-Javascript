import PropTypes from 'prop-types'

function TitleOfProyect(props) {
  return(
    <>
    <div className="flex flex-col justify-between items-center m-10">
      <h1 className="text-5xl uppercase text-neutral-50 tracking-normal font-normal font-serif">
        {props.title}
      </h1>
    </div>
    </>
  )}

  TitleOfProyect.propTypes = {
    title: PropTypes.string.isRequired
  }

  export default TitleOfProyect