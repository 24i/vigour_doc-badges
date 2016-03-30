'use strict'

var test = require('tape')
var badges = require('../')

var expected = '[![Coverage Status](https://coveralls.io/repos/github/vigour-io/doc-badges/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/doc-badges?branch=master)'

var testCases = [
  [{ coveralls: { owner: 'vigour-io', repo: 'doc-badges' } }, expected],
  [{ coveralls: { owner: 'vigour-io', repo: 'doc-badges', branch: 'master' } }, expected]
]
var len = testCases.length

test('coveralls', function (t) {
  t.plan(len)
  for (let i = 0; i < len; i += 1) {
    t.equals(badges(testCases[i][0]),
      testCases[i][1],
      'badges(' + JSON.stringify(testCases[i][0]) + ') === ' + testCases[i][1]
    )
  }
})
