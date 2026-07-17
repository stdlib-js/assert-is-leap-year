"use strict";var a=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var t=a(function(q,i){
var n=require('@stdlib/assert-is-date-object/dist'),u=require('@stdlib/assert-is-integer/dist').isPrimitive,f=require('@stdlib/time-current-year/dist');function c(r){var e;if(arguments.length)if(n(r))e=r.getFullYear();else if(u(r))e=r;else return!1;else e=f();return e%100===0?e%400===0:e%4===0}i.exports=c
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
