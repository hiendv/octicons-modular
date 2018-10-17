import chalk from 'chalk'
import path from 'path'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import postcssImport from 'postcss-import'

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
  return [
    {
      input: icon.path,
      output: [ {
        format: 'cjs',
        file: path.resolve(config.paths.destIcons, icon.file),
        interop: false
      } ],
      external: id => /\/octicon\.js/.test(id)
    },
    {
      input: icon.path,
      output: [ {
        format: 'es',
        file: path.resolve(config.paths.destIconsES, icon.file),
        interop: false
      } ],
      external: id => /\/octicon\.js/.test(id)
    }
  ]
}

export function rollupMainConfig () {
  let input = config.paths.srcMain
  return [
    {
      input: config.paths.srcIconBase,
      output: {
        file: config.paths.destIconBase,
        format: 'cjs',
        exports: 'default'
      },
      plugins: [ buble() ]
    },
    {
      input: config.paths.srcIconBase,
      output: {
        file: config.paths.destIconBaseES,
        format: 'es',
        exports: 'default'
      },
      plugins: [ buble() ]
    },
    {
      input,
      output: {
        file: config.paths.destMainUMD,
        format: 'umd',
        exports: 'named',
        name: config.name
      },
      plugins: [
        resolve(),
        postcss({
          plugins: [ postcssImport() ],
          minimize: true
        }),
        buble(),
        uglify()
      ]
    },
    {
      input,
      output: {
        file: config.paths.destMain,
        format: 'cjs',
        exports: 'named',
        interop: false
      },
      plugins: [
        postcss({
          plugins: [ postcssImport() ],
          minimize: true,
          extract: true
        }),
        buble()
      ],
      external: id => new RegExp(`${config.paths.iconsDir}/`).test(id)
    },
    {
      input,
      output: {
        file: config.paths.destMainES,
        format: 'es'
      },
      plugins: [
        postcss({
          plugins: [ postcssImport() ],
          minimize: true,
          extract: false,
          inject: false
        }),
        buble()
      ],
      external: id => new RegExp(`${config.paths.iconsDir}/`).test(id)
    }
  ]
}

export default { info, infoStd, success, successStd, rollupIconConfig, rollupMainConfig }
