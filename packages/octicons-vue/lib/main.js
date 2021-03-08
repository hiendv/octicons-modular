'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Octicon = require('./Octicon');
var octiconsModular = require('octicons-modular');

function styleInject(css, ref) {
  if ( ref === void 0 ) { ref = {}; }
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

var css_248z = ".octicon{display:inline-block;vertical-align:text-top;fill:currentColor}";
styleInject(css_248z);

exports.Octicon = Octicon;
exports.default = Octicon;
exports.Octicons = octiconsModular;
Object.keys(octiconsModular).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return octiconsModular[k];
    }
  });
});
