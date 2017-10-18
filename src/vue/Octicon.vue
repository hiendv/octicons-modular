<template>
  <span v-html="icon.svg({ scale: scale })"></span>
</template>
<script>
import 'octicons/build/octicons.min.css'
export default {
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
}
</script>
