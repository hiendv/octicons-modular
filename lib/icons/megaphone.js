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

var megaphone = factory('megaphone', { "keywords": ["bullhorn", "loud", "shout", "broadcast"], "path": "<path fill-rule=\"evenodd\" d=\"M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z\"/>", "height": "16", "width": "16" });

module.exports = megaphone;
