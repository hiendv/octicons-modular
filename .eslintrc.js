module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'jest'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    'jest/globals': true
  },
  extends: 'standard',
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
