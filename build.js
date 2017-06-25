'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');
var concat = require('concat-stream');
var unified = require('unified');
var parse = require('rehype-parse');
var q = require('hast-util-select');
var toString = require('hast-util-to-string');
var list = require('./');

https.get('https://wiki.whatwg.org/wiki/MetaExtensions', function (res) {
  res.pipe(concat(onconcat)).on('error', bail);

  function onconcat(buf) {
    var table = q.select('table', unified().use(parse).parse(buf));

    q.selectAll('tbody tr td:first-child', table).forEach(function (node) {
      var data = toString(node).trim().toLowerCase();

      if (data && list.indexOf(data) === -1) {
        list.push(data);
      }
    });

    fs.writeFile(
      path.join(__dirname, 'index.json'),
      JSON.stringify(list.sort(), 0, 2) + '\n',
      bail
    );
  }
});
