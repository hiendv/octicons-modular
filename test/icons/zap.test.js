const zap = require('../../lib/icons/zap.js')

test(`zap is a valid icon`, () => {
  expect(zap).toEqual(expect.objectContaining({
    name: 'zap',
    svg: expect.any(Function)
  }))
})

test(`zap svg is a svg`, () => {
  expect(zap.svg()).toBe('<svg version="1.1" width="10" height="16" viewBox="0 0 10 16" class="octicon octicon-zap" aria-hidden="true" ><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7z"/></svg>')
})

test(`zap svg scales`, () => {
  expect(zap.svg({ scale: 2 })).toBe('<svg version="1.1" width="20" height="32" viewBox="0 0 10 16" class="octicon octicon-zap" aria-hidden="true" ><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7z"/></svg>')
})
