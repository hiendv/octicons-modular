export default {
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
    let options = { scale, class: className, label }
    let octicon = icon.svg(options)
    if (!octicon) {
      return
    }

    let attrs = icon.attrs(options)
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
