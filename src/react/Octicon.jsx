import PropTypes from 'prop-types'
import React from 'react'
import '../style.scss'

const Octicon = ({ icon, scale }) => {
  return <span dangerouslySetInnerHTML={ { __html: icon.svg({ scale }) } } />
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
