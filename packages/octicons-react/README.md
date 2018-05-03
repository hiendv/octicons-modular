# React Octicons
## Installation & Usage
### NPM
```bash
npm install --save octicons-react
# or with yarn
yarn add octicons-react
```

```jsx
// 1st: Import needed icons
// a single icon
const markGithub = require('octicons-modular/lib/icons/mark-github')
// or the whole set
const Octicons = require('octicons-modular')

// 2nd: Import the react component
const Octicon = require('octicons-react')

// 3rd: You're good to go
ReactDOM.render(
  <Octicon icon={markGithub} />,
  document.querySelector('#root')
)

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
