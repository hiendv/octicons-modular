import config from './config.js'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'
import postcss from 'postcss'
import cssnano from 'cssnano'

export default {
  input: config.reactPath,
  output: { file: path.resolve(config.distPath, 'react/index.js'), format: 'cjs' },
  plugins: [
    sass({
      options: {
        includePaths: [
          path.join(__dirname, 'node_modules')
        ]
      },
      processor: css => postcss([cssnano()]).process(css).then(result => result.css),
      output: path.resolve(config.distPath, 'react/style.css')
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
