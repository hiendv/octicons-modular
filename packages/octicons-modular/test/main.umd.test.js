import icons from '../build/data.js'
import { t } from './utils.js'

describe('UMD library', () => {
  const Octicons = require('../lib/main.umd')
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})
