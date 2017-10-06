describe('an icon', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('calls the attrs method once when calling the svg method', () => {
    var zap = require('../lib/icons/zap.js')
    zap.attrs = jest.fn()
    zap.svg()

    expect(zap.attrs).toHaveBeenCalled()
  })

  test('calls the attrs method with the same parameters once when calling the svg method', () => {
    var zap = require('../lib/icons/zap.js')
    const options = {
      key: 'value'
    }

    zap.attrs = jest.fn()
    zap.svg(options)

    expect(zap.attrs).toHaveBeenCalledWith(options)
  })

  test('calls the attrsFormat method once when calling the svg method', () => {
    var zap = require('../lib/icons/zap.js')
    zap.attrsFormat = jest.fn()
    zap.svg()

    expect(zap.attrsFormat).toHaveBeenCalled()
  })

  test('calls the attrs method and receive the value returned from attrsFormat method once when calling the svg method', () => {
    var zap = require('../lib/icons/zap.js')
    zap.attrsFormat = jest.fn()
    .mockReturnValue('value')

    zap.svg()

    expect(zap.attrsFormat).toHaveBeenCalled()
    expect(zap.attrs()).toBe('value')
  })
})
