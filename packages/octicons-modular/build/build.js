import ejs from 'ejs'
import fs from 'fs'
import { rollup } from 'rollup'

import config from '../config'
import utils, { rollupIconConfig, rollupMainConfig } from '../utils'
import modularizer from './modularizer'

const roll = async config => {
  if (config instanceof Array) {
    return Promise.all(config.map(roll))
  }

  const bundle = await rollup(config)
  if (config.output instanceof Array) {
    // Multiple outputs
    return Promise.all(config.output.map(async c => {
      await bundle.write(c)
      return c.output
    }))
  }

  await bundle.write(config.output)
  return config.output
}

const buildIcons = icons => Promise.all(icons.map(icon => roll(rollupIconConfig(icon))))
const bundleMain = icons => new Promise((resolve, reject) => {
  ejs.renderFile(config.templates.icons, { icons }, {}, (err, str) => {
    if (err) {
      reject(err)
      return
    }

    fs.writeFile(config.paths.srcIconsMain, str, err => {
      if (err) {
        reject(err)
        return
      }

      resolve({
        icons,
        path: config.paths.srcIconsMain
      })
    })
  })
})

modularizer()
  .then(icons => {
    utils.success(`Modularized: ${icons.length} icons`)
    return icons
  })
  .then(icons => {
    buildIcons(icons)
      .then(icons => {
        utils.success(`Modularly Built: ${icons.length} icons`)
        return icons
      })

    bundleMain(icons)
      .then(({ path }) => {
        utils.success(`Main bundled: ${path}`)
        return path
      })
      .then(path => roll(rollupMainConfig()))
      .then(output => {
        if (output instanceof Array) {
          output.forEach(o => utils.success(`Main built: ${o.file} (${o.format})`))
          return
        }

        utils.success(`Main built: ${output.file} (${output.format})`)
      })
  })
