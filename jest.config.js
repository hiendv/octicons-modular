module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test/fixtures'],
  setupFiles: ['./test/fixtures/shim.js']
}
