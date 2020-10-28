'use strict'

var assert = require('assert')
var test = require('tape')
var metaName = require('.')

test('metaName', function (t) {
  t.ok(Array.isArray(metaName), 'should be an `array`')

  t.doesNotThrow(function () {
    metaName.forEach(function (tagName) {
      assert.strictEqual(typeof tagName, 'string', tagName)
    })
  }, 'should be all `string`s')

  t.end()
})
