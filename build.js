import fs from 'fs'
import https from 'https'
import bail from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
import q from 'hast-util-select'
import toString from 'hast-util-to-string'
import {metaName} from './index.js'

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

    if (data && !metaName.includes(data)) {
      metaName.push(data)
    }
  }

  fs.writeFile(
    'index.js',
    'export var metaName = ' + JSON.stringify(metaName.sort(), null, 2) + '\n',
    bail
  )
}
