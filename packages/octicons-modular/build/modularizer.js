import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

import config from '../config'
import data from '../src/data'

const single = icon => new Promise((resolve, reject) => {
  ejs.renderFile(config.templates.icon, icon, {}, (err, str) => {
    if (err) {
      reject(err)
      return
    }

    icon.file = `${icon.name}.js`
    icon.path = path.resolve(config.paths.srcIcons, icon.file)

    fs.writeFile(icon.path, str, err => {
      if (err) {
        reject(err)
        return
      }

      resolve(icon)
    })
  })
})
const multiple = icons => Promise.all(icons.map(single))
const modularizer = () => {
  return new Promise((resolve, reject) => {
    multiple(data).then(resolve)
  })
}

export default modularizer
