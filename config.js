import path from 'path'

let baseConfig = {
  srcPath: path.resolve(__dirname, './src'),
  distPath: path.resolve(__dirname, './lib')
}

export default {
  srcPath: baseConfig.srcPath,
  distPath: baseConfig.distPath,
  entryPath: path.resolve(baseConfig.srcPath, 'main.js'),
  octiconPath: path.resolve(baseConfig.srcPath, 'octicons.js'),
  iifePath: path.resolve(baseConfig.srcPath, 'iife.js'),
  reactPath: path.resolve(baseConfig.srcPath, 'react/Octicon.jsx'),
  vuePath: path.resolve(baseConfig.srcPath, 'vue/Octicon.vue')
}
