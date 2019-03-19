/*! Shifty 2.8.0 - https://github.com/jeremyckahn/shifty */
exports.shifty=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"linear",function(){return u}),e.d(r,"easeInQuad",function(){return o}),e.d(r,"easeOutQuad",function(){return a}),e.d(r,"easeInOutQuad",function(){return c}),e.d(r,"easeInCubic",function(){return f}),e.d(r,"easeOutCubic",function(){return s}),e.d(r,"easeInOutCubic",function(){return l}),e.d(r,"easeInQuart",function(){return h}),e.d(r,"easeOutQuart",function(){return p}),e.d(r,"easeInOutQuart",function(){return v}),e.d(r,"easeInQuint",function(){return d}),e.d(r,"easeOutQuint",function(){return y}),e.d(r,"easeInOutQuint",function(){return _}),e.d(r,"easeInSine",function(){return m}),e.d(r,"easeOutSine",function(){return g}),e.d(r,"easeInOutSine",function(){return w}),e.d(r,"easeInExpo",function(){return b}),e.d(r,"easeOutExpo",function(){return S}),e.d(r,"easeInOutExpo",function(){return O}),e.d(r,"easeInCirc",function(){return M}),e.d(r,"easeOutCirc",function(){return k}),e.d(r,"easeInOutCirc",function(){return P}),e.d(r,"easeOutBounce",function(){return j}),e.d(r,"easeInBack",function(){return T}),e.d(r,"easeOutBack",function(){return A}),e.d(r,"easeInOutBack",function(){return F}),e.d(r,"elastic",function(){return E}),e.d(r,"swingFromTo",function(){return x}),e.d(r,"swingFrom",function(){return I}),e.d(r,"swingTo",function(){return C}),e.d(r,"bounce",function(){return q}),e.d(r,"bouncePast",function(){return Q}),e.d(r,"easeFromTo",function(){return D}),e.d(r,"easeFrom",function(){return B}),e.d(r,"easeTo",function(){return N});var i={};e.r(i),e.d(i,"doesApply",function(){return Pt}),e.d(i,"tweenCreated",function(){return jt}),e.d(i,"beforeTween",function(){return Tt}),e.d(i,"afterTween",function(){return At});
/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */
/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */
var u=function(t){return t},o=function(t){return Math.pow(t,2)},a=function(t){return-(Math.pow(t-1,2)-1)},c=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},f=function(t){return Math.pow(t,3)},s=function(t){return Math.pow(t-1,3)+1},l=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},h=function(t){return Math.pow(t,4)},p=function(t){return-(Math.pow(t-1,4)-1)},v=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},d=function(t){return Math.pow(t,5)},y=function(t){return Math.pow(t-1,5)+1},_=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},m=function(t){return 1-Math.cos(t*(Math.PI/2))},g=function(t){return Math.sin(t*(Math.PI/2))},w=function(t){return-.5*(Math.cos(Math.PI*t)-1)},b=function(t){return 0===t?0:Math.pow(2,10*(t-1))},S=function(t){return 1===t?1:1-Math.pow(2,-10*t)},O=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},M=function(t){return-(Math.sqrt(1-t*t)-1)},k=function(t){return Math.sqrt(1-Math.pow(t-1,2))},P=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},j=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},T=function(t){var n=1.70158;return t*t*((n+1)*t-n)},A=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},F=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},E=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},x=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},I=function(t){var n=1.70158;return t*t*((n+1)*t-n)},C=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},q=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Q=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},D=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},B=function(t){return Math.pow(t,4)},N=function(t){return Math.pow(t,.25)};function R(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){V(t,n,e[n])})}return t}function V(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var W="undefined"!=typeof window?window:global,G=W.requestAnimationFrame||W.webkitRequestAnimationFrame||W.oRequestAnimationFrame||W.msRequestAnimationFrame||W.mozCancelRequestAnimationFrame&&W.mozRequestAnimationFrame||setTimeout,H=function(){},J=null,K=null,U=L({},r),X=function(t,n,e,r,i,u,o){var a=t<u?0:(t-u)/i;for(var c in n){var f=o[c],s=f.call?f:U[f],l=e[c];n[c]=l+(r[c]-l)*s(a)}return n},Y=function(t,n){var e=t._attachment,r=t._currentState,i=t._delay,u=t._easing,o=t._originalState,a=t._duration,c=t._step,f=t._targetState,s=t._timestamp,l=s+i+a,h=n>l?l:n,p=a-(l-h);h>=l?(c(f,e,p),t.stop(!0)):(t._applyFilter("beforeTween"),h<s+i?(h=1,a=1,s=1):s+=i,X(h,r,o,f,a,s,u),t._applyFilter("afterTween"),c(r,e,p))},Z=function(){for(var t=nt.now(),n=J;n;){var e=n._next;Y(n,t),n=e}},$=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e={},r=z(n);if("string"===r||"function"===r)for(var i in t)e[i]=n;else for(var u in t)e[u]=n[u]||"linear";return e},tt=function(t){if(t===J)(J=t._next)?J._previous=null:K=null;else if(t===K)(K=t._previous)?K._next=null:J=null;else{var n=t._previous,e=t._next;n._next=e,e._previous=n}t._previous=t._next=null},nt=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentState=n,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,e&&this.setConfig(e)}var n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){var n=!0,e=!1,r=void 0;try{for(var i,u=this._filters[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var o=i.value[t];o&&o(this)}}catch(t){e=!0,r=t}finally{try{n||null==u.return||u.return()}finally{if(e)throw r}}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this._attachment,r=this._configured;return!n&&r||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),e),this.resume()}},{key:"setConfig",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.attachment,i=e.delay,u=void 0===i?0:i,o=e.duration,a=void 0===o?500:o,c=e.easing,f=e.from,s=e.promise,l=void 0===s?Promise:s,h=e.start,p=void 0===h?H:h,v=e.step,d=void 0===v?H:v,y=e.to;this._configured=!0,this._attachment=r,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=u,this._start=p,this._step=d,this._duration=a,this._currentState=L({},f||this.get()),this._originalState=this.get(),this._targetState=L({},y||this.get());var _=this._currentState;this._targetState=L({},_,this._targetState),this._easing=$(_,c);var m=t.filters;for(var g in this._filters.length=0,m)m[g].doesApply(this)&&this._filters.push(m[g]);return this._applyFilter("tweenCreated"),this._promise=new l(function(t,e){n._resolve=t,n._reject=e}),this._promise.catch(H),this}},{key:"get",value:function(){return L({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,tt(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var n=t.now();return this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===J?(J=this,K=this,function t(){J&&(G.call(W,t,1e3/60),Z())}()):(this._previous=K,K._next=this,K=this),this._promise}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0?this:(this._timestamp=e-n,this._isPlaying||Y(this,e),this)}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._attachment,e=this._currentState,r=this._easing,i=this._originalState,u=this._targetState;if(this._isPlaying)return this._isPlaying=!1,tt(this),t?(this._applyFilter("beforeTween"),X(1,e,i,u,1,0,r),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(e,n)):this._reject(e,n),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&R(n.prototype,e),r&&R(n,r),t}();function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new nt,e=n.tween(t);return e.tweenable=n,e}nt.setScheduleFunction=function(t){return G=t},nt.formulas=U,nt.filters={},nt.now=Date.now||function(){return+new Date};var rt,it,ut=/(\d|-|\.)/,ot=/([^\-0-9.]+)/g,at=/[0-9.-]+/g,ct=(rt=at.source,it=/,\s*/.source,new RegExp("rgb\\(".concat(rt).concat(it).concat(rt).concat(it).concat(rt,"\\)"),"g")),ft=/^.*\(/,st=/#([0-9]|[a-f]){3,6}/gi,lt=function(t,n){return t.map(function(t,e){return"_".concat(n,"_").concat(e)})};function ht(t){return parseInt(t,16)}var pt=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[ht(n.substr(0,2)),ht(n.substr(2,2)),ht(n.substr(4,2))]).join(","),")");var n},vt=function(t,n,e){var r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach(function(t){return i=i.replace("VAL",e(t))}),i},dt=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(st)&&(t[n]=vt(st,e,pt))}},yt=function(t){var n=t.match(at).map(Math.floor),e=t.match(ft)[0];return"".concat(e).concat(n.join(","),")")},_t=function(t){return t.match(at)},mt=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(ot),e?(1===e.length||n.charAt(0).match(ut))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:lt(_t(u),i)})}return r},gt=function(t,n){var e=function(e){_t(t[e]).forEach(function(r,i){return t[n[e].chunkNames[i]]=+r}),delete t[e]};for(var r in n)e(r)},wt=function(t,n){var e={};return n.forEach(function(n){e[n]=t[n],delete t[n]}),e},bt=function(t,n){return n.map(function(n){return t[n]})},St=function(t,n){return n.forEach(function(n){return t=t.replace("VAL",+n.toFixed(4))}),t},Ot=function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=St(u,bt(wt(t,i),i));t[e]=vt(ct,o,yt)}},Mt=function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach(function(n,e){return t[n]=u[e]||o})}else r.forEach(function(n){return t[n]=i});delete t[e]};for(var r in n)e(r)},kt=function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map(function(n){var e=t[n];return delete t[n],e}).join(" "):i}},Pt=function(t){var n=t._currentState;return Object.keys(n).some(function(t){return"string"==typeof n[t]})};function jt(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(dt),t._tokenData=mt(n)}function Tt(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;Mt(i,u),[n,e,r].forEach(function(t){return gt(t,u)})}function At(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach(function(t){return Ot(t,u)}),kt(i,u)}function Ft(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Et=new nt,xt=nt.filters,It=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){Ft(t,n,e[n])})}return t}({},t),o=$(t,r);for(var a in Et._filters.length=0,Et.set({}),Et._currentState=u,Et._originalState=t,Et._targetState=n,Et._easing=o,xt)xt[a].doesApply(Et)&&Et._filters.push(xt[a]);Et._applyFilter("tweenCreated"),Et._applyFilter("beforeTween");var c=X(e,u,t,n,1,i,o);return Et._applyFilter("afterTween"),c};function Ct(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function qt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Qt(t,n){if(!n.has(t))throw new TypeError("attempted to get private field on non-instance");var e=n.get(t);return e.get?e.get.call(t):e.value}var Dt=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),Bt.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e,r;return n=t,(e=[{key:"add",value:function(t){return Qt(this,Bt).push(t),t}},{key:"remove",value:function(t){var n=Qt(this,Bt).indexOf(t);return~n&&Qt(this,Bt).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Qt(this,Bt).some(function(t){return t.isPlaying()})}},{key:"play",value:function(){return Qt(this,Bt).forEach(function(t){return t.tween()}),this}},{key:"pause",value:function(){return Qt(this,Bt).forEach(function(t){return t.pause()}),this}},{key:"resume",value:function(){return Qt(this,Bt).forEach(function(t){return t.resume()}),this}},{key:"stop",value:function(t){return Qt(this,Bt).forEach(function(n){return n.stop(t)}),this}},{key:"tweenables",get:function(){return Ct(Qt(this,Bt))}},{key:"promises",get:function(){return Qt(this,Bt).map(function(t){return t._promise})}}])&&qt(n.prototype,e),r&&qt(n,r),t}(),Bt=new WeakMap;function Nt(t,n,e,r,i,u){var o=0,a=0,c=0,f=0,s=0,l=0,h=function(t){return((o*t+a)*t+c)*t},p=function(t){return t>=0?t:0-t};return o=1-(c=3*n)-(a=3*(r-n)-c),f=1-(l=3*e)-(s=3*(i-e)-l),function(t,n){return e=function(t,n){var e,r,i,u,f,s,l;for(i=t,s=0;s<8;s++){if(u=h(i)-t,p(u)<n)return i;if(p(f=(3*o*(l=i)+2*a)*l+c)<1e-6)break;i-=u/f}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=h(i),p(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(t,n),((f*e+s)*e+l)*e;var e}(t,function(t){return 1/(200*t)}(u))}var Rt=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return Nt(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,nt.formulas[t]=u},zt=function(t){return delete nt.formulas[t]};e.d(n,"processTweens",function(){return Z}),e.d(n,"Tweenable",function(){return nt}),e.d(n,"tween",function(){return et}),e.d(n,"interpolate",function(){return It}),e.d(n,"Scene",function(){return Dt}),e.d(n,"setBezierFunction",function(){return Rt}),e.d(n,"unsetBezierFunction",function(){return zt}),nt.filters.token=i}]);
//# sourceMappingURL=shifty.node.js.map