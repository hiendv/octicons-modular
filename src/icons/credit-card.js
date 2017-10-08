// This file is auto-generated from the modulize script. Please do not modify this file.

/* eslint-disable */
export default {
  name: 'credit-card',
  data: {"keywords":["money","billing","payments","transactions"],"path":"<path fill-rule=\"evenodd\" d=\"M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z\"/>","height":"16","width":"16"},
  options: {
    'version': '1.1',
    'width': 16,
    'height': 16,
    'viewBox': '0 0 16 16',
    'class': 'octicon octicon-credit-card',
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
    return `<svg ${this.attrs(options)} >${this.data.path}</svg>`
  }
}
