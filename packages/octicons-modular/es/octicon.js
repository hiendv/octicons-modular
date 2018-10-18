var assign = function (t) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  for (var s, i = 0, n = sources.length; i < n; i++) {
    s = sources[i];
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) { t[p] = s[p]; } }
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
    data: {
      width: width,
      height: height,
      path: path,
      keywords: keywords
    },
    attrs: function attrs (options) {
      return attributes(options)
    },
    svg: function svg (options, doc) {
      if ( doc === void 0 ) doc = document;

      var wrapper = doc.createElement('div');
      var attrs = elementAttributesString(this.attrs(options));
      wrapper.innerHTML = "<svg " + attrs + ">" + path + "</svg>";
      return wrapper.firstChild
    }
  }
}

export default octicon;
