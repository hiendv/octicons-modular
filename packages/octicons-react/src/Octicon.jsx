import PropTypes from 'prop-types'
import React from 'react'

const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value
    return o
  }, {})
}

let Octicon = ({ icon, scale, className, label }) => {
  let octicon = icon.svg({ scale, class: className, label })
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

export default Octicon
