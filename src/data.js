import mapValues from 'lodash.mapvalues'
import octicons from 'octicons/build/data'
import { parseFragment, serialize } from 'parse5'

const data = mapValues(octicons, o => {
  o.path = serialize(parseFragment(o.path))
  return o
})

export default data
