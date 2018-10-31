/* eslint-disable */
export default {
  functional: true,
  props: {
    icon: {
      type: Object,
      required: true,
      validator (value) {
        return value.attrs instanceof Function && value.path instanceof Function
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

    return createElement('svg', { attrs: icon.attrs(options) }, [createElement('path', { attrs: icon.path() })])
  }
}
