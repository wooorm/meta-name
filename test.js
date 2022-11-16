import assert from 'node:assert/strict'
import test from 'node:test'
import {metaName} from './index.js'

test('metaName', function () {
  assert.ok(Array.isArray(metaName), 'should be an `array`')

  let index = -1
  while (++index < metaName.length) {
    assert.strictEqual(typeof metaName[index], 'string', metaName[index])
  }
})
