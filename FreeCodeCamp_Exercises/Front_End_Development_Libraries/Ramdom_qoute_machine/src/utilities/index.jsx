import PropTypes from  'prop-types'
export function openNewTab(e, url) {
	window.open(url, "_blank")
	e.stopPropagation()
}

openNewTab.propTypes = {
  e: PropTypes.any,
  url: PropTypes.string
}
