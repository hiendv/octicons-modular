const octicons = require('../lib/main.common.js')

test('commonjs bundle has zap', () => {
  expect(octicons.zap).toEqual(expect.objectContaining({
    name: 'zap',
    svg: expect.any(Function)
  }))
})
