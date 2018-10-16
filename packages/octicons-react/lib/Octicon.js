'use strict';

var PropTypes = require('prop-types');
var React = require('react');

var getAttrs = function (element) {
  return Array.from(element.attributes).reduce(function (o, item) {
    o[item.name] = item.value;
    return o
  }, {})
};

var Octicon = function (ref) {
  var icon = ref.icon;
  var scale = ref.scale;
  var className = ref.className;
  var label = ref.label;

  var octicon = icon.svg({ scale: scale, class: className, label: label });
  if (!octicon) {
    return (null)
  }

  var attrs = getAttrs(octicon);
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
