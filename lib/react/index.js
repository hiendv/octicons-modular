'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var Octicon = function Octicon(_ref) {
  var icon = _ref.icon,
      scale = _ref.scale;

  return React.createElement('span', { dangerouslySetInnerHTML: { __html: icon.svg({ scale: scale }) } });
};

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number
};

Octicon.defaultProps = {
  icon: {
    svg: function svg() {}
  },
  scale: 1
};

module.exports = Octicon;
