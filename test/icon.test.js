import octicons from './fixtures/icons'

octicons.forEach(name => {
  describe(`${name} icon`, () => {
    beforeEach(() => {
      jest.resetModules()
    })

    test('calls the attrs method once when calling the svg method', () => {
      var icon = require(`../lib/icons/${name}.js`)
      icon.attrs = jest.fn()
      icon.svg()

      expect(icon.attrs).toHaveBeenCalled()
    })

    test('calls the attrs method with the same parameters once when calling the svg method', () => {
      var icon = require(`../lib/icons/${name}.js`)
      const options = {
        key: 'value'
      }

      icon.attrs = jest.fn()
      icon.svg(options)

      expect(icon.attrs).toHaveBeenCalledWith(options)
    })

    test('calls the attrsFormat method once when calling the svg method', () => {
      var icon = require(`../lib/icons/${name}.js`)
      icon.attrsFormat = jest.fn()
      icon.svg()

      expect(icon.attrsFormat).toHaveBeenCalled()
    })

    test('calls the attrs method and receive the value returned from attrsFormat method once when calling the svg method', () => {
      var icon = require(`../lib/icons/${name}.js`)
      icon.attrsFormat = jest.fn()
        .mockReturnValue('value')

      icon.svg()

      expect(icon.attrsFormat).toHaveBeenCalled()
      expect(icon.attrs()).toBe('value')
    })
  })
})
