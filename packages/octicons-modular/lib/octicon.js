'use strict';

var assign = function (t) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  for (var s, i = 0, n = sources.length; i < n; i++) {
    s = sources[i];
    Object.keys(s).forEach(function (p) {
      if (p === '__proto__') {
        return
      }

      t[p] = s[p];
    });
  }

  return t
};

function octicon (name, width, height, path, keywords) {
  var attributes = function (opts) {
    var options = assign({
      scale: 1,
      label: null,
      class: null
    }, opts || {});

    return elementAttributes({
      version: '1.1',
      width: width,
      height: height,
      viewBox: ("0 0 " + width + " " + height)
    }, options)
  };

  var elementAttributes = function (attrs, options) {
    if (options.label) {
      attrs['aria-label'] = options.label;
    } else {
      attrs['aria-hidden'] = true;
    }

    if (options.class) {
      attrs['class'] = "octicon octicon-" + name + " " + (options.class);
    } else {
      attrs['class'] = "octicon octicon-" + name;
    }

    var actualScale = options.scale === 0 ? 0 : parseFloat(options.scale) || 1;
    var actualWidth = actualScale * parseInt(attrs['width']);
    var actualHeight = actualScale * parseInt(attrs['height']);

    attrs['width'] = Number(actualWidth.toFixed(2));
    attrs['height'] = Number(actualHeight.toFixed(2));

    return attrs
  };

  var elementAttributesString = function (attrs) {
    return Object.keys(attrs).map(function (name) {
      return (name + "=\"" + (attrs[name]) + "\"")
    }).join(' ').trim()
  };

  return {
    name: name,
    path: function path$1 () {
      return path
    },
    keywords: function keywords$1 () {
      return keywords
    },
    attrs: function attrs (options) {
      return attributes(options)
    },
    html: function html (options) {
      var attrs = elementAttributesString(this.attrs(options));
      var path = this.path();
      return ("<svg " + attrs + ">" + path + "</svg>")
    }
  }
}

module.exports = octicon;
