const path = require('path')

let baseConfig = {
  srcPath: path.resolve(__dirname, './src'),
  distPath: path.resolve(__dirname, './lib')
}

module.exports = {
  srcPath: baseConfig.srcPath,
  distPath: baseConfig.distPath,
  entryPath: path.resolve(baseConfig.srcPath, 'main.js'),
  octiconPath: path.resolve(baseConfig.srcPath, 'octicons.js'),
  reactPath: path.resolve(baseConfig.srcPath, 'react/index.js')
}
