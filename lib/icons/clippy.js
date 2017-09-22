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
      return Object.keys(attributes).map(name => {
        return `${name}="${attributes[name]}"`;
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
var clippy = factory('clippy', { "keywords": ["copy", "paste", "save", "capture"], "path": "<path fill-rule=\"evenodd\" d=\"M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z\"/>", "height": "16", "width": "14" });

module.exports = clippy;
