# Modular Octicons
[![Build Status](https://travis-ci.org/hiendv/octicons-modular.svg?branch=master)](https://travis-ci.org/hiendv/octicons-modular) [![dependencies Status](https://david-dm.org/hiendv/octicons-modular/status.svg)](https://david-dm.org/hiendv/octicons-modular) [![devDependencies Status](https://david-dm.org/hiendv/octicons-modular/dev-status.svg)](https://david-dm.org/hiendv/octicons-modular?type=dev)

It's technically [GitHub Octicons](https://github.com/primer/octicons) but with the icon-per-file style.

## Installation
```bash
npm install --save octicons-modular
# Or with yarn
yarn add octicons-modular
```

## Usage
### Modular
```js
// CSS
import 'octicons-modular/main.css'
// require('octicons-modular/main.css')

// Icon
import markGithub from 'octicons-modular/icons/mark-github'
// const markGithub = require('octicons-modular/icons/mark-github')

markGithub.svg()
// '<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true" ><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'

```

### Normal
```js
// CSS
import 'octicons-modular/main.css'
// require('octicons-modular/main.css')

import octicons from 'octicons-modular'
// const octicons = require('octicons-modular')

octicons.zap.svg()
// '<svg version="1.1" width="10" height="16" viewBox="0 0 10 16" class="octicon octicon-zap" aria-hidden="true" ><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7z"/></svg>'
```

### Tree-shaking
Coming soon!

## Options
```js
octicons.zap.svg({
  'scale': 1 // Scale the SVG. Default: 1.
  'aria-label': 'very fast' // Set the aria-label attribute. Default: undefined.
  'class': 'an-additional-class' // Add a custom class. Default: null.
})
```

## Supported octicons
[Octicons v6.0.1](https://github.com/primer/octicons/tree/v6.0.1/lib/svg). Below are some of them. More with previews at [GitHub Octicons](https://octicons.github.com/)
![Octicons](https://raw.githubusercontent.com/hiendv/octicons-modular/master/octicons.png)

## Development
```bash
git clone https://github.com/hiendv/octicons-modular.git && cd octicons-modular
npm install
npm run dev

# Build?
npm run build

# Patch and release?
npm run version-patch && npm run publish
```

## Testing
```bash
npm test
```

## Contribution
Issues and PRs are welcome !
