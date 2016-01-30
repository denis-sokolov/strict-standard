'use strict'

var eslint = require('eslint')
var path = require('path')
var pkg = require('../package.json')

module.exports = {
  cmd: 'strict-standard',
  eslint: eslint,
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Strict Standard',
  eslintConfig: {
    configFile: path.join(__dirname, '..', '.eslintrc')
  }
}
