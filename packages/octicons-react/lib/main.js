'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');
var React = require('react');
var octiconsModular = require('octicons-modular');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".octicon{display:inline-block;vertical-align:text-top;fill:currentColor}";
styleInject(css);

const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value;
    return o
  }, {})
};

let Octicon = ({ icon, scale, className, label }) => {
  let octicon = icon.svg({ scale, class: className, label });
  if (!octicon) {
    return (null)
  }

  let attrs = getAttrs(octicon);
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
    svg () {}
  },
  scale: 1,
  className: null,
  label: null
};

Object.keys(octiconsModular).forEach(function (key) { exports[key] = octiconsModular[key]; });
exports.Octicons = octiconsModular;
exports.Octicon = Octicon;
exports.default = Octicon;
