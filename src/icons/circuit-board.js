// This file is auto-generated from the modulize script. Please do not modify this file.

/* eslint-disable */
export default {
  name: 'circuit-board',
  data: {"keywords":["developer","hardware","electricity"],"path":"<path fill-rule=\"evenodd\" d=\"M3 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z\"></path>","height":"16","width":"14"},
  options: {
    'version': '1.1',
    'width': 14,
    'height': 16,
    'viewBox': '0 0 14 16',
    'class': 'octicon octicon-circuit-board',
    'aria-hidden': 'true'
  },

  attrLabel (attrs, label) {
    if (!label) {
      return
    }

    attrs['aria-label'] = label
    attrs['role'] = 'img'
    delete attrs['aria-hidden']
  },

  attrClass (attrs, className) {
    if (!className) {
      return
    }

    attrs['class'] = `octicon octicon-${this.name} ${className}`
  },

  attrScale (attrs, scale) {
    let actualScale = scale === 0 ? 0 : parseFloat(scale) || 1
    let actualWidth = actualScale * parseInt(attrs['width'])
    let actualHeight = actualScale * parseInt(attrs['height'])

    attrs['width'] = Number(actualWidth.toFixed(2))
    attrs['height'] = Number(actualHeight.toFixed(2))
    delete attrs['scale']
  },

  attrsFormat (attributes) {
    return Object.keys(attributes).map(name => {
      return `${name}="${attributes[name]}"`
    }).join(' ').trim()
  },

  attrs (options) {
    let attrs = Object.assign({}, this.options, options)
    if (!options) {
      return this.attrsFormat(attrs)
    }

    this.attrLabel(attrs, options['aria-label'])
    this.attrClass(attrs, options['class'])
    this.attrScale(attrs, options['scale'])
    return this.attrsFormat(attrs)
  },

  svg (options) {
    return `<svg ${this.attrs(options)}>${this.data.path}</svg>`
  }
}
