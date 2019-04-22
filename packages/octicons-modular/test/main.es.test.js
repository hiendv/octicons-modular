import icons from '../build/data.js'
import { t } from './utils.js'
import * as Octicons from '../es/main.js'

describe('ES library', () => {
  icons.forEach(icon => {
    t(Octicons[icon.camelName], icon)
  })
})
