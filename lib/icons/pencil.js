'use strict';

var pencil = {
  name: 'pencil',
  data: { "keywords": ["edit", "change", "update", "write"], "path": "<path fill-rule=\"evenodd\" d=\"M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z\"/>", "height": "16", "width": "14" },
  options: {
    'version': '1.1',
    'width': 14,
    'height': 16,
    'viewBox': '0 0 14 16',
    'class': 'octicon octicon-pencil',
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

module.exports = pencil;
