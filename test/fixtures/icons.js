const octicons = require('octicons/build/data')

const icons = Object.keys(octicons)
const paths = icons.reduce((paths, name) => {
  return (paths[name] = octicons[name].path) && paths
}, {})

export {
  icons,
  paths
}

export default icons
