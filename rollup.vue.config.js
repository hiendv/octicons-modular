import path from 'path'

import config from './config.js'
import plugins from './rollup.plugins.js'

export default {
  input: config.vuePath,
  output: { file: path.resolve(config.distPath, 'vue/index.js'), format: 'cjs' },
  plugins: plugins.withVue(path.resolve(config.distPath, 'vue/style.css')).all()
}
