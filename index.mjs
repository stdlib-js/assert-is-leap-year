// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.0.2-esm/index.mjs";function r(r){var i;if(arguments.length)if(e(r))i=r.getFullYear();else{if(!t(r))return!1;i=r}else i=s();return i%100==0?i%400==0:i%4==0}export{r as default};
//# sourceMappingURL=index.mjs.map
