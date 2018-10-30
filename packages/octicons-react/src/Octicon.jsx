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

  attrs.dangerouslySetInnerHTML = {__html: icon.path()}
  attrs.className = attrs.class
  delete attrs.class

  return React.createElement(
    'svg',
    attrs
  )
}

Octicon.propTypes = {
  icon: PropTypes.shape({
    attrs: PropTypes.func,
    path: PropTypes.func
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
}

Octicon.defaultProps = {
  icon: {
    attrs () {
      return {}
    },
    path () {
      return {}
    }
  },
  scale: 1,
  className: null,
  label: null
}

export default Octicon
