/**
 * @jest-environment node
 */

import path from 'path'
import { rollup } from 'rollup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

describe('Rollup tree-shaking', () => {
  test('works', done => {
    roll(path.resolve(__dirname, 'main.js')).then(code => {
      expect(code).toMatchSnapshot()
      done()
    })
  })
})

const roll = async entry => {
  const bundle = await rollup({
    input: entry,
    plugins: [ resolve(), commonjs() ]
  })

  const { code } = await bundle.generate({
    output: {
      format: 'es'
    }
  })
  return code
}