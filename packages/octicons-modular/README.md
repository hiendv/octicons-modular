# Modular Octicons
## Installation & Usage
### Direct `<script/>` include
Load the UMD module [main.umd.min.js](https://cdn.jsdelivr.net/npm/octicons-modular@latest/lib/main.umd.min.js), `Octicons` will be registered as a global variable and the CSS is automatically injected.
```js
Octicons.alert.html()
// '<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-alert"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
```
#### CDN
[![](https://data.jsdelivr.com/v1/package/npm/octicons-modular/badge)](https://www.jsdelivr.com/package/npm/octicons-modular)
```html
<script src="https://cdn.jsdelivr.net/npm/octicons-modular@latest/lib/main.umd.min.js"></script>
```

[unpkg.com](https://unpkg.com/octicons-modular)
```html
<script src="https://unpkg.com/octicons-modular@latest/lib/main.umd.js"></script>
```
**Note: We recommend linking to a specific version number that you can update manually**


### NPM
```bash
npm install --save octicons-modular
# or with yarn
yarn add octicons-modular
```

```js
// import the stylesheet
require('octicons-modular/lib/main.css')

// 1. import a single icon
const markGithub = require('octicons-modular/lib/icons/mark-github')
// import markGithub from 'octicons-modular/lib/icons/mark-github'
// import { markGithub } from 'octicons-modular'

markGithub.html()
// '<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-mark-github"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'

// 2. or the whole library
const Octicons = require('octicons-modular')
// import Octicons from 'octicons-modular'

Octicons.alert.html()
// '<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-alert"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>'
```

### API
#### `attrs(options)`
Returns attributes of the SVGSVGElement

+ options (object, optional) - Render options
    + scale (integer, optional): Scale
        + Default: 1
    + label (string, optional): Label
        + Default: null
    + class (string, optional): Additional class
        + Default: null

#### `html(options)`
Returns an SVGSVGElement

+ options (object, optional) - Render options. Same as `attrs` options.

#### `path()`
Returns path attributes

#### `keywords()`
Return icon keywords

```js
icon.html({
  scale: 1 // Scale the SVG
  label: 'very fast' // Set the aria-label attribute
  class: 'an-additional-class' // Add a custom class
})
```

#### Tree-shaking
The library does support tree-shaking. See [the tests](test/tree-shaking) with rollup & webpack.

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
