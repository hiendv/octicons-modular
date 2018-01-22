'use strict';

var Octicon = {
  name: 'Octicon',
  props: {
    icon: {
      type: Object,
      default: function default$1 () {
        return {
          svg: function svg () {
            return '<svg/>'
          }
        }
      },
      validator: function validator (value) {
        return typeof value.svg === 'function'
      }
    },
    scale: {
      type: Number,
      default: function default$2 () {
        return 1
      }
    }
  },
  render: function render (createElement) {
    var div = document.createElement('div');
    div.innerHTML = this.icon.svg({ scale: this.scale });
    var svg = div.firstChild;
    var attrs = {};

    for (var i = 0, list = svg.attributes; i < list.length; i += 1) {
      var attr = list[i];

      attrs[attr.name] = attr.value;
    }

    return createElement('svg', {
      attrs: attrs,
      domProps: {
        innerHTML: svg.innerHTML
      }
    })
  }
}

module.exports = Octicon;
