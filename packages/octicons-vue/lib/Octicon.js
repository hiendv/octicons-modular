'use strict';

var getAttrs = function (element) {
  return Array.from(element.attributes).reduce(function (o, item) {
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
      validator: function validator (value) {
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
  render: function render (createElement, ref) {
    var props = ref.props;

    var icon = props.icon;
    var scale = props.scale;
    var className = props.className;
    var label = props.label;
    var octicon = icon.svg({ scale: scale, class: className, label: label });
    if (!octicon) {
      return
    }

    var attrs = getAttrs(octicon);
    var innerHTML = octicon.innerHTML;

    return createElement(
      octicon.tagName,
      {
        attrs: attrs,
        domProps: {
          innerHTML: innerHTML
        }
      }
    )
  }
};

module.exports = Octicon;
