import path from 'path'
import glob from 'glob'

import config from '../config.js'
import helpers from '../helpers.js'
import { default as baseConfigs } from '../rollup.config.js'
import plugins from '../rollup.plugins.js'

const rollup = require('rollup')

const rollIcon = (name, input) => new Promise(async (resolve, reject) => {
  const bundle = await rollup.rollup({
    input,
    plugins: plugins.withBabel().all(),
    external: false
  })

  resolve({
    name,
    bundle
  })
})

const buildBundles = async () => {
  helpers.info(`Building bundles`)

  baseConfigs.forEach(async baseConfig => {
    const bundle = await rollup.rollup(baseConfig)
    await bundle.write(baseConfig.output)
    helpers.success(`Built bundle: ${baseConfig.output.format} format`)
  })
}

const buildIcons = () => new Promise((resolve, reject) => {
  helpers.info(`Building icons`)

  glob(path.resolve(config.srcPath, 'icons/*.js'), (err, files) => {
    if (err) {
      reject(err)
    }

    Promise.all(files.map(file => rollIcon(path.basename(file), file)))
      .then(icons => Promise.all(
        icons.map(icon => icon.bundle.write({ format: 'cjs', file: path.resolve(config.distPath, 'icons', icon.name) }))
      ))
      .then(bundles => {
        helpers.success(`Built icons: ${bundles.length} icons`)
      })
      .then(resolve)
  })
})

buildIcons().then(buildBundles)
