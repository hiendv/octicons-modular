'use strict';

var bug = {
  name: 'bug',
  data: { "keywords": ["insect"], "path": "<path fill-rule=\"evenodd\" d=\"M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z\"></path>", "height": "16", "width": "16" },
  options: {
    'version': '1.1',
    'width': 16,
    'height': 16,
    'viewBox': '0 0 16 16',
    'class': 'octicon octicon-bug',
    'aria-hidden': 'true'
  },

  attrLabel: function attrLabel(attrs, label) {
    if (!label) {
      return;
    }

    attrs['aria-label'] = label;
    attrs['role'] = 'img';
    delete attrs['aria-hidden'];
  },
  attrClass: function attrClass(attrs, className) {
    if (!className) {
      return;
    }

    attrs['class'] = "octicon octicon-" + this.name + " " + className;
  },
  attrScale: function attrScale(attrs, scale) {
    var actualScale = scale === 0 ? 0 : parseFloat(scale) || 1;
    var actualWidth = actualScale * parseInt(attrs['width']);
    var actualHeight = actualScale * parseInt(attrs['height']);

    attrs['width'] = Number(actualWidth.toFixed(2));
    attrs['height'] = Number(actualHeight.toFixed(2));
    delete attrs['scale'];
  },
  attrsFormat: function attrsFormat(attributes) {
    return Object.keys(attributes).map(function (name) {
      return name + "=\"" + attributes[name] + "\"";
    }).join(' ').trim();
  },
  attrs: function attrs(options) {
    var attrs = Object.assign({}, this.options, options);
    if (!options) {
      return this.attrsFormat(attrs);
    }

    this.attrLabel(attrs, options['aria-label']);
    this.attrClass(attrs, options['class']);
    this.attrScale(attrs, options['scale']);
    return this.attrsFormat(attrs);
  },
  svg: function svg(options) {
    return "<svg " + this.attrs(options) + " >" + this.data.path + "</svg>";
  }
};

module.exports = bug;
