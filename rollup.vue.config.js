import config from './config.js'
import pkg from './package.json'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'
import vue from 'rollup-plugin-vue'

const transformRequire = require('vue-loader/lib/template-compiler/modules/transform-require')

export default {
  input: config.vuePath,
  output: { file: path.resolve(config.distPath, 'vue/index.vue'), format: 'cjs' },
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
