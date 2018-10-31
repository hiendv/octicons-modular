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
  return {
    name,
    data: icons[name],
    camelName: camelCase(name)
  }
})

export default data
