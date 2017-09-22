const config = require('../config.js')
const helpers = require('../helpers.js')
const rollup = require('rollup')
const path = require('path')
const glob = require('glob')
const baseConfig = require('../rollup.config.js')

const roll = async (name, input) => {
  const bundle = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rollup.rollup({
        input,
        plugins: baseConfig.plugins,
        external: false
      }))
    }, 2000)
  })

  bundle.write({
    format: 'cjs',
    file: path.resolve(config.distPath, 'icons', name)
  })
}

const buildBundles = async () => {
  helpers.info(`Building bundles`)

  const bundle = await rollup.rollup(baseConfig)
  baseConfig.output.forEach(async output => {
    bundle.write(output)
  })
}

const buildIcons = () => {
  helpers.info(`Building icons`)

  glob(path.resolve(config.srcPath, 'icons/*.js'), (err, files) => {
    if (err) {
      throw err
    }

    let count = files.length
    files.forEach(async file => {
      const name = path.basename(file)
      await roll(name, file)
      count--
      if (count > 0) {
        return
      }
      buildBundles()
    })
  })
}

buildIcons()
