import Octicons from 'octicons-modular'
import 'octicons-modular/lib/main.css'

const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value
    return o
  }, {})
}

let Octicon = {
  functional: true,
  props: {
    icon: {
      type: Object,
      required: true,
      validator (value) {
        return value.svg instanceof Function
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    className: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  render (createElement, { props }) {
    let { icon, scale, className, label } = props
    let octicon = icon.svg({ scale, class: className, label })
    if (!octicon) {
      return
    }

    let attrs = getAttrs(octicon)
    let innerHTML = octicon.innerHTML

    return createElement(
      octicon.tagName,
      {
        attrs,
        domProps: {
          innerHTML
        }
      }
    )
  }
}

export * from 'octicons-modular'
export { Octicons, Octicon }
export default Octicon
