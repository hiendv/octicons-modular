import {
  default as octicons,
  alert
} from '../lib/main.esm.js'

describe('es bundle', () => {
  test('has alert', () => {
    expect(octicons.alert).toEqual(expect.objectContaining({
      name: 'alert',
      svg: expect.any(Function)
    }))
  })

  test('export named alert', () => {
    expect(alert).toEqual(expect.objectContaining({
      name: 'alert',
      svg: expect.any(Function)
    }))
  })
})
