import PropTypes from 'prop-types'
import React from 'react'
import Octicons from 'octicons-modular'
import 'octicons-modular/lib/main.css'

const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value
    return o
  }, {})
}

let Octicon = ({ icon, scale, className, label }) => {
  let octicon = icon.svg({ scale, class: className, label })
  if (!octicon) {
    return (null)
  }

  let attrs = getAttrs(octicon)
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

export * from 'octicons-modular'
export { Octicons, Octicon }
export default Octicon
