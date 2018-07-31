import path from 'path'

export default [
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.js'),
      format: 'cjs',
      interop: false
    }
  },
  {
    input: path.resolve(__dirname, 'src/Octicon.js'),
    output: {
      file: path.resolve(__dirname, 'lib/main.es.js'),
      format: 'es',
      interop: false
    }
  }
]
