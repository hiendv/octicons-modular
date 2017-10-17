import fs from 'fs'
import path from 'path'
import handleBars from 'handlebars'
import camelCase from 'lodash.camelcase'
import octicons from 'octicons/build/data'

import config from '../config.js'
import helpers from '../helpers.js'

handleBars.registerHelper('jsonObject', context => JSON.stringify(context))
handleBars.registerPartial('iconMethods', fs.readFileSync(path.resolve(config.srcPath, 'templates/iconMethods.hbs'), 'utf8'))
const iconTemplate = handleBars.compile(fs.readFileSync(path.resolve(config.srcPath, 'templates/icon.hbs'), 'utf8'))
const octiconTemplate = handleBars.compile(fs.readFileSync(path.resolve(config.srcPath, 'templates/octicons.hbs'), 'utf8'))
const iifeTemplate = handleBars.compile(fs.readFileSync(path.resolve(config.srcPath, 'templates/iife.hbs'), 'utf8'))

const modulize = () => {
  helpers.info(`Modulizing icons from octicons data`)

  const icons = Object.entries(octicons).map(([name, data]) => ({
    name,
    data,
    camelName: camelCase(name)
  }))

  fs.writeFile(config.iifePath, iifeTemplate({icons}), err => {
    if (err) {
      throw err
    }
  })

  let mainImports = {}
  let mainExports = {}

  const iconPromises = icons.map(icon => {
    const iconPath = `./icons/${icon.name}.js`
    const strictName = `${icon.camelName}Icon`

    mainImports[strictName] = iconPath
    mainExports[strictName] = icon.camelName

    return new Promise((resolve, reject) => {
      fs.writeFile(path.resolve(config.srcPath, iconPath), iconTemplate(icon), err => {
        if (err) {
          reject(err)
          return
        }

        resolve(icon)
      })
    })
  })

  Promise.all(iconPromises).then(octicons => {
    fs.writeFile(config.octiconPath, octiconTemplate({mainImports, mainExports}), err => {
      if (err) {
        throw err
      }

      helpers.success(`Modulizing icons from octicons data: ${octicons.length} icons`)
    })
  })
}

modulize()
