import path from 'path'

import config from './config.js'
import pkg from './package.json'
import plugins from './rollup.plugins.js'

export default [
  {
    input: config.entryPath,
    output: { file: path.resolve(config.distPath, pkg.main), format: 'cjs' },
    plugins: plugins.withBabel().withSass(path.resolve(config.distPath, pkg.style)).all(),
    external: id => /icons\/[\w-]+\.js/.test(id)
  },
  {
    input: config.octiconPath,
    output: { file: path.resolve(config.distPath, pkg.module), format: 'es' },
    plugins: plugins.withBabel().all(),
    external: id => /icons\/[\w-]+\.js/.test(id)
  },
  {
    input: config.iifePath,
    output: { file: path.resolve(config.distPath, pkg.browser), format: 'iife', name: 'Octicons' },
    plugins: plugins.withBabel().withUglify().all()
  }
]
