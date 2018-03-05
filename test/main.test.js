/* eslint-disable */
import icons from '../src/data.js'
import { t } from './utils.js'

describe('CommonJS library', () => {
  describe('with built icons', () => {
    const Octicons = require('../')
    icons.forEach(icon => {
      t(Octicons[icon.camelName], icon)
    })
  })

  describe('with a fake icon', () => {
    jest.resetModules()
    jest.doMock(`../lib/icons/alert.js`, () => {
      return {
        default: 'something else'
      }
    })

    const Octicons = require('../')
    test(`replaces the alert icon to the fake one`, () => {
      expect(Octicons.alert).toBe('something else')
    })

    jest.unmock(`../lib/icons/alert.js`)
    jest.resetModules()
  })
})
