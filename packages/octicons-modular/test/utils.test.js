import { assign } from '../src/utils'

describe('assign', () => {
  test('works', () => {
    expect(assign({ foo: 'bar' }, {})).toEqual({ foo: 'bar' })
    expect(assign({}, { foo: 'bar' })).toEqual({ foo: 'bar' })
    expect(assign({ foo: 'bar' }, { foo: 'baz' })).toEqual({ foo: 'baz' })
  })

  test('survives the prototype pollution attack', () => {
    expect(assign({}, JSON.parse('{"__proto__":{"oops":"It works !"}}')).oops).toBeFalsy()
  })
})
