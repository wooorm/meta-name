# meta-name

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of values that can be used as `name`s on HTML `meta` elements.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`metaName`](#metaname)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a small package that lists all the valid values for `name` attributes on
HTML `<meta>`.
Those are defined by [MetaExtensions][extensions].

## When should I use this?

Probably never.
Maybe as inspiration for when you’re writing meta or researching SEO and such.
Or, when you’re making an HTML linter.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install meta-name
```

In Deno with [Skypack][]:

```js
import {metaName} from 'https://cdn.skypack.dev/meta-name@3?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {metaName} from 'https://cdn.skypack.dev/meta-name@3?min'
</script>
```

## Use

```js
import {metaName} from 'meta-name'

console.log(metaName.length) //=> 379

console.log(metaName.slice(0, 10))
```

Yields:

```js
[
  'aglsterms.accessibility',
  'aglsterms.accessmode',
  'aglsterms.act',
  'aglsterms.aggregationlevel',
  'aglsterms.allow-search',
  'aglsterms.availability',
  'aglsterms.case',
  'aglsterms.category',
  'aglsterms.datelicensed',
  'aglsterms.documenttype'
]
```

## API

This package exports the following identifiers: `metaName`.
There is no default export.

### `metaName`

`string[]` — List of lowercase possible values for `name` on `meta` elements.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/a-rel`](https://github.com/wooorm/a-rel)
    — list of link types for `rel` on `a` and `area`
*   [`wooorm/link-rel`](https://github.com/wooorm/link-rel)
    — list of link types for `rel` on `link`
*   [`wooorm/html-link-types`](https://github.com/wooorm/html-link-types)
    — list of link types as used in HTML

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[extensions]: https://wiki.whatwg.org/wiki/MetaExtensions
