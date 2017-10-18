import config from './config.js'
import pkg from './package.json'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'
import uglify from 'rollup-plugin-uglify'
import postcss from 'postcss'
import cssnano from 'cssnano'

const plugins = [
  cjs(),
  resolve(),
  babel({
    babelrc: false,
    presets: [
      [
        'env',
        {
          'modules': false
        }
      ],
      'stage-2'
    ],
    comments: false
  })
]

// it has to be this way T.T
// try rollup -c and see the difference between this and export { plugins }
exports.plugins = plugins

export default [
  {
    input: config.entryPath,
    output: { file: path.resolve(config.distPath, pkg.main), format: 'cjs' },
    plugins: [
      sass({
        options: {
          includePaths: [
            path.join(__dirname, 'node_modules')
          ]
        },
        processor: css => postcss([cssnano()]).process(css).then(result => result.css),
        output: path.resolve(config.distPath, pkg.style)
      }),
      ...plugins
    ],
    external: id => /icons\/[\w-]+\.js/.test(id)
  },
  {
    input: config.octiconPath,
    output: { file: path.resolve(config.distPath, pkg.module), format: 'es' },
    plugins,
    external: id => /icons\/[\w-]+\.js/.test(id)
  },
  {
    input: config.iifePath,
    output: { file: path.resolve(config.distPath, pkg.browser), format: 'iife', name: 'Octicons' },
    plugins: [
      uglify(),
      ...plugins
    ]
  }
]
