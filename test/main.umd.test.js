import icons from '../src/data.js'
import { t } from './utils.js'

describe('UMD library', () => {
  const Octicons = require('../lib/main.umd')
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})
