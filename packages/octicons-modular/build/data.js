import camelCase from 'lodash.camelcase'
import mapValues from 'lodash.mapvalues'
import octicons from 'octicons/build/data'
import { parseFragment, serialize } from 'parse5'

const icons = mapValues(octicons, o => {
  let { keywords, path, width, height } = o
  path = serialize(parseFragment(path))

  return { keywords, path, width, height }
})

const data = Object.keys(icons).map(name => {
  const { keywords, path, width, height } = icons[name]
  const pathElm = parseFragment(path)
  // we assume that every octicon has one path only
  const pathAttrs = pathElm.childNodes[0].attrs.reduce((result, item) => {
    result[item.name] = item.value
    return result
  }, {})

  return {
    name,
    data: {
      keywords,
      path: pathAttrs,
      width,
      height
    },
    camelName: camelCase(name)
  }
})

export default data
