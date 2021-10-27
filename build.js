import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concatStream from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {metaName} from './index.js'

https.get('https://wiki.whatwg.org/wiki/MetaExtensions', onconnection)

function onconnection(response) {
  response.pipe(concatStream(onconcat)).on('error', bail)
}

function onconcat(buf) {
  const table = select('table', unified().use(rehypeParse).parse(buf))
  const cells = selectAll('tbody tr td:first-child', table)
  let index = -1
  let data

  while (++index < cells.length) {
    data = toString(cells[index]).trim().toLowerCase()

    if (data && !metaName.includes(data)) {
      metaName.push(data)
    }
  }

  fs.writeFile(
    'index.js',
    'export const metaName = ' +
      JSON.stringify(metaName.sort(), null, 2) +
      '\n',
    bail
  )
}
