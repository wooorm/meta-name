'use strict'

var assert = require('assert')
var test = require('tape')
var metaName = require('.')

test('metaName', function (t) {
  t.ok(Array.isArray(metaName), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < metaName.length) {
      assert.strictEqual(typeof metaName[index], 'string', metaName[index])
    }
  }, 'should be all `string`s')

  t.end()
})
