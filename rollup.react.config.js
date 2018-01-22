import path from 'path'

import config from './config.js'
import plugins from './rollup.plugins.js'

export default {
  input: config.reactPath,
  output: { file: path.resolve(config.distPath, 'react/index.js'), format: 'cjs' },
  plugins: plugins.withBuble().withSass(path.resolve(config.distPath, 'react/style.css')).all(),
  external: [
    'react',
    'react-dom',
    'prop-types'
  ]
}
