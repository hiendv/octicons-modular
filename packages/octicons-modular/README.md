# Modular Octicons
## Installation & Usage
### Direct `<script/>` include
Load the UMD module `octicons-modular/lib/main.umd.js` and the style sheet `octicons-modular/lib/main.css`, `Octicons` will be registered as a global variable
```js
Octicons.alert.svg() instanceof SVGSVGElement
// true

Octicons.alert.svg()
// <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-alert"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
```

### NPM
```bash
npm install --save octicons-modular
# or with yarn
yarn add octicons-modular
```

```js
# you can import a single icon
const markGithub = require('octicons-modular/lib/icons/mark-github')
markGithub.svg() instanceof SVGSVGElement
// true

# or the whole library
const Octicons = require('octicons-modular')
Octicons.alert.svg() instanceof SVGSVGElement
// true
```

### API
#### `svg(options, doc)`
Returns an SVGSVGElement

+ options (object, optional) - Render options
    + scale (integer, optional): Scale
        + Default: 1
    + label (string, optional): Label
        + Default: null
    + class (string, optional): Additional class
        + Default: null
+ doc (object, optional) - Document
    + Default: document

**If you're NOT using `octicons-modular` with a front-end library e.g. Vue, React, you must pass a custom `document` as the second parameter to `svg()` method. Consider [jsdom](https://github.com/jsdom/jsdom).**

```js
icon.svg({
  scale: 1 // Scale the SVG
  label: 'very fast' // Set the aria-label attribute
  class: 'an-additional-class' // Add a custom class
}, document)
```

#### Tree-shaking
The library does support tree-shaking. See [the tests](test/tree-shaking) with rollup & webpack.

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
