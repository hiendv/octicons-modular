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
var shield = factory('shield', { "keywords": ["protect", "shield", "lock"], "path": "<path fill-rule=\"evenodd\" d=\"M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61-.19.13-.3.36-.25.59L9 11H5z\"/>", "height": "16", "width": "14" });

module.exports = shield;
