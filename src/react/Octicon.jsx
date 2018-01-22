import PropTypes from 'prop-types'
import React from 'react'

import '../style.scss'

const Octicon = ({ icon, scale }) => {
  let div = document.createElement('div')
  div.innerHTML = icon.svg({ scale: scale })
  let svg = div.firstChild
  let attrs = {}

  for (let attr of svg.attributes) {
    if (attr.name === 'class') {
      attrs.className = attr.value
      continue
    }

    attrs[attr.name] = attr.value
  }

  return <svg {...attrs} dangerouslySetInnerHTML={ { __html: svg.innerHTML } }></svg>
}

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number
}

Octicon.defaultProps = {
  icon: {
    svg () {}
  },
  scale: 1
}

export default Octicon
