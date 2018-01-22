'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var Octicon = function (ref) {
  var icon = ref.icon;
  var scale = ref.scale;

  var div = document.createElement('div');
  div.innerHTML = icon.svg({ scale: scale });
  var svg = div.firstChild;
  var attrs = {};

  for (var i = 0, list = svg.attributes; i < list.length; i += 1) {
    var attr = list[i];

    if (attr.name === 'class') {
      attrs.className = attr.value;
      continue
    }

    attrs[attr.name] = attr.value;
  }

  attrs.dangerouslySetInnerHTML = { __html: svg.innerHTML };

  return React.createElement('svg', attrs)
};

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number
};

Octicon.defaultProps = {
  icon: {
    svg: function svg () {}
  },
  scale: 1
};

module.exports = Octicon;
