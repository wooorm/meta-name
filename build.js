import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {metaName} from './index.js'

const response = await fetch('https://wiki.whatwg.org/wiki/MetaExtensions')
const text = await response.text()
const tree = fromHtml(text)

const table = select('table', tree)
assert(table, 'expected `table`')
const cells = selectAll('tbody tr td:first-child', table)
let index = -1

while (++index < cells.length) {
  const data = toString(cells[index]).trim().toLowerCase()

  if (data) {
    metaName.push(data)
  }
}

const list = [...new Set(metaName)].sort()

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * List of values that can be used as `name`s on HTML `meta` elements.',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const metaName = ',
    JSON.stringify(list, null, 2),
    ''
  ].join('\n')
)
