/* eslint-disable */
var Octicon = {
  functional: true,
  props: {
    icon: {
      type: Object,
      required: true,
      validator: function validator (value) {
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
  render: function render (createElement, ref) {
    var props = ref.props;

    var icon = props.icon;
    var scale = props.scale;
    var className = props.className;
    var label = props.label;
    var options = { scale: scale, class: className, label: label };

    return createElement('svg', { attrs: icon.attrs(options) }, [createElement('path', { attrs: icon.path() })])
  }
};

export default Octicon;
