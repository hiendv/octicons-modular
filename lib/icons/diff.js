'use strict';

var factory = ((name, data) => {
  let options = {
    'version': '1.1',
    'width': data.width,
    'height': data.height,
    'viewBox': '0 0 ' + data.width + ' ' + data.height,
    'class': 'octicon octicon-' + name,
    'aria-hidden': 'true'
  };

  return {
    name,
    data,
    options,
    attrLabel(attrs, label) {
      if (!label) {
        return;
      }

      attrs['aria-label'] = label;
      attrs['role'] = 'img';
      delete attrs['aria-hidden'];
    },

    attrClass(attrs, className) {
      if (!className) {
        return;
      }
      attrs['class'] += ` ${className}`;
    },

    attrScale(attrs, scale) {
      let actualScale = scale === 0 ? 0 : parseInt(scale) || 1;
      attrs['width'] = actualScale * parseInt(attrs['width']);
      attrs['height'] = actualScale * parseInt(attrs['height']);
      delete attrs['scale'];
    },

    attrsFormat(attributes) {
      return Object.entries(attributes).map(([name, attr]) => {
        return `${name}="${attr}"`;
      }).join(' ').trim();
    },

    attrs(options) {
      let attrs = Object.assign({}, this.options, options);
      if (!options) {
        return this.attrsFormat(attrs);
      }

      this.attrLabel(attrs, options['aria-label']);
      this.attrClass(attrs, options['class']);
      this.attrScale(attrs, options['scale']);
      return this.attrsFormat(attrs);
    },

    svg(options) {
      return `<svg ${this.attrs(options)} >${this.data.path}</svg>`;
    }
  };
});

/* eslint-disable */
var diff = factory('diff', { "keywords": ["difference", "changes", "compare"], "path": "<path fill-rule=\"evenodd\" d=\"M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z\"/>", "height": "16", "width": "13" });

module.exports = diff;
