import PropTypes from 'prop-types'
import React from 'react'
import 'octicons/build/octicons.min.css'

const Octicon = ({ icon, scale }) => {
  return <span dangerouslySetInnerHTML={ icon.svg({ scale: scale }) } />
}

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number
}

Octicon.defaultProps = {
  icon: {
    svg () {
    }
  },
  scale: 1
}

export default Octicon
