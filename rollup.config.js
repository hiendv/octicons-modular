import config from './config.js'
import pkg from './package.json'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import css from 'rollup-plugin-css-only'
import vue from 'rollup-plugin-vue'
import uglify from 'rollup-plugin-uglify'

const transformRequire = require('vue-loader/lib/template-compiler/modules/transform-require')

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

exports.rollupReact = {
  input: config.reactPath,
  output: { file: path.resolve(config.distPath, 'react/index.js'), format: 'es' },
  plugins: [
    css({
      output: path.resolve(config.distPath, pkg.style)
    }),
    cjs(),
    resolve(),
    babel({
      babelrc: false,
      presets: [
        'react',
        'stage-2'
      ],
      comments: false
    })
  ]
}

exports.rollupVue = {
  input: config.vuePath,
  output: { file: path.resolve(config.distPath, 'vue/index.vue'), format: 'es' },
  plugins: [
    css({
      output: path.resolve(config.distPath, pkg.style)
    }),
    cjs(),
    resolve(),
    vue({
      compileOptions: {
        modules: [transformRequire({})]
      }
    })
  ]
}

export default [
  {
    input: config.entryPath,
    output: { file: path.resolve(config.distPath, pkg.main), format: 'cjs' },
    plugins: [
      css({
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
