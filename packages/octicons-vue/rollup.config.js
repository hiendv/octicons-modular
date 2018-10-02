import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/Octicon.js'),
      format: 'cjs',
      interop: false
    }
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'es/Octicon.js'),
      format: 'es',
      interop: false
    }
  },
  {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false,
      exports: 'named'
    },
    plugins: [ resolve(), postcss() ],
    external: [ 'octicons-modular', './Octicon' ]
  },
  {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
      file: path.resolve(__dirname, 'es/main.js'),
      format: 'es',
      interop: false
    },
    plugins: [ resolve(), postcss() ],
    external: [ 'octicons-modular', './Octicon' ]
  }
]
