'use strict';

var Octicon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{domProps:{"innerHTML":_vm._s(_vm.icon.svg({ scale: _vm.scale }))}})},staticRenderFns: [],
  name: 'Octicon',
  props: {
    icon: {
      type: Object,
      default: function default$1 () {
        return {
          svg: function svg () {
            return
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
  }
};

module.exports = Octicon;
