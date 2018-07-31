import path from 'path'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.jsx'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false
    },
    external: [
      'react',
      'prop-types'
    ]
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
      'prop-types'
    ]
  }
]
