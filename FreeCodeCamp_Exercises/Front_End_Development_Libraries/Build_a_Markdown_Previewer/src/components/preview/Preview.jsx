import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import PropTypes from 'prop-types'

function Previewer({ code }) {
  return(
    <div className="text-moon-text  w-full px-2 pt-11" id="preview">
      <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      >
        {code}
      </ReactMarkdown>
    </div>
  )}

  export default Previewer

  Previewer.propTypes = {
    code: PropTypes.any.isRequired
  }