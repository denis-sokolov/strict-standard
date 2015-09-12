'use strict'

var Linter = require('standard-engine').linter

var options = require('./options')

module.exports = new Linter(options)
