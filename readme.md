# meta-name

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of values viable for use as `name` attributes on `meta` elements, as
defined by [HTML][spec] and [MetaExtensions][extensions].

## Install

[npm][]:

```sh
npm install meta-name
```

## Use

```js
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

`Array.<string>` — List of lowercase possible values for `name` on `meta`
elements.

## Related

*   [`wooorm/a-rel`](https://github.com/wooorm/a-rel)
    — List of link types for `rel` on `a` and `area`
*   [`wooorm/link-rel`](https://github.com/wooorm/link-rel)
    — List of link types for `rel` on `link`
*   [`wooorm/html-link-types`](https://github.com/wooorm/html-link-types)
    — List of link types as used in HTML

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/meta-name/workflows/main/badge.svg

[build]: https://github.com/wooorm/meta-name/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/meta-name.svg

[coverage]: https://codecov.io/github/wooorm/meta-name

[downloads-badge]: https://img.shields.io/npm/dm/meta-name.svg

[downloads]: https://www.npmjs.com/package/meta-name

[size-badge]: https://img.shields.io/bundlephobia/minzip/meta-name.svg

[size]: https://bundlephobia.com/result?p=meta-name

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names

[extensions]: https://wiki.whatwg.org/wiki/MetaExtensions
