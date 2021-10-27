import assert from 'node:assert'
import https from 'node:https'
import fs from 'node:fs'
import {bail} from 'bail'
import concatStream from 'concat-stream'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {metaName} from './index.js'

https.get('https://wiki.whatwg.org/wiki/MetaExtensions', (response) => {
  response.pipe(concatStream(onconcat)).on('error', bail)
})

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  const table = select('table', unified().use(rehypeParse).parse(buf))
  assert(table, 'expected `table`')
  const cells = selectAll('tbody tr td:first-child', table)
  let index = -1

  while (++index < cells.length) {
    const data = toString(cells[index]).trim().toLowerCase()

    if (data && !metaName.includes(data)) {
      metaName.push(data)
    }
  }

  fs.writeFile(
    'index.js',
    [
      '/**',
      ' * List of values that can be used as `name`s on HTML `meta` elements',
      ' *',
      ' * @type {string[]}',
      ' */',
      'export const metaName = ',
      JSON.stringify(metaName.sort(), null, 2),
      ''
    ].join('\n'),
    bail
  )
}
