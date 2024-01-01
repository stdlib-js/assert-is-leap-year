// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";var o=r()?function(e){var r,n,o,c,s;if(null==e)return t.call(e);n=e[a],s=a,r=null!=(c=e)&&i.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay;var s=r();function l(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var p="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+g(n):g(n)+e,i&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function v(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!f(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var w=Math.abs,m=String.prototype.toLowerCase,_=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,j=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,T=/\.0*e/,F=/(\..*[^0])0*e/;function V(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":w(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=S.call(t,F,"$1e"),t=S.call(t,T,"e"),t=S.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=S.call(t,E,"e+0$1"),t=S.call(t,j,"e-0$1"),e.alternate&&(t=S.call(t,k,"$1."),t=S.call(t,x,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):m.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function N(e,r,t){var i=r-e.length;return i<0?e:e=t?e+O(i):O(i)+e}var $=String.fromCharCode,A=isNaN,P=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function R(e){var r,t,i,n,a,o,c,s,l;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(y(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=C(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,A(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=v(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!A(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(a)?String(i.arg):$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=V(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=d(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=N(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,i,n;for(t=[],n=0,i=D.exec(e);i;)(r=e.slice(n,D.lastIndex-i[0].length)).length&&t.push(r),t.push(G(i)),n=D.lastIndex,i=D.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function W(e){return"string"==typeof e}function Y(e){var r,t,i;if(!W(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return R.apply(null,t)}var L=Object.prototype,M=L.toString,U=L.__defineGetter__,X=L.__defineSetter__,z=L.__lookupGetter__,q=L.__lookupSetter__;var B=function(){try{return p({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(z.call(e,r)||q.call(e,r)?(i=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(e,r,t.get),o&&X&&X.call(e,r,t.set),e};function H(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(e){return"number"==typeof e}var K=Number,Q=K.prototype.toString;var ee=r();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function te(e){return J(e)||re(e)}H(te,"isPrimitive",J),H(te,"isObject",re);var ie=Number.POSITIVE_INFINITY,ne=K.NEGATIVE_INFINITY,ae=Math.floor;function oe(e){return e<ie&&e>ne&&ae(r=e)===r;var r}function ce(e){return J(e)&&oe(e)}function se(e){return re(e)&&oe(e.valueOf())}function le(e){return ce(e)||se(e)}function pe(){return(new Date).getFullYear()}function ue(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!ce(e))return!1;r=e}else r=pe();return r%100==0?r%400==0:r%4==0}H(le,"isPrimitive",ce),H(le,"isObject",se);export{ue as default};
//# sourceMappingURL=mod.js.map
