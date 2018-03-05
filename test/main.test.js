import icons from '../src/data.js'
import { t } from './utils.js'

describe('CommonJS library', () => {
  const Octicons = require('../')
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})