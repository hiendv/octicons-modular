import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false,
      exports: 'named'
    },
    plugins: [ resolve(), postcss() ],
    external: [ 'octicons-modular' ]
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.es.js'),
      format: 'es',
      interop: false
    },
    plugins: [ resolve(), postcss() ],
    external: [ 'octicons-modular' ]
  }
]
