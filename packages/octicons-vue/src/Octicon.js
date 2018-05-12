const getAttrs = element => {
  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value
    return o
  }, {})
}

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
    class: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  },
  render (createElement, { props }) {
    let octicon = props.icon.svg({ scale: props.scale, class: props.class, label: props.label })
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
