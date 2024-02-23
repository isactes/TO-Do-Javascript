import PropTypes from "prop-types"
function ButtonNumber({ number, id, onClick }) {
  return (
    <button
      id={id}
      type="button"
      className="m-auto h-auto w-fit"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={onClick}
      >
      {number}
    </button>
  )
}

ButtonNumber.propTypes = {
  number: PropTypes.number,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonNumber