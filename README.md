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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isLeapYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value corresponds to a [leap year][leap-year] in the [Gregorian calendar][gregorian-calendar].

A [leap year][leap-year] is defined as any year which is exactly divisible by `4`, except for years which are exactly divisible by `100` and not by `400`. In this definition, `100` corresponds to years marking a new century, and `400` corresponds to the length of the _leap cycle_.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-leap-year
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/assert-is-leap-year-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: is-leap-year [options] [<year>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'1993\n1992' | is-leap-year --split /\r?\n/
    # Escaped...
    $ echo -n $'1993\n1992' | is-leap-year --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

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

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '1992\t1993' | is-leap-year --split '\t'
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-leap-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-leap-year

[test-image]: https://github.com/stdlib-js/assert-is-leap-year/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-leap-year/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-leap-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-leap-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-leap-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-leap-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-leap-year#cli
[cli-url]: https://github.com/stdlib-js/assert-is-leap-year/tree/cli
[@stdlib/assert-is-leap-year]: https://github.com/stdlib-js/assert-is-leap-year/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-leap-year/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-leap-year/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-leap-year/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-leap-year/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-leap-year/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-leap-year/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-leap-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-leap-year/main/LICENSE

[leap-year]: https://en.wikipedia.org/wiki/Leap_year

[gregorian-calendar]: https://en.wikipedia.org/wiki/Gregorian_calendar

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
