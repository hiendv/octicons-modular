'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Octicon = require('./Octicon');
var octiconsModular = require('octicons-modular');



Object.keys(octiconsModular).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return octiconsModular[k];
    }
  });
});
exports.Octicon = Octicon;
exports.Octicons = octiconsModular;
exports.default = Octicon;
