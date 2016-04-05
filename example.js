// Dependencies:
var metaName = require('./index.js');

// Slicing the first few items:
var head = metaName.slice(0, 10);

// Yields:
console.log('js', require('util').inspect(head));

// And, computing `length`:
var length = metaName.length;

// Yields:
console.log('js', String(length));
