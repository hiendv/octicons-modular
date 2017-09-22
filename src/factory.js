export default (name, data) => {
  let options = {
    'version': '1.1',
    'width': data.width,
    'height': data.height,
    'viewBox': '0 0 ' + data.width + ' ' + data.height,
    'class': 'octicon octicon-' + name,
    'aria-hidden': 'true'
  }

  return {
    name,
    data,
    options,
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
      attrs['class'] += ` ${className}`
    },

    attrScale (attrs, scale) {
      let actualScale = scale === 0 ? 0 : parseInt(scale) || 1
      attrs['width'] = actualScale * parseInt(attrs['width'])
      attrs['height'] = actualScale * parseInt(attrs['height'])
      delete attrs['scale']
    },

    attrsFormat (attributes) {
      return Object.entries(attributes).map(([name, attr]) => {
        return `${name}="${attr}"`
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
}
