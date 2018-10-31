import factory from '../src/octicon.js'
import { t } from './utils.js'

describe('octicon', () => {
  t(factory('name', 16, 16, {}))
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
