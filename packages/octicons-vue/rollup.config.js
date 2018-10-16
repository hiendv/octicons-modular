import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import buble from 'rollup-plugin-buble'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/Octicon.js'),
      format: 'cjs',
      interop: false
    },
    plugins: [ buble() ]
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'es/Octicon.js'),
      format: 'es',
      interop: false
    },
    plugins: [ buble() ]
  },
  {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false,
      exports: 'named'
    },
    plugins: [ resolve(), postcss(), buble() ],
    external: [ 'octicons-modular', './Octicon' ]
  },
  {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
      file: path.resolve(__dirname, 'es/main.js'),
      format: 'es',
      interop: false
    },
    plugins: [ resolve(), postcss(), buble() ],
    external: [ 'octicons-modular', './Octicon' ]
  }
]
