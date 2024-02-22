import PropTypes from "prop-types";

function ButtonCaracteres({ caracter, id, onClick }) {
  return (
    <button
      id={id}
      type="button"
      className="m-auto h-auto w-fit"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={onClick}
    >
      {caracter}
    </button>
  );
}

ButtonCaracteres.propTypes = {
  caracter: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonCaracteres;
