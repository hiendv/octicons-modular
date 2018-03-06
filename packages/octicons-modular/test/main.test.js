import icons from '../src/data.js'
import { t } from './utils.js'

describe('CommonJS library', () => {
  describe('with built icons', () => {
    const Octicons = require('../lib/main.js')
    icons.forEach(icon => {
      t(Octicons[icon.camelName], icon)
    })
  })
})
