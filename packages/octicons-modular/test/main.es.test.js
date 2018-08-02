import icons from '../build/data.js'
import { t } from './utils.js'

describe('ES library', () => {
  const Octicons = require('../es/main.js')
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})
