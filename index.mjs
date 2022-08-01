// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";function s(s){var r;if(arguments.length)if(e(s))r=s.getFullYear();else{if(!t(s))return!1;r=s}else r=(new Date).getFullYear();return r%100==0?r%400==0:r%4==0}export{s as default};
//# sourceMappingURL=index.mjs.map
