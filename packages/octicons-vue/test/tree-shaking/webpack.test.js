/**
 * @jest-environment node
 */

import path from 'path'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'

describe('Webpack tree-shaking', () => {
  test('works', done => {
    let fs = new MemoryFS()
    let compiler = webpack({
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

      let code = fs.readFileSync('/main.js').toString('utf8')
      expect(code).toMatchSnapshot()
      done()
    })
  })
})
