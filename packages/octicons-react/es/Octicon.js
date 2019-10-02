import PropTypes from 'prop-types';
import React from 'react';

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

  attrs.className = attrs.class;
  delete attrs.class;

  var pathAttrs = icon.path(true);
  pathAttrs.key = 'p0';

  return React.createElement('svg', attrs, [ React.createElement('path', pathAttrs) ])
};

Octicon.propTypes = {
  icon: PropTypes.shape({
    attrs: PropTypes.func.isRequired,
    path: PropTypes.func.isRequired
  }),
  scale: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string
};

Octicon.defaultProps = {
  scale: 1,
  className: null,
  label: null
};

export default Octicon;
