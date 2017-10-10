import { icons } from './fixtures/icons.js'

import octicons, * as named from '../lib/main.es.js'
import camelCase from 'lodash.camelcase'

describe('es bundle', () => {
  icons.forEach(icon => {
    const name = camelCase(icon)
    test(`has ${icon}`, () => {
      expect(octicons[name]).toEqual(expect.objectContaining({
        name: icon,
        svg: expect.any(Function)
      }))
    })

    test(`exports named ${icon}`, () => {
      expect(named[name]).toEqual(expect.objectContaining({
        name: icon,
        svg: expect.any(Function)
      }))
    })
  })
})
