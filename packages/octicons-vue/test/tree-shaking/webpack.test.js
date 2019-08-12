/**
 * @jest-environment node
 */

import path from 'path'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'

describe('Webpack tree-shaking', () => {
  test('works', done => {
    const fs = new MemoryFS()
    const compiler = webpack({
      entry: path.resolve(__dirname, 'main.js'),
      output: {
        filename: 'main.js',
        path: '/'
      },
      optimization: {
        sideEffects: true
      },
      mode: 'production'
    })

    compiler.outputFileSystem = fs

    compiler.run((err, stats) => {
      expect(err).toBeFalsy()

      const code = fs.readFileSync('/main.js').toString('utf8')
      expect(code).toMatchSnapshot()
      done()
    })
  })
})
