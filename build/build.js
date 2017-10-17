import path from 'path'
import glob from 'glob'

import config from '../config.js'
import helpers from '../helpers.js'
import { default as baseConfigs, plugins, rollupReact, rollupVue } from '../rollup.config.js'

const rollup = require('rollup')

const buildBundles = async () => {
  helpers.info(`Building bundles`)

  baseConfigs.forEach(async baseConfig => {
    const bundle = await rollup.rollup(baseConfig)
    await bundle.write(baseConfig.output)
    helpers.success(`Building bundles: ${baseConfig.output.format} format`)
  })
}

const rollIcon = (name, input) => {
  return new Promise(async (resolve, reject) => {
    const bundle = await rollup.rollup({
      input,
      plugins,
      external: false
    })

    resolve({
      name,
      bundle
    })
  })
}

const buildReact = async () => {
  helpers.info(`Building React`)
  const bundle = await rollup.rollup(rollupReact)
  await bundle.write(rollupReact.output)
  helpers.success(`Building React: DONE`)
}

const buildVue = async () => {
  helpers.info(`Building Vue`)
  const bundle = await rollup.rollup(rollupVue)
  await bundle.write(rollupVue.output)
  helpers.success(`Building Vue: DONE`)
}

const buildIcons = () => {
  helpers.info(`Building icons`)

  glob(path.resolve(config.srcPath, 'icons/*.js'), (err, files) => {
    if (err) {
      throw err
    }

    Promise.all(files.map(file => rollIcon(path.basename(file), file)))
      .then(icons => Promise.all(
        icons.map(icon => icon.bundle.write({ format: 'cjs', file: path.resolve(config.distPath, 'icons', icon.name) }))
      ))
      .then(bundles => {
        helpers.success(`Building icons: ${bundles.length} icons`)
      })
      .then(buildReact)
      .then(buildVue)
      .then(buildBundles)
  })
}

buildIcons()
