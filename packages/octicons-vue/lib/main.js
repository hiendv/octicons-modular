'use strict';

const getAttrs = element => {
  if (!element) {
    return []
  }

  return Array.from(element.attributes).reduce((o, item) => {
    o[item.name] = item.value;
    return o
  }, {})
};

var Octicon = {
  functional: true,
  props: {
    icon: {
      type: Object,
      required: true,
      default () {
        return {
          svg () {}
        }
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
    let octicon = props.icon.svg({ scale: props.scale, class: props.class, label: props.label });
    if (!octicon) {
      return
    }

    let attrs = getAttrs(octicon);
    let innerHTML = octicon.innerHTML;

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

module.exports = Octicon;
