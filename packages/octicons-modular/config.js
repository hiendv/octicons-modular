import path from 'path'

const _base = __dirname
export const paths = (base => {
  let _ = {
    src: path.resolve(base, './src'),
    dest: path.resolve(base, './lib'),
    es: path.resolve(base, './es'),
    build: path.resolve(base, './build'),
    templates: path.resolve(base, './build/templates'),
    nodeModules: path.resolve(base, 'node_modules'),
    iconsDir: 'icons'
  }

  _.srcMain = path.resolve(_.src, 'main.js')
  _.srcIconBase = path.resolve(_.src, 'octicon.js')
  _.srcIconsMain = path.resolve(_.src, 'icons.js')
  _.srcIcons = path.resolve(_.src, _.iconsDir)
  _.destIcons = path.resolve(_.dest, _.iconsDir)
  _.destIconsES = path.resolve(_.es, _.iconsDir)
  _.destMain = path.resolve(_.dest, 'main.js')
  _.destMainES = path.resolve(_.es, 'main.js')
  _.destIconBase = path.resolve(_.dest, 'octicon.js')
  _.destIconBaseES = path.resolve(_.es, 'octicon.js')
  _.destMainUMD = path.resolve(_.dest, 'main.umd.js')
  _.destMainStyle = path.resolve(_.dest, 'main.css')
  _.sassIncludePaths = [ _.nodeModules ]

  return _
})(_base)

export const name = 'Octicons'
export const templates = {
  icon: path.resolve(paths.templates, 'icon.ejs'),
  icons: path.resolve(paths.templates, 'icons.ejs')
}

export default {
  name,
  paths,
  templates
}
