import PropTypes from 'prop-types'
import React from 'react'

let Octicon = ({ icon, scale, className, label }) => {
  let options = { scale, class: className, label }
  let attrs = icon.attrs(options)
  if (!attrs) {
    return (null)
  }

  Object.keys(attrs).forEach(idx => {
    attrs[idx] = `${attrs[idx]}`
  })

  attrs.className = attrs.class
  delete attrs.class

  let pathAttrs = icon.path()
  pathAttrs.key = 'p0'

  return React.createElement('svg', attrs, [ React.createElement('path', pathAttrs) ])
}

Octicon.propTypes = {
  icon: PropTypes.shape({
    attrs: PropTypes.func.isRequired,
    path: PropTypes.func.isRequired
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
}

Octicon.defaultProps = {
  scale: 1,
  className: null,
  label: null
}

export default Octicon
