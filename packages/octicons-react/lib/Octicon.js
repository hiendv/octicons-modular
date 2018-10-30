'use strict';

var PropTypes = require('prop-types');
var React = require('react');

var Octicon = function (ref) {
  var icon = ref.icon;
  var scale = ref.scale;
  var className = ref.className;
  var label = ref.label;

  var options = { scale: scale, class: className, label: label };
  var attrs = icon.attrs(options);
  if (!attrs) {
    return (null)
  }

  Object.keys(attrs).forEach(function (idx) {
    attrs[idx] = "" + (attrs[idx]);
  });

  attrs.dangerouslySetInnerHTML = {__html: icon.path()};
  attrs.className = attrs.class;
  delete attrs.class;

  return React.createElement(
    'svg',
    attrs
  )
};

Octicon.propTypes = {
  icon: PropTypes.shape({
    attrs: PropTypes.func,
    path: PropTypes.func
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
};

Octicon.defaultProps = {
  icon: {
    attrs: function attrs () {
      return {}
    },
    path: function path () {
      return {}
    }
  },
  scale: 1,
  className: null,
  label: null
};

module.exports = Octicon;
