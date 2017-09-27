const octicons = require('../lib/main.common.js')

describe('commonjs bundle', () => {
  test('has alert', () => {
    expect(octicons.alert).toEqual(expect.objectContaining({
      name: 'alert',
      svg: expect.any(Function)
    }))
  })

  test('has zap', () => {
    expect(octicons.zap).toEqual(expect.objectContaining({
      name: 'zap',
      svg: expect.any(Function)
    }))
  })
})
