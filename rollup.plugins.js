import path from 'path'
import fs from 'fs'
import postcss from 'postcss'
import cssnano from 'cssnano'
import transformRequire from 'vue-loader/lib/template-compiler/modules/transform-require'

import sass from 'rollup-plugin-sass'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'

const postcssPlugins = [cssnano()]

class Plugins {
  constructor (items) {
    if (items && items.length) {
      this.items = items
      return
    }

    this.items = [
      cjs(),
      resolve()
    ]
  }

  withBabel () {
    return new Plugins([
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
      }),
      ...this.items
    ])
  }

  withBuble () {
    return new Plugins([
      buble({
        transforms: {
          dangerousForOf: true
        }
      }),
      ...this.items
    ])
  }

  withSass (output) {
    return new Plugins([
      sass({
        options: {
          includePaths: [
            path.join(__dirname, 'node_modules')
          ]
        },
        processor: css => postcss(postcssPlugins).process(css, { from: void 0 }).then(result => result.css),
        output
      }),
      ...this.items
    ])
  }

  withUglify () {
    return new Plugins([
      uglify(),
      ...this.items
    ])
  }

  withVue (cssOutput) {
    return new Plugins([
      vue({
        compileOptions: {
          modules: [transformRequire({})]
        },
        scss: {
          includePaths: [
            path.join(__dirname, 'node_modules')
          ]
        },
        css (style) {
          fs.writeFileSync(cssOutput, style)
        },
        postcss: {
          plugins: postcssPlugins
        }
      }),
      buble({
        transforms: {
          dangerousForOf: true
        }
      }),
      ...this.items
    ])
  }

  all () {
    return this.items
  }
}

export default new Plugins()
