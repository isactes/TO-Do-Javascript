import PropTypes from 'prop-types'
function  TextArea({ setcode, currentCode }) {
  return(
    <>
    <div className="flex justify-center items-center">
      <textarea
      className="bg-moon-overlay h-full text-moon-text w-full px-2 pt-11 landscape:border-r-2 landscape:border-r-moon-surface"
      id="editor"
      spellCheck={false}
      placeholder="Ingresa el texto"
      value={currentCode}
      onChange={(e) => {
        setcode(e.target.value)
      }}
       />
    </div>
    
    </>
  )
}

TextArea.propTypes = {
  setcode: PropTypes.any.isRequired,
  currentCode: PropTypes.any.isRequired
}

export default TextArea