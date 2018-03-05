import camelCase from 'lodash.camelcase'
import mapValues from 'lodash.mapvalues'
import octicons from 'octicons/build/data'
import { parseFragment, serialize } from 'parse5'

const icons = mapValues(octicons, o => {
  o.path = serialize(parseFragment(o.path))
  return o
})

if (!Object.entries) {
  Object.entries = obj => {
    let ownProps = Object.keys(obj)
    let i = ownProps.length
    let resArray = new Array(i)

    while (i--) {
      resArray[i] = [ ownProps[i], obj[ownProps[i]] ]
    }

    return resArray
  }
}

const data = Object.entries(icons).map(([ name, data ]) => ({
  name,
  data,
  camelName: camelCase(name)
}))

export default data
