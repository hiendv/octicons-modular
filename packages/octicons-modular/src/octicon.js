const assign = (t, ...sources) => {
  for (var s, i = 0, n = sources.length; i < n; i++) {
    s = sources[i]
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
  }
  return t
}

export default (name, width, height, path, keywords) => {
  const attributes = opts => {
    let options = assign({
      scale: 1,
      label: null,
      class: null
    }, opts || {})

    return elementAttributes({
      version: '1.1',
      width,
      height,
      viewBox: `0 0 ${width} ${height}`
    }, options)
  }

  const elementAttributes = (attrs, options) => {
    if (options.label) {
      attrs['aria-label'] = options.label
    } else {
      attrs['aria-hidden'] = true
    }

    if (options.class) {
      attrs['class'] = `octicon octicon-${name} ${options.class}`
    } else {
      attrs['class'] = `octicon octicon-${name}`
    }

    let actualScale = options.scale === 0 ? 0 : parseFloat(options.scale) || 1
    let actualWidth = actualScale * parseInt(attrs['width'])
    let actualHeight = actualScale * parseInt(attrs['height'])

    attrs['width'] = Number(actualWidth.toFixed(2))
    attrs['height'] = Number(actualHeight.toFixed(2))

    return attrs
  }

  const elementAttributesString = attrs => {
    return Object.keys(attrs).map(name => {
      return `${name}="${attrs[name]}"`
    }).join(' ').trim()
  }

  return {
    name,
    data: {
      width,
      height,
      path,
      keywords
    },
    attrs (options) {
      return attributes(options)
    },
    svg (options, doc = document) {
      let wrapper = doc.createElement('div')
      let attrs = elementAttributesString(this.attrs(options))
      wrapper.innerHTML = `<svg ${attrs}>${path}</svg>`
      return wrapper.firstChild
    }
  }
}
