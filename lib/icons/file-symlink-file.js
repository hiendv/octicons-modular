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
      attrs['class'] += ' ' + className;
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

var fileSymlinkFile = factory('file-symlink-file', { "keywords": ["link", "alias"], "path": "<path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM6 4.5l4 3-4 3v-2c-.98-.02-1.84.22-2.55.7-.71.48-1.19 1.25-1.45 2.3.02-1.64.39-2.88 1.13-3.73.73-.84 1.69-1.27 2.88-1.27v-2H6z\"/>", "height": "16", "width": "12" });

module.exports = fileSymlinkFile;
