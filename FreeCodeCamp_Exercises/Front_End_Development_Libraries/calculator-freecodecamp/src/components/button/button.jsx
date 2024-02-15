import PropTypes from "prop-types"
function ButtonNumber({number}) {
  return(
    <button
    type="button"
    className="inline-block rounded-l bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
    data-te-ripple-init
    data-te-ripple-color="light"
    >
    {number}
    </button>
  )}

ButtonNumber.propType = {
  number: PropTypes.number.isRequired
}

export default ButtonNumber