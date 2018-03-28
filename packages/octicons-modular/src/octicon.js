export default function (name, data) {
  const { width, height } = data
  return {
    name,
    data,
    options: {
      'version': '1.1',
      'width': width,
      'height': height,
      'viewBox': `0 0 ${width} ${height}`,
      'class': `octicon octicon-${name}`,
      'aria-hidden': 'true'
    },
    svg (options) {
      return `<svg ${this.attrs(options)}>${this.data.path}</svg>`
    },
    attrs (options) {
      let attrs = Object.assign({}, this.options, options)
      if (!options) {
        return this.attrsFormat(attrs)
      }

      this.attrLabel(attrs, options['label'])
      this.attrClass(attrs, options['class'])
      this.attrScale(attrs, options['scale'])
      return this.attrsFormat(attrs)
    },
    attrLabel (attrs, label) {
      if (!label) {
        return
      }

      attrs['aria-label'] = label
      attrs['role'] = 'img'

      delete attrs['label']
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
    }
  }
}
