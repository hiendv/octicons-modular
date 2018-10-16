import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import buble from 'rollup-plugin-buble'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.jsx'),
    output: {
      file: path.resolve(__dirname, 'lib/Octicon.js'),
      format: 'cjs',
      interop: false
    },
    external: [
      'react',
      'prop-types'
    ],
    plugins: [ buble() ]
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.jsx'),
    output: {
      file: path.resolve(__dirname, 'es/Octicon.js'),
      format: 'es',
      interop: false
    },
    external: [
      'react',
      'prop-types'
    ],
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
    external: [
      'octicons-modular',
      './Octicon'
    ],
    plugins: [ resolve({ extensions: [ '.js', '.json', '.jsx' ] }), postcss(), buble() ]
  },
  {
    input: path.resolve(__dirname, 'src/main.js'),
    output: {
      file: path.resolve(__dirname, 'es/main.js'),
      format: 'es',
      interop: false
    },
    external: [
      'octicons-modular',
      './Octicon'
    ],
    plugins: [ resolve({ extensions: [ '.js', '.json', '.jsx' ] }), postcss(), buble() ]
  }
]
