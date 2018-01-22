<style lang="scss">
  @import '../style.scss';
</style>
<script>
export default {
  name: 'Octicon',
  props: {
    icon: {
      type: Object,
      default () {
        return {
          svg () {
            return '<svg/>'
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
  },
  render (createElement) {
    let div = document.createElement('div')
    div.innerHTML = this.icon.svg({ scale: this.scale })
    let svg = div.firstChild
    let attrs = {}

    for (let attr of svg.attributes) {
      attrs[attr.name] = attr.value
    }

    return createElement('svg', {
      attrs,
      domProps: {
        innerHTML: svg.innerHTML
      }
    })
  }
}
</script>
