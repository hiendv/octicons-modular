'use strict';

var PropTypes = require('prop-types');
var React = require('react');

var Octicon = function (ref) {
  var icon = ref.icon;
  var scale = ref.scale;
  var className = ref.className;
  var label = ref.label;

  var options = { scale: scale, class: className, label: label };
  var octicon = icon.svg(options);
  if (!octicon) {
    return (null)
  }

  var attrs = icon.attrs(options);
  Object.keys(attrs).forEach(function (idx) {
    attrs[idx] = "" + (attrs[idx]);
  });

  attrs.dangerouslySetInnerHTML = {__html: octicon.innerHTML};
  attrs.className = attrs.class;
  delete attrs.class;

  return React.createElement(
    octicon.tagName,
    attrs
  )
};

Octicon.propTypes = {
  icon: PropTypes.shape({
    svg: PropTypes.func
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
};

Octicon.defaultProps = {
  icon: {
    svg: function svg () {}
  },
  scale: 1,
  className: null,
  label: null
};

module.exports = Octicon;
