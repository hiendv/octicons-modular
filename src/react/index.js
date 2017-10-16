import PropTypes from 'prop-types'
import React from 'react'
import octicons from '../octicons'
import 'octicons/build/octicons.min.css'

const Octicon = ({ icon, scale }) => {
  if (!octicons[icon]) return null
  return <span dangerouslySetInnerHTML={ octicons[icon].svg({ scale: scale }) } />
}

Octicon.propTypes = {
  icon: PropTypes.string,
  scale: PropTypes.number
}

Octicon.defaultProps = {
  icon: '',
  scale: 1
}

export default Octicon
