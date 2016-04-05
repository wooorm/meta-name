/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module meta-name
 * @fileoverview Test suite for `meta-name`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var metaName = require('./index.js');

/*
 * Tests.
 */

test('metaName', function (t) {
    t.ok(
        Array.isArray(metaName),
        'should be an `array`'
    );

    metaName.forEach(function (tagName) {
        t.equal(
            typeof tagName,
            'string',
            '`' + tagName + '` should be a string'
        );
    });

    t.end();
});
