# meta-name [![Build Status][build-badge]][build-page]

List of values viable for use as `name` attributes on `meta`
elements, as defined by [HTML5][spec] and [MetaExtensions][extensions].

## Installation

[npm][]:

```bash
npm install meta-name
```

## Usage

```javascript
var metaName = require('meta-name')

console.log(metaName.length) //=> 376

console.log(metaName.slice(0, 10))
```

Yields:

```js
[ 'aglsterms.accessibility',
  'aglsterms.accessmode',
  'aglsterms.act',
  'aglsterms.aggregationlevel',
  'aglsterms.allow-search',
  'aglsterms.availability',
  'aglsterms.case',
  'aglsterms.category',
  'aglsterms.datelicensed',
  'aglsterms.documenttype' ]
```

## API

### `metaName`

`Array.<string>` — List of lower-case possible values for `name`
on `meta` elements.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/meta-name.svg

[build-page]: https://travis-ci.org/wooorm/meta-name

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names

[extensions]: https://wiki.whatwg.org/wiki/MetaExtensions
