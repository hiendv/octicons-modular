import fs from 'fs'
import path from 'path'
import handleBars from 'handlebars'
import camelCase from 'lodash.camelcase'
import octicons from 'octicons/build/data'

import config from '../config.js'
import helpers from '../helpers.js'

handleBars.registerHelper('jsonObject', context => JSON.stringify(context))
const iconTemplate = handleBars.compile(`/* eslint-disable */
import factory from '../factory'
export default factory('{{ name }}', {{{ jsonObject data }}})
`)

const mainTemplate = handleBars.compile(`{{#each mainImports}}import {{@key}} from '{{this}}'
{{/each}}

{{#each mainExports}}export { {{@key}} as {{this}} }
{{/each}}
`)

const modulize = () => {
  helpers.info(`Modulizing icons from octicons data`)

  let mainImports = {}
  let mainExports = {}

  const iconPromises = Object.entries(octicons).map(([name, data]) => {
    const iconPath = `./icons/${name}.js`
    const camelName = camelCase(name)
    const strictName = `${camelName}Icon`

    mainImports[strictName] = iconPath
    mainExports[strictName] = camelName

    return new Promise((resolve, reject) => {
      fs.writeFile(path.resolve(config.srcPath, iconPath), iconTemplate({name, data}), err => {
        if (err) {
          reject(err)
          return
        }

        resolve({name})
      })
    })
  })

  Promise.all(iconPromises).then(icons => {
    fs.writeFile(config.octiconPath, mainTemplate({mainImports, mainExports}), err => {
      if (err) {
        throw err
      }

      helpers.success(`Modulizing icons from octicons data: ${icons.length} icons`)
    })
  })
}

modulize()
