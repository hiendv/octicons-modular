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
    var options = { scale: scale, class: className, label: label };
    var octicon = icon.svg(options);
    if (!octicon) {
      return
    }

    var attrs = icon.attrs(options);
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

export default Octicon;
