import PropTypes from "prop-types"
function ButtonNumber({ number, id, simbol }) {
  return (
    <button
      id={id}
      type="button"
      className="m-auto h-auto w-fit"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {number}
      {simbol}
    </button>
  )
}

ButtonNumber.propTypes = {
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  simbol: PropTypes.string.isRequired
}

export default ButtonNumber