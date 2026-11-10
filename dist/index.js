"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=v(function(l,t){
var n=require('@stdlib/assert-is-string-array/dist').primitives,s=require('@stdlib/assert-is-array/dist'),a=require('@stdlib/string-base-replace/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function g(i){var r,e;if(s(i)&&i.length===0)return"";if(!n(i))throw new TypeError(f('nullBZ',i));for(r="",e=0;e<i.length;e++)r+="/"+a(a(i[e],/~/g,"~0"),/\//g,"~1");return r}t.exports=g
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
