import config from './config.js'
import pkg from './package.json'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import css from 'rollup-plugin-css-only'

export default {
  input: config.reactPath,
  output: { file: path.resolve(config.distPath, 'react/index.js'), format: 'cjs' },
  plugins: [
    css({
      output: path.resolve(config.distPath, pkg.style)
    }),
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
        'react',
        'stage-2'
      ],
      comments: false
    })
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ]
}
