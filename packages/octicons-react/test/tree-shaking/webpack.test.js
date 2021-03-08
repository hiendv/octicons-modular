/**
 * @jest-environment node
 */

import path from 'path'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'

describe('Webpack tree-shaking', () => {
  test('works', () => {
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
      target: [ 'web', 'es5' ],
      mode: 'production'
    })

    compiler.outputFileSystem = fs

    return new Promise((resolve) => {
      compiler.run((err, stats) => {
        resolve({ err, stats })
      })
    }).then(({ err, stats }) => {
      expect(err).toBeFalsy()
      expect(stats.hasErrors()).toBeFalsy()

      const code = fs.readFileSync('/main.js').toString('utf8')
      expect(code).toMatchSnapshot()
    })
  })
})
