import PropTypes from 'prop-types'
import React from 'react'

let Octicon = ({ icon, scale, className, label }) => {
  let options = { scale, class: className, label }
  let octicon = icon.svg(options)
  if (!octicon) {
    return (null)
  }

  let attrs = icon.attrs(options)
  Object.keys(attrs).forEach(idx => {
    attrs[idx] = `${attrs[idx]}`
  })

  attrs.dangerouslySetInnerHTML = {__html: octicon.innerHTML}
  attrs.className = attrs.class
  delete attrs.class

  return React.createElement(
    octicon.tagName,
    attrs
  )
}

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
}

Octicon.defaultProps = {
  icon: {
    svg () {}
  },
  scale: 1,
  className: null,
  label: null
}

export default Octicon
