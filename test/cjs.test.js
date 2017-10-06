import camelCase from 'lodash.camelcase'

const icons = require('./fixtures/icons.js')

describe('commonjs bundle with a mocked icon', () => {
  const mockedIcon = 'alert'
  const mockedName = camelCase(mockedIcon)

  beforeAll(() => {
    jest.doMock(`../lib/icons/${mockedIcon}.js`, () => {
      return {
        default: {
          name: 'mocked-alert',
          svg: function () {}
        }
      }
    })
  })

  afterAll(() => {
    jest.unmock(`../lib/icons/${mockedIcon}.js`)
    jest.resetModules()
  })

  test(`imports ${mockedIcon} using default key`, () => {
    const octicons = require('../lib/main.common.js')
    expect(octicons[mockedName]).toEqual(expect.objectContaining({
      name: 'mocked-alert',
      svg: expect.any(Function)
    }))
  })
})

describe('commonjs bundle original', () => {
  icons.forEach(icon => {
    test(`has ${icon}`, () => {
      const octicons = require('../lib/main.common.js')
      const name = camelCase(icon)
      expect(octicons[name]).toEqual(expect.objectContaining({
        name: icon,
        svg: expect.any(Function)
      }))
    })
  })
})
