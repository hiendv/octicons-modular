import chalk from 'chalk'
import cssnano from 'cssnano'
import path from 'path'
import postcss from 'postcss'
import sass from 'rollup-plugin-sass'
import uglify from 'rollup-plugin-uglify'

import config from './config'

export function info (text) {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bgBlue(text))
}

export function success (text) {
  // eslint-disable-next-line no-console
  console.log(chalk.white.bgGreen(text))
}

export function infoStd (text) {
  process.stdout.write(chalk.white.bgBlue(text))
}

export function successStd (text) {
  process.stdout.write(chalk.white.bgGreen(text))
}

export function rollupIconConfig (icon) {
  return {
    input: icon.path,
    output: [ {
      format: 'cjs',
      file: path.resolve(config.paths.destIcons, icon.file)
    }, {
      format: 'es',
      file: path.resolve(config.paths.destIconsES, icon.file)
    } ],
    plugins: [ uglify() ],
    external: id => /\/octicon\.js/.test(id)
  }
}

export function rollupMainConfig () {
  let input = config.paths.srcMain
  let plugins = [
    sass({
      options: { includePaths: [ path.join(__dirname, 'node_modules') ] },
      processor: css => postcss([ cssnano() ]).process(css, { from: void 0 }).then(result => result.css),
      output: config.paths.destMainStyle
    }),
    uglify()
  ]

  return [ {
    input: config.paths.srcIconBase,
    output: {
      file: config.paths.destIconBaseES,
      format: 'es'
    },
    plugins
  }, {
    input: config.paths.srcIconBase,
    output: {
      file: config.paths.destIconBase,
      format: 'cjs',
      exports: 'named'
    },
    plugins
  }, {
    input,
    output: {
      file: config.paths.destMainES,
      format: 'es'
    },
    plugins,
    external: id => new RegExp(`${config.paths.iconsDir}/`).test(id)
  }, {
    input,
    output: {
      file: config.paths.destMain,
      format: 'cjs',
      exports: 'named'
    },
    plugins,
    external: id => new RegExp(`${config.paths.iconsDir}/`).test(id)
  }, {
    input,
    output: {
      file: config.paths.destMainUMD,
      format: 'umd',
      exports: 'named',
      name: config.name
    },
    plugins
  } ]
}

export default { info, infoStd, success, successStd, rollupIconConfig, rollupMainConfig }
