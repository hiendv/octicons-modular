var index = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{domProps:{"innerHTML":_vm._s(_vm.icon.svg({ scale: _vm.scale }))}})},staticRenderFns: [],
  name: 'Octicon',
  props: {
    icon: {
      type: Object,
      default () {
        return {
          svg () {
            return
          }
        }
      },
      validator (value) {
        return typeof value.svg === 'function'
      }
    },
    scale: {
      type: Number,
      default () {
        return 1
      }
    }
  }
};

export default index;
