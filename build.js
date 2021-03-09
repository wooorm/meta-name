'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var q = require('hast-util-select')
var toString = require('hast-util-to-string')
var list = require('.')

var proc = unified().use(parse)

https.get('https://wiki.whatwg.org/wiki/MetaExtensions', onconnection)

function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var table = q.select('table', proc.parse(buf))
  var cells = q.selectAll('tbody tr td:first-child', table)
  var index = -1
  var data

  while (++index < cells.length) {
    data = toString(cells[index]).trim().toLowerCase()

    if (data && !list.includes(data)) {
      list.push(data)
    }
  }

  fs.writeFile('index.json', JSON.stringify(list.sort(), 0, 2) + '\n', bail)
}
