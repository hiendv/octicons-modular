'use strict';

var deviceCamera = {
  name: 'device-camera',
  data: { "keywords": ["photo", "picture", "image", "snapshot"], "path": "<path fill-rule=\"evenodd\" d=\"M15 3H7c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM6 5H2V4h4v1zm4.5 7C8.56 12 7 10.44 7 8.5S8.56 5 10.5 5 14 6.56 14 8.5 12.44 12 10.5 12zM13 8.5c0 1.38-1.13 2.5-2.5 2.5S8 9.87 8 8.5 9.13 6 10.5 6 13 7.13 13 8.5z\"></path>", "height": "16", "width": "16" },
  options: {
    'version': '1.1',
    'width': 16,
    'height': 16,
    'viewBox': '0 0 16 16',
    'class': 'octicon octicon-device-camera',
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

module.exports = deviceCamera;
