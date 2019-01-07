/**
 * @jest-environment node
 */

import path from 'path'
import { rollup } from 'rollup'
import resolve from 'rollup-plugin-node-resolve'

describe('Rollup tree-shaking', () => {
  test('works', done => {
    roll(path.resolve(__dirname, 'main.js')).then(code => {
      expect(code).toMatchSnapshot()
      done()
    })
  })
})

const roll = async entry => {
  let code = ''
  const bundle = await rollup({
    input: entry,
    plugins: [ resolve() ]
  })

  const { output } = await bundle.generate({
    output: {
      format: 'es'
    }
  })

  for (const chunkOrAsset of output) {
    if (chunkOrAsset.isAsset) {
      continue
    }

    code += chunkOrAsset.code
  }

  return code
}
