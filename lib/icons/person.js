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
var person = factory('person', { "keywords": ["people", "man", "woman", "human"], "path": "<path fill-rule=\"evenodd\" d=\"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z\"/>", "height": "16", "width": "12" });

module.exports = person;
