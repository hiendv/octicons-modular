import factory from '../src/octicon.js'
import { t } from './utils.js'

describe('utils', () => {
  t(factory('name', {
    width: 16,
    height: 16,
    path: '<path/>'
  }))
})

describe('octicons', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('works with a fake factory', () => {
    jest.doMock(`../lib/octicon.js`, () => {
      return (name, data) => {
        return name
      }
    })
    const Octicons = require('../lib/main.js')
    jest.unmock(`../lib/octicon.js`)

    expect(Octicons.alert).toBe('alert')
    expect(Octicons.zap).toBe('zap')
  })
})
