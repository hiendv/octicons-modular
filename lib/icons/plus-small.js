'use strict';

var plusSmall = {
  name: 'plus-small',
  data: { "keywords": ["add", "new", "more", "small"], "path": "<path fill-rule=\"evenodd\" d=\"M4 7V4H3v3H0v1h3v3h1V8h3V7H4z\"/>", "height": "16", "width": "7" },
  options: {
    'version': '1.1',
    'width': 7,
    'height': 16,
    'viewBox': '0 0 7 16',
    'class': 'octicon octicon-plus-small',
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
    var actualScale = scale === 0 ? 0 : parseInt(scale) || 1;
    attrs['width'] = actualScale * parseInt(attrs['width']);
    attrs['height'] = actualScale * parseInt(attrs['height']);
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

module.exports = plusSmall;
