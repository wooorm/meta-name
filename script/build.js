'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');

var w3c = 'https://help.whatwg.org/extensions/meta-name/';
var output = path.join(__dirname, '..', 'index.json');

https.get(w3c, function (res, err) {
  var value = '';

  bail(err);

  res
    .setEncoding('utf8')
    .on('data', function (buf) {
      value += buf;
    })
    .on('end', function (err) {
      bail(err);

      value = value.split('\n').sort().filter(Boolean);

      fs.writeFile(
        output,
        JSON.stringify(value, 0, 2) + '\n',
        bail
      );
    });
});
