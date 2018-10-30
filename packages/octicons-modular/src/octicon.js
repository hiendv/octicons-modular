import { assign } from './utils'

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
    path () {
      return path
    },
    keywords () {
      return keywords
    },
    attrs (options) {
      return attributes(options)
    },
    html (options) {
      let attrs = elementAttributesString(this.attrs(options))
      let path = this.path()
      return `<svg ${attrs}>${path}</svg>`
    }
  }
}
