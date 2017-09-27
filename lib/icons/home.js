'use strict';

var factory = (function (name, data) {
  var options = {
    'version': '1.1',
    'width': data.width,
    'height': data.height,
    'viewBox': '0 0 ' + data.width + ' ' + data.height,
    'class': 'octicon octicon-' + name,
    'aria-hidden': 'true'
  };

  return {
    name: name,
    data: data,
    options: options,
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

      attrs['class'] = 'octicon octicon-' + name + ' ' + className;
    },
    attrScale: function attrScale(attrs, scale) {
      var actualScale = scale === 0 ? 0 : parseInt(scale) || 1;
      attrs['width'] = actualScale * parseInt(attrs['width']);
      attrs['height'] = actualScale * parseInt(attrs['height']);
      delete attrs['scale'];
    },
    attrsFormat: function attrsFormat(attributes) {
      return Object.keys(attributes).map(function (name) {
        return name + '="' + attributes[name] + '"';
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
      return '<svg ' + this.attrs(options) + ' >' + this.data.path + '</svg>';
    }
  };
});

var home = factory('home', { "keywords": ["welcome", "index", "house", "building"], "path": "<path fill-rule=\"evenodd\" d=\"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z\"/>", "height": "16", "width": "16" });

module.exports = home;
