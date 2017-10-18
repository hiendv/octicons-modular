import config from './config.js'
import fs from 'fs'
import path from 'path'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import transformRequire from 'vue-loader/lib/template-compiler/modules/transform-require'
import cssnano from 'cssnano'

export default {
  input: config.vuePath,
  output: { file: path.resolve(config.distPath, 'vue/index.js'), format: 'cjs' },
  plugins: [
    // rollup-plugin-vue provides its own style handling options
    // we could use <style> instead of rollup-plugin-css-only
    cjs(),
    resolve(),
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
        fs.writeFileSync(path.resolve(config.distPath, 'vue/style.css'), style)
      },
      postcss: {
        plugins: [cssnano()]
      }
    })
  ]
}
