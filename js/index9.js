var t=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,i=(t,i)=>{for(var a in i||(i={}))r.call(i,a)&&o(t,a,i[a]);if(e)for(var a of e(i))n.call(i,a)&&o(t,a,i[a]);return t},a=(t,o)=>{var i={};for(var a in t)r.call(t,a)&&o.indexOf(a)<0&&(i[a]=t[a]);if(null!=t&&e)for(var a of e(t))o.indexOf(a)<0&&n.call(t,a)&&(i[a]=t[a]);return i};import{c as u,r as c,R as l,aV as s,aW as f,aX as d,j as h}from"./index.js";import{T as p}from"./Table.js";import"./index6.js";function v(t){return"[object Array]"===toString.call(t)}function y(t){if("[object Object]"!==toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function g(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),v(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function m(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r={};function n(t,e){y(r[e])&&y(t)?r[e]=m(r[e],t):y(t)?r[e]=m({},t):v(t)?r[e]=t.slice():r[e]=t}for(var o=0,i=t.length;o<i;o++)g(t[o],n);return r}var b={forEach:g,merge:m,isArray:v},x="Expected a function",w=NaN,O="[object Symbol]",j=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,E=/^0o[0-7]+$/i,R=parseInt,P="object"==typeof u&&u&&u.Object===Object&&u,D="object"==typeof self&&self&&self.Object===Object&&self,C=P||D||Function("return this")(),I,k=Object.prototype.toString,M=Math.max,N=Math.min,W=function(){return C.Date.now()};function F(t,e,r){var n,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError(x);function h(e){var r=n,i=o;return n=o=void 0,l=e,a=t.apply(i,r)}function p(t){return l=t,u=setTimeout(g,e),s?h(t):a}function v(t){var r,n,o=e-(t-c);return f?N(o,i-(t-l)):o}function y(t){var r=t-c,n;return void 0===c||r>=e||r<0||f&&t-l>=i}function g(){var t=W();if(y(t))return m(t);u=setTimeout(g,v(t))}function m(t){return u=void 0,d&&n?h(t):(n=o=void 0,a)}function b(){void 0!==u&&clearTimeout(u),l=0,n=c=o=u=void 0}function w(){return void 0===u?a:m(W())}function O(){var t=W(),r=y(t);if(n=arguments,o=this,c=t,r){if(void 0===u)return p(c);if(f)return u=setTimeout(g,e),h(c)}return void 0===u&&(u=setTimeout(g,e)),a}return e=q(e)||0,K(r)&&(s=!!r.leading,i=(f="maxWait"in r)?M(q(r.maxWait)||0,e):i,d="trailing"in r?!!r.trailing:d),O.cancel=b,O.flush=w,O}function K(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function _(t){return!!t&&"object"==typeof t}function L(t){return"symbol"==typeof t||_(t)&&k.call(t)==O}function q(t){if("number"==typeof t)return t;if(L(t))return NaN;if(K(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=K(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var r=T.test(t);return r||E.test(t)?R(t.slice(2),r?2:8):S.test(t)?NaN:+t}var z=F,$="Expected a function",H=NaN,V="[object Symbol]",A=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,X=parseInt,B="object"==typeof u&&u&&u.Object===Object&&u,G="object"==typeof self&&self&&self.Object===Object&&self,J=B||G||Function("return this")(),Z,tt=Object.prototype.toString,et=Math.max,rt=Math.min,nt=function(){return J.Date.now()};function ot(t,e,r){var n,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError($);function h(e){var r=n,i=o;return n=o=void 0,l=e,a=t.apply(i,r)}function p(t){return l=t,u=setTimeout(g,e),s?h(t):a}function v(t){var r,n,o=e-(t-c);return f?rt(o,i-(t-l)):o}function y(t){var r=t-c,n;return void 0===c||r>=e||r<0||f&&t-l>=i}function g(){var t=nt();if(y(t))return m(t);u=setTimeout(g,v(t))}function m(t){return u=void 0,d&&n?h(t):(n=o=void 0,a)}function b(){void 0!==u&&clearTimeout(u),l=0,n=c=o=u=void 0}function x(){return void 0===u?a:m(nt())}function w(){var t=nt(),r=y(t);if(n=arguments,o=this,c=t,r){if(void 0===u)return p(c);if(f)return u=setTimeout(g,e),h(c)}return void 0===u&&(u=setTimeout(g,e)),a}return e=lt(e)||0,at(r)&&(s=!!r.leading,i=(f="maxWait"in r)?et(lt(r.maxWait)||0,e):i,d="trailing"in r?!!r.trailing:d),w.cancel=b,w.flush=x,w}function it(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError($);return at(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),ot(t,e,{leading:n,maxWait:e,trailing:o})}function at(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ut(t){return!!t&&"object"==typeof t}function ct(t){return"symbol"==typeof t||ut(t)&&tt.call(t)==V}function lt(t){if("number"==typeof t)return t;if(ct(t))return NaN;if(at(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=at(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(A,"");var r=Y.test(t);return r||Q.test(t)?X(t.slice(2),r?2:8):U.test(t)?NaN:+t}var st=it;function ft(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState}function dt(){return void 0===navigator.onLine||navigator.onLine}var ht=new Map,pt=function t(e,r,n){var o=ht.get(e);(null==o?void 0:o.timer)&&clearTimeout(o.timer);var i=void 0;r>-1&&(i=setTimeout((function(){ht.delete(e)}),r)),ht.set(e,{data:n,timer:i,startTime:(new Date).getTime()})},vt=function t(e){var r=ht.get(e);return{data:null==r?void 0:r.data,startTime:null==r?void 0:r.startTime}},yt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},gt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(yt(arguments[e]));return t};function mt(t,e){var r=!1;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];r||(r=!0,t.apply(void 0,gt(n)),setTimeout((function(){r=!1}),e))}}var bt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},xt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(bt(arguments[e]));return t};function wt(t){var e=c.exports.useRef((function(){throw new Error("Cannot call an event handler while rendering.")}));e.current=t;var r=c.exports.useCallback((function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=e.current;if(n)return n.apply(void 0,xt(t))}),[e]);if("function"==typeof t)return r}var Ot=function t(e,r){var n=c.exports.useRef(!1);c.exports.useEffect((function(){return function(){n.current=!1}}),[]),c.exports.useEffect((function(){if(n.current)return e();n.current=!0}),r)},jt=[];function St(t){return jt.push(t),function e(){var r=jt.indexOf(t);jt.splice(r,1)}}var Tt=!1;if("undefined"!=typeof window&&window.addEventListener&&!Tt){var Et=function t(){if(ft()&&dt())for(var e=0;e<jt.length;e++){var r;(0,jt[e])()}};window.addEventListener("visibilitychange",Et,!1),window.addEventListener("focus",Et,!1),Tt=!0}var Rt=[];function Pt(t){return Rt.push(t),function e(){var r=Rt.indexOf(t);Rt.splice(r,1)}}var Dt=!1;if("undefined"!=typeof window&&window.addEventListener&&!Dt){var Ct=function t(){if(ft())for(var e=0;e<Rt.length;e++){var r;(0,Rt[e])()}};window.addEventListener("visibilitychange",Ct,!1),Dt=!0}var It=function(){return It=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},It.apply(this,arguments)},kt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},Mt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(kt(arguments[e]));return t},Nt="AHOOKS_USE_REQUEST_DEFAULT_KEY",Wt=function(){function t(t,e,r,n){this.count=0,this.pollingWhenVisibleFlag=!1,this.pollingTimer=void 0,this.loadingDelayTimer=void 0,this.unsubscribe=[],this.that=this,this.state={loading:!1,params:[],data:void 0,error:void 0,run:this.run.bind(this.that),mutate:this.mutate.bind(this.that),refresh:this.refresh.bind(this.that),cancel:this.cancel.bind(this.that),unmount:this.unmount.bind(this.that)},this.service=t,this.config=e,this.subscribe=r,n&&(this.state=It(It({},this.state),n)),this.debounceRun=this.config.debounceInterval?z(this._run,this.config.debounceInterval):void 0,this.throttleRun=this.config.throttleInterval?st(this._run,this.config.throttleInterval):void 0,this.limitRefresh=mt(this.refresh.bind(this),this.config.focusTimespan),this.config.pollingInterval&&this.unsubscribe.push(Pt(this.rePolling.bind(this))),this.config.refreshOnWindowFocus&&this.unsubscribe.push(St(this.limitRefresh.bind(this)))}return t.prototype.setState=function(t){void 0===t&&(t={}),this.state=It(It({},this.state),t),this.subscribe(this.state)},t.prototype._run=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];this.pollingTimer&&clearTimeout(this.pollingTimer),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.count+=1;var n=this.count;return this.setState({loading:!this.config.loadingDelay,params:e}),this.config.loadingDelay&&(this.loadingDelayTimer=setTimeout((function(){t.setState({loading:!0})}),this.config.loadingDelay)),this.service.apply(this,Mt(e)).then((function(r){if(n!==t.count)return new Promise((function(){}));t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer);var o=t.config.formatResult?t.config.formatResult(r):r;return t.setState({data:o,error:void 0,loading:!1}),t.config.onSuccess&&t.config.onSuccess(o,e),o})).catch((function(r){if(n!==t.count)return new Promise((function(){}));if(t.loadingDelayTimer&&clearTimeout(t.loadingDelayTimer),t.setState({data:void 0,error:r,loading:!1}),t.config.onError&&t.config.onError(r,e),t.config.throwOnError)throw r;return console.error(r),Promise.reject("useRequest has caught the exception, if you need to handle the exception yourself, you can set options.throwOnError to true.")})).finally((function(){if(n===t.count&&t.config.pollingInterval){if(!ft()&&!t.config.pollingWhenHidden)return void(t.pollingWhenVisibleFlag=!0);t.pollingTimer=setTimeout((function(){t._run.apply(t,Mt(e))}),t.config.pollingInterval)}}))},t.prototype.run=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.debounceRun?(this.debounceRun.apply(this,Mt(t)),Promise.resolve(null)):this.throttleRun?(this.throttleRun.apply(this,Mt(t)),Promise.resolve(null)):this._run.apply(this,Mt(t))},t.prototype.cancel=function(){this.debounceRun&&this.debounceRun.cancel(),this.throttleRun&&this.throttleRun.cancel(),this.loadingDelayTimer&&clearTimeout(this.loadingDelayTimer),this.pollingTimer&&clearTimeout(this.pollingTimer),this.pollingWhenVisibleFlag=!1,this.count+=1,this.setState({loading:!1})},t.prototype.refresh=function(){return this.run.apply(this,Mt(this.state.params))},t.prototype.rePolling=function(){this.pollingWhenVisibleFlag&&(this.pollingWhenVisibleFlag=!1,this.refresh())},t.prototype.mutate=function(t){"function"==typeof t?this.setState({data:t(this.state.data)||{}}):this.setState({data:t})},t.prototype.unmount=function(){this.cancel(),this.unsubscribe.forEach((function(t){t()}))},t}();function Ft(t,e){var r=e||{},n=r.refreshDeps,o=void 0===n?[]:n,i=r.manual,a=void 0!==i&&i,u=r.onSuccess,l=void 0===u?function(){}:u,s=r.onError,f=void 0===s?function(){}:s,d=r.defaultLoading,h=void 0!==d&&d,p=r.loadingDelay,v=r.pollingInterval,y=void 0===v?0:v,g=r.pollingWhenHidden,m=void 0===g||g,b=r.defaultParams,x=void 0===b?[]:b,w=r.refreshOnWindowFocus,O=void 0!==w&&w,j=r.focusTimespan,S=void 0===j?5e3:j,T=r.fetchKey,E=r.cacheKey,R=r.cacheTime,P=void 0===R?3e5:R,D=r.staleTime,C=void 0===D?0:D,I=r.debounceInterval,k=r.throttleInterval,M=r.initialData,N=r.ready,W=void 0===N||N,F=r.throwOnError,K=void 0!==F&&F,_=c.exports.useRef(Nt),L=wt(t),q=wt(l),z=wt(f),$=wt(T),H;"formatResult"in r&&(H=r.formatResult);var V,A={formatResult:wt(H),onSuccess:q,onError:z,loadingDelay:p,pollingInterval:y,pollingWhenHidden:m,refreshOnWindowFocus:!a&&O,focusTimespan:S,debounceInterval:I,throttleInterval:k,throwOnError:K},U=wt((function(t,e){X((function(r){return r[t]=e,It({},r)}))})),Y=kt(c.exports.useState((function(){var t;if(E){var e=null===(t=vt(E))||void 0===t?void 0:t.data;if(e){_.current=e.newstFetchKey;var r={};return Object.keys(e.fetches).forEach((function(t){var n=e.fetches[t],o=new Wt(L,A,U.bind(null,t),{loading:n.loading,params:n.params,data:n.data,error:n.error});r[t]=o.state})),r}}return{}})),2),Q=Y[0],X=Y[1],B=c.exports.useRef(Q);B.current=Q;var G=c.exports.useRef(),J=c.exports.useCallback((function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(W){if($){var r=$.apply(void 0,Mt(t));_.current=void 0===r?Nt:r}var n=_.current,o=B.current[n];if(!o){var i=new Wt(L,A,U.bind(null,n),{data:M});o=i.state,X((function(t){return t[n]=o,It({},t)}))}return o.run.apply(o,Mt(t))}G.current=t}),[T,U,W]),Z=c.exports.useRef(J);Z.current=J,Ot((function(){E&&pt(E,P,{fetches:Q,newstFetchKey:_.current})}),[E,Q]);var tt=c.exports.useRef(!1);Ot((function(){W&&(!tt.current&&G.current&&Z.current.apply(Z,Mt(G.current)),tt.current=!0)}),[W]),c.exports.useEffect((function(){var t;if(!a)if(Object.keys(Q).length>0){var e=E&&(null===(t=vt(E))||void 0===t?void 0:t.startTime)||0;-1===C||(new Date).getTime()-e<=C||Object.values(Q).forEach((function(t){t.refresh()}))}else Z.current.apply(Z,Mt(x))}),[]);var et=c.exports.useCallback((function(){Object.values(B.current).forEach((function(t){t.unmount()})),_.current=Nt,X({}),B.current={}}),[X]);Ot((function(){a||Object.values(B.current).forEach((function(t){t.refresh()}))}),Mt(o)),c.exports.useEffect((function(){return function(){Object.values(B.current).forEach((function(t){t.unmount()}))}}),[]);var rt=c.exports.useCallback((function(t){return function(){console.warn("You should't call "+t+" when service not executed once.")}}),[]);return It(It({loading:W&&!a||h,data:M,error:void 0,params:[],cancel:rt("cancel"),refresh:rt("refresh"),mutate:rt("mutate")},Q[_.current]||{}),{run:J,fetches:Q,reset:et})}var Kt=function(){return Kt=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Kt.apply(this,arguments)},_t=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r},Lt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},qt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Lt(arguments[e]));return t};function zt(t,e){var r=e.refreshDeps,n=void 0===r?[]:r,o=e.ref,i=e.isNoMore,a=e.threshold,u=void 0===a?100:a;e.fetchKey;var l=_t(e,["refreshDeps","ref","isNoMore","threshold","fetchKey"]),s=Lt(c.exports.useState(!1),2),f=s[0],d=s[1];c.exports.useEffect((function(){e.fetchKey&&console.warn("useRequest loadMore mode don't need fetchKey!")}),[]);var h=Ft(t,Kt(Kt({},l),{fetchKey:function t(e){var r;return(null===(r=null==e?void 0:e.list)||void 0===r?void 0:r.length)||0},onSuccess:function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];d(!1),e.onSuccess&&e.onSuccess.apply(e,qt(r))}})),p=h.data,v=h.run,y=h.params,g=h.reset,m=h.loading,b=h.fetches,x=c.exports.useCallback((function(){g();var t,e=Lt(y).slice(1);v.apply(void 0,qt([void 0],e))}),[v,g,y]),w=c.exports.useRef(x);w.current=x,Ot((function(){e.manual||w.current()}),qt(n));var O=c.exports.useMemo((function(){var t=[],e=p;return Object.values(b).forEach((function(r){var n,o;(null===(n=r.data)||void 0===n?void 0:n.list)&&(t=t.concat(null===(o=r.data)||void 0===o?void 0:o.list)),r.loading||(e=r.data)})),Kt(Kt({},e),{list:t})}),[b,p]),j=!!i&&(!m&&!f&&i(O)),S=c.exports.useCallback((function(){if(!j){d(!0);var t,e=Lt(y).slice(1);v.apply(void 0,qt([O],e))}}),[j,v,O,y]),T=function t(){!m&&!f&&o&&o.current&&o.current.scrollHeight-o.current.scrollTop<=o.current.clientHeight+u&&S()},E=c.exports.useRef(T);return E.current=T,c.exports.useEffect((function(){if(!o||!o.current)return function(){};var t=function t(){return E.current()};return o.current.addEventListener("scroll",t),function(){o&&o.current&&o.current.removeEventListener("scroll",t)}}),[E]),Kt(Kt({},h),{data:O,reload:x,loading:m&&0===O.list.length,loadMore:S,loadingMore:f,noMore:j})}var $t=function(){return $t=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},$t.apply(this,arguments)},Ht=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r},Vt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},At=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Vt(arguments[e]));return t};function Ut(t,e){e.paginated;var r=e.defaultPageSize,n=void 0===r?10:r,o=e.refreshDeps,i=void 0===o?[]:o,a=e.fetchKey,u=Ht(e,["paginated","defaultPageSize","refreshDeps","fetchKey"]);c.exports.useEffect((function(){a&&console.error("useRequest pagination's fetchKey will not work!")}),[]);var l=Ft(t,$t({defaultParams:[{current:1,pageSize:n}]},u)),s=l.data,f=l.params,d=l.run,h=l.loading,p=Ht(l,["data","params","run","loading"]),v=f&&f[0]?f[0]:{},y=v.current,g=void 0===y?1:y,m=v.pageSize,b=void 0===m?n:m,x=v.sorter,w=void 0===x?{}:x,O=v.filters,j=void 0===O?{}:O,S=c.exports.useCallback((function(t){var e=Vt(f),r=e[0],n=e.slice(1);d.apply(void 0,At([$t($t({},r),t)],n))}),[d,f]),T=(null==s?void 0:s.total)||0,E=c.exports.useMemo((function(){return Math.ceil(T/b)}),[b,T]),R=c.exports.useCallback((function(t,e){var r=t<=0?1:t,n=e<=0?1:e,o=Math.ceil(T/n);r>o&&(r=Math.max(1,o)),S({current:r,pageSize:n})}),[T,S]),P=c.exports.useCallback((function(t){R(t,b)}),[R,b]),D=c.exports.useCallback((function(t){R(g,t)}),[R,g]),C=c.exports.useRef(P);C.current=P,Ot((function(){e.manual||C.current(1)}),At(i));var I=c.exports.useCallback((function(t,e,r){S({current:t.current,pageSize:t.pageSize||n,filters:e,sorter:r})}),[j,w,S]);return $t({loading:h,data:s,params:f,run:d,pagination:{current:g,pageSize:b,total:T,totalPage:E,onChange:R,changeCurrent:P,changePageSize:D},tableProps:{dataSource:(null==s?void 0:s.list)||[],loading:h,onChange:I,pagination:{current:g,pageSize:b,total:T}},sorter:w,filters:j},p)}var Yt=l.createContext({});Yt.displayName="UseRequestConfigContext";var Qt=function(){return Qt=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Qt.apply(this,arguments)},Xt=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r},Bt=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(void 0===e||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(u){a={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i},Gt=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Bt(arguments[e]));return t};function Jt(t,e){void 0===e&&(e={});var r=c.exports.useContext(Yt),n=Qt(Qt({},r),e),o=n.paginated,i=n.loadMore,a=n.requestMethod,u=c.exports.useRef(o),l=c.exports.useRef(i);if(u.current!==o)throw Error("You should not modify the paginated of options");if(l.current!==i)throw Error("You should not modify the loadMore of options");u.current=o,l.current=i;var s=function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return fetch.apply(void 0,Gt(e)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))},f=a||s,d;switch(typeof t){case"string":d=function e(){return f(t)};break;case"object":var h=t.url,p=Xt(t,["url"]);d=function e(){return a?a(t):s(h,p)};break;default:d=function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return new Promise((function(e,n){var o=t.apply(void 0,Gt(r)),i=o;if(!o.then)switch(typeof o){case"string":i=f(o);break;case"object":var u=o.url,c=Xt(o,["url"]);i=a?a(o):s(u,c)}i.then(e).catch(n)}))}}return i?zt(d,n):o?Ut(d,n):Ft(d,n)}Yt.Provider;const Zt=async function(t){try{const e=t.instanceName?t.instanceName:"default",r=s()[e];if("function"!=typeof r)throw new Error(`unknown ${e} in request method`);const n=await r(t);return r.defaults.withFullResponse||t.withFullResponse?n:n.data}catch(e){throw console.error(e),e}};function te(t,e={}){const r=Jt(t,i({manual:!0,requestMethod:Zt},e)),{run:n}=r,o=a(r,["run"]);return i({request:n},o)}b.forEach(["delete","get","head","options"],(function t(e){Zt[e]=function(t,r){return Zt(b.merge(r||{},{method:e,url:t}))}})),b.forEach(["post","put","patch"],(function t(e){Zt[e]=function(t,r,n){return Zt(b.merge(n||{},{method:e,url:t,data:r}))}})),Zt.CancelToken=f.CancelToken,Zt.isCancel=f.isCancel;const ee=undefined;var re="_container_5r303_1";function ne(){const{data:t,error:e,loading:r,request:n}=te({url:"/api/getRepos"}),{dataSource:o=[]}=t||{},[i,a]=d.useModel("user");return console.log(i),c.exports.useEffect((()=>{console.log("Home useEffect...."),async function(){await n()}()}),[]),h.exports.jsxs("div",{className:re,children:[h.exports.jsx("h2",{children:"Home page"}),e?h.exports.jsxs("div",{children:["request error: ",e.message]}):h.exports.jsxs(p,{loading:r,dataSource:o,rowKey:"id",children:[h.exports.jsx(p.Column,{title:"ID",dataIndex:"id"},"id"),h.exports.jsx(p.Column,{title:"\u540d\u79f0",dataIndex:"name"},"name"),h.exports.jsx(p.Column,{title:"\u63cf\u8ff0",dataIndex:"description"},"description")]})]})}const oe=ne;export{oe as default};