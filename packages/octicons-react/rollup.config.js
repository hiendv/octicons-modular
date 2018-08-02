import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.jsx'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false,
      exports: 'named'
    },
    external: [
      'react',
      'prop-types',
      'octicons-modular'
    ],
    plugins: [ resolve(), postcss() ]
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.jsx'),
    output: {
      file: path.resolve(__dirname, 'lib/main.es.js'),
      format: 'es',
      interop: false
    },
    external: [
      'react',
      'prop-types',
      'octicons-modular'
    ],
    plugins: [ resolve(), postcss() ]
  }
]
