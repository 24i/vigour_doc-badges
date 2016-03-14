'use strict'

var _template = require('lodash.template')

module.exports = exports = function (_badges) {
  var res = []
  for (let key in _badges) {
    res.push(exports[key](_badges[key]))
  }
  return res.join('\n')
}

exports.travis = function (options) {
  if (!options.branch) {
    options.branch = 'master'
  }
  return exports.travis.template(options)
}
exports.travis.template = _template('[![Build Status](https://travis-ci.org/<%= owner %>/<%= repo %>.svg?branch=<%= branch %>)](https://travis-ci.org/<%= owner %>/<%= repo %>)')

exports.standard = function (options) {
  if (!options.style) {
    options.style = 'shield'
  }
  return exports.standard.template({
    url: exports.standard.urls[options.style]
  })
}
exports.standard.urls = {
  'shield': 'https://img.shields.io/badge/code%20style-standard-brightgreen.svg',
  'badge': 'https://cdn.rawgit.com/feross/standard/master/badge.svg'
}
exports.standard.template = _template('[![js-standard-style](<%= url %>)](http://standardjs.com/)')

exports.npm = function (options) {
  return exports.npm.template(options)
}
exports.npm.template = _template('[![npm version](https://badge.fury.io/js/<%= package %>.svg)](https://badge.fury.io/js/<%= package %>)')
