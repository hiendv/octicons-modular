'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Octicon = function Octicon(_ref) {
  var icon = _ref.icon,
      scale = _ref.scale;

  var div = document.createElement('div');
  div.innerHTML = icon.svg({ scale: scale });
  var svg = div.firstChild;
  var attrs = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = svg.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var attr = _step.value;

      if (attr.name === 'class') {
        attrs.className = attr.value;
        continue;
      }

      attrs[attr.name] = attr.value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return React.createElement('svg', _extends({}, attrs, { dangerouslySetInnerHTML: { __html: svg.innerHTML } }));
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
