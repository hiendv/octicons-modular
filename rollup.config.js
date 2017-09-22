const config = require('./config.js')
const pkg = require('./package.json')
const cjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const path = require('path')

module.exports = {
  input: config.entryPath,
  output: [
    { file: path.resolve(config.distPath, pkg.main), format: 'cjs' },
    { file: path.resolve(config.distPath, pkg.module), format: 'es' }
  ],
  plugins: [
    cjs(),
    resolve(),
    babel({
      babelrc: false,
      plugins: ['external-helpers'],
      externalHelpers: true
    })
  ],
  external: id => /icons\/[\w-]+\.js/.test(id)
}
