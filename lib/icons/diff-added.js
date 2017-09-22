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
var diffAdded = factory('diff-added', { "keywords": ["new", "addition"], "path": "<path fill-rule=\"evenodd\" d=\"M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zM6 9H3V7h3V4h2v3h3v2H8v3H6V9z\"/>", "height": "16", "width": "14" });

module.exports = diffAdded;
