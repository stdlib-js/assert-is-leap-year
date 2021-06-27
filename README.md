<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isLeapYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value corresponds to a [leap year][leap-year] in the [Gregorian calendar][gregorian-calendar].

A [leap year][leap-year] is defined as any year which is exactly divisible by `4`, except for years which are exactly divisible by `100` and not by `400`. In this definition, `100` corresponds to years marking a new century, and `400` corresponds to the length of the _leap cycle_.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-leap-year
```

</section>

<section class="usage">

## Usage

```javascript
var isLeapYear = require( '@stdlib/assert-is-leap-year' );
```

#### isLeapYear( \[value] )

Tests if a `value` corresponds to a [leap year][leap-year] in the [Gregorian calendar][gregorian-calendar].

```javascript
var bool = isLeapYear();
// returns <boolean>

bool = isLeapYear( new Date() );
// returns <boolean>

bool = isLeapYear( 2000 );
// returns true

bool = isLeapYear( 2017 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If not provided any `arguments`, the function returns a `boolean` indicating if the current year (according to local time) is a [leap year][leap-year].

-   If provided a `value` which is neither an integer value nor a [`Date`][date-object], the function **always** returns `false`.

    ```javascript
    var bool = isLeapYear( '2016' );
    // returns false

    bool = isLeapYear( null );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isLeapYear = require( '@stdlib/assert-is-leap-year' );

var bool;
var i;

for ( i = 0; i < 2021; i++ ) {
    bool = isLeapYear( i );
    console.log( 'The year %d %s a leap year.', i, ( bool ) ? 'is' : 'is not' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-leap-year
```

</section>

<section class="usage">

### Usage

```text
Usage: is-leap-year [options] [<year>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-leap-year
<boolean>

$ is-leap-year 1993
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 1992 | is-leap-year
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-leap-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-leap-year

[test-image]: https://github.com/stdlib-js/assert-is-leap-year/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-leap-year/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-leap-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-leap-year?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-leap-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-leap-year/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-leap-year/main/LICENSE

[leap-year]: https://en.wikipedia.org/wiki/Leap_year

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
