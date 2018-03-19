# Modular Octicons
## Installation
```bash
npm install --save octicons-modular
# Or with yarn
yarn add octicons-modular
```

## Usage
### Styling
You may want to import or load the stylesheet at `octicons-modular/main.css`

### Modular
```js
import markGithub from 'octicons-modular/lib/icons/mark-github'
// const markGithub = require('octicons-modular/lib/icons/mark-github')

markGithub.svg()
// '<svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>'
```

### Bundle
```js
import octicons from 'octicons-modular'
// const octicons = require('octicons-modular')

octicons.zap.svg()
// '<svg version="1.1" width="10" height="16" viewBox="0 0 10 16" class="octicon octicon-zap" aria-hidden="true"><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7z"></path></svg>'
```

### Tree-shaking
The package supports tree-shaking when importing octicons with Webpack 2 or Rollup.
```js
// main.js
import { alert, zap } from 'octicons-modular'
console.log(alert.svg()) // the zap icon is left untouched intentionally
```

```js
// rollup.config.js
export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  }
}
```

```bash
rollup -v
# rollup version 0.50.0

rollup -c rollup.config.js && node bundle.js
# <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-alert" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
```

```js
// bundle.js
function octicon(t,a){const{width:e,height:i}=a;return{name:t,data:a,options:{version:"1.1",width:e,height:i,viewBox:`0 0 ${e} ${i}`,class:`octicon octicon-${t}`,"aria-hidden":"true"},svg(t){return`<svg ${this.attrs(t)}>${this.data.path}</svg>`},attrs(t){let a=Object.assign({},this.options,t);return t?(this.attrLabel(a,t["aria-label"]), this.attrClass(a,t.class), this.attrScale(a,t.scale), this.attrsFormat(a)):this.attrsFormat(a)},attrLabel(t,a){a&&(t["aria-label"]=a, t.role="img", delete t["aria-hidden"]);},attrClass(t,a){a&&(t.class=`octicon octicon-${this.name} ${a}`);},attrScale(t,a){let e=0===a?0:parseFloat(a)||1,i=e*parseInt(t.width),s=e*parseInt(t.height);t.width=Number(i.toFixed(2)), t.height=Number(s.toFixed(2)), delete t.scale;},attrsFormat:t=>Object.keys(t).map(a=>`${a}="${t[a]}"`).join(" ").trim()}}

var alert=octicon("alert",{keywords:["warning","triangle","exclamation","point"],path:'<path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path>',height:"16",width:"16"});

console.log(alert.svg()); // the zap icon is left untouched intentionally
```
As you can see, we got rid of extra/unused icons.

## Options
```js
octicons.zap.svg({
  'scale': 1 // Scale the SVG. Default: 1.
  'aria-label': 'very fast' // Set the aria-label attribute. Default: undefined.
  'class': 'an-additional-class' // Add a custom class. Default: null.
})
```

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
