'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

let Octicon = {
  functional: true,
  props: {
    icon: {
      type: Object,
      required: true,
      validator (value) {
        return value.svg instanceof Function
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  render (createElement, { props }) {
    let { icon, scale, className, label } = props;
    let octicon = icon.svg({ scale, class: className, label });
    if (!octicon) {
      return
    }

    let attrs = getAttrs(octicon);
    let innerHTML = octicon.innerHTML;

    return createElement(
      octicon.tagName,
      {
        attrs,
        domProps: {
          innerHTML
        }
      }
    )
  }
};

Object.keys(octiconsModular).forEach(function (key) { exports[key] = octiconsModular[key]; });
exports.Octicons = octiconsModular;
exports.Octicon = Octicon;
exports.default = Octicon;
