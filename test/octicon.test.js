beforeEach(() => {
  jest.resetModules()
})

describe('mock', () => {
  test(`works with icons`, () => {
    jest.doMock(`../lib/icons/alert.js`, () => {
      return {
        default: 'something else'
      }
    })
    const Octicons = require('../lib/main.js')
    jest.unmock(`../lib/icons/alert.js`)

    expect(Octicons.alert).toBe('something else')
  })

  test('works with the factory', () => {
    jest.doMock(`../lib/octicon.js`, () => {
      return (name, data) => {
        return name
      }
    })
    const Octicons = require('../lib/main.js')
    jest.unmock(`../lib/octicon.js`)

    expect(Octicons.alert).toBe('alert')
  })
})
