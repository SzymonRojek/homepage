var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var x=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,x(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(x(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function pe(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,fe)}catch(e){fe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function me(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else pe(me.bind(null,e))}var he={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=he,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=me,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=pe,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.0`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=s(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,re());else{var t=n(l);t!==null&&oe(ee,t.startTime-e)}}}var te=!1,x=-1,S=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<S)}function w(){if(g=!1,te){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(x),x=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():te=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=w,re=function(){ae.postMessage(null)}}else re=function(){_(w,0)};function oe(t,n){x=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(x),x=-1):h=!0,oe(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),_=s(((e,t)=>{t.exports=g()})),v=s((e=>{var t=_(),n=p(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}function f(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&f(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function m(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function g(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=m(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,te=null;function x(e,t,n){return e===n||e===t&&(ee=e,!0)}function S(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),ae=Symbol.for(`react.portal`),oe=Symbol.for(`react.fragment`),se=Symbol.for(`react.strict_mode`),ce=Symbol.for(`react.profiler`),le=Symbol.for(`react.consumer`),ue=Symbol.for(`react.context`),de=Symbol.for(`react.forward_ref`),fe=Symbol.for(`react.suspense`),pe=Symbol.for(`react.suspense_list`),me=Symbol.for(`react.memo`),he=Symbol.for(`react.lazy`),ge=Symbol.for(`react.activity`),_e=Symbol.for(`react.legacy_hidden`),ve=Symbol.for(`react.memo_cache_sentinel`),ye=Symbol.for(`react.view_transition`),be=Symbol.for(`react.recoverable`),xe=Symbol.iterator;function Se(e){return typeof e!=`object`||!e?null:(e=xe&&e[xe]||e[`@@iterator`],typeof e==`function`?e:null)}var T=Symbol.for(`react.client.reference`);function Ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===T?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case oe:return`Fragment`;case ce:return`Profiler`;case se:return`StrictMode`;case fe:return`Suspense`;case pe:return`SuspenseList`;case ge:return`Activity`;case ye:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ae:return`Portal`;case ue:return e.displayName||`Context`;case le:return(e._context.displayName||`Context`)+`.Consumer`;case de:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case me:return t=e.displayName||null,t===null?Ce(e.type)||`Memo`:t;case he:t=e._payload,e=e._init;try{return Ce(e(t))}catch{}}return null}var E=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function De(e){return{current:e}}function Oe(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function k(e,t){Ee++,Te[Ee]=e.current,e.current=t}var ke=De(null),Ae=De(null),je=De(null),A=De(null);function Me(e,t){switch(k(je,t),k(Ae,e),k(ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Oe(ke),k(ke,e)}function j(){Oe(ke),Oe(Ae),Oe(je)}function Ne(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,k(A,e)),t=ke.current;var n=dp(t,e.type);t!==n&&(k(Ae,e),k(ke,n))}function Pe(e){Ae.current===e&&(Oe(ke),Oe(Ae)),A.current===e&&(Oe(A),sh._currentValue=we)}var Fe,Ie;function Le(e){if(Fe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Fe=t&&t[1]||``,Ie=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Fe+e+Ie}var Re=!1;function ze(e,t){if(!e||Re)return``;Re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Le(n):``}function Be(e,t){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le(`Lazy`);case 13:return e.child!==t&&t!==null?Le(`Suspense Fallback`):Le(`Suspense`);case 19:return Le(`SuspenseList`);case 0:case 15:return ze(e.type,!1);case 11:return ze(e.type.render,!1);case 1:return ze(e.type,!0);case 31:return Le(`Activity`);case 30:return Le(`ViewTransition`);default:return``}}function Ve(e){try{var t=``,n=null;do t+=Be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var He=Object.prototype.hasOwnProperty,Ue=t.unstable_scheduleCallback,We=t.unstable_cancelCallback,Ge=t.unstable_shouldYield,Ke=t.unstable_requestPaint,qe=t.unstable_now,Je=t.unstable_getCurrentPriorityLevel,Ye=t.unstable_ImmediatePriority,Xe=t.unstable_UserBlockingPriority,Ze=t.unstable_NormalPriority,Qe=t.unstable_LowPriority,$e=t.unstable_IdlePriority,et=t.log,tt=t.unstable_setDisableYieldValue,nt=null,rt=null;function it(e){if(typeof et==`function`&&tt(e),rt&&typeof rt.setStrictMode==`function`)try{rt.setStrictMode(nt,e)}catch{}}var at=Math.clz32?Math.clz32:ct,ot=Math.log,st=Math.LN2;function ct(e){return e>>>=0,e===0?32:31-(ot(e)/st|0)|0}var lt=256,ut=262144,M=4194304;function dt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=dt(n))):i=dt(o):i=dt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=dt(n))):i=dt(o)):i=dt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-at(n),i=1<<r;t|=e[r],n&=~i}return t}function ht(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var e=M;return M<<=1,!(M&62914560)&&(M=4194304),e}function _t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-at(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&bt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function bt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-at(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function St(e,t){var n=t&-t;return n=n&42?1:Ct(n),(n&(e.suspendedLanes|t))===0?n:0}function Ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Tt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Et(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var Dt=Math.random().toString(36).slice(2),Ot=`__reactFiber$`+Dt,kt=`__reactProps$`+Dt,At=`__reactContainer$`+Dt,jt=`__reactEvents$`+Dt,Mt=`__reactListeners$`+Dt,Nt=`__reactHandles$`+Dt,Pt=`__reactResources$`+Dt,Ft=`__reactMarker$`+Dt,It=`__reactLoad$`+Dt;function Lt(e){delete e[Ot],delete e[kt],delete e[Mt],delete e[Nt]}function Rt(e){var t;if(t=e[Ot])return t;for(var n=e.parentNode;n;){if(t=n[At]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ot])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function zt(e){if(e=e[Ot]||e[At]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Vt(e){var t=e[Pt];return t||=e[Pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ht(e){e[Ft]=!0}function Ut(e){e[It]=void 0}var Wt=new Set,Gt={};function Kt(e,t){qt(e,t),qt(e+`Capture`,t)}function qt(e,t){for(Gt[e]=t,e=0;e<t.length;e++)Wt.add(t[e])}var Jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Yt={},Xt={};function Zt(e){return He.call(Xt,e)?!0:He.call(Yt,e)?!1:Jt.test(e)?Xt[e]=!0:(Yt[e]=!0,!1)}var N=!1;function Qt(){var e=N;return N=!1,e}function $t(e,t,n){if(Zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function en(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function tn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function nn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function rn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function an(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function on(e){if(!e._valueTracker){var t=rn(e)?`checked`:`value`;e._valueTracker=an(e,t,``+e[t])}}function sn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=rn(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var cn=/[\n"\\]/g;function ln(e){return e.replace(cn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function un(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+nn(t)):e.value!==``+nn(t)&&(e.value=``+nn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):fn(e,nn(n)):o===`number`&&e.value==t?fn(e,nn(e.value)):fn(e,nn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+nn(s):e.removeAttribute(`name`)}function dn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){on(e);return}n=n==null?``:``+nn(n),t=t==null?n:``+nn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),on(e)}function fn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mn(e,t,n){if(t!=null&&(t=``+nn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+nn(n)}function hn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(E(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=nn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),on(e)}function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function vn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||_n.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function yn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,N=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(vn(e,a,r),N=!0)}else for(var o in t)t.hasOwnProperty(o)&&vn(e,o,t[o])}function bn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var xn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function P(){}var wn=null;function Tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var En=null,Dn=null;function On(e){var t=zt(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(un(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+ln(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[kt]||null;if(!a)throw Error(i(90));un(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&sn(r)}break a;case`textarea`:mn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}}}var kn=!1;function An(e,t,n){if(kn)return e(t,n);kn=!0;try{return e(t)}finally{if(kn=!1,(En!==null||Dn!==null)&&(zd(),En&&(t=En,e=Dn,Dn=En=null,On(t),e)))for(t=0;t<e.length;t++)On(e[t])}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[kt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Nn=!1;if(Mn)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Nn=!0}}),window.addEventListener(`test`,Pn,Pn),window.removeEventListener(`test`,Pn,Pn)}catch{Nn=!1}var Fn=null,In=null,Ln=null;function Rn(){if(Ln)return Ln;var e,t=In,n=t.length,r,i=`value`in Fn?Fn.value:Fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ln=i.slice(e,1<r?1-r:void 0)}function zn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Vn(){return!1}function Hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Bn:Vn,this.isPropagationStopped=Vn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Hn(Un),Gn=w({},Un,{view:0,detail:0}),Kn=Hn(Gn),qn,Jn,Yn,Xn=w({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Yn&&(Yn&&e.type===`mousemove`?(qn=e.screenX-Yn.screenX,Jn=e.screenY-Yn.screenY):Jn=qn=0,Yn=e),qn)},movementY:function(e){return`movementY`in e?e.movementY:Jn}}),Zn=Hn(Xn),Qn=Hn(w({},Xn,{dataTransfer:0})),$n=Hn(w({},Gn,{relatedTarget:0})),er=Hn(w({},Un,{animationName:0,elapsedTime:0,pseudoElement:0})),tr=Hn(w({},Un,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),nr=Hn(w({},Un,{data:0})),rr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},ir={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ar={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function or(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ar[e])?!!t[e]:!1}function sr(){return or}var cr=Hn(w({},Gn,{key:function(e){if(e.key){var t=rr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=zn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?ir[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type===`keypress`?zn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?zn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),lr=Hn(w({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ur=Hn(w({},Un,{submitter:0})),dr=Hn(w({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr})),fr=Hn(w({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0})),pr=Hn(w({},Xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),mr=Hn(w({},Un,{newState:0,oldState:0,source:0})),hr=[9,13,27,32],gr=Mn&&`CompositionEvent`in window,_r=null;Mn&&`documentMode`in document&&(_r=document.documentMode);var vr=Mn&&`TextEvent`in window&&!_r,yr=Mn&&(!gr||_r&&8<_r&&11>=_r),br=` `,xr=!1;function Sr(e,t){switch(e){case`keyup`:return hr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var wr=!1;function Tr(e,t){switch(e){case`compositionend`:return Cr(t);case`keypress`:return t.which===32?(xr=!0,br):null;case`textInput`:return e=t.data,e===br&&xr?null:e;default:return null}}function Er(e,t){if(wr)return e===`compositionend`||!gr&&Sr(e,t)?(e=Rn(),Ln=In=Fn=null,wr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return yr&&t.locale!==`ko`?null:t.data;default:return null}}var Dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Dr[e.type]:t===`textarea`}function kr(e,t,n,r){En?Dn?Dn.push(r):Dn=[r]:En=r,t=Jf(t,`onChange`),0<t.length&&(n=new Wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Ar=null,jr=null;function Mr(e){Vf(e,0)}function Nr(e){if(sn(Bt(e)))return e}function Pr(e,t){if(e===`change`)return t}var Fr=!1;if(Mn){var Ir;if(Mn){var Lr=`oninput`in document;if(!Lr){var Rr=document.createElement(`div`);Rr.setAttribute(`oninput`,`return;`),Lr=typeof Rr.oninput==`function`}Ir=Lr}else Ir=!1;Fr=Ir&&(!document.documentMode||9<document.documentMode)}function zr(){Ar&&(Ar.detachEvent(`onpropertychange`,Br),jr=Ar=null)}function Br(e){if(e.propertyName===`value`&&Nr(jr)){var t=[];kr(t,jr,e,Tn(e)),An(Mr,t)}}function Vr(e,t,n){e===`focusin`?(zr(),Ar=t,jr=n,Ar.attachEvent(`onpropertychange`,Br)):e===`focusout`&&zr()}function F(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Nr(jr)}function Hr(e,t){if(e===`click`)return Nr(t)}function Ur(e,t){if(e===`input`||e===`change`)return Nr(t)}function Wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Gr=typeof Object.is==`function`?Object.is:Wr;function Kr(e,t){if(Gr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!He.call(t,i)||!Gr(e[i],t[i]))return!1}return!0}function qr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yr(e,t){var n=Jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Jr(n)}}function I(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?I(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var L=Mn&&`documentMode`in document&&11>=document.documentMode,Qr=null,$r=null,ei=null,ti=!1;function ni(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||Qr==null||Qr!==qr(r)||(r=Qr,`selectionStart`in r&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&Kr(ei,r)||(ei=r,r=Jf($r,`onSelect`),0<r.length&&(t=new Wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ii={animationend:ri(`Animation`,`AnimationEnd`),animationiteration:ri(`Animation`,`AnimationIteration`),animationstart:ri(`Animation`,`AnimationStart`),transitionrun:ri(`Transition`,`TransitionRun`),transitionstart:ri(`Transition`,`TransitionStart`),transitioncancel:ri(`Transition`,`TransitionCancel`),transitionend:ri(`Transition`,`TransitionEnd`)},ai={},oi={};Mn&&(oi=document.createElement(`div`).style,`AnimationEvent`in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),`TransitionEvent`in window||delete ii.transitionend.transition);function si(e){if(ai[e])return ai[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oi)return ai[e]=t[n];return e}var ci=si(`animationend`),li=si(`animationiteration`),ui=si(`animationstart`),di=si(`transitionrun`),fi=si(`transitionstart`),pi=si(`transitioncancel`),mi=si(`transitionend`),hi=new Map,gi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);gi.push(`scrollEnd`);function _i(e,t){hi.set(e,t),Kt(t,[e])}var vi=0;function yi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=vi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function bi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function xi(e,t){return e=bi(e),t=bi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ci=[],wi=0,Ti=0;function Ei(){for(var e=wi,t=Ti=wi=0;t<e;){var n=Ci[t];Ci[t++]=null;var r=Ci[t];Ci[t++]=null;var i=Ci[t];Ci[t++]=null;var a=Ci[t];if(Ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ai(n,i,a)}}function Di(e,t,n,r){Ci[wi++]=e,Ci[wi++]=t,Ci[wi++]=n,Ci[wi++]=r,Ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Oi(e,t,n,r){return Di(e,t,n,r),R(e)}function ki(e,t){return Di(e,null,null,t),R(e)}function Ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-at(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function R(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ji={};function Mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,t,n,r){return new Mi(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,t){var n=e.alternate;return n===null?(n=Ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ii(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Li(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Pi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ke.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ge:return e=Ni(31,n,t,a),e.elementType=ge,e.lanes=o,e;case oe:return Ri(n.children,a,o,t);case se:s=8,a|=24;break;case ce:return e=Ni(12,n,t,a|2),e.elementType=ce,e.lanes=o,e;case fe:return e=Ni(13,n,t,a),e.elementType=fe,e.lanes=o,e;case pe:return e=Ni(19,n,t,a),e.elementType=pe,e.lanes=o,e;case _e:case ye:return e=a|32,e=Ni(30,n,t,e),e.elementType=ye,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ue:s=10;break a;case le:s=9;break a;case de:s=11;break a;case me:s=14;break a;case he:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ri(e,t,n,r){return e=Ni(7,e,r,t),e.lanes=n,e}function zi(e,t,n){return e=Ni(6,e,null,t),e.lanes=n,e}function Bi(e){var t=Ni(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=new WeakMap;function Ui(e,t){if(typeof e==`object`&&e){var n=Hi.get(e);return n===void 0?(t={value:e,source:t,stack:Ve(t)},Hi.set(e,t),t):n}return{value:e,source:t,stack:Ve(t)}}var Wi=[],Gi=0,Ki=null,qi=0,Ji=[],Yi=0,Xi=null,Zi=1,Qi=``;function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ki,Ki=e,qi=t}function ea(e,t,n){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Xi=e;var r=Zi;e=Qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var a=32-at(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zi=1<<32-at(t)+i|n<<i|r,Qi=a+e}else Zi=1<<a|n<<i|r,Qi=e}function ta(e){e.return!==null&&($i(e,1),ea(e,1,0))}function na(e){for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null;for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Qi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null}function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Zi=t.id,Qi=t.overflow,Xi=e}var ia=null,z=null,B=!1,aa=null,oa=!1,sa=Error(i(519));function ca(e){throw ma(Ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),sa}function la(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ot]=e,t[kt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),hn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=P),t=!0):t=!1,t||ca(e,!0)}function ua(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ia=ia.return}}function da(e){if(e!==ia)return!1;if(!B)return ua(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&z&&ca(e),ua(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else t===27?(t=z,Sp(e.type)?(e=um,um=null,z=e):z=t):z=ia?lm(e.stateNode.nextSibling):null;return!0}function fa(){z=ia=null,B=!1}function pa(){var e=aa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),aa=null),e}function ma(e){aa===null?aa=[e]:aa.push(e)}var ha=De(null),ga=null,_a=null;function va(e,t,n){k(ha,t._currentValue),t._currentValue=n}function ya(e){e._currentValue=ha.current,Oe(ha)}function ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function xa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ba(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ba(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ba(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Gr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===A.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&xa(t,e,n,r),t.flags|=262144,e!==null}function Ca(e){for(e=e.firstContext;e!==null;){if(!Gr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){ga=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ta(e){return Da(ga,e)}function Ea(e,t){return ga===null&&wa(e),Da(e,t)}function Da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_a===null){if(e===null)throw Error(i(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return n}var Oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ka=t.unstable_scheduleCallback,Aa=t.unstable_NormalPriority,ja={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ma(){return{controller:new Oa,data:new Map,refCount:0}}function Na(e){e.refCount--,e.refCount===0&&ka(Aa,function(){e.controller.abort()})}function Pa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Fa=null;function Ia(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var La=null,Ra=0,za=0,Ba=null;function Va(e,t){if(La===null){var n=La=[];Ra=0,za=Pf(),Ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ra++,t.then(Ha,Ha),t}function Ha(){if(--Ra===0&&(Fa=null,La!==null)){Ba!==null&&(Ba.status=`fulfilled`);var e=La;La=null,za=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ua(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Wa=D.S;D.S=function(e,t){if(hd=qe(),typeof t==`object`&&t&&typeof t.then==`function`&&Va(e,t),Fa!==null)for(var n=bf;n!==null;)Pa(n,Fa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Pa(r,n),r=r.next;if(za!==0){r=Fa,r===null&&(r=Fa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Wa!==null&&Wa(e,t)};var Ga=De(null);function Ka(){var e=Ga.current;return e===null?q.pooledCache:e}function qa(e,t){t===null?k(Ga,Ga.current):k(Ga,t.pool)}function Ja(){var e=Ka();return e===null?null:{parent:ja._currentValue,pool:e}}var Ya=Error(i(460)),Xa=Error(i(474)),Za=Error(i(542)),Qa={then:function(){}};function $a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function eo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(P,P),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(P,P);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e}throw no=t,Ya}}function to(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(no=e,Ya):e}}var no=null;function ro(){if(no===null)throw Error(i(459));var e=no;return no=null,e}function io(e){if(e===Ya||e===Za)throw Error(i(483))}var ao=null,oo=0;function so(e){var t=oo;return oo+=1,ao===null&&(ao=[]),eo(ao,e,t)}function co(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function lo(e,t){throw t.$$typeof===re?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function uo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===oe?(e=d(e,t,n.props.children,r,n.key),co(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===he&&to(i)===t.type)?(t=a(t,n.props),co(t,n),t.return=e,t):(t=Li(n.type,n.key,n.props,null,e.mode,r),co(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ri(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=zi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=Li(t.type,t.key,t.props,null,e.mode,n),co(n,t),n.return=e,n;case ae:return t=Vi(t,e.mode,n),t.return=e,t;case he:return t=to(t),f(e,t,n)}if(E(t)||Se(t))return t=Ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,so(t),n);if(t.$$typeof===ue)return f(e,Ea(e,t),n);lo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case ae:return n.key===i?u(e,t,n,r):null;case he:return n=to(n),p(e,t,n,r)}if(E(n)||Se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,so(n),r);if(n.$$typeof===ue)return p(e,t,Ea(e,n),r);lo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ae:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case he:return r=to(r),m(e,t,n,r,i)}if(E(r)||Se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,so(r),i);if(r.$$typeof===ue)return m(e,t,n,Ea(t,r),i);lo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&$i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&$i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&$i(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&$i(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&$i(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&$i(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===oe&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ie:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===oe){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),co(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===he&&to(l)===r.type){n(e,r.sibling),c=a(r,o.props),co(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===oe?(c=Ri(o.props.children,e.mode,c,o.key),co(c,o),c.return=e,e=c):(c=Li(o.type,o.key,o.props,null,e.mode,c),co(c,o),c.return=e,e=c)}return s(e);case ae:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Vi(o,e.mode,c),c.return=e,e=c}return s(e);case he:return o=to(o),_(e,r,o,c)}if(E(o))return h(e,r,o,c);if(Se(o)){if(l=Se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,so(o),c);if(o.$$typeof===ue)return _(e,r,Ea(e,o),c);lo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=zi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{oo=0;var i=_(e,t,n,r);return ao=null,i}catch(t){if(t===Ya||t===Za)throw t;var a=Ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var fo=uo(!0),po=uo(!1),mo=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _o(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=R(e),Ai(e,null,n),t}return Di(e,r,t,n),R(e)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}function bo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xo=!1;function So(){if(xo){var e=Ba;if(e!==null)throw e}}function Co(e,t,n,r){xo=!1;var i=e.updateQueue;mo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===za&&(xo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:mo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function wo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function To(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wo(n[e],t)}var Eo=De(null),Do=De(0);function Oo(e,t){e=id,k(Do,e),k(Eo,t),id=e|t.baseLanes}function ko(){k(Do,id),k(Eo,Eo.current)}function Ao(){id=Do.current,Oe(Eo),Oe(Do)}var jo=De(null),Mo=null;function No(e){var t=e.alternate;k(Ro,Ro.current&1),k(jo,e),Mo===null&&(t===null||Eo.current!==null||t.memoizedState!==null)&&(Mo=e)}function Po(e){k(Ro,Ro.current),k(jo,e),Mo===null&&(Mo=e)}function Fo(e){e.tag===22?(k(Ro,Ro.current),k(jo,e),Mo===null&&(Mo=e)):Io()}function Io(){k(Ro,Ro.current),k(jo,jo.current)}function Lo(e){Oe(jo),Mo===e&&(Mo=null),Oe(Ro)}var Ro=De(0);function zo(e,t){k(jo,jo.current),k(Ro,t)}function Bo(e){Oe(Ro),Oe(jo),Mo===e&&(Mo=null)}function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=0,V=null,H=null,Uo=null,Wo=!1,Go=!1,Ko=!1,qo=0,Jo=0,Yo=null,Xo=0;function Zo(){throw Error(i(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gr(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,i,a){return Ho=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?gc:_c,Ko=!1,a=n(r,i),Ko=!1,Go&&(a=ts(t,n,r,i)),es(e),a}function es(e){D.H=hc;var t=H!==null&&H.next!==null;if(Ho=0,Uo=H=V=null,Wo=!1,Jo=0,Yo=null,t)throw Error(i(300));e===null||Pc||(e=e.dependencies,e!==null&&Ca(e)&&(Pc=!0))}function ts(e,t,n,r){V=e;var a=0;do{if(Go&&(Yo=null),Jo=0,Go=!1,25<=a)throw Error(i(301));if(a+=1,Uo=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=vc,o=t(n,r)}while(Go);return o}function ns(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?ls(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function rs(){var e=qo!==0;return qo=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function as(e){if(Wo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wo=!1}Ho=0,Uo=H=V=null,Go=!1,Jo=qo=0,Yo=null}function os(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e,Uo}function ss(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=Uo===null?V.memoizedState:Uo.next;if(t!==null)Uo=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e}return Uo}function cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ls(e){var t=Jo;return Jo+=1,Yo===null&&(Yo=[]),e=eo(Yo,e,t),t=V,(Uo===null?t.memoizedState:Uo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?gc:_c),e}function us(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ls(e);if(e.$$typeof===be)return;if(e.$$typeof===ue)return Ta(e)}throw Error(i(438,String(e)))}function ds(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=cs(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ve;return t.index++,n}function fs(e,t){return typeof t==`function`?t(e):t}function ps(e){return ms(ss(),H,e)}function ms(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===za&&(d=!0);else if((Ho&p)===p){u=u.next,p===za&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,od|=p;f=u.action,Ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Gr(o,e.memoizedState)&&(Pc=!0,d&&(n=Ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hs(e){var t=ss(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Gr(o,t.memoizedState)||(Pc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gs(e,t,n){var r=V,a=ss(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Gr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,Pc=!0),a=a.queue,Vs(ys.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Uo!==null&&!!(Uo.memoizedState.tag&1),Is(e?9:8,{destroy:void 0},vs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Ho&127||_s(r,t,n)}return n}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=cs(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,bs(t)&&xs(e)}function ys(e,t,n){return n(function(){bs(t)&&xs(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gr(e,n)}catch{return!0}}function xs(e){var t=ki(e,2);t!==null&&Pd(t,e,2)}function Ss(e){var t=os();if(typeof e==`function`){var n=e;if(e=n(),Ko){it(!0);try{n()}finally{it(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function Cs(e,t,n,r){return e.baseState=n,ms(e,H,typeof r==`function`?r:fs)}function ws(e,t,n,r,a){if(fc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};o.types=a===null?null:a.types,D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Es(e,t,s)}catch(n){Os(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Es(e,t,a)}catch(n){Os(e,t,n)}}function Es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ds(e,t,n)},function(n){return Os(e,t,n)}):Ds(e,t,n)}function Ds(e,t,n){t.status=`fulfilled`,t.value=n,ks(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ts(e,n)))}function Os(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ks(t),t=t.next;while(t!==r)}e.action=null}function ks(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function As(e,t){return t}function js(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=V;if(B){if(z){b:{for(var i=z,a=oa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=lm(i.nextSibling),r=i.data===`F!`;break a}}ca(r)}r=!1}r&&(t=n[0])}}return n=os(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},n.queue=r,n=lc.bind(null,V,r),r.dispatch=n,r=Ss(!1),a=dc.bind(null,V,!1,r.queue),r=os(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ws.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ms(e){return Ns(ss(),H,e)}function Ns(e,t,n){if(t=ms(e,t,As)[0],e=ps(fs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ls(t)}catch(e){throw e===Ya?Za:e}else r=t;t=ss();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,Is(9,{destroy:void 0},Ps.bind(null,i,n),null)),[r,a,e]}function Ps(e,t){e.action=t}function Fs(e){var t=ss(),n=H;if(n!==null)return Ns(t,n,e);ss(),t=t.memoizedState,n=ss();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=cs(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ls(){return ss().memoizedState}function Rs(e,t,n,r){var i=os();V.flags|=e,i.memoizedState=Is(1|t,{destroy:void 0},n,r===void 0?null:r)}function zs(e,t,n,r){var i=ss();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&Qo(r,H.memoizedState.deps)?i.memoizedState=Is(t,a,n,r):(V.flags|=e,i.memoizedState=Is(1|t,a,n,r))}function Bs(e,t){Rs(8390656,8,e,t)}function Vs(e,t){zs(2048,8,e,t)}function Hs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=cs(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Us(e){var t=ss().memoizedState;return Hs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ws(e,t){return zs(4,2,e,t)}function Gs(e,t){return zs(4,4,e,t)}function Ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,n){n=n==null?null:n.concat([e]),zs(4,4,Ks.bind(null,t,e),n)}function Js(){}function Ys(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xs(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Qo(t,r[1]))return r[0];if(r=e(),Ko){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[r,t],r}function Zs(e,t,n){return n===void 0||Ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),V.lanes|=e,od|=e,n)}function Qs(e,t,n,r){return Gr(n,t)?n:Eo.current===null?!(Ho&106)||Ho&1073741824&&!(Y&261930)?(Pc=!0,e.memoizedState=n):(e=Md(),V.lanes|=e,od|=e,t):(e=Zs(e,n,r),Gr(e,t)||(Pc=!0),e)}function $s(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};s.types=o===null?null:o.types,D.T=s,dc(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?uc(e,t,Ua(c,r),jd(e)):uc(e,t,r,jd(e))}catch(n){uc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ec(){}function tc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=nc(e).queue;$s(e,a,t,we,n===null?ec:function(){return rc(e),n(r)})}function nc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rc(e){var t=nc(e);t.next===null&&(t=e.alternate.memoizedState),uc(e,t.next.queue,{},jd())}function ic(){return Ta(sh)}function ac(){return ss().memoizedState}function oc(){return ss().memoizedState}function sc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=_o(n);var r=vo(t,e,n);r!==null&&(Pd(r,t,n),yo(r,t,n)),t={cache:Ma()},e.payload=t;return}t=t.return}}function cc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fc(e)?pc(t,n):(n=Oi(e,t,n,r),n!==null&&(Pd(n,e,r),mc(n,t,r)))}function lc(e,t,n){uc(e,t,n,jd())}function uc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gr(s,o))return Di(e,t,i,0),q===null&&Ei(),!1}catch{}if(n=Oi(e,t,i,r),n!==null)return Pd(n,e,r),mc(n,t,r),!0}return!1}function dc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(t)throw Error(i(479))}else t=Oi(e,n,r,2),t!==null&&Pd(t,e,2)}function fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function pc(e,t){Go=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xt(e,n)}}var hc={readContext:Ta,use:us,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo,useEffectEvent:Zo},gc={readContext:Ta,use:us,useCallback:function(e,t){return os().memoizedState=[e,t===void 0?null:t],e},useContext:Ta,useEffect:Bs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Rs(4194308,4,Ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=os();t=t===void 0?null:t;var r=e();if(Ko){it(!0);try{e()}finally{it(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=os();if(n!==void 0){var i=n(t);if(Ko){it(!0);try{n(t)}finally{it(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cc.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=os();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,n=lc.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){return Zs(os(),e,t)},useTransition:function(){var e=Ss(!1);return e=$s.bind(null,V,e.queue,!0,!1),os().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=os();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||_s(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Bs(ys.bind(null,r,o,e),[e]),r.flags|=2048,Is(9,{destroy:void 0},vs.bind(null,r,o,n,t),null),n},useId:function(){var e=os(),t=q.identifierPrefix;if(B){var n=Qi,r=Zi;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=qo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:js,useActionState:js,useOptimistic:function(e){var t=os();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dc.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return os().memoizedState=sc.bind(null,V)},useEffectEvent:function(e){var t=os(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},_c={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:ps,useRef:Ls,useState:function(){return ps(fs)},useDebugValue:Js,useDeferredValue:function(e,t){return Qs(ss(),H.memoizedState,e,t)},useTransition:function(){var e=ps(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){return Cs(ss(),H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us},vc={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:hs,useRef:Ls,useState:function(){return hs(fs)},useDebugValue:Js,useDeferredValue:function(e,t){var n=ss();return H===null?Zs(n,e,t):Qs(n,H.memoizedState,e,t)},useTransition:function(){var e=hs(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var n=ss();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Cs(n,H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us};function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=_o(n);r.tag=2,t!=null&&(r.callback=t),t=vo(e,r,n),t!==null&&(Pd(t,e,n),yo(t,e,n))}};function xc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(i,a):!0}function Sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Cc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function wc(e){Si(e)}function Tc(e){console.error(e)}function Ec(e){Si(e)}function Dc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){return n=_o(n),n.tag=3,n.payload={element:null},n.callback=function(){Dc(e,t)},n}function Ac(e){return e=_o(e),e.tag=3,e}function jc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Oc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Oc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Mc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=jo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mo===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(B)return t=jo.current,t===null?(r!==sa&&(t=Error(i(423),{cause:r}),ma(Ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ui(r,n),a=kc(e.stateNode,r,a),bo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&(e=Error(i(422),{cause:r}),ma(Ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ui(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=kc(n.stateNode,r,e),bo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ac(a),jc(a,e,n,r),bo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Nc=Error(i(461)),Pc=!1;function Fc(e,t,n,r){t.child=e===null?po(t,null,n,r):fo(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return wa(t),r=$o(e,t,n,o,a,i),s=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&s&&ta(t),t.flags|=1,Fc(e,t,r,i),t.child)}function Lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rc(e,t,a,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!dl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Kr:n,n(o,r)&&e.ref===t.ref)return ul(e,t,i)}return t.flags|=1,e=Fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Kr(a,r)&&e.ref===t.ref){if(Pc=!1,t.pendingProps=r=a,dl(e,i))e.flags&131072&&(Pc=!0);else return t.lanes=e.lanes,ul(e,t,i)}}return Kc(e,t,n,r,i)}function zc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qa(t,a===null?null:a.cachePool),a===null?ko():Oo(t,a),Fo(t);else return r=t.lanes=536870912,Vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&qa(t,null),ko(),Io()):(qa(t,a.cachePool),Oo(t,a),Io(),t.memoizedState=null);return Fc(e,t,i,n),t.child}function Bc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vc(e,t,n,r,i){var a=Ka();return a=a===null?null:{parent:ja._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&qa(t,null),ko(),Fo(t),e!==null&&Sa(e,t,r,!0),t.childLanes=i,null}function Hc(e,t){return t=tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uc(e,t,n){return fo(t,e.child,null,n),e=Hc(t,t.pendingProps),e.flags|=2,Lo(t),t.memoizedState=null,e}function Wc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=Hc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bc(null,e);if(Po(t),(e=z)?(e=am(e,oa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Po(t),a){if(t.flags&256)t.flags&=-257,t=Uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Pc||Sa(e,t,n,!1),a=(n&e.childLanes)!==0,Pc||a){if(Eo.current===null){if(r=q,r!==null&&(s=St(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ki(e,s),Pd(r,e,s),Nc;Kd()}t=Uc(e,t,n)}else e=o.treeContext,z=lm(s.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=Hc(t,r),t.flags|=134221824;return t}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kc(e,t,n,r,i){return wa(t),n=$o(e,t,n,r,void 0,i),r=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,i),t.child)}function qc(e,t,n,r,i,a){return wa(t),t.updateQueue=null,n=ts(t,r,n,i),es(e),r=rs(),e!==null&&!Pc?(is(e,t,a),ul(e,t,a)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,a),t.child)}function Jc(e,t,n,r,i){if(wa(t),t.stateNode===null){var a=ji,o=n.contextType;typeof o==`object`&&o&&(a=Ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=bc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ho(t),o=n.contextType,a.context=typeof o==`object`&&o?Ta(o):ji,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(yc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&bc.enqueueReplaceState(a,a.state,null),Co(t,r,a,i),So(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Cc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ji,typeof u==`object`&&u&&(o=Ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Sc(t,a,r,o),mo=!1;var f=t.memoizedState;a.state=f,Co(t,r,a,i),So(),l=t.memoizedState,s||f!==l||mo?(typeof d==`function`&&(yc(t,n,d,r),l=t.memoizedState),(c=mo||xc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,go(e,t),o=t.memoizedProps,u=Cc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ji,typeof l==`object`&&l&&(c=Ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Sc(t,a,r,c),mo=!1,f=t.memoizedState,a.state=f,Co(t,r,a,i),So();var p=t.memoizedState;o!==d||f!==p||mo||e!==null&&e.dependencies!==null&&Ca(e.dependencies)?(typeof s==`function`&&(yc(t,n,s,r),p=t.memoizedState),(u=mo||xc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=fo(t,e.child,null,i),t.child=fo(t,null,n,i)):Fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ul(e,t,i),e}function Yc(e,t,n,r){return fa(),t.flags|=256,Fc(e,t,n,r),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zc(e){return{baseLanes:e,cachePool:Ja()}}function Qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function $c(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Ro.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(B){if(i?No(t):Io(),(e=z)?(e=am(e,oa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Io(),i=t.mode,a=tl({mode:`hidden`,children:a},i),r=Ri(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Zc(n),r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(null,r)):(No(t),el(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return rl(e,t,a,o,r,c,s,n)}return i?(Io(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Fi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ri(i,a,n,null),i.flags|=2):i=Fi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Bc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Zc(n):(a=i.cachePool,a===null?a=Ja():(s=ja._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(e.child,r)):(No(t),n=e.child,e=n.sibling,n=Fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function el(e,t){return t=tl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function tl(e,t){return e=Ni(22,e,null,t),e.lanes=0,e}function nl(e,t,n){return fo(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(No(t),t.flags&=-257,nl(e,t,c)):t.memoizedState===null?(Io(),o=a.fallback,s=t.mode,a=tl({mode:`visible`,children:a.children},s),o=Ri(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,fo(t,e.child,null,c),a=t.child,a.memoizedState=Zc(c),a.childLanes=Qc(e,r,c),t.memoizedState=Xc,Bc(null,a)):(Io(),t.child=e.child,t.flags|=128,null);if(No(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ma({value:a,source:null,stack:null})),nl(e,t,c)}if(Pc||Sa(e,t,c,!1),r=(c&e.childLanes)!==0,Pc||r){if(Eo.current!==null)return nl(e,t,c);if(r=q,r!==null&&(a=St(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,ki(e,a),Pd(r,e,a),Nc;return om(o)||Kd(),nl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,z=lm(o.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=el(t,a.children),t.flags|=134221824,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ba(e.return,t,n)}function al(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Vo(n)===null&&(t=e),e=e.sibling}return t}function ol(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function sl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Ro.current;if(t.flags&128)return zo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,zo(t,o),i===`backwards`&&e!==null?(sl(e),Fc(e,t,r,n),sl(e)):Fc(e,t,r,n),r=B?qi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,sl(t)),ol(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,a,r);break;case`together`:ol(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,a,r)}return t.child}function ll(e,t,n){var r=t.pendingProps;return va(t,t.type,r.value),Fc(e,t,r.children,n),t.child}function ul(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ca(e)))}function fl(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),va(t,ja,e.memoizedState.cache),fa();break;case 27:case 5:Ne(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return No(t),t.flags|=128,null;r=Sa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?$c(e,t,n):(No(t),e=ul(e,t,n),e===null?null:e.sibling)}No(t);break;case 19:if(t.flags&128)return cl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return cl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),zo(t,Ro.current),r)break;return null;case 22:return t.lanes=0,zc(e,t,n,t.pendingProps);case 24:va(t,ja,e.memoizedState.cache)}return ul(e,t,n)}function pl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Pc=!0;else{if(!dl(e,n)&&!(t.flags&128))return Pc=!1,fl(e,t,n);Pc=!!(e.flags&131072)}}else Pc=!1,B&&t.flags&1048576&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=to(t.elementType),t.type=e,typeof e==`function`)Pi(e)?(r=Cc(e,r),t.tag=1,t=Jc(null,t,e,r,n)):(t.tag=0,t=Kc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===de){t.tag=11,t=Ic(null,t,e,r,n);break a}if(a===me){t.tag=14,t=Lc(null,t,e,r,n);break a}if(a===ue){t.tag=10,t.type=e,t=ll(null,t,n);break a}}throw t=Ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Kc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Cc(r,t.pendingProps),Jc(e,t,r,a,n);case 3:a:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,go(e,t),Co(t,r,null,n);var s=t.memoizedState;if(r=s.cache,va(t,ja,r),r!==o.cache&&xa(t,[ja],n,!0),So(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Yc(e,t,r,n);break a}if(r!==a){a=Ui(Error(i(424)),t),ma(a),t=Yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=lm(e.firstChild),ia=t,B=!0,aa=null,oa=!0,n=po(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(fa(),r===a){t=ul(e,t,n);break a}Fc(e,t,r,n)}t=t.child}return t;case 26:return Gc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(t.stateNode=fp(t.type,t.pendingProps,je.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ne(t),e===null&&B&&(r=t.stateNode=hm(t.type,t.pendingProps,je.current),ia=t,oa=!0,a=z,Sp(t.type)?(um=a,z=lm(r.firstChild)):z=a),Fc(e,t,t.pendingProps.children,n),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=rm(r,t.type,t.pendingProps,oa),r===null?a=!1:(t.stateNode=r,ia=t,z=lm(r.firstChild),oa=!1,a=!0)),a||ca(t)),Ne(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$o(e,t,ns,null,null,n),sh._currentValue=a),Gc(e,t),Fc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=im(n,t.pendingProps,oa),n===null?e=!1:(t.stateNode=n,ia=t,z=null,e=!0)),e||ca(t)),null;case 13:return $c(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fo(t,null,r,n):Fc(e,t,r,n),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Gc(e,t),Fc(e,t,r,n),t.child;case 8:return Fc(e,t,t.pendingProps.children,n),t.child;case 12:return Fc(e,t,t.pendingProps.children,n),t.child;case 10:return ll(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,wa(t),a=Ta(a),r=r(a),t.flags|=1,Fc(e,t,r,n),t.child;case 14:return Lc(e,t,t.type,t.pendingProps,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 19:return cl(e,t,n);case 31:return Wc(e,t,n);case 22:return zc(e,t,n,t.pendingProps);case 24:return wa(t),r=Ta(ja),e===null?(a=Ka(),a===null&&(a=q,o=Ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ho(t),va(t,ja,a)):((e.lanes&n)!==0&&(go(e,t),Co(t,null,null,n),So()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,va(t,ja,r),r!==a.cache&&xa(t,[ja],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),va(t,ja,r))),Fc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:B&&ta(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Gc(e,t),Fc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ml(e){e.flags|=4}function hl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw no=Qa,Xa}}else e.flags&=-16777217}function gl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw no=Qa,Xa}}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:gt(),e.lanes|=t,ud|=t)}function vl(e,t){if(!B)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ya(ja),j(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?ml(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pa())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ml(t),o===null?(U(t),hl(t,a,null,r,n)):(U(t),gl(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(ml(t),U(t),gl(t,o)):(e=e.memoizedProps,e!==r&&ml(t),U(t),hl(t,a,e,r,n)),null;case 27:if(Pe(t),n=je.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}e=ke.current,da(t)?la(t,e):(e=hm(a,r,n),t.stateNode=e,ml(t))}return U(t),t.subtreeFlags&=-33554433,null;case 5:if(Pe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}if(o=ke.current,da(t))la(t,o);else{var s=lp(je.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ot]=t,o[kt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ml(t)}}return U(t),t.subtreeFlags&=-33554433,hl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=je.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ia,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ot]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ca(t,!0)}else e=lp(e).createTextNode(r),e[Ot]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=da(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ot]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lo(t),t):(Lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ot]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Lo(t),t):(Lo(t),null)}return Lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),U(t),null);case 4:return j(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,U(t),null;case 10:return ya(t.type),U(t),null;case 19:if(Bo(t),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)vl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vo(e),o!==null){for(t.flags|=128,vl(r,!1),e=o.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ii(n,e),n=n.sibling;return zo(t,Ro.current&1|2),B&&$i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&qe()>gd&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),vl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!B)return U(t),null}else 2*qe()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=qe(),e.sibling=null,o=Ro.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||B?zo(t,o):(n=o,k(jo,t),k(Ro,n),Mo===null&&(Mo=t)),B&&$i(t,r.treeForkCount),e}return U(t),null;case 22:case 23:return Lo(t),Ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Oe(Ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(ja),U(t),null;case 25:return null;case 30:return t.flags|=33554432,U(t),null}throw Error(i(156,t.tag))}function bl(e,t){switch(na(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(ja),j(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pe(t),null;case 31:if(t.memoizedState!==null){if(Lo(t),t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Bo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return j(),null;case 10:return ya(t.type),null;case 22:case 23:return Lo(t),Ao(),e!==null&&Oe(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(ja),null;case 25:return null;default:return null}}function xl(e,t){switch(na(t),t.tag){case 3:ya(ja),j();break;case 26:case 27:case 5:Pe(t);break;case 4:j();break;case 31:t.memoizedState!==null&&Lo(t);break;case 13:Lo(t);break;case 19:Bo(t);break;case 10:ya(t.type);break;case 22:case 23:Lo(t),Ao(),e!==null&&Oe(Ga);break;case 24:ya(ja)}}function Sl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Cl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function wl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{To(t,n)}catch(t){Z(e,e.return,t)}}}function Tl(e,t,n){n.props=Cc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function El(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=yi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);f(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function W(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[kt]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=P)),Dl(e,r),N=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),N=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ot]=e,t[kt]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ql(e.child,t)),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=xi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=yi(r,n),a=xi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=xi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=xi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode);t=xi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function tu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&tu(e),e=e.sibling}function nu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:nu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ru(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=yi(n,r),a=xi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=nu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ru(e,t);e=e.sibling}}var iu=!1,G=!1,au=!1,ou=!1,su=typeof WeakSet==`function`?WeakSet:Set,cu=null,lu=!1,uu=!1,du=!1,fu=!1;function pu(e,t,n){if(e=e.containerInfo,sp=gh,e=Xr(e),Zr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,cu=t,t=n?9270:1024;cu!==null;){if(e=cu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),mu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),mu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),mu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,cu=r):(n&&Ql(e),mu(n))}}Bl=null}function mu(e){for(;cu!==null;){var t=cu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Cc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=yi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=xi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,cu=r;break}cu=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&Sl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Cc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&wl(n),r&512&&El(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{To(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Ml(n),r&512&&El(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||iu,!r){var a=t!==null&&t.memoizedState!==null||G;t=iu,i=G,iu=r,(G=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),iu=t,G=i}break;case 30:Fu(e,n),r&512&&El(n,n.return);break;case 7:r&512&&El(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,N=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount==`function`)try{rt.onCommitFiberUnmount(nt,n)}catch{}switch(n.tag){case 26:G||W(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!G&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:G||W(n,t),kl(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:G||W(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),N=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Cl(2,n,t),G||Cl(4,n,t),Su(e,t,n);break;case 1:G||(W(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Tl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:G=(r=G)||n.memoizedState!==null,Su(e,t,n),G=r;break;case 30:W(n,t),Su(e,t,n);break;case 7:G||W(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new su),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Cl(3,e,e.return),Sl(3,e),Cl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(G||r===null||W(r,r.return)),a&64&&iu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(G||r===null||W(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(iu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ft]||r[Ot]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ot]=e,Ht(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ot]=e,Ht(r),t=r}e.stateNode=t}}else iu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||G||t.parentNode.removeChild(t)):a.count--,n===null?iu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(G||r===null||W(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=au,au=!1,Ou(t,e,n),au=o,ju(e),a&512&&(G||r===null||W(r,r.return)),e.flags&32){t=e.stateNode;try{gn(t,``),N=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ou=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,N=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(N=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}ou&&(ou=!1,Mu(e)),N=!1;break;case 4:a=au,au=iu,r=Qt(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,N&&uu&&(du=!0),N=r,au=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=qe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=iu,l=G,u=au;iu=c||o,au=u||o,G=l||s,Ou(t,e,n),G=l,au=u,iu=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||iu||G||(t=s||G,n=iu,r=G,iu=o||iu,G=t,Iu(e,2),iu=n,G=r),!o&&au||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(G||r===null||W(r,r.return)),a=Qt(),o=uu,s=(n&335544064)===n,c=e.memoizedProps,uu=s&&xi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&N&&(e.flags|=4),uu=o,N=a;break;case 21:break;case 7:a&512&&(G||r===null||W(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(gn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else ru(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(fu=lu=!1,Ul(),Nu(t,e),!lu&&!du){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),fu=!0}Hl=null;break;case 5:Nu(t,e);break;case 4:r=lu,lu=!1,Nu(t,e),lu&&(du=!0),lu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Yl(e,!1));break;case 30:r=lu,i=Ul(),lu=!1,Nu(t,e),lu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=yi(a,o),o=yi(n.memoizedProps,o);var s=xi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=nu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),lu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Cl(4,n,n.return),Iu(n,r);break;case 1:W(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Tl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:W(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Iu(n,r);break;case 6:kl(n);break;case 26:W(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||G||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:W(n,n.return),Iu(n,r);break;case 7:W(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),Sl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)wo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&wl(a),El(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),El(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||iu||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),El(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),El(a,a.return);break;case 30:Lu(i,a,n),El(a,a.return);break;case 7:El(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Na(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Na(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&tu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&Sl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&fu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Na(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),Sl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;cu!==null;){var n=cu;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cu=r;else a:for(n=e;cu!==null;){r=cu;var i=r.sibling,a=r.return;if(yu(r),r===n){cu=null;break a}if(i!==null){i.return=a,cu=i;break a}cu=a}}}var Qu={getCacheForType:function(e){var t=Ta(ja),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ta(ja).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:D.T===null?Tt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||B){var e=ut;ut<<=1,!(ut&3932160)&&(ut=262144),ld=e}else ld=536870912}return e=jo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(yi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),vt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||pt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-qe(),10<a)){if(Rd(r,t,ld,!td),ft(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:P},Bl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-qe():(a&4194048)===a?hd-qe():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=mt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-at(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&bt(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,_a=ga=null,as(e),ao=null,oo=0,e=J;for(;e!==null;)xl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Fi(e.current,null),Y=t,X=0,ed=null,td=!1,nd=pt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=mt(e,t),Ei(),n}function Hd(e,t){V=null,D.H=hc,t===Ya||t===Za?(t=ro(),X=3):t===Xa?(t=ro(),X=4):X=t===Nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Dc(e,Ui(t,e.current)))}function Ud(){var e=jo.current;return e===null?!0:(Y&4194048)===Y?Mo===null:(Y&62914560)===Y||Y&536870912?e===Mo:!1}function Wd(){var e=D.H;return D.H=hc,e===null?hc:e}function Gd(){var e=D.A;return D.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&jo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:jo.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,_a=ga=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,Ei()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=qe()+500,Vd(e,t)):nd=pt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if($a(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:$a(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return _a=ga=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,Ei(),ad):0}function Xd(){for(;J!==null&&!Ge();)Zd(J)}function Zd(e){var t=pl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=qc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:as(t);var r=t;r===ia&&(B?(ua(r),r.tag===5&&r.stateNode!=null&&(z=r.stateNode)):(ua(r),B=!0));default:xl(n,t),t=J=Ii(t,id),t=pl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){_a=ga=null,as(t),ao=null,oo=0;var i=t.return;try{if(Mc(e,i,t,n,Y)){ad=1,Dc(e,Ui(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Dc(e,Ui(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=jo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=yl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=bl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ti,yt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ia(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ze,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,a=K,K|=4;try{pu(e,t,n)}finally{K=a,O.p=i,D.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=D.T,D.T=null;var i=O.p;O.p=2;var a=K;K|=4;try{uu=du=!1,Au(t,e,n),n=cp;var o=Xr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&I(s.ownerDocument.documentElement,s)){if(c!==null&&Zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Yr(s,h),v=Yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,O.p=i,D.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ke();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),wt(r),n=n.stateNode,rt&&typeof rt.onCommitFiberRoot==`function`)try{rt.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=D.T,a=O.p,O.p=2,D.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{D.T=n,O.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Na(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=wt(Sd),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),rt&&typeof rt.onPostCommitFiberRoot==`function`)try{rt.onPostCommitFiberRoot(nt,o)}catch{}return!0}finally{O.p=a,D.T=r,uf(e,t)}}function pf(e,t,n){t=Ui(n,t),t=kc(e.stateNode,t,2),e=vo(e,t,2),e!==null&&(vt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Ui(n,e),n=Ac(2),r=vo(t,n,2),r!==null&&(jc(n,r,t,e),vt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>qe()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=gt()),e=ki(e,t),e!==null&&(vt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ue(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-at(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ft(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||pt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=qe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-at(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ft(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&We(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||pt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&We(r),wt(n)){case 2:case 8:n=Xe;break;case 32:n=Ze;break;case 268435456:n=$e;break;default:n=Ze}return r=jf.bind(null,e),n=Ue(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&We(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ft(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,qe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Ue(Ye,Of):kf()})}function Pf(){if(Tf===0){var e=za;e===0&&(e=lt,lt<<=1,!(lt&261888)&&(lt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Cn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[kt]||null).action),o=r.submitter;o&&(t=(t=o[kt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);tc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),tc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<gi.length;Lf++){var Rf=gi[Lf];_i(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}_i(ci,`onAnimationEnd`),_i(li,`onAnimationIteration`),_i(ui,`onAnimationStart`),_i(`dblclick`,`onDoubleClick`),_i(`focusin`,`onFocus`),_i(`focusout`,`onBlur`),_i(di,`onTransitionRun`),_i(fi,`onTransitionStart`),_i(pi,`onTransitionCancel`),_i(mi,`onTransitionEnd`),qt(`onMouseEnter`,[`mouseout`,`mouseover`]),qt(`onMouseLeave`,[`mouseout`,`mouseover`]),qt(`onPointerEnter`,[`pointerout`,`pointerover`]),qt(`onPointerLeave`,[`pointerout`,`pointerover`]),Kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[jt];n===void 0&&(n=t[jt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Wt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Nn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Rt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}An(function(){var r=a,i=Tn(n),s=[];a:{var c=hi.get(e);if(c!==void 0){var l=Wn,u=e;switch(e){case`keypress`:if(zn(n)===0)break a;case`keydown`:case`keyup`:l=cr;break;case`focusin`:u=`focus`,l=$n;break;case`focusout`:u=`blur`,l=$n;break;case`beforeblur`:case`afterblur`:l=$n;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=dr;break;case ci:case li:case ui:l=er;break;case mi:l=fr;break;case`scroll`:case`scrollend`:l=Kn;break;case`wheel`:l=pr;break;case`copy`:case`cut`:case`paste`:l=tr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=lr;break;case`submit`:l=ur;break;case`toggle`:case`beforetoggle`:l=mr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=jn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==wn&&(u=n.relatedTarget||n.fromElement)&&(Rt(u)||u[At]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Rt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=lr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Bt(c),h=l==null?u:Bt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Rt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Pr;else if(Or(c)){if(Fr)_=Ur;else{_=F;var v=Vr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&bn(r.elementType)&&(_=Pr):_=Hr;if(_&&=_(e,r)){kr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Bt(r):window,e){case`focusin`:(Or(v)||v.contentEditable===`true`)&&(Qr=v,$r=r,ei=null);break;case`focusout`:ei=$r=Qr=null;break;case`mousedown`:ti=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ti=!1,ni(s,n,i);break;case`selectionchange`:if(L)break;case`keydown`:case`keyup`:ni(s,n,i)}var y;if(gr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else wr?Sr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(yr&&n.locale!==`ko`&&(wr||b!==`onCompositionStart`?b===`onCompositionEnd`&&wr&&(y=Rn()):(Fn=i,In=`value`in Fn?Fn.value:Fn.textContent,wr=!0)),v=Jf(r,b),0<v.length&&(b=new nr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Cr(n),y!==null&&(b.data=y)))),(y=vr?Tr(e,n):Er(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new nr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=jn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=jn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=jn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=jn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&gn(e,``+r);else return;break;case`className`:en(e,`class`,r);break;case`tabIndex`:en(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:en(e,n,r);break;case`style`:yn(e,r,o);return;case`data`:if(t!==`object`){en(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=P);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Cn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),$t(e,`popover`,r);break;case`xlinkActuate`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:tn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:tn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:$t(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=xn.get(n)||n,$t(e,n,r);else return}N=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:yn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)gn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=P);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Gt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[kt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}N=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):$t(e,n,r)}return}N=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}dn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&pn(e,!!r,n,!0):pn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}hn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(bn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(N=!0),o=m;break;case`name`:m!==f&&(N=!0),a=m;break;case`checked`:m!==f&&(N=!0),u=m;break;case`defaultChecked`:m!==f&&(N=!0),d=m;break;case`value`:m!==f&&(N=!0),s=m;break;case`defaultValue`:m!==f&&(N=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}un(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(N=!0),p=o;break;case`defaultValue`:o!==l&&(N=!0),c=o;break;case`multiple`:o!==l&&(N=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?pn(e,!!n,n?[]:``,!1):pn(e,!!n,t,!0)):pn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(N=!0),p=a;break;case`defaultValue`:a!==o&&(N=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}mn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(N=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(bn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ot]=r,n[kt]=t,np(n,e,t),Ht(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),f(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),f(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){f(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];f(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=m(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&f(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),f(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),f(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return f(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];f(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,g(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=g(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Rt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=m(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(f(t,!0,x,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(f(t,!0,S,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];f(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Lt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===P&&(e.onclick=null),Lt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=O.d;O.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=zt(e);t!==null&&t.tag===5&&t.type===`form`?rc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=ln(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Ht(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+ln(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+ln(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+ln(n.imageSizes)+`"]`)):i+=`[href="`+ln(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[It]=!0,o.onload=o.onerror=function(){Ut(o)}),Ht(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+ln(r)+`"][href="`+ln(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Ht(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Vt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Ht(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Vt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ht(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Vt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ht(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=je.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Vt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Vt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Vt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+ln(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[It]){r.loading=1;return}}else t=e.createElement(`link`),t[It]=!0,t.onload=t.onerror=Ut.bind(null,t),np(t,`link`,n),Ht(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+ln(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+ln(n.href)+`"]`);if(r)return t.instance=r,Ht(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ht(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Ht(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Ht(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Ht(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ht(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ft]||a[Ot]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ht(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Ht(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ue,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.hiddenUpdates=_t(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ni(3,null,null,t),e.current=a,a.stateNode=e,t=Ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ho(a),e}function uh(e){return e?(e=ji,e):ji}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=_o(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=vo(e,r,t),n!==null&&(Pd(n,e,t),yo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ki(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Ct(t);var n=ki(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function vh(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=zt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=dt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-at(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=qe()+500,Df(0,!1))}}break;case 31:case 13:s=ki(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Tn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Rt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Je()){case Ye:return 2;case Xe:return 8;case Ze:case Qe:return 32;case $e:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=zt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Rt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Et(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wn=r,n.target.dispatchEvent(r),wn=null}else return t=zt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=zt(n);a!==null&&(e.splice(t,3),t-=3,tc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[kt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[kt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[At]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{nt=Jh.inject(qh),rt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=wc,s=Tc,c=Ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[At]=t.current,Wf(e),new Wh(t)},e.hydrateRoot=function(e,t,n){if(!a(e))throw Error(i(299));var r=!1,o=``,s=wc,c=Tc,l=Ec,u=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=lh(e,1,!0,t,n??null,r,o,u,s,c,l,Uh),t.context=uh(null),n=t.current,r=jd(),r=Ct(r),o=_o(r),o.callback=null,vo(n,o,r),n=r,t.current.lanes=n,vt(t,n),Ef(t),e[At]=t.current,Wf(e),new Gh(t)}})),y=s(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=s((e=>{var t=p();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),ee=s(((e,t)=>{t.exports=b()})),te=h(),x=y(),S=u(p(),1),C=ee();function ne(e){e()}function w(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ne(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){r&&e!==null&&(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var re={notify(){},get:()=>[]};function ie(e,t){let n,r=re,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=w())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=re)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var ae=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,oe=typeof navigator<`u`&&navigator.product===`ReactNative`,se=ae||oe?S.useLayoutEffect:S.useEffect,ce=Symbol.for(`react-redux-context`),le=typeof globalThis<`u`?globalThis:{};function ue(){if(!S.createContext)return{};let e=le[ce]??=new Map,t=e.get(S.createContext);return t||(t=S.createContext(null),e.set(S.createContext,t)),t}var de=ue();function fe(e){let{children:t,context:n,serverState:r,store:i}=e,a=S.useMemo(()=>{let e=ie(i);return{store:i,subscription:e,getServerState:r?()=>r:void 0}},[i,r]),o=S.useMemo(()=>i.getState(),[i]);se(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||de;return S.createElement(s.Provider,{value:a},t)}var pe=fe;function me(e=de){return function(){return S.useContext(e)}}var he=me();function ge(e=de){let t=e===de?he:me(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var _e=ge();function ve(e=de){let t=e===de?_e:ge(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ye=ve(),be=(e,t)=>e===t;function xe(e=de){let t=e===de?he:me(e),n=(e,n={})=>{let{equalityFn:r=be}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();S.useRef(!0);let s=S.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,C.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return S.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Se=xe(),T,Ce,E,D,O,we,Te,Ee,De,Oe,k=o((()=>{T=`-ms-`,Ce=`-moz-`,E=`-webkit-`,D=`comm`,O=`rule`,we=`decl`,Te=`@import`,Ee=`@namespace`,De=`@keyframes`,Oe=`@layer`}));function ke(e,t){return j(e,0)^45?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function Ae(e){return e.trim()}function je(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Me(e,t,n){return e.indexOf(t,n)}function j(e,t){return e.charCodeAt(t)|0}function Ne(e,t,n){return e.slice(t,n)}function Pe(e){return e.length}function Fe(e){return e.length}function Ie(e,t){return t.push(e),e}function Le(e,t){return e.map(t).join(``)}function Re(e,t){return e.filter(function(e){return!je(e,t)})}var ze,Be,Ve,He=o((()=>{ze=Math.abs,Be=String.fromCharCode,Ve=Object.assign}));function Ue(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:st,column:ct,length:o,return:``,siblings:s}}function We(e,t){return Ve(Ue(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ge(e){for(;e.root;)e=We(e.root,{children:[e]});Ie(e,e.siblings)}function Ke(){return M}function qe(){return M=ut>0?j(dt,--ut):0,ct--,M===10&&(ct=1,st--),M}function Je(){return M=ut<lt?j(dt,ut++):0,ct++,M===10&&(ct=1,st++),M}function Ye(){return j(dt,ut)}function Xe(){return ut}function Ze(e,t){return Ne(dt,e,t)}function Qe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $e(e){return st=ct=1,lt=Pe(dt=e),ut=0,[]}function et(e){return dt=``,e}function tt(e){return Ae(Ze(ut-1,it(e===91?e+2:e===40?e+1:e)))}function nt(e){for(;(M=Ye())&&M<33;)Je();return Qe(e)>2||Qe(M)>3?``:` `}function rt(e,t){for(;--t&&Je()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return Ze(e,Xe()+(t<6&&Ye()==32&&Je()==32))}function it(e){for(;Je();)switch(M){case e:return ut;case 34:case 39:e!==34&&e!==39&&it(M);break;case 40:e===41&&it(e);break;case 92:Je()}return ut}function at(e,t){for(;Je()&&e+M!==57&&(e+M!==84||Ye()!==47););return`/*`+Ze(t,ut-1)+`*`+Be(e===47?e:Je())}function ot(e){for(;!Qe(Ye());)Je();return Ze(e,ut)}var st,ct,lt,ut,M,dt,ft=o((()=>{He(),st=1,ct=1,lt=0,ut=0,M=0,dt=``}));function pt(e){return et(mt(``,null,null,null,[``],e=$e(e),0,[0],e))}function mt(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,ee=a,te=r,x=y;g;)switch(m=v,v=Je()){case 40:if(m!=108&&j(x,d-1)==58){Me(x+=A(tt(v),`&`,`&\f`),`&\f`,ze(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:x+=tt(v);break;case 9:case 10:case 13:case 32:x+=nt(m);break;case 92:x+=rt(Xe()-1,7);continue;case 47:switch(Ye()){case 42:case 47:Ie(gt(at(Je(),Xe()),t,n,c),c),(Qe(m||1)==5||Qe(Ye()||1)==5)&&Pe(x)&&Ne(x,-1,void 0)!==` `&&(x+=` `);break;default:x+=`/`}break;case 123*h:s[l++]=Pe(x)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(x=A(x,/\f/g,``)),p>0&&(Pe(x)-d||h===0&&m===47)&&Ie(p>32?_t(x+`;`,r,n,d-1,c):_t(A(x,` `,``)+`;`,r,n,d-2,c),c);break;case 59:x+=`;`;default:if(Ie(te=ht(x,t,n,l,u,i,s,y,b=[],ee=[],d,a),a),v===123){if(u===0)mt(x,t,te,te,b,a,d,s,ee);else{switch(f){case 99:if(j(x,3)===110)break;case 108:if(j(x,2)===97)break;default:u=0;case 100:case 109:case 115:}u?mt(e,te,te,r&&Ie(ht(e,te,te,0,0,i,s,y,i,b=[],d,ee),ee),i,ee,d,s,r?b:ee):mt(x,te,te,te,[``],ee,0,s,ee)}}}l=u=p=0,h=_=1,y=x=``,d=o;break;case 58:d=1+Pe(x),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&qe()==125)continue}switch(x+=Be(v),v*h){case 38:_=u>0?1:(x+=`\f`,-1);break;case 44:s[l++]=(Pe(x)-1)*_,_=1;break;case 64:Ye()===45&&(x+=tt(Je())),f=Ye(),u=d=Pe(y=x+=ot(Xe())),v++;break;case 45:m===45&&Pe(x)==2&&(h=0)}}return a}function ht(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=Fe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=Ne(e,f+1,f=ze(g=o[h])),b=e;v<m;++v)(b=Ae(g>0?p[v]+` `+y:A(y,/&\f/g,p[v])))&&(c[_++]=b);return Ue(e,t,n,i===0?O:s,c,l,u,d)}function gt(e,t,n,r){return Ue(e,t,n,D,Be(Ke()),Ne(e,2,-2),0,r)}function _t(e,t,n,r,i){return Ue(e,t,n,we,Ne(e,0,r),Ne(e,r+1,-1),r,i)}var vt=o((()=>{k(),He(),ft()}));function yt(e,t,n){switch(ke(e,t)){case 5103:return E+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return E+e+e;case 4855:return E+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+Ce+e+T+e+e;case 5936:switch(j(e,t+11)){case 114:return E+e+T+A(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return E+e+T+A(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return E+e+T+A(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return E+e+T+e+e;case 6165:return E+e+T+`flex-`+e+e;case 5187:return E+e+A(e,/(\w+).+(:[^]+)/,E+`box-$1$2`+T+`flex-$1$2`)+e;case 5443:return E+e+T+`flex-item-`+A(e,/flex-|-self/g,``)+(je(e,/flex-|baseline/)?``:T+`grid-row-`+A(e,/flex-|-self/g,``))+e;case 4675:return E+e+T+`flex-line-pack`+A(e,/align-content|flex-|-self/g,``)+e;case 5548:return E+e+T+A(e,`shrink`,`negative`)+e;case 5292:return E+e+T+A(e,`basis`,`preferred-size`)+e;case 6060:return E+`box-`+A(e,`-grow`,``)+E+e+T+A(e,`grow`,`positive`)+e;case 4554:return E+A(e,/([^-])(transform)/g,`$1`+E+`$2`)+e;case 6187:return A(A(A(e,/(zoom-|grab)/,E+`$1`),/(image-set)/,E+`$1`),e,``)+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,E+`box-pack:$3`+T+`flex-pack:$3`),/space-between/,`justify`)+E+e+e;case 4200:if(!je(e,/flex-|baseline/))return T+`grid-column-align`+Ne(e,t)+e;break;case 2592:case 3360:return T+A(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,je(e.props,/grid-\w+-end/)})?~Me(e+(n=n[t].value),`span`,0)?e:T+A(e,`-start`,``)+e+T+`grid-row-span:`+(~Me(n,`span`,0)?je(n,/\d+/):+je(n,/\d+/)-je(e,/\d+/))+`;`:T+A(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return je(e.props,/grid-\w+-start/)})?e:T+A(A(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,E+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(e)-1-t>6)switch(j(e,t+1)){case 109:if(j(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,`$1`+E+`$2-$3$1`+Ce+(j(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Me(e,`stretch`,0)?yt(A(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return T+n+`:`+r+s+(i?T+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(j(e,t+6)===121)return A(e,`:`,`:`+E)+e;break;case 6444:switch(j(e,j(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+E+(j(e,14)===45?`inline-`:``)+`box$3$1`+E+`$2$3$1`+T+`$2box$3`)+e;case 100:return A(e,`:`,`:`+T)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,`scroll-`,`scroll-snap-`)+e}return e}var bt=o((()=>{k(),He()}));function xt(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function St(e,t,n,r){switch(e.type){case Oe:if(e.children.length)break;case Te:case Ee:case we:return e.return=e.return||e.value;case D:return``;case De:return e.return=e.value+`{`+xt(e.children,r)+`}`;case O:if(!Pe(e.value=e.props.join(`,`)))return``}return Pe(n=xt(e.children,r))?e.return=e.value+`{`+n+`}`:``}var Ct=o((()=>{k(),He()}));function wt(e){var t=Fe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Tt(e){return function(t){t.root||(t=t.return)&&e(t)}}function Et(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case we:e.return=yt(e.value,e.length,n);return;case De:return xt([We(e,{value:A(e.value,`@`,`@`+E)})],r);case O:if(e.length)return Le(n=e.props,function(t){switch(je(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ge(We(e,{props:[A(t,/:(read-\w+)/,`:`+Ce+`$1`)]})),Ge(We(e,{props:[t]})),Ve(e,{props:Re(n,r)});break;case`::placeholder`:Ge(We(e,{props:[A(t,/:(plac\w+)/,`:`+E+`input-$1`)]})),Ge(We(e,{props:[A(t,/:(plac\w+)/,`:`+Ce+`$1`)]})),Ge(We(e,{props:[A(t,/:(plac\w+)/,T+`input-$1`)]})),Ge(We(e,{props:[t]})),Ve(e,{props:Re(n,r)})}return``})}}var Dt=o((()=>{k(),He(),ft(),Ct(),bt()})),Ot=o((()=>{k(),He(),vt(),bt(),ft(),Ct(),Dt()})),kt=c({ServerStyleSheet:()=>Gr,StyleSheetConsumer:()=>Pr,StyleSheetContext:()=>Nr,StyleSheetManager:()=>sn,ThemeConsumer:()=>Ir,ThemeContext:()=>Fr,ThemeProvider:()=>ln,__PRIVATE__:()=>Kr,createGlobalStyle:()=>hn,createTheme:()=>vn,css:()=>pn,default:()=>F,isStyledComponent:()=>Ht,keyframes:()=>yn,styled:()=>F,stylisPluginRSC:()=>Cn,useTheme:()=>cn,version:()=>Dn,withTheme:()=>bn});function At(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}function jt(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}function Mt(e,t,n=Bn){return e.theme!==n.theme&&e.theme||t||n.theme}function Nt(e){return e.replace(Vn,`-`).replace(Hn,``)}function Pt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=Wn(t%52)+n;return(Wn(t%52)+n).replace(Un,`$1-$2`)}function Ft(e){return Pt(qn(e)>>>0)}function It(e){return e.displayName||e.name||`Component`}function Lt(e){return typeof e==`string`&&!0}function Rt(e){return Lt(e)?`styled.${e}`:`Styled(${It(e)})`}function zt(e){return(`type`in(t=e)&&t.type.$$typeof)===Jn?Qn:`$$typeof`in e?$n[e.$$typeof]:Xn;var t}function Bt(e,t,n){if(typeof t!=`string`){let r=ir(t);r&&r!==ar&&Bt(e,r,n);let i=tr(t).concat(nr(t)),a=zt(e),o=zt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Zn||n&&n[s]||o&&s in o||a&&s in a)){let n=rr(t,s);try{er(e,s,n)}catch{}}}}return e}function Vt(e){return typeof e==`function`}function Ht(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===or&&`styledComponentId`in e}function Ut(e,t){return e&&t?e+` `+t:e||t||``}function Wt(e,t){return e.join(t||``)}function Gt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Kt(e,t,n=!1){if(!n&&!Gt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Kt(e[n],t[n]);else if(Gt(t))for(let n in t)e[n]=Kt(e[n],t[n]);return e}function qt(e,t){Object.defineProperty(e,"toString",{value:t})}function Jt(){if(!1!==hr)return hr;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return hr=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return hr=t.getAttribute(`content`)||void 0}return hr=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}function Yt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Cr||e.startsWith(`--`)?String(t).trim():t+`px`}function Xt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}function Zt(e){return typeof e==`object`&&!!e&&Tr in e}function N(e){return Vt(e)&&!(e.prototype&&e.prototype.isReactComponent)}function Qt(e){return e.$$typeof===Dr}function $t(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Er(r)&&(Array.isArray(r)&&Sr.has(r)||Vt(r)?t.push(Xt(n)+`:`,r,`;`):Gt(r)?(t.push(n+` {`),$t(r,t),t.push(`}`)):t.push(Xt(n)+`: `+Yt(n,r)+`;`))}}function en(e,t,n,r,i=[]){if(Er(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Qt(e)?i:N(e)&&t?en(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)en(e[a],t,n,r,i);return i}return Ht(e)?(i.push(`.${e.styledComponentId}`),i):Zt(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Qt(e)?i:Gt(e)&&e.toString===Object.prototype.toString?($t(e,i),i):(i.push(e.toString()),i)}function tn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function nn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==wr||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===wr&&(o=!1,c++);else if(l!==34&&l!==39||tn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function rn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&rn(a.children,t)}return e}function an({options:e=Bn,plugins:t=zn}=Bn){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Ar,r).replace(i,a))}),e.prefix&&o.push(Et),o.push(St);let s=[],c=wt(o.concat(Tt(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return nn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||tn(e,o)){if(s===0){if(t===wr&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==wr);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===wr)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===wr&&o+1<r&&e.charCodeAt(o+1)===wr){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:nn(i)):l===0?e:nn(e)}(t),d=pt(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=rn(d,e.namespace)),s=[],xt(d,c),s},u=e,d=Gn;for(let e=0;e<t.length;e++)t[e].name||jt(15),d=Kn(d,t[e].name);return u!=null&&u.namespace&&(d=Kn(d,u.namespace)),u!=null&&u.prefix&&(d=Kn(d,`p`)),l.hash=d===Gn?``:d.toString(),l}function on(){return P.useContext(Nr)}function sn(e){let t=on(),{styleSheet:n}=t,r=P.useMemo(()=>{let t=n;return e.sheet?t=e.sheet:e.target?t=t.reconstructWithOptions(e.nonce===void 0?{target:e.target}:{target:e.target,nonce:e.nonce},!1):e.nonce!==void 0&&(t=t.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,n]),i=P.useMemo(()=>e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?t.stylis:an({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins??t.stylisPlugins}),[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,t.stylis,t.stylisPlugins]),a=`shouldForwardProp`in e?e.shouldForwardProp:t.shouldForwardProp,o=e.stylisPlugins??t.stylisPlugins,s=P.useMemo(()=>({shouldForwardProp:a,styleSheet:r,stylis:i,stylisPlugins:o}),[a,r,i,o]);return P.createElement(Nr.Provider,{value:s},e.children)}function cn(){let e=P.useContext(Fr);if(!e)throw jt(18);return e}function ln(e){let t=P.useContext(Fr),n=P.useMemo(()=>function(e,t){if(!e)throw jt(14);if(Vt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw jt(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?P.createElement(Fr.Provider,{value:n},e.children):null}function un(e,t){let n=typeof e==`string`?Nt(e):`sc`;Rr[n]=(Rr[n]||0)+1;let r=n+`-`+Ft(Dn+n+Rr[n]);return t?t+`-`+r:r}function dn(e,t,n){let r=Ht(e),i=e,a=!Lt(e),{attrs:o=zn,componentId:s=un(t.displayName,t.parentComponentId),displayName:c=Rt(e)}=t,l=t.displayName&&t.componentId?Nt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new kr(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=P.useContext(Fr),u=on(),d=e.shouldForwardProp||u.shouldForwardProp,f=Mt(t,l,a)||Bn,p,m;{let e=P.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Lr.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Vt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Ut(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Ut(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Lr.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Ut(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[Lt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,P.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=P.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ut(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Kt(e,n,!0);return e}({},i.defaultProps,e):e}}),qt(m,()=>`.${m.styledComponentId}`),a&&Bt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function fn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}function pn(e,...t){if(Vt(e)||Gt(e))return Br(en(fn(zn,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?en(n):Br(en(fn(n,t)))}function mn(e,t,n=Bn){if(!t)throw jt(1,t);let r=(r,...i)=>e(t,n,pn(r,...i));return r.attrs=r=>mn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>mn(e,t,Object.assign(Object.assign({},n),r)),r}function hn(e,...t){let n=pn(e,...t),r=`sc-global-${Ft(JSON.stringify(n))}`,i=new Hr(n,r),a=e=>{let t=on(),n=P.useContext(Fr),a;{let e=P.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=P.useRef(i);P.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),P.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Mn,n,o);else{let s=Object.assign(Object.assign({},t),{theme:Mt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return P.memo(a)}function gn(e,t,n,r,i){for(let a in e){let o=e[a],s=i?i+`-`+a:a;if(typeof o==`object`&&o){let e={};gn(o,t,e,r,s),n[a]=e}else n[a]=r(s,o,a)}}function _n(e,t,n,r){let i=``;for(let a in e){let o=e[a],s=t[a],c=r?r+`-`+a:a;typeof o==`object`&&o?typeof s==`object`&&s&&(i+=_n(o,s,n,c)):s!==void 0&&typeof s!=`function`&&(i+=`--`+n+c+`:`+s+`;`)}return i}function vn(e,t){let n=(t?.prefix??`sc`)+`-`,r=t?.selector??`:root`,i=function(e,t){let n={};return gn(e,t,n,e=>`--`+t+e),n}(e,n),a=function(e,t){let n={};return gn(e,t,n,(e,n)=>`var(--`+t+e+`, `+n+`)`),n}(e,n),o=hn`
    ${r} {
      ${t=>_n(e,t.theme,n)}
    }
  `;return Object.assign(a,{GlobalStyle:o,raw:e,vars:i,resolve(t){if(!kn)throw Error(`createTheme.resolve() is client-only`);let r=t??document.documentElement;return function(e,t,n){let r={};return gn(e,t,r,(e,r)=>n.getPropertyValue(`--`+t+e).trim()||r),r}(e,n,getComputedStyle(r))}})}function yn(e,...t){let n=Wt(pn(e,...t)),r=Ft(n);return new Wr(r,n)}function bn(e){let t=P.forwardRef((t,n)=>{let r=Mt(t,P.useContext(Fr),e.defaultProps);return P.createElement(e,Object.assign(Object.assign({},t),{theme:r,ref:n}))});return t.displayName=`WithTheme(${It(e)})`,Bt(t,e)}function xn(e){return e.indexOf(`-child`)===-1?e:(qr.lastIndex=0,e.replace(qr,(e,t,n,r,i,a,o,s)=>t?`:nth-child(1 of ${Jr})`:n?`:nth-last-child(1 of ${Jr})`:r?`:nth-child(1 of ${Jr}):nth-last-child(1 of ${Jr})`:i?a.indexOf(` of `)===-1?`:nth-child(${a} of ${Jr})`:e:s.indexOf(` of `)===-1?`:nth-last-child(${s} of ${Jr})`:e))}function Sn(e,t){if(e.indexOf(`+`)===-1)return;let n=0,r=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);if(a===40)n++;else if(a===41)n--;else if(a===91)r++;else if(a===93)r--;else if(a===43&&n===0&&r===0&&!tn(e,i)){let n=e.substring(0,i),r=e.substring(i+1);t.push(n+`+`+Yr+`+`+r),t.push(n+`+`+Yr+`+`+Yr+`+`+r)}}}function Cn(e){if(e.type===`rule`){let t=e.props,n=[];for(let e=0;e<t.length;e++){let r=xn(t[e]);n.push(r),Sn(r,n)}e.props=n}}var P,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,F,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,I=o((()=>{P=u(p()),Ot(),wn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Tn=`active`,En=`data-styled-version`,Dn=`6.5.3`,On=`/*!sc*/
`,kn=typeof window<`u`&&typeof document<`u`,An=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:At(`REACT_APP_SC_DISABLE_SPEEDY`)??At(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),jn=`sc-keyframes-`,Mn={},Nn=new Map,Pn=new Map,Fn=1,In=e=>{if(Nn.has(e))return Nn.get(e);for(;Pn.has(Fn);)Fn++;let t=Fn++;return Nn.set(e,t),Pn.set(t,e),t},Ln=e=>Pn.get(e),Rn=(e,t)=>{Fn=t+1,Nn.set(e,t),Pn.set(t,e)},zn=Object.freeze([]),Bn=Object.freeze({}),Vn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hn=/(^-|-$)/g,Un=/(a)(d)/gi,Wn=e=>String.fromCharCode(e+(e>25?39:97)),Gn=5381,Kn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},qn=e=>Kn(Gn,e),Jn=Symbol.for(`react.memo`),Yn=Symbol.for(`react.forward_ref`),Xn={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Zn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$n={[Yn]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Jn]:Qn},er=Object.defineProperty,tr=Object.getOwnPropertyNames,nr=Object.getOwnPropertySymbols,rr=Object.getOwnPropertyDescriptor,ir=Object.getPrototypeOf,ar=Object.prototype,or=Symbol.for(`react.forward_ref`),sr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw jt(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+On;return t}},cr=`style[${wn}][${En}="${Dn}"]`,lr=RegExp(`^${wn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ur=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,dr=e=>{if(!e)return document;if(ur(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(ur(t))return t}return document},fr=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},pr=(e,t)=>{let n=(t.textContent??``).split(On),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(lr);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Rn(n,t),fr(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},mr=e=>{let t=dr(e.options.target).querySelectorAll(cr);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(wn)!==Tn&&(pr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},hr=!1,gr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${wn}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(wn,Tn),i.setAttribute(En,Dn);let s=t||Jt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},_r=class{constructor(e,t){this.element=gr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw jt(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},vr=class{constructor(e,t){this.element=gr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},yr=kn,br={isServer:!kn,useCSSOMInjection:!An},xr=class e{static registerId(e){return In(e)}constructor(e=Bn,t={},n){this.options=Object.assign(Object.assign({},br),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&kn&&yr&&(yr=!1,mr(this)),qt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ln(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=wn+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&kn&&mr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&kn&&t.target!==this.options.target&&dr(this.options.target)!==dr(t.target)&&mr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new _r(t,n):new vr(t,n))(this.options),new sr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){In(e),e.startsWith(jn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(In(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(In(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Sr=new WeakSet,Cr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr=47,Tr=Symbol.for(`sc-keyframes`),Er=e=>e==null||!1===e||e===``,Dr=Symbol.for(`react.client.reference`),Or=qn(Dn),kr=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Kn(Or,t),this.baseStyle=n,xr.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(N(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Wt(en(r,e,t,n)))}else i+=Wt(en(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Pt(Kn(Kn(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ut(r,a)}}return r}},Ar=/&/g,jr=new xr,Mr=an(),Nr=P.createContext({shouldForwardProp:void 0,styleSheet:jr,stylis:Mr,stylisPlugins:void 0}),Pr=Nr.Consumer,Fr=P.createContext(void 0),Ir=Fr.Consumer,Lr=Object.prototype.hasOwnProperty,Rr={},zr=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`)),Br=e=>(Sr.add(e),e),Vr=e=>mn(dn,e),F=Vr,zr.forEach(e=>{F[e]=Vr(e)}),Hr=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Vt(n)&&!Ht(n))return!1}return!0}(e),xr.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Wt(en(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}},Wr=class{constructor(e,t){this[Ur]=!0,this.inject=(e,t=Mr)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=jn+e,this.rules=t,In(this.id),qt(this,()=>{throw jt(12,String(this.name))})}getName(e=Mr){return e.hash?this.name+Pt(e.hash>>>0):this.name}},Ur=Tr,Gr=class{constructor({nonce:e}={}){this._emitSheetCSS=()=>{let e=this.instance.toString();if(!e)return``;let t=this.instance.options.nonce||Jt();return`<style ${Wt([t&&`nonce="${t}"`,`${wn}="true"`,`${En}="${Dn}"`].filter(Boolean),` `)}>${e}</style>`},this.getStyleTags=()=>{if(this.sealed)throw jt(2);return this._emitSheetCSS()},this.getStyleElement=()=>{if(this.sealed)throw jt(2);let e=this.instance.toString();if(!e)return[];let t={[wn]:``,[En]:Dn,dangerouslySetInnerHTML:{__html:e}},n=this.instance.options.nonce||Jt();return n&&(t.nonce=n),[P.createElement(`style`,Object.assign({},t,{key:`sc-0-0`}))]},this.seal=()=>{this.sealed=!0},this.instance=new xr({isServer:!0,nonce:e}),this.sealed=!1}collectStyles(e){if(this.sealed)throw jt(2);return P.createElement(sn,{sheet:this.instance},e)}interleaveWithNodeStream(e){throw jt(3)}},Kr={StyleSheet:xr,mainSheet:jr},`${wn}`,qr=/:(?:(first)-child|(last)-child|(only)-child|(nth-child)\(([^()]+)\)|(nth-last-child)\(([^()]+)\))/g,Jr=`:not(style[${wn}])`,Yr=`style[${wn}]`})),Xr=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Normalize=e.normalize=void 0;var t=(I(),d(kt)),n=(0,t.css)([`html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}`]);e.normalize=n;var r=(0,t.createGlobalStyle)(n);e.Normalize=r,r.displayName=`Normalize`,e.default=n}))();I();var Zr=hn`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
        /* Anchored sections land below the sticky top bar. */
        scroll-padding-top: 88px;

        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    *,
        ::before,
        ::after {
            box-sizing: inherit;
        }

    body {
        /* Full-width bands inside the content column reach the screen edges
           with 100vw, which includes the scrollbar; clip, never scroll, the
           sliver. "clip" keeps the sticky top bar working. */
        overflow-x: clip;
        font-family: "Geist", sans-serif;
        font-size: 17px;
        line-height: 1.5;
        color: ${({theme:e})=>e.colors.site.text};
        background: ${({theme:e})=>e.colors.site.background};
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        transition: background .3s;

        @media(max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
            font-size: 16px;
        }
    }

    ::selection {
        color: ${({theme:e})=>e.colors.textPrimary};
        background: ${({theme:e})=>e.colors.dev.border};
    }

    h1, h2, h3, h4 {
        font-family: ${({theme:e})=>e.fontDisplay};
    }

    /* The skip link focuses <main>, and an opened case study takes focus too;
       neither is a control, so neither needs a ring. */
    [tabindex="-1"]:focus {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.primary};
        outline-offset: 3px;
    }
`,L={cream:`#FBF4E6`,sand:`#F4EAD6`,white:`#FFFFFF`,ink:`#16231F`,inkBody:`#3A4843`,inkMuted:`#5C6964`,line:`#E6DAC3`,deep:`#123C37`,deepHover:`#0A2622`,deepRaised:`#1C4D46`,creamEdge:`rgba(251, 244, 230, 0.14)`,sun:`#FFC94D`,sunHover:`#EBAA27`,sunMarker:`rgba(255, 201, 77, 0.45)`,sunMarkerNight:`rgba(255, 201, 77, 0.22)`,brandMuted:`#B9CEC7`,brandLine:`rgba(251, 244, 230, 0.25)`,brandControl:`rgba(251, 244, 230, 0.15)`,brandControlBorder:`rgba(251, 244, 230, 0.55)`,brandQuiet:`rgba(251, 244, 230, 0.05)`,brandQuietBorder:`rgba(251, 244, 230, 0.18)`,testGreen:`#1C7457`,deepFaint:`rgba(18, 60, 55, 0.07)`,sunFaint:`rgba(255, 201, 77, 0.12)`,testSoft:`#E3F2EA`,testBorder:`#B8DCCB`,terracotta:`#A94A22`,terracottaSoft:`#FBEBE2`,terracottaBorder:`#F0C7B1`,night:`#0B1513`,nightCard:`#12201D`,nightBand:`#1F302B`,nightLine:`#2A3F38`,paper:`#F3EBDB`,paperBody:`#D2CDC0`,paperMuted:`#A3AFA9`,mint:`#7FD1A8`,mintSoft:`rgba(127, 209, 168, 0.1)`,mintBorder:`rgba(127, 209, 168, 0.35)`,peach:`#F2A47A`,peachSoft:`rgba(242, 164, 122, 0.1)`,peachBorder:`rgba(242, 164, 122, 0.35)`,terminal:`#0B1220`,terminalRule:`#1E293B`,terminalText:`#E2E8F0`,terminalMuted:`#94A3B8`,terminalPass:`#34D399`},Qr={breakpoints:{mobileMax:767,tabletVerticalMax:991,tabletHorizontalMax:1199},boxShadow:`0 1px 2px rgba(22, 35, 31, 0.04), 0 8px 24px rgba(22, 35, 31, 0.05)`,layout:{maxWidth:1160,gutter:{mobile:16,tablet:32,desktop:48},topBar:{mobile:57,desktop:66},section:{mobile:24,desktop:40}},borderRadius:`8px`,borderRadiusSmall:`4px`,fontDisplay:`"Bricolage Grotesque", Geist, sans-serif`,fontMono:`"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace`},$r={background:L.deep,dark:L.night,highlight:L.mint,onHighlight:L.night,glow:L.deepRaised,text:L.cream,muted:L.brandMuted,line:L.brandLine,accent:L.sun,accentHover:L.sunHover,onAccent:L.deep,control:L.brandControl,controlBorder:L.brandControlBorder,quiet:L.brandQuiet,quietBorder:L.brandQuietBorder,barShadow:`0 6px 16px rgba(0, 0, 0, 0.22)`,pillShadow:`0 2px 6px rgba(0, 0, 0, 0.16), 0 16px 36px rgba(0, 0, 0, 0.3)`},ei={background:L.terminal,border:L.terminalRule,text:L.terminalText,muted:L.terminalMuted,pass:L.terminalPass},ti={...Qr,colors:{primary:L.deep,primaryHover:L.deepHover,onPrimary:L.cream,textPrimary:L.ink,muted:L.inkMuted,site:{background:L.sand,text:L.inkBody},dev:{accent:L.terracotta,soft:L.terracottaSoft,border:L.terracottaBorder},qa:{accent:L.testGreen,soft:L.testSoft,border:L.testBorder},boxBackground:L.white,cardBand:L.white,secondaryHover:L.sand,quoteBand:L.white,storyBand:L.white,story:{text:L.ink,body:L.inkBody,line:L.line,tick:L.testGreen,bug:L.deepFaint},quoteMark:{text:L.ink,background:L.sun},quoteCard:L.sand,quoteHighlight:L.sunMarker,topBar:L.deep,topBarEdge:`transparent`,headerLine:L.line,tile:{border:L.line,borderHover:L.testBorder,header:L.ink},brand:$r,terminal:ei}},ni={...Qr,boxShadow:`none`,colors:{primary:L.sun,primaryHover:L.sunHover,onPrimary:L.deep,textPrimary:L.paper,muted:L.paperMuted,site:{background:L.night,text:L.paperBody},dev:{accent:L.peach,soft:L.peachSoft,border:L.peachBorder},qa:{accent:L.mint,soft:L.mintSoft,border:L.mintBorder},boxBackground:L.nightCard,cardBand:L.nightBand,secondaryHover:L.nightBand,quoteBand:L.nightBand,storyBand:L.deep,story:{text:L.cream,body:L.brandMuted,line:L.brandLine,tick:L.sun,bug:L.sunFaint},quoteMark:{text:L.sun,background:`transparent`},quoteCard:L.nightCard,quoteHighlight:L.sunMarkerNight,topBar:L.deepRaised,topBarEdge:L.creamEdge,headerLine:L.nightLine,tile:{border:L.nightLine,borderHover:L.mintBorder,header:L.paper},brand:$r,terminal:ei}};I();var ri=pn`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxWidth+2*e.layout.gutter.desktop}px;
  margin-inline: auto;
  padding-inline: ${({theme:e})=>e.layout.gutter.desktop}px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletHorizontalMax}px) {
    padding-inline: ${({theme:e})=>e.layout.gutter.tablet}px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding-inline: ${({theme:e})=>e.layout.gutter.mobile}px;
  }
`,ii=({theme:e})=>`max(0px, (100% - ${e.layout.maxWidth+2*e.layout.gutter.desktop}px) / 2)`;I();var ai=F.div`
  ${ri}
  min-height: 100vh;
`,oi=F.a`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 20;
  padding: 10px 16px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.onPrimary};
  background: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  transform: translateY(-200%);

  &:focus {
    transform: none;
  }
`,si=`scrollY`,ci=()=>performance.getEntriesByType?.(`navigation`)[0]?.type,li=[`400 1em "Bricolage Grotesque"`,`400 1em Geist`,`400 1em "Geist Mono"`],ui=e=>{if(!document.fonts?.load){e();return}Promise.all(li.map(e=>document.fonts.load(e))).catch(()=>void 0).then(e)},di=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{delete document.documentElement.dataset.restoringScroll})),fi=()=>{(0,S.useEffect)(()=>{`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let e=()=>{try{sessionStorage.setItem(si,String(window.scrollY))}catch{}},t,n=()=>{clearTimeout(t),t=setTimeout(e,100)},r=()=>{document.visibilityState===`hidden`&&e()};window.addEventListener(`scroll`,n,{passive:!0}),window.addEventListener(`pagehide`,e),document.addEventListener(`visibilitychange`,r);let i=null;try{i=sessionStorage.getItem(si)}catch{}let a=!1;if(ci()===`reload`&&i!==null){let e=Number(i);ui(()=>{a||(window.scrollTo({top:e,behavior:`instant`}),di())})}else{let e=decodeURIComponent(window.location.hash.slice(1));e&&document.getElementById(e)?.scrollIntoView({behavior:`instant`})}return()=>{a=!0,clearTimeout(t),window.removeEventListener(`scroll`,n),window.removeEventListener(`pagehide`,e),document.removeEventListener(`visibilitychange`,r)}},[])},pi=`Hove, UK`,mi=`Test Engineer`,hi={name:`Szymon Rojek`,title:mi,eyebrow:mi,tagline:`I don’t stop at green.`,taglineHighlight:`green.`,lookingFor:{label:`Looking for`,lines:[[`QA,`,`Test Automation,`],[`AI\xA0Testing,`,`Front‑End roles`]]},basedIn:pi,bio:`Four years testing financial data migrations with SQL at Equiniti. I taught myself to code, so I automate tests with Playwright and build full‑stack apps of my own.`,contactHeading:`Let’s ship something that doesn’t break.`,teamNote:`Communication matters most to me in a team, with mutual respect and time to get to know one another. If that sounds like your team, I’d like to hear from you.`,linkedinUrl:`https://www.linkedin.com/in/szymon--rojek/`},gi=4,_i=(e,t,n)=>Math.abs(e-t)>n*.6,vi=(e,t,n)=>e+n<t,yi=80,bi=(e,t,n,r,i=n)=>t<=0?`top`:_i(t,n,r)?`raised`:t>n+gi?`hidden`:t<n-gi?e===`hidden`&&i-t<48?`hidden`:`raised`:e===`top`&&t===n?`raised`:e,xi=()=>document.documentElement.dataset.restoringScroll!==void 0,Si=()=>{let[e,t]=(0,S.useState)(`top`),[n,r]=(0,S.useState)(!0),[i,a]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{let e=window.scrollY,n=e,i=`top`,o=e=>{i=e,t(e),e!==`hidden`&&a(e===`raised`)},s=!1,c,l=()=>{s=!1,clearTimeout(c)},u=()=>{clearTimeout(c),c=setTimeout(l,400)},d=()=>{let t=window.scrollY,a=document.getElementById(`top`),c=a?a.offsetTop+a.offsetHeight:0;if(r(!s&&!_i(t,e,window.innerHeight)&&vi(t,c,yi)),xi()){e=n=t,o(`hidden`);return}if(s){u(),e=n=t,o(t<=0?`top`:`raised`);return}(t>e+gi||t>n)&&(n=t),o(bi(i,t,e,window.innerHeight,n)),(Math.abs(t-e)>gi||t<=0)&&(e=t)},f=e=>{e.target instanceof Element&&e.target.closest(`a[href^="#"]`)&&(s=!0,r(!1),u())};return d(),window.addEventListener(`scroll`,d,{passive:!0}),document.addEventListener(`click`,f),()=>{window.removeEventListener(`scroll`,d),document.removeEventListener(`click`,f),clearTimeout(c)}},[]),{state:e,smooth:n,filled:i}},Ci={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(let e in Ci)Object.freeze(Ci[e]);var wi=Object.freeze(Ci),Ti=Di,Ei={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function Di(e){var t,n=[],r=1,i;if(typeof e==`number`)return{space:`rgb`,values:[e>>>16,(e&65280)>>>8,e&255],alpha:1};if(e=String(e).toLowerCase(),wi[e])n=wi[e].slice(),i=`rgb`;else if(e===`transparent`)r=0,i=`rgb`,n=[0,0,0];else if(e[0]===`#`){var a=e.slice(1),o=a.length;if(/^[0-9a-f]{3,8}$/.test(a)&&o!==5&&o!==7){var s=o<=4;r=1,s?(n=[parseInt(a[0]+a[0],16),parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16)],o===4&&(r=parseInt(a[3]+a[3],16)/255)):(n=[parseInt(a[0]+a[1],16),parseInt(a[2]+a[3],16),parseInt(a[4]+a[5],16)],o===8&&(r=parseInt(a[6]+a[7],16)/255)),i=`rgb`}}else if(t=/^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(e)){i=t[1].replace(/a$/,``);var c=i===`cmyk`?4:i===`gray`?1:3;n=t[2].trim().split(/\s*[,\/]\s*|\s+/),i===`color`&&(i=n.shift()),n=n.map(function(e,t){if(e[e.length-1]===`%`)return e=parseFloat(e)/100,t===3?e:i===`rgb`?e*255:i[0]===`h`||i[0]===`l`&&!t?e*100:i===`lab`?e*125:i===`lch`?t<2?e*150:e*360:i[0]===`o`&&!t?e:i===`oklab`?e*.4:i===`oklch`?t<2?e*.4:e*360:e;if(i[t]===`h`||t===2&&i[i.length-1]===`h`){if(Ei[e]!==void 0)return Ei[e];if(e.endsWith(`deg`))return parseFloat(e);if(e.endsWith(`turn`))return parseFloat(e)*360;if(e.endsWith(`grad`))return parseFloat(e)*360/400;if(e.endsWith(`rad`))return parseFloat(e)*180/Math.PI}return e===`none`?0:parseFloat(e)}),r=n.length>c?n.pop():1}else!/^[a-z][a-z0-9-]*\s*\(/.test(e)&&/[0-9](?:\s|\/|,)/.test(e)&&(n=e.match(/-?[0-9]*\.?[0-9]+/g).map(Number),i=e.replace(/grad|deg|rad|turn/g,``).match(/([a-z])/gi)?.join(``)?.toLowerCase()||`rgb`,i.length>3&&i[i.length-1]===`a`&&i.length===n.length?(i=i.slice(0,-1),r=n.pop()):i===`rgb`&&n.length===4&&(r=n.pop()));return{space:i,values:n,alpha:r}}var Oi=/^(?:srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)$/;function ki(e,t){var{space:n,values:r,alpha:i}=Ti(e);if(n)return t??=i,n[0]===`h`?`${n}a(${r[0]}, ${r[1]}%, ${r[2]}%, ${t})`:n===`rgb`?`rgba(${r}, ${t})`:Oi.test(n)?`color(${n} ${r.join(` `)} / ${t})`:`${n}(${r.join(` `)} / ${t})`}var Ai=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),R=s(((e,t)=>{t.exports=Ai()}))(),ji=e=>(0,R.jsxs)(`svg`,{width:22,height:20,viewBox:`0 0 22 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,R.jsx)(`path`,{d:`M16.2678 6.56104L12.0024 9.99531C11.1952 10.6282 10.0636 10.6282 9.25641 9.99531L4.95435 6.56104`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,R.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M5.88787 1H15.3158C16.6752 1.01525 17.969 1.58993 18.896 2.5902C19.823 3.59048 20.3022 4.92903 20.222 6.29412V12.822C20.3022 14.1871 19.823 15.5256 18.896 16.5259C17.969 17.5262 16.6752 18.1009 15.3158 18.1161H5.88787C2.96796 18.1161 1 15.7407 1 12.822V6.29412C1 3.37545 2.96796 1 5.88787 1Z`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`})]});I();var Mi=pn`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.onPrimary};
  text-decoration: none;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  background: ${({theme:e})=>e.colors.primary};
  transition: background 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.primaryHover};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`,Ni=F.a`
  ${Mi}
`,Pi=F.button`
  ${Mi}
  font-family: inherit;
  cursor: pointer;
`,Fi=pn`
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.secondaryHover};
    border-color: ${({theme:e})=>e.colors.textPrimary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ii=F(Ni)`
  padding: 10px 19px;
  ${Fi}

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 9px 15px;
  }
`,Li=F(ji)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
`;I();var Ri={desktop:12,mobile:8},zi=F.div`
  ${ri}
  position: sticky;
  top: ${Ri.desktop}px;
  z-index: 10;
  margin-top: ${Ri.desktop}px;
  margin-bottom: -${({theme:e})=>e.layout.topBar.desktop}px;
  pointer-events: none;
  transform: ${({$state:e})=>e===`hidden`?`translateY(calc(-100% - ${Ri.desktop}px))`:`none`};
  transition: transform 0.3s ease;

  /* Hidden from the first paint while a reload goes back to its place
     (useBarState), before React has drawn the hidden state. */
  html[data-restoring-scroll] & {
    transform: translateY(calc(-100% - ${Ri.desktop}px));
    transition: none;
  }

  &:focus-within {
    transform: none;
  }

  *:focus-visible {
    outline-color: ${({theme:e})=>e.colors.brand.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    top: ${Ri.mobile}px;
    margin-top: ${Ri.mobile}px;
    margin-bottom: -${({theme:e})=>e.layout.topBar.mobile}px;
  }
`,Bi=pn`
  background: ${({theme:e})=>ki(e.colors.topBar,.94)};
  border-color: ${({theme:e})=>e.colors.topBarEdge};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: ${({theme:e})=>e.colors.brand.pillShadow};
`,Vi=F.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  height: ${({theme:e})=>e.layout.topBar.desktop-Ri.desktop}px;
  padding: 0 8px 0 20px;
  color: ${({theme:e})=>e.colors.brand.text};
  background: transparent;
  border: 1px solid ${({theme:e})=>ki(e.colors.brand.text,.18)};
  border-radius: 999px;
  pointer-events: auto;
  /* It fills smoothly while it is over the dark hero ($smooth), and at once
     after a jump: a jump lands over the light sections, where a fading bar
     would leave its cream links unreadable for a moment (axe caught it
     mid-fade). Back to the outline it always fades, over the hero. */
  transition: ${({$state:e,$smooth:t})=>e===`top`||t?`background-color 0.25s, border-color 0.25s, box-shadow 0.25s`:`none`};

  ${({$filled:e})=>e&&Bi}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    gap: 12px;
    /* The menu button is the pill's right end itself (MenuButton). */
    padding-right: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    height: ${({theme:e})=>e.layout.topBar.mobile-Ri.mobile}px;
    padding-left: 18px;
  }
`,Hi=F.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  margin-right: auto;
  color: ${({theme:e})=>e.colors.brand.text};
  text-decoration: none;
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
`,Ui=yn`
  from {
    box-shadow: 0 0 0 0 var(--ring);
  }

  to {
    box-shadow: 0 0 0 9px transparent;
  }
`,Wi=F.span`
  --ring: ${({theme:e})=>ki(e.colors.brand.accent,.55)};
  flex: none;
  width: 10px;
  height: 10px;
  background: ${({theme:e})=>e.colors.brand.accent};
  border-radius: 50%;
  animation: ${Ui} 2s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    box-shadow: 0 0 0 4px ${({theme:e})=>ki(e.colors.brand.accent,.2)};
  }
`,Gi=F.span`
  font-family: ${({theme:e})=>e.fontDisplay};
  font-size: 18px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`,Ki=F.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  /* It fades in and slides down a little; closed, it is hidden from the
     keyboard and screen readers too (visibility flips after the fade).
     Solid green: a blur inside the blurred pill would only see the pill, so
     the page under the panel would show through. */
  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    display: block;
    color: ${({theme:e})=>e.colors.brand.text};
    background: ${({theme:e})=>e.colors.topBar};
    border: 1px solid ${({theme:e})=>e.colors.topBarEdge};
    box-shadow: ${({theme:e})=>e.colors.brand.pillShadow};
    visibility: ${({$open:e})=>e?`visible`:`hidden`};
    opacity: ${({$open:e})=>+!!e};
    transform: translateY(${({$open:e})=>e?`0`:`-8px`});
    transition: ${({$open:e})=>e?`opacity 0.2s ease-out, transform 0.2s ease-out`:`opacity 0.2s ease-out, transform 0.2s ease-out, visibility 0s linear 0.2s`};
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    left: 0;
    padding: 8px 8px 14px;
    border-radius: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,qi=F.ul`
  display: flex;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    flex-direction: column;
  }
`,Ji=F.a`
  display: block;
  padding: 8px 12px;
  font-size: 14.5px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({theme:e})=>e.colors.brand.muted};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.brand.text};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Large tap targets in the menu panel. */
  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    padding: 12px 14px;
    font-size: 17px;
  }
`,Yi=F.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    margin: 10px 0 0 4px;
  }
`,Xi=F(Ni)`
  padding: 10px 18px;
  font-size: 14.5px;
  white-space: nowrap;
  color: ${({theme:e})=>e.colors.brand.onAccent};
  background: ${({theme:e})=>e.colors.brand.accent};
  border-radius: 999px;

  /* The arrow nudges forward under the pointer or keyboard focus, pointing
     on to the contact; still with reduced motion. */
  &::after {
    /* Decorative: the link's name stays "Hire me". */
    content: "→";
    content: "→" / "";
    display: inline-block;
    margin-left: 6px;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.brand.accentHover};
  }

  &:hover::after,
  &:focus-visible::after {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }

    &:hover::after,
    &:focus-visible::after {
      transform: none;
    }
  }
`,Zi=F.button`
  display: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    /* Flex, not grid: Safari before 16 doesn't centre a grid inside a
       button, and the lines sat at its top (issue #33). */
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    align-self: stretch;
    aspect-ratio: 1;
    padding: 0;
    color: ${({theme:e})=>e.colors.brand.muted};
    background: none;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({theme:e})=>e.colors.brand.text};
    }

    &:focus-visible {
      outline-offset: -4px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Qi=F.span`
  display: grid;
  gap: 4px;
  width: 18px;

  span {
    display: block;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition:
      transform 0.2s,
      opacity 0.2s;
  }

  ${({$open:e})=>e&&pn`
      span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    span {
      transition: none;
    }
  }
`,$i=[{href:`#how-i-test`,label:`How I test`},{href:`#projects`,label:`Projects`},{href:`#experience`,label:`Experience`},{href:`#recommendations`,label:`References`}],ea=()=>{let[e,t]=(0,S.useState)(!1),{state:n,smooth:r,filled:i}=Si(),a=e?`raised`:n,o=e||i,s=(0,S.useRef)(null),c=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&(t(!1),c.current?.focus())},r=e=>{s.current?.contains(e.target)||t(!1)};return document.addEventListener(`keydown`,n),document.addEventListener(`pointerdown`,r),()=>{document.removeEventListener(`keydown`,n),document.removeEventListener(`pointerdown`,r)}},[e]),(0,R.jsx)(zi,{ref:s,$state:a,children:(0,R.jsxs)(Vi,{$state:a,$smooth:r,$filled:o,children:[(0,R.jsxs)(Hi,{href:`#top`,title:`Back to top`,children:[(0,R.jsx)(Wi,{"aria-hidden":`true`}),(0,R.jsx)(Gi,{children:hi.name})]}),(0,R.jsxs)(Ki,{id:`site-menu`,"aria-label":`Sections`,$open:e,children:[(0,R.jsx)(qi,{children:$i.map(({href:e,label:n})=>(0,R.jsx)(`li`,{children:(0,R.jsx)(Ji,{href:e,onClick:()=>t(!1),children:n})},e))}),(0,R.jsx)(Yi,{children:(0,R.jsx)(Xi,{href:`#contact`,onClick:()=>t(!1),children:`Hire me`})})]}),(0,R.jsx)(Zi,{ref:c,type:`button`,"aria-label":`Menu`,"aria-expanded":e,"aria-controls":`site-menu`,onClick:()=>t(e=>!e),children:(0,R.jsxs)(Qi,{$open:e,"aria-hidden":`true`,children:[(0,R.jsx)(`span`,{}),(0,R.jsx)(`span`,{}),(0,R.jsx)(`span`,{})]})})]})})},ta=`/assets/szymonRojekCutout-CL7G2oNF.webp`,na=`clamp(32px, max(19px + 3.6cqi, 7cqi - 8px), 80px)`,ra=`calc(9.76 * ${na})`,ia=`calc(225px + 1.875 * ${na})`,z=e=>e.replaceAll(`cqi`,`vw`);I();var B=`clamp(160px, 46cqi, ${ia})`,aa=F.div`
  position: relative;
  align-self: end;
  justify-self: end;
  /* About as tall as the text beside it, and shrinking slower than the
     headline (sizes.ts): 300 x 375px beside the 80px headline, still 312px
     tall at 768px. Its width is the hero's photo column: 4:5, or narrower
     where the one-line headline needs the room (below about 860px); then the
     photo is cropped at the shoulders and the head keeps its size. */
  width: 100%;
  height: ${z(ia)};
  height: ${ia};

  /* On phones, beside "Looking for": its top level with the label (the
     list's margin), at most 200px wide, so the text keeps room. Just under
     768px it is as tall as just above, so the head keeps its size where the
     layout changes, and it shrinks with the screen from about 680px down. */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    grid-column: 2;
    height: ${z(B)};
    height: ${B};
    width: min(200px, calc(0.8 * ${z(B)}));
    width: min(200px, calc(0.8 * ${B}));
    margin-top: 28px;
  }
`,oa=F.span`
  position: absolute;
  z-index: -1;
  top: -12%;
  left: -45%;
  right: -45%;
  aspect-ratio: 1;
  background: radial-gradient(
    closest-side,
    ${({theme:e})=>ki(e.colors.brand.glow,.95)},
    ${({theme:e})=>ki(e.colors.brand.background,.55)} 45%,
    ${({theme:e})=>ki(e.colors.brand.background,0)} 100%
  );
  pointer-events: none;
`,sa=`linear-gradient(to top, transparent, #000 30%), linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)`,ca=F.img`
  display: block;
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  filter: url(#portrait-duotone);
  /* The two fades meet where both are opaque. Only the top one intersects:
     Safari before 16 composites the bottom one too, onto nothing, and with
     "intersect" there the photo vanished; "add" there is what the spec does
     anyway. */
  -webkit-mask-image: ${sa};
  -webkit-mask-composite: source-in, source-over;
  mask-image: ${sa};
  mask-composite: intersect, add;
`,la=F.svg`
  position: absolute;
  width: 0;
  height: 0;
`;I();var ua=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255),da=.12,fa=1.35,pa=(e,t)=>Array.from({length:21},(n,r)=>{let i=Math.min(1,Math.max(0,(r/20-da)/.8));return(e+(t-e)*i**fa).toFixed(4)}).join(` `),ma=({src:e,name:t})=>{let{colors:n}=cn(),r=ua(n.brand.dark),i=ua(n.brand.text);return(0,R.jsxs)(aa,{children:[(0,R.jsx)(oa,{"aria-hidden":`true`}),(0,R.jsx)(la,{"aria-hidden":`true`,focusable:`false`,children:(0,R.jsxs)(`filter`,{id:`portrait-duotone`,colorInterpolationFilters:`sRGB`,children:[(0,R.jsx)(`feColorMatrix`,{type:`matrix`,values:`0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0`}),(0,R.jsx)(`feComponentTransfer`,{children:[`R`,`G`,`B`].map((e,t)=>{let n=`feFunc${e}`;return(0,R.jsx)(n,{type:`table`,tableValues:pa(r[t],i[t])},e)})})]})}),(0,R.jsx)(ca,{src:e,alt:t,draggable:!1})]})};I();var ha=F.header``,ga=F.div`
  position: relative;
  /* Clips the ring without becoming a scroll container (see the footer). */
  overflow: clip;
  /* Safari before 16 has no clip: its decorations widened the page and
     left empty space under the footer (issue #33). */
  @supports not (overflow: clip) {
    overflow: hidden;
  }
  /* The headline and the photo size themselves from the band's width
     (cqi), so they shrink together and smoothly as the window narrows. */
  container-type: inline-size;
  /* It starts under the see-through top bar (the bar's negative margin pulls
     it up), so its green and its ring show through; the padding keeps the
     content below the bar. */
  padding: ${({theme:e})=>64+e.layout.topBar.desktop}px 0 0;
  color: ${({theme:e})=>e.colors.brand.text};
  background: ${({theme:e})=>e.colors.brand.dark};

  &::after {
    content: "";
    position: absolute;
    top: -150px;
    right: calc(${ii} - 150px);
    width: 440px;
    height: 440px;
    border: 72px solid ${({theme:e})=>e.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;
  }

  *:focus-visible {
    outline-color: ${({theme:e})=>e.colors.brand.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: ${({theme:e})=>40+e.layout.topBar.mobile}px 0 0;
  }
`,_a=F.div`
  ${ri}
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns:
    minmax(calc(${z(ra)} + 8px), 1fr)
    minmax(0, calc(0.8 * ${z(ia)}));
  grid-template-columns:
    minmax(calc(${ra} + 8px), 1fr)
    minmax(0, calc(0.8 * ${ia}));
  gap: 48px;
  align-items: end;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    gap: 32px;
  }

  /* On phones the text runs full width, and the photo stands beside
     "Looking for", its top level with the label, on the band's edge. */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 16px;
    row-gap: 0;
  }
`,va=F.div`
  min-width: 0;
  /* The section rhythm under the text, while the photo beside it stands on
     the band's edge. */
  padding-bottom: ${({theme:e})=>e.layout.section.desktop}px;

  /* On phones its lines become the hero grid's own rows (see BandInner),
     all full width but "Looking for", which shares a row with the photo. */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    display: contents;

    & > * {
      grid-column: 1 / -1;
    }

    & > dl {
      grid-column: 1;
      align-self: start;
      padding-bottom: ${({theme:e})=>e.layout.section.mobile}px;
    }
  }
`,ya=F.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,ba=F.p`
  margin: 24px 0 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.brand.accent};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 22px;
    font-size: 12px;
  }
`,xa=F.h1`
  margin: 12px 0 0;
  text-wrap: balance;
  font-family: ${({theme:e})=>e.fontDisplay};
  font-size: ${z(na)};
  font-size: ${na};
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.04em;
  /* The tight letters would pull the words together too; this gives them
     back room between them. */
  word-spacing: 0.08em;
`,Sa=F.span`
  display: inline-block;
  padding: 0 0.12em;
  color: ${({theme:e})=>e.colors.brand.onHighlight};
  background: ${({theme:e})=>e.colors.brand.highlight};
  border-radius: 0.14em;
  transform: rotate(-2deg);
  white-space: nowrap;
`,Ca=F.p`
  max-width: 34em;
  margin: 26px 0 0;
  font-size: 18px;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.brand.muted};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`,wa=F.dl`
  margin: 28px 0 0;

  dt {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.brand.accent};
  }

  dd {
    margin: 6px 0 0;
    font-family: ${({theme:e})=>e.fontDisplay};
    font-size: 21px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({theme:e})=>e.colors.brand.text};
  }

  /* Each part, and each phrase in it, stays whole where it fits: the line
     breaks between parts first, and between phrases only when a part can't
     fit. */
  dd span {
    display: inline-block;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    dd {
      font-size: 17px;
    }
  }
`,[Ta,Ea]=hi.tagline.split(hi.taglineHighlight),Da=()=>(0,R.jsx)(ha,{id:`top`,children:(0,R.jsx)(ga,{children:(0,R.jsxs)(_a,{children:[(0,R.jsxs)(va,{children:[(0,R.jsx)(ba,{children:hi.eyebrow}),(0,R.jsxs)(xa,{children:[(0,R.jsx)(ya,{children:`${hi.name}, ${hi.title}:`}),` `,Ta,(0,R.jsx)(Sa,{children:hi.taglineHighlight}),Ea]}),(0,R.jsx)(Ca,{children:hi.bio}),(0,R.jsxs)(wa,{children:[(0,R.jsx)(`dt`,{children:hi.lookingFor.label}),(0,R.jsx)(`dd`,{children:hi.lookingFor.lines.map((e,t)=>(0,R.jsxs)(S.Fragment,{children:[t>0&&` `,(0,R.jsx)(`span`,{children:e.map((e,t)=>(0,R.jsxs)(S.Fragment,{children:[t>0&&` `,(0,R.jsx)(`span`,{children:e})]},e))})]},e.join(` `)))})]})]}),(0,R.jsx)(ma,{src:ta,name:hi.name})]})})}),Oa=[{quote:`I had the pleasure of working with Szymon on Data Migration projects, and he was a real asset to the team. He is strong in both deconversion and conversion work and has valuable experience on AST projects. He has solid hands-on skills in SQL and a clear understanding of the data migration flow, and he was always ready to help colleagues whenever they needed guidance.

Szymon is very proactive. He takes ownership across projects and doesn’t wait to be asked, which made a real difference to the team.

What made working with him even better was his personality. He is kind, friendly and genuinely caring. He always took the time to ask how you were doing, both at work and outside it, and that made him a pleasure to work with every day.

Szymon would be a great addition to any team, and I would happily work with him again. I highly recommend him.`,highlight:`takes ownership across projects`,name:`Venkat Nagadasari`,role:`Senior Test Engineer at Equiniti`,relation:`worked with me on the same team`,date:`Oct 2026`},{quote:`I have had the pleasure of working with Szymon Rojek for the past 3 years. He is a highly skilled professional who consistently demonstrates strong technical expertise, attention to detail, and a commitment to quality.

Szymon is always willing to support teammates, share knowledge, and contribute to successful project delivery. His positive attitude and collaborative approach make him a valued member of any team. Keep up the Good work Szymon!!`,highlight:`highly skilled professional`,name:`Karthikeyan Palanivel`,role:`Senior Test Engineer at Equiniti`,relation:`worked with me on the same team`,date:`Oct 2026`},{quote:`I had the pleasure of working with Szymon for several years and can confidently say that he is a test engineer with good technical and interpersonal skills. From a developer's perspective, what I value most is his commitment to getting to the root cause of issues—not just reporting symptoms.

Szymon consistently performs deep analyses that often uncover hidden problems, saving the team time and preventing future bugs. His bug reports are always thorough, well-structured, and contain all the key details needed to move quickly from diagnosis to resolution.

He also fosters a culture of open communication and mutual respect, which makes collaboration smooth and productive. Working with Szymon guarantees quality, reliability, and a positive team atmosphere.`,highlight:`saving the team time and preventing future bugs`,name:`Oskar Wielanowski`,role:`SQL Developer at EQTek`,relation:`worked with me on the same team`,date:`May 2025`},{quote:`Working with Szymon is a pleasure. He is thoughtful and thorough. His write-ups included everything needed to reproduce the conditions and defects he was reporting. He's got a solid understanding of SQL and the context within which we were both working.

I'd gladly work with him in the future and you will be fortunate if you get to work with him.`,highlight:`you will be fortunate if you get to work with him`,name:`Jim Grinsfelder`,role:`Senior Database Engineer at Equiniti`,relation:`worked with me on a different team`,date:`Jan 2025`},{quote:`Szymon is committed to his tasks and always tries to get to the bottom of the issues. He is persistent in striving to expand his knowledge. His positive disposition makes him easy to work with and constitutes his high value in the team.`,highlight:`easy to work with`,name:`Dawid Kwaśnik`,role:`Database Consultant (data migration) at Endava`,relation:`worked with me on a different team`,date:`Feb 2024`}],ka=`References`,Aa={lines:[`In the words of`,`the people I’ve worked with`],highlight:`worked with`};I();var ja=F.section`
  margin-top: ${({theme:e})=>e.layout.section.desktop}px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: ${({theme:e})=>e.layout.section.mobile}px;
  }
`,Ma={card:`cardBand`,quote:`quoteBand`,story:`storyBand`},Na=F(ja).attrs({className:`section-band`})`
  margin-inline: calc(50% - 50vw);
  padding: ${({theme:e})=>e.layout.section.desktop}px calc(50vw - 50%);
  background: ${({theme:e,$band:t})=>e.colors[Ma[t]]};

  .section-band + & {
    margin-top: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding-block: ${({theme:e})=>e.layout.section.mobile}px;
  }
`,Pa=pn`
  padding-top: 32px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    padding-top: 24px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding-top: 16px;
  }
`,Fa=F.h2`
  ${Pa}
  margin: 0 0 16px;
  font-family: ${({theme:e})=>e.fontMono};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0;
  color: ${({theme:e})=>e.colors.primary};

  &::before {
    content: attr(data-number) " / ";
    content: attr(data-number) " / " / "";
  }
`,Ia=pn`
  margin: 0;
  font-family: ${({theme:e})=>e.fontDisplay};
  font-size: 44px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    font-size: 34px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`,La=F.mark`
  white-space: nowrap;
  padding: 0
    ${({theme:e})=>e.colors.quoteMark.background===`transparent`?`0`:`0.12em`};
  color: ${({theme:e})=>e.colors.quoteMark.text};
  background: ${({theme:e})=>e.colors.quoteMark.background};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`,Ra=F.p`
  ${Ia}
  text-wrap: balance;
`,za=F.span`
  display: block;
`,Ba=F.p`
  max-width: 720px;
  margin: -12px 0 24px;
  font-size: 18px;
  line-height: 1.6;

  ${Ra} + & {
    margin-top: 20px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin: -8px 0 20px;
    font-size: 16px;

    ${Ra} + & {
      margin-top: 16px;
    }
  }
`;F.div`
  padding: 28px;
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: background 0.3s;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;var Va=F.li`
  padding: 4px 11px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.site.background};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
`,Ha=F.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,Ua=[`how-i-test`,`projects`,`experience`,`skills`,`recommendations`],Wa=e=>String(Ua.indexOf(e)+1).padStart(2,`0`),Ga=390,Ka=60,qa=e=>e.length+Ga+(e.split(`

`).length-1)*Ka,Ja=e=>{let t=e.map(({quote:e})=>qa(e)),n=Math.max(e.length-2,0),r={sides:[],gap:1/0};for(let i=0;i<2**n;i++){let n=e.map((e,t)=>t<2?t:i>>t-2&1),a=Math.abs(t.reduce((e,t,r)=>e+(n[r]?-t:t),0));a<r.gap&&(r={sides:n,gap:a})}let i=[[],[]];return e.forEach((e,t)=>{i[r.sides[t]].push({item:e,order:t})}),i},Ya=e=>(0,R.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,R.jsx)(`path`,{d:`M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`})});I();var Xa=F.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  gap: 24px;
  /* Room under the big line, so it stands on its own above the cards. */
  margin-top: 48px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 40px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 32px;
  }
`,Za=F.div`
  display: grid;
  gap: 24px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    display: contents;
  }
`,Qa=F.div`
  position: relative;
  /* Clips the watermark at the corner. */
  overflow: hidden;
  order: ${({$order:e})=>e};
  padding: 24px 28px 26px;
  background: ${({theme:e})=>e.colors.quoteCard};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 20px 20px 22px;
  }
`,$a=F.figure`
  position: relative;
  z-index: 1;
  margin: 0;

  blockquote {
    margin: 0;
  }

  blockquote p {
    margin: 0;
    font-size: 16.5px;
    line-height: 1.72;
  }

  blockquote p + p {
    margin-top: 0.75em;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    blockquote p {
      font-size: 16px;
    }
  }
`,eo=F.figcaption`
  margin-bottom: 18px;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.muted};
  border-bottom: 1px solid ${({theme:e})=>e.colors.headerLine};

  strong {
    display: block;
    margin-bottom: 2px;
    font-family: ${({theme:e})=>e.fontDisplay};
    font-size: 17px;
    color: ${({theme:e})=>e.colors.primary};
  }
`,to=F.span`
  display: block;

  time {
    white-space: nowrap;
  }

  time::before {
    content: "·";
    margin: 0 8px;
  }
`,no=F(Ya)`
  position: absolute;
  z-index: 0;
  top: -10px;
  right: -10px;
  width: 84px;
  height: 84px;
  color: ${({theme:e})=>e.colors.textPrimary};
  opacity: 0.05;
  pointer-events: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    width: 64px;
    height: 64px;
  }
`,ro=F.mark`
  padding: 1px 3px;
  color: inherit;
  background: ${({theme:e})=>e.colors.quoteHighlight};
  border-radius: 3px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`,io=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],ao=e=>{let[t,n]=e.split(` `);return`${n}-${String(io.indexOf(t)+1).padStart(2,`0`)}`},oo=e=>{let[t,n]=e.split(` `);return`${t} ’${n.slice(-2)}`},[so,co]=Aa.lines,[lo,uo]=co.split(Aa.highlight),fo=({text:e,highlight:t})=>{let[n,...r]=e.split(t);return r.length?(0,R.jsxs)(R.Fragment,{children:[n,(0,R.jsx)(ro,{children:t}),r.join(t)]}):e},po=Ja(Oa),mo=()=>(0,R.jsxs)(Na,{$band:`quote`,"aria-labelledby":`recommendations`,children:[(0,R.jsx)(Fa,{id:`recommendations`,"data-number":Wa(`recommendations`),children:ka}),(0,R.jsxs)(Ra,{children:[(0,R.jsx)(za,{children:so}),` `,(0,R.jsxs)(za,{children:[lo,(0,R.jsx)(La,{children:Aa.highlight}),uo]})]}),(0,R.jsx)(Xa,{role:`list`,"aria-label":`Recommendations from LinkedIn`,children:po.map((e,t)=>(0,R.jsx)(Za,{role:`none`,children:e.map(({item:{quote:e,highlight:t,name:n,role:r,date:i},order:a})=>(0,R.jsxs)(Qa,{role:`listitem`,$order:a,children:[(0,R.jsxs)($a,{children:[(0,R.jsxs)(eo,{children:[(0,R.jsx)(`strong`,{children:n}),(0,R.jsxs)(to,{children:[(0,R.jsx)(`span`,{children:r}),(0,R.jsx)(`time`,{dateTime:ao(i),children:oo(i)})]})]}),(0,R.jsx)(`blockquote`,{children:e.split(`

`).map(e=>(0,R.jsx)(`p`,{children:(0,R.jsx)(fo,{text:e,highlight:t})},e))})]}),(0,R.jsx)(no,{"aria-hidden":`true`,focusable:`false`})]},n))},t))})]}),ho={title:`How I test at work`,story:{title:`Beyond the obvious bugs`,highlight:`obvious`,paragraphs:[`I've found bugs not only in the migrated data, but in the stored procedures that move it. When there was no data to test yet, I read the procedures against the requirements and mapping documents, questioned the solution designers, and walked through tricky cases with the developer who wrote them.`]},steps:[{title:`Understand the rules, then design the tests`,summary:`Requirements, mapping documents and transformation rules become test cases.`,points:[`Positive and negative cases`,`Each traced back to the rule it checks`,`Peer-reviewed before anything is run`]},{title:`Reconcile with SQL and check the logic`,summary:`A number can match and still be wrong.`,points:[`Record counts, totals and field-by-field values`,`Empty values, duplicates and relationships between tables`,`Results checked against the business rules`,`The stored procedures that transform the data`]},{title:`Trace each defect to its root cause`,summary:`I find where it comes from: the data, the transformation logic, a stored procedure or the requirement itself.`,points:[`Logged in Azure DevOps`,`Reproduction steps and evidence attached`,`The fix retested with the developers`]}]},go=e=>(0,R.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 64 64`,fill:`none`,stroke:`currentColor`,strokeWidth:2.5,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,R.jsx)(`path`,{d:`M24 18a8 8 0 0 1 16 0`}),(0,R.jsx)(`path`,{d:`M27 12l-4-6M37 12l4-6`}),(0,R.jsx)(`path`,{d:`M20 26c0-4 5-7 12-7s12 3 12 7v12c0 9-5 16-12 16s-12-7-12-16z`}),(0,R.jsx)(`path`,{d:`M32 19v35`}),(0,R.jsx)(`path`,{d:`M20 30l-8-3M20 38h-9M21 46l-8 4M44 30l8-3M44 38h9M43 46l8 4`})]});I();var _o=F(Na)`
  /* The first section, right under the hero, with no page colour between
     the near-black and its band. */
  margin-top: 0;
  position: relative;
  isolation: isolate;
  overflow: clip;
  /* Safari before 16 has no clip: its decorations widened the page and
     left empty space under the footer (issue #33). */
  @supports not (overflow: clip) {
    overflow: hidden;
  }
  color: ${({theme:e})=>e.colors.story.text};
`,vo=F(go)`
  position: absolute;
  z-index: -1;
  top: ${({theme:e})=>e.layout.section.desktop+32-22}px;
  right: calc(${ii} - 56px);
  width: 300px;
  height: 300px;
  color: ${({theme:e})=>e.colors.story.bug};
  transform: rotate(-25deg);
  pointer-events: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    top: ${({theme:e})=>e.layout.section.desktop+24-22}px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    top: ${({theme:e})=>e.layout.section.mobile+16-13}px;
    right: calc(${ii} - 40px);
    width: 180px;
    height: 180px;
  }
`,yo=F.article`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 56px;
  align-items: start;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,bo=F.h3`
  margin: 0;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  color: ${({theme:e})=>e.colors.story.text};
  text-wrap: balance;

  /* As "worked with" in References: dark words on a yellow marker in the
     light theme (yellow text on white is only 1.5:1), yellow words in the
     dark one. */
  em {
    padding: 0
      ${({theme:e})=>e.colors.quoteMark.background===`transparent`?`0`:`0.1em`};
    font-style: normal;
    color: ${({theme:e})=>e.colors.quoteMark.text};
    background: ${({theme:e})=>e.colors.quoteMark.background};
    border-radius: ${({theme:e})=>e.borderRadiusSmall};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    font-size: 40px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 32px;
  }
`,xo=F.div`
  p {
    margin: 0 0 14px;
    font-size: 17px;
    line-height: 1.7;
    color: ${({theme:e})=>e.colors.story.body};
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    p {
      font-size: 16px;
    }
  }
`,So=F.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 56px 0 0;
  padding: 0;
  list-style: none;

  > li {
    position: relative;
    display: grid;
    grid-template-areas:
      "title"
      "summary"
      "points";
    align-content: start;
    padding: 0 32px;
  }

  > li:first-child {
    padding-left: 0;
  }

  > li:last-child {
    padding-right: 0;
  }

  > li + li {
    border-left: 1px solid ${({theme:e})=>e.colors.story.line};
  }

  /* The arrow to the next stage, on the divider, level with the title.
     Decorative: the list already gives the order. */
  > li + li::before {
    content: "→";
    content: "→" / "";
    position: absolute;
    top: -1px;
    left: -15px;
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.onPrimary};
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletHorizontalMax}px) {
    > li {
      padding: 0 24px;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 40px;

    > li,
    > li:first-child,
    > li:last-child {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "title points"
        "summary points";
      column-gap: 32px;
      padding: 0 0 32px;
    }

    > li:last-child {
      padding-bottom: 0;
    }

    > li:not(:first-child) {
      border-left: 0;
      border-top: 1px solid ${({theme:e})=>e.colors.story.line};
      /* Clear of the arrow on the divider. */
      padding-top: 36px;
    }

    > li + li::before {
      content: "↓";
      content: "↓" / "";
      top: -15px;
      left: 0;
    }
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 32px;

    > li,
    > li:first-child,
    > li:last-child {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: none;
      grid-template-areas:
        "title"
        "summary"
        "points";
      padding-bottom: 28px;
    }

    > li:last-child {
      padding-bottom: 0;
    }
  }
`,Co=F.h3`
  grid-area: title;
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.colors.story.text};
  text-wrap: balance;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`,wo=F.p`
  grid-area: summary;
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.story.body};
  text-wrap: pretty;
`,To=F.ul`
  grid-area: points;
  display: grid;
  align-content: start;
  gap: 10px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.story.text};

  li {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
  }

  li::before {
    /* Decorative: the empty alt keeps screen readers from saying "tick". */
    content: "✓";
    content: "✓" / "";
    font-weight: 700;
    color: ${({theme:e})=>e.colors.story.tick};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    margin-top: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 16px;
  }
`,{story:Eo}=ho,[Do,Oo]=Eo.title.split(Eo.highlight),ko=()=>(0,R.jsxs)(_o,{$band:`story`,"aria-labelledby":`how-i-test`,children:[(0,R.jsx)(Fa,{id:`how-i-test`,"data-number":Wa(`how-i-test`),children:ho.title}),(0,R.jsx)(vo,{"aria-hidden":`true`,focusable:`false`}),(0,R.jsxs)(yo,{"aria-labelledby":`how-i-test-story`,children:[(0,R.jsxs)(bo,{id:`how-i-test-story`,children:[Do,(0,R.jsx)(`em`,{children:Eo.highlight}),Oo]}),(0,R.jsx)(xo,{children:Eo.paragraphs.map(e=>(0,R.jsx)(`p`,{children:e},e))})]}),(0,R.jsx)(So,{"aria-label":`How I test a data migration`,children:ho.steps.map(({title:e,summary:t,points:n})=>(0,R.jsxs)(`li`,{children:[(0,R.jsx)(Co,{children:e}),(0,R.jsx)(wo,{children:t}),(0,R.jsx)(To,{children:n.map(e=>(0,R.jsx)(`li`,{children:e},e))})]},e))})]}),Ao=[`Data migration & ETL`,`SQL reconciliation (T-SQL, SQL Server)`,`Defect root-cause analysis`,`AI-assisted testing`],jo=[`Playwright & TypeScript`,`API tests: Postman, Newman, supertest`,`Vitest, Jest, Testing Library`,`Axe & Lighthouse`,`Quality gates in GitHub Actions`],Mo=[`JavaScript, React, Redux, TypeScript`,`Node.js & Express`,`REST APIs`],No=[`Azure DevOps`,`SQL Server Management Studio`,`Postman`,`Git`,`GitHub Actions`,`VS Code`,`GitHub Copilot`,`Claude`],Po=[{name:`Polish`,level:`Native`},{name:`English`,level:`Professional working proficiency`}],Fo=[{role:`Test Engineer`,company:`Equiniti, Worthing`,details:`Financial services and shareholder registry`,period:`Sep 2022 – now`,points:[`Validate financial and shareholder data across migration and ETL projects, including conversion and deconversion.`,`Estimate effort and work in an Agile team with developers, architects and stakeholders.`,`Use GitHub Copilot agents and write agentic testing procedures for the test team, with validation steps and human oversight.`,`Pilot in-house AI agents that write tests from user stories and mapping documents: find the gaps in their output and review them with the senior engineers who build them.`]}],Io=[{title:`ISTQB Certified Tester, Foundation Level`,detail:`Preparing for the exam now.`,year:`Now`,next:!0},{title:`Microsoft AI courses`,detail:`Generative AI, Copilot, responsible AI`,year:`2026`},{title:`Artificial Intelligence course`,detail:`John Paul II Catholic University of Lublin`,year:`2025`},{title:`LinkedIn Learning`,detail:`Programming, testing and AI, alongside my job`,year:`2023 – now`},{title:`React School`,detail:`React workshops, final exam passed`,year:`2022`}];I();var Lo=F.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 40px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }
`,Ro=F.div``,zo=F.div`
  padding: 20px 22px 8px;
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};

  li:last-child {
    border-bottom: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 18px 18px 6px;
  }
`,Bo=F.h3`
  margin: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${({$accent:e,theme:t})=>pn`
    color: ${e===`qa`?t.colors.qa.accent:e===`dev`?t.colors.dev.accent:e===`learning`?t.colors.textPrimary:t.colors.primary};
  `}
`,Vo=F.ul`
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
`,Ho=F.li`
  padding: 9px 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textPrimary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.headerLine};

  &:first-child {
    border-top: 1px solid ${({theme:e})=>e.colors.headerLine};
  }
`,V=F.span`
  display: block;
  margin-top: 2px;
  font-size: 13.5px;
  color: ${({theme:e})=>e.colors.muted};
`,H=F.span`
  display: inline-block;
  margin-left: 8px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  vertical-align: 2px;
  color: ${({theme:e})=>e.colors.brand.onAccent};
  background: ${({theme:e})=>e.colors.brand.accent};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
`,Uo=F.p`
  margin: 20px 0 0;
  font-size: 15px;
  line-height: 1.7;

  strong {
    color: ${({theme:e})=>e.colors.textPrimary};
  }
`,Wo=F(Uo)`
  margin-top: 6px;
`,Go=[{accent:`qa`,title:`Testing`,skills:Ao},{accent:`automation`,title:`Automation`,skills:jo},{accent:`dev`,title:`Programming`,skills:Mo}],Ko=()=>(0,R.jsxs)(ja,{"aria-labelledby":`skills`,children:[(0,R.jsx)(Fa,{id:`skills`,"data-number":Wa(`skills`),children:`Skills & learning`}),(0,R.jsxs)(Lo,{children:[Go.map(({accent:e,title:t,skills:n})=>(0,R.jsxs)(Ro,{children:[(0,R.jsx)(Bo,{$accent:e,children:t}),(0,R.jsx)(Vo,{"aria-label":`${t} skills`,children:n.map(e=>(0,R.jsx)(Ho,{children:e},e))})]},t)),(0,R.jsxs)(zo,{children:[(0,R.jsx)(Bo,{$accent:`learning`,children:`Learning`}),(0,R.jsx)(Vo,{"aria-label":`Courses and certifications`,children:Io.map(({title:e,detail:t,year:n,next:r})=>(0,R.jsxs)(Ho,{children:[e,r&&(0,R.jsx)(H,{children:`Next`}),(0,R.jsx)(V,{children:r?t:`${n} · ${t}`})]},e))})]})]}),(0,R.jsxs)(Uo,{children:[(0,R.jsx)(`strong`,{children:`Tools:`}),` `,No.join(` · `)]}),(0,R.jsxs)(Wo,{children:[(0,R.jsx)(`strong`,{children:`Languages:`}),` `,Po.map(({name:e,level:t})=>`${e} (${t.toLowerCase()})`).join(` · `)]})]});I();var qo=F.article`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 48px;
  padding-top: 24px;
  border-top: 1px solid ${({theme:e})=>e.colors.headerLine};

  & + & {
    margin-top: 28px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,Jo=F.div`
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 16px;
    align-items: baseline;

    & > :nth-child(1) {
      grid-column: 2;
      grid-row: 1;
      white-space: nowrap;
    }

    & > :nth-child(2) {
      grid-column: 1;
      grid-row: 1;
      margin-top: 0;
    }

    & > :nth-child(3) {
      grid-column: 1 / -1;
    }
  }
`,Yo=F.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.muted};
`,Xo=F.p`
  margin: 6px 0 0;
  font-family: ${({theme:e})=>e.fontDisplay};
  font-size: 18px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Zo=F.p`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.muted};
`,Qo=F.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  line-height: 1.15;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`,$o=F.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 10px 0 10px 22px;
    font-size: 16px;
    line-height: 1.6;
  }

  /* A small yellow dot instead of a bullet. */
  li::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    width: 8px;
    height: 8px;
    background: ${({theme:e})=>e.colors.brand.accent};
    border-radius: 50%;
  }
`,es=()=>(0,R.jsxs)(Na,{$band:`card`,"aria-labelledby":`experience`,children:[(0,R.jsx)(Fa,{id:`experience`,"data-number":Wa(`experience`),children:`Experience`}),Fo.map(({role:e,company:t,details:n,period:r,points:i})=>(0,R.jsxs)(qo,{"aria-label":`${e}, ${t}`,children:[(0,R.jsxs)(Jo,{children:[(0,R.jsx)(Yo,{children:r}),(0,R.jsx)(Xo,{children:t}),(0,R.jsx)(Zo,{children:n})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(Qo,{children:e}),(0,R.jsx)($o,{children:i.map(e=>(0,R.jsx)(`li`,{children:e},e))})]})]},`${e}-${t}`))]}),ts=ye.withTypes(),ns=Se.withTypes();I();var rs=F.section`
  margin-top: 36px;
  padding: 24px 28px;
  border: 1px dashed ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 24px;
    padding: 16px;
  }
`,is=F.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`,as=F.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`,os=F.li`
  margin: 0;
  padding: 28px;
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid ${({theme:e})=>e.colors.tile.border};
  transition: border-color 0.3s;
  box-shadow: ${({theme:e})=>e.boxShadow};
  border-radius: ${({theme:e})=>e.borderRadius};

  &:hover {
    border-color: ${({theme:e})=>e.colors.tile.borderHover};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`,ss=F.h3`
  font-size: 24px;
  color: ${({theme:e})=>e.colors.tile.header};
  margin: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`,cs=F.p`
  margin: 12px 0 0;
  font-size: 15px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 8px;
    font-size: 13px;
  }
`,ls=F.p`
  margin-top: 24px;
  line-height: 1.4;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`,us=F.dl`
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;
  margin-top: 24px;
  margin-bottom: 0;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`,ds=F.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`,fs=F.dd`
  margin: 0;
`,ps=F.a`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid ${({theme:e})=>ki(e.colors.primary,.3)};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`,ms=F.p`
  margin: 12px 0 0;
  line-height: 1.5;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,hs=F.ul`
  display: grid;
  grid-gap: 12px;
  margin: 16px 0 0;
  padding-left: 20px;
  line-height: 1.5;

  strong {
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  a {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`,gs=F.li``,_s=F.ul`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(0, 1fr);
  align-items: stretch;
  gap: 24px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
`,vs=`SzymonRojek`,ys=`https://github.com/${vs}`,bs=`https://github.com/SzymonRojek/homepage`,xs={name:`.github/workflows/ci.yml`,checks:[`ESLint and a strict TypeScript type check`,`Vitest unit and component tests with a 90% coverage gate`,`40+ Playwright tests on desktop and mobile, with axe scans of both themes`,`Lighthouse budgets on the median of three runs`,`npm audit on every push and weekly Dependabot updates`,`A fixture that fails any test calling the GitHub API`],result:`Every check passes → deploy to GitHub Pages`,badgeURL:`${bs}/actions/workflows/ci.yml/badge.svg`,workflowURL:`${bs}/actions/workflows/ci.yml`,testsURL:`${bs}/tree/main/e2e`},Ss={checks:[`npm audit`,`ESLint + TypeScript`,`Vitest · 90% coverage gate`,`Production build`,`Playwright + axe · desktop & mobile`,`Lighthouse budgets · median of 3`],result:`Deploy to GitHub Pages`},Cs={summary:`My portfolio is also a test project: a React and TypeScript site that ships only when unit, end-to-end, accessibility, performance and security checks all pass.`,story:{brief:`My first website, from 2021, was a learning project: it had no tests, and its project list could fail for a visitor. I rebuilt it to show my testing skills in practice, on a site that never breaks.`,researchAgainst:`Before the rebuild`,research:[{market:`Projects loaded from the GitHub API, which allows 60 requests an hour per address, so a visitor on a shared office network could see an error.`,mine:`All content is static, so there is nothing to time out or rate-limit.`},{market:`No automated tests and no CI.`,mine:`Every change passes unit, end-to-end, accessibility and Lighthouse checks before it can deploy.`},{market:`Reloading in dark mode flashed a white page.`,mine:`The theme is painted before JavaScript loads.`},{market:`The HTML was empty until JavaScript ran, so search engines and AI tools that don't run it saw a blank page.`,mine:`The build writes the whole page into the HTML, case studies included.`},{market:`Google Fonts blocked rendering, and the photo was three times larger than displayed.`,mine:`A self-hosted font and a right-sized photo raised mobile performance from 0.84 to about 0.9.`}],solution:[`Content in typed data files and a static build: no server, no runtime API calls.`,`A test pyramid: unit tests for logic, Playwright for what visitors see, axe for accessibility.`,`Every push passes audit, lint, type check, tests and Lighthouse budgets before it can deploy.`,`A protected main branch: changes reach the live site only through a pull request I review, so an AI coding assistant can't ship on its own.`],value:[`Free hosting on GitHub Pages.`,`Nothing can fail for a visitor: no API calls, no loading or error states.`,`Every change is verified before release, and anyone can check it through the public tests and CI badge.`]},developer:{headline:`A static React app with nothing that can fail for a visitor`,points:[`React 19 with strict TypeScript, Redux Toolkit for the theme and styled-components with typed light and dark themes.`,`Content lives in typed data files, so there are no runtime API calls and no loading or error states.`,`The theme follows the OS live, a saved choice wins, and it's painted before JavaScript loads, so a dark reload never flashes light.`,`A self-hosted font and a right-sized photo raised mobile Lighthouse performance from 0.84 to about 0.9.`],stack:[`React 19`,`TypeScript`,`Redux Toolkit`,`styled-components`,`Vite`,`GitHub Pages`]},tester:{headline:`Nothing ships unless every gate passes. Every push runs this pipeline:`,points:[],pipeline:xs,stack:[`Vitest`,`Testing Library`,`Playwright`,`axe`,`Lighthouse CI`,`Stryker`,`GitHub Actions`]},problem:[`The earlier version loaded my projects from the GitHub API in the visitor's browser. That API allows 60 unauthenticated requests per hour per IP address, so a recruiter on a shared office network could see an error box in the middle of a tester's portfolio.`],constraints:[`Free static hosting on GitHub Pages at my own domain, with no server.`,`One maintainer with limited time, so automation has to catch regressions.`,`WCAG AA colour contrast in both the light and the dark theme.`],diagrams:[{title:`Runtime: what a visitor's browser loads`,steps:[`Content in TypeScript data files`,`React components with light and dark themes`,`Vite production build`,`Whole page prerendered into the HTML`,`Static files on GitHub Pages`,`Browser: no API calls`]},{title:`Delivery: every change goes through these gates`,steps:[`Commit on dev`,`Dependency audit`,`Lint and type check`,`Unit tests with 90% coverage gate`,`Production build`,`Playwright and axe on desktop and mobile`,`Lighthouse budgets`,`Pull request to main, merged by me`,`Deploy to GitHub Pages`]}],decisions:[{decision:`Static project data instead of the GitHub API`,why:`Rate limits on shared networks could show recruiters an error.`,tradeOff:`Descriptions are updated by hand. An end-to-end fixture fails if the page ever calls the GitHub API again.`},{decision:`Test pyramid: Vitest for logic and components, Playwright for real-browser behaviour, axe for accessibility`,why:`Fast feedback on logic, and real confidence in what visitors see.`,tradeOff:`End-to-end tests take about a minute, so they cover only user-visible behaviour.`},{decision:`A 90% coverage gate that leaves out styles`,why:`Coverage should measure logic, not CSS.`,tradeOff:`Styles are checked by the end-to-end and axe tests instead.`},{decision:`Paint the theme before JavaScript loads`,why:`Reloading in dark mode briefly flashed a light page.`,tradeOff:`The background colours live in two places. A unit test keeps them in sync.`},{decision:`Prerender the page into the HTML at build time`,why:`Search engines and AI tools that don't run JavaScript saw an empty page.`,tradeOff:`Components must render without a browser. A unit test renders the page in Node and fails if one reaches for it.`},{decision:`Self-hosted font and a right-sized photo`,why:`Google Fonts blocked rendering, and the photo was three times larger than displayed.`,tradeOff:`Font updates are manual: the files live in the site and are preloaded in the HTML.`},{decision:`Protected main branch with pull requests I merge myself`,why:`Every push to main deploys. The rule also stops an AI coding assistant from shipping on its own.`,tradeOff:`Even a one-line fix needs a pull request and a green pipeline.`}],quality:[{area:`Testing`,text:`Vitest and Testing Library cover logic and components. Playwright runs against the production build in desktop and mobile Chrome, and again in Safari on a desktop, an iPad and iPhones, with tests grouped by page section and named steps. Role-based locators also check that every control has an accessible name.`},{area:`Performance`,text:`Lighthouse runs three times on every push and fails CI if the median performance score drops below 0.85 or layout shift goes above 0.1. Self-hosting the font and resizing the photo raised the mobile score from 0.84 to about 0.9 and brought the first paint forward from 3.0 s to 2.2 s. The build also writes the whole page into the HTML, so it can be read without JavaScript, and in the light theme React takes it over as it is, so the photo isn't drawn twice.`},{area:`Accessibility`,text:`axe scans the page in the light and dark themes with every case study expanded, and any serious or critical violation fails the build. Lighthouse accessibility must stay at 95 or above. The page uses semantic headings, landmarks and labelled lists.`},{area:`Security`,text:`No secrets and no runtime API calls. npm audit fails CI on high-severity advisories in the code shipped to visitors, and Dependabot proposes updates every week. External links use rel=“noreferrer”. Development-only tools still carry some advisories, but they never reach the browser.`}]},ws={summary:`A recruitment tool rebuilt from a 2021 email app: job offers go to the right candidates by role and budget, personalised, only with consent and not to anyone contacted in the last 14 days, with tests at every level and CI/CD through staging to production.`,story:{brief:`A small recruitment agency keeps its candidates in a spreadsheet. Every new job offer means filtering by hand, pasting addresses into Gmail and writing “Dear candidate”, with the risk of leaking addresses or contacting the same people too often.`,researchAgainst:`Spreadsheet and Gmail`,research:[{market:`Filter the sheet by hand and copy the addresses.`,mine:`Pick a role and a budget, and the matching candidates are found.`},{market:`“Dear candidate” for everyone.`,mine:`Every email uses the candidate's name and the role, and a mistyped placeholder is caught before sending.`},{market:`Nobody remembers who got which offer.`,mine:`Candidates contacted in the last 14 days are skipped by default, and the list shows when each one was last contacted.`},{market:`Consent is a column nobody updates.`,mine:`Only candidates open to offers get emails, and the opt-out link in every email updates the status by itself.`},{market:`One address in CC instead of BCC leaks everyone's email.`,mine:`One email per candidate, so nobody sees the others.`},{market:`What was sent is buried in the Sent folder.`,mine:`An outbox for each job offer shows who got it and every email exactly as it was sent.`}],solution:[`A server-only path to the data: the Airtable token never reaches the browser.`,`A one-click “Try the demo” login that exists only where the demo is switched on; API clients use a password, with a 15-minute lockout after 5 wrong attempts.`,`The browser suggests the recipients, and the server has the last word: it sends only to candidates open to offers.`,`Every email is built on the server from one template: personalised, escaped and with a signed opt-out link. The preview uses the same template.`,`An outbox instead of real sending, so the public demo can't email anyone.`,`Staging before production, a nightly demo reset followed by a read-only check of the live app, and error monitoring without personal data.`],value:[`Fewer costly mistakes: no CC leaks, no offer twice within two weeks and no email to anyone without consent.`,`From a role and a budget to personalised offers in one flow, with a preview before every send.`,`Safe to hand over and change: tests at every level, CI on every pull request and staging before production.`],nextStep:`Not built yet: real delivery. Every email is built, checked and saved to the outbox; sending it through an email service is one more transport in one file. Airtable's free plan also caps a base at 1,000 records and 1,000 API calls a month, so a bigger talent pool needs a paid tier.`},developer:{headline:`A 2021 email app rebuilt into a focused recruitment product`,points:[`React 19 client with shadcn/ui, TanStack Query and React Hook Form; an Express API in TypeScript on Node.js 24.`,`Signed login tokens valid for 8 hours. The one-click demo login exists only where it is switched on, and the lockout uses the visitor's real address behind Cloudflare, so one person can't block others.`,`Recipients by role, budget and last contact; the server re-checks consent and builds every email with a signed opt-out link.`,`Follows Airtable's paging and rate limits, resets the demo every night, reports errors to Sentry without personal data, and deploys dev to staging and main to production.`],stack:[`React 19`,`TypeScript`,`Express`,`Airtable API`,`Tailwind CSS`,`shadcn/ui`,`Sentry`,`Render`]},tester:{headline:`Tested from a single function to the live app`,points:[`200+ unit tests: Jest and supertest on the server, Vitest and React Testing Library on the client.`,`63 Playwright user flows on the production build against a fake Airtable, from a job offer draft to the outbox, opting out and phones. CI needs no secrets and never touches real data.`,`A Postman collection run by Newman in CI tests every endpoint from the outside, including refused logins, a duplicate email and a second send of the same offer; its read-only part checks the live app after every nightly reset.`,`Lighthouse audits 7 screens on every pull request and fails it if accessibility, best practices or SEO drop below 100.`],stack:[`Jest`,`supertest`,`Vitest`,`React Testing Library`,`Playwright`,`Postman`,`Newman`,`Lighthouse`,`GitHub Actions`]},problem:[`The app started in 2021 as an email CRUD client that sent emails through EmailJS straight from the browser. The Airtable key sat behind an Express proxy, but the login ran only in the browser: anyone who called the API directly could read, change or delete every record. My first review found 11 bugs.`,`In 2026 I rebuilt it to production standard and then narrowed it from a generic newsletter tool to one recruiter's problem: the right job offer to the right candidates, and not to anyone contacted in the last 14 days.`],constraints:[`Airtable is the database: a third-party REST API with rate limits and pages of 100 records.`,`Candidate data is personal data: consent, an opt-out in every email and no personal data in monitoring.`,`A public demo anyone can enter with one click: no real emails, visitors change the data, and only made-up data belongs in it.`,`Free hosting (Render) that sleeps after inactivity and blocks outgoing email (SMTP).`,`One maintainer, so every change has to be checked automatically and on staging before production.`],diagrams:[{title:`Runtime: the browser never talks to Airtable`,steps:[`React app`,`Express API under /api with a signed login token`,`Server checks consent, escapes text, signs opt-out links`,`Airtable: candidates, job offers, outbox, feedback`]},{title:`Delivery: feature branch to production`,steps:[`Feature branch off dev`,`Pull request: type check, lint, unit tests, build`,`Playwright e2e, Postman API tests and Lighthouse against a fake Airtable`,`Merge to dev, auto-deploy to staging`,`Check staging`,`Release pull request dev to main, CI again on all changes together`,`Auto-deploy to production`]}],decisions:[{decision:`Server-side login with signed tokens and a lockout after 5 wrong passwords`,why:`A browser-only login didn't protect the API at all.`,tradeOff:`The lockout lives in memory and resets when the free server restarts. It counts the real address behind Cloudflare, so one visitor can't block others.`},{decision:`A one-click demo login, only where the demo is switched on`,why:`A reviewer should try the app in one click, without a password.`,tradeOff:`Any server without the setting has no passwordless door; API clients still log in with the password.`},{decision:`The browser suggests the recipients, the server has the last word`,why:`Filtering by role, budget and last contact needs a fast, interactive list.`,tradeOff:`The server re-checks consent on every send, so an outdated or edited list can't reach someone who opted out.`},{decision:`An outbox instead of real sending in the demo`,why:`Anyone can enter the public demo, and the free host blocks SMTP.`,tradeOff:`Nobody gets the emails; each one is saved and can be opened. Real delivery is one more transport in one file, not built yet.`},{decision:`End-to-end, API and Lighthouse runs against a fake Airtable`,why:`Tests must never touch real data, and CI shouldn't need secrets.`,tradeOff:`The fake can drift from the real API, so it copies Airtable's record shape and errors.`},{decision:`Nightly reset of the demo data, then a read-only check of the live app`,why:`Visitors change the data, and the next reviewer should see a working example.`,tradeOff:`New examples are created before the old ones are deleted, and the reset is skipped when nothing changed, to save API calls. A broken demo fails the run.`},{decision:`One recruiter problem instead of a generic newsletter tool`,why:`A problem that is solved end to end is easier to explain, to use and to test.`,tradeOff:`Fewer features: the app only sends job offers to candidates.`},{decision:`Error monitoring without personal data`,why:`I need to see failures on the live demo without collecting data I don't need.`,tradeOff:`Sentry gets no IPs, headers or request bodies, so some errors are harder to reproduce.`},{decision:`Staging before production, with a hotfix path`,why:`Changes are checked on a live copy before real users see them.`,tradeOff:`Two environments to keep in sync, and a hotfix must be merged back into dev.`}],quality:[{area:`Testing`,text:`Server tests with Jest and supertest cover every endpoint, login and limits, sending and templates, opt-out links, the CSV import, feedback, the demo reset and privacy in monitoring, with Airtable mocked. Client tests with Vitest and React Testing Library cover validation, CSV, search, sorting and filtering, the API client and choosing recipients by role, budget and last contact. Playwright runs 63 user flows on the production build, from a job offer draft to the outbox, opting out, unsaved changes, dark mode and phones. A Postman collection of 30 requests, run by Newman in CI, tests every endpoint from the outside, and its read-only smoke folder checks the live app after every nightly reset.`},{area:`Performance`,text:`The server follows Airtable's paging, so lists show every record and not only the first 100. Approved feedback is kept in memory for 30 seconds and the nightly reset is skipped when nothing changed, both to stay within Airtable's API limits. Lighthouse reports performance on 7 screens; its limit only catches a real slowdown, because scores vary on shared CI machines. On the free plan the main cost is a cold start of up to a minute, which the README tells visitors about.`},{area:`Accessibility`,text:`The UI is built on shadcn/ui and Radix primitives, which handle keyboard and screen-reader support for dialogs, menus and side panels. Lighthouse audits 7 screens, logged out and in, on every pull request and fails it below 100 for accessibility; it already caught a low-contrast avatar and a button without a name. End-to-end tests find controls by their role and accessible name, and phone layouts have their own tests.`},{area:`Security`,text:`The Airtable token lives only on the server and error responses no longer leak it. Login tokens are HMAC-signed and expire after 8 hours, with constant-time comparisons and a lockout on the visitor's real address. The demo login exists only where it is switched on. Opt-out links have their own signature, user text is escaped in every email, the server has no CORS, and public feedback has a bot trap, a rate limit and moderation.`}]},Ts=[{text:`Built in my own time.`,side:`code`},{text:`Tested like production.`,side:`test`}],Es=`Two apps I built to practise development, then tested the way I test at work. Each has two sides: how I built it, and how I proved it works.`,Ds=[{title:`Talent Outreach: job offers to the right candidates`,repo:`talent-outreach`,language:`TypeScript`,category:`Testing`,description:`Full-stack recruitment tool: job offers to candidates by role and budget, personalised, only with consent and not to anyone contacted in the last 14 days, with unit, API, end-to-end and Lighthouse tests and CI/CD through staging to production.`,demoUrl:`https://talent-outreach.onrender.com/?utm_source=portfolio`,tag:`Full-stack app`,featured:!0,teaser:`Job offers to the right candidates: matched by role and budget, personalised, and skipping anyone contacted in the last 14 days.`,stats:[{value:`200+`,label:`unit tests`},{value:`63`,label:`Playwright flows`},{value:`56`,label:`API checks`}],caseStudy:ws},{title:`This website: built and tested like a real product`,repo:`homepage`,language:`TypeScript`,category:`Testing`,tag:`The site you're on`,cardTitle:`Nothing ships unless every gate passes.`,gates:Ss,description:`Built in React and TypeScript and tested like a production app: Vitest unit tests, Playwright end-to-end tests and axe accessibility scans run in GitHub Actions before every deploy.`,caseStudy:Cs}],Os=e=>`https://github.com/${vs}/${e}`;I();var ks=F.div`
  margin-top: 16px;
`,As=F.p`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`,js=F.ol`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    flex-direction: column;
    gap: 24px;
  }
`,Ms=F.li`
  position: relative;
  padding: 8px 12px;
  font-size: 14px;
  background: ${({theme:e})=>e.colors.site.background};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};

  &:not(:last-child)::after {
    content: "→";
    content: "→" / "";
    position: absolute;
    top: 50%;
    right: -24px;
    transform: translateY(-50%);
    font-weight: 700;
    color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    &:not(:last-child)::after {
      content: "↓";
      content: "↓" / "";
      top: auto;
      right: auto;
      bottom: -22px;
      left: 16px;
      transform: none;
    }
  }
`,Ns=({title:e,steps:t})=>{let n=(0,S.useId)();return(0,R.jsxs)(ks,{children:[(0,R.jsx)(As,{id:n,children:e}),(0,R.jsx)(js,{"aria-labelledby":n,children:t.map(e=>(0,R.jsx)(Ms,{children:e},e))})]})};I();var Ps=F.div`
  overflow: hidden;
  font-family: ${({theme:e})=>e.fontMono};
  color: ${({theme:e})=>e.colors.terminal.text};
  background: ${({theme:e})=>e.colors.terminal.background};
  border: 1px solid ${({theme:e})=>e.colors.terminal.border};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Fs=F.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.terminal.border};
`,Is=F.span`
  display: flex;
  gap: 6px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.terminal.border};
  }
`,Ls=F.span`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.terminal.muted};
`,Rs=F.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 16px 16px 4px;
  list-style: none;
  font-size: 14px;
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "✓";
    content: "✓" / "";
    position: absolute;
    left: 0;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.terminal.pass};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 14px 12px 4px;
    font-size: 13px;
  }
`,zs=F.p`
  margin: 12px 16px 16px;
  padding-top: 12px;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.terminal.pass};
  border-top: 1px dashed ${({theme:e})=>e.colors.terminal.border};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin: 10px 12px 14px;
    font-size: 13px;
  }
`,Bs=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  margin-top: 16px;
  font-size: 15px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`,Vs=({pipeline:{name:e,checks:t,result:n,badgeURL:r,workflowURL:i,testsURL:a}})=>(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(Ps,{children:[(0,R.jsxs)(Fs,{"aria-hidden":`true`,children:[(0,R.jsxs)(Is,{children:[(0,R.jsx)(`span`,{}),(0,R.jsx)(`span`,{}),(0,R.jsx)(`span`,{})]}),(0,R.jsx)(Ls,{children:e})]}),(0,R.jsx)(Rs,{"aria-label":`CI checks`,children:t.map(e=>(0,R.jsx)(`li`,{children:e},e))}),(0,R.jsx)(zs,{children:n})]}),(0,R.jsxs)(Bs,{children:[(0,R.jsx)(`a`,{href:i,target:`_blank`,rel:`noreferrer`,children:(0,R.jsx)(`img`,{src:r,alt:`CI status`,height:20,loading:`lazy`})}),(0,R.jsx)(ps,{href:a,target:`_blank`,rel:`noreferrer`,children:`See the end-to-end tests`})]})]});I();var Hs=F.ol`
  display: grid;
  gap: 24px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    gap: 20px;
    margin-top: 20px;
  }
`,Us=F.li`
  position: relative;
  padding-left: 56px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 40px;
    bottom: -24px;
    left: 17px;
    width: 2px;
    background: ${({theme:e})=>e.colors.headerLine};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding-left: 44px;

    &:not(:last-child)::after {
      left: 13px;
      top: 32px;
    }
  }
`,Ws=F.span`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  font-family: ${({theme:e})=>e.fontMono};
  font-weight: 700;
  color: ${({theme:e})=>e.colors.onPrimary};
  background: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
`,Gs=F.h4`
  margin: 0;
  padding-top: 5px;
  font-size: 20px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding-top: 2px;
    font-size: 18px;
  }
`,Ks=F.p`
  max-width: 820px;
  margin: 10px 0 0;
  padding: 16px 20px;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.site.background};
  border-left: 4px solid ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 12px 14px;
    font-size: 16px;
  }
`,qs=F.table`
  width: 100%;
  margin-top: 12px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 15px;
  line-height: 1.5;

  th,
  td {
    width: 50%;
    padding: 12px 16px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid ${({theme:e})=>e.colors.headerLine};
  }

  thead th {
    font-family: ${({theme:e})=>e.fontMono};
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  thead th:first-child {
    color: ${({theme:e})=>e.colors.muted};
  }

  thead th:last-child {
    color: ${({theme:e})=>e.colors.dev.accent};
  }

  td:last-child {
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};
    background: ${({theme:e})=>e.colors.dev.soft};
  }

  /* On phones each row becomes a card: what exists, then my answer. */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 14px;

    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    }

    tr,
    td {
      display: block;
      width: auto;
    }

    tr + tr {
      margin-top: 12px;
    }

    td {
      padding: 10px 12px;
      border: 1px solid ${({theme:e})=>e.colors.headerLine};
    }

    td:first-child {
      border-bottom: none;
      border-radius: ${({theme:e})=>e.borderRadiusSmall}
        ${({theme:e})=>e.borderRadiusSmall} 0 0;
    }

    td:last-child {
      border-radius: 0 0 ${({theme:e})=>e.borderRadiusSmall}
        ${({theme:e})=>e.borderRadiusSmall};
    }

    td::before {
      content: attr(data-label);
      display: block;
      margin-bottom: 2px;
      font-family: ${({theme:e})=>e.fontMono};
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${({theme:e})=>e.colors.muted};
    }
  }
`,Js=F.ul`
  max-width: 820px;
  margin: 12px 0 0;
  padding-left: 20px;
  line-height: 1.6;

  li + li {
    margin-top: 6px;
  }

  li::marker {
    color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,Ys=F.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 14px 16px 14px 44px;
    font-weight: 600;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.textPrimary};
    background: ${({theme:e})=>e.colors.qa.soft};
    border: 1px solid ${({theme:e})=>e.colors.qa.border};
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  li::before {
    content: "✓";
    content: "✓" / "";
    position: absolute;
    top: 14px;
    left: 18px;
    font-weight: 900;
    color: ${({theme:e})=>e.colors.qa.accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,Xs=F.p`
  max-width: 820px;
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.muted};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`,Zs=({story:{brief:e,researchAgainst:t,research:n,solution:r,value:i,nextStep:a}})=>(0,R.jsxs)(Hs,{"aria-label":`How I solved it`,children:[(0,R.jsxs)(Us,{children:[(0,R.jsx)(Ws,{"aria-hidden":`true`,children:`1`}),(0,R.jsx)(Gs,{children:`Brief`}),(0,R.jsx)(Ks,{children:e})]}),(0,R.jsxs)(Us,{children:[(0,R.jsx)(Ws,{"aria-hidden":`true`,children:`2`}),(0,R.jsx)(Gs,{children:`Research`}),(0,R.jsxs)(qs,{children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:t}),(0,R.jsx)(`th`,{scope:`col`,children:`My design`})]})}),(0,R.jsx)(`tbody`,{children:n.map(({market:e,mine:n})=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`td`,{"data-label":t,children:e}),(0,R.jsx)(`td`,{"data-label":`My design`,children:n})]},e))})]})]}),(0,R.jsxs)(Us,{children:[(0,R.jsx)(Ws,{"aria-hidden":`true`,children:`3`}),(0,R.jsx)(Gs,{children:`Solution`}),(0,R.jsx)(Js,{children:r.map(e=>(0,R.jsx)(`li`,{children:e},e))})]}),(0,R.jsxs)(Us,{children:[(0,R.jsx)(Ws,{"aria-hidden":`true`,children:`4`}),(0,R.jsx)(Gs,{children:`Value`}),(0,R.jsx)(Ys,{children:i.map(e=>(0,R.jsx)(`li`,{children:e},e))}),a&&(0,R.jsx)(Xs,{children:a})]})]}),Qs=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2.5,strokeLinecap:`round`,...e,children:(0,R.jsx)(`path`,{d:`M6 6l12 12M18 6 6 18`})});I();var $s=e=>e===`developer`?`dev`:`qa`,ec=F.article`
  display: ${({$open:e})=>e?`block`:`none`};
  margin-top: 24px;
  padding: 32px;
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.boxShadow};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 20px;
    padding: 20px;
  }
`,tc=F.p`
  display: inline-block;
  margin: 0;
  padding: 4px 10px;
  font-family: ${({theme:e})=>e.fontMono};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.site.background};
  border: 1px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
`,nc=F.h3`
  margin: 16px 0 0;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.tile.header};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`,rc=F.p`
  max-width: 820px;
  margin: 16px 0 0;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,ic=F.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 24px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,ac=F.section`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: ${({theme:e,$side:t})=>e.colors[$s(t)].soft};
  border: 1px solid ${({theme:e,$side:t})=>e.colors[$s(t)].border};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`,oc=F.p`
  margin: 0;
  font-family: ${({theme:e})=>e.fontMono};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e,$side:t})=>e.colors[$s(t)].accent};
`,sc=F.h4`
  margin: 6px 0 0;
  font-size: 20px;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`,cc=F.p`
  margin: 8px 0 0;
  font-weight: 600;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textPrimary};
`,lc=F.ul`
  flex-grow: 1;
  display: grid;
  align-content: start;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  line-height: 1.55;

  li {
    position: relative;
    padding-left: 24px;
  }

  li::before {
    content: "${({$side:e})=>e===`developer`?`›`:`✓`}";
    content: "${({$side:e})=>e===`developer`?`›`:`✓`}" / "";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 900;
    color: ${({theme:e,$side:t})=>e.colors[$s(t)].accent};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,uc=F.div`
  flex-grow: 1;
  margin-top: 16px;
`,dc=F(Ha)`
  margin-top: 20px;
`,fc=F.details`
  margin-top: 16px;

  @supports (interpolate-size: allow-keywords) {
    interpolate-size: allow-keywords;

    &::details-content {
      height: 0;
      opacity: 0;
      overflow: clip;
      overflow-clip-margin: 8px;
      transition:
        height 0.35s ease-out,
        opacity 0.35s ease-out,
        content-visibility 0.35s allow-discrete;
    }

    &[open]::details-content {
      height: auto;
      opacity: 1;
    }

    @media (prefers-reduced-motion: reduce) {
      &::details-content {
        transition: none;
      }
    }
  }
`,pc=F.summary`
  display: block;
  width: fit-content;
  margin-left: auto;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary};
  cursor: pointer;
  list-style: none;
  transition: color 0.2s;

  &::-webkit-details-marker {
    display: none;
  }

  /* A quiet hover: the colour shifts, and a closed arrow nudges forward. */
  &:hover {
    color: ${({theme:e})=>e.colors.primaryHover};
  }

  details:not([open]) > &:hover::before {
    transform: translateX(2px);
  }

  /* An inline block, so it can turn and move. */
  &::before {
    content: "▸";
    content: "▸" / "";
    display: inline-block;
    margin-right: 8px;
    transition: transform 0.2s;
  }

  details[open] > &::before {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    &::before {
      transition: none;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    outline-offset: 4px;
  }
`,mc=F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`,hc=F.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  cursor: pointer;
  ${Fi}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
    outline-offset: 2px;
  }
`,gc=F(Qs)`
  width: 18px;
  height: 18px;
`,_c=F.section`
  margin-top: 24px;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 20px;
  }
`,vc=F.h4`
  margin: 0;
  font-size: 20px;
  color: ${({theme:e})=>e.colors.textPrimary};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`,yc=F.p`
  max-width: 760px;
  margin: 12px 0 0;
  line-height: 1.6;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,bc=F.ul`
  max-width: 760px;
  margin: 12px 0 0;
  padding-left: 20px;
  line-height: 1.6;

  li + li {
    margin-top: 6px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,xc=F.div`
  margin-top: 12px;
  overflow-x: auto;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary};
  }
`,Sc=F.table`
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  font-size: 15px;
  line-height: 1.5;

  th,
  td {
    padding: 12px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid ${({theme:e})=>e.colors.headerLine};
  }

  thead th {
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.primary};
  }

  tbody th {
    width: 30%;
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  /* On phones each decision becomes a stacked card instead of a wide row. */
  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    min-width: 0;
    font-size: 14px;

    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
    }

    tr,
    th,
    td {
      display: block;
    }

    tbody th {
      width: auto;
      padding: 16px 0 4px;
      border: none;
    }

    td {
      padding: 4px 0;
      border: none;
    }

    td::before {
      content: attr(data-label) ": ";
      font-weight: 700;
      color: ${({theme:e})=>e.colors.primary};
    }

    tr {
      padding-bottom: 12px;
      border-bottom: 1px solid ${({theme:e})=>e.colors.headerLine};
    }
  }
`,Cc=F.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 12px 0 0;

  dt {
    font-weight: 700;
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  dd {
    margin: 6px 0 0;
    line-height: 1.6;
  }

  > div {
    padding: 16px;
    background: ${({theme:e})=>e.colors.site.background};
    border: 1px solid ${({theme:e})=>e.colors.headerLine};
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 15px;
  }
`,wc={developer:{label:`Developer view`,title:`How I built it`},tester:{label:`Automation view`,title:`How I proved it works`}},Tc=({id:e,side:t,lens:{headline:n,points:r,stack:i,pipeline:a}})=>(0,R.jsxs)(ac,{$side:t,id:`${e}-${t}`,tabIndex:-1,"aria-labelledby":`${e}-${t}-title`,children:[(0,R.jsx)(oc,{$side:t,children:wc[t].label}),(0,R.jsx)(sc,{id:`${e}-${t}-title`,children:wc[t].title}),(0,R.jsx)(cc,{children:n}),r.length>0&&(0,R.jsx)(lc,{$side:t,children:r.map(e=>(0,R.jsx)(`li`,{children:e},e))}),a&&(0,R.jsx)(uc,{children:(0,R.jsx)(Vs,{pipeline:a})}),(0,R.jsx)(dc,{"aria-label":`${wc[t].label} stack`,children:i.map(e=>(0,R.jsx)(Va,{children:e},e))})]}),Ec=({title:e,repo:t,caseStudy:n,open:r=!0})=>{let i=`case-study-${t}`,{summary:a,story:o,developer:s,tester:c,problem:l,constraints:u,diagrams:d,decisions:f,quality:p}=n,m=(0,S.useRef)(null),h=(0,S.useRef)(null);return(0,R.jsxs)(ec,{id:i,"aria-labelledby":`${i}-title`,tabIndex:-1,$open:r,children:[(0,R.jsx)(tc,{children:`Case study`}),(0,R.jsx)(nc,{id:`${i}-title`,children:e}),!o&&(0,R.jsx)(rc,{children:a}),o&&(0,R.jsx)(Zs,{story:o}),(0,R.jsxs)(ic,{children:[(0,R.jsx)(Tc,{id:i,side:`tester`,lens:c}),(0,R.jsx)(Tc,{id:i,side:`developer`,lens:s})]}),(0,R.jsxs)(fc,{ref:m,children:[(0,R.jsx)(pc,{ref:h,children:`Technical details`}),(0,R.jsxs)(_c,{children:[(0,R.jsx)(vc,{children:`Problem`}),l.map(e=>(0,R.jsx)(yc,{children:e},e))]}),(0,R.jsxs)(_c,{children:[(0,R.jsx)(vc,{children:`Constraints`}),(0,R.jsx)(bc,{children:u.map(e=>(0,R.jsx)(`li`,{children:e},e))})]}),(0,R.jsxs)(_c,{children:[(0,R.jsx)(vc,{children:`Architecture`}),d.map(({title:e,steps:t})=>(0,R.jsx)(Ns,{title:e,steps:t},e))]}),(0,R.jsxs)(_c,{children:[(0,R.jsx)(vc,{children:`Key decisions and trade-offs`}),(0,R.jsx)(xc,{tabIndex:0,role:`region`,"aria-label":`Key decisions and trade-offs`,children:(0,R.jsxs)(Sc,{children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`col`,children:`Decision`}),(0,R.jsx)(`th`,{scope:`col`,children:`Why`}),(0,R.jsx)(`th`,{scope:`col`,children:`Trade-off`})]})}),(0,R.jsx)(`tbody`,{children:f.map(({decision:e,why:t,tradeOff:n})=>(0,R.jsxs)(`tr`,{children:[(0,R.jsx)(`th`,{scope:`row`,children:e}),(0,R.jsx)(`td`,{"data-label":`Why`,children:t}),(0,R.jsx)(`td`,{"data-label":`Trade-off`,children:n})]},e))})]})})]}),(0,R.jsxs)(_c,{children:[(0,R.jsx)(vc,{children:`Testing, performance, accessibility and security`}),(0,R.jsx)(Cc,{children:p.map(({area:e,text:t})=>(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`dt`,{children:e}),(0,R.jsx)(`dd`,{children:t})]},e))})]}),(0,R.jsx)(mc,{children:(0,R.jsx)(hc,{type:`button`,"aria-label":`Close the technical details`,onClick:()=>{m.current&&(m.current.open=!1),h.current?.focus(),h.current?.scrollIntoView?.({block:`center`})},children:(0,R.jsx)(gc,{"aria-hidden":`true`})})})]})]})},Dc=(e,t,n)=>{(0,S.useEffect)(()=>{let r=e.current;if(!r||typeof IntersectionObserver>`u`||window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches||r.getBoundingClientRect().top<window.innerHeight)return;t(r);let i,a=new IntersectionObserver(e=>{e.some(({isIntersecting:e})=>e)&&(a.disconnect(),i=n(r))},{threshold:.6});return a.observe(r),()=>{a.disconnect(),i?.()}},[e,t,n])};I();var Oc=.5,kc=.35,Ac=yn`
  from {
    opacity: 0;
    transform: scale(0.4);
  }
`,jc=yn`
  to {
    opacity: 0;
  }
`,Mc=yn`
  from {
    color: var(--waiting);
  }
`,Nc=F.span`
  width: 12px;
  height: 12px;
  border: 1.5px solid ${({theme:e})=>e.colors.headerLine};
  border-radius: 50%;
  opacity: 0;

  [data-state] & {
    opacity: 1;
  }
`,Pc=F.span`
  font-weight: 700;
  color: ${({theme:e})=>e.colors.qa.accent};
`,Fc=F.div`
  --waiting: ${({theme:e})=>e.colors.muted};
  margin-top: 22px;

  &[data-state="waiting"] li {
    color: var(--waiting);
  }

  &[data-state="waiting"] ${Pc}, &[data-state="waiting"] p {
    opacity: 0;
  }

  &[data-state="running"] li,
  &[data-state="running"] p {
    --delay: calc(var(--step) * ${Oc}s);
  }

  &[data-state="running"] li {
    animation: ${Mc} ${kc}s var(--delay) both;
  }

  &[data-state="running"] ${Pc} {
    animation: ${Ac} ${kc}s var(--delay) ease-out both;
  }

  &[data-state="running"] ${Nc} {
    animation: ${jc} ${kc}s var(--delay) both;
  }

  &[data-state="running"] p {
    animation: ${Ac} ${kc}s var(--delay) ease-out both;
  }
`,Ic=F.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  color: ${({theme:e})=>e.colors.textPrimary};
`,Lc=F.li`
  display: flex;
  align-items: baseline;
  gap: 8px;
`,Rc=F.span`
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 14px;
  align-self: center;

  & > * {
    grid-area: 1 / 1;
  }
`,zc=F.p`
  margin: 12px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.qa.accent};

  &::before {
    content: "→";
    content: "→" / "";
    margin-right: 8px;
  }
`,Bc=e=>({"--step":e}),Vc=e=>{e.dataset.state=`waiting`},Hc=e=>{e.dataset.state=`running`},Uc=({title:e,gates:{checks:t,result:n}})=>{let r=(0,S.useRef)(null);return Dc(r,Vc,Hc),(0,R.jsxs)(Fc,{ref:r,children:[(0,R.jsx)(Ic,{"aria-label":`${e}: CI gates, all passing`,children:t.map((e,t)=>(0,R.jsxs)(Lc,{style:Bc(t),children:[(0,R.jsxs)(Rc,{"aria-hidden":`true`,children:[(0,R.jsx)(Nc,{}),(0,R.jsx)(Pc,{children:`✓`})]}),e]},e))}),(0,R.jsx)(zc,{style:Bc(t.length),children:n})]})};I();var Wc=F.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
  }

  strong {
    position: relative;
    font-variant-numeric: tabular-nums;
    font-family: ${({theme:e})=>e.fontDisplay};
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: ${({theme:e,$featured:t})=>t?e.colors.brand.accent:e.colors.primary};
  }

  span {
    margin-top: 2px;
    font-size: 14px;
    color: ${({theme:e,$featured:t})=>t?e.colors.brand.muted:e.colors.muted};
  }

  /* While counting, the number on screen is drawn over the real one, which
     keeps its place (so nothing moves) and stays in the page for screen
     readers; the drawn one is hidden from them. */
  strong[data-shown] {
    color: transparent;
  }

  strong[data-shown]::after {
    content: attr(data-shown);
    content: attr(data-shown) / "";
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme:e,$featured:t})=>t?e.colors.brand.accent:e.colors.primary};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    gap: 12px 20px;

    strong {
      font-size: 30px;
    }
  }
`,Gc=1800,Kc=e=>{let t=/^(\d+)(.*)$/.exec(e);return t?{to:Number(t[1]),suffix:t[2]}:void 0},qc=e=>[...e.querySelectorAll(`strong`)].flatMap(e=>{let t=Kc(e.textContent??``);return t?[{strong:e,...t}]:[]}),Jc=e=>{for(let{strong:t,suffix:n}of qc(e))t.dataset.shown=`0${n}`},Yc=e=>{let t=qc(e),n,r=requestAnimationFrame(function e(i){n??=i;let a=Math.min((i-n)/Gc,1),o=1-(1-a)**3;for(let{strong:e,to:n,suffix:r}of t)a<1?e.dataset.shown=`${Math.round(n*o)}${r}`:delete e.dataset.shown;a<1&&(r=requestAnimationFrame(e))});return()=>cancelAnimationFrame(r)},Xc=({title:e,stats:t,featured:n})=>{let r=(0,S.useRef)(null);return Dc(r,Jc,Yc),(0,R.jsx)(Wc,{ref:r,"aria-label":`${e}: in numbers`,$featured:n,children:t.map(({value:e,label:t})=>(0,R.jsxs)(`li`,{children:[(0,R.jsx)(`strong`,{children:e}),` `,(0,R.jsx)(`span`,{children:t})]},t))})},Zc=e=>(0,R.jsx)(`svg`,{width:48,height:48,viewBox:`0 0 48 48`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,R.jsx)(`path`,{d:`M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z`})}),Qc=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2.5,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,R.jsx)(`path`,{d:`m6 9 6 6 6-6`})}),$c=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2.5,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,R.jsx)(`path`,{d:`M7 17 17 7M8 7h9v9`})});I();var el=F.li`
  /* The buttons below lay out by the card's own width, not the screen's. */
  container-type: inline-size;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.boxBackground};
  border: 1px solid
    ${({theme:e,$expanded:t})=>t?e.colors.primary:e.colors.headerLine};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: border-color 0.2s;

  ${({theme:e,$featured:t,$expanded:n})=>t&&pn`
      color: ${e.colors.brand.text};
      background: ${e.colors.brand.background};
      border-color: ${n?e.colors.brand.accent:e.colors.brand.background};

      &::after {
        content: "";
        position: absolute;
        right: -120px;
        bottom: -120px;
        width: 300px;
        height: 300px;
        border: 56px solid ${e.colors.brand.accent};
        border-radius: 50%;
        opacity: 0.1;
        pointer-events: none;
      }

      /* The content above the ring. */
      & > * {
        position: relative;
        z-index: 1;
      }

      *:focus-visible {
        outline-color: ${e.colors.brand.accent};
      }
    `}

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    padding: 22px;
  }
`,tl=F.p`
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({theme:e,$featured:t})=>t?e.colors.brand.accent:e.colors.qa.accent};
`,nl=F.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: ${({theme:e,$featured:t})=>t?e.colors.brand.text:e.colors.textPrimary};
  text-wrap: balance;

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 21px;
  }
`,rl=F.p`
  max-width: 34em;
  margin: 14px 0 0;
  font-size: ${({$featured:e})=>e?`17px`:`16px`};
  line-height: 1.6;
  color: ${({theme:e,$featured:t})=>t?e.colors.brand.muted:`inherit`};
`,il=F.ul`
  display: flex;
  flex-direction: ${({$featured:e})=>e?`row`:`column`};
  flex-wrap: wrap;
  gap: ${({$featured:e})=>e?`8px 24px`:`8px`};
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  font-size: 15px;
  color: ${({theme:e,$featured:t})=>t?e.colors.brand.text:e.colors.textPrimary};

  li::before {
    /* Decorative: the empty alt keeps screen readers from saying "tick". */
    content: "✓";
    content: "✓" / "";
    margin-right: 8px;
    font-weight: 700;
    color: ${({theme:e,$featured:t})=>t?e.colors.brand.accent:e.colors.qa.accent};
  }
`,al=F.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  /* At the bottom of the card, so both cards end their buttons level. */
  margin-top: auto;
  padding-top: 28px;

  @container (max-width: 379px) {
    &:has(> :nth-child(3)) {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: start;

      & > :first-child {
        grid-column: 1 / -1;
        justify-self: start;
      }
    }
  }
`,ol=F(Pi)`
  ${({theme:e,$featured:t})=>t&&pn`
      color: ${e.colors.brand.onAccent};
      background: ${e.colors.brand.accent};

      &:hover {
        background: ${e.colors.brand.accentHover};
      }
    `}
`,sl=F(Ii)`
  ${({theme:e,$featured:t})=>t&&pn`
      color: ${e.colors.brand.text};
      background: transparent;
      border-color: ${e.colors.brand.controlBorder};

      &:hover {
        background: ${e.colors.brand.control};
        border-color: ${e.colors.brand.text};
      }
    `}
`,cl=F(Qc)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transform: rotate(${({$expanded:e})=>e?`180deg`:`0`});
  transition: transform 0.2s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ll=`
  transition: transform 0.2s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ul=F($c)`
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  ${ll}

  ${sl}:hover & {
    transform: translate(2px, -2px);
  }
`,dl=F(Zc)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  ${ll}

  ${sl}:hover & {
    transform: translateY(-2px);
  }
`,fl=({project:{title:e,repo:t,description:n,demoUrl:r,teaser:i,cardTitle:a,facts:o,gates:s,stats:c,tag:l,featured:u},expanded:d,onToggle:f})=>{let p=u===!0,m=t=>`${t}: ${e.split(`:`)[0]}`,h=a?i:i??n;return(0,R.jsxs)(el,{$expanded:d,$featured:p,children:[l&&(0,R.jsx)(tl,{$featured:p,children:l}),(0,R.jsx)(nl,{$featured:p,children:a??e}),h&&(0,R.jsx)(rl,{$featured:p,children:h}),s&&(0,R.jsx)(Uc,{title:e,gates:s}),c&&(0,R.jsx)(Xc,{title:e,stats:c,featured:p}),!s&&!c&&o&&(0,R.jsx)(il,{"aria-label":`${e}: key facts`,$featured:p,children:o.map(e=>(0,R.jsx)(`li`,{children:e},e))}),(0,R.jsxs)(al,{children:[(0,R.jsxs)(ol,{type:`button`,"aria-label":m(`Case study`),"aria-expanded":d,"aria-controls":d?`case-study-${t}`:void 0,onClick:f,$featured:p,children:[`Case study`,(0,R.jsx)(cl,{"aria-hidden":`true`,$expanded:d})]}),r&&(0,R.jsxs)(sl,{href:r,"aria-label":m(`Demo`),target:`_blank`,rel:`noreferrer`,$featured:p,children:[(0,R.jsx)(ul,{"aria-hidden":`true`}),`Demo`]}),(0,R.jsxs)(sl,{href:Os(t),"aria-label":m(`Code`),target:`_blank`,rel:`noreferrer`,$featured:p,children:[(0,R.jsx)(dl,{"aria-hidden":`true`}),`Code`]})]})]})};function pl(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ml=typeof Symbol==`function`&&Symbol.observable||`@@observable`,hl=()=>Math.random().toString(36).substring(7).split(``).join(`.`),gl={INIT:`@@redux/INIT${hl()}`,REPLACE:`@@redux/REPLACE${hl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hl()}`};function _l(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function vl(e,t,n){if(typeof e!=`function`)throw Error(pl(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(pl(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(pl(1));return n(vl)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(pl(3));return i}function d(e){if(typeof e!=`function`)throw Error(pl(4));if(c)throw Error(pl(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(pl(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!_l(e))throw Error(pl(7));if(e.type===void 0)throw Error(pl(8));if(typeof e.type!=`string`)throw Error(pl(17));if(c)throw Error(pl(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(pl(10));r=e,f({type:gl.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(pl(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[ml](){return this}}}return f({type:gl.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[ml]:m}}function U(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:gl.INIT})===void 0)throw Error(pl(12));if(n(void 0,{type:gl.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(pl(13))})}function yl(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{U(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(pl(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function bl(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function xl(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(pl(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=bl(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function Sl(e){return _l(e)&&`type`in e&&typeof e.type==`string`}var Cl=Symbol.for(`immer-nothing`),wl=Symbol.for(`immer-draftable`),Tl=Symbol.for(`immer-state`);function El(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var W=Object,Dl=W.getPrototypeOf,Ol=`constructor`,kl=`prototype`,Al=`configurable`,jl=`enumerable`,Ml=`writable`,Nl=`value`,Pl=e=>!!e&&!!e[Tl];function Fl(e){return e?Rl(e)||Gl(e)||!!e[wl]||!!e[Ol]?.[wl]||Kl(e)||ql(e):!1}var Il=W[kl][Ol].toString(),Ll=new WeakMap;function Rl(e){if(!e||!Jl(e))return!1;let t=Dl(e);if(t===null||t===W[kl])return!0;let n=W.hasOwnProperty.call(t,Ol)&&t[Ol];if(n===Object)return!0;if(!Yl(n))return!1;let r=Ll.get(n);return r===void 0&&(r=Function.toString.call(n),Ll.set(n,r)),r===Il}function zl(e,t,n=!0){Bl(e)===0?(n?Reflect.ownKeys(e):W.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Bl(e){let t=e[Tl];return t?t.type_:Gl(e)?1:Kl(e)?2:ql(e)?3:0}var Vl=(e,t,n=Bl(e))=>n===2?e.has(t):W[kl].hasOwnProperty.call(e,t),Hl=(e,t,n=Bl(e))=>n===2?e.get(t):e[t],Ul=(e,t,n,r=Bl(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Wl(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var Gl=Array.isArray,Kl=e=>e instanceof Map,ql=e=>e instanceof Set,Jl=e=>typeof e==`object`,Yl=e=>typeof e==`function`,Xl=e=>typeof e==`boolean`;function Zl(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var Ql=e=>e.copy_||e.base_,$l=e=>e.modified_?e.copy_:e.base_;function eu(e,t){if(Kl(e))return new Map(e);if(ql(e))return new Set(e);if(Gl(e))return Array[kl].slice.call(e);let n=Rl(e);if(t===!0||t===`class_only`&&!n){let t=W.getOwnPropertyDescriptors(e);delete t[Tl];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[Ml]===!1&&(a[Ml]=!0,a[Al]=!0),(a.get||a.set)&&(t[i]={[Al]:!0,[Ml]:!0,[jl]:a[jl],[Nl]:e[i]})}return W.create(Dl(e),t)}{let t=Dl(e);if(t!==null&&n)return{...e};let r=W.create(t);return W.assign(r,e)}}function tu(e,t=!1){return iu(e)||Pl(e)||!Fl(e)?e:(Bl(e)>1&&W.defineProperties(e,{set:ru,add:ru,clear:ru,delete:ru}),W.freeze(e),t&&zl(e,(e,t)=>{tu(t,!0)},!1),e)}function nu(){El(2)}var ru={[Nl]:nu};function iu(e){return e===null||!Jl(e)||W.isFrozen(e)}var G=`MapSet`,au=`Patches`,ou=`ArrayMethods`,su={};function cu(e){let t=su[e];return t||El(0,e),t}var lu=e=>!!su[e],uu,du=()=>uu,fu=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:lu(G)?cu(G):void 0,arrayMethodsPlugin_:lu(ou)?cu(ou):void 0});function pu(e,t){t&&(e.patchPlugin_=cu(au),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function mu(e){hu(e),e.drafts_.forEach(_u),e.drafts_=null}function hu(e){e===uu&&(uu=e.parent_)}var gu=e=>uu=fu(uu,e);function _u(e){let t=e[Tl];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function vu(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[Tl].modified_&&(mu(t),El(4)),Fl(e)&&(e=yu(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[Tl].base_,e,t)}else e=yu(t,n);return bu(t,e,!0),mu(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Cl?void 0:e}function yu(e,t){if(iu(t))return t;let n=t[Tl];if(!n)return Ou(t,e.handledSet_,e);if(!Su(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);Eu(n,e)}return n.copy_}function bu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&tu(t,n)}function xu(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Su=(e,t)=>e.scope_===t,Cu=[];function wu(e,t,n,r){let i=Ql(e),a=e.type_;if(r!==void 0&&Hl(i,r,a)===t){Ul(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;zl(i,(e,n)=>{if(Pl(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Cu;for(let e of o)Ul(i,e,n,a)}function Tu(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Su(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=$l(i);wu(e,i.draft_??i,a,n),Eu(i,r)})}function Eu(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}xu(e)}}function Du(e,t,n){let{scope_:r}=e;if(Pl(n)){let i=n[Tl];Su(i,r)&&i.callbacks_.push(function(){Lu(e),wu(e,n,$l(i),t)})}else Fl(n)&&e.callbacks_.push(function(){let i=Ql(e);e.type_===3?i.has(n)&&Ou(n,r.handledSet_,r):Hl(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ou(Hl(e.copy_,t,e.type_),r.handledSet_,r)})}function Ou(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Pl(e)||t.has(e)||!Fl(e)||iu(e)?e:(t.add(e),zl(e,(r,i)=>{if(Pl(i)){let t=i[Tl];Su(t,n)&&(Ul(e,r,$l(t),e.type_),xu(t))}else Fl(i)&&Ou(i,t,n)}),e)}function ku(e,t){let n=Gl(e),r={type_:+!!n,scope_:t?t.scope_:du(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=Au;n&&(i=[r],a=ju);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var Au={get(e,t){if(t===Tl)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=Ql(e);if(!Vl(i,t,e.type_))return Pu(e,i,t);let a=i[t];if(e.finalized_||!Fl(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Zl(t))return a;if(a===Mu(e.base_,t)||Nu(e,t,a)){Lu(e);let n=e.type_===1?+t:t,r=zu(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in Ql(e)},ownKeys(e){return Reflect.ownKeys(Ql(e))},set(e,t,n){let r=Fu(Ql(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Mu(Ql(e),t),i=r?.[Tl];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Wl(n,r)&&(n!==void 0||Vl(e.base_,t,e.type_)))return!0;Lu(e),Iu(e)}return e.copy_[t]===n&&(n!==void 0||Vl(e.copy_,t,e.type_))||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),Du(e,t,n),!0)},deleteProperty(e,t){return Lu(e),Mu(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Iu(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=Ql(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Ml]:!0,[Al]:e.type_!==1||t!==`length`,[jl]:r[jl],[Nl]:n[t]}},defineProperty(){El(11)},getPrototypeOf(e){return Dl(e.base_)},setPrototypeOf(){El(12)}},ju={};for(let e in Au){let t=Au[e];ju[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}ju.deleteProperty=function(e,t){return ju.set.call(this,e,t,void 0)},ju.set=function(e,t,n){return Au.set.call(this,e[0],t,n,e[0])};function Mu(e,t){let n=e[Tl];return(n?Ql(n):e)[t]}function Nu(e,t,n){return e.type_!==1||!e.allIndicesReassigned_||e.assigned_?.get(t)||!Fl(n)||n[Tl]?!1:e.baseRefs_.has(n)}function Pu(e,t,n){let r=Fu(t,n);return r?Nl in r?r[Nl]:r.get?.call(e.draft_):void 0}function Fu(e,t){if(!(t in e))return;let n=Dl(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Dl(n)}}function Iu(e){e.modified_||(e.modified_=!0,e.parent_&&Iu(e.parent_))}function Lu(e){e.copy_||=(e.assigned_=new Map,eu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ru=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Yl(e)&&!Yl(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Yl(t)||El(6),n!==void 0&&!Yl(n)&&El(7);let r;if(Fl(e)){let i=gu(this),a=zu(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?mu(i):hu(i)}return pu(i,n),vu(r,i)}if(!e||!Jl(e)){if(r=t(e),r===void 0&&(r=e),r===Cl&&(r=void 0),this.autoFreeze_&&tu(r,!0),n){let t=[],i=[];cu(au).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}El(1,e)},this.produceWithPatches=(e,t)=>{if(Yl(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Xl(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Xl(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Xl(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Fl(e)||El(8),Pl(e)&&(e=Bu(e));let t=gu(this),n=zu(t,e,void 0);return n[Tl].isManual_=!0,hu(t),n}finishDraft(e,t){let n=e&&e[Tl];(!n||!n.isManual_)&&El(9);let{scope_:r}=n;return pu(r,t),vu(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=cu(au).applyPatches_;return Pl(e)?r(e,t):this.produce(e,e=>r(e,t))}};function zu(e,t,n,r){let[i,a]=Kl(t)?cu(G).proxyMap_(t,n):ql(t)?cu(G).proxySet_(t,n):ku(t,n);return(n?.scope_??du()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Tu(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Bu(e){return Pl(e)||El(10,e),Vu(e)}function Vu(e){if(!Fl(e)||iu(e))return e;let t=e[Tl],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=eu(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=eu(e,!0);return zl(n,(e,t)=>{Ul(n,e,Vu(t))},r),t&&(t.finalized_=!1),n}globalThis.Iterator?.from;var Hu=new Ru().produce;function Uu(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var Wu=Uu(),Gu=Uu,Ku=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?bl:bl.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function qu(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(xd(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Sl(t)&&t.type===e,n}var Ju=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Yu(e){return Fl(e)?Hu(e,()=>{}):e}function Xu(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Zu(e){return typeof e==`boolean`}var Qu=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new Ju;return t&&(Zu(t)?a.push(Wu):a.push(Gu(t.extraArgument))),a},$u=`RTK_autoBatch`,K=e=>t=>{setTimeout(t,e)},q=(e,t)=>n=>{let r=!1,i,a,o=()=>{r||(r=!0,cancelAnimationFrame(i),clearTimeout(a),n())};i=e(o),a=setTimeout(o,t)},J=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?q(window.requestAnimationFrame,100):K(10):e.type===`callback`?e.queueNotification:K(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[$u],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},Y=e=>function(t){let{autoBatch:n=!0}=t??{},r=new Ju(e);return n&&r.push(J(typeof n==`object`?n:void 0)),r};function X(e){let t=Qu(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(_l(n))c=yl(n);else throw Error(xd(1));let l;l=typeof r==`function`?r(t):t();let u=bl;i&&(u=Ku({trace:!1,...typeof i==`object`&&i}));let d=Y(xl(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return vl(c,o,p)}function ed(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(xd(28));if(r in t)throw Error(xd(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function td(e){return typeof e==`function`}function nd(e,t){let[n,r,i]=ed(t),a;if(td(e))a=()=>Yu(e());else{let t=Yu(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n){if(Pl(e)){let r=n(e,t);return r===void 0?e:r}if(Fl(e))return Hu(e,e=>n(e,t));{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(xd(9))}return r}}return e},e)}return o.getInitialState=a,o}var rd=Symbol.for(`rtk-slice-createasyncthunk`);function id(e,t){return`${e}/${t}`}function ad({creators:e}={}){let t=e?.asyncThunk?.[rd];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(xd(11));let i=(typeof e.reducers==`function`?e.reducers(cd()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(xd(12));if(n in o.sliceCaseReducersByType)throw Error(xd(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:id(n,r),createNotation:typeof e.reducers==`function`};ud(a)?fd(o,a,s,t):ld(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?ed(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return nd(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=Xu(d,r,m)),i}function i(t=l){return Xu(Xu(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=od(a,t,()=>Xu(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function od(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var sd=ad();function cd(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function ld({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!dd(r))throw Error(xd(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?qu(e,o):qu(e))}function ud(e){return e._reducerDefinitionType===`asyncThunk`}function dd(e){return e._reducerDefinitionType===`reducerWithPrepare`}function fd({type:e,reducerName:t},n,r,i){if(!i)throw Error(xd(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||pd,pending:s||pd,rejected:c||pd,settled:l||pd})}function pd(){}var md=`listener`,hd=`completed`,gd=`cancelled`;`${gd}`,`${hd}`,`${md}${gd}`,`${md}${hd}`;var{assign:_d}=Object,vd=`listenerMiddleware`,yd=_d(qu(`${vd}/add`),{withTypes:()=>yd});`${vd}`;var bd=_d(qu(`${vd}/remove`),{withTypes:()=>bd});function xd(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Sd=Ds.filter(({caseStudy:e})=>e).map(({repo:e})=>e),Cd=(e=window.location.hash)=>{let t=/^#case-study-(.+?)(?:-(developer|tester))?$/.exec(decodeURIComponent(e)),n=t?.[1];return n&&Sd.includes(n)?{openRepo:n,side:t[2]??null}:{openRepo:null,side:null}},wd=sd({name:`projectView`,initialState:{openRepo:null,side:null},reducers:{openCaseStudy:(e,{payload:t})=>{e.openRepo=t,e.side=null},openFromAddress:(e,{payload:t})=>{e.openRepo=t.openRepo,e.side=t.side}}}),{openCaseStudy:Td,openFromAddress:Ed}=wd.actions,Dd=e=>e.projectView,Od=e=>Dd(e).openRepo,kd=e=>Dd(e).side,Ad=wd.reducer,jd=e=>window.history.replaceState(null,``,`${window.location.pathname}${window.location.search}#${e}`),Md=(e,t)=>{let n=(0,S.useRef)(`${e}-${t}`);(0,S.useEffect)(()=>{let r=`${e}-${t}`;if(n.current===r||(n.current=r,!e))return;let i=t?`case-study-${e}-${t}`:`case-study-${e}`,a=document.getElementById(i);a?.scrollIntoView(),a?.focus({preventScroll:!0})},[e,t])},Nd=`A front-end background helps me understand what I test and write maintainable UI automation.`,Pd=({projects:e})=>{let t=ns(Od),n=ns(kd),r=ts();Md(t,n),(0,S.useEffect)(()=>{let e=()=>{let{openRepo:e,side:t}=Cd();e&&r(Ed({openRepo:e,side:t}))};return window.addEventListener(`hashchange`,e),e(),()=>window.removeEventListener(`hashchange`,e)},[r]);let i=e.filter(({caseStudy:e})=>e),a=e=>{let n=e===t?null:e;r(Td(n)),jd(n?`case-study-${n}`:`projects`)},o=e.filter(({category:e,caseStudy:t})=>e===`Testing`&&!t),s=e.filter(({category:e})=>e===`Other`);return(0,R.jsxs)(R.Fragment,{children:[i.length>0&&(0,R.jsx)(_s,{"aria-label":`Case studies`,children:i.map(e=>(0,R.jsx)(fl,{project:e,expanded:e.repo===t,onToggle:()=>a(e.repo)},e.repo))}),i.map(({title:e,repo:n,caseStudy:r})=>r&&(0,R.jsx)(Ec,{title:e,repo:n,caseStudy:r,open:n===t},n)),o.length>0&&(0,R.jsx)(as,{"aria-label":`Test projects`,children:o.map(({title:e,repo:t,language:n,description:r,demoUrl:i})=>(0,R.jsxs)(os,{children:[(0,R.jsx)(ss,{children:e}),(0,R.jsxs)(cs,{children:[t,` · `,n]}),(0,R.jsx)(ls,{children:r}),(0,R.jsxs)(us,{children:[i&&(0,R.jsxs)(ds,{children:[(0,R.jsx)(`dt`,{children:`Demo:`}),(0,R.jsx)(fs,{children:(0,R.jsx)(ps,{target:`_blank`,rel:`noreferrer`,href:i,children:`Open the demo`})})]}),(0,R.jsxs)(ds,{children:[(0,R.jsx)(`dt`,{children:`Code:`}),(0,R.jsx)(fs,{children:(0,R.jsx)(ps,{target:`_blank`,rel:`noreferrer`,href:Os(t),children:`GitHub Repository`})})]})]})]},t))}),s.length>0&&(0,R.jsxs)(rs,{"aria-labelledby":`other-projects`,children:[(0,R.jsx)(is,{id:`other-projects`,children:`Other projects`}),(0,R.jsx)(ms,{children:Nd}),(0,R.jsx)(hs,{children:s.map(({title:e,repo:t,description:n,demoUrl:r})=>(0,R.jsxs)(gs,{children:[(0,R.jsx)(`strong`,{children:e}),(0,R.jsxs)(`span`,{children:[` · `,n]}),` `,r&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ps,{target:`_blank`,rel:`noreferrer`,href:r,children:`Demo`}),` `]}),(0,R.jsx)(ps,{target:`_blank`,rel:`noreferrer`,href:Os(t),children:`Code`})]},t))})]})]})};I();var Fd=F(za)`
  color: ${({theme:e,$side:t})=>t===`code`?e.colors.dev.accent:e.colors.qa.accent};
`,Id=()=>(0,R.jsxs)(ja,{"aria-labelledby":`projects`,children:[(0,R.jsx)(Fa,{id:`projects`,"data-number":Wa(`projects`),children:`Projects`}),(0,R.jsx)(Ra,{children:Ts.map(({text:e,side:t},n)=>(0,R.jsxs)(S.Fragment,{children:[n>0&&` `,(0,R.jsx)(Fd,{$side:t,children:e})]},e))}),(0,R.jsx)(Ba,{children:Es}),(0,R.jsx)(Pd,{projects:Ds})]}),Ld=`sz.rojek@gmail.com`,Rd=`(prefers-color-scheme: dark)`,zd=()=>{let e=localStorage.getItem(`dark`);return e===null?window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1:e===`true`},Bd=()=>({isDarkTheme:zd(),hasUserChoice:localStorage.getItem(`dark`)!==null}),Vd=sd({name:`theme`,initialState:{isDarkTheme:!1,hasUserChoice:!1},reducers:{toggleTheme:(e,{payload:t})=>{e.isDarkTheme=!e.isDarkTheme,e.hasUserChoice=e.isDarkTheme!==t},systemThemeChanged:(e,{payload:t})=>{e.hasUserChoice||(e.isDarkTheme=t)}}}),{toggleTheme:Hd,systemThemeChanged:Ud}=Vd.actions,Wd=e=>e.theme,Gd=e=>Wd(e).isDarkTheme,Kd=Vd.reducer,qd=e=>(0,R.jsxs)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.9,strokeLinecap:`round`,strokeLinejoin:`round`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,R.jsx)(`circle`,{cx:12,cy:12,r:4}),(0,R.jsx)(`path`,{d:`M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4`})]}),Jd=e=>(0,R.jsx)(`svg`,{width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.9,strokeLinecap:`round`,strokeLinejoin:`round`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,R.jsx)(`path`,{d:`M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z`})});I();var Yd=F.button`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: ${({theme:e})=>e.colors.brand.muted};
  background: ${({theme:e})=>e.colors.brand.quiet};
  border: 1px solid ${({theme:e})=>e.colors.brand.quietBorder};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  cursor: pointer;
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.brand.accent};
    border-color: ${({theme:e})=>e.colors.brand.accent};
  }
`,Xd=F(qd)`
  width: 16px;
  height: 16px;
`,Zd=F(Jd)`
  width: 16px;
  height: 16px;
`,Qd=()=>{let e=ns(Gd),t=ts();return(0,R.jsx)(Yd,{"aria-label":`Dark mode`,"aria-pressed":e,onClick:()=>t(Hd(window.matchMedia?.(`(prefers-color-scheme: dark)`).matches??!1)),children:e?(0,R.jsx)(Xd,{"aria-hidden":`true`}):(0,R.jsx)(Zd,{"aria-hidden":`true`})})};I();var $d=F.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,ef=F.li``,tf=F.a`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  color: ${({theme:e})=>e.colors.brand.muted};
  background: ${({theme:e})=>e.colors.brand.quiet};
  border: 1px solid ${({theme:e})=>e.colors.brand.quietBorder};
  border-radius: ${({theme:e})=>e.borderRadiusSmall};
  transition:
    color 0.2s,
    border-color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.brand.accent};
    border-color: ${({theme:e})=>e.colors.brand.accent};
  }
`,nf=e=>F(e)`
  width: 16px;
  height: 16px;
`,rf=[{name:`GitHub`,url:ys,Icon:nf(Zc)},{name:`LinkedIn`,url:hi.linkedinUrl,Icon:nf(e=>(0,R.jsx)(`svg`,{width:48,height:48,viewBox:`0 0 48 48`,fill:`currentColor`,xmlns:`http://www.w3.org/2000/svg`,...e,children:(0,R.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z`})}))}],af=()=>(0,R.jsx)($d,{children:rf.map(({name:e,url:t,Icon:n})=>(0,R.jsx)(ef,{children:(0,R.jsx)(tf,{href:t,"aria-label":e,title:e,target:`_blank`,rel:`noreferrer`,children:(0,R.jsx)(n,{"aria-hidden":`true`,focusable:`false`})})},e))});I();var of=F.footer`
  position: relative;
  overflow: clip;
  color: ${({theme:e})=>e.colors.brand.text};
  background: ${({theme:e})=>e.colors.brand.dark};

  &::before {
    content: "";
    position: absolute;
    bottom: -170px;
    left: calc(${ii} - 150px);
    width: 400px;
    height: 400px;
    border: 72px solid ${({theme:e})=>e.colors.brand.accent};
    border-radius: 50%;
    opacity: 0.12;
    pointer-events: none;

    /* Safari before 16 has no clip, and the ring hung 170px below the page
       (issue #33). A hidden overflow would bring back the jump bug above,
       so there the ring is left out. */
    @supports not (overflow: clip) {
      display: none;
    }
  }

  *:focus-visible {
    outline-color: ${({theme:e})=>e.colors.brand.accent};
  }
`,sf=F.div`
  ${ri}
  position: relative;
`,cf=F.section`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: start;
  padding-top: ${({theme:e})=>e.layout.section.desktop}px;

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    gap: 18px;
    padding-top: ${({theme:e})=>e.layout.section.mobile}px;
  }
`,lf=F.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.colors.brand.text};
  text-wrap: balance;

  /* Narrower column on small laptops and landscape tablets, before the
     footer goes to one column. */
  @media (max-width: ${({theme:e})=>e.breakpoints.tabletHorizontalMax}px) {
    font-size: 32px;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 28px;
  }
`,uf=F.div``,df=F.p`
  max-width: 36em;
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors.brand.muted};

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`,ff=F(Ni)`
  margin-top: 24px;
  color: ${({theme:e})=>e.colors.brand.onAccent};
  background: ${({theme:e})=>e.colors.brand.accent};

  &:hover {
    background: ${({theme:e})=>e.colors.brand.accentHover};
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.tabletHorizontalMax}px) {
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
`,pf=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding: 20px 0 28px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.brand.muted};
  border-top: 1px solid ${({theme:e})=>e.colors.brand.line};

  p {
    margin: 0;
  }

  @media (max-width: ${({theme:e})=>e.breakpoints.mobileMax}px) {
    margin-top: 28px;
  }
`,Z=F.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,mf=F.span`
  width: 1px;
  height: 20px;
  background: ${({theme:e})=>e.colors.brand.line};
`,hf=()=>(0,R.jsx)(of,{children:(0,R.jsxs)(sf,{children:[(0,R.jsxs)(cf,{"aria-labelledby":`contact`,children:[(0,R.jsx)(lf,{id:`contact`,children:hi.contactHeading}),(0,R.jsxs)(uf,{children:[(0,R.jsx)(df,{children:hi.teamNote}),(0,R.jsxs)(ff,{href:`mailto:${Ld}`,"aria-label":`Send me an email`,children:[(0,R.jsx)(Li,{"aria-hidden":`true`}),`Email me`]})]})]}),(0,R.jsxs)(pf,{children:[(0,R.jsxs)(`p`,{suppressHydrationWarning:!0,children:[hi.name,` © `,new Date().getFullYear()]}),(0,R.jsxs)(Z,{children:[(0,R.jsx)(af,{}),(0,R.jsx)(mf,{"aria-hidden":`true`}),(0,R.jsx)(Qd,{})]})]})]})}),gf=()=>(fi(),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(oi,{href:`#main`,children:`Skip to content`}),(0,R.jsx)(ea,{}),(0,R.jsx)(Da,{}),(0,R.jsx)(ai,{children:(0,R.jsxs)(`main`,{id:`main`,tabIndex:-1,children:[(0,R.jsx)(ko,{}),(0,R.jsx)(Id,{}),(0,R.jsx)(es,{}),(0,R.jsx)(Ko,{}),(0,R.jsx)(mo,{})]})}),(0,R.jsx)(hf,{})]})),_f=()=>{let e=ts();(0,S.useEffect)(()=>{let t=window.matchMedia?.(Rd);if(!t)return;let n=t=>e(Ud(t.matches));return t.addEventListener(`change`,n),()=>t.removeEventListener(`change`,n)},[e])},vf=e=>{(0,S.useEffect)(()=>{document.documentElement.dataset.theme=e?`dark`:`light`},[e])},yf=()=>{(0,S.useLayoutEffect)(()=>{document.querySelector(`style[data-prerendered]`)?.remove(),delete document.body.dataset.prerendered},[])};I();var bf=()=>{let e=ns(Gd);return _f(),vf(e),yf(),(0,R.jsxs)(ln,{theme:e?ni:ti,children:[(0,R.jsx)(Xr.Normalize,{}),(0,R.jsx)(Zr,{}),(0,R.jsx)(gf,{})]})},xf=yl({theme:Kd,projectView:Ad}),Sf=e=>X({reducer:xf,preloadedState:e}),Cf=e=>{let t=e.getState().theme.isDarkTheme;return e.subscribe(()=>{let{isDarkTheme:n,hasUserChoice:r}=e.getState().theme;n!==t&&(t=n,r?localStorage.setItem(`dark`,String(t)):localStorage.removeItem(`dark`))})},wf=Bd(),Tf=Cd(),Ef=Sf({theme:wf,projectView:Tf});Cf(Ef);var Df=document.getElementById(`root`),Of=(0,R.jsx)(S.StrictMode,{children:(0,R.jsx)(pe,{store:Ef,children:(0,R.jsx)(bf,{})})});Df.hasChildNodes()&&!wf.isDarkTheme&&!Tf.openRepo?(0,x.hydrateRoot)(Df,Of):(0,te.flushSync)(()=>(0,x.createRoot)(Df).render(Of));