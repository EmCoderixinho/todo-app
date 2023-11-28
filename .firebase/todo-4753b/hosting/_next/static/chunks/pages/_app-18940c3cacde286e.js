(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return _},L:function(){return u},LL:function(){return N},P0:function(){return m},Pz:function(){return v},Sg:function(){return w},UG:function(){return T},ZR:function(){return R},aH:function(){return y},b$:function(){return S},eu:function(){return A},hl:function(){return k},m9:function(){return j},ne:function(){return U},pd:function(){return M},q4:function(){return g},ru:function(){return I},tV:function(){return h},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],a=r[s];if(P(n)&&P(a)){if(!e(n,a))return!1}else if(n!==a)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}},w1:function(){return C},xO:function(){return x},xb:function(){return D},z$:function(){return b},zd:function(){return L}});var n=r(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],a=e[r++],o=e[r++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,h=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),n.push(r[u],r[h],r[c],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,a=s?r[e.charAt(t)]:0;++t;let l=t<e.length,u=l?r[e.charAt(t)]:64;++t;let h=t<e.length,c=h?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==u||null==c)throw new o;let d=i<<2|a>>4;if(n.push(d),64!==u){let e=a<<4&240|u>>2;if(n.push(e),64!==c){let e=u<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let l=function(e){let t=i(e);return a.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},c=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,d=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&h(e[1]);return t&&JSON.parse(t)},p=()=>{try{return c()||d()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{let t=g(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(e){return!1}}function I(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function S(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){let e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class R extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(O,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,o=new R(n,a,r);return o}}let O=/\{\$([^}]+)}/g;function D(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function L(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function M(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function U(e,t){let r=new F(e,t);return r.subscribe.bind(r)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=V),void 0===n.error&&(n.error=V),void 0===n.complete&&(n.complete=V);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return e&&e._delegate?e._delegate:e}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7498)}])},1144:function(e,t,r){"use strict";r.d(t,{HD:function(){return l},Vo:function(){return a}});var n=r(5893),i=r(7294),s=r(9544);let a=(0,i.createContext)({user:null,authIsReady:!1,dispatch:e=>{let{}=e}}),o=(e,t)=>{switch(t.type){case"LOGIN":return{...e,user:t.payload};case"LOGOUT":return{...e,user:null};case"AUTH_IS_READY":return{...e,user:t.payload,authIsReady:!0};default:return e}},l=e=>{let{children:t}=e,[r,l]=(0,i.useReducer)(o,{user:null,authIsReady:!1});return(0,i.useEffect)(()=>{let e=(0,s.v0)(),t=(0,s.Aj)(e,e=>{l({type:"AUTH_IS_READY",payload:e}),t()})},[]),(0,n.jsx)(a.Provider,{value:{...r,dispatch:l},children:t})}},3878:function(e,t,r){"use strict";r.d(t,{I:function(){return l},db:function(){return u},t:function(){return h}});var n=r(5816);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,n.KN)("firebase","10.6.0","app");var i=r(9544),s=r(6100),a=r(6650);let o=(0,n.ZF)({apiKey:"AIzaSyC2Bb7NdvdwrzBGxrQwDVpscrOJtsyhmLc",authDomain:"todo-4753b.firebaseapp.com",projectId:"todo-4753b",storageBucket:"todo-4753b.appspot.com",messagingSenderId:"342921846184",appId:"1:342921846184:web:ecd1a60022de25b0b3119d"}),l=(0,i.v0)(o),u=(0,s.ad)(o),h=(0,a.cF)(o)},3920:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var n=r(1144),i=r(7294);let s=()=>{let e=(0,i.useContext)(n.Vo);if(!e)throw Error("Context must be inside AuthContext");return e}},6228:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return s},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return h},isThenable:function(){return c}});let i="refresh",s="navigate",a="restore",o="server-patch",l="prefetch",u="fast-refresh",h="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(8754),i=n._(r(7294)),s=r(4450),a=r(2227),o=r(4364),l=r(109),u=r(3607),h=r(1823),c=r(9031),d=r(920),f=r(30),p=r(7192),g=r(6228),m=new Set;function y(e,t,r,n,i,s){if(!s&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+r+"%"+i;if(m.has(s))return;m.add(s)}let o=s?e.prefetch(t,i):e.prefetch(t,r,n);Promise.resolve(o).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let r,n;let{href:o,as:m,children:_,prefetch:w=null,passHref:b,replace:E,shallow:T,scroll:I,locale:S,onClick:C,onMouseEnter:k,onTouchStart:A,legacyBehavior:R=!1,...N}=e;r=_,R&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let O=i.default.useContext(h.RouterContext),D=i.default.useContext(c.AppRouterContext),P=null!=O?O:D,x=!O,L=!1!==w,M=null===w?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:U,as:F}=i.default.useMemo(()=>{if(!O){let e=v(o);return{href:e,as:m?v(m):e}}let[e,t]=(0,s.resolveHref)(O,o,!0);return{href:e,as:m?(0,s.resolveHref)(O,m):t||e}},[O,o,m]),V=i.default.useRef(U),j=i.default.useRef(F);R&&(n=i.default.Children.only(r));let B=R?n&&"object"==typeof n&&n.ref:t,[q,z,$]=(0,d.useIntersection)({rootMargin:"200px"}),H=i.default.useCallback(e=>{(j.current!==F||V.current!==U)&&($(),j.current=F,V.current=U),q(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[F,B,U,$,q]);i.default.useEffect(()=>{P&&z&&L&&y(P,U,F,{locale:S},{kind:M},x)},[F,U,z,S,L,null==O?void 0:O.locale,P,x,M]);let K={ref:H,onClick(e){R||"function"!=typeof C||C(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,r,n,s,o,l,u,h){let{nodeName:c}=e.currentTarget,d="A"===c.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!h&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==l||l;"beforePopState"in t?t[s?"replace":"push"](r,n,{shallow:o,locale:u,scroll:e}):t[s?"replace":"push"](n||r,{scroll:e})};h?i.default.startTransition(f):f()}(e,P,U,F,E,T,I,S,x)},onMouseEnter(e){R||"function"!=typeof k||k(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(L||!x)&&y(P,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:M},x)},onTouchStart(e){R||"function"!=typeof A||A(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(L||!x)&&y(P,U,F,{locale:S,priority:!0,bypassPrefetchedCheck:!0},{kind:M},x)}};if((0,l.isAbsoluteUrl)(F))K.href=F;else if(!R||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==S?S:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&(0,f.getDomainLocale)(F,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);K.href=t||(0,p.addBasePath)((0,u.addLocale)(F,e,null==O?void 0:O.defaultLocale))}return R?i.default.cloneElement(n,K):i.default.createElement("a",{...N,...K},r)}),w=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(7294),i=r(3436),s="function"==typeof IntersectionObserver,a=new Map,o=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!s,[h,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(s){if(u||h)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:s,elements:i},o.push(r),a.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!h){let e=(0,i.requestIdleCallback)(()=>c(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,h,d.current]);let p=(0,n.useCallback)(()=>{c(!1)},[]);return[f,h,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7498:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893);r(415);var i=r(3920),s=r(9798),a=r.n(s),o=r(1664),l=r.n(o),u=r(7294),h=r(3878),c=r(9544);let d=()=>{let[e,t]=(0,u.useState)(!1),[r,n]=(0,u.useState)(null),[s,a]=(0,u.useState)(!1),{dispatch:o}=(0,i.E)(),l=async()=>{n(null),a(!1);try{(0,c.w7)(h.I).then(()=>{o({type:"LOGOUT"})}).catch(e=>{throw Error("could not sign out")}),e||(n(null),a(!1))}catch(t){e||(console.log(t.message),n(t.message),a(!1))}};return(0,u.useEffect)(()=>()=>t(!0),[]),{logout:l,error:r,isPending:s}};var f=r(6100),p=()=>{let{logout:e}=d(),t=(0,i.E)(),[r,s]=(0,u.useState)([]),[o,c]=(0,u.useState)(""),[p,g]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{let e=async()=>{try{let e;if(t.user){if(!t.user.email)return;e=(0,f.IO)((0,f.hJ)(h.db,"users"),(0,f.ar)("email","==",t.user.email));let r=await (0,f.PL)(e),n=r.docs.map(e=>{let t=e.data();return{...t,id:e.id}});s(n),c(null)}}catch(e){console.error(e),c("Could not fetch the data")}};e()},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 ".concat(a().navbar),children:(0,n.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,n.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:(0,n.jsx)(l(),{href:"/",children:"To-do"})}),(0,n.jsx)(l(),{href:"/public",className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Public todos"}),(0,n.jsxs)("button",{type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":!0==p?"true":"false",onClick:()=>{g(!p)},children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,n.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),(0,n.jsx)("div",{className:"w-full md:flex md:w-auto ".concat(p?"block":"hidden"),id:"navbar-default",children:(0,n.jsxs)("ul",{className:"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[!t.user&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/login",className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Log in"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/register",className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Register"})})]}),t.user&&r[0]&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("p",{className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:["Hello ",r[0]?r[0].fullName:""]})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/new",className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Add task"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:e,className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Log out"})})]}),o&&(0,n.jsx)("li",{children:(0,n.jsx)("h2",{className:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:o})})]})})]})})})},g=e=>{let{children:t}=e,{authIsReady:r}=(0,i.E)();return r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),t]})},m=r(1144),y=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(m.HD,{children:(0,n.jsx)(g,{children:(0,n.jsx)(t,{...r})})})}},415:function(){},9798:function(e){e.exports={navbar:"Navbar_navbar__zhZYq"}},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],u=!1,h=-1;function c(){u&&n&&(u=!1,n.length?l=n.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(n=l,l=[];++h<t;)n&&n[h].run();h=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},a=!0;try{t[e](s,s.exports,n),a=!1}finally{a&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},1664:function(e,t,r){e.exports=r(5170)},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return x},qX:function(){return O},Xd:function(){return N},Mq:function(){return M},ZF:function(){return L},KN:function(){return U}});var s,a=r(8463),o=r(3333),l=r(4444);let u=(e,t)=>t.some(t=>e instanceof t),h=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(y(this),e),m(h.get(this))}:function(...e){return m(t.apply(y(this),e))}:function(e,...r){let n=t.call(y(this),e,...r);return d.set(n,e.sort?e.sort():[e]),m(n)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let y=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],w=new Map;function b(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=_.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return w.set(t,s),s}g={...s=g,get:(e,t,r)=>b(e,t)||s.get(e,t,r),has:(e,t)=>!!b(e,t)||s.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let T="@firebase/app",I="0.9.23",S=new o.Yd("@firebase/app"),C="[DEFAULT]",k={[T]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,R=new Map;function N(e){let t=e.name;if(R.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(R.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function O(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let D=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="10.6.0";function L(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw D.create("bad-app-name",{appName:String(i)});if(r||(r=(0,l.aH)()),!r)throw D.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(r,s.options)&&(0,l.vZ)(n,s.config))return s;throw D.create("duplicate-app",{appName:i})}let o=new a.H0(i);for(let e of R.values())o.addComponent(e);let u=new P(r,n,o);return A.set(i,u),u}function M(e=C){let t=A.get(e);if(!t&&e===C&&(0,l.aH)())return L();if(!t)throw D.create("no-app",{appName:e});return t}function U(e,t,r){var n;let i=null!==(n=k[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(e.join(" "));return}N(new a.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let F="firebase-heartbeat-store",V=null;function j(){return V||(V=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=m(a);return n&&a.addEventListener("upgradeneeded",e=>{n(m(a.result),e.oldVersion,e.newVersion,m(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(F)}}).catch(e=>{throw D.create("idb-open",{originalErrorMessage:e.message})})),V}async function B(e){try{let t=await j(),r=await t.transaction(F).objectStore(F).get(z(e));return r}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=D.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}async function q(e,t){try{let r=await j(),n=r.transaction(F,"readwrite"),i=n.objectStore(F);await i.put(t,z(e)),await n.done}catch(e){if(e instanceof l.ZR)S.warn(e.message);else{let t=D.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});S.warn(t.message)}}}function z(e){return`${e.name}!${e.options.appId}`}class ${constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e;let t=this.container.getProvider("platform-logger").getImmediate(),r=t.getPlatformInfoString(),n=H();return((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=H(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),G(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function H(){let e=new Date;return e.toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await B(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new a.wA("platform-logger",e=>new E(e),"PRIVATE")),N(new a.wA("heartbeat",e=>new $(e),"PRIVATE")),U(T,I,""),U(T,I,"esm2017"),U("fire-js","")},8463:function(e,t,r){"use strict";r.d(t,{H0:function(){return o},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new n.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return h},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},o=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},9544:function(e,t,r){"use strict";r.d(t,{Xb:function(){return e9},v0:function(){return rt},Aj:function(){return e5},e5:function(){return e6},w7:function(){return e3}});var n,i=r(4444),s=r(5816),a=r(3333);function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}"function"==typeof SuppressedError&&SuppressedError;var l=r(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let h=new i.LL("auth","Firebase",u()),c=new a.Yd("@firebase/auth");function d(e,...t){c.logLevel<=a.in.ERROR&&c.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function g(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return h.create(e,...t)}function m(e,t,...r){if(!e)throw g(t,...r)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||y("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_()||"https:"===_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){e.emulator||y("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},I=new w(3e4,6e4);function S(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,r,n,s={}){return k(e,s,async()=>{let s={},a={};n&&("GET"===t?a=n:s={body:JSON.stringify(n)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),E.fetch()(R(e,e.config.apiHost,r,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function k(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},T),t);try{let t=new N(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw O(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let t=s.ok?a.errorMessage:a.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw O(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===r)throw O(e,"email-already-in-use",a);if("USER_DISABLED"===r)throw O(e,"user-disabled",a);let l=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,r){let n=Object.assign(Object.assign({},u()),{[t]:r}),s=new i.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,l,o);f(e,l)}}catch(t){if(t instanceof i.ZR)throw t;f(e,"network-request-failed",{message:String(t)})}}async function A(e,t,r,n,i={}){let s=await C(e,t,r,n,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function R(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?b(e.config,i):`${e.config.apiScheme}://${i}`}class N{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),I.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function O(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=p(e,t,n);return i.customData._tokenResponse=r,i}function D(e){return void 0!==e&&void 0!==e.enterprise}class P{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function x(e,t){return C(e,"GET","/v2/recaptchaConfig",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function M(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function F(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=j(n);m(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:U(V(s.auth_time)),issuedAtTime:U(V(s.iat)),expirationTime:U(V(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}function V(e){return 1e3*Number(e)}function j(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return d("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e){var t;let r=e.auth,n=await e.getIdToken(),i=await B(e,M(r,{idToken:n}));m(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,a),u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new z(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&h};Object.assign(e,c)}async function H(e){let t=(0,i.m9)(e);await $(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t){let r=await k(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,a=R(e,n,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",E.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function G(e,t){return C(e,"POST","/v2/accounts:revokeToken",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(void 0!==e.idToken,"internal-error"),m(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=j(e);return m(t,"internal-error"),m(void 0!==t.exp,"internal-error"),m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await K(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new W;return r&&(m("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(m("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(m("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new W,this.toJSON())}_performRefresh(){return y("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e,t){m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await B(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return F(this,e)}reload(){return H(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await B(this,L(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,a,o,l,u;let h=null!==(r=t.displayName)&&void 0!==r?r:void 0,c=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;m(_&&T,e,"internal-error");let I=W.fromJSON(this.name,T);m("string"==typeof _,e,"internal-error"),Q(h,e.name),Q(c,e.name),m("boolean"==typeof w,e,"internal-error"),m("boolean"==typeof b,e,"internal-error"),Q(d,e.name),Q(f,e.name),Q(p,e.name),Q(g,e.name),Q(y,e.name),Q(v,e.name);let S=new X({uid:_,auth:e,email:c,emailVerified:w,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:y,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new W;n.updateFromServerResponse(t);let i=new X({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await $(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=new Map;function Y(e){e instanceof Function||y("Expected a class definition");let t=J.get(e);return t?t instanceof e||y("Instance stored in cache mismatched with class"):(t=new e,J.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,r){return`firebase:${e}:${t}:${r}`}Z.type="NONE";class et{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=ee(this.userKey,n.apiKey,i),this.fullPersistenceKey=ee("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new et(Y(Z),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||Y(Z),s=ee(r,e.config.apiKey,e.name),a=null;for(let r of t)try{let t=await r._get(s);if(t){let n=X._fromJSON(e,t);r!==i&&(a=n),i=r;break}}catch(e){}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new et(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ea(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(en(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(el(t))return"Blackberry";if(eu(t))return"Webos";if(ei(t))return"Safari";if((t.includes("chrome/")||es(t))&&!t.includes("edge/"))return"Chrome";if(eo(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function en(e=(0,i.z$)()){return/firefox\//i.test(e)}function ei(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function es(e=(0,i.z$)()){return/crios\//i.test(e)}function ea(e=(0,i.z$)()){return/iemobile/i.test(e)}function eo(e=(0,i.z$)()){return/android/i.test(e)}function el(e=(0,i.z$)()){return/blackberry/i.test(e)}function eu(e=(0,i.z$)()){return/webos/i.test(e)}function eh(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ec(e=(0,i.z$)()){return eh(e)||eo(e)||eu(e)||el(e)||/windows phone/i.test(e)||ea(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(e,t=[]){let r;switch(e){case"Browser":r=er((0,i.z$)());break;case"Worker":r=`${er((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(e,t={}){return C(e,"GET","/v2/passwordPolicy",S(e,t))}class eg{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(r=o.meetsMaxPasswordLength)||void 0===r||r),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ev(this),this.idTokenSubscription=new ev(this),this.beforeStateQueue=new ef(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Y(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await ep(this),t=new eg(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(r.tenantId=this.tenantId),await G(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Y(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){c.logLevel<=a.in.WARN&&c.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ey(e){return(0,i.m9)(e)}class ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function e_(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function ew(e){return`__${e}${Math.floor(1e6*Math.random())}`}class eb{constructor(e){this.type="recaptcha-enterprise",this.auth=ey(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{x(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new P(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;D(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&D(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}e_("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eE(e,t,r,n=!1){let i;let s=new eb(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let a=Object.assign({},t);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eT(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eE(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await eE(e,t,r,"getOobCode"===r);return n(e,i)}}function eI(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eS(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}async function ek(e,t){return C(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t){return A(e,"POST","/v1/accounts:signInWithPassword",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}async function eN(e,t){return A(e,"POST","/v1/accounts:signInWithEmailLink",S(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO extends eC{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new eO(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new eO(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eT(e,t,"signInWithPassword",eA);case"emailLink":return eR(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eT(e,r,"signUpPassword",ek);case"emailLink":return eN(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(e,t){return A(e,"POST","/v1/accounts:signInWithIdp",S(e,t))}class eP extends eC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eP(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=o(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eP(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eD(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eD(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eD(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",S(e,t))}async function eL(e,t){return A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t))}async function eM(e,t){let r=await A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,t));if(r.temporaryProof)throw O(e,"account-exists-with-different-credential",r);return r}let eU={USER_NOT_FOUND:"user-not-found"};async function eF(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return A(e,"POST","/v1/accounts:signInWithPhoneNumber",S(e,r),eU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV extends eC{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eV({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eV({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return eM(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eF(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eV({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class ej{constructor(e){var t,r,n,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,h=null!==(r=l.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);m(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=n?(0,i.zd)((0,i.pd)(n)).link:null;return s||n||r||t||e}(e);try{return new ej(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(){this.providerId=eB.PROVIDER_ID}static credential(e,t){return eO._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=ej.parseLink(t);return m(r,"argument-error"),eO._fromEmailAndCode(e,r.code,r.tenantId)}}eB.PROVIDER_ID="password",eB.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eB.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ez extends eq{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e$ extends ez{constructor(){super("facebook.com")}static credential(e){return eP._fromParams({providerId:e$.PROVIDER_ID,signInMethod:e$.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return e$.credentialFromTaggedObject(e)}static credentialFromError(e){return e$.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return e$.credential(e.oauthAccessToken)}catch(e){return null}}}e$.FACEBOOK_SIGN_IN_METHOD="facebook.com",e$.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends ez{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eP._fromParams({providerId:eH.PROVIDER_ID,signInMethod:eH.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eH.credentialFromTaggedObject(e)}static credentialFromError(e){return eH.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eH.credential(t,r)}catch(e){return null}}}eH.GOOGLE_SIGN_IN_METHOD="google.com",eH.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eK extends ez{constructor(){super("github.com")}static credential(e){return eP._fromParams({providerId:eK.PROVIDER_ID,signInMethod:eK.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eK.credentialFromTaggedObject(e)}static credentialFromError(e){return eK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eK.credential(e.oauthAccessToken)}catch(e){return null}}}eK.GITHUB_SIGN_IN_METHOD="github.com",eK.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG extends ez{constructor(){super("twitter.com")}static credential(e,t){return eP._fromParams({providerId:eG.PROVIDER_ID,signInMethod:eG.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eG.credentialFromTaggedObject(e)}static credentialFromError(e){return eG.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eG.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(e,t){return A(e,"POST","/v1/accounts:signUp",S(e,t))}eG.TWITTER_SIGN_IN_METHOD="twitter.com",eG.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eQ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await X._fromIdTokenResponse(e,r,n),s=eX(r),a=new eQ({user:i,providerId:s,_tokenResponse:r,operationType:t});return a}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=eX(r);return new eQ({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function eX(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eJ.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eJ(e,t,r,n)}}function eY(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eJ._fromErrorAndOperation(e,r,t,n);throw r})}async function eZ(e,t,r=!1){let n=await B(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return eQ._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await B(e,eY(n,i,t,e),r);m(s.idToken,n,"internal-error");let a=j(s.idToken);m(a,n,"internal-error");let{sub:o}=a;return m(e.uid===o,n,"user-mismatch"),eQ._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&f(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(e,t,r=!1){let n="signIn",i=await eY(e,n,t),s=await eQ._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function e2(e,t){return e1(ey(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(e){let t=ey(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function e9(e,t,r){let n=ey(e),i=eT(n,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eW),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e4(e),t}),a=await eQ._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}function e6(e,t,r){return e2((0,i.m9)(e),eB.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&e4(e),t})}function e5(e,t,r,n){return(0,i.m9)(e).onAuthStateChanged(t,r,n)}function e3(e){return(0,i.m9)(e).signOut()}new WeakMap;let e7="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(e7,"1"),this.storage.removeItem(e7),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class te extends e8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=(0,i.z$)();return ei(e)||eh(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}te.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends e8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tt.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new tr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}tr.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=tn("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(e.data.response);break;default:clearTimeout(u),clearTimeout(n),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){return void 0!==ts().WorkerGlobalScope&&"function"==typeof ts().importScripts}async function to(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl="firebaseLocalStorageDb",tu="firebaseLocalStorage",th="fbase_key";class tc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(e,t){return e.transaction([tu],t?"readwrite":"readonly").objectStore(tu)}function tf(){let e=indexedDB.open(tl,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(tu,{keyPath:th})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(tu)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(tl);return new tc(e).toPromise()}(),t(await tf()))})})}async function tp(e,t,r){let n=td(e,!0).put({[th]:t,value:r});return new tc(n).toPromise()}async function tg(e,t){let r=td(e,!1).get(t),n=await new tc(r).toPromise();return void 0===n?null:n.value}function tm(e,t){let r=td(e,!0).delete(t);return new tc(r).toPromise()}class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await tf()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ta()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(ta()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await to(),!this.activeServiceWorker)return;this.sender=new ti(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await tf();return await tp(e,e7,"1"),await tm(e,e7),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>tg(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=td(e,!1).getAll();return new tc(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}async function tv(e,t,r){var n,i,s;let a=await r.verify();try{let o;if(m("string"==typeof a,e,"argument-error"),m("recaptcha"===r.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){m("enroll"===t.type,e,"internal-error");let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaEnrollment:start",S(e,i)));return r.phoneSessionInfo.sessionInfo}{m("signin"===t.type,e,"internal-error");let r=(null===(n=o.multiFactorHint)||void 0===n?void 0:n.uid)||o.multiFactorUid;m(r,e,"missing-multi-factor-info");let i=await (s={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaSignIn:start",S(e,s)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await ex(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{r._reset()}}ty.type="LOCAL",ew("rcb"),new w(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.providerId=t_.PROVIDER_ID,this.auth=ey(e)}verifyPhoneNumber(e,t){return tv(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eV._fromVerification(e,t)}static credentialFromResult(e){return t_.credentialFromTaggedObject(e)}static credentialFromError(e){return t_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eV._fromTokenResponse(t,r):null}}t_.PROVIDER_ID="phone",t_.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends eC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eD(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eD(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eD(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tb(e){return e1(e.auth,new tw(e),e.bypassAuthState)}function tE(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),e0(r,new tw(e),e.bypassAuthState)}async function tT(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),eZ(r,new tw(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tb;case"linkViaPopup":case"linkViaRedirect":return tT;case"reauthViaPopup":case"reauthViaRedirect":return tE;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tS=new w(2e3,1e4);class tC extends tI{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tC.currentPopupAction&&tC.currentPopupAction.cancel(),tC.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||y("Popup operations only handle one event");let e=tn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tC.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tS.get())};e()}}tC.currentPopupAction=null;let tk=new Map;class tA extends tI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tk.get(this.auth._key());if(!e){try{let t=await tR(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}tk.set(this.auth._key(),e)}return this.bypassAuthState||tk.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tR(e,t){let r=ee("pendingRedirect",t.config.apiKey,t.name),n=Y(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tN(e,t){tk.set(e._key(),t)}async function tO(e,t,r=!1){let n=ey(e),i=t?Y(t):(m(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new tA(n,i,r),a=await s.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class tD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tx(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tx(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tP(e))}saveEventToCache(e){this.cachedEventUids.add(tP(e)),this.lastProcessedEventTime=Date.now()}}function tP(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tx({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t={}){return C(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tU=/^https?/;async function tF(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tL(e);for(let e of t)try{if(function(e){let t=v(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tU.test(r))return!1;if(tM.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}f(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tV=new w(3e4,6e4);function tj(){let e=ts().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let tB=null,tq=new w(5e3,15e3),tz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tH(e){let t=await (tB=tB||new Promise((t,r)=>{var n,i,s;function a(){tj(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tj(),r(p(e,"network-request-failed"))},timeout:tV.get()})}if(null===(i=null===(n=ts().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=ts().gapi)||void 0===s?void 0:s.load)a();else{let t=ew("iframefcb");return ts()[t]=()=>{gapi.load?a():r(p(e,"network-request-failed"))},e_(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw tB=null,e})),r=ts().gapi;return m(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;m(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?b(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=t$.get(e.config.apiHost);a&&(n.eid=a);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tz,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=ts().setTimeout(()=>{n(i)},tq.get());function a(){ts().clearTimeout(s),r(t)}t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tK={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tG{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let tW=encodeURIComponent("fac");async function tQ(e,t,r,n,a,o){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.Jn,eventId:a};if(t instanceof eq)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[r]=n;if(t instanceof ez){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),h=u?`#${tW}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?b(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(l).slice(1)}${h}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tX="webStorageSupport";class tJ{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tt,this._completeRedirectFn=tO,this._overrideRedirectResult=tN}async _openPopup(e,t,r,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||y("_initialize() not called before _openPopup()");let a=await tQ(e,t,r,v(),n);return function(e,t,r,n=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},tK),{width:n.toString(),height:s.toString(),top:a,left:o}),h=(0,i.z$)().toLowerCase();r&&(l=es(h)?"_blank":r),en(h)&&(t=t||"http://localhost",u.scrollbars="yes");let c=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return eh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(h)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new tG(null);let d=window.open(t||"",l,c);m(d,e,"popup-blocked");try{d.focus()}catch(e){}return new tG(d)}(e,a,tn())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await tQ(e,t,r,v(),n);return ts().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||y("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await tH(e),r=new tD(e);return t.register("authEvent",t=>{m(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(tX,{type:tX},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[tX];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tF(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ec()||ei()||eh()}}class tY{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class tZ extends tY{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tZ(e)}_finalizeEnroll(e,t,r){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class t0{constructor(){}static assertion(e){return tZ._fromCredential(e)}}t0.FACTOR_ID="phone";class t1{static assertionForEnrollment(e,t){return t2._fromSecret(e,t)}static assertionForSignIn(e,t){return t2._fromEnrollmentId(e,t)}static async generateSecret(e){var t,r;m(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let n=await C(r=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",S(r,{idToken:e.credential,totpEnrollmentInfo:{}}));return t4._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}t1.FACTOR_ID="totp";class t2 extends tY{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new t2(t,void 0,e)}static _fromEnrollmentId(e,t){return new t2(t,e)}async _finalizeEnroll(e,t,r){return m(void 0!==this.secret,e,"argument-error"),C(e,"POST","/v2/accounts/mfaEnrollment:finalize",S(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){m(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return C(e,"POST","/v2/accounts/mfaSignIn:finalize",S(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class t4{constructor(e,t,r,n,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new t4(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(t9(e)||t9(t))&&(n=!0),n&&(t9(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),t9(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function t9(e){return void 0===e||(null==e?void 0:e.length)===0}var t6="@firebase/auth",t5="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let t7=(0,i.Pz)("authIdTokenMaxAge")||300,t8=null,re=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>t7)return;let i=null==r?void 0:r.token;t8!==i&&(t8=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rt(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;f(e,"already-initialized")}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:tJ,persistence:[ty,te,tt]}),n=(0,i.Pz)("authTokenSyncURL");if(n){let e=re(n);(0,i.m9)(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),(0,i.m9)(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let a=(0,i.q4)("auth");return a&&function(e,t,r){let n=ey(e);m(n._canInitEmulator,n,"emulator-config-failed"),m(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=eI(t),{host:a,port:o}=function(e){let t=eI(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:eS(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:eS(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${a}`),r}n="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;m(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ed(n)},u=new em(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Y);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=ey(e.getProvider("auth").getImmediate());return new t3(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(t6,t5,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.KN)(t6,t5,"esm2017")},6100:function(e,t,r){"use strict";r.d(t,{ET:function(){return lL},hJ:function(){return oX},oe:function(){return lx},JU:function(){return oJ},PL:function(){return lD},ad:function(){return o1},cf:function(){return lM},IO:function(){return lv},pl:function(){return lP},ar:function(){return lw}});var n,i,s,a,o,l,u,h=r(5816),c=r(8463),d=r(3333),f=r(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},g={},m=m||{},y=p||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function w(e,t,r){return e.call.apply(e.bind,arguments)}function b(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function E(e,t,r){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b).apply(null,arguments)}function T(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}S.prototype.s=!1,S.prototype.sa=function(){this.s||(this.s=!0,this.N())},S.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function k(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function A(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(v(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function R(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch(e){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function D(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return -1!=D().indexOf(e)}function x(e){return x[" "](e),e}x[" "]=function(){};var L=P("Opera"),M=P("Trident")||P("MSIE"),U=P("Edge"),F=U||M,V=P("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),j=-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge");function B(){var e=y.document;return e?e.documentMode:void 0}e:{var q,z="",$=(q=D(),V?/rv:([^\);]+)(\)|;)/.exec(q):U?/Edge\/([\d\.]+)/.exec(q):M?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(q):j?/WebKit\/(\S+)/.exec(q):L?/(?:Version)[ \/]?(\S+)/.exec(q):void 0);if($&&(z=$?$[1]:""),M){var H=B();if(null!=H&&H>parseFloat(z)){i=String(H);break e}}i=z}var K=y.document&&M&&(B()||parseInt(i,10))||void 0;function G(e,t){if(R.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V){e:{try{x(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:W[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}I(G,R);var W={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++X,this.fa=this.ia=!1}function Y(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Z(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function ee(e){let t={};for(let r in e)t[r]=e[r];return t}let et="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function er(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<et.length;t++)r=et[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function en(e){this.src=e,this.g={},this.h=0}function ei(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=C(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Y(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function es(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}en.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=es(e,t,n,i);return -1<a?(t=e[a],r||(t.ia=!1)):((t=new J(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var ea="closure_lm_"+(1e6*Math.random()|0),eo={};function el(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=_(i)?!!i.capture:!!i,o=ed(e);if(o||(e[ea]=o=new en(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return ec.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)N||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(eh(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function eu(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])ei(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(eh(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ed(t))?(ei(r,e),0==r.h&&(r.src=null,t[ea]=null)):Y(e)}}}function eh(e){return e in eo?eo[e]:eo[e]="on"+e}function ec(e,t){if(e.fa)e=!0;else{t=new G(t,this);var r=e.listener,n=e.la||e.src;e.ia&&eu(e),e=r.call(n,t)}return e}function ed(e){return(e=e[ea])instanceof en?e:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function ep(e){return"function"==typeof e?e:(e[ef]||(e[ef]=function(t){return e.handleEvent(t)}),e[ef])}function eg(){S.call(this),this.i=new en(this),this.S=this,this.J=null}function em(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new R(t,e);else if(t instanceof R)t.target=t.target||e;else{var i=t;er(t=new R(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=ey(a,n,!0,t)&&i}if(i=ey(a=t.g=e,n,!0,t)&&i,i=ey(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ey(a=t.g=r[s],n,!1,t)&&i}function ey(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==r){var o=a.listener,l=a.la||a.src;a.ia&&ei(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}I(eg,S),eg.prototype[Q]=!0,eg.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=_(i)?!!i.capture:!!i,n=ep(n),t&&t[Q])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=es(a=t.g[r],n,i,s))&&(Y(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=ed(t))&&(r=t.g[r.toString()],t=-1,r&&(t=es(r,n,i,s)),(n=-1<t?r[t]:null)&&eu(n))}(this,e,t,r,n)},eg.prototype.N=function(){if(eg.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Y(r[n]);delete t.g[e],t.h--}}this.J=null},eg.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eg.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var ev=y.JSON.stringify;class e_{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}class ew{constructor(){this.h=this.g=null}add(e,t){let r=eb.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var eb=new e_(()=>new eE,e=>e.reset());class eE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let eT,eI=!1,eS=new ew,eC=()=>{let e=y.Promise.resolve(void 0);eT=()=>{e.then(ek)}};var ek=()=>{let e;for(var t;e=null,eS.g&&(e=eS.g,eS.g=eS.g.next,eS.g||(eS.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}eb.j(t),100>eb.h&&(eb.h++,t.next=eb.g,eb.g=t)}eI=!1};function eA(e,t){eg.call(this),this.h=e||1,this.g=t||y,this.j=E(this.qb,this),this.l=Date.now()}function eR(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function eN(e,t,r){if("function"==typeof e)r&&(e=E(e,r));else if(e&&"function"==typeof e.handleEvent)e=E(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}I(eA,eg),(u=eA.prototype).ga=!1,u.T=null,u.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),em(this,"tick"),this.ga&&(eR(this),this.start()))}},u.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.N=function(){eA.$.N.call(this),eR(this),delete this.g};class eO extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eN(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eD(e){S.call(this),this.h=e,this.g={}}I(eD,S);var eP=[];function ex(e,t,r,n){Array.isArray(r)||(r&&(eP[0]=r.toString()),r=eP);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ep(n),t&&t[Q]?t.P(r,n,_(i)?!!i.capture:!!i,s):el(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ep(n),t&&t[Q]?t.O(r,n,_(i)?!!i.capture:!!i,s):el(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function eL(e){Z(e.g,function(e,t){this.g.hasOwnProperty(t)&&eu(e)},e),e.g={}}function eM(){this.g=!0}function eU(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ev(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eD.prototype.N=function(){eD.$.N.call(this),eL(this)},eD.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eM.prototype.Ea=function(){this.g=!1},eM.prototype.info=function(){};var eF={},eV=null;function ej(){return eV=eV||new eg}function eB(e){R.call(this,eF.Ta,e)}function eq(e){let t=ej();em(t,new eB(t))}function ez(e,t){R.call(this,eF.STAT_EVENT,e),this.stat=t}function e$(e){let t=ej();em(t,new ez(t,e))}function eH(e,t){R.call(this,eF.Ua,e),this.size=t}function eK(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}eF.Ta="serverreachability",I(eB,R),eF.STAT_EVENT="statevent",I(ez,R),eF.Ua="timingevent",I(eH,R);var eG={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eW={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eQ(){}function eX(e){return e.h||(e.h=e.i())}function eJ(){}eQ.prototype.h=null;var eY={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function eZ(){R.call(this,"d")}function e0(){R.call(this,"c")}function e1(){}function e2(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new eD(this),this.P=e9,e=F?125:void 0,this.V=new eA(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new e4}function e4(){this.i=null,this.g="",this.h=!1}I(eZ,R),I(e0,R),I(e1,eQ),e1.prototype.g=function(){return new XMLHttpRequest},e1.prototype.i=function(){return{}},a=new e1;var e9=45e3,e6={},e5={};function e3(e,t,r){e.L=1,e.v=tg(th(t)),e.s=r,e.S=!0,e7(e,null)}function e7(e,t){e.G=Date.now(),tt(e),e.A=th(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),tA(r.i,"t",n),e.C=0,r=e.l.J,e.h=new e4,e.g=ry(e.l,r?t:null,!e.s),0<e.O&&(e.M=new eO(E(e.Pa,e,e.g),e.O)),ex(e.U,e.g,"readystatechange",e.nb),t=e.I?ee(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),eq(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function e8(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function te(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?e5:isNaN(r=Number(t.substring(r,n)))?e6:(n+=1)+r>t.length?e5:(t=t.slice(n,n+r),e.C=n+r,t)}(e,r))==e5){4==t&&(e.o=4,e$(14),n=!1),eU(e.j,e.m,null,"[Incomplete Response]");break}else if(i==e6){e.o=4,e$(15),eU(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else eU(e.j,e.m,i,null),ta(e,i);e8(e)&&i!=e5&&i!=e6&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,e$(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),ru(t),t.M=!0,e$(11))):(eU(e.j,e.m,r,"[Invalid Chunked Response]"),ts(e),ti(e))}function tt(e){e.Y=Date.now()+e.P,tr(e,e.P)}function tr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eK(E(e.lb,e),t)}function tn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function ti(e){0==e.l.H||e.J||rd(e.l,e)}function ts(e){tn(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,eR(e.V),eL(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ta(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||tL(r.i,e))){if(!e.K&&tL(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)rc(r),rt(r);else break e}rl(r),e$(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=eK(E(r.ib,r),6e3));if(1>=tx(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else rp(r,11)}else if((e.K||r.g==e)&&rc(r),!O(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.V=o[0],o=o[1],2==r.H){if("c"==o[0]){r.K=o[1],r.pa=o[2];let t=o[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=o[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(tM(s,s.h),s.h=null))}if(n.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,tp(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=rm(n,n.J?n.pa:null,n.Y),e.K){tU(n.i,e);var a=n.L;a&&e.setTimeout(a),e.B&&(tn(e),tt(e)),n.g=e}else ro(n);0<r.j.length&&rn(r)}else"stop"!=o[0]&&"close"!=o[0]||rp(r,7)}else 3==r.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?rp(r,7):re(r):"noop"!=o[0]&&r.h&&r.h.Aa(o),r.A=0)}}eq(4)}catch(e){}}function to(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(u=e2.prototype).setTimeout=function(e){this.P=e},u.nb=function(e){e=e.target;let t=this.M;t&&3==t9(e)?t.l():this.Pa(e)},u.Pa=function(e){try{if(e==this.g)e:{let h=t9(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ja()||t6(this.g)))){this.J||4!=h||7==t||(8==t||0>=c?eq(3):eq(2)),tn(this);var r=this.g.da();this.ca=r;t:if(e8(this)){var n=t6(this.g);e="";var i=n.length,s=4==t9(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ts(this),ti(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,h,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(o)){var u=o;break t}}u=null}if(r=u)eU(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ta(this,r);else{this.i=!1,this.o=3,e$(12),ts(this),ti(this);break e}}this.S?(te(this,h,a),F&&this.i&&3==h&&(ex(this.U,this.V,"tick",this.mb),this.V.start())):(eU(this.j,this.m,a,null),ta(this,a)),4==h&&ts(this),this.i&&!this.J&&(4==h?rd(this.l,this):(this.i=!1,tt(this)))}else(function(e){let t={};e=(e.g&&2<=t9(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(O(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.o=3,e$(12)):(this.o=0,e$(13)),ts(this),ti(this)}}}catch(e){}finally{}},u.mb=function(){if(this.g){var e=t9(this.g),t=this.g.ja();this.C<t.length&&(tn(this),te(this,e,t),this.i&&4!=e&&tt(this))}},u.cancel=function(){this.J=!0,ts(this)},u.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(eq(),e$(17)),ts(this),this.o=2,ti(this)):tr(this,this.Y-e)};var tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tu(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof tu){this.h=e.h,tc(this,e.j),this.s=e.s,this.g=e.g,td(this,e.m),this.l=e.l;var t=e.i,r=new tI;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tf(this,r),this.o=e.o}else e&&(t=String(e).match(tl))?(this.h=!1,tc(this,t[1]||"",!0),this.s=tm(t[2]||""),this.g=tm(t[3]||"",!0),td(this,t[4]),this.l=tm(t[5]||"",!0),tf(this,t[6]||"",!0),this.o=tm(t[7]||"")):(this.h=!1,this.i=new tI(null,this.h))}function th(e){return new tu(e)}function tc(e,t,r){e.j=r?tm(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function td(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tf(e,t,r){var n,i;t instanceof tI?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tS(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tC(this,t),tA(this,r,e))},n)),n.j=i):(r||(t=ty(t,tE)),e.i=new tI(t,e.h))}function tp(e,t,r){e.i.set(t,r)}function tg(e){return tp(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function tm(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ty(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tv),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tv(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}tu.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ty(t,t_,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ty(t,t_,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ty(r,"/"==r.charAt(0)?tb:tw,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",ty(r,tT)),e.join("")};var t_=/[#\/\?@]/g,tw=/[#\?:]/g,tb=/[#\?]/g,tE=/[#\?@]/g,tT=/#/g;function tI(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tS(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tC(e,t){tS(e),t=tR(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tk(e,t){return tS(e),t=tR(e,t),e.g.has(t)}function tA(e,t,r){tC(e,t),0<r.length&&(e.i=null,e.g.set(tR(e,t),k(r)),e.h+=r.length)}function tR(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=tI.prototype).add=function(e,t){tS(this),this.i=null,e=tR(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},u.forEach=function(e,t){tS(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},u.ta=function(){tS(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},u.Z=function(e){tS(this);let t=[];if("string"==typeof e)tk(this,e)&&(t=t.concat(this.g.get(tR(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},u.set=function(e,t){return tS(this),this.i=null,tk(this,e=tR(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")};var tN=class{constructor(e,t){this.g=e,this.map=t}};function tO(e){this.l=e||tD,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function tP(e){return!!e.h||!!e.g&&e.g.size>=e.j}function tx(e){return e.h?1:e.g?e.g.size:0}function tL(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function tM(e,t){e.g?e.g.add(t):e.h=t}function tU(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tF(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return k(e.i)}tO.prototype.cancel=function(){if(this.i=tF(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var tV=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function tj(){this.g=new tV}function tB(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function tq(e){this.l=e.ec||null,this.j=e.ob||!1}function tz(e,t){eg.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=t$,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}I(tq,eQ),tq.prototype.g=function(){return new tz(this.l,this.j)},tq.prototype.i=(n={},function(){return n}),I(tz,eg);var t$=0;function tH(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function tK(e){e.readyState=4,e.l=null,e.j=null,e.A=null,tG(e)}function tG(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=tz.prototype).open=function(e,t){if(this.readyState!=t$)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,tG(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tK(this)),this.readyState=t$},u.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tG(this)),this.g&&(this.readyState=3,tG(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tH(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},u.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tK(this):tG(this),3==this.readyState&&tH(this)}},u.Za=function(e){this.g&&(this.response=this.responseText=e,tK(this))},u.Ya=function(e){this.g&&(this.response=e,tK(this))},u.ka=function(){this.g&&tK(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tz.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tW=y.JSON.parse;function tQ(e){eg.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tX,this.L=this.M=!1}I(tQ,eg);var tX="",tJ=/^https?$/i,tY=["POST","PUT"];function tZ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,t0(e),t2(e)}function t0(e){e.F||(e.F=!0,em(e,"complete"),em(e,"error"))}function t1(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=t9(e)||2!=e.da())){if(e.v&&4==t9(e))eN(e.La,0,e);else if(em(e,"readystatechange"),4==t9(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===a){var i=String(e.I).match(tl)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!tJ.test(i?i.toLowerCase():"")}t=r}if(t)em(e,"complete"),em(e,"success");else{e.m=6;try{var s=2<t9(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",t0(e)}}finally{t2(e)}}}}function t2(e,t){if(e.g){t4(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||em(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function t4(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function t9(e){return e.g?e.g.readyState:0}function t6(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tX:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function t5(e){let t="";return Z(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function t3(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=t5(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tp(e,t,r))}function t7(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function t8(e){this.Ga=0,this.j=[],this.l=new eM,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=t7("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=t7("baseRetryDelayMs",5e3,e),this.hb=t7("retryDelaySeedMs",1e4,e),this.eb=t7("forwardChannelMaxRetries",2,e),this.xa=t7("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new tO(e&&e.concurrentRequestLimit),this.Ja=new tj,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function re(e){if(rr(e),3==e.H){var t=e.W++,r=th(e.I);if(tp(r,"SID",e.K),tp(r,"RID",t),tp(r,"TYPE","terminate"),rs(e,r),(t=new e2(e,e.l,t)).L=2,t.v=tg(th(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&y.Image&&((new Image).src=t.v,r=!0),r||(t.g=ry(t.l,null),t.g.ha(t.v)),t.G=Date.now(),tt(t)}rg(e)}function rt(e){e.g&&(ru(e),e.g.cancel(),e.g=null)}function rr(e){rt(e),e.u&&(y.clearTimeout(e.u),e.u=null),rc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function rn(e){if(!tP(e.i)&&!e.m){e.m=!0;var t=e.Na;eT||eC(),eI||(eT(),eI=!0),eS.add(t,e),e.C=0}}function ri(e,t){var r;r=t?t.m:e.W++;let n=th(e.I);tp(n,"SID",e.K),tp(n,"RID",r),tp(n,"AID",e.V),rs(e,n),e.o&&e.s&&t3(n,e.o,e.s),r=new e2(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ra(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),tM(e.i,r),e3(r,n,t)}function rs(e,t){e.na&&Z(e.na,function(e,r){tp(t,r,e)}),e.h&&to({},function(e,r){tp(t,r,e)})}function ra(e,t,r){r=Math.min(e.j.length,r);var n=e.h?E(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].g,o=i[a].map;if(0>(r-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{to(e,function(e,r){let i=e;_(e)&&(i=ev(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function ro(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eT||eC(),eI||(eT(),eI=!0),eS.add(t,e),e.A=0}}function rl(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=eK(E(e.Ma,e),rf(e,e.A)),e.A++,!0)}function ru(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function rh(e){e.g=new e2(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=th(e.wa);tp(t,"RID","rpc"),tp(t,"SID",e.K),tp(t,"AID",e.V),tp(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&tp(t,"TO",e.qa),tp(t,"TYPE","xmlhttp"),rs(e,t),e.o&&e.s&&t3(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.v=tg(th(t)),r.s=null,r.S=!0,e7(r,e)}function rc(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function rd(e,t){var r=null;if(e.g==t){rc(e),ru(e),e.g=null;var n=2}else{if(!tL(e.i,t))return;r=t.F,tU(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;em(n=ej(),new eH(n,r)),rn(e)}else ro(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(i=t,!(tx(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=eK(E(e.Na,e,i),rf(e,e.C)),e.C++,!0)))||2==n&&rl(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:rp(e,5);break;case 4:rp(e,10);break;case 3:rp(e,6);break;default:rp(e,2)}}}function rf(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function rp(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=E(e.pb,e);r||(r=new tu("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tc(r,"https"),tg(r)),function(e,t){let r=new eM;if(y.Image){let n=new Image;n.onload=T(tB,r,n,"TestLoadImage: loaded",!0,t),n.onerror=T(tB,r,n,"TestLoadImage: error",!1,t),n.onabort=T(tB,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=T(tB,r,n,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else e$(2);e.H=0,e.h&&e.h.za(t),rg(e),rr(e)}function rg(e){if(e.H=0,e.ma=[],e.h){let t=tF(e.i);(0!=t.length||0!=e.j.length)&&(A(e.ma,t),A(e.ma,e.j),e.i.i.length=0,k(e.j),e.j.length=0),e.h.ya()}}function rm(e,t,r){var n=r instanceof tu?th(r):new tu(r);if(""!=n.g)t&&(n.g=t+"."+n.g),td(n,n.m);else{var i=y.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new tu(null);n&&tc(s,n),t&&(s.g=t),i&&td(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&tp(n,r,t),tp(n,"VER",e.ra),rs(e,n),n}function ry(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tQ(r&&e.Ha&&!e.va?new tq({ob:!0}):e.va)).Oa(e.J),t}function rv(){}function r_(){if(M&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function rw(e,t){eg.call(this),this.g=new t8(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rT(this)}function rb(e){eZ.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rE(){e0.call(this),this.status=1}function rT(e){this.g=e}function rI(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rS(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+3614090360&4294967295;a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[1]+3905402710&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[2]+606105819&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[4]+4118548399&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[5]+1200080426&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[6]+2821735955&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[8]+1770035416&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[9]+2336552879&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[10]+4294925233&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[12]+1804603682&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[13]+4254626195&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[14]+2792965006&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[12]+2368359562&4294967295,a=t+((r=i+(a<<20&4294967295|a>>>12))^i^s)+n[5]+4294588738&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[11]+1839030562&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[1]+2763975236&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[7]+4139469664&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[13]+681279174&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[3]+3572445317&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[9]+3654602809&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[15]+530742520&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(a<<23&4294967295|a>>>9),a=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rC(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(u=tQ.prototype).Oa=function(e){this.M=e},u.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?eX(this.u):eX(a),this.g.onreadystatechange=E(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){tZ(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,a]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=y.FormData&&e instanceof y.FormData,!(0<=C(tY,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;t4(this),0<this.B&&((this.L=(s=this.g,M&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=E(this.ua,this)):this.A=eN(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){tZ(this,e)}},u.ua=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,em(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,em(this,"complete"),em(this,"abort"),t2(this))},u.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),t2(this,!0)),tQ.$.N.call(this)},u.La=function(){this.s||(this.G||this.v||this.l?t1(this):this.kb())},u.kb=function(){t1(this)},u.isActive=function(){return!!this.g},u.da=function(){try{return 2<t9(this)?this.g.status:-1}catch(e){return -1}},u.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tW(t)}},u.Ia=function(){return this.m},u.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=t8.prototype).ra=8,u.H=1,u.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new e2(this,this.l,e),s=this.s;if(this.U&&(s?er(s=ee(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=ra(this,i,t),tp(r=th(this.I),"RID",e),tp(r,"CVER",22),this.F&&tp(r,"X-HTTP-Session-Id",this.F),rs(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(t5(s)))+"&"+t:this.o&&t3(r,this.o,s)),tM(this.i,i),this.bb&&tp(r,"TYPE","init"),this.P?(tp(r,"$req",t),tp(r,"SID","null"),i.aa=!0,e3(i,r,null)):e3(i,r,t),this.H=2}}else 3==this.H&&(e?ri(this,e):0==this.j.length||tP(this.i)||ri(this))}},u.Ma=function(){if(this.u=null,rh(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=eK(E(this.jb,this),e)}},u.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,e$(10),rt(this),rh(this))},u.ib=function(){null!=this.v&&(this.v=null,rt(this),rl(this),e$(19))},u.pb=function(e){e?(this.l.info("Successfully pinged google.com"),e$(2)):(this.l.info("Failed to ping google.com"),e$(1))},u.isActive=function(){return!!this.h&&this.h.isActive(this)},(u=rv.prototype).Ba=function(){},u.Aa=function(){},u.za=function(){},u.ya=function(){},u.isActive=function(){return!0},u.Va=function(){},r_.prototype.g=function(e,t){return new rw(e,t)},I(rw,eg),rw.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;e$(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=rm(e,null,e.Y),rn(e)},rw.prototype.close=function(){re(this.g)},rw.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=ev(e),e=r);t.j.push(new tN(t.fb++,e)),3==t.H&&rn(t)},rw.prototype.N=function(){this.g.h=null,delete this.j,re(this.g),delete this.g,rw.$.N.call(this)},I(rb,eZ),I(rE,e0),I(rT,rv),rT.prototype.Ba=function(){em(this.g,"a")},rT.prototype.Aa=function(e){em(this.g,new rb(e))},rT.prototype.za=function(e){em(this.g,new rE)},rT.prototype.ya=function(){em(this.g,"b")},I(rI,function(){this.blockSize=-1}),rI.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},rI.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)rS(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){rS(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){rS(this,n),i=0;break}}this.h=i,this.i+=t},rI.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var rk={};function rA(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(rk,e)?rk[e]:rk[e]=new rC([0|e],0>e?-1:0):new rC([0|e],0>e?-1:0)}function rR(e){if(isNaN(e)||!isFinite(e))return rO;if(0>e)return rM(rR(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=rN;return new rC(t,0)}var rN=4294967296,rO=rA(0),rD=rA(1),rP=rA(16777216);function rx(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function rL(e){return -1==e.h}function rM(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new rC(r,~e.h).add(rD)}function rU(e,t){return e.add(rM(t))}function rF(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function rV(e,t){this.g=e,this.h=t}function rj(e,t){if(rx(t))throw Error("division by zero");if(rx(e))return new rV(rO,rO);if(rL(e))return t=rj(rM(e),t),new rV(rM(t.g),rM(t.h));if(rL(t))return t=rj(e,rM(t)),new rV(rM(t.g),t.h);if(30<e.g.length){if(rL(e)||rL(t))throw Error("slowDivide_ only works with positive integers.");for(var r=rD,n=t;0>=n.X(e);)r=rB(r),n=rB(n);var i=rq(r,1),s=rq(n,1);for(n=rq(n,2),r=rq(r,2);!rx(n);){var a=s.add(n);0>=a.X(e)&&(i=i.add(r),s=a),n=rq(n,1),r=rq(r,1)}return t=rU(e,i.R(t)),new rV(i,t)}for(i=rO;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=rR(r)).R(t);rL(a)||0<a.X(e);)r-=n,a=(s=rR(r)).R(t);rx(s)&&(s=rD),i=i.add(s),e=rU(e,a)}return new rV(i,e)}function rB(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new rC(r,e.h)}function rq(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new rC(i,e.h)}(u=rC.prototype).ea=function(){if(rL(this))return-rM(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:rN+n)*t,t*=rN}return e},u.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(rx(this))return"0";if(rL(this))return"-"+rM(this).toString(e);for(var t=rR(Math.pow(e,6)),r=this,n="";;){var i=rj(r,t).g,s=((0<(r=rU(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(rx(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},u.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},u.X=function(e){return rL(e=rU(this,e))?-1:rx(e)?0:1},u.abs=function(){return rL(this)?rM(this):this},u.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=a>>>16,s&=65535,a&=65535,r[i]=a<<16|s}return new rC(r,-2147483648&r[r.length-1]?-1:0)},u.R=function(e){if(rx(this)||rx(e))return rO;if(rL(this))return rL(e)?rM(this).R(rM(e)):rM(rM(this).R(e));if(rL(e))return rM(this.R(rM(e)));if(0>this.X(rP)&&0>e.X(rP))return rR(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,a=65535&this.D(n),o=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=a*l,rF(r,2*n+2*i),r[2*n+2*i+1]+=s*l,rF(r,2*n+2*i+1),r[2*n+2*i+1]+=a*o,rF(r,2*n+2*i+1),r[2*n+2*i+2]+=s*o,rF(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new rC(r,0)},u.gb=function(e){return rj(this,e).h},u.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new rC(r,this.h&e.h)},u.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new rC(r,this.h|e.h)},u.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new rC(r,this.h^e.h)},r_.prototype.createWebChannel=r_.prototype.g,rw.prototype.send=rw.prototype.u,rw.prototype.open=rw.prototype.m,rw.prototype.close=rw.prototype.close,eG.NO_ERROR=0,eG.TIMEOUT=8,eG.HTTP_ERROR=6,eW.COMPLETE="complete",eJ.EventType=eY,eY.OPEN="a",eY.CLOSE="b",eY.ERROR="c",eY.MESSAGE="d",eg.prototype.listen=eg.prototype.O,tQ.prototype.listenOnce=tQ.prototype.P,tQ.prototype.getLastError=tQ.prototype.Sa,tQ.prototype.getLastErrorCode=tQ.prototype.Ia,tQ.prototype.getStatus=tQ.prototype.da,tQ.prototype.getResponseJson=tQ.prototype.Wa,tQ.prototype.getResponseText=tQ.prototype.ja,tQ.prototype.send=tQ.prototype.ha,tQ.prototype.setWithCredentials=tQ.prototype.Oa,rI.prototype.digest=rI.prototype.l,rI.prototype.reset=rI.prototype.reset,rI.prototype.update=rI.prototype.j,rC.prototype.add=rC.prototype.add,rC.prototype.multiply=rC.prototype.R,rC.prototype.modulo=rC.prototype.gb,rC.prototype.compare=rC.prototype.X,rC.prototype.toNumber=rC.prototype.ea,rC.prototype.toString=rC.prototype.toString,rC.prototype.getBits=rC.prototype.D,rC.fromNumber=rR,rC.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return rM(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rR(Math.pow(r,8)),i=rO,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),r);8>a?(a=rR(Math.pow(r,a)),i=i.R(a).add(rR(o))):i=(i=i.R(n)).add(rR(o))}return i};var rz=g.createWebChannelTransport=function(){return new r_},r$=g.getStatEventTarget=function(){return ej()},rH=g.ErrorCode=eG,rK=g.EventType=eW,Event=g.Event=eF,rG=g.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rW=g.FetchXmlHttpFactory=tq,rQ=g.WebChannel=eJ,rX=g.XhrIo=tQ,rJ=g.Md5=rI,rY=g.Integer=rC;r(3454);let rZ="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}r0.UNAUTHENTICATED=new r0(null),r0.GOOGLE_CREDENTIALS=new r0("google-credentials-uid"),r0.FIRST_PARTY=new r0("first-party-uid"),r0.MOCK_USER=new r0("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r1="10.5.2",r2=new d.Yd("@firebase/firestore");function r4(){return r2.logLevel}function r9(e,...t){if(r2.logLevel<=d.in.DEBUG){let r=t.map(r3);r2.debug(`Firestore (${r1}): ${e}`,...r)}}function r6(e,...t){if(r2.logLevel<=d.in.ERROR){let r=t.map(r3);r2.error(`Firestore (${r1}): ${e}`,...r)}}function r5(e,...t){if(r2.logLevel<=d.in.WARN){let r=t.map(r3);r2.warn(`Firestore (${r1}): ${e}`,...r)}}function r3(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r7(e="Unexpected state"){let t=`FIRESTORE (${r1}) INTERNAL ASSERTION FAILED: `+e;throw r6(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r8={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nn{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(r0.UNAUTHENTICATED))}shutdown(){}}class ni{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ns{constructor(e){this.t=e,this.currentUser=r0.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nt,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{r9("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(r9("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nt)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(r9("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||r7(),new nr(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||r7(),new r0(e)}}class na{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=r0.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class no{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new na(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(r0.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nu{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&r9("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,r9("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{r9("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):r9("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||r7(),this.R=e.token,new nl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function nc(e,t){return e<t?-1:e>t?1:0}function nd(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new ne(r8.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new ne(r8.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nf.fromMillis(Date.now())}static fromDate(e){return nf.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new nf(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?nc(this.nanoseconds,e.nanoseconds):nc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.timestamp=e}static fromTimestamp(e){return new np(e)}static min(){return new np(new nf(0,0))}static max(){return new np(new nf(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t,r){void 0===t?t=0:t>e.length&&r7(),void 0===r?r=e.length-t:r>e.length-t&&r7(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===ng.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof ng?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class nm extends ng{construct(e,t,r){return new nm(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new ne(r8.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new nm(t)}static emptyPath(){return new nm([])}}let ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nv extends ng{construct(e,t,r){return new nv(e,t,r)}static isValidIdentifier(e){return ny.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nv.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nv(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new ne(r8.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new ne(r8.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ne(r8.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new ne(r8.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nv(t)}static emptyPath(){return new nv([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.path=e}static fromPath(e){return new n_(nm.fromString(e))}static fromName(e){return new n_(nm.fromString(e).popFirst(5))}static empty(){return new n_(nm.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===nm.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nm.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n_(new nm(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}nw.UNKNOWN_ID=-1;class nb{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nb(np.min(),n_.empty(),-1)}static max(){return new nb(np.max(),n_.empty(),-1)}}class nE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(e){if(e.code!==r8.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;r9("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&r7(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new nI((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof nI?t:nI.resolve(t)}catch(e){return nI.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):nI.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):nI.reject(t)}static resolve(e){return new nI((t,r)=>{t(e)})}static reject(e){return new nI((t,r)=>{r(e)})}static waitFor(e){return new nI((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=nI.resolve(!1);for(let r of e)t=t.next(e=>e?nI.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new nI((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new nI((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function nS(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function nk(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function nR(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function nN(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}nC._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.comparator=e,this.root=t||nP.EMPTY}insert(e,t){return new nO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nP.BLACK,null,null))}remove(e){return new nO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nP.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nD(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nD(this.root,e,this.comparator,!1)}getReverseIterator(){return new nD(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nD(this.root,e,this.comparator,!0)}}class nD{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nP{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:nP.RED,this.left=null!=n?n:nP.EMPTY,this.right=null!=i?i:nP.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new nP(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return nP.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return nP.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,nP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,nP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw r7();let e=this.left.check();if(e!==this.right.check())throw r7();return e+(this.isRed()?0:1)}}nP.EMPTY=null,nP.RED=!0,nP.BLACK=!1,nP.EMPTY=new class{constructor(){this.size=0}get key(){throw r7()}get value(){throw r7()}get color(){throw r7()}get left(){throw r7()}get right(){throw r7()}copy(e,t,r,n,i){return this}insert(e,t,r){return new nP(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.comparator=e,this.data=new nO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nL(this.data.getIterator())}getIteratorFrom(e){return new nL(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof nx)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new nx(this.comparator);return t.data=e,t}}class nL{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.fields=e,e.sort(nv.comparator)}static empty(){return new nM([])}unionWith(e){let t=new nx(nv.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new nM(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nd(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new nU("Invalid base64 string: "+e):e}}(e);return new nF(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new nF(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nF.EMPTY_BYTE_STRING=new nF("");let nV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nj(e){if(e||r7(),"string"==typeof e){let t=0,r=nV.exec(e);if(r||r7(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nB(e.seconds),nanos:nB(e.nanos)}}function nB(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function nq(e){return"string"==typeof e?nF.fromBase64String(e):nF.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nz(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function n$(e){let t=e.mapValue.fields.__previous_value__;return nz(t)?n$(t):t}function nH(e){let t=nj(e.mapValue.fields.__local_write_time__.timestampValue);return new nf(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class nG{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new nG("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof nG&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nW={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function nQ(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nz(e)?4:n7(e)?9007199254740991:10:r7()}function nX(e,t){if(e===t)return!0;let r=nQ(e);if(r!==nQ(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nH(e).isEqual(nH(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=nj(e.timestampValue),n=nj(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return nq(e.bytesValue).isEqual(nq(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return nB(e.geoPointValue.latitude)===nB(t.geoPointValue.latitude)&&nB(e.geoPointValue.longitude)===nB(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return nB(e.integerValue)===nB(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=nB(e.doubleValue),n=nB(t.doubleValue);return r===n?nk(r)===nk(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return nd(e.arrayValue.values||[],t.arrayValue.values||[],nX);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(nA(r)!==nA(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!nX(r[e],n[e])))return!1;return!0}(e,t);default:return r7()}}function nJ(e,t){return void 0!==(e.values||[]).find(e=>nX(e,t))}function nY(e,t){if(e===t)return 0;let r=nQ(e),n=nQ(t);if(r!==n)return nc(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return nc(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=nB(e.integerValue||e.doubleValue),n=nB(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return nZ(e.timestampValue,t.timestampValue);case 4:return nZ(nH(e),nH(t));case 5:return nc(e.stringValue,t.stringValue);case 6:return function(e,t){let r=nq(e),n=nq(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=nc(r[e],n[e]);if(0!==t)return t}return nc(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=nc(nB(e.latitude),nB(t.latitude));return 0!==r?r:nc(nB(e.longitude),nB(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=nY(r[e],n[e]);if(t)return t}return nc(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===nW.mapValue&&t===nW.mapValue)return 0;if(e===nW.mapValue)return 1;if(t===nW.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=nc(n[e],s[e]);if(0!==t)return t;let a=nY(r[n[e]],i[s[e]]);if(0!==a)return a}return nc(n.length,s.length)}(e.mapValue,t.mapValue);default:throw r7()}}function nZ(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return nc(e,t);let r=nj(e),n=nj(t),i=nc(r.seconds,n.seconds);return 0!==i?i:nc(r.nanos,n.nanos)}function n0(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=nj(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?nq(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,n_.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=n0(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${n0(e.fields[i])}`;return r+"}"}(e.mapValue):r7()}function n1(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function n2(e){return!!e&&"integerValue"in e}function n4(e){return!!e&&"arrayValue"in e}function n9(e){return!!e&&"nullValue"in e}function n6(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function n5(e){return!!e&&"mapValue"in e}function n3(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return nR(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=n3(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=n3(e.arrayValue.values[r]);return t}return Object.assign({},e)}function n7(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(e){this.value=e}static empty(){return new n8({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!n5(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=n3(t)}setAll(e){let t=nv.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=n3(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());n5(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nX(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];n5(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(nR(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new n8(n3(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new ie(e,0,np.min(),np.min(),np.min(),n8.empty(),0)}static newFoundDocument(e,t,r,n){return new ie(e,1,t,np.min(),r,n,0)}static newNoDocument(e,t){return new ie(e,2,t,np.min(),np.min(),n8.empty(),0)}static newUnknownDocument(e,t){return new ie(e,3,t,np.min(),np.min(),n8.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(np.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=n8.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=n8.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=np.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.position=e,this.inclusive=t}}function ir(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?n_.comparator(n_.fromName(a.referenceValue),r.key):nY(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function ii(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!nX(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{}class io extends ia{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new ic(e,t,r):"array-contains"===t?new im(e,r):"in"===t?new iy(e,r):"not-in"===t?new iv(e,r):"array-contains-any"===t?new i_(e,r):new io(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new id(e,r):new ip(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(nY(t,this.value)):null!==t&&nQ(this.value)===nQ(t)&&this.matchesComparison(nY(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return r7()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class il extends ia{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new il(e,t)}matches(e){return iu(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function iu(e){return"and"===e.op}function ih(e){for(let t of e.filters)if(t instanceof il)return!1;return!0}class ic extends io{constructor(e,t,r){super(e,t,r),this.key=n_.fromName(r.referenceValue)}matches(e){let t=n_.comparator(e.key,this.key);return this.matchesComparison(t)}}class id extends io{constructor(e,t){super(e,"in",t),this.keys=ig("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ip extends io{constructor(e,t){super(e,"not-in",t),this.keys=ig("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ig(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>n_.fromName(e.referenceValue))}class im extends io{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return n4(t)&&nJ(t.arrayValue,this.value)}}class iy extends io{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&nJ(this.value.arrayValue,t)}}class iv extends io{constructor(e,t){super(e,"not-in",t)}matches(e){if(nJ(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!nJ(this.value.arrayValue,t)}}class i_ extends io{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!n4(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>nJ(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function ib(e,t=null,r=[],n=[],i=null,s=null,a=null){return new iw(e,t,r,n,i,s,a)}function iE(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof io)return t.field.canonicalString()+t.op.toString()+n0(t.value);if(ih(t)&&iu(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>n0(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>n0(e)).join(",")),e.ce=t}return e.ce}function iT(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof io?r instanceof io&&t.op===r.op&&t.field.isEqual(r.field)&&nX(t.value,r.value):t instanceof il?r instanceof il&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void r7()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ii(e.startAt,t.startAt)&&ii(e.endAt,t.endAt)}function iI(e){return n_.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function iC(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ik(e){return null!==e.collectionGroup}function iA(e){if(null===e.le){let t;e.le=[];let r=new Set;for(let t of e.explicitOrderBy)e.le.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=(t=new nx(nv.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t);i.forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.le.push(new is(t,n))}),r.has(nv.keyField().canonicalString())||e.le.push(new is(nv.keyField(),n))}return e.le}function iR(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return ib(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new is(e.field,t)});let r=e.endAt?new it(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new it(e.startAt.position,e.startAt.inclusive):null;return ib(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,iA(e))),e.he}function iN(e,t){let r=e.filters.concat([t]);return new iS(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function iO(e,t,r){return new iS(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function iD(e,t){return iT(iR(e),iR(t))&&e.limitType===t.limitType}function iP(e){return`${iE(iR(e))}|lt:${e.limitType}`}function ix(e){var t;let r;return`Query(target=${r=(t=iR(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof io?`${t.field.canonicalString()} ${t.op} ${n0(t.value)}`:t instanceof il?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>n0(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>n0(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function iL(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):n_.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of iA(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=ir(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,iA(e),t))&&(!e.endAt||!!function(e,t,r){let n=ir(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,iA(e),t))}function iM(e){return(t,r)=>{let n=!1;for(let i of iA(e)){let e=function(e,t,r){let n=e.field.isKeyField()?n_.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?nY(n,i):r7()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return r7()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){nR(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return nN(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iF=new nO(n_.comparator),iV=new nO(n_.comparator);function ij(...e){let t=iV;for(let r of e)t=t.insert(r.key,r);return t}function iB(e){let t=iV;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function iq(){return new iU(e=>e.toString(),(e,t)=>e.isEqual(t))}let iz=new nO(n_.comparator),i$=new nx(n_.comparator);function iH(...e){let t=i$;for(let r of e)t=t.add(r);return t}let iK=new nx(nc);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iG(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nk(t)?"-0":t}}function iW(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(){this._=void 0}}function iX(e,t){return e instanceof i2?n2(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class iJ extends iQ{}class iY extends iQ{constructor(e){super(),this.elements=e}}function iZ(e,t){let r=i9(t);for(let t of e.elements)r.some(e=>nX(e,t))||r.push(t);return{arrayValue:{values:r}}}class i0 extends iQ{constructor(e){super(),this.elements=e}}function i1(e,t){let r=i9(t);for(let t of e.elements)r=r.filter(e=>!nX(e,t));return{arrayValue:{values:r}}}class i2 extends iQ{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function i4(e){return nB(e.integerValue||e.doubleValue)}function i9(e){return n4(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class i6{constructor(e,t){this.version=e,this.transformResults=t}}class i5{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new i5}static exists(e){return new i5(void 0,e)}static updateTime(e){return new i5(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function i3(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i7{}function i8(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new so(e.key,i5.none()):new sr(e.key,e.data,i5.none());{let r=e.data,n=n8.empty(),i=new nx(nv.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new sn(e.key,n,new nM(i.toArray()),i5.none())}}function se(e,t,r,n){return e instanceof sr?function(e,t,r,n){if(!i3(e.precondition,t))return r;let i=e.value.clone(),s=sa(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof sn?function(e,t,r,n){if(!i3(e.precondition,t))return r;let i=sa(e.fieldTransforms,n,t),s=t.data;return(s.setAll(si(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):i3(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function st(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&nd(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof iY&&n instanceof iY||r instanceof i0&&n instanceof i0?nd(r.elements,n.elements,nX):r instanceof i2&&n instanceof i2?nX(r.Ie,n.Ie):r instanceof iJ&&n instanceof iJ)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sr extends i7{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class sn extends i7{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function si(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function ss(e,t,r){var n;let i=new Map;e.length===r.length||r7();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof iY?iZ(o,l):o instanceof i0?i1(o,l):n))}return i}function sa(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof iJ?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&nz(t)&&(t=n$(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof iY?iZ(e,s):e instanceof i0?i1(e,s):function(e,t){let r=iX(e,t),n=i4(r)+i4(e.Ie);return n2(r)&&n2(e.Ie)?iW(n):iG(e.serializer,n)}(e,s))}return n}class so extends i7{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sl extends i7{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof sr?function(e,t,r){let n=e.value.clone(),i=ss(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof sn?function(e,t,r){if(!i3(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=ss(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(si(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=se(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=se(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=iq();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(n.key)?null:a;let o=i8(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(np.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),iH())}isEqual(e){return this.batchId===e.batchId&&nd(this.mutations,e.mutations,(e,t)=>st(e,t))&&nd(this.baseMutations,e.baseMutations,(e,t)=>st(e,t))}}class sh{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||r7();let n=iz,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new sh(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.count=e,this.unchangedNames=t}}function sf(e){if(void 0===e)return r6("GRPC error has no .code"),r8.UNKNOWN;switch(e){case o.OK:return r8.OK;case o.CANCELLED:return r8.CANCELLED;case o.UNKNOWN:return r8.UNKNOWN;case o.DEADLINE_EXCEEDED:return r8.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return r8.RESOURCE_EXHAUSTED;case o.INTERNAL:return r8.INTERNAL;case o.UNAVAILABLE:return r8.UNAVAILABLE;case o.UNAUTHENTICATED:return r8.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return r8.INVALID_ARGUMENT;case o.NOT_FOUND:return r8.NOT_FOUND;case o.ALREADY_EXISTS:return r8.ALREADY_EXISTS;case o.PERMISSION_DENIED:return r8.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return r8.FAILED_PRECONDITION;case o.ABORTED:return r8.ABORTED;case o.OUT_OF_RANGE:return r8.OUT_OF_RANGE;case o.UNIMPLEMENTED:return r8.UNIMPLEMENTED;case o.DATA_LOSS:return r8.DATA_LOSS;default:return r7()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp=new rY([4294967295,4294967295],0);function sg(e){let t=(new TextEncoder).encode(e),r=new rJ;return r.update(t),new Uint8Array(r.digest())}function sm(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new rY([r,n],0),new rY([i,s],0)]}class sy{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sv(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new sv(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new sv(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=rY.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(rY.fromNumber(r)));return 1===n.compare(sp)&&(n=new rY([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let t=sg(e),[r,n]=sm(t);for(let e=0;e<this.hashCount;e++){let t=this.de(r,n,e);if(!this.Ae(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new sy(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Te)return;let t=sg(e),[r,n]=sm(t);for(let e=0;e<this.hashCount;e++){let t=this.de(r,n,e);this.Re(t)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class sv extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,sw.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new s_(np.min(),n,new nO(nc),iF,iH())}}class sw{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new sw(r,t,iH(),iH(),iH())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,r,n){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=n}}class sE{constructor(e,t){this.targetId=e,this.fe=t}}class sT{constructor(e,t,r=nF.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class sI{constructor(){this.ge=0,this.pe=sk(),this.ye=nF.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=iH(),t=iH(),r=iH();return this.pe.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:r7()}}),new sw(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=sk()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class sS{constructor(e){this.Le=e,this.ke=new Map,this.qe=iF,this.Qe=sC(),this.Ke=new nO(nc)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:r7()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.fe.count,n=this.Ye(t);if(n){let i=n.target;if(iI(i)){if(0===r){let e=new n_(i.path);this.We(t,e,ie.newNoDocument(e,np.min()))}else 1===r||r7()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=nq(i).toUint8Array()}catch(e){if(e instanceof nU)return r5("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new sy(t,s,a)}catch(e){return r5(e instanceof sv?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.ke.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&iI(i.target)){let t=new n_(i.target.path);null!==this.qe.get(t)||this.st(n,t)||this.We(n,t,ie.newNoDocument(t,e))}r.De&&(t.set(n,r.ve()),r.Fe())}});let r=iH();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.qe.forEach((t,r)=>r.setReadTime(e));let n=new s_(e,t,this.Ke,this.qe,r);return this.qe=iF,this.Qe=sC(),this.Ke=new nO(nc),n}Ue(e,t){if(!this.je(e))return;let r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.st(e,t)?n.Me(t,1):n.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new sI,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new nx(nc),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||r9("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new sI),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function sC(){return new nO(n_.comparator)}function sk(){return new nO(n_.comparator)}let sA={asc:"ASCENDING",desc:"DESCENDING"},sR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sN={and:"AND",or:"OR"};class sO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sD(e,t){return e.useProto3Json||null==t?t:{value:t}}function sP(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sx(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sL(e){return e||r7(),np.fromTimestamp(function(e){let t=nj(e);return new nf(t.seconds,t.nanos)}(e))}function sM(e,t){return new nm(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function sU(e){let t=nm.fromString(e);return sK(t)||r7(),t}function sF(e,t){return sM(e.databaseId,t.path)}function sV(e,t){let r=sU(t);if(r.get(1)!==e.databaseId.projectId)throw new ne(r8.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new ne(r8.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new n_(sq(r))}function sj(e,t){return sM(e.databaseId,t)}function sB(e){return new nm(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function sq(e){return e.length>4&&"documents"===e.get(4)||r7(),e.popFirst(5)}function sz(e,t,r){return{name:sF(e,t),fields:r.value.mapValue.fields}}function s$(e){return{fieldPath:e.canonicalString()}}function sH(e){return nv.fromServerFormat(e.fieldPath)}function sK(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(e,t,r,n,i=np.min(),s=np.min(),a=nF.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new sG(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sG(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sG(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sG(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{constructor(e){this.ut=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sQ{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(nB(e.integerValue));else if("doubleValue"in e){let r=nB(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),nk(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Tt(t,20),"string"==typeof r?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(nq(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?n7(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):r7()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let r=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(r)))this.At(e,t),this.Pt(r[e],t)}yt(e,t){let r=e.values||[];for(let e of(this.Tt(t,50),r))this.Pt(e,t)}ft(e,t){this.Tt(t,37),n_.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}sQ.St=new sQ;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(){this.on=new sJ}addToCollectionParentIndex(e,t){return this.on.add(t),nI.resolve()}getCollectionParents(e,t){return nI.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return nI.resolve()}deleteFieldIndex(e,t){return nI.resolve()}deleteAllFieldIndexes(e){return nI.resolve()}createTargetIndexes(e,t){return nI.resolve()}getDocumentsMatchingTarget(e,t){return nI.resolve(null)}getIndexType(e,t){return nI.resolve(0)}getFieldIndexes(e,t){return nI.resolve([])}getNextCollectionGroupToUpdate(e){return nI.resolve(null)}getMinOffset(e,t){return nI.resolve(nb.min())}getMinOffsetFromCollectionGroup(e,t){return nI.resolve(nb.min())}updateCollectionGroup(e,t,r){return nI.resolve()}updateIndexEntries(e,t){return nI.resolve()}}class sJ{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new nx(nm.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new nx(nm.comparator)).toArray()}}new Uint8Array(0);class sY{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new sY(e,sY.DEFAULT_COLLECTION_PERCENTILE,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sY.DEFAULT_COLLECTION_PERCENTILE=10,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sY.DEFAULT=new sY(41943040,sY.DEFAULT_COLLECTION_PERCENTILE,sY.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sY.DISABLED=new sY(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new sZ(0)}static Nn(){return new sZ(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.changes=new iU(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?nI.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&se(r.mutation,e,nM.empty(),nf.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,iH()).next(()=>t))}getLocalViewOfDocuments(e,t,r=iH()){let n=iq();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ij();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=iq();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,iH()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=iF,s=iq(),a=iq();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof sn)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),se(a.mutation,t,a.mutation.getFieldMask(),nf.now())):s.set(t.key,nM.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new s1(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=iq(),n=new nO((e,t)=>e-t),i=iH();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||nM.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||iH()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=iq();l.forEach(e=>{if(!i.has(e)){let n=i8(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return nI.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return n_.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ik(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):nI.resolve(iq()),a=-1,o=i;return s.next(t=>nI.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?nI.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,iH())).next(e=>({batchId:a,changes:iB(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new n_(t)).next(e=>{let t=ij();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=ij();return this.indexManager.getCollectionParents(e,i).next(a=>nI.forEach(a,a=>{let o=new iS(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,ie.newInvalidDocument(n)))});let r=ij();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&se(s.mutation,n,nM.empty(),nf.now()),iL(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return nI.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:sL(t.createTime)}),nI.resolve()}getNamedQuery(e,t){return nI.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=sU(e);return 4===t.length?nm.emptyPath():sq(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||r7();let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=sH(e.unaryFilter.field);return io.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=sH(e.unaryFilter.field);return io.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=sH(e.unaryFilter.field);return io.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=sH(e.unaryFilter.field);return io.create(i,"!=",{nullValue:"NULL_VALUE"});default:return r7()}}(t):void 0!==t.fieldFilter?io.create(sH(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return r7()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?il.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return r7()}}(t.compositeFilter.op)):r7()}(e);return r instanceof il&&ih(t=r)&&iu(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new is(sH(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before,r=e.values||[];return new it(r,t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before,r=e.values||[];return new it(r,t)}(i.endAt)),new iS(n,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?iO(t,t.limit,"L"):t}(t.bundledQuery),readTime:sL(t.readTime)}),nI.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(){this.overlays=new nO(n_.comparator),this.lr=new Map}getOverlay(e,t){return nI.resolve(this.overlays.get(t))}getOverlays(e,t){let r=iq();return nI.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.lt(e,t,n)}),nI.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.lr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(r)),nI.resolve()}getOverlaysForCollection(e,t,r){let n=iq(),i=t.length+1,s=new n_(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return nI.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new nO((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=iq(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=iq(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return nI.resolve(a)}lt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.lr.get(n.largestBatchId).delete(r.key);this.lr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new sc(t,r));let i=this.lr.get(t);void 0===i&&(i=iH(),this.lr.set(t,i)),this.lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(){this.hr=new nx(s5.Pr),this.Ir=new nx(s5.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let r=new s5(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new s5(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new n_(new nm([])),r=new s5(t,e),n=new s5(t,e+1),i=[];return this.Ir.forEachInRange([r,n],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new n_(new nm([])),r=new s5(t,e),n=new s5(t,e+1),i=iH();return this.Ir.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new s5(e,0),r=this.hr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class s5{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return n_.comparator(e.key,t.key)||nc(e.gr,t.gr)}static Tr(e,t){return nc(e.gr,t.gr)||n_.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new nx(s5.Pr)}checkEmpty(e){return nI.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new su(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.yr=this.yr.add(new s5(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return nI.resolve(s)}lookupMutationBatch(e,t){return nI.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Sr(t+1),n=r<0?0:r;return nI.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return nI.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return nI.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new s5(t,0),n=new s5(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,n],e=>{let t=this.wr(e.gr);i.push(t)}),nI.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nx(nc);return t.forEach(e=>{let t=new s5(e,0),n=new s5(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,n],e=>{r=r.add(e.gr)})}),nI.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;n_.isDocumentKey(i)||(i=i.child(""));let s=new s5(new n_(i),0),a=new nx(nc);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.gr)),!0)},s),nI.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let r=this.wr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||r7(),this.mutationQueue.shift();let r=this.yr;return nI.forEach(t.mutations,n=>{let i=new s5(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){let r=new s5(t,0),n=this.yr.firstAfterOrEqual(r);return nI.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,nI.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s7{constructor(e){this.Cr=e,this.docs=new nO(n_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return nI.resolve(r?r.document.mutableCopy():ie.newInvalidDocument(t))}getEntries(e,t){let r=iF;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():ie.newInvalidDocument(e))}),nI.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=iF,s=t.path,a=new n_(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=n_.comparator(e.documentKey,t.documentKey))?r:nc(e.largestBatchId,t.largestBatchId)}(new nb(a.readTime,a.key,-1),r)||(n.has(a.key)||iL(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return nI.resolve(i)}getAllFromCollectionGroup(e,t,r,n){r7()}vr(e,t){return nI.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new s8(this)}getSize(e){return nI.resolve(this.size)}}class s8 extends s0{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this._r.addEntry(e,n)):this._r.removeEntry(r)}),nI.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.persistence=e,this.Fr=new iU(e=>iE(e),iT),this.lastRemoteSnapshotVersion=np.min(),this.highestTargetId=0,this.Mr=0,this.Or=new s6,this.targetCount=0,this.Nr=sZ.On()}forEachTarget(e,t){return this.Fr.forEach((e,r)=>t(r)),nI.resolve()}getLastRemoteSnapshotVersion(e){return nI.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return nI.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),nI.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),nI.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new sZ(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,nI.resolve()}updateTargetData(e,t){return this.kn(t),nI.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,nI.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),nI.waitFor(i).next(()=>n)}getTargetCount(e){return nI.resolve(this.targetCount)}getTargetData(e,t){let r=this.Fr.get(t)||null;return nI.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),nI.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),nI.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),nI.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Or.mr(t);return nI.resolve(r)}containsKey(e,t){return nI.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.Br={},this.overlays={},this.Lr=new nC(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new ae(this),this.indexManager=new sX,this.remoteDocumentCache=new s7(e=>this.referenceDelegate.Qr(e)),this.serializer=new sW(t),this.Kr=new s4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new s3(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){r9("MemoryPersistence","Starting transaction:",e);let n=new ar(this.Lr.next());return this.referenceDelegate.$r(),r(n).next(e=>this.referenceDelegate.Ur(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Wr(e,t){return nI.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class ar extends nE{constructor(e){super(),this.currentSequenceNumber=e}}class an{constructor(e){this.persistence=e,this.Gr=new s6,this.zr=null}static jr(e){return new an(e)}get Hr(){if(this.zr)return this.zr;throw r7()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),nI.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),nI.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),nI.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nI.forEach(this.Hr,r=>{let n=n_.fromPath(r);return this.Jr(e,n).next(e=>{e||t.removeEntry(n,np.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return nI.or([()=>nI.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=n}static Qi(e,t){let r=iH(),n=iH();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new ai(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new as;return this.Hi(e,t,r).next(n=>{if(i.result=n,this.$i)return this.Ji(e,t,r,n.size)})}).next(()=>i.result)}Ji(e,t,r,n){return r.documentReadCount<this.Ui?(r4()<=d.in.DEBUG&&r9("QueryEngine","SDK will not create cache indexes for query:",ix(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),nI.resolve()):(r4()<=d.in.DEBUG&&r9("QueryEngine","Query:",ix(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Wi*n?(r4()<=d.in.DEBUG&&r9("QueryEngine","The SDK decides to create cache indexes for query:",ix(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,iR(t))):nI.resolve())}zi(e,t){if(iC(t))return nI.resolve(null);let r=iR(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=iR(t=iO(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=iH(...n);return this.Gi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Yi(t,n);return this.Zi(t,s,i,r.readTime)?this.zi(e,iO(t,null,"F")):this.Xi(e,s,t,r)}))})))}ji(e,t,r,n){return iC(t)||n.isEqual(np.min())?nI.resolve(null):this.Gi.getDocuments(e,r).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,r,n)?nI.resolve(null):(r4()<=d.in.DEBUG&&r9("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ix(t)),this.Xi(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=np.fromTimestamp(1e9===n?new nf(r+1,0):new nf(r,n));return new nb(i,n_.empty(),-1)}(n,0)).next(e=>e))})}Yi(e,t){let r=new nx(iM(e));return t.forEach((t,n)=>{iL(e,n)&&(r=r.add(n))}),r}Zi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Hi(e,t,r){return r4()<=d.in.DEBUG&&r9("QueryEngine","Using full collection scan to execute query:",ix(t)),this.Gi.getDocumentsMatchingQuery(e,t,nb.min(),r)}Xi(e,t,r,n){return this.Gi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,n){this.persistence=e,this.es=t,this.serializer=n,this.ts=new nO(nc),this.ns=new iU(e=>iE(e),iT),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s2(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}async function al(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=iH();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function au(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}async function ah(e,t,r){let n=e.ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!nS(e))throw e;r9("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(n.target)}function ac(e,t,r){let n=np.min(),i=iH();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ns.get(r);return void 0!==n?nI.resolve(e.ts.get(n)):e.qr.getTargetData(t,r)})(e,s,iR(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,r?n:np.min(),r?i:iH())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.rs.get(n)||np.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(n,s),{documents:r,ls:i}}))}class ad{constructor(){this.activeTargetIds=iK}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class af{constructor(){this.eo=new ad,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new ad,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(r9("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(r9("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am=null;function ay(){return null===am?am=268435456+Math.round(2147483648*Math.random()):am++,"0x"+am.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aw="WebChannelConnection";class ab extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${r}/databases/${n}`,this.po="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get yo(){return!1}wo(e,t,r,n,i){let s=ay(),a=this.So(e,t);r9("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(o,n,i),this.Do(e,a,o,r).then(t=>(r9("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw r5("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Co(e,t,r,n,i,s){return this.wo(e,t,r,n,i)}bo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+r1}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}So(e,t){let r=av[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,n){let i=ay();return new Promise((s,a)=>{let o=new rX;o.setWithCredentials(!0),o.listenOnce(rK.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case rH.NO_ERROR:let t=o.getResponseJson();r9(aw,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case rH.TIMEOUT:r9(aw,`RPC '${e}' ${i} timed out`),a(new ne(r8.DEADLINE_EXCEEDED,"Request time out"));break;case rH.HTTP_ERROR:let r=o.getStatus();if(r9(aw,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(r8).indexOf(t)>=0?t:r8.UNKNOWN}(t.status);a(new ne(e,t.message))}else a(new ne(r8.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ne(r8.UNAVAILABLE,"Connection failed."));break;default:r7()}}finally{r9(aw,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);r9(aw,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}vo(e,t,r){let n=ay(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rz(),a=r$(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new rW({})),this.bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=i.join("");r9(aw,`Creating RPC '${e}' stream ${n}: ${h}`,l);let c=s.createWebChannel(h,l),d=!1,f=!1,p=new a_({co:t=>{f?r9(aw,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(r9(aw,`Opening RPC '${e}' stream ${n} transport.`),c.open(),d=!0),r9(aw,`RPC '${e}' stream ${n} sending:`,t),c.send(t))},lo:()=>c.close()}),g=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(c,rQ.EventType.OPEN,()=>{f||r9(aw,`RPC '${e}' stream ${n} transport opened.`)}),g(c,rQ.EventType.CLOSE,()=>{f||(f=!0,r9(aw,`RPC '${e}' stream ${n} transport closed`),p.Ro())}),g(c,rQ.EventType.ERROR,t=>{f||(f=!0,r5(aw,`RPC '${e}' stream ${n} transport errored:`,t),p.Ro(new ne(r8.UNAVAILABLE,"The operation could not be completed")))}),g(c,rQ.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||r7();let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){r9(aw,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=o[e];if(void 0!==t)return sf(t)}(t),i=s.message;void 0===r&&(r=r8.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Ro(new ne(r,i)),c.close()}else r9(aw,`RPC '${e}' stream ${n} received:`,i),p.Vo(i)}}),g(a,Event.STAT_EVENT,t=>{t.stat===rG.PROXY?r9(aw,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===rG.NOPROXY&&r9(aw,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function aE(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(e){return new sO(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,r=1e3,n=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=n,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-r);n>0&&r9("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t,r,n,i,s,a,o){this.si=e,this.Ko=r,this.$o=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new aI(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===r8.RESOURCE_EXHAUSTED?(r6(t.toString()),r6("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===r8.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;let e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Uo===t&&this.s_(e,r)},t=>{e(()=>{let e=new ne(r8.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){let r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{r(()=>this.o_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return r9("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(r9("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aC extends aS{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:r7(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||r7(),nF.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||r7(),nF.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?r8.UNKNOWN:sf(e.code);return new ne(t,e.message||"")}(l);r=new sT(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=sV(e,n.document.name),s=sL(n.document.updateTime),a=n.document.createTime?sL(n.document.createTime):np.min(),o=new n8({mapValue:{fields:n.document.fields}}),l=ie.newFoundDocument(i,s,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];r=new sb(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=sV(e,n.document),s=n.readTime?sL(n.readTime):np.min(),a=ie.newNoDocument(i,s),o=n.removedTargetIds||[];r=new sb([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=sV(e,n.document),s=n.removedTargetIds||[];r=new sb([],s,i,null)}else{if(!("filter"in t))return r7();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new sd(n,i),a=e.targetId;r=new sE(a,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return np.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?np.min():t.readTime?sL(t.readTime):np.min()}(e);return this.listener.a_(t,r)}u_(e){let t={};t.database=sB(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=iI(n)?{documents:{documents:[sj(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=sj(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=sj(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof io?function(e){if("=="===e.op){if(n6(e.value))return{unaryFilter:{field:s$(e.field),op:"IS_NAN"}};if(n9(e.value))return{unaryFilter:{field:s$(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(n6(e.value))return{unaryFilter:{field:s$(e.field),op:"IS_NOT_NAN"}};if(n9(e.value))return{unaryFilter:{field:s$(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:s$(e.field),op:sR[e.op],value:e.value}}}(t):t instanceof il?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:sN[t.op],filters:r}}}(t):r7()}(il.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:s$(e.field),direction:sA[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=sD(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=sx(e,t.resumeToken);let n=sD(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(np.min())>0){r.readTime=sP(e,t.snapshotVersion.toTimestamp());let n=sD(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return r7()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){let t={};t.database=sB(this.serializer),t.removeTarget=e,this.e_(t)}}class ak extends aS{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||r7(),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||r7(),t.map(e=>{let t;return(t=e.updateTime?sL(e.updateTime):sL(r)).isEqual(np.min())&&(t=sL(r)),new i6(t,e.transformResults||[])})):[]),i=sL(e.commitTime);return this.listener.I_(i,n)}return e.writeResults&&0!==e.writeResults.length&&r7(),this.l_=!0,this.listener.T_()}E_(){let e={};e.database=sB(this.serializer),this.e_(e)}P_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof sr)n={update:sz(e,t.key,t.value)};else if(t instanceof so)n={delete:sF(e,t.key)};else if(t instanceof sn)n={update:sz(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof sl))return r7();n={verify:sF(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof iJ)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof iY)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof i0)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof i2)return{fieldPath:t.field.canonicalString(),increment:r.Ie};throw r7()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:sP(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:r7()),n})(this.serializer,e))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.d_=!1}A_(){if(this.d_)throw new ne(r8.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.wo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ne(r8.UNKNOWN,e.toString())})}Co(e,t,r,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===r8.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ne(r8.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}class aR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(r6(t),this.f_=!1):r9("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(e=>{r.enqueueAndForget(async()=>{aV(this)&&(r9("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.C_.add(4),await aD(e),e.M_.set("Unknown"),e.C_.delete(4),await aO(e)}(this))})}),this.M_=new aR(r,n)}}async function aO(e){if(aV(e))for(let t of e.v_)await t(!0)}async function aD(e){for(let t of e.v_)await t(!1)}function aP(e,t){e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),aF(e)?aU(e):a0(e).Ho()&&aL(e,t))}function ax(e,t){let r=a0(e);e.D_.delete(t),r.Ho()&&aM(e,t),0===e.D_.size&&(r.Ho()?r.Zo():aV(e)&&e.M_.set("Unknown"))}function aL(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(np.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}a0(e).u_(t)}function aM(e,t){e.x_.Oe(t),a0(e).c_(t)}function aU(e){e.x_=new sS({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),a0(e).start(),e.M_.g_()}function aF(e){return aV(e)&&!a0(e).jo()&&e.D_.size>0}function aV(e){return 0===e.C_.size}async function aj(e){e.D_.forEach((t,r)=>{aL(e,t)})}async function aB(e,t){e.x_=void 0,aF(e)?(e.M_.w_(t),aU(e)):e.M_.set("Unknown")}async function aq(e,t,r){if(e.M_.set("Online"),t instanceof sT&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.D_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.D_.delete(n),e.x_.removeTarget(n))}(e,t)}catch(r){r9("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await az(e,r)}else if(t instanceof sb?e.x_.$e(t):t instanceof sE?e.x_.Je(t):e.x_.Ge(t),!r.isEqual(np.min()))try{let t=await au(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.x_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.D_.get(n);i&&e.D_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.D_.get(t);if(!n)return;e.D_.set(t,n.withResumeToken(nF.EMPTY_BYTE_STRING,n.snapshotVersion)),aM(e,t);let i=new sG(n.target,t,r,n.sequenceNumber);aL(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){r9("RemoteStore","Failed to raise snapshot:",t),await az(e,t)}}async function az(e,t,r){if(!nS(t))throw t;e.C_.add(1),await aD(e),e.M_.set("Offline"),r||(r=()=>au(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{r9("RemoteStore","Retrying IndexedDB access"),await r(),e.C_.delete(1),await aO(e)})}function a$(e,t){return t().catch(r=>az(e,r,t))}async function aH(e){let t=a1(e),r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;aV(e)&&e.b_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.b_.length&&t.Zo();break}r=n.batchId,function(e,t){e.b_.push(t);let r=a1(e);r.Ho()&&r.h_&&r.P_(t.mutations)}(e,n)}catch(t){await az(e,t)}aK(e)&&aG(e)}function aK(e){return aV(e)&&!a1(e).jo()&&e.b_.length>0}function aG(e){a1(e).start()}async function aW(e){a1(e).E_()}async function aQ(e){let t=a1(e);for(let r of e.b_)t.P_(r.mutations)}async function aX(e,t,r){let n=e.b_.shift(),i=sh.from(n,t,r);await a$(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await aH(e)}async function aJ(e,t){t&&a1(e).h_&&await async function(e,t){var r;if(function(e){switch(e){default:return r7();case r8.CANCELLED:case r8.UNKNOWN:case r8.DEADLINE_EXCEEDED:case r8.RESOURCE_EXHAUSTED:case r8.INTERNAL:case r8.UNAVAILABLE:case r8.UNAUTHENTICATED:return!1;case r8.INVALID_ARGUMENT:case r8.NOT_FOUND:case r8.ALREADY_EXISTS:case r8.PERMISSION_DENIED:case r8.FAILED_PRECONDITION:case r8.ABORTED:case r8.OUT_OF_RANGE:case r8.UNIMPLEMENTED:case r8.DATA_LOSS:return!0}}(r=t.code)&&r!==r8.ABORTED){let r=e.b_.shift();a1(e).Yo(),await a$(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await aH(e)}}(e,t),aK(e)&&aG(e)}async function aY(e,t){e.asyncQueue.verifyOperationInProgress(),r9("RemoteStore","RemoteStore received new credentials");let r=aV(e);e.C_.add(3),await aD(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await aO(e)}async function aZ(e,t){t?(e.C_.delete(2),await aO(e)):t||(e.C_.add(2),await aD(e),e.M_.set("Unknown"))}function a0(e){var t,r,n;return e.O_||(e.O_=(t=e.datastore,r=e.asyncQueue,n={ho:aj.bind(null,e),Io:aB.bind(null,e),a_:aq.bind(null,e)},t.A_(),new aC(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.v_.push(async t=>{t?(e.O_.Yo(),aF(e)?aU(e):e.M_.set("Unknown")):(await e.O_.stop(),e.x_=void 0)})),e.O_}function a1(e){var t,r,n;return e.N_||(e.N_=(t=e.datastore,r=e.asyncQueue,n={ho:aW.bind(null,e),Io:aJ.bind(null,e),T_:aQ.bind(null,e),I_:aX.bind(null,e)},t.A_(),new ak(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.v_.push(async t=>{t?(e.N_.Yo(),await aH(e)):(await e.N_.stop(),e.b_.length>0&&(r9("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new a2(e,t,s,n,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ne(r8.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a4(e,t){if(r6("AsyncQueue",`${t}: ${e}`),nS(e))return new ne(r8.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e){this.comparator=e?(t,r)=>e(t,r)||n_.comparator(t.key,r.key):(e,t)=>n_.comparator(e.key,t.key),this.keyedMap=ij(),this.sortedSet=new nO(this.comparator)}static emptySet(e){return new a9(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof a9)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new a9;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a6{constructor(){this.B_=new nO(n_.comparator)}track(e){let t=e.doc.key,r=this.B_.get(t);r?0!==e.type&&3===r.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==r.type?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.B_=this.B_.remove(t):1===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):r7():this.B_=this.B_.insert(t,e)}L_(){let e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class a5{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a5(e,t,a9.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iD(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(){this.k_=void 0,this.listeners=[]}}class a7{constructor(){this.queries=new iU(e=>iP(e),iD),this.onlineState="Unknown",this.q_=new Set}}async function a8(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new a3),n)try{i.k_=await e.onListen(r)}catch(r){let e=a4(r,`Initialization of query '${ix(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&on(e)}async function oe(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function ot(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.K_(n)&&(r=!0);i.k_=n}}r&&on(e)}function or(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function on(e){e.q_.forEach(e=>{e.next()})}class oi{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new a5(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){return!e.fromCache||(!this.options.J_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;let t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=a5.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.key=e}}class oa{constructor(e){this.key=e}}class oo{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=iH(),this.mutatedKeys=iH(),this._a=iM(e),this.aa=new a9(this._a)}get ua(){return this.ia}ca(e,t){let r=t?t.la:new a6,n=t?t.aa:this.aa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=iL(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.ha(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this._a(h,o)>0||l&&0>this._a(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{aa:s,la:r,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;let i=e.la.L_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return r7()}};return r(e)-r(t)})(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(r);let s=t?this.Ia():[],a=0===this.oa.size&&this.current?1:0,o=a!==this.sa;return(this.sa=a,0!==i.length||o)?{snapshot:new a5(this.query,e.aa,n,i,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new a6,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){if(!this.current)return[];let e=this.oa;this.oa=iH(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});let t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new oa(e))}),this.oa.forEach(r=>{e.has(r)||t.push(new os(r))}),t}da(e){this.ia=e.ls,this.oa=iH();let t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return a5.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class ol{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ou{constructor(e){this.key=e,this.Ra=!1}}class oh{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new iU(e=>iP(e),iD),this.fa=new Map,this.ga=new Set,this.pa=new nO(n_.comparator),this.ya=new Map,this.wa=new s6,this.Sa={},this.ba=new Map,this.Da=sZ.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function oc(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oy.bind(null,e),e.Va.a_=ot.bind(null,e.eventManager),e.Va.Fa=or.bind(null,e.eventManager),e),o=a.ma.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Aa();else{let e=await (r=a.localStore,n=iR(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.qr.getTargetData(e,n).next(i=>i?(t=i,nI.resolve(t)):r.qr.allocateTargetId(e).next(i=>(t=new sG(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.ts=r.ts.insert(e.targetId,e),r.ns.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await od(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&aP(a.remoteStore,e)}return s}async function od(e,t,r,n,i){e.va=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ca(r);i.Zi&&(i=await ac(e.localStore,t.query,!1).then(({documents:e})=>t.view.ca(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return oI(e,t.targetId,a.Ta),a.snapshot})(e,t,r,n);let s=await ac(e.localStore,t,!0),a=new oo(t,s.ls),o=a.ca(s.documents),l=sw.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oI(e,r,u.Ta);let h=new ol(t,r,a);return e.ma.set(t,h),e.fa.has(r)?e.fa.get(r).push(t):e.fa.set(r,[t]),u.snapshot}async function of(e,t){let r=e.ma.get(t),n=e.fa.get(r.targetId);if(n.length>1)return e.fa.set(r.targetId,n.filter(e=>!iD(e,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ah(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),ax(e.remoteStore,r.targetId),oE(e,r.targetId)}).catch(nT)):(oE(e,r.targetId),await ah(e.localStore,r.targetId,!0))}async function op(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=ov.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=o_.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=nf.now(),s=t.reduce((e,t)=>e.add(t.key),iH());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=iF,l=iH();return e.ss.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=iX(n.transform,e||null);null!=i&&(null===r&&(r=n8.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new sn(e.key,t,function e(t){let r=[];return nR(t.fields,(t,n)=>{let i=new nv([t]);if(n5(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new nM(r)}(t.value.mapValue),i5.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:iB(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Sa[i.currentUser.toKey()])||(e=new nO(nc)),e=e.insert(n,r),i.Sa[i.currentUser.toKey()]=e,await oC(i,s.changes),await aH(i.remoteStore)}catch(t){let e=a4(t,"Failed to persist write");r.reject(e)}}async function og(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ss.newChangeBuffer({trackRemovals:!0});n=e.ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(nF.EMPTY_BYTE_STRING,np.min()).withLastLimboFreeSnapshotVersion(np.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.qr.updateTargetData(i,h))});let h=iF,c=iH();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=iH(),o=iH(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=iF;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(np.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):r9("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{us:t,cs:o}})).next(e=>{h=e.us,c=e.cs})),!r.isEqual(np.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return nI.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.ya.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||r7(),t.addedDocuments.size>0?n.Ra=!0:t.modifiedDocuments.size>0?n.Ra||r7():t.removedDocuments.size>0&&(n.Ra||r7(),n.Ra=!1))}),await oC(e,r,t)}catch(e){await nT(e)}}function om(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ma.forEach((e,r)=>{let n=r.view.Q_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.Q_(t)&&(r=!0)}),r&&on(n),i.length&&e.Va.a_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oy(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.ya.get(t),i=n&&n.key;if(i){let r=new nO(n_.comparator);r=r.insert(i,ie.newNoDocument(i,np.min()));let n=iH().add(i),s=new s_(np.min(),new Map,new nO(nc),r,n);await og(e,s),e.pa=e.pa.remove(i),e.ya.delete(t),oS(e)}else await ah(e.localStore,t,!1).then(()=>oE(e,t,r)).catch(nT)}async function ov(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ss.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=nI.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||r7(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=iH();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});ob(e,n,null),ow(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await oC(e,i)}catch(e){await nT(e)}}async function o_(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||r7(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});ob(e,t,r),ow(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await oC(e,i)}catch(e){await nT(e)}}function ow(e,t){(e.ba.get(t)||[]).forEach(e=>{e.resolve()}),e.ba.delete(t)}function ob(e,t,r){let n=e.Sa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Sa[e.currentUser.toKey()]=n}}function oE(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.fa.get(t)))e.ma.delete(n),r&&e.Va.Fa(n,r);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||oT(e,t)})}function oT(e,t){e.ga.delete(t.path.canonicalString());let r=e.pa.get(t);null!==r&&(ax(e.remoteStore,r),e.pa=e.pa.remove(t),e.ya.delete(r),oS(e))}function oI(e,t,r){for(let n of r)n instanceof os?(e.wa.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.pa.get(r)||e.ga.has(n)||(r9("SyncEngine","New document in limbo: "+r),e.ga.add(n),oS(e))}(e,n)):n instanceof oa?(r9("SyncEngine","Document no longer in limbo: "+n.key),e.wa.removeReference(n.key,t),e.wa.containsKey(n.key)||oT(e,n.key)):r7()}function oS(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){let t=e.ga.values().next().value;e.ga.delete(t);let r=new n_(nm.fromString(t)),n=e.Da.next();e.ya.set(n,new ou(r)),e.pa=e.pa.insert(r,n),aP(e.remoteStore,new sG(iR(new iS(r.path)),n,"TargetPurposeLimboResolution",nC._e))}}async function oC(e,t,r){let n=[],i=[],s=[];e.ma.isEmpty()||(e.ma.forEach((a,o)=>{s.push(e.va(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=ai.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Va.a_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>nI.forEach(t,t=>nI.forEach(t.ki,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>nI.forEach(t.qi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!nS(e))throw e;r9("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function ok(e,t){if(!e.currentUser.isEqual(t)){r9("SyncEngine","User change. New user:",t.toKey());let r=await al(e.localStore,t);e.currentUser=t,e.ba.forEach(e=>{e.forEach(e=>{e.reject(new ne(r8.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ba.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await oC(e,r._s)}}function oA(e,t){let r=e.ya.get(t);if(r&&r.Ra)return iH().add(r.key);{let r=iH(),n=e.fa.get(t);if(!n)return r;for(let t of n){let n=e.ma.get(t);r=r.unionWith(n.view.ua)}return r}}class oR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=aT(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new ao(t,new aa,e.initialUser,this.serializer)}createPersistence(e){return new at(an.jr,this.serializer)}createSharedClientState(e){return new af}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oN{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>om(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ok.bind(null,this.syncEngine),await aZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new a7}createDatastore(e){let t=aT(e.databaseInfo.databaseId),r=new ab(e.databaseInfo);return new aA(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new aN(t,this.datastore,e.asyncQueue,e=>om(this.syncEngine,e,0),ag.D()?new ag:new ap)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new oh(e,t,r,n,i,s);return a&&(o.Ca=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){r9("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await aD(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):r6("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=r0.UNAUTHENTICATED,this.clientId=nh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{r9("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(r9("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(r8.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=a4(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function oP(e,t){e.asyncQueue.verifyOperationInProgress(),r9("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await al(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ox(e,t){e.asyncQueue.verifyOperationInProgress();let r=await oL(e);r9("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>aY(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>aY(t.remoteStore,r)),e._onlineComponents=t}async function oL(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){r9("FirestoreClient","Using user provided OfflineComponentProvider");try{await oP(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===r8.FAILED_PRECONDITION||t.code===r8.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;r5("Error using user provided cache. Falling back to memory cache: "+t),await oP(e,new oR)}}else r9("FirestoreClient","Using default OfflineComponentProvider"),await oP(e,new oR)}return e._offlineComponents}async function oM(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(r9("FirestoreClient","Using user provided OnlineComponentProvider"),await ox(e,e._uninitializedComponentsProvider._online)):(r9("FirestoreClient","Using default OnlineComponentProvider"),await ox(e,new oN))),e._onlineComponents}async function oU(e){let t=await oM(e),r=t.eventManager;return r.onListen=oc.bind(null,t.syncEngine),r.onUnlisten=of.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oV=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oj(e,t,r){if(!r)throw new ne(r8.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oB(e){if(!n_.isDocumentKey(e))throw new ne(r8.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oq(e){if(n_.isDocumentKey(e))throw new ne(r8.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oz(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":r7()}function o$(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ne(r8.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=oz(e);throw new ne(r8.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oH{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new ne(r8.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ne(r8.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new ne(r8.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oF(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ne(r8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ne(r8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ne(r8.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oK{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oH({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(r8.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ne(r8.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oH(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new nn;switch(e.type){case"firstParty":return new no(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ne(r8.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oV.get(e);t&&(r9("ComponentProvider","Removing Datastore"),oV.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oG(this.firestore,e,this._query)}}class oW{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oQ(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oW(this.firestore,e,this._key)}}class oQ extends oG{constructor(e,t,r){super(e,t,new iS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oW(this.firestore,null,new n_(e))}withConverter(e){return new oQ(this.firestore,e,this._path)}}function oX(e,t,...r){if(e=(0,f.m9)(e),oj("collection","path",t),e instanceof oK){let n=nm.fromString(t,...r);return oq(n),new oQ(e,null,n)}{if(!(e instanceof oW||e instanceof oQ))throw new ne(r8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(nm.fromString(t,...r));return oq(n),new oQ(e.firestore,null,n)}}function oJ(e,t,...r){if(e=(0,f.m9)(e),1==arguments.length&&(t=nh.newId()),oj("doc","path",t),e instanceof oK){let n=nm.fromString(t,...r);return oB(n),new oW(e,null,new n_(n))}{if(!(e instanceof oW||e instanceof oQ))throw new ne(r8.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(nm.fromString(t,...r));return oB(n),new oW(e.firestore,e instanceof oQ?e.converter:null,new n_(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new aI(this,"async_queue_retry"),this.iu=()=>{let e=aE();e&&r9("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=aE();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=aE();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new nt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!nS(e))throw e;r9("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;this.eu=e,this.tu=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw r6("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);let n=a2.createAndSchedule(this,e,t,r,e=>this.au(e));return this.Xa.push(n),n}su(){this.eu&&r7()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function oZ(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class o0 extends oK{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new oY,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||o4(this),this._firestoreClient.terminate()}}function o1(e,t){let r="object"==typeof e?e:(0,h.Mq)(),n=(0,h.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=o$(e,oK))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&r5("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=r0.MOCK_USER;else{t=(0,f.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new ne(r8.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new r0(s)}e._authCredentials=new ni(new nr(t,r))}}(n,...e)}return n}function o2(e){return e._firestoreClient||o4(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function o4(e){var t,r,n,i;let s=e._freezeSettings(),a=(i=e._databaseId,new nK(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oF(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new oD(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e){this._byteString=e}static fromBase64String(e){try{return new o9(nF.fromBase64String(e))}catch(e){throw new ne(r8.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new o9(nF.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o6{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ne(r8.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nv(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(r8.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(r8.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return nc(this._lat,e._lat)||nc(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o7=/^__.*__$/;class o8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new sr(e,this.data,t,this.fieldTransforms)}}function le(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw r7()}}class lt{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new lt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Tu({path:r,du:!1});return n.Au(e),n}Ru(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Tu({path:r,du:!1});return n.Pu(),n}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return lc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(le(this.Iu)&&o7.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class lr{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||aT(e)}pu(e,t,r,n=!1){return new lt({Iu:e,methodName:t,gu:r,path:nv.emptyPath(),du:!1,fu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ln(e){let t=e._freezeSettings(),r=aT(e._databaseId);return new lr(e._databaseId,!!t.ignoreUndefinedProperties,r)}function li(e,t,r,n,i,s={}){let a,o;let l=e.pu(s.merge||s.mergeFields?2:0,t,r,i);ll("Data must be an object, but it was:",l,n);let u=la(n,l);if(s.merge)a=new nM(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=function(e,t,r){if((t=(0,f.m9)(t))instanceof o6)return t._internalPath;if("string"==typeof t)return lh(e,t);throw lc("Field path arguments must be of type string or ",e,!1,void 0,r)}(t,n,r);if(!l.contains(i))throw new ne(r8.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,i)||e.push(i)}a=new nM(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new o8(new n8(u),a,o)}function ls(e,t){if(lo(e=(0,f.m9)(e)))return ll("Unsupported field value:",t,e),la(e,t);if(e instanceof o5)return function(e,t){if(!le(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=ls(i,t.Vu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!nk(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?iW(n):iG(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=nf.fromDate(e);return{timestampValue:sP(t.serializer,r)}}if(e instanceof nf){let r=new nf(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sP(t.serializer,r)}}if(e instanceof o3)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof o9)return{bytesValue:sx(t.serializer,e._byteString)};if(e instanceof oW){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.mu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:sM(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${oz(e)}`)}(e,t)}function la(e,t){let r={};return nN(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nR(e,(e,n)=>{let i=ls(n,t.Eu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function lo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof nf||e instanceof o3||e instanceof o9||e instanceof oW||e instanceof o5)}function ll(e,t,r){if(!lo(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=oz(r);throw"an object"===n?t.mu(e+" a custom object"):t.mu(e+" "+n)}}let lu=RegExp("[~\\*/\\[\\]]");function lh(e,t,r){if(t.search(lu)>=0)throw lc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new o6(...t.split("."))._internalPath}catch(n){throw lc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function lc(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new ne(r8.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oW(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new lf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(lp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class lf extends ld{data(){return super.data()}}function lp(e,t){return"string"==typeof t?lh(e,t):t instanceof o6?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ne(r8.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lm{}class ly extends lm{}function lv(e,t,...r){let n=[];for(let i of(t instanceof lm&&n.push(t),function(e){let t=e.filter(e=>e instanceof lb).length,r=e.filter(e=>e instanceof l_).length;if(t>1||t>0&&r>0)throw new ne(r8.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class l_ extends ly{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new l_(e,t,r)}_apply(e){let t=this._parse(e);return lI(e._query,t),new oG(e.firestore,e.converter,iN(e._query,t))}_parse(e){let t=ln(e.firestore),r=function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ne(r8.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){lT(a,s);let t=[];for(let r of a)t.push(lE(n,e,r));o={arrayValue:{values:t}}}else o=lE(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||lT(a,s),o=function(e,t,r,n=!1){return ls(r,e.pu(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return io.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function lw(e,t,r){let n=lp("where",e);return l_._create(n,t,r)}class lb extends lm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lb(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:il.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)lI(r,e),r=iN(r,e)}(e._query,t),new oG(e.firestore,e.converter,iN(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function lE(e,t,r){if("string"==typeof(r=(0,f.m9)(r))){if(""===r)throw new ne(r8.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ik(t)&&-1!==r.indexOf("/"))throw new ne(r8.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(nm.fromString(r));if(!n_.isDocumentKey(n))throw new ne(r8.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return n1(e,new n_(n))}if(r instanceof oW)return n1(e,r._key);throw new ne(r8.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oz(r)}.`)}function lT(e,t){if(!Array.isArray(e)||0===e.length)throw new ne(r8.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lI(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new ne(r8.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ne(r8.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class lS{convertValue(e,t="none"){switch(nQ(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nB(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nq(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw r7()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return nR(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new o3(nB(e.latitude),nB(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=n$(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(nH(e));default:return null}}convertTimestamp(e){let t=nj(e);return new nf(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=nm.fromString(e);sK(r)||r7();let n=new nG(r.get(1),r.get(3)),i=new n_(r.popFirst(5));return n.isEqual(t)||r6(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lA extends ld{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new lR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(lp("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lR extends lA{data(e={}){return super.data(e)}}class lN{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new lk(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new lR(this._firestore,this._userDataWriter,r.key,r,new lk(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(r8.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new lR(e._firestore,e._userDataWriter,r.doc.key,r.doc,new lk(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new lR(e._firestore,e._userDataWriter,t.doc.key,t.doc,new lk(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return r7()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class lO extends lS{constructor(e){super(),this.firestore=e}convertBytes(e){return new o9(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oW(this.firestore,null,t)}}function lD(e){e=o$(e,oG);let t=o$(e.firestore,o0),r=o2(t),n=new lO(t);return lg(e._query),(function(e,t,r={}){let n=new nt;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new oO({next:r=>{t.enqueueAndForget(()=>oe(e,a)),r.fromCache&&"server"===n.source?i.reject(new ne(r8.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new oi(r,s,{includeMetadataChanges:!0,J_:!0});return a8(e,a)})(await oU(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new lN(t,n,e,r))}function lP(e,t,r){e=o$(e,oW);let n=o$(e.firestore,o0),i=lC(e.converter,t,r);return lU(n,[li(ln(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,i5.none())])}function lx(e){return lU(o$(e.firestore,o0),[new so(e._key,i5.none())])}function lL(e,t){let r=o$(e.firestore,o0),n=oJ(e),i=lC(e.converter,t);return lU(r,[li(ln(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,i5.exists(!1))]).then(()=>n)}function lM(e,...t){var r,n,i;let s,a,o;e=(0,f.m9)(e);let l={includeMetadataChanges:!1},u=0;"object"!=typeof t[0]||oZ(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges};if(oZ(t[u])){let e=t[u];t[u]=null===(r=e.next)||void 0===r?void 0:r.bind(e),t[u+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof oW)a=o$(e.firestore,o0),o=new iS(e._key.path),s={next:r=>{t[u]&&t[u](function(e,t,r){let n=r.docs.get(t._key),i=new lO(e);return new lA(e,i,t._key,n,new lk(r.hasPendingWrites,r.fromCache),t.converter)}(a,e,r))},error:t[u+1],complete:t[u+2]};else{let r=o$(e,oG);a=o$(r.firestore,o0),o=r._query;let n=new lO(a);s={next:e=>{t[u]&&t[u](new lN(a,n,r,e))},error:t[u+1],complete:t[u+2]},lg(e._query)}return function(e,t,r,n){let i=new oO(n),s=new oi(t,i,r);return e.asyncQueue.enqueueAndForget(async()=>a8(await oU(e),s)),()=>{i.Na(),e.asyncQueue.enqueueAndForget(async()=>oe(await oU(e),s))}}(o2(a),o,h,s)}function lU(e,t){return function(e,t){let r=new nt;return e.asyncQueue.enqueueAndForget(async()=>op(await oM(e).then(e=>e.syncEngine),t,r)),r.promise}(o2(e),t)}new WeakMap,function(e=!0){r1=h.Jn,(0,h.Xd)(new c.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new o0(new ns(t.getProvider("auth-internal")),new nu(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ne(r8.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nG(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(rZ,"4.3.2",void 0),(0,h.KN)(rZ,"4.3.2","esm2017")}()},6650:function(e,t,r){"use strict";r.d(t,{Jt:function(){return em},cF:function(){return ev},iH:function(){return ey},B0:function(){return eg}});var n,i,s,a,o=r(5816),l=r(4444),u=r(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h="firebasestorage.googleapis.com",c="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends l.ZR{constructor(e,t,r=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){return new d(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(){return new d(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new d(s.CANCELED,"User canceled the upload/download.")}function y(){return new d(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function v(e){return new d(s.INVALID_ARGUMENT,e)}function _(){return new d(s.APP_DELETED,"The Firebase app was deleted.")}function w(e,t){return new d(s.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function b(e){throw new d(s.INTERNAL_ERROR,"Internal error: "+e)}(n=s||(s={})).UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Location{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Location.makeFromUrl(e,t)}catch(t){return new Location(e,"")}if(""===r.path)return r;throw new d(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}let o=t.replace(/[.]/g,"\\."),l=RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),u=RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:l,indices:{bucket:1,path:3},postModify:a},{regex:u,indices:{bucket:1,path:2},postModify:a}];for(let t=0;t<c.length;t++){let n=c[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new Location(e,t),n.postModify(r);break}}if(null==r)throw new d(s.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function T(e){return"string"==typeof e||e instanceof String}function I(e){return S()&&e instanceof Blob}function S(){return"undefined"!=typeof Blob&&!(0,l.UG)()}function C(e,t,r,n){if(n<t)throw v(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw v(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function A(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i=a||(a={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t,r,n,i,s,a,o,l,u,h,c=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=p();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else if(t.canceled){let e=this.appDelete_?_():m();n(e)}else{let e=g();n(e)}};this.canceled_?e(!1,new O(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){let n=1,i=null,s=null,a=!1,o=0,l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(d,2===o)},t)}function c(){s&&clearTimeout(s)}function d(e,...t){let r;if(l){c();return}if(e){c(),u.call(null,e,...t);return}let i=2===o||a;if(i){c(),u.call(null,e,...t);return}n<64&&(n*=2),1===o?(o=2,r=0):r=(n+Math.random())*1e3,h(r)}let f=!1;function p(e){!f&&(f=!0,c(),!l&&(null!==i?(e||(o=2),clearTimeout(i),h(0)):e||(o=1)))}return h(0),s=setTimeout(()=>{a=!0,p(!0)},r),p}((e,t)=>{if(t){e(!1,new O(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===a.NO_ERROR,i=r.getStatus();if(!t||R(i,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===a.ABORT;e(!1,new O(!1,null,t));return}let s=-1!==this.successCodes_.indexOf(i);e(!0,new O(s,r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class O{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function D(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(S())return new Blob(e);throw new d(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class x{constructor(e,t){this.data=e,this.contentType=t||null}}function L(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let i=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(i){let i=n,s=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&s,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function M(e,t){let r;switch(e){case P.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw w(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case P.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw w(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("undefined"==typeof atob)throw new d(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw w(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class U{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw w(P.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){let r=0,n="";I(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(I(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new F(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new F(r,!0)}}static getBlob(...e){if(S()){let t=e.map(e=>e instanceof F?e.data_:e);return new F(D.apply(null,t))}{let t=e.map(e=>T(e)?function(e,t){switch(e){case P.RAW:return new x(L(t));case P.BASE64:case P.BASE64URL:return new x(M(e,t));case P.DATA_URL:return new x(function(e){let t=new U(e);return t.base64?M(P.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw w(P.DATA_URL,"Malformed data URL.")}return L(t)}(t.rest)}(t),function(e){let t=new U(e);return t.contentType}(t))}throw p()}(P.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[i++]=e[t]}),new F(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function j(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){return t}class q{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||B}}let z=null;function $(){if(z)return z;let e=[];e.push(new q("bucket")),e.push(new q("generation")),e.push(new q("metageneration")),e.push(new q("name","fullPath",!0));let t=new q("name");t.xform=function(e,t){return!T(t)||t.length<2?t:j(t)},e.push(t);let r=new q("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new q("timeCreated")),e.push(new q("updated")),e.push(new q("md5Hash",null,!0)),e.push(new q("cacheControl",null,!0)),e.push(new q("contentDisposition",null,!0)),e.push(new q("contentEncoding",null,!0)),e.push(new q("contentLanguage",null,!0)),e.push(new q("contentType",null,!0)),e.push(new q("metadata","customMetadata",!0)),z=e}function H(e,t,r){let n=V(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,i=new Location(t,r);return e._makeStorageReference(i)}}),n}(e,n,r)}function K(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let n=t[i];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}class G{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(!e)throw p()}function Q(e,t){return function(r,n){let i=H(e,n,t);return W(null!==i),i}}function X(e){return function(t,r){var n,i;let a;return 401===t.getStatus()?a=t.getErrorText().includes("Firebase App Check token is invalid")?new d(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new d(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,a=new d(s.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,a=new d(s.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):a=r,a.status=t.getStatus(),a.serverResponse=r.serverResponse,a}}function J(e){let t=X(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var a;a=e.path,i=new d(s.OBJECT_NOT_FOUND,"Object '"+a+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}function Y(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}class Z{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function ee(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){W(!1)}return W(!!r&&-1!==(t||["active"]).indexOf(r)),r}let et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function er(e){switch(e){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;default:return et.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class es{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=a.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=a.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=a.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw b("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw b("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw b("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw b("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw b("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ea extends es{initXhr(){this.xhr_.responseType="text"}}function eo(){return new ea}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=$(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(s.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(R(e.status,[])){if(t)e=g();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(s.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),a=Y(t,n,i),o={name:a.fullPath},l=k(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=K(a,r),c=e.maxUploadRetryTime,d=new G(l,"POST",function(e){let t;ee(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){W(!1)}return W(T(t)),t},c);return d.urlParams=o,d.headers=u,d.body=h,d.errorHandler=X(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let i=e.maxUploadRetryTime,s=new G(r,"POST",function(e){let t=ee(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){W(!1)}r||W(!1);let i=Number(r);return W(!isNaN(i)),new Z(i,n.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=X(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(n,eo,t,r);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new Z(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,i)=>{let a;try{a=function(e,t,r,n,i,a,o,l){let u=new Z(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new d(s.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let h=u.total-u.current,c=h;i>0&&(c=Math.min(c,i));let f=u.current,p=f+c,g="";g=0===c?"finalize":h===c?"upload, finalize":"upload";let m={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${u.current}`},v=n.slice(f,p);if(null===v)throw y();let _=t.maxUploadRetryTime,w=new G(r,"POST",function(e,r){let i;let s=ee(e,["active","final"]),o=u.current+c,l=n.size();return i="final"===s?Q(t,a)(e,r):null,new Z(o,l,"final"===s,i)},_);return w.headers=m,w.body=v.uploadData(),w.progressCallback=l||null,w.errorHandler=X(e),w}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let o=this._ref.storage._makeRequest(a,eo,n,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let n=t.fullServerUrl(),i=k(n,e.host,e._protocol),s=e.maxOperationRetryTime,a=new G(i,"GET",Q(e,r),s);return a.errorHandler=J(t),a}(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+o;let l=Y(t,n,i),u=K(l,r),h="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=F.getBlob(h,n,"\r\n--"+o+"--");if(null===c)throw y();let d={name:l.fullPath},f=k(s,e.host,e._protocol),p=e.maxUploadRetryTime,g=new G(f,"POST",Q(e,r),p);return g.urlParams=d,g.headers=a,g.body=c.uploadData(),g.errorHandler=X(t),g}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eo,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=m(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=er(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let i=new en(t||void 0,r||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(er(this._state)){case et.SUCCESS:ei(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:let t=this._reject;ei(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=er(this._state);switch(t){case et.RUNNING:case et.PAUSED:e.next&&ei(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&ei(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:default:e.error&&ei(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this._service=e,t instanceof Location?this._location=t:this._location=Location.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new eu(e,t)}get root(){let e=new Location(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new Location(this._location.bucket,e);return new eu(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new d(s.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function eh(e,t){let r=null==t?void 0:t[c];return null==r?null:Location.makeFromBucketSpec(r,e)}class ec{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=Location.makeFromBucketSpec(n,this._host):this._bucket=eh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,e):this._bucket=eh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eu(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new E(_());{let s=function(e,t,r,n,i,s,a=!0){let o=A(e.urlParams),l=e.url+o,u=Object.assign({},e.headers);return t&&(u["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(u.Authorization="Firebase "+r),u["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(u["X-Firebase-AppCheck"]=n),new N(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let ed="@firebase/storage",ef="0.11.2",ep="storage";function eg(e,t,r){var n;return(n=e=(0,l.m9)(e))._throwIfRoot("uploadBytesResumable"),new el(n,new F(t),r)}function em(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),i=k(n,e.host,e._protocol),s=e.maxOperationRetryTime,a=new G(i,"GET",function(t,n){let i=H(e,n,r);return W(null!==i),function(e,t,r,n){let i=V(t);if(null===i||!T(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent,o=s.split(","),l=o.map(t=>{let i=e.bucket,s=e.fullPath,o="/b/"+a(i)+"/o/"+a(s),l=k(o,r,n),u=A({alt:"media",token:t});return l+u});return l[0]}(i,n,e.host,e._protocol)},s);return a.errorHandler=J(t),a}(e.storage,e._location,$());return e.storage.makeRequestWithTokens(t,eo).then(e=>{if(null===e)throw new d(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})}(e=(0,l.m9)(e))}function ey(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof ec){if(null==t._bucket)throw new d(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?");let n=new eu(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new Location(e._location.bucket,r);return new eu(e.storage,n)}(t,r):t}(e,t);if(e instanceof ec)return new eu(e,t);throw v("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,l.m9)(e),t)}function ev(e=(0,o.Mq)(),t){e=(0,l.m9)(e);let r=(0,o.qX)(e,ep),n=r.getImmediate({identifier:t}),i=(0,l.P0)("storage");return i&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(n,...i),n}(0,o.Xd)(new u.wA(ep,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ec(r,n,i,t,o.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(ed,ef,""),(0,o.KN)(ed,ef,"esm2017")}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9974)}),_N_E=e.O()}]);