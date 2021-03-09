var assign = function (t) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  var loop = function ( s$1, i, n ) {
    s$1 = sources[i];
    Object.keys(s$1).forEach(function (p) {
      if (p === '__proto__') {
        return
      }

      t[p] = s$1[p];
    });

    s = s$1;
  };

  for (var s = (void 0), i = 0, n = sources.length; i < n; i++) loop( s, i);

  return t
};

var camelize = function (str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (_, c) { return c.toUpperCase(); })
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
      attrs.class = "octicon octicon-" + name + " " + (options.class);
    } else {
      attrs.class = "octicon octicon-" + name;
    }

    var actualScale = options.scale === 0 ? 0 : parseFloat(options.scale) || 1;
    var actualWidth = actualScale * parseInt(attrs.width);
    var actualHeight = actualScale * parseInt(attrs.height);

    attrs.width = Number(actualWidth.toFixed(2));
    attrs.height = Number(actualHeight.toFixed(2));

    return attrs
  };

  var elementAttributesString = function (attrs) {
    return Object.keys(attrs).map(function (name) {
      return (name + "=\"" + (attrs[name]) + "\"")
    }).join(' ').trim()
  };

  return {
    name: name,
    path: function path$1 (camel) {
      if ( camel === void 0 ) camel = false;

      var frozen = assign({}, path);

      if (!camel) {
        return frozen
      }

      var normalizedPath = {};
      Object.keys(frozen).forEach(function (key) {
        normalizedPath[camelize(key)] = frozen[key];
      });

      return normalizedPath
    },
    keywords: function keywords$1 () {
      return keywords
    },
    attrs: function attrs (options) {
      return attributes(options)
    },
    html: function html (options) {
      var attrs = elementAttributesString(this.attrs(options));
      var pathAttrs = elementAttributesString(this.path());
      return ("<svg " + attrs + "><path " + pathAttrs + "/></svg>")
    }
  }
}

export default octicon;
