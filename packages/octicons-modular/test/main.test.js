import icons from '../build/data.js'
import { t } from './utils.js'

describe('CommonJS library', () => {
  const Octicons = require('../lib/main.js')
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})
