# Vue Octicons
## Installation & Usage
### NPM
```bash
npm install --save octicons-vue
# or with yarn
yarn add octicons-vue
```

```vue
// 1st: Import needed icons
// a single icon
const markGithub = require('octicons-modular/lib/icons/mark-github')
// or the whole set
const Octicons = require('octicons-modular')

// 2nd: Import the vue component
const Octicon = require('octicons-vue')

// 3rd: You're good to go
<Octicon :icon="markGithub" />

<Octicon :icon="Octicons.alert" />
```

### API
#### Props

+ icon (object) - Octicon from `octicons-modular` library
+ scale (number) - Scale
    + Default: 1
+ class (string) - Additional classes
    + Default: null
+ label (string) - Label
    + Default: null

```vue
<Octicon :icon="icon" :scale="1" class="additional-class" label="another label" />
```

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
