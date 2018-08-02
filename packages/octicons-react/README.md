# React Octicons
## Installation & Usage
### NPM
```bash
npm install --save octicons-react
# or with yarn
yarn add octicons-react
```

#### A single octicon
```jsx
const { Octicon, markGithub } = require('octicons-react')
// import Octicon, { markGithub } from 'octicons-react'

ReactDOM.render(
  <Octicon icon={markGithub} />,
  document.querySelector('#root')
)
```
#### All octicons
```jsx
const { Octicon, Octicons } = require('octicons-react')
// import Octicon, { Octicons } from 'octicons-react'

ReactDOM.render(
  <Octicon icon={Octicons.alert} />,
  document.querySelector('#root')
)
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

```jsx
ReactDOM.render(
  <Octicon icon={icon} scale={1} className="additional-class" label="another label" />,
  document.querySelector('#root')
)
```

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/octicons-modular/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
