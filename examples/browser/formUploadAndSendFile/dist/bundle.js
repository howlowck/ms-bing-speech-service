(function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(n,'a',n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=3)})([function(e,t,n){'use strict';(function(e){var n,r,o,s='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e};(function(i,l){if('object'===s(t)&&'object'===s(e))e.exports=l();else{r=[],n=l,o='function'==typeof n?n.apply(t,r):n,!(void 0!==o&&(e.exports=o))}})('undefined'==typeof self?void 0:self,function(){var t=Math.pow,n=Math.floor;return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(n,'a',n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=0)}([function(e,t,n){var r=self.WebSocket,o=self.fetch,s=n(1),i=console.log,l=n(2),a=n(3),u=n(10),p=n(11),c=n(12);e.exports=c({websocket:r,uuid:l,fetch:o,eventEmitter:s,debug:i,protocolHelper:a,messageParser:u,sendFile:p})},function(e,t,n){var r;/*!
                                         * EventEmitter v5.2.4 - git.io/ee
                                         * Unlicense - http://unlicense.org/
                                         * Oliver Caldwell - http://oli.me.uk/
                                         * @preserve
                                         */(function(t){function o(){}function i(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function l(e){return function(){return this[e].apply(this,arguments)}}function a(e){return'function'==typeof e||e instanceof RegExp||e&&'object'===('undefined'==typeof e?'undefined':s(e))&&a(e.listener)}var u=o.prototype,p=t.EventEmitter;u.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp)for(n in t={},r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n]);else t=r[e]||(r[e]=[]);return t},u.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},u.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},u.addListener=function(e,t){if(!a(t))throw new TypeError('listener must be a function');var n,r=this.getListenersAsObject(e),o='object'===('undefined'==typeof t?'undefined':s(t));for(n in r)r.hasOwnProperty(n)&&-1===i(r[n],t)&&r[n].push(o?t:{listener:t,once:!1});return this},u.on=l('addListener'),u.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},u.once=l('addOnceListener'),u.defineEvent=function(e){return this.getListeners(e),this},u.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},u.removeListener=function(e,t){var n,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(n=i(o[r],t),-1!==n&&o[r].splice(n,1));return this},u.off=l('removeListener'),u.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},u.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},u.manipulateListeners=function(e,t,n){var r,o,i=e?this.removeListener:this.addListener,l=e?this.removeListeners:this.addListeners;if('object'===('undefined'==typeof t?'undefined':s(t))&&!(t instanceof RegExp))for(r in t)t.hasOwnProperty(r)&&(o=t[r])&&('function'==typeof o?i.call(this,r,o):l.call(this,r,o));else for(r=n.length;r--;)i.call(this,t,n[r]);return this},u.removeEvent=function(e){var t,n='undefined'==typeof e?'undefined':s(e),r=this._getEvents();if('string'===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},u.removeAllListeners=l('removeEvent'),u.emitEvent=function(e,t){var n,r,o,s,i,l=this.getListenersAsObject(e);for(s in l)if(l.hasOwnProperty(s))for(n=l[s].slice(0),o=0;o<n.length;o++)r=n[o],!0===r.once&&this.removeListener(e,r.listener),i=r.listener.apply(this,t||[]),i===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},u.trigger=l('emitEvent'),u.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},u.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},u._getOnceReturnValue=function(){return!this.hasOwnProperty('_onceReturnValue')||this._onceReturnValue},u._getEvents=function(){return this._events||(this._events={})},o.noConflict=function(){return t.EventEmitter=p,o},(r=function(){return o}.call(t,n,t,e),!(r!==void 0&&(e.exports=r)))})(this||{})},function(e){e.exports=function(){var e=new Date().getTime(),t='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(t){var o=0|(e+16*Math.random())%16;return e=n(e/16),('x'==t?o:8|3&o).toString(16)});return t}},function(e,t,n){(function(t){function r(e){var t=e.map(function(e){return e.key+':'+e.value+'\r\n'});return t.join('')+'\r\n'}var o=n(9),s={platform:{win32:'Windows',darwin:'macOS',linux:'Linux'},name:{win32:{7:'Windows 7',8:'Windows 8',10:'Windows 10'},darwin:{6:'Snow Leopard',7:'Lion',8:'Mountain Lion',9:'Mavericks',10:'Yosemite',11:'El Capitan',12:'Sierra',13:'High Sierra'}}},i={context:{system:{version:'1.0.000'},os:{platform:'',name:'',version:''},device:{manufacturer:'Unknown',model:'Unknown',version:'Unknown'}}},l={};l.createSpeechConfigPacket=function(){var e=o.platform(),t=o.release(),n='win32'===e?t.split('.')[0]:t.split('.')[1],l=s.platform[e]||'Unknown',a=s.name[e]&&s.name[e][n]?s.name[e][n]:'Unknown';i.context.os={platform:l,name:a,version:t};var u=[{key:'path',value:'speech.config'},{key:'x-timestamp',value:new Date().toISOString()},{key:'content-type',value:'application/json; charset=utf-8'}],p=r(u);return''+p+JSON.stringify(i)},l.createTelemetryPacket=function(e,t){var n=[{key:'path',value:'telemetry'},{key:'x-timestamp',value:new Date().toISOString()},{key:'content-type',value:'application/json'},{key:'x-requestid',value:e}],o=r(n);return''+o+JSON.stringify(t)},l.createAudioPacket=function(e,n){var o=[{key:'path',value:'audio'},{key:'x-timestamp',value:new Date().toISOString()},{key:'content-type',value:'audio/x-wav'},{key:'x-requestid',value:e}],s=r(o),i=new t(s),l=new t([s.length/256,s.length%256]),a=new t(n);return t.concat([l,i,a])},e.exports=l}).call(t,n(4).Buffer)},function(e,r,o){(function(e){function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function l(e,t){if(s()<t)throw new RangeError('Invalid typed array length');return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=u.prototype):(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(e,t,n);if('number'==typeof e){if('string'==typeof t)throw new Error('If encoding is specified then the first argument must be a string');return c(this,e)}return i(this,e,t,n)}function i(e,t,n,r){if('number'==typeof t)throw new TypeError('"value" argument must not be a number');return'undefined'!=typeof ArrayBuffer&&t instanceof ArrayBuffer?g(e,t,n,r):'string'==typeof t?d(e,t,n):h(e,t)}function a(e){if('number'!=typeof e)throw new TypeError('"size" argument must be a number');else if(0>e)throw new RangeError('"size" argument must not be negative')}function p(e,t,n,r){return a(t),0>=t?l(e,t):void 0===n?l(e,t):'string'==typeof r?l(e,t).fill(n,r):l(e,t).fill(n)}function c(e,t){if(a(t),e=l(e,0>t?0:0|y(t)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e}function d(e,t,n){if(('string'!=typeof n||''===n)&&(n='utf8'),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|m(t,n);e=l(e,r);var o=e.write(t,n);return o!==r&&(e=e.slice(0,o)),e}function f(e,t){var n=0>t.length?0:0|y(t.length);e=l(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e}function g(e,t,n,r){if(t.byteLength,0>n||t.byteLength<n)throw new RangeError('\'offset\' is out of bounds');if(t.byteLength<n+(r||0))throw new RangeError('\'length\' is out of bounds');return t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),u.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=u.prototype):e=f(e,t),e}function h(e,t){if(u.isBuffer(t)){var n=0|y(t.length);return(e=l(e,n),0===e.length)?e:(t.copy(e,0,0,n),e)}if(t){if('undefined'!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||'length'in t)return'number'!=typeof t.length||J(t.length)?l(e,0):f(e,t);if('Buffer'===t.type&&te(t.data))return f(e,t.data)}throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')}function y(e){if(e>=s())throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x'+s().toString(16)+' bytes');return 0|e}function m(e,t){if(u.isBuffer(e))return e.length;if('undefined'!=typeof ArrayBuffer&&'function'==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;'string'!=typeof e&&(e=''+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case'ascii':case'latin1':case'binary':return n;case'utf8':case'utf-8':case void 0:return N(e).length;case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return 2*n;case'hex':return n>>>1;case'base64':return K(e).length;default:if(r)return N(e).length;t=(''+t).toLowerCase(),r=!0;}}function b(e,t,n){var r=!1;if((void 0===t||0>t)&&(t=0),t>this.length)return'';if((void 0===n||n>this.length)&&(n=this.length),0>=n)return'';if(n>>>=0,t>>>=0,n<=t)return'';for(e||(e='utf8');;)switch(e){case'hex':return U(this,t,n);case'utf8':case'utf-8':return w(this,t,n);case'ascii':return O(this,t,n);case'latin1':case'binary':return I(this,t,n);case'base64':return k(this,t,n);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return B(this,t,n);default:if(r)throw new TypeError('Unknown encoding: '+e);e=(e+'').toLowerCase(),r=!0;}}function v(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function _(e,t,n,r,o){if(0===e.length)return-1;if('string'==typeof n?(r=n,n=0):2147483647<n?n=2147483647:-2147483648>n&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:e.length-1),0>n&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(0>n)if(o)n=0;else return-1;if('string'==typeof t&&(t=u.from(t,r)),u.isBuffer(t))return 0===t.length?-1:P(e,t,n,r,o);if('number'==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&'function'==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):P(e,[t],n,r,o);throw new TypeError('val must be string, number or Buffer')}function P(e,t,n,r,o){function s(e,t){return 1==l?e[t]:e.readUInt16BE(t*l)}var l=1,a=e.length,u=t.length;if(void 0!==r&&(r=(r+'').toLowerCase(),'ucs2'===r||'ucs-2'===r||'utf16le'===r||'utf-16le'===r)){if(2>e.length||2>t.length)return-1;l=2,a/=2,u/=2,n/=2}var p;if(o){var i=-1;for(p=n;p<a;p++)if(s(e,p)!==s(t,-1==i?0:p-i))-1!=i&&(p-=p-i),i=-1;else if(-1==i&&(i=p),p-i+1===u)return i*l}else for(n+u>a&&(n=a-u),p=n;0<=p;p--){for(var c=!0,d=0;d<u;d++)if(s(e,p+d)!==s(t,d)){c=!1;break}if(c)return p}return-1}function S(e,t,n,r){n=+n||0;var o=e.length-n;r?(r=+r,r>o&&(r=o)):r=o;var s=t.length;if(0!=s%2)throw new TypeError('Invalid hex string');r>s/2&&(r=s/2);for(var l,a=0;a<r;++a){if(l=parseInt(t.substr(2*a,2),16),isNaN(l))return a;e[n+a]=l}return a}function E(e,t,n,r){return X(N(t,e.length-n),e,n,r)}function A(e,t,n,r){return X(W(t),e,n,r)}function T(e,t,n,r){return A(e,t,n,r)}function x(e,t,n,r){return X(K(t),e,n,r)}function L(e,t,n,r){return X(z(t,e.length-n),e,n,r)}function k(e,t,n){return 0===t&&n===e.length?$.fromByteArray(e):$.fromByteArray(e.slice(t,n))}function w(e,t,n){n=Q(e.length,n);for(var r=[],o=t;o<n;){var s=e[o],i=null,l=239<s?4:223<s?3:191<s?2:1;if(o+l<=n){var a,u,p,c;1==l?128>s&&(i=s):2==l?(a=e[o+1],128==(192&a)&&(c=(31&s)<<6|63&a,127<c&&(i=c))):3==l?(a=e[o+1],u=e[o+2],128==(192&a)&&128==(192&u)&&(c=(15&s)<<12|(63&a)<<6|63&u,2047<c&&(55296>c||57343<c)&&(i=c))):4==l?(a=e[o+1],u=e[o+2],p=e[o+3],128==(192&a)&&128==(192&u)&&128==(192&p)&&(c=(15&s)<<18|(63&a)<<12|(63&u)<<6|63&p,65535<c&&1114112>c&&(i=c))):void 0}null===i?(i=65533,l=1):65535<i&&(i-=65536,r.push(55296|1023&i>>>10),i=56320|1023&i),r.push(i),o+=l}return R(r)}function R(e){var t=e.length;if(t<=ne)return Z.apply(String,e);for(var n='',r=0;r<t;)n+=Z.apply(String,e.slice(r,r+=ne));return n}function O(e,t,n){var r='';n=Q(e.length,n);for(var o=t;o<n;++o)r+=Z(127&e[o]);return r}function I(e,t,n){var r='';n=Q(e.length,n);for(var o=t;o<n;++o)r+=Z(e[o]);return r}function U(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var o='',s=t;s<n;++s)o+=F(e[s]);return o}function B(e,t,n){for(var r=e.slice(t,n),o='',s=0;s<r.length;s+=2)o+=Z(r[s]+256*r[s+1]);return o}function Y(e,t,n){if(0!=e%1||0>e)throw new RangeError('offset is not uint');if(e+t>n)throw new RangeError('Trying to access beyond buffer length')}function M(e,t,n,r,o,s){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError('Index out of range')}function D(e,t,n,r){0>t&&(t=65535+t+1);for(var o=0,s=Q(e.length-n,2);o<s;++o)e[n+o]=(t&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function C(e,t,n,r){0>t&&(t=4294967295+t+1);for(var o=0,s=Q(e.length-n,4);o<s;++o)e[n+o]=255&t>>>8*(r?o:3-o)}function j(e,t,n,r){if(n+r>e.length)throw new RangeError('Index out of range');if(0>n)throw new RangeError('Index out of range')}function H(e,t,n,r,o){return o||j(e,t,n,4,3.4028234663852886e38,-3.4028234663852886e38),ee.write(e,t,n,r,23,4),n+4}function q(e,t,n,r,o){return o||j(e,t,n,8,1.7976931348623157e308,-1.7976931348623157e308),ee.write(e,t,n,r,52,8),n+8}function V(e){if(e=G(e).replace(re,''),2>e.length)return'';for(;0!=e.length%4;)e+='=';return e}function G(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,'')}function F(e){return 16>e?'0'+e.toString(16):e.toString(16)}function N(e,t){t=t||Infinity;for(var n,r=e.length,o=null,s=[],l=0;l<r;++l){if(n=e.charCodeAt(l),55295<n&&57344>n){if(!o){if(56319<n){-1<(t-=3)&&s.push(239,191,189);continue}else if(l+1===r){-1<(t-=3)&&s.push(239,191,189);continue}o=n;continue}if(56320>n){-1<(t-=3)&&s.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&-1<(t-=3)&&s.push(239,191,189);if(o=null,128>n){if(0>(t-=1))break;s.push(n)}else if(2048>n){if(0>(t-=2))break;s.push(192|n>>6,128|63&n)}else if(65536>n){if(0>(t-=3))break;s.push(224|n>>12,128|63&n>>6,128|63&n)}else if(1114112>n){if(0>(t-=4))break;s.push(240|n>>18,128|63&n>>12,128|63&n>>6,128|63&n)}else throw new Error('Invalid code point')}return s}function W(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}function z(e,t){for(var n,r,o,s=[],l=0;l<e.length&&!(0>(t-=2));++l)n=e.charCodeAt(l),r=n>>8,o=n%256,s.push(o),s.push(r);return s}function K(e){return $.toByteArray(V(e))}function X(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function J(e){return e!==e}var Z=String.fromCharCode,Q=Math.min,$=o(6),ee=o(7),te=o(8);/*!
        * The buffer module from node.js, for the browser.
        *
        * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
        * @license  MIT
        */r.Buffer=u,r.SlowBuffer=function(e){return+e!=e&&(e=0),u.alloc(+e)},r.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=e.TYPED_ARRAY_SUPPORT===void 0?function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&'function'==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}():e.TYPED_ARRAY_SUPPORT,r.kMaxLength=s(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,n){return i(null,e,t,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,'undefined'!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,n){return p(null,e,t,n)},u.allocUnsafe=function(e){return c(null,e)},u.allocUnsafeSlow=function(e){return c(null,e)},u.isBuffer=function(e){return!!(null!=e&&e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError('Arguments must be Buffers');if(e===t)return 0;for(var n=e.length,r=t.length,o=0,s=Q(n,r);o<s;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},u.isEncoding=function(e){switch((e+'').toLowerCase()){case'hex':case'utf8':case'utf-8':case'ascii':case'latin1':case'binary':case'base64':case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return!0;default:return!1;}},u.concat=function(e,t){if(!te(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=u.allocUnsafe(t),o=0;for(n=0;n<e.length;++n){var s=e[n];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},u.byteLength=m,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(0!=e%2)throw new RangeError('Buffer size must be a multiple of 16-bits');for(var t=0;t<e;t+=2)v(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(0!=e%4)throw new RangeError('Buffer size must be a multiple of 32-bits');for(var t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(0!=e%8)throw new RangeError('Buffer size must be a multiple of 64-bits');for(var t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0==e?'':0===arguments.length?w(this,0,e):b.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError('Argument must be a Buffer');return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e='',t=r.INSPECT_MAX_BYTES;return 0<this.length&&(e=this.toString('hex',0,t).match(/.{2}/g).join(' '),this.length>t&&(e+=' ... ')),'<Buffer '+e+'>'},u.prototype.compare=function(e,t,n,r,o){if(!u.isBuffer(e))throw new TypeError('Argument must be a Buffer');if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),0>t||n>e.length||0>r||o>this.length)throw new RangeError('out of range index');if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,o>>>=0,this===e)return 0;for(var s=o-r,l=n-t,a=Q(s,l),p=this.slice(r,o),c=e.slice(t,n),d=0;d<a;++d)if(p[d]!==c[d]){s=p[d],l=c[d];break}return s<l?-1:l<s?1:0},u.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},u.prototype.indexOf=function(e,t,n){return _(this,e,t,n,!0)},u.prototype.lastIndexOf=function(e,t,n){return _(this,e,t,n,!1)},u.prototype.write=function(e,t,n,r){if(void 0===t)r='utf8',n=this.length,t=0;else if(void 0===n&&'string'==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t|=0,isFinite(n)?(n|=0,void 0===r&&(r='utf8')):(r=n,n=void 0);else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');var o=this.length-t;if((void 0===n||n>o)&&(n=o),0<e.length&&(0>n||0>t)||t>this.length)throw new RangeError('Attempt to write outside buffer bounds');r||(r='utf8');for(var s=!1;;)switch(r){case'hex':return S(this,e,t,n);case'utf8':case'utf-8':return E(this,e,t,n);case'ascii':return A(this,e,t,n);case'latin1':case'binary':return T(this,e,t,n);case'base64':return x(this,e,t,n);case'ucs2':case'ucs-2':case'utf16le':case'utf-16le':return L(this,e,t,n);default:if(s)throw new TypeError('Unknown encoding: '+r);r=(''+r).toLowerCase(),s=!0;}},u.prototype.toJSON=function(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)}};var ne=4096;u.prototype.slice=function(e,t){var n=this.length;e=~~e,t=t===void 0?n:~~t,0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),0>t?(t+=n,0>t&&(t=0)):t>n&&(t=n),t<e&&(t=e);var r;if(u.TYPED_ARRAY_SUPPORT)r=this.subarray(e,t),r.__proto__=u.prototype;else{var o=t-e;r=new u(o,void 0);for(var s=0;s<o;++s)r[s]=this[s+e]}return r},u.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||Y(e,t,this.length);for(var r=this[e],o=1,s=0;++s<t&&(o*=256);)r+=this[e+s]*o;return r},u.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||Y(e,t,this.length);for(var r=this[e+--t],o=1;0<t&&(o*=256);)r+=this[e+--t]*o;return r},u.prototype.readUInt8=function(e,t){return t||Y(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||Y(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||Y(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||Y(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||Y(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,n,r){e|=0,n|=0,r||Y(e,n,this.length);for(var o=this[e],s=1,l=0;++l<n&&(s*=256);)o+=this[e+l]*s;return s*=128,o>=s&&(o-=t(2,8*n)),o},u.prototype.readIntBE=function(e,n,r){e|=0,n|=0,r||Y(e,n,this.length);for(var o=n,s=1,i=this[e+--o];0<o&&(s*=256);)i+=this[e+--o]*s;return s*=128,i>=s&&(i-=t(2,8*n)),i},u.prototype.readInt8=function(e,t){return t||Y(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||Y(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(e,t){t||Y(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(e,t){return t||Y(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||Y(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||Y(e,4,this.length),ee.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||Y(e,4,this.length),ee.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||Y(e,8,this.length),ee.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||Y(e,8,this.length),ee.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,n,r,o){if(e=+e,n|=0,r|=0,!o){var s=t(2,8*r)-1;M(this,e,n,r,s,0)}var l=1,a=0;for(this[n]=255&e;++a<r&&(l*=256);)this[n+a]=255&e/l;return n+r},u.prototype.writeUIntBE=function(e,n,r,o){if(e=+e,n|=0,r|=0,!o){var s=t(2,8*r)-1;M(this,e,n,r,s,0)}var l=r-1,i=1;for(this[n+l]=255&e;0<=--l&&(i*=256);)this[n+l]=255&e/i;return n+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=n(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):C(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):C(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,n,r,o){if(e=+e,n|=0,!o){var s=t(2,8*r-1);M(this,e,n,r,s-1,-s)}var l=0,i=1,a=0;for(this[n]=255&e;++l<r&&(i*=256);)0>e&&0==a&&0!==this[n+l-1]&&(a=1),this[n+l]=255&(e/i>>0)-a;return n+r},u.prototype.writeIntBE=function(e,n,r,o){if(e=+e,n|=0,!o){var s=t(2,8*r-1);M(this,e,n,r,s-1,-s)}var l=r-1,i=1,a=0;for(this[n+l]=255&e;0<=--l&&(i*=256);)0>e&&0==a&&0!==this[n+l+1]&&(a=1),this[n+l]=255&(e/i>>0)-a;return n+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=n(e)),0>e&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):D(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):D(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):C(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||M(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):C(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,n){return H(this,e,t,!0,n)},u.prototype.writeFloatBE=function(e,t,n){return H(this,e,t,!1,n)},u.prototype.writeDoubleLE=function(e,t,n){return q(this,e,t,!0,n)},u.prototype.writeDoubleBE=function(e,t,n){return q(this,e,t,!1,n)},u.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),0<r&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(0>t)throw new RangeError('targetStart out of bounds');if(0>n||n>=this.length)throw new RangeError('sourceStart out of bounds');if(0>r)throw new RangeError('sourceEnd out of bounds');r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var o,s=r-n;if(this===e&&n<t&&t<r)for(o=s-1;0<=o;--o)e[o+t]=this[o+n];else if(1e3>s||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)e[o+t]=this[o+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+s),t);return s},u.prototype.fill=function(e,t,n,r){if('string'==typeof e){if('string'==typeof t?(r=t,t=0,n=this.length):'string'==typeof n&&(r=n,n=this.length),1===e.length){var o=e.charCodeAt(0);256>o&&(e=o)}if(void 0!==r&&'string'!=typeof r)throw new TypeError('encoding must be a string');if('string'==typeof r&&!u.isEncoding(r))throw new TypeError('Unknown encoding: '+r)}else'number'==typeof e&&(e&=255);if(0>t||this.length<t||this.length<n)throw new RangeError('Out of range index');if(n<=t)return this;t>>>=0,n=n===void 0?this.length:n>>>0,e||(e=0);var s;if('number'==typeof e)for(s=t;s<n;++s)this[s]=e;else{var i=u.isBuffer(e)?e:N(new u(e,r).toString()),l=i.length;for(s=0;s<n-t;++s)this[s+t]=i[s%l]}return this};var re=/[^+\/0-9A-Za-z-_]/g}).call(r,o(5))},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(n){'object'===('undefined'==typeof window?'undefined':s(window))&&(t=window)}e.exports=t},function(e,t){function n(e){var t=e.length;if(0<t%4)throw new Error('Invalid string. Length must be a multiple of 4');return'='===e[t-2]?2:'='===e[t-1]?1:0}function r(e){return s[63&e>>18]+s[63&e>>12]+s[63&e>>6]+s[63&e]}function o(e,t,n){for(var o,s=[],l=t;l<n;l+=3)o=(e[l]<<16)+(e[l+1]<<8)+e[l+2],s.push(r(o));return s.join('')}t.byteLength=function(e){return 3*e.length/4-n(e)},t.toByteArray=function(e){var t,r,o,s,i,l=e.length;s=n(e),i=new u(3*l/4-s),r=0<s?l-4:l;var p=0;for(t=0;t<r;t+=4)o=a[e.charCodeAt(t)]<<18|a[e.charCodeAt(t+1)]<<12|a[e.charCodeAt(t+2)]<<6|a[e.charCodeAt(t+3)],i[p++]=255&o>>16,i[p++]=255&o>>8,i[p++]=255&o;return 2===s?(o=a[e.charCodeAt(t)]<<2|a[e.charCodeAt(t+1)]>>4,i[p++]=255&o):1===s&&(o=a[e.charCodeAt(t)]<<10|a[e.charCodeAt(t+1)]<<4|a[e.charCodeAt(t+2)]>>2,i[p++]=255&o>>8,i[p++]=255&o),i},t.fromByteArray=function(e){for(var t,n=e.length,r=n%3,l='',a=[],u=16383,p=0,i=n-r;p<i;p+=u)a.push(o(e,p,p+u>i?i:p+u));return 1==r?(t=e[n-1],l+=s[t>>2],l+=s[63&t<<4],l+='=='):2==r&&(t=(e[n-2]<<8)+e[n-1],l+=s[t>>10],l+=s[63&t>>4],l+=s[63&t<<2],l+='='),a.push(l),a.join('')};for(var s=[],a=[],u='undefined'==typeof Uint8Array?Array:Uint8Array,l='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',p=0,i=l.length;p<i;++p)s[p]=l[p],a[l.charCodeAt(p)]=p;a[45]=62,a[95]=63},function(e,r){r.read=function(n,r,o,l,a){var u,e,p=8*a-l-1,c=(1<<p)-1,f=c>>1,g=-7,h=o?a-1:0,i=o?-1:1,d=n[r+h];for(h+=i,u=d&(1<<-g)-1,d>>=-g,g+=p;0<g;u=256*u+n[r+h],h+=i,g-=8);for(e=u&(1<<-g)-1,u>>=-g,g+=l;0<g;e=256*e+n[r+h],h+=i,g-=8);if(0===u)u=1-f;else{if(u===c)return e?NaN:(d?-1:1)*Infinity;e+=t(2,l),u-=f}return(d?-1:1)*e*t(2,u-l)},r.write=function(r,o,l,a,u,p){var f,g,h,c=8*p-u-1,y=(1<<c)-1,m=y>>1,b=23===u?5.960464477539063e-8-6.617444900424222e-24:0,v=a?0:p-1,i=a?1:-1,d=0>o||0===o&&0>1/o?1:0;for(o=Math.abs(o),isNaN(o)||o===Infinity?(g=isNaN(o)?1:0,f=y):(f=n(Math.log(o)/Math.LN2),1>o*(h=t(2,-f))&&(f--,h*=2),o+=1<=f+m?b/h:b*t(2,1-m),2<=o*h&&(f++,h/=2),f+m>=y?(g=0,f=y):1<=f+m?(g=(o*h-1)*t(2,u),f+=m):(g=o*t(2,m-1)*t(2,u),f=0));8<=u;r[l+v]=255&g,v+=i,g/=256,u-=8);for(f=f<<u|g,c+=u;0<c;r[l+v]=255&f,v+=i,f/=256,c-=8);r[l+v-i]|=128*d}},function(e){var t={}.toString;e.exports=Array.isArray||function(e){return'[object Array]'==t.call(e)}},function(e,t){var n=Number.MAX_VALUE;t.endianness=function(){return'LE'},t.hostname=function(){return'undefined'==typeof location?'':location.hostname},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return n},t.totalmem=function(){return n},t.cpus=function(){return[]},t.type=function(){return'Browser'},t.release=function(){return'undefined'==typeof navigator?'':navigator.appVersion},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return'javascript'},t.platform=function(){return'browser'},t.tmpdir=t.tmpDir=function(){return'/tmp'},t.EOL='\n',t.homedir=function(){return'/'}},function(e){e.exports.parse=function(e){var t={},n=e.split('\r\n');return n.forEach(function(e){var n=new String(e);if(n.startsWith('{'))t.body=n;else{var r=n.split(':');2===r.length&&(t[r[0].trim().toLowerCase()]=r[1].trim())}}),t}},function(e){function t(){var e=this,n=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,r=arguments[1],o=r.byteLength,s=n+32000,i=r.slice(n,s);this.sendChunk(i),s<o&&(n=s,setTimeout(function(){return t.call(e,n,r)},200))}e.exports=function(e){this.telemetry.Metrics.push({Start:new Date().toISOString(),Name:'Microphone',End:''}),t.call(this,0,e)}},function(e,t,n){(function(t){function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function r(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'===('undefined'==typeof t?'undefined':s(t))||'function'==typeof t)?t:e}function o(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+('undefined'==typeof t?'undefined':s(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n,r=0;r<t.length;r++)n=t[r],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();e.exports=function(e){var s,l=e.websocket,a=e.uuid,u=e.fetch,p=e.eventEmitter,c=e.protocolHelper,d=e.messageParser,f=e.sendFile,g=t&&t.env&&t.env.DEBUG,h={"turn.start":[],"speech.startDetected":[],"speech.hypothesis":[],"speech.endDetected":[],"speech.phrase":[],"speech.fragment":[],"turn.end":[]},y=['speech.phrase','speech.hypothesis','speech.fragment'],m={format:'simple',language:'en-US',mode:'conversation',issueTokenUrl:'https://api.cognitive.microsoft.com/sts/v1.0/issueToken',accessToken:null},b=function(t){function b(t){n(this,b);var o=r(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));o.options=Object.assign({},m,t),s=o.options.debug||g?e.debug:function(){};var i='wss://speech.platform.bing.com/speech/recognition/'+o.options.mode+'/cognitiveservices/v1?language='+o.options.language+'&format='+o.options.format;return o.serviceUrl=o.options.serviceUrl||i,o.issueTokenUrl=o.options.issueTokenUrl,o.telemetry={Metrics:[],ReceivedMessages:h},o.currentTurnGuid=a().replace(/-/g,''),Object.assign(l.prototype,p.prototype),o}return o(b,t),i(b,[{key:'_resetTelemetry',value:function(e){var t=Array.isArray(e)&&e.includes('Metrics')?[]:this.telemetry.Metrics,n=Array.isArray(e)&&e.includes('ReceivedMessages')?h:this.telemetry.ReceivedMessages;this.telemetry.Metrics=t,this.telemetry.ReceivedMessages=n}},{key:'_sendToSocketServer',value:function(e){if(1!==this.connection.readyState)throw new Error('could not send: connection to service not open');this.connection.send(e)}},{key:'sendChunk',value:function(e){var t=c.createAudioPacket(this.currentTurnGuid,e);this._sendToSocketServer(t)}},{key:'sendStream',value:function(e){var t=this;return new Promise(function(n){t.telemetry.Metrics.push({Start:new Date().toISOString(),Name:'Microphone',End:''}),e.on('data',t.sendChunk.bind(t)),e.on('end',function(){s('audio stream end'),n()})})}},{key:'_getAccessToken',value:function(){if(this.options.accessToken)return s('access token supplied via options'),Promise.resolve(this.options.accessToken);var e={method:'POST',headers:{"Ocp-Apim-Subscription-Key":this.options.subscriptionKey}};return s('requesting access token'),u(this.issueTokenUrl,e).then(function(e){return e.text()})}},{key:'onMessage',value:function(e){var t=e.data,n=d.parse(t),r=n.path,o=y.includes(r)?JSON.parse(n.body):{};if(s(r),'turn.start'===r&&(this.turn.active=!0),'speech.phrase'===r&&this.emit('recognition',o),'speech.endDetected'===r){var i=this.telemetry.Metrics.filter(function(e){return'Microphone'===e.Name}).pop();i.End=new Date().toISOString()}if('turn.end'===r){this.turn.active=!1;var l=c.createTelemetryPacket(this.currentTurnGuid,this.telemetry);this._sendToSocketServer(l),this._resetTelemetry(['ReceivedMessages']),this.currentTurnGuid=a().replace(/-/g,'')}this.telemetry.ReceivedMessages[r].push(new Date().toISOString()),this.emit(r,o),this.emit('data',JSON.stringify(t.utf8Data))}},{key:'start',value:function(){var e=this;return this.connectionGuid=a().replace(/-/g,''),this._getAccessToken().then(function(t){return s('access token request successful'),e.telemetry.Metrics.push({Name:'Connection',Id:e.connectionGuid,Start:new Date().toISOString(),End:''}),e._connectToWebsocket(t)})}},{key:'stop',value:function(){var e=this;return new Promise(function(t){return(!e.connection||1===!e.connection.readyState)&&callback?t():void(e.once('close',t()),e.connection.close(),s('closing speech websocket connection'))})}},{key:'_connectToWebsocket',value:function(e){s('opening websocket at:',this.serviceUrl);var t={Authorization:'Bearer '+e,"X-ConnectionId":this.connectionGuid},n=Object.keys(t).map(function(e){return'&'+e.replace('-','')+'='+t[e]}),r=''+this.serviceUrl+encodeURI(n.join('')),o=new l(r);return this._setUpClientEvents(o)}},{key:'_setUpClientEvents',value:function(e){var t=this;return new Promise(function(n,r){e.onmessage=t.onMessage.bind(t),e.onerror=function(e){t.emit('error',e),s('socket error:',e)},e.onclose=function(e){s('socket close:',e),t.emit('close'),e&&1e3!==e.code&&r(e)},e.onopen=function(){s('connected to websocket'),t.connection=e,t.sendFile=f.bind(t),t.turn={active:!1},t.telemetry.Metrics[0].End=new Date().toISOString(),s('sending config packet');var r=c.createSpeechConfigPacket(t.connectionGuid);t._sendToSocketServer(r),t.emit('connect'),n()}})}}]),b}(p);return b}}).call(t,n(13))},function(e){function t(){throw new Error('setTimeout has not been defined')}function n(){throw new Error('clearTimeout has not been defined')}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===t||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(p===clearTimeout)return clearTimeout(e);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){g&&d&&(g=!1,d.length?f=d.concat(f):h=-1,f.length&&l())}function l(){if(!g){var e=r(s);g=!0;for(var t=f.length;t;){for(d=f,f=[];++h<t;)d&&d[h].run();h=-1,t=f.length}d=null,g=!1,o(e)}}function a(e,t){this.fun=e,this.array=t}function i(){}var u,p,c=e.exports={};(function(){try{u='function'==typeof setTimeout?setTimeout:t}catch(n){u=t}try{p='function'==typeof clearTimeout?clearTimeout:n}catch(t){p=n}})();var d,f=[],g=!1,h=-1;c.nextTick=function(e){var t=Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new a(e,t)),1!==f.length||g||r(l)},a.prototype.run=function(){this.fun.apply(null,this.array)},c.title='browser',c.browser=!0,c.env={},c.argv=[],c.version='',c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.prependListener=i,c.prependOnceListener=i,c.listeners=function(){return[]},c.binding=function(){throw new Error('process.binding is not supported')},c.cwd=function(){return'/'},c.chdir=function(){throw new Error('process.chdir is not supported')},c.umask=function(){return 0}}])})}).call(t,n(1)(e))},function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],!e.children&&(e.children=[]),Object.defineProperty(e,'loaded',{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,'id',{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,function(e,t,n){'use strict';function r(e){p.setAttribute('disabled',!0),g.style.display='inline',f.innerHTML='',d.innerHTML='';var t=new s.default(h);t.start().then(function(){console.log('service started'),d.innerHTML+='service started<br/>',t.on('turn.start',function(){return d.innerHTML+='turn.start<br/>'}),t.on('speech.startDetected',function(){return d.innerHTML+='speech.startDetected<br/>'}),t.on('speech.endDetected',function(){return d.innerHTML+='speech.endDetected<br/>'}),t.on('speech.phrase',function(){return d.innerHTML+='speech.phrase<br/>'}),t.on('recognition',function(t){'Success'===t.RecognitionStatus&&(console.log(t),f.innerHTML+='<p>'+t.DisplayText+'</p>')}),t.on('close',function(){p.removeAttribute('disabled'),g.style.display='none',d.innerHTML+='service stopped<br/>[end]'}),t.on('turn.end',function(){t.stop(),f.innerHTML+='[end]',d.innerHTML+='turn.end<br/>'});var n=new FileReader;n.addEventListener('loadend',function(n){console.log('sound file loaded:',n.currentTarget.result),d.innerHTML+='audio file loaded</br>',t.sendFile(n.currentTarget.result)}),n.readAsArrayBuffer(e)}).catch(function(e){return console.error('could not start service:',e)})}var o=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(o),i=document.querySelector('form'),l=i.querySelector('#fileupload'),a=i.querySelector('button'),u=i.querySelector('#filename'),p=i.querySelector('input[type="submit"]'),c=i.querySelector('input[type="text"]'),d=document.querySelector('#log'),f=document.querySelector('#messages'),g=document.querySelector('#spinner'),h={format:'simple',language:'en-US',subscriptionKey:'',debug:!0};i.addEventListener('submit',function(e){e.preventDefault(),h.subscriptionKey=c.value;var t=l.files;if(t.length){var n=t[0];r(n)}}),a.addEventListener('click',function(){return l.click()}),l.addEventListener('change',function(e){var t=e.target.files[0];u.innerHTML=t.name})}]);