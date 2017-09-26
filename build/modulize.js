const config = require('../config.js')
const helpers = require('../helpers.js')
const fs = require('fs')
const path = require('path')
const handleBars = require('handlebars')
const camelCase = require('lodash.camelcase')
const octicons = require('octicons/build/data')

handleBars.registerHelper('jsonObject', context => JSON.stringify(context))
let iconTemplate = handleBars.compile(`/* eslint-disable */
import factory from '../factory'
export default factory('{{ name }}', {{{ jsonObject data }}})
`)

let mainExports = ''
const modulize = () => {
  helpers.info(`Modulizing icons from octicons data`)

  let count = Object.entries(octicons).length
  Object.entries(octicons).forEach(([name, data]) => {
    const icon = `./icons/${name}.js`
    mainExports += `export { default as ${camelCase(name)} } from '${icon}'
`
    fs.writeFile(path.resolve(config.srcPath, icon), iconTemplate({name, data}), err => {
      if (err) {
        throw err
      }

      count--
      return count > 0 ? null : fs.writeFile(config.octiconPath, mainExports, err => {
        if (err) {
          throw err
        }
      })
    })
  })
}

modulize()
