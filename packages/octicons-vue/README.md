# Vue Octicons
## Installation & Usage
### NPM
```bash
npm install --save octicons-vue
# or with yarn
yarn add octicons-vue
```

#### A single octicon
```vue
<script>
const { Octicon, markGithub } = require('octicons-vue')
// import Octicon, { markGithub } from 'octicons-vue'

new Vue({
  el: '#app',
  components: { Octicon },
  data: {
    markGithub
  }
})
</script>
<template>
  <Octicon :icon="markGithub" />
</template>
```
#### All octicons
```vue
<script>
const { Octicon, Octicons } = require('octicons-vue')
// import Octicon, { Octicons } from 'octicons-vue'

new Vue({
  el: '#app',
  components: { Octicon },
  data: {
    Octicons
  }
})
</script>
<template>
  <Octicon :icon="Octicons.alert" />
</template>
```

### API
#### Props

+ icon (object) - Octicon from `octicons-modular` library
+ scale (number) - Scale
    + Default: 1
+ className (string) - Additional classes
    + Default: null
+ label (string) - Label
    + Default: null

```vue
<Octicon :icon="icon" :scale="1" className="additional-class" label="another label" />
```

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
