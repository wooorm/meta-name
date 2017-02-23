'use strict';

var fs = require('fs');
var https = require('https');
var concat = require('concat-stream');
var bail = require('bail');

https.get('https://help.whatwg.org/extensions/meta-name/', function (res) {
  res
    .pipe(concat(function (buf) {
      var value = String(buf)
        .split('\n')
        .sort()
        .filter(Boolean);

      fs.writeFile(
        'index.json',
        JSON.stringify(value, 0, 2) + '\n',
        bail
      );
    }))
    .on('error', bail);
});