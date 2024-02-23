import PropTypes from "prop-types";
function AreaText({ id, caracteres }) {
  return (
    <div id={id} className="relative mb-3 text-right" data-te-input-wrapper-init>
        {caracteres}
    </div>
  );
}

AreaText.propTypes = {
  id: PropTypes.string.isRequired,
  caracteres: PropTypes.any.isRequired
};

export default AreaText;
