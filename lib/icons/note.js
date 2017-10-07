'use strict';

var note = {
  name: 'note',
  data: { "keywords": ["card", "paper", "ticket"], "path": "<path fill-rule=\"evenodd\" d=\"M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z\"/>", "height": "16", "width": "14" },
  options: {
    'version': '1.1',
    'width': 14,
    'height': 16,
    'viewBox': '0 0 14 16',
    'class': 'octicon octicon-note',
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

module.exports = note;
