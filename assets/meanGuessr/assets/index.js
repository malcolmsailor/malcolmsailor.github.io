var X7=Object.defineProperty;var I7=(t,e,n)=>e in t?X7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ic=(t,e,n)=>I7(t,typeof e!="symbol"?e+"":e,n);function K7(t,e){for(var n=0;n<e.length;n++){const a=e[n];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in t)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(t,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function Hc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zh={exports:{}},Ks={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zA;function Z7(){if(zA)return Ks;zA=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:t,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Ks.Fragment=e,Ks.jsx=n,Ks.jsxs=n,Ks}var UA;function Q7(){return UA||(UA=1,zh.exports=Z7()),zh.exports}var vt=Q7(),Uh={exports:{}},Ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kA;function W7(){if(kA)return Ot;kA=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=g&&C[g]||C["@@iterator"],typeof C=="function"?C:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,b={};function M(C,T,w){this.props=C,this.context=T,this.refs=b,this.updater=w||y}M.prototype.isReactComponent={},M.prototype.setState=function(C,T){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,T,"setState")},M.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function $(){}$.prototype=M.prototype;function B(C,T,w){this.props=C,this.context=T,this.refs=b,this.updater=w||y}var _=B.prototype=new $;_.constructor=B,A(_,M.prototype),_.isPureReactComponent=!0;var N=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function j(C,T,w,x,q,D){return w=D.ref,{$$typeof:t,type:C,key:T,ref:w!==void 0?w:null,props:D}}function H(C,T){return j(C.type,T,void 0,void 0,void 0,C.props)}function rt(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function R(C){var T={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(w){return T[w]})}var Y=/\/+/g;function et(C,T){return typeof C=="object"&&C!==null&&C.key!=null?R(""+C.key):T.toString(36)}function ct(){}function ft(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ct,ct):(C.status="pending",C.then(function(T){C.status==="pending"&&(C.status="fulfilled",C.value=T)},function(T){C.status==="pending"&&(C.status="rejected",C.reason=T)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function dt(C,T,w,x,q){var D=typeof C;(D==="undefined"||D==="boolean")&&(C=null);var U=!1;if(C===null)U=!0;else switch(D){case"bigint":case"string":case"number":U=!0;break;case"object":switch(C.$$typeof){case t:case e:U=!0;break;case v:return U=C._init,dt(U(C._payload),T,w,x,q)}}if(U)return q=q(C),U=x===""?"."+et(C,0):x,N(q)?(w="",U!=null&&(w=U.replace(Y,"$&/")+"/"),dt(q,T,w,"",function(it){return it})):q!=null&&(rt(q)&&(q=H(q,w+(q.key==null||C&&C.key===q.key?"":(""+q.key).replace(Y,"$&/")+"/")+U)),T.push(q)),1;U=0;var X=x===""?".":x+":";if(N(C))for(var mt=0;mt<C.length;mt++)x=C[mt],D=X+et(x,mt),U+=dt(x,T,w,D,q);else if(mt=S(C),typeof mt=="function")for(C=mt.call(C),mt=0;!(x=C.next()).done;)x=x.value,D=X+et(x,mt++),U+=dt(x,T,w,D,q);else if(D==="object"){if(typeof C.then=="function")return dt(ft(C),T,w,x,q);throw T=String(C),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return U}function P(C,T,w){if(C==null)return C;var x=[],q=0;return dt(C,x,"","",function(D){return T.call(w,D,q++)}),x}function tt(C){if(C._status===-1){var T=C._result;T=T(),T.then(function(w){(C._status===0||C._status===-1)&&(C._status=1,C._result=w)},function(w){(C._status===0||C._status===-1)&&(C._status=2,C._result=w)}),C._status===-1&&(C._status=0,C._result=T)}if(C._status===1)return C._result.default;throw C._result}var ot=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function Q(){}return Ot.Children={map:P,forEach:function(C,T,w){P(C,function(){T.apply(this,arguments)},w)},count:function(C){var T=0;return P(C,function(){T++}),T},toArray:function(C){return P(C,function(T){return T})||[]},only:function(C){if(!rt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Ot.Component=M,Ot.Fragment=n,Ot.Profiler=s,Ot.PureComponent=B,Ot.StrictMode=a,Ot.Suspense=h,Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,Ot.__COMPILER_RUNTIME={__proto__:null,c:function(C){return L.H.useMemoCache(C)}},Ot.cache=function(C){return function(){return C.apply(null,arguments)}},Ot.cloneElement=function(C,T,w){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var x=A({},C.props),q=C.key,D=void 0;if(T!=null)for(U in T.ref!==void 0&&(D=void 0),T.key!==void 0&&(q=""+T.key),T)!k.call(T,U)||U==="key"||U==="__self"||U==="__source"||U==="ref"&&T.ref===void 0||(x[U]=T[U]);var U=arguments.length-2;if(U===1)x.children=w;else if(1<U){for(var X=Array(U),mt=0;mt<U;mt++)X[mt]=arguments[mt+2];x.children=X}return j(C.type,q,void 0,void 0,D,x)},Ot.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:l,_context:C},C},Ot.createElement=function(C,T,w){var x,q={},D=null;if(T!=null)for(x in T.key!==void 0&&(D=""+T.key),T)k.call(T,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(q[x]=T[x]);var U=arguments.length-2;if(U===1)q.children=w;else if(1<U){for(var X=Array(U),mt=0;mt<U;mt++)X[mt]=arguments[mt+2];q.children=X}if(C&&C.defaultProps)for(x in U=C.defaultProps,U)q[x]===void 0&&(q[x]=U[x]);return j(C,D,void 0,void 0,null,q)},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(C){return{$$typeof:f,render:C}},Ot.isValidElement=rt,Ot.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:tt}},Ot.memo=function(C,T){return{$$typeof:p,type:C,compare:T===void 0?null:T}},Ot.startTransition=function(C){var T=L.T,w={};L.T=w;try{var x=C(),q=L.S;q!==null&&q(w,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(Q,ot)}catch(D){ot(D)}finally{L.T=T}},Ot.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},Ot.use=function(C){return L.H.use(C)},Ot.useActionState=function(C,T,w){return L.H.useActionState(C,T,w)},Ot.useCallback=function(C,T){return L.H.useCallback(C,T)},Ot.useContext=function(C){return L.H.useContext(C)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(C,T){return L.H.useDeferredValue(C,T)},Ot.useEffect=function(C,T,w){var x=L.H;if(typeof w=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return x.useEffect(C,T)},Ot.useId=function(){return L.H.useId()},Ot.useImperativeHandle=function(C,T,w){return L.H.useImperativeHandle(C,T,w)},Ot.useInsertionEffect=function(C,T){return L.H.useInsertionEffect(C,T)},Ot.useLayoutEffect=function(C,T){return L.H.useLayoutEffect(C,T)},Ot.useMemo=function(C,T){return L.H.useMemo(C,T)},Ot.useOptimistic=function(C,T){return L.H.useOptimistic(C,T)},Ot.useReducer=function(C,T,w){return L.H.useReducer(C,T,w)},Ot.useRef=function(C){return L.H.useRef(C)},Ot.useState=function(C){return L.H.useState(C)},Ot.useSyncExternalStore=function(C,T,w){return L.H.useSyncExternalStore(C,T,w)},Ot.useTransition=function(){return L.H.useTransition()},Ot.version="19.1.0",Ot}var GA;function A2(){return GA||(GA=1,Uh.exports=W7()),Uh.exports}var Z=A2();const go=Hc(Z),Oc=K7({__proto__:null,default:go},[Z]);var kh={exports:{}},Zs={},Gh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HA;function J7(){return HA||(HA=1,function(t){function e(P,tt){var ot=P.length;P.push(tt);t:for(;0<ot;){var Q=ot-1>>>1,C=P[Q];if(0<s(C,tt))P[Q]=tt,P[ot]=C,ot=Q;else break t}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var tt=P[0],ot=P.pop();if(ot!==tt){P[0]=ot;t:for(var Q=0,C=P.length,T=C>>>1;Q<T;){var w=2*(Q+1)-1,x=P[w],q=w+1,D=P[q];if(0>s(x,ot))q<C&&0>s(D,x)?(P[Q]=D,P[q]=ot,Q=q):(P[Q]=x,P[w]=ot,Q=w);else if(q<C&&0>s(D,ot))P[Q]=D,P[q]=ot,Q=q;else break t}}return tt}function s(P,tt){var ot=P.sortIndex-tt.sortIndex;return ot!==0?ot:P.id-tt.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,g=null,S=3,y=!1,A=!1,b=!1,M=!1,$=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var tt=n(p);tt!==null;){if(tt.callback===null)a(p);else if(tt.startTime<=P)a(p),tt.sortIndex=tt.expirationTime,e(h,tt);else break;tt=n(p)}}function L(P){if(b=!1,N(P),!A)if(n(h)!==null)A=!0,k||(k=!0,et());else{var tt=n(p);tt!==null&&dt(L,tt.startTime-P)}}var k=!1,j=-1,H=5,rt=-1;function R(){return M?!0:!(t.unstable_now()-rt<H)}function Y(){if(M=!1,k){var P=t.unstable_now();rt=P;var tt=!0;try{t:{A=!1,b&&(b=!1,B(j),j=-1),y=!0;var ot=S;try{e:{for(N(P),g=n(h);g!==null&&!(g.expirationTime>P&&R());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,S=g.priorityLevel;var C=Q(g.expirationTime<=P);if(P=t.unstable_now(),typeof C=="function"){g.callback=C,N(P),tt=!0;break e}g===n(h)&&a(h),N(P)}else a(h);g=n(h)}if(g!==null)tt=!0;else{var T=n(p);T!==null&&dt(L,T.startTime-P),tt=!1}}break t}finally{g=null,S=ot,y=!1}tt=void 0}}finally{tt?et():k=!1}}}var et;if(typeof _=="function")et=function(){_(Y)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ft=ct.port2;ct.port1.onmessage=Y,et=function(){ft.postMessage(null)}}else et=function(){$(Y,0)};function dt(P,tt){j=$(function(){P(t.unstable_now())},tt)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_next=function(P){switch(S){case 1:case 2:case 3:var tt=3;break;default:tt=S}var ot=S;S=tt;try{return P()}finally{S=ot}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(P,tt){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ot=S;S=P;try{return tt()}finally{S=ot}},t.unstable_scheduleCallback=function(P,tt,ot){var Q=t.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Q+ot:Q):ot=Q,P){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ot+C,P={id:v++,callback:tt,priorityLevel:P,startTime:ot,expirationTime:C,sortIndex:-1},ot>Q?(P.sortIndex=ot,e(p,P),n(h)===null&&P===n(p)&&(b?(B(j),j=-1):b=!0,dt(L,ot-Q))):(P.sortIndex=C,e(h,P),A||y||(A=!0,k||(k=!0,et()))),P},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(P){var tt=S;return function(){var ot=S;S=tt;try{return P.apply(this,arguments)}finally{S=ot}}}}(Hh)),Hh}var YA;function tD(){return YA||(YA=1,Gh.exports=J7()),Gh.exports}var Yh={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FA;function eD(){if(FA)return Fe;FA=1;var t=A2();function e(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:p,implementation:v}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fe.createPortal=function(h,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(h,p,null,v)},Fe.flushSync=function(h){var p=c.T,v=a.p;try{if(c.T=null,a.p=2,h)return h()}finally{c.T=p,a.p=v,a.d.f()}},Fe.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(h,p))},Fe.prefetchDNS=function(h){typeof h=="string"&&a.d.D(h)},Fe.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var v=p.as,g=f(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?a.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):v==="script"&&a.d.X(h,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fe.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=f(p.as,p.crossOrigin);a.d.M(h,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(h)},Fe.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=f(v,p.crossOrigin);a.d.L(h,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fe.preloadModule=function(h,p){if(typeof h=="string")if(p){var v=f(p.as,p.crossOrigin);a.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(h)},Fe.requestFormReset=function(h){a.d.r(h)},Fe.unstable_batchedUpdates=function(h,p){return h(p)},Fe.useFormState=function(h,p,v){return c.H.useFormState(h,p,v)},Fe.useFormStatus=function(){return c.H.useHostTransitionStatus()},Fe.version="19.1.0",Fe}var XA;function $_(){if(XA)return Yh.exports;XA=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Yh.exports=eD(),Yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IA;function rD(){if(IA)return Zs;IA=1;var t=tD(),e=A2(),n=$_();function a(r){var i="https://react.dev/errors/"+r;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var i=r,o=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(o=i.return),r=i.return;while(r)}return i.tag===3?o:null}function c(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(a(188))}function h(r){var i=r.alternate;if(!i){if(i=l(r),i===null)throw Error(a(188));return i!==r?null:r}for(var o=r,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),r;if(m===u)return f(d),i;m=m.sibling}throw Error(a(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,O=d.child;O;){if(O===o){E=!0,o=d,u=m;break}if(O===u){E=!0,u=d,o=m;break}O=O.sibling}if(!E){for(O=m.child;O;){if(O===o){E=!0,o=m,u=d;break}if(O===u){E=!0,u=m,o=d;break}O=O.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?r:i}function p(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r;for(r=r.child;r!==null;){if(i=p(r),i!==null)return i;r=r.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),_=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),rt=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function et(r){return r===null||typeof r!="object"?null:(r=Y&&r[Y]||r["@@iterator"],typeof r=="function"?r:null)}var ct=Symbol.for("react.client.reference");function ft(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===ct?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case A:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case L:return"Suspense";case k:return"SuspenseList";case rt:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case y:return"Portal";case _:return(r.displayName||"Context")+".Provider";case B:return(r._context.displayName||"Context")+".Consumer";case N:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j:return i=r.displayName||null,i!==null?i:ft(r.type)||"Memo";case H:i=r._payload,r=r._init;try{return ft(r(i))}catch{}}return null}var dt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},Q=[],C=-1;function T(r){return{current:r}}function w(r){0>C||(r.current=Q[C],Q[C]=null,C--)}function x(r,i){C++,Q[C]=r.current,r.current=i}var q=T(null),D=T(null),U=T(null),X=T(null);function mt(r,i){switch(x(U,i),x(D,r),x(q,null),i.nodeType){case 9:case 11:r=(r=i.documentElement)&&(r=r.namespaceURI)?pA(r):0;break;default:if(r=i.tagName,i=i.namespaceURI)i=pA(i),r=mA(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}w(q),x(q,r)}function it(){w(q),w(D),w(U)}function Et(r){r.memoizedState!==null&&x(X,r);var i=q.current,o=mA(i,r.type);i!==o&&(x(D,r),x(q,o))}function ut(r){D.current===r&&(w(q),w(D)),X.current===r&&(w(X),Hs._currentValue=ot)}var W=Object.prototype.hasOwnProperty,pt=t.unstable_scheduleCallback,Bt=t.unstable_cancelCallback,yt=t.unstable_shouldYield,Gt=t.unstable_requestPaint,Ht=t.unstable_now,Ce=t.unstable_getCurrentPriorityLevel,Xr=t.unstable_ImmediatePriority,ke=t.unstable_UserBlockingPriority,Ze=t.unstable_NormalPriority,en=t.unstable_LowPriority,Ir=t.unstable_IdlePriority,rn=t.log,le=t.unstable_setDisableYieldValue,ge=null,bt=null;function re(r){if(typeof rn=="function"&&le(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(ge,r)}catch{}}var $e=Math.clz32?Math.clz32:Bi,Wo=Math.log,fr=Math.LN2;function Bi(r){return r>>>=0,r===0?32:31-(Wo(r)/fr|0)|0}var Er=256,Ge=4194304;function wn(r){var i=r&42;if(i!==0)return i;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Jn(r,i,o){var u=r.pendingLanes;if(u===0)return 0;var d=0,m=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var O=u&134217727;return O!==0?(u=O&~m,u!==0?d=wn(u):(E&=O,E!==0?d=wn(E):o||(o=O&~r,o!==0&&(d=wn(o))))):(O=u&~m,O!==0?d=wn(O):E!==0?d=wn(E):o||(o=u&~r,o!==0&&(d=wn(o)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:d}function ji(r,i){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&i)===0}function Sa(r,i){switch(r){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gu(){var r=Er;return Er<<=1,(Er&4194048)===0&&(Er=256),r}function Hu(){var r=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),r}function Jo(r){for(var i=[],o=0;31>o;o++)i.push(r);return i}function Vi(r,i){r.pendingLanes|=i,i!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Cf(r,i,o,u,d,m){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var O=r.entanglements,V=r.expirationTimes,I=r.hiddenUpdates;for(o=E&~o;0<o;){var at=31-$e(o),lt=1<<at;O[at]=0,V[at]=-1;var K=I[at];if(K!==null)for(I[at]=null,at=0;at<K.length;at++){var J=K[at];J!==null&&(J.lane&=-536870913)}o&=~lt}u!==0&&Yu(r,u,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(E&~i))}function Yu(r,i,o){r.pendingLanes|=i,r.suspendedLanes&=~i;var u=31-$e(i);r.entangledLanes|=i,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function Fu(r,i){var o=r.entangledLanes|=i;for(r=r.entanglements;o;){var u=31-$e(o),d=1<<u;d&i|r[u]&i&&(r[u]|=i),o&=~d}}function ts(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function xt(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function er(){var r=tt.p;return r!==0?r:(r=window.event,r===void 0?32:DA(r.type))}function Xu(r,i){var o=tt.p;try{return tt.p=r,i()}finally{tt.p=o}}var ti=Math.random().toString(36).slice(2),He="__reactFiber$"+ti,rr="__reactProps$"+ti,Ta="__reactContainer$"+ti,qf="__reactEvents$"+ti,jL="__reactListeners$"+ti,VL="__reactHandles$"+ti,rT="__reactResources$"+ti,es="__reactMarker$"+ti;function Lf(r){delete r[He],delete r[rr],delete r[qf],delete r[jL],delete r[VL]}function wa(r){var i=r[He];if(i)return i;for(var o=r.parentNode;o;){if(i=o[Ta]||o[He]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(r=bA(r);r!==null;){if(o=r[He])return o;r=bA(r)}return i}r=o,o=r.parentNode}return null}function Ea(r){if(r=r[He]||r[Ta]){var i=r.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return r}return null}function rs(r){var i=r.tag;if(i===5||i===26||i===27||i===6)return r.stateNode;throw Error(a(33))}function Aa(r){var i=r[rT];return i||(i=r[rT]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function qe(r){r[es]=!0}var nT=new Set,iT={};function Pi(r,i){Ra(r,i),Ra(r+"Capture",i)}function Ra(r,i){for(iT[r]=i,r=0;r<i.length;r++)nT.add(i[r])}var PL=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),aT={},oT={};function zL(r){return W.call(oT,r)?!0:W.call(aT,r)?!1:PL.test(r)?oT[r]=!0:(aT[r]=!0,!1)}function Iu(r,i,o){if(zL(i))if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(i);return}}r.setAttribute(i,""+o)}}function Ku(r,i,o){if(o===null)r.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(i);return}r.setAttribute(i,""+o)}}function En(r,i,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(i,o,""+u)}}var Df,sT;function xa(r){if(Df===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Df=i&&i[1]||"",sT=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Df+r+sT}var Nf=!1;function Bf(r,i){if(!r||Nf)return"";Nf=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var lt=function(){throw Error()};if(Object.defineProperty(lt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(lt,[])}catch(J){var K=J}Reflect.construct(r,[],lt)}else{try{lt.call()}catch(J){K=J}r.call(lt.prototype)}}else{try{throw Error()}catch(J){K=J}(lt=r())&&typeof lt.catch=="function"&&lt.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],O=m[1];if(E&&O){var V=E.split(`
`),I=O.split(`
`);for(d=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;d<I.length&&!I[d].includes("DetermineComponentFrameRoot");)d++;if(u===V.length||d===I.length)for(u=V.length-1,d=I.length-1;1<=u&&0<=d&&V[u]!==I[d];)d--;for(;1<=u&&0<=d;u--,d--)if(V[u]!==I[d]){if(u!==1||d!==1)do if(u--,d--,0>d||V[u]!==I[d]){var at=`
`+V[u].replace(" at new "," at ");return r.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",r.displayName)),at}while(1<=u&&0<=d);break}}}finally{Nf=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?xa(o):""}function UL(r){switch(r.tag){case 26:case 27:case 5:return xa(r.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 15:return Bf(r.type,!1);case 11:return Bf(r.type.render,!1);case 1:return Bf(r.type,!0);case 31:return xa("Activity");default:return""}}function uT(r){try{var i="";do i+=UL(r),r=r.return;while(r);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Ar(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function lT(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kL(r){var i=lT(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(r,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Zu(r){r._valueTracker||(r._valueTracker=kL(r))}function cT(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return r&&(u=lT(r)?r.checked?"true":"false":r.value),r=u,r!==o?(i.setValue(r),!0):!1}function Qu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var GL=/[\n"\\]/g;function Rr(r){return r.replace(GL,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function jf(r,i,o,u,d,m,E,O){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),i!=null?E==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+Ar(i)):r.value!==""+Ar(i)&&(r.value=""+Ar(i)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),i!=null?Vf(r,E,Ar(i)):o!=null?Vf(r,E,Ar(o)):u!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?r.name=""+Ar(O):r.removeAttribute("name")}function fT(r,i,o,u,d,m,E,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;o=o!=null?""+Ar(o):"",i=i!=null?""+Ar(i):o,O||i===r.value||(r.value=i),r.defaultValue=i}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=O?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Vf(r,i,o){i==="number"&&Qu(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ma(r,i,o,u){if(r=r.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=i.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&u&&(r[o].defaultSelected=!0)}else{for(o=""+Ar(o),i=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function dT(r,i,o){if(i!=null&&(i=""+Ar(i),i!==r.value&&(r.value=i),o==null)){r.defaultValue!==i&&(r.defaultValue=i);return}r.defaultValue=o!=null?""+Ar(o):""}function hT(r,i,o,u){if(i==null){if(u!=null){if(o!=null)throw Error(a(92));if(dt(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),i=o}o=Ar(i),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function $a(r,i){if(i){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=i;return}}r.textContent=i}var HL=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pT(r,i,o){var u=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="":u?r.setProperty(i,o):typeof o!="number"||o===0||HL.has(i)?i==="float"?r.cssFloat=o:r[i]=(""+o).trim():r[i]=o+"px"}function mT(r,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var d in i)u=i[d],i.hasOwnProperty(d)&&o[d]!==u&&pT(r,d,u)}else for(var m in i)i.hasOwnProperty(m)&&pT(r,m,i[m])}function Pf(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YL=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FL=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wu(r){return FL.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var zf=null;function Uf(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Oa=null,_a=null;function vT(r){var i=Ea(r);if(i&&(r=i.stateNode)){var o=r[rr]||null;t:switch(r=i.stateNode,i.type){case"input":if(jf(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rr(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==r&&u.form===r.form){var d=u[rr]||null;if(!d)throw Error(a(90));jf(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<o.length;i++)u=o[i],u.form===r.form&&cT(u)}break t;case"textarea":dT(r,o.value,o.defaultValue);break t;case"select":i=o.value,i!=null&&Ma(r,!!o.multiple,i,!1)}}}var kf=!1;function gT(r,i,o){if(kf)return r(i,o);kf=!0;try{var u=r(i);return u}finally{if(kf=!1,(Oa!==null||_a!==null)&&(jl(),Oa&&(i=Oa,r=_a,_a=Oa=null,vT(i),r)))for(i=0;i<r.length;i++)vT(r[i])}}function ns(r,i){var o=r.stateNode;if(o===null)return null;var u=o[rr]||null;if(u===null)return null;o=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break t;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gf=!1;if(An)try{var is={};Object.defineProperty(is,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{Gf=!1}var ei=null,Hf=null,Ju=null;function yT(){if(Ju)return Ju;var r,i=Hf,o=i.length,u,d="value"in ei?ei.value:ei.textContent,m=d.length;for(r=0;r<o&&i[r]===d[r];r++);var E=o-r;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return Ju=d.slice(r,1<u?1-u:void 0)}function tl(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function el(){return!0}function bT(){return!1}function nr(r){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var O in r)r.hasOwnProperty(O)&&(o=r[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?el:bT,this.isPropagationStopped=bT,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),i}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=nr(zi),as=v({},zi,{view:0,detail:0}),XL=nr(as),Yf,Ff,os,nl=v({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==os&&(os&&r.type==="mousemove"?(Yf=r.screenX-os.screenX,Ff=r.screenY-os.screenY):Ff=Yf=0,os=r),Yf)},movementY:function(r){return"movementY"in r?r.movementY:Ff}}),ST=nr(nl),IL=v({},nl,{dataTransfer:0}),KL=nr(IL),ZL=v({},as,{relatedTarget:0}),Xf=nr(ZL),QL=v({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),WL=nr(QL),JL=v({},zi,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),t9=nr(JL),e9=v({},zi,{data:0}),TT=nr(e9),r9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a9(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=i9[r])?!!i[r]:!1}function If(){return a9}var o9=v({},as,{key:function(r){if(r.key){var i=r9[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=tl(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?n9[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(r){return r.type==="keypress"?tl(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?tl(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),s9=nr(o9),u9=v({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wT=nr(u9),l9=v({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),c9=nr(l9),f9=v({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),d9=nr(f9),h9=v({},nl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),p9=nr(h9),m9=v({},zi,{newState:0,oldState:0}),v9=nr(m9),g9=[9,13,27,32],Kf=An&&"CompositionEvent"in window,ss=null;An&&"documentMode"in document&&(ss=document.documentMode);var y9=An&&"TextEvent"in window&&!ss,ET=An&&(!Kf||ss&&8<ss&&11>=ss),AT=" ",RT=!1;function xT(r,i){switch(r){case"keyup":return g9.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function MT(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ca=!1;function b9(r,i){switch(r){case"compositionend":return MT(i);case"keypress":return i.which!==32?null:(RT=!0,AT);case"textInput":return r=i.data,r===AT&&RT?null:r;default:return null}}function S9(r,i){if(Ca)return r==="compositionend"||!Kf&&xT(r,i)?(r=yT(),Ju=Hf=ei=null,Ca=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ET&&i.locale!=="ko"?null:i.data;default:return null}}var T9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $T(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!T9[r.type]:i==="textarea"}function OT(r,i,o,u){Oa?_a?_a.push(u):_a=[u]:Oa=u,i=Gl(i,"onChange"),0<i.length&&(o=new rl("onChange","change",null,o,u),r.push({event:o,listeners:i}))}var us=null,ls=null;function w9(r){lA(r,0)}function il(r){var i=rs(r);if(cT(i))return r}function _T(r,i){if(r==="change")return i}var CT=!1;if(An){var Zf;if(An){var Qf="oninput"in document;if(!Qf){var qT=document.createElement("div");qT.setAttribute("oninput","return;"),Qf=typeof qT.oninput=="function"}Zf=Qf}else Zf=!1;CT=Zf&&(!document.documentMode||9<document.documentMode)}function LT(){us&&(us.detachEvent("onpropertychange",DT),ls=us=null)}function DT(r){if(r.propertyName==="value"&&il(ls)){var i=[];OT(i,ls,r,Uf(r)),gT(w9,i)}}function E9(r,i,o){r==="focusin"?(LT(),us=i,ls=o,us.attachEvent("onpropertychange",DT)):r==="focusout"&&LT()}function A9(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return il(ls)}function R9(r,i){if(r==="click")return il(i)}function x9(r,i){if(r==="input"||r==="change")return il(i)}function M9(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var dr=typeof Object.is=="function"?Object.is:M9;function cs(r,i){if(dr(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var o=Object.keys(r),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!W.call(i,d)||!dr(r[d],i[d]))return!1}return!0}function NT(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function BT(r,i){var o=NT(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=i&&u>=i)return{node:o,offset:i-r};r=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=NT(o)}}function jT(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?jT(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function VT(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var i=Qu(r.document);i instanceof r.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)r=i.contentWindow;else break;i=Qu(r.document)}return i}function Wf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}var $9=An&&"documentMode"in document&&11>=document.documentMode,qa=null,Jf=null,fs=null,td=!1;function PT(r,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;td||qa==null||qa!==Qu(u)||(u=qa,"selectionStart"in u&&Wf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fs&&cs(fs,u)||(fs=u,u=Gl(Jf,"onSelect"),0<u.length&&(i=new rl("onSelect","select",null,i,o),r.push({event:i,listeners:u}),i.target=qa)))}function Ui(r,i){var o={};return o[r.toLowerCase()]=i.toLowerCase(),o["Webkit"+r]="webkit"+i,o["Moz"+r]="moz"+i,o}var La={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},ed={},zT={};An&&(zT=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function ki(r){if(ed[r])return ed[r];if(!La[r])return r;var i=La[r],o;for(o in i)if(i.hasOwnProperty(o)&&o in zT)return ed[r]=i[o];return r}var UT=ki("animationend"),kT=ki("animationiteration"),GT=ki("animationstart"),O9=ki("transitionrun"),_9=ki("transitionstart"),C9=ki("transitioncancel"),HT=ki("transitionend"),YT=new Map,rd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rd.push("scrollEnd");function Kr(r,i){YT.set(r,i),Pi(i,[r])}var FT=new WeakMap;function xr(r,i){if(typeof r=="object"&&r!==null){var o=FT.get(r);return o!==void 0?o:(i={value:r,source:i,stack:uT(i)},FT.set(r,i),i)}return{value:r,source:i,stack:uT(i)}}var Mr=[],Da=0,nd=0;function al(){for(var r=Da,i=nd=Da=0;i<r;){var o=Mr[i];Mr[i++]=null;var u=Mr[i];Mr[i++]=null;var d=Mr[i];Mr[i++]=null;var m=Mr[i];if(Mr[i++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}m!==0&&XT(o,d,m)}}function ol(r,i,o,u){Mr[Da++]=r,Mr[Da++]=i,Mr[Da++]=o,Mr[Da++]=u,nd|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function id(r,i,o,u){return ol(r,i,o,u),sl(r)}function Na(r,i){return ol(r,null,null,i),sl(r)}function XT(r,i,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=r.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&i!==null&&(d=31-$e(o),r=m.hiddenUpdates,u=r[d],u===null?r[d]=[i]:u.push(i),i.lane=o|536870912),m):null}function sl(r){if(50<Bs)throw Bs=0,ch=null,Error(a(185));for(var i=r.return;i!==null;)r=i,i=r.return;return r.tag===3?r.stateNode:null}var Ba={};function q9(r,i,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(r,i,o,u){return new q9(r,i,o,u)}function ad(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Rn(r,i){var o=r.alternate;return o===null?(o=hr(r.tag,i,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=i,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,i=r.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function IT(r,i){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=i,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,i=o.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),r}function ul(r,i,o,u,d,m){var E=0;if(u=r,typeof r=="function")ad(r)&&(E=1);else if(typeof r=="string")E=D7(r,o,q.current)?26:r==="html"||r==="head"||r==="body"?27:5;else t:switch(r){case rt:return r=hr(31,o,i,d),r.elementType=rt,r.lanes=m,r;case A:return Gi(o.children,d,m,i);case b:E=8,d|=24;break;case M:return r=hr(12,o,i,d|2),r.elementType=M,r.lanes=m,r;case L:return r=hr(13,o,i,d),r.elementType=L,r.lanes=m,r;case k:return r=hr(19,o,i,d),r.elementType=k,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case _:E=10;break t;case B:E=9;break t;case N:E=11;break t;case j:E=14;break t;case H:E=16,u=null;break t}E=29,o=Error(a(130,r===null?"null":typeof r,"")),u=null}return i=hr(E,o,i,d),i.elementType=r,i.type=u,i.lanes=m,i}function Gi(r,i,o,u){return r=hr(7,r,u,i),r.lanes=o,r}function od(r,i,o){return r=hr(6,r,null,i),r.lanes=o,r}function sd(r,i,o){return i=hr(4,r.children!==null?r.children:[],r.key,i),i.lanes=o,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}var ja=[],Va=0,ll=null,cl=0,$r=[],Or=0,Hi=null,xn=1,Mn="";function Yi(r,i){ja[Va++]=cl,ja[Va++]=ll,ll=r,cl=i}function KT(r,i,o){$r[Or++]=xn,$r[Or++]=Mn,$r[Or++]=Hi,Hi=r;var u=xn;r=Mn;var d=32-$e(u)-1;u&=~(1<<d),o+=1;var m=32-$e(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,xn=1<<32-$e(i)+d|o<<d|u,Mn=m+r}else xn=1<<m|o<<d|u,Mn=r}function ud(r){r.return!==null&&(Yi(r,1),KT(r,1,0))}function ld(r){for(;r===ll;)ll=ja[--Va],ja[Va]=null,cl=ja[--Va],ja[Va]=null;for(;r===Hi;)Hi=$r[--Or],$r[Or]=null,Mn=$r[--Or],$r[Or]=null,xn=$r[--Or],$r[Or]=null}var Qe=null,ce=null,Pt=!1,Fi=null,nn=!1,cd=Error(a(519));function Xi(r){var i=Error(a(418,""));throw ps(xr(i,r)),cd}function ZT(r){var i=r.stateNode,o=r.type,u=r.memoizedProps;switch(i[He]=r,i[rr]=u,o){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(o=0;o<Vs.length;o++)Dt(Vs[o],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Dt("invalid",i),fT(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Zu(i);break;case"select":Dt("invalid",i);break;case"textarea":Dt("invalid",i),hT(i,u.value,u.defaultValue,u.children),Zu(i)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||u.suppressHydrationWarning===!0||hA(i.textContent,o)?(u.popover!=null&&(Dt("beforetoggle",i),Dt("toggle",i)),u.onScroll!=null&&Dt("scroll",i),u.onScrollEnd!=null&&Dt("scrollend",i),u.onClick!=null&&(i.onclick=Hl),i=!0):i=!1,i||Xi(r)}function QT(r){for(Qe=r.return;Qe;)switch(Qe.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:Qe=Qe.return}}function ds(r){if(r!==Qe)return!1;if(!Pt)return QT(r),Pt=!0,!1;var i=r.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||xh(r.type,r.memoizedProps)),o=!o),o&&ce&&Xi(r),QT(r),i===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));t:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(i===0){ce=Qr(r.nextSibling);break t}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;r=r.nextSibling}ce=null}}else i===27?(i=ce,gi(r.type)?(r=_h,_h=null,ce=r):ce=i):ce=Qe?Qr(r.stateNode.nextSibling):null;return!0}function hs(){ce=Qe=null,Pt=!1}function WT(){var r=Fi;return r!==null&&(or===null?or=r:or.push.apply(or,r),Fi=null),r}function ps(r){Fi===null?Fi=[r]:Fi.push(r)}var fd=T(null),Ii=null,$n=null;function ri(r,i,o){x(fd,i._currentValue),i._currentValue=o}function On(r){r._currentValue=fd.current,w(fd)}function dd(r,i,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===o)break;r=r.return}}function hd(r,i,o,u){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=d;for(var V=0;V<i.length;V++)if(O.context===i[V]){m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),dd(m.return,o,r),u||(E=null);break t}m=O.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),dd(E,o,r),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===r){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function ms(r,i,o,u){r=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var O=d.type;dr(d.pendingProps.value,E.value)||(r!==null?r.push(O):r=[O])}}else if(d===X.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Hs):r=[Hs])}d=d.return}r!==null&&hd(i,r,o,u),i.flags|=262144}function fl(r){for(r=r.firstContext;r!==null;){if(!dr(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ki(r){Ii=r,$n=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function Ye(r){return JT(Ii,r)}function dl(r,i){return Ii===null&&Ki(r),JT(r,i)}function JT(r,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},$n===null){if(r===null)throw Error(a(308));$n=i,r.dependencies={lanes:0,firstContext:i},r.flags|=524288}else $n=$n.next=i;return o}var L9=typeof AbortController<"u"?AbortController:function(){var r=[],i=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){i.aborted=!0,r.forEach(function(o){return o()})}},D9=t.unstable_scheduleCallback,N9=t.unstable_NormalPriority,Oe={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pd(){return{controller:new L9,data:new Map,refCount:0}}function vs(r){r.refCount--,r.refCount===0&&D9(N9,function(){r.controller.abort()})}var gs=null,md=0,Pa=0,za=null;function B9(r,i){if(gs===null){var o=gs=[];md=0,Pa=gh(),za={status:"pending",value:void 0,then:function(u){o.push(u)}}}return md++,i.then(tw,tw),i}function tw(){if(--md===0&&gs!==null){za!==null&&(za.status="fulfilled");var r=gs;gs=null,Pa=0,za=null;for(var i=0;i<r.length;i++)(0,r[i])()}}function j9(r,i){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<o.length;d++)(0,o[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var ew=P.S;P.S=function(r,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&B9(r,i),ew!==null&&ew(r,i)};var Zi=T(null);function vd(){var r=Zi.current;return r!==null?r:ee.pooledCache}function hl(r,i){i===null?x(Zi,Zi.current):x(Zi,i.pool)}function rw(){var r=vd();return r===null?null:{parent:Oe._currentValue,pool:r}}var ys=Error(a(460)),nw=Error(a(474)),pl=Error(a(542)),gd={then:function(){}};function iw(r){return r=r.status,r==="fulfilled"||r==="rejected"}function ml(){}function aw(r,i,o){switch(o=r[o],o===void 0?r.push(i):o!==i&&(i.then(ml,ml),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,sw(r),r;default:if(typeof i.status=="string")i.then(ml,ml);else{if(r=ee,r!==null&&100<r.shellSuspendCounter)throw Error(a(482));r=i,r.status="pending",r.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw r=i.reason,sw(r),r}throw bs=i,ys}}var bs=null;function ow(){if(bs===null)throw Error(a(459));var r=bs;return bs=null,r}function sw(r){if(r===ys||r===pl)throw Error(a(483))}var ni=!1;function yd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bd(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ii(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ai(r,i,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(Yt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=sl(r),XT(r,null,o),i}return ol(r,u,i,o),sl(r)}function Ss(r,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Fu(r,o)}}function Sd(r,i){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=i:r.next=i,o.lastBaseUpdate=i}var Td=!1;function Ts(){if(Td){var r=za;if(r!==null)throw r}}function ws(r,i,o,u){Td=!1;var d=r.updateQueue;ni=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var V=O,I=V.next;V.next=null,E===null?m=I:E.next=I,E=V;var at=r.alternate;at!==null&&(at=at.updateQueue,O=at.lastBaseUpdate,O!==E&&(O===null?at.firstBaseUpdate=I:O.next=I,at.lastBaseUpdate=V))}if(m!==null){var lt=d.baseState;E=0,at=I=V=null,O=m;do{var K=O.lane&-536870913,J=K!==O.lane;if(J?(jt&K)===K:(u&K)===K){K!==0&&K===Pa&&(Td=!0),at!==null&&(at=at.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var At=r,Tt=O;K=i;var Kt=o;switch(Tt.tag){case 1:if(At=Tt.payload,typeof At=="function"){lt=At.call(Kt,lt,K);break t}lt=At;break t;case 3:At.flags=At.flags&-65537|128;case 0:if(At=Tt.payload,K=typeof At=="function"?At.call(Kt,lt,K):At,K==null)break t;lt=v({},lt,K);break t;case 2:ni=!0}}K=O.callback,K!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[K]:J.push(K))}else J={lane:K,tag:O.tag,payload:O.payload,callback:O.callback,next:null},at===null?(I=at=J,V=lt):at=at.next=J,E|=K;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;J=O,O=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);at===null&&(V=lt),d.baseState=V,d.firstBaseUpdate=I,d.lastBaseUpdate=at,m===null&&(d.shared.lanes=0),hi|=E,r.lanes=E,r.memoizedState=lt}}function uw(r,i){if(typeof r!="function")throw Error(a(191,r));r.call(i)}function lw(r,i){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)uw(o[r],i)}var Ua=T(null),vl=T(0);function cw(r,i){r=Bn,x(vl,r),x(Ua,i),Bn=r|i.baseLanes}function wd(){x(vl,Bn),x(Ua,Ua.current)}function Ed(){Bn=vl.current,w(Ua),w(vl)}var oi=0,_t=null,Xt=null,we=null,gl=!1,ka=!1,Qi=!1,yl=0,Es=0,Ga=null,V9=0;function ye(){throw Error(a(321))}function Ad(r,i){if(i===null)return!1;for(var o=0;o<i.length&&o<r.length;o++)if(!dr(r[o],i[o]))return!1;return!0}function Rd(r,i,o,u,d,m){return oi=m,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=r===null||r.memoizedState===null?Xw:Iw,Qi=!1,m=o(u,d),Qi=!1,ka&&(m=dw(i,o,u,d)),fw(r),m}function fw(r){P.H=Al;var i=Xt!==null&&Xt.next!==null;if(oi=0,we=Xt=_t=null,gl=!1,Es=0,Ga=null,i)throw Error(a(300));r===null||Le||(r=r.dependencies,r!==null&&fl(r)&&(Le=!0))}function dw(r,i,o,u){_t=r;var d=0;do{if(ka&&(Ga=null),Es=0,ka=!1,25<=d)throw Error(a(301));if(d+=1,we=Xt=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=Y9,m=i(o,u)}while(ka);return m}function P9(){var r=P.H,i=r.useState()[0];return i=typeof i.then=="function"?As(i):i,r=r.useState()[0],(Xt!==null?Xt.memoizedState:null)!==r&&(_t.flags|=1024),i}function xd(){var r=yl!==0;return yl=0,r}function Md(r,i,o){i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~o}function $d(r){if(gl){for(r=r.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}oi=0,we=Xt=_t=null,ka=!1,Es=yl=0,Ga=null}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?_t.memoizedState=we=r:we=we.next=r,we}function Ee(){if(Xt===null){var r=_t.alternate;r=r!==null?r.memoizedState:null}else r=Xt.next;var i=we===null?_t.memoizedState:we.next;if(i!==null)we=i,Xt=r;else{if(r===null)throw _t.alternate===null?Error(a(467)):Error(a(310));Xt=r,r={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},we===null?_t.memoizedState=we=r:we=we.next=r}return we}function Od(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function As(r){var i=Es;return Es+=1,Ga===null&&(Ga=[]),r=aw(Ga,r,i),i=_t,(we===null?i.memoizedState:we.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Xw:Iw),r}function bl(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return As(r);if(r.$$typeof===_)return Ye(r)}throw Error(a(438,String(r)))}function _d(r){var i=null,o=_t.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var u=_t.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Od(),_t.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(r),u=0;u<r;u++)o[u]=R;return i.index++,o}function _n(r,i){return typeof i=="function"?i(r):i}function Sl(r){var i=Ee();return Cd(i,Xt,r)}function Cd(r,i,o){var u=r.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var d=r.baseQueue,m=u.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,u.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{i=d.next;var O=E=null,V=null,I=i,at=!1;do{var lt=I.lane&-536870913;if(lt!==I.lane?(jt&lt)===lt:(oi&lt)===lt){var K=I.revertLane;if(K===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),lt===Pa&&(at=!0);else if((oi&K)===K){I=I.next,K===Pa&&(at=!0);continue}else lt={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},V===null?(O=V=lt,E=m):V=V.next=lt,_t.lanes|=K,hi|=K;lt=I.action,Qi&&o(m,lt),m=I.hasEagerState?I.eagerState:o(m,lt)}else K={lane:lt,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},V===null?(O=V=K,E=m):V=V.next=K,_t.lanes|=lt,hi|=lt;I=I.next}while(I!==null&&I!==i);if(V===null?E=m:V.next=O,!dr(m,r.memoizedState)&&(Le=!0,at&&(o=za,o!==null)))throw o;r.memoizedState=m,r.baseState=E,r.baseQueue=V,u.lastRenderedState=m}return d===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function qd(r){var i=Ee(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=r(m,E.action),E=E.next;while(E!==d);dr(m,i.memoizedState)||(Le=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function hw(r,i,o){var u=_t,d=Ee(),m=Pt;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var E=!dr((Xt||d).memoizedState,o);E&&(d.memoizedState=o,Le=!0),d=d.queue;var O=vw.bind(null,u,d,r);if(Rs(2048,8,O,[r]),d.getSnapshot!==i||E||we!==null&&we.memoizedState.tag&1){if(u.flags|=2048,Ha(9,Tl(),mw.bind(null,u,d,o,i),null),ee===null)throw Error(a(349));m||(oi&124)!==0||pw(u,i,o)}return o}function pw(r,i,o){r.flags|=16384,r={getSnapshot:i,value:o},i=_t.updateQueue,i===null?(i=Od(),_t.updateQueue=i,i.stores=[r]):(o=i.stores,o===null?i.stores=[r]:o.push(r))}function mw(r,i,o,u){i.value=o,i.getSnapshot=u,gw(i)&&yw(r)}function vw(r,i,o){return o(function(){gw(i)&&yw(r)})}function gw(r){var i=r.getSnapshot;r=r.value;try{var o=i();return!dr(r,o)}catch{return!0}}function yw(r){var i=Na(r,2);i!==null&&yr(i,r,2)}function Ld(r){var i=ir();if(typeof r=="function"){var o=r;if(r=o(),Qi){re(!0);try{o()}finally{re(!1)}}}return i.memoizedState=i.baseState=r,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:r},i}function bw(r,i,o,u){return r.baseState=o,Cd(r,Xt,typeof u=="function"?u:_n)}function z9(r,i,o,u,d){if(El(r))throw Error(a(485));if(r=i.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};P.T!==null?o(!0):m.isTransition=!1,u(m),o=i.pending,o===null?(m.next=i.pending=m,Sw(i,m)):(m.next=o.next,i.pending=o.next=m)}}function Sw(r,i){var o=i.action,u=i.payload,d=r.state;if(i.isTransition){var m=P.T,E={};P.T=E;try{var O=o(d,u),V=P.S;V!==null&&V(E,O),Tw(r,i,O)}catch(I){Dd(r,i,I)}finally{P.T=m}}else try{m=o(d,u),Tw(r,i,m)}catch(I){Dd(r,i,I)}}function Tw(r,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){ww(r,i,u)},function(u){return Dd(r,i,u)}):ww(r,i,o)}function ww(r,i,o){i.status="fulfilled",i.value=o,Ew(i),r.state=o,i=r.pending,i!==null&&(o=i.next,o===i?r.pending=null:(o=o.next,i.next=o,Sw(r,o)))}function Dd(r,i,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=o,Ew(i),i=i.next;while(i!==u)}r.action=null}function Ew(r){r=r.listeners;for(var i=0;i<r.length;i++)(0,r[i])()}function Aw(r,i){return i}function Rw(r,i){if(Pt){var o=ee.formState;if(o!==null){t:{var u=_t;if(Pt){if(ce){e:{for(var d=ce,m=nn;d.nodeType!==8;){if(!m){d=null;break e}if(d=Qr(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){ce=Qr(d.nextSibling),u=d.data==="F!";break t}}Xi(u)}u=!1}u&&(i=o[0])}}return o=ir(),o.memoizedState=o.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aw,lastRenderedState:i},o.queue=u,o=Hw.bind(null,_t,u),u.dispatch=o,u=Ld(!1),m=Pd.bind(null,_t,!1,u.queue),u=ir(),d={state:i,dispatch:null,action:r,pending:null},u.queue=d,o=z9.bind(null,_t,d,m,o),d.dispatch=o,u.memoizedState=r,[i,o,!1]}function xw(r){var i=Ee();return Mw(i,Xt,r)}function Mw(r,i,o){if(i=Cd(r,i,Aw)[0],r=Sl(_n)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=As(i)}catch(E){throw E===ys?pl:E}else u=i;i=Ee();var d=i.queue,m=d.dispatch;return o!==i.memoizedState&&(_t.flags|=2048,Ha(9,Tl(),U9.bind(null,d,o),null)),[u,m,r]}function U9(r,i){r.action=i}function $w(r){var i=Ee(),o=Xt;if(o!==null)return Mw(i,o,r);Ee(),i=i.memoizedState,o=Ee();var u=o.queue.dispatch;return o.memoizedState=r,[i,u,!1]}function Ha(r,i,o,u){return r={tag:r,create:o,deps:u,inst:i,next:null},i=_t.updateQueue,i===null&&(i=Od(),_t.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,i.lastEffect=r),r}function Tl(){return{destroy:void 0,resource:void 0}}function Ow(){return Ee().memoizedState}function wl(r,i,o,u){var d=ir();u=u===void 0?null:u,_t.flags|=r,d.memoizedState=Ha(1|i,Tl(),o,u)}function Rs(r,i,o,u){var d=Ee();u=u===void 0?null:u;var m=d.memoizedState.inst;Xt!==null&&u!==null&&Ad(u,Xt.memoizedState.deps)?d.memoizedState=Ha(i,m,o,u):(_t.flags|=r,d.memoizedState=Ha(1|i,m,o,u))}function _w(r,i){wl(8390656,8,r,i)}function Cw(r,i){Rs(2048,8,r,i)}function qw(r,i){return Rs(4,2,r,i)}function Lw(r,i){return Rs(4,4,r,i)}function Dw(r,i){if(typeof i=="function"){r=r();var o=i(r);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Nw(r,i,o){o=o!=null?o.concat([r]):null,Rs(4,4,Dw.bind(null,i,r),o)}function Nd(){}function Bw(r,i){var o=Ee();i=i===void 0?null:i;var u=o.memoizedState;return i!==null&&Ad(i,u[1])?u[0]:(o.memoizedState=[r,i],r)}function jw(r,i){var o=Ee();i=i===void 0?null:i;var u=o.memoizedState;if(i!==null&&Ad(i,u[1]))return u[0];if(u=r(),Qi){re(!0);try{r()}finally{re(!1)}}return o.memoizedState=[u,i],u}function Bd(r,i,o){return o===void 0||(oi&1073741824)!==0?r.memoizedState=i:(r.memoizedState=o,r=zE(),_t.lanes|=r,hi|=r,o)}function Vw(r,i,o,u){return dr(o,i)?o:Ua.current!==null?(r=Bd(r,o,u),dr(r,i)||(Le=!0),r):(oi&42)===0?(Le=!0,r.memoizedState=o):(r=zE(),_t.lanes|=r,hi|=r,i)}function Pw(r,i,o,u,d){var m=tt.p;tt.p=m!==0&&8>m?m:8;var E=P.T,O={};P.T=O,Pd(r,!1,i,o);try{var V=d(),I=P.S;if(I!==null&&I(O,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var at=j9(V,u);xs(r,i,at,gr(r))}else xs(r,i,u,gr(r))}catch(lt){xs(r,i,{then:function(){},status:"rejected",reason:lt},gr())}finally{tt.p=m,P.T=E}}function k9(){}function jd(r,i,o,u){if(r.tag!==5)throw Error(a(476));var d=zw(r).queue;Pw(r,d,i,ot,o===null?k9:function(){return Uw(r),o(u)})}function zw(r){var i=r.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:ot},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_n,lastRenderedState:o},next:null},r.memoizedState=i,r=r.alternate,r!==null&&(r.memoizedState=i),i}function Uw(r){var i=zw(r).next.queue;xs(r,i,{},gr())}function Vd(){return Ye(Hs)}function kw(){return Ee().memoizedState}function Gw(){return Ee().memoizedState}function G9(r){for(var i=r.return;i!==null;){switch(i.tag){case 24:case 3:var o=gr();r=ii(o);var u=ai(i,r,o);u!==null&&(yr(u,i,o),Ss(u,i,o)),i={cache:pd()},r.payload=i;return}i=i.return}}function H9(r,i,o){var u=gr();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},El(r)?Yw(i,o):(o=id(r,i,o,u),o!==null&&(yr(o,r,u),Fw(o,i,u)))}function Hw(r,i,o){var u=gr();xs(r,i,o,u)}function xs(r,i,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(El(r))Yw(i,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,O=m(E,o);if(d.hasEagerState=!0,d.eagerState=O,dr(O,E))return ol(r,i,d,0),ee===null&&al(),!1}catch{}finally{}if(o=id(r,i,d,u),o!==null)return yr(o,r,u),Fw(o,i,u),!0}return!1}function Pd(r,i,o,u){if(u={lane:2,revertLane:gh(),action:u,hasEagerState:!1,eagerState:null,next:null},El(r)){if(i)throw Error(a(479))}else i=id(r,o,u,2),i!==null&&yr(i,r,2)}function El(r){var i=r.alternate;return r===_t||i!==null&&i===_t}function Yw(r,i){ka=gl=!0;var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}function Fw(r,i,o){if((o&4194048)!==0){var u=i.lanes;u&=r.pendingLanes,o|=u,i.lanes=o,Fu(r,o)}}var Al={readContext:Ye,use:bl,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye},Xw={readContext:Ye,use:bl,useCallback:function(r,i){return ir().memoizedState=[r,i===void 0?null:i],r},useContext:Ye,useEffect:_w,useImperativeHandle:function(r,i,o){o=o!=null?o.concat([r]):null,wl(4194308,4,Dw.bind(null,i,r),o)},useLayoutEffect:function(r,i){return wl(4194308,4,r,i)},useInsertionEffect:function(r,i){wl(4,2,r,i)},useMemo:function(r,i){var o=ir();i=i===void 0?null:i;var u=r();if(Qi){re(!0);try{r()}finally{re(!1)}}return o.memoizedState=[u,i],u},useReducer:function(r,i,o){var u=ir();if(o!==void 0){var d=o(i);if(Qi){re(!0);try{o(i)}finally{re(!1)}}}else d=i;return u.memoizedState=u.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},u.queue=r,r=r.dispatch=H9.bind(null,_t,r),[u.memoizedState,r]},useRef:function(r){var i=ir();return r={current:r},i.memoizedState=r},useState:function(r){r=Ld(r);var i=r.queue,o=Hw.bind(null,_t,i);return i.dispatch=o,[r.memoizedState,o]},useDebugValue:Nd,useDeferredValue:function(r,i){var o=ir();return Bd(o,r,i)},useTransition:function(){var r=Ld(!1);return r=Pw.bind(null,_t,r.queue,!0,!1),ir().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,i,o){var u=_t,d=ir();if(Pt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),ee===null)throw Error(a(349));(jt&124)!==0||pw(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,_w(vw.bind(null,u,m,r),[r]),u.flags|=2048,Ha(9,Tl(),mw.bind(null,u,m,o,i),null),o},useId:function(){var r=ir(),i=ee.identifierPrefix;if(Pt){var o=Mn,u=xn;o=(u&~(1<<32-$e(u)-1)).toString(32)+o,i="«"+i+"R"+o,o=yl++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=V9++,i="«"+i+"r"+o.toString(32)+"»";return r.memoizedState=i},useHostTransitionStatus:Vd,useFormState:Rw,useActionState:Rw,useOptimistic:function(r){var i=ir();i.memoizedState=i.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Pd.bind(null,_t,!0,o),o.dispatch=i,[r,i]},useMemoCache:_d,useCacheRefresh:function(){return ir().memoizedState=G9.bind(null,_t)}},Iw={readContext:Ye,use:bl,useCallback:Bw,useContext:Ye,useEffect:Cw,useImperativeHandle:Nw,useInsertionEffect:qw,useLayoutEffect:Lw,useMemo:jw,useReducer:Sl,useRef:Ow,useState:function(){return Sl(_n)},useDebugValue:Nd,useDeferredValue:function(r,i){var o=Ee();return Vw(o,Xt.memoizedState,r,i)},useTransition:function(){var r=Sl(_n)[0],i=Ee().memoizedState;return[typeof r=="boolean"?r:As(r),i]},useSyncExternalStore:hw,useId:kw,useHostTransitionStatus:Vd,useFormState:xw,useActionState:xw,useOptimistic:function(r,i){var o=Ee();return bw(o,Xt,r,i)},useMemoCache:_d,useCacheRefresh:Gw},Y9={readContext:Ye,use:bl,useCallback:Bw,useContext:Ye,useEffect:Cw,useImperativeHandle:Nw,useInsertionEffect:qw,useLayoutEffect:Lw,useMemo:jw,useReducer:qd,useRef:Ow,useState:function(){return qd(_n)},useDebugValue:Nd,useDeferredValue:function(r,i){var o=Ee();return Xt===null?Bd(o,r,i):Vw(o,Xt.memoizedState,r,i)},useTransition:function(){var r=qd(_n)[0],i=Ee().memoizedState;return[typeof r=="boolean"?r:As(r),i]},useSyncExternalStore:hw,useId:kw,useHostTransitionStatus:Vd,useFormState:$w,useActionState:$w,useOptimistic:function(r,i){var o=Ee();return Xt!==null?bw(o,Xt,r,i):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:_d,useCacheRefresh:Gw},Ya=null,Ms=0;function Rl(r){var i=Ms;return Ms+=1,Ya===null&&(Ya=[]),aw(Ya,r,i)}function $s(r,i){i=i.props.ref,r.ref=i!==void 0?i:null}function xl(r,i){throw i.$$typeof===g?Error(a(525)):(r=Object.prototype.toString.call(i),Error(a(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r)))}function Kw(r){var i=r._init;return i(r._payload)}function Zw(r){function i(G,z){if(r){var F=G.deletions;F===null?(G.deletions=[z],G.flags|=16):F.push(z)}}function o(G,z){if(!r)return null;for(;z!==null;)i(G,z),z=z.sibling;return null}function u(G){for(var z=new Map;G!==null;)G.key!==null?z.set(G.key,G):z.set(G.index,G),G=G.sibling;return z}function d(G,z){return G=Rn(G,z),G.index=0,G.sibling=null,G}function m(G,z,F){return G.index=F,r?(F=G.alternate,F!==null?(F=F.index,F<z?(G.flags|=67108866,z):F):(G.flags|=67108866,z)):(G.flags|=1048576,z)}function E(G){return r&&G.alternate===null&&(G.flags|=67108866),G}function O(G,z,F,st){return z===null||z.tag!==6?(z=od(F,G.mode,st),z.return=G,z):(z=d(z,F),z.return=G,z)}function V(G,z,F,st){var gt=F.type;return gt===A?at(G,z,F.props.children,st,F.key):z!==null&&(z.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===H&&Kw(gt)===z.type)?(z=d(z,F.props),$s(z,F),z.return=G,z):(z=ul(F.type,F.key,F.props,null,G.mode,st),$s(z,F),z.return=G,z)}function I(G,z,F,st){return z===null||z.tag!==4||z.stateNode.containerInfo!==F.containerInfo||z.stateNode.implementation!==F.implementation?(z=sd(F,G.mode,st),z.return=G,z):(z=d(z,F.children||[]),z.return=G,z)}function at(G,z,F,st,gt){return z===null||z.tag!==7?(z=Gi(F,G.mode,st,gt),z.return=G,z):(z=d(z,F),z.return=G,z)}function lt(G,z,F){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=od(""+z,G.mode,F),z.return=G,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return F=ul(z.type,z.key,z.props,null,G.mode,F),$s(F,z),F.return=G,F;case y:return z=sd(z,G.mode,F),z.return=G,z;case H:var st=z._init;return z=st(z._payload),lt(G,z,F)}if(dt(z)||et(z))return z=Gi(z,G.mode,F,null),z.return=G,z;if(typeof z.then=="function")return lt(G,Rl(z),F);if(z.$$typeof===_)return lt(G,dl(G,z),F);xl(G,z)}return null}function K(G,z,F,st){var gt=z!==null?z.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return gt!==null?null:O(G,z,""+F,st);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===gt?V(G,z,F,st):null;case y:return F.key===gt?I(G,z,F,st):null;case H:return gt=F._init,F=gt(F._payload),K(G,z,F,st)}if(dt(F)||et(F))return gt!==null?null:at(G,z,F,st,null);if(typeof F.then=="function")return K(G,z,Rl(F),st);if(F.$$typeof===_)return K(G,z,dl(G,F),st);xl(G,F)}return null}function J(G,z,F,st,gt){if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return G=G.get(F)||null,O(z,G,""+st,gt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case S:return G=G.get(st.key===null?F:st.key)||null,V(z,G,st,gt);case y:return G=G.get(st.key===null?F:st.key)||null,I(z,G,st,gt);case H:var Ct=st._init;return st=Ct(st._payload),J(G,z,F,st,gt)}if(dt(st)||et(st))return G=G.get(F)||null,at(z,G,st,gt,null);if(typeof st.then=="function")return J(G,z,F,Rl(st),gt);if(st.$$typeof===_)return J(G,z,F,dl(z,st),gt);xl(z,st)}return null}function At(G,z,F,st){for(var gt=null,Ct=null,St=z,wt=z=0,Ne=null;St!==null&&wt<F.length;wt++){St.index>wt?(Ne=St,St=null):Ne=St.sibling;var Vt=K(G,St,F[wt],st);if(Vt===null){St===null&&(St=Ne);break}r&&St&&Vt.alternate===null&&i(G,St),z=m(Vt,z,wt),Ct===null?gt=Vt:Ct.sibling=Vt,Ct=Vt,St=Ne}if(wt===F.length)return o(G,St),Pt&&Yi(G,wt),gt;if(St===null){for(;wt<F.length;wt++)St=lt(G,F[wt],st),St!==null&&(z=m(St,z,wt),Ct===null?gt=St:Ct.sibling=St,Ct=St);return Pt&&Yi(G,wt),gt}for(St=u(St);wt<F.length;wt++)Ne=J(St,G,wt,F[wt],st),Ne!==null&&(r&&Ne.alternate!==null&&St.delete(Ne.key===null?wt:Ne.key),z=m(Ne,z,wt),Ct===null?gt=Ne:Ct.sibling=Ne,Ct=Ne);return r&&St.forEach(function(wi){return i(G,wi)}),Pt&&Yi(G,wt),gt}function Tt(G,z,F,st){if(F==null)throw Error(a(151));for(var gt=null,Ct=null,St=z,wt=z=0,Ne=null,Vt=F.next();St!==null&&!Vt.done;wt++,Vt=F.next()){St.index>wt?(Ne=St,St=null):Ne=St.sibling;var wi=K(G,St,Vt.value,st);if(wi===null){St===null&&(St=Ne);break}r&&St&&wi.alternate===null&&i(G,St),z=m(wi,z,wt),Ct===null?gt=wi:Ct.sibling=wi,Ct=wi,St=Ne}if(Vt.done)return o(G,St),Pt&&Yi(G,wt),gt;if(St===null){for(;!Vt.done;wt++,Vt=F.next())Vt=lt(G,Vt.value,st),Vt!==null&&(z=m(Vt,z,wt),Ct===null?gt=Vt:Ct.sibling=Vt,Ct=Vt);return Pt&&Yi(G,wt),gt}for(St=u(St);!Vt.done;wt++,Vt=F.next())Vt=J(St,G,wt,Vt.value,st),Vt!==null&&(r&&Vt.alternate!==null&&St.delete(Vt.key===null?wt:Vt.key),z=m(Vt,z,wt),Ct===null?gt=Vt:Ct.sibling=Vt,Ct=Vt);return r&&St.forEach(function(F7){return i(G,F7)}),Pt&&Yi(G,wt),gt}function Kt(G,z,F,st){if(typeof F=="object"&&F!==null&&F.type===A&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:t:{for(var gt=F.key;z!==null;){if(z.key===gt){if(gt=F.type,gt===A){if(z.tag===7){o(G,z.sibling),st=d(z,F.props.children),st.return=G,G=st;break t}}else if(z.elementType===gt||typeof gt=="object"&&gt!==null&&gt.$$typeof===H&&Kw(gt)===z.type){o(G,z.sibling),st=d(z,F.props),$s(st,F),st.return=G,G=st;break t}o(G,z);break}else i(G,z);z=z.sibling}F.type===A?(st=Gi(F.props.children,G.mode,st,F.key),st.return=G,G=st):(st=ul(F.type,F.key,F.props,null,G.mode,st),$s(st,F),st.return=G,G=st)}return E(G);case y:t:{for(gt=F.key;z!==null;){if(z.key===gt)if(z.tag===4&&z.stateNode.containerInfo===F.containerInfo&&z.stateNode.implementation===F.implementation){o(G,z.sibling),st=d(z,F.children||[]),st.return=G,G=st;break t}else{o(G,z);break}else i(G,z);z=z.sibling}st=sd(F,G.mode,st),st.return=G,G=st}return E(G);case H:return gt=F._init,F=gt(F._payload),Kt(G,z,F,st)}if(dt(F))return At(G,z,F,st);if(et(F)){if(gt=et(F),typeof gt!="function")throw Error(a(150));return F=gt.call(F),Tt(G,z,F,st)}if(typeof F.then=="function")return Kt(G,z,Rl(F),st);if(F.$$typeof===_)return Kt(G,z,dl(G,F),st);xl(G,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,z!==null&&z.tag===6?(o(G,z.sibling),st=d(z,F),st.return=G,G=st):(o(G,z),st=od(F,G.mode,st),st.return=G,G=st),E(G)):o(G,z)}return function(G,z,F,st){try{Ms=0;var gt=Kt(G,z,F,st);return Ya=null,gt}catch(St){if(St===ys||St===pl)throw St;var Ct=hr(29,St,null,G.mode);return Ct.lanes=st,Ct.return=G,Ct}finally{}}}var Fa=Zw(!0),Qw=Zw(!1),_r=T(null),an=null;function si(r){var i=r.alternate;x(_e,_e.current&1),x(_r,r),an===null&&(i===null||Ua.current!==null||i.memoizedState!==null)&&(an=r)}function Ww(r){if(r.tag===22){if(x(_e,_e.current),x(_r,r),an===null){var i=r.alternate;i!==null&&i.memoizedState!==null&&(an=r)}}else ui()}function ui(){x(_e,_e.current),x(_r,_r.current)}function Cn(r){w(_r),an===r&&(an=null),w(_e)}var _e=T(0);function Ml(r){for(var i=r;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Oh(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function zd(r,i,o,u){i=r.memoizedState,o=o(u,i),o=o==null?i:v({},i,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Ud={enqueueSetState:function(r,i,o){r=r._reactInternals;var u=gr(),d=ii(u);d.payload=i,o!=null&&(d.callback=o),i=ai(r,d,u),i!==null&&(yr(i,r,u),Ss(i,r,u))},enqueueReplaceState:function(r,i,o){r=r._reactInternals;var u=gr(),d=ii(u);d.tag=1,d.payload=i,o!=null&&(d.callback=o),i=ai(r,d,u),i!==null&&(yr(i,r,u),Ss(i,r,u))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var o=gr(),u=ii(o);u.tag=2,i!=null&&(u.callback=i),i=ai(r,u,o),i!==null&&(yr(i,r,o),Ss(i,r,o))}};function Jw(r,i,o,u,d,m,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!cs(o,u)||!cs(d,m):!0}function tE(r,i,o,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==r&&Ud.enqueueReplaceState(i,i.state,null)}function Wi(r,i){var o=i;if("ref"in i){o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}if(r=r.defaultProps){o===i&&(o=v({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var $l=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function eE(r){$l(r)}function rE(r){console.error(r)}function nE(r){$l(r)}function Ol(r,i){try{var o=r.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function iE(r,i,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function kd(r,i,o){return o=ii(o),o.tag=3,o.payload={element:null},o.callback=function(){Ol(r,i)},o}function aE(r){return r=ii(r),r.tag=3,r}function oE(r,i,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;r.payload=function(){return d(m)},r.callback=function(){iE(i,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){iE(i,o,u),typeof d!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function F9(r,i,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=o.alternate,i!==null&&ms(i,o,d,!0),o=_r.current,o!==null){switch(o.tag){case 13:return an===null?dh():o.alternate===null&&fe===0&&(fe=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===gd?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([u]):i.add(u),ph(r,u,d)),!1;case 22:return o.flags|=65536,u===gd?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([u]):o.add(u)),ph(r,u,d)),!1}throw Error(a(435,o.tag))}return ph(r,u,d),dh(),!1}if(Pt)return i=_r.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==cd&&(r=Error(a(422),{cause:u}),ps(xr(r,o)))):(u!==cd&&(i=Error(a(423),{cause:u}),ps(xr(i,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,u=xr(u,o),d=kd(r.stateNode,u,d),Sd(r,d),fe!==4&&(fe=2)),!1;var m=Error(a(520),{cause:u});if(m=xr(m,o),Ns===null?Ns=[m]:Ns.push(m),fe!==4&&(fe=2),i===null)return!0;u=xr(u,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=kd(o.stateNode,u,r),Sd(o,r),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pi===null||!pi.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=aE(d),oE(d,r,o,u),Sd(o,d),!1}o=o.return}while(o!==null);return!1}var sE=Error(a(461)),Le=!1;function Be(r,i,o,u){i.child=r===null?Qw(i,null,o,u):Fa(i,r.child,o,u)}function uE(r,i,o,u,d){o=o.render;var m=i.ref;if("ref"in u){var E={};for(var O in u)O!=="ref"&&(E[O]=u[O])}else E=u;return Ki(i),u=Rd(r,i,o,E,m,d),O=xd(),r!==null&&!Le?(Md(r,i,d),qn(r,i,d)):(Pt&&O&&ud(i),i.flags|=1,Be(r,i,u,d),i.child)}function lE(r,i,o,u,d){if(r===null){var m=o.type;return typeof m=="function"&&!ad(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,cE(r,i,m,u,d)):(r=ul(o.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,!Zd(r,d)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:cs,o(E,u)&&r.ref===i.ref)return qn(r,i,d)}return i.flags|=1,r=Rn(m,u),r.ref=i.ref,r.return=i,i.child=r}function cE(r,i,o,u,d){if(r!==null){var m=r.memoizedProps;if(cs(m,u)&&r.ref===i.ref)if(Le=!1,i.pendingProps=u=m,Zd(r,d))(r.flags&131072)!==0&&(Le=!0);else return i.lanes=r.lanes,qn(r,i,d)}return Gd(r,i,o,u,d)}function fE(r,i,o){var u=i.pendingProps,d=u.children,m=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,r!==null){for(d=i.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;i.childLanes=m&~u}else i.childLanes=0,i.child=null;return dE(r,i,u,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},r!==null&&hl(i,m!==null?m.cachePool:null),m!==null?cw(i,m):wd(),Ww(i);else return i.lanes=i.childLanes=536870912,dE(r,i,m!==null?m.baseLanes|o:o,o)}else m!==null?(hl(i,m.cachePool),cw(i,m),ui(),i.memoizedState=null):(r!==null&&hl(i,null),wd(),ui());return Be(r,i,d,o),i.child}function dE(r,i,o,u){var d=vd();return d=d===null?null:{parent:Oe._currentValue,pool:d},i.memoizedState={baseLanes:o,cachePool:d},r!==null&&hl(i,null),wd(),Ww(i),r!==null&&ms(r,i,u,!0),null}function _l(r,i){var o=i.ref;if(o===null)r!==null&&r.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(r===null||r.ref!==o)&&(i.flags|=4194816)}}function Gd(r,i,o,u,d){return Ki(i),o=Rd(r,i,o,u,void 0,d),u=xd(),r!==null&&!Le?(Md(r,i,d),qn(r,i,d)):(Pt&&u&&ud(i),i.flags|=1,Be(r,i,o,d),i.child)}function hE(r,i,o,u,d,m){return Ki(i),i.updateQueue=null,o=dw(i,u,o,d),fw(r),u=xd(),r!==null&&!Le?(Md(r,i,m),qn(r,i,m)):(Pt&&u&&ud(i),i.flags|=1,Be(r,i,o,m),i.child)}function pE(r,i,o,u,d){if(Ki(i),i.stateNode===null){var m=Ba,E=o.contextType;typeof E=="object"&&E!==null&&(m=Ye(E)),m=new o(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ud,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},yd(i),E=o.contextType,m.context=typeof E=="object"&&E!==null?Ye(E):Ba,m.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(zd(i,o,E,u),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ud.enqueueReplaceState(m,m.state,null),ws(i,u,m,d),Ts(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(r===null){m=i.stateNode;var O=i.memoizedProps,V=Wi(o,O);m.props=V;var I=m.context,at=o.contextType;E=Ba,typeof at=="object"&&at!==null&&(E=Ye(at));var lt=o.getDerivedStateFromProps;at=typeof lt=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=i.pendingProps!==O,at||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||I!==E)&&tE(i,m,u,E),ni=!1;var K=i.memoizedState;m.state=K,ws(i,u,m,d),Ts(),I=i.memoizedState,O||K!==I||ni?(typeof lt=="function"&&(zd(i,o,lt,u),I=i.memoizedState),(V=ni||Jw(i,o,V,u,K,I,E))?(at||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=I),m.props=u,m.state=I,m.context=E,u=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,bd(r,i),E=i.memoizedProps,at=Wi(o,E),m.props=at,lt=i.pendingProps,K=m.context,I=o.contextType,V=Ba,typeof I=="object"&&I!==null&&(V=Ye(I)),O=o.getDerivedStateFromProps,(I=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==lt||K!==V)&&tE(i,m,u,V),ni=!1,K=i.memoizedState,m.state=K,ws(i,u,m,d),Ts();var J=i.memoizedState;E!==lt||K!==J||ni||r!==null&&r.dependencies!==null&&fl(r.dependencies)?(typeof O=="function"&&(zd(i,o,O,u),J=i.memoizedState),(at=ni||Jw(i,o,at,u,K,J,V)||r!==null&&r.dependencies!==null&&fl(r.dependencies))?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,J,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,J,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===r.memoizedProps&&K===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&K===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=J),m.props=u,m.state=J,m.context=V,u=at):(typeof m.componentDidUpdate!="function"||E===r.memoizedProps&&K===r.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&K===r.memoizedState||(i.flags|=1024),u=!1)}return m=u,_l(r,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,r!==null&&u?(i.child=Fa(i,r.child,null,d),i.child=Fa(i,null,o,d)):Be(r,i,o,d),i.memoizedState=m.state,r=i.child):r=qn(r,i,d),r}function mE(r,i,o,u){return hs(),i.flags|=256,Be(r,i,o,u),i.child}var Hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yd(r){return{baseLanes:r,cachePool:rw()}}function Fd(r,i,o){return r=r!==null?r.childLanes&~o:0,i&&(r|=Cr),r}function vE(r,i,o){var u=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=r!==null&&r.memoizedState===null?!1:(_e.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,r===null){if(Pt){if(d?si(i):ui(),Pt){var O=ce,V;if(V=O){t:{for(V=O,O=nn;V.nodeType!==8;){if(!O){O=null;break t}if(V=Qr(V.nextSibling),V===null){O=null;break t}}O=V}O!==null?(i.memoizedState={dehydrated:O,treeContext:Hi!==null?{id:xn,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},V=hr(18,null,null,0),V.stateNode=O,V.return=i,i.child=V,Qe=i,ce=null,V=!0):V=!1}V||Xi(i)}if(O=i.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return Oh(O)?i.lanes=32:i.lanes=536870912,null;Cn(i)}return O=u.children,u=u.fallback,d?(ui(),d=i.mode,O=Cl({mode:"hidden",children:O},d),u=Gi(u,d,o,null),O.return=i,u.return=i,O.sibling=u,i.child=O,d=i.child,d.memoizedState=Yd(o),d.childLanes=Fd(r,E,o),i.memoizedState=Hd,u):(si(i),Xd(i,O))}if(V=r.memoizedState,V!==null&&(O=V.dehydrated,O!==null)){if(m)i.flags&256?(si(i),i.flags&=-257,i=Id(r,i,o)):i.memoizedState!==null?(ui(),i.child=r.child,i.flags|=128,i=null):(ui(),d=u.fallback,O=i.mode,u=Cl({mode:"visible",children:u.children},O),d=Gi(d,O,o,null),d.flags|=2,u.return=i,d.return=i,u.sibling=d,i.child=u,Fa(i,r.child,null,o),u=i.child,u.memoizedState=Yd(o),u.childLanes=Fd(r,E,o),i.memoizedState=Hd,i=d);else if(si(i),Oh(O)){if(E=O.nextSibling&&O.nextSibling.dataset,E)var I=E.dgst;E=I,u=Error(a(419)),u.stack="",u.digest=E,ps({value:u,source:null,stack:null}),i=Id(r,i,o)}else if(Le||ms(r,i,o,!1),E=(o&r.childLanes)!==0,Le||E){if(E=ee,E!==null&&(u=o&-o,u=(u&42)!==0?1:ts(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==V.retryLane))throw V.retryLane=u,Na(r,u),yr(E,r,u),sE;O.data==="$?"||dh(),i=Id(r,i,o)}else O.data==="$?"?(i.flags|=192,i.child=r.child,i=null):(r=V.treeContext,ce=Qr(O.nextSibling),Qe=i,Pt=!0,Fi=null,nn=!1,r!==null&&($r[Or++]=xn,$r[Or++]=Mn,$r[Or++]=Hi,xn=r.id,Mn=r.overflow,Hi=i),i=Xd(i,u.children),i.flags|=4096);return i}return d?(ui(),d=u.fallback,O=i.mode,V=r.child,I=V.sibling,u=Rn(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,I!==null?d=Rn(I,d):(d=Gi(d,O,o,null),d.flags|=2),d.return=i,u.return=i,u.sibling=d,i.child=u,u=d,d=i.child,O=r.child.memoizedState,O===null?O=Yd(o):(V=O.cachePool,V!==null?(I=Oe._currentValue,V=V.parent!==I?{parent:I,pool:I}:V):V=rw(),O={baseLanes:O.baseLanes|o,cachePool:V}),d.memoizedState=O,d.childLanes=Fd(r,E,o),i.memoizedState=Hd,u):(si(i),o=r.child,r=o.sibling,o=Rn(o,{mode:"visible",children:u.children}),o.return=i,o.sibling=null,r!==null&&(E=i.deletions,E===null?(i.deletions=[r],i.flags|=16):E.push(r)),i.child=o,i.memoizedState=null,o)}function Xd(r,i){return i=Cl({mode:"visible",children:i},r.mode),i.return=r,r.child=i}function Cl(r,i){return r=hr(22,r,null,i),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Id(r,i,o){return Fa(i,r.child,null,o),r=Xd(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function gE(r,i,o){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),dd(r.return,i,o)}function Kd(r,i,o,u,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function yE(r,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Be(r,i,u.children,o),u=_e.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)t:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&gE(r,o,i);else if(r.tag===19)gE(r,o,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(x(_e,u),d){case"forwards":for(o=i.child,d=null;o!==null;)r=o.alternate,r!==null&&Ml(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Kd(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&Ml(r)===null){i.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}Kd(i,!0,o,null,m);break;case"together":Kd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qn(r,i,o){if(r!==null&&(i.dependencies=r.dependencies),hi|=i.lanes,(o&i.childLanes)===0)if(r!==null){if(ms(r,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(r!==null&&i.child!==r.child)throw Error(a(153));if(i.child!==null){for(r=i.child,o=Rn(r,r.pendingProps),i.child=o,o.return=i;r.sibling!==null;)r=r.sibling,o=o.sibling=Rn(r,r.pendingProps),o.return=i;o.sibling=null}return i.child}function Zd(r,i){return(r.lanes&i)!==0?!0:(r=r.dependencies,!!(r!==null&&fl(r)))}function X9(r,i,o){switch(i.tag){case 3:mt(i,i.stateNode.containerInfo),ri(i,Oe,r.memoizedState.cache),hs();break;case 27:case 5:Et(i);break;case 4:mt(i,i.stateNode.containerInfo);break;case 10:ri(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(si(i),i.flags|=128,null):(o&i.child.childLanes)!==0?vE(r,i,o):(si(i),r=qn(r,i,o),r!==null?r.sibling:null);si(i);break;case 19:var d=(r.flags&128)!==0;if(u=(o&i.childLanes)!==0,u||(ms(r,i,o,!1),u=(o&i.childLanes)!==0),d){if(u)return yE(r,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),x(_e,_e.current),u)break;return null;case 22:case 23:return i.lanes=0,fE(r,i,o);case 24:ri(i,Oe,r.memoizedState.cache)}return qn(r,i,o)}function bE(r,i,o){if(r!==null)if(r.memoizedProps!==i.pendingProps)Le=!0;else{if(!Zd(r,o)&&(i.flags&128)===0)return Le=!1,X9(r,i,o);Le=(r.flags&131072)!==0}else Le=!1,Pt&&(i.flags&1048576)!==0&&KT(i,cl,i.index);switch(i.lanes=0,i.tag){case 16:t:{r=i.pendingProps;var u=i.elementType,d=u._init;if(u=d(u._payload),i.type=u,typeof u=="function")ad(u)?(r=Wi(u,r),i.tag=1,i=pE(null,i,u,r,o)):(i.tag=0,i=Gd(null,i,u,r,o));else{if(u!=null){if(d=u.$$typeof,d===N){i.tag=11,i=uE(null,i,u,r,o);break t}else if(d===j){i.tag=14,i=lE(null,i,u,r,o);break t}}throw i=ft(u)||u,Error(a(306,i,""))}}return i;case 0:return Gd(r,i,i.type,i.pendingProps,o);case 1:return u=i.type,d=Wi(u,i.pendingProps),pE(r,i,u,d,o);case 3:t:{if(mt(i,i.stateNode.containerInfo),r===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;d=m.element,bd(r,i),ws(i,u,null,o);var E=i.memoizedState;if(u=E.cache,ri(i,Oe,u),u!==m.cache&&hd(i,[Oe],o,!0),Ts(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=mE(r,i,u,o);break t}else if(u!==d){d=xr(Error(a(424)),i),ps(d),i=mE(r,i,u,o);break t}else{switch(r=i.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(ce=Qr(r.firstChild),Qe=i,Pt=!0,Fi=null,nn=!0,o=Qw(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(hs(),u===d){i=qn(r,i,o);break t}Be(r,i,u,o)}i=i.child}return i;case 26:return _l(r,i),r===null?(o=EA(i.type,null,i.pendingProps,null))?i.memoizedState=o:Pt||(o=i.type,r=i.pendingProps,u=Yl(U.current).createElement(o),u[He]=i,u[rr]=r,Ve(u,o,r),qe(u),i.stateNode=u):i.memoizedState=EA(i.type,r.memoizedProps,i.pendingProps,r.memoizedState),null;case 27:return Et(i),r===null&&Pt&&(u=i.stateNode=SA(i.type,i.pendingProps,U.current),Qe=i,nn=!0,d=ce,gi(i.type)?(_h=d,ce=Qr(u.firstChild)):ce=d),Be(r,i,i.pendingProps.children,o),_l(r,i),r===null&&(i.flags|=4194304),i.child;case 5:return r===null&&Pt&&((d=u=ce)&&(u=T7(u,i.type,i.pendingProps,nn),u!==null?(i.stateNode=u,Qe=i,ce=Qr(u.firstChild),nn=!1,d=!0):d=!1),d||Xi(i)),Et(i),d=i.type,m=i.pendingProps,E=r!==null?r.memoizedProps:null,u=m.children,xh(d,m)?u=null:E!==null&&xh(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=Rd(r,i,P9,null,null,o),Hs._currentValue=d),_l(r,i),Be(r,i,u,o),i.child;case 6:return r===null&&Pt&&((r=o=ce)&&(o=w7(o,i.pendingProps,nn),o!==null?(i.stateNode=o,Qe=i,ce=null,r=!0):r=!1),r||Xi(i)),null;case 13:return vE(r,i,o);case 4:return mt(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=Fa(i,null,u,o):Be(r,i,u,o),i.child;case 11:return uE(r,i,i.type,i.pendingProps,o);case 7:return Be(r,i,i.pendingProps,o),i.child;case 8:return Be(r,i,i.pendingProps.children,o),i.child;case 12:return Be(r,i,i.pendingProps.children,o),i.child;case 10:return u=i.pendingProps,ri(i,i.type,u.value),Be(r,i,u.children,o),i.child;case 9:return d=i.type._context,u=i.pendingProps.children,Ki(i),d=Ye(d),u=u(d),i.flags|=1,Be(r,i,u,o),i.child;case 14:return lE(r,i,i.type,i.pendingProps,o);case 15:return cE(r,i,i.type,i.pendingProps,o);case 19:return yE(r,i,o);case 31:return u=i.pendingProps,o=i.mode,u={mode:u.mode,children:u.children},r===null?(o=Cl(u,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=Rn(r.child,u),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return fE(r,i,o);case 24:return Ki(i),u=Ye(Oe),r===null?(d=vd(),d===null&&(d=ee,m=pd(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),i.memoizedState={parent:u,cache:d},yd(i),ri(i,Oe,d)):((r.lanes&o)!==0&&(bd(r,i),ws(i,null,null,o),Ts()),d=r.memoizedState,m=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),ri(i,Oe,u)):(u=m.cache,ri(i,Oe,u),u!==d.cache&&hd(i,[Oe],o,!0))),Be(r,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ln(r){r.flags|=4}function SE(r,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!$A(i)){if(i=_r.current,i!==null&&((jt&4194048)===jt?an!==null:(jt&62914560)!==jt&&(jt&536870912)===0||i!==an))throw bs=gd,nw;r.flags|=8192}}function ql(r,i){i!==null&&(r.flags|=4),r.flags&16384&&(i=r.tag!==22?Hu():536870912,r.lanes|=i,Za|=i)}function Os(r,i){if(!Pt)switch(r.tailMode){case"hidden":i=r.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function oe(r){var i=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(i)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=o,i}function I9(r,i,o){var u=i.pendingProps;switch(ld(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(i),null;case 1:return oe(i),null;case 3:return o=i.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),On(Oe),it(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(ds(i)?Ln(i):r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,WT())),oe(i),null;case 26:return o=i.memoizedState,r===null?(Ln(i),o!==null?(oe(i),SE(i,o)):(oe(i),i.flags&=-16777217)):o?o!==r.memoizedState?(Ln(i),oe(i),SE(i,o)):(oe(i),i.flags&=-16777217):(r.memoizedProps!==u&&Ln(i),oe(i),i.flags&=-16777217),null;case 27:ut(i),o=U.current;var d=i.type;if(r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Ln(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return oe(i),null}r=q.current,ds(i)?ZT(i):(r=SA(d,u,o),i.stateNode=r,Ln(i))}return oe(i),null;case 5:if(ut(i),o=i.type,r!==null&&i.stateNode!=null)r.memoizedProps!==u&&Ln(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return oe(i),null}if(r=q.current,ds(i))ZT(i);else{switch(d=Yl(U.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}r[He]=i,r[rr]=u;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=r;t:switch(Ve(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ln(i)}}return oe(i),i.flags&=-16777217,null;case 6:if(r&&i.stateNode!=null)r.memoizedProps!==u&&Ln(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(r=U.current,ds(i)){if(r=i.stateNode,o=i.memoizedProps,u=null,d=Qe,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}r[He]=i,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||hA(r.nodeValue,o)),r||Xi(i)}else r=Yl(r).createTextNode(u),r[He]=i,i.stateNode=r}return oe(i),null;case 13:if(u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=ds(i),u!==null&&u.dehydrated!==null){if(r===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[He]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;oe(i),d=!1}else d=WT(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Cn(i),i):(Cn(i),null)}if(Cn(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)}return o!==r&&o&&(i.child.flags|=8192),ql(i,i.updateQueue),oe(i),null;case 4:return it(),r===null&&Th(i.stateNode.containerInfo),oe(i),null;case 10:return On(i.type),oe(i),null;case 19:if(w(_e),d=i.memoizedState,d===null)return oe(i),null;if(u=(i.flags&128)!==0,m=d.rendering,m===null)if(u)Os(d,!1);else{if(fe!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(m=Ml(r),m!==null){for(i.flags|=128,Os(d,!1),r=m.updateQueue,i.updateQueue=r,ql(i,r),i.subtreeFlags=0,r=o,o=i.child;o!==null;)IT(o,r),o=o.sibling;return x(_e,_e.current&1|2),i.child}r=r.sibling}d.tail!==null&&Ht()>Nl&&(i.flags|=128,u=!0,Os(d,!1),i.lanes=4194304)}else{if(!u)if(r=Ml(m),r!==null){if(i.flags|=128,u=!0,r=r.updateQueue,i.updateQueue=r,ql(i,r),Os(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Pt)return oe(i),null}else 2*Ht()-d.renderingStartTime>Nl&&o!==536870912&&(i.flags|=128,u=!0,Os(d,!1),i.lanes=4194304);d.isBackwards?(m.sibling=i.child,i.child=m):(r=d.last,r!==null?r.sibling=m:i.child=m,d.last=m)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Ht(),i.sibling=null,r=_e.current,x(_e,u?r&1|2:r&1),i):(oe(i),null);case 22:case 23:return Cn(i),Ed(),u=i.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(o&536870912)!==0&&(i.flags&128)===0&&(oe(i),i.subtreeFlags&6&&(i.flags|=8192)):oe(i),o=i.updateQueue,o!==null&&ql(i,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048),r!==null&&w(Zi),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),On(Oe),oe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function K9(r,i){switch(ld(i),i.tag){case 1:return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return On(Oe),it(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 26:case 27:case 5:return ut(i),null;case 13:if(Cn(i),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(a(340));hs()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return w(_e),null;case 4:return it(),null;case 10:return On(i.type),null;case 22:case 23:return Cn(i),Ed(),r!==null&&w(Zi),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 24:return On(Oe),null;case 25:return null;default:return null}}function TE(r,i){switch(ld(i),i.tag){case 3:On(Oe),it();break;case 26:case 27:case 5:ut(i);break;case 4:it();break;case 13:Cn(i);break;case 19:w(_e);break;case 10:On(i.type);break;case 22:case 23:Cn(i),Ed(),r!==null&&w(Zi);break;case 24:On(Oe)}}function _s(r,i){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&r)===r){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==d)}}catch(O){Qt(i,i.return,O)}}function li(r,i,o){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&r)===r){var E=u.inst,O=E.destroy;if(O!==void 0){E.destroy=void 0,d=i;var V=o,I=O;try{I()}catch(at){Qt(d,V,at)}}}u=u.next}while(u!==m)}}catch(at){Qt(i,i.return,at)}}function wE(r){var i=r.updateQueue;if(i!==null){var o=r.stateNode;try{lw(i,o)}catch(u){Qt(r,r.return,u)}}}function EE(r,i,o){o.props=Wi(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){Qt(r,i,u)}}function Cs(r,i){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(d){Qt(r,i,d)}}function on(r,i){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Qt(r,i,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Qt(r,i,d)}else o.current=null}function AE(r){var i=r.type,o=r.memoizedProps,u=r.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Qt(r,r.return,d)}}function Qd(r,i,o){try{var u=r.stateNode;v7(u,r.type,o,i),u[rr]=i}catch(d){Qt(r,r.return,d)}}function RE(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&gi(r.type)||r.tag===4}function Wd(r){t:for(;;){for(;r.sibling===null;){if(r.return===null||RE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&gi(r.type)||r.flags&2||r.child===null||r.tag===4)continue t;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Jd(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(r),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Hl));else if(u!==4&&(u===27&&gi(r.type)&&(o=r.stateNode,i=null),r=r.child,r!==null))for(Jd(r,i,o),r=r.sibling;r!==null;)Jd(r,i,o),r=r.sibling}function Ll(r,i,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?o.insertBefore(r,i):o.appendChild(r);else if(u!==4&&(u===27&&gi(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Ll(r,i,o),r=r.sibling;r!==null;)Ll(r,i,o),r=r.sibling}function xE(r){var i=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);Ve(i,u,o),i[He]=r,i[rr]=o}catch(m){Qt(r,r.return,m)}}var Dn=!1,be=!1,th=!1,ME=typeof WeakSet=="function"?WeakSet:Set,De=null;function Z9(r,i){if(r=r.containerInfo,Ah=Ql,r=VT(r),Wf(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else t:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var E=0,O=-1,V=-1,I=0,at=0,lt=r,K=null;e:for(;;){for(var J;lt!==o||d!==0&&lt.nodeType!==3||(O=E+d),lt!==m||u!==0&&lt.nodeType!==3||(V=E+u),lt.nodeType===3&&(E+=lt.nodeValue.length),(J=lt.firstChild)!==null;)K=lt,lt=J;for(;;){if(lt===r)break e;if(K===o&&++I===d&&(O=E),K===m&&++at===u&&(V=E),(J=lt.nextSibling)!==null)break;lt=K,K=lt.parentNode}lt=J}o=O===-1||V===-1?null:{start:O,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rh={focusedElem:r,selectionRange:o},Ql=!1,De=i;De!==null;)if(i=De,r=i.child,(i.subtreeFlags&1024)!==0&&r!==null)r.return=i,De=r;else for(;De!==null;){switch(i=De,m=i.alternate,r=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=i,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var At=Wi(o.type,d,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(At,m),u.__reactInternalSnapshotBeforeUpdate=r}catch(Tt){Qt(o,o.return,Tt)}}break;case 3:if((r&1024)!==0){if(r=i.stateNode.containerInfo,o=r.nodeType,o===9)$h(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$h(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(a(163))}if(r=i.sibling,r!==null){r.return=i.return,De=r;break}De=i.return}}function $E(r,i,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ci(r,o),u&4&&_s(5,o);break;case 1:if(ci(r,o),u&4)if(r=o.stateNode,i===null)try{r.componentDidMount()}catch(E){Qt(o,o.return,E)}else{var d=Wi(o.type,i.memoizedProps);i=i.memoizedState;try{r.componentDidUpdate(d,i,r.__reactInternalSnapshotBeforeUpdate)}catch(E){Qt(o,o.return,E)}}u&64&&wE(o),u&512&&Cs(o,o.return);break;case 3:if(ci(r,o),u&64&&(r=o.updateQueue,r!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{lw(r,i)}catch(E){Qt(o,o.return,E)}}break;case 27:i===null&&u&4&&xE(o);case 26:case 5:ci(r,o),i===null&&u&4&&AE(o),u&512&&Cs(o,o.return);break;case 12:ci(r,o);break;case 13:ci(r,o),u&4&&CE(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=a7.bind(null,o),E7(r,o))));break;case 22:if(u=o.memoizedState!==null||Dn,!u){i=i!==null&&i.memoizedState!==null||be,d=Dn;var m=be;Dn=u,(be=i)&&!m?fi(r,o,(o.subtreeFlags&8772)!==0):ci(r,o),Dn=d,be=m}break;case 30:break;default:ci(r,o)}}function OE(r){var i=r.alternate;i!==null&&(r.alternate=null,OE(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&Lf(i)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ie=null,ar=!1;function Nn(r,i,o){for(o=o.child;o!==null;)_E(r,i,o),o=o.sibling}function _E(r,i,o){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ge,o)}catch{}switch(o.tag){case 26:be||on(o,i),Nn(r,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:be||on(o,i);var u=ie,d=ar;gi(o.type)&&(ie=o.stateNode,ar=!1),Nn(r,i,o),zs(o.stateNode),ie=u,ar=d;break;case 5:be||on(o,i);case 6:if(u=ie,d=ar,ie=null,Nn(r,i,o),ie=u,ar=d,ie!==null)if(ar)try{(ie.nodeType===9?ie.body:ie.nodeName==="HTML"?ie.ownerDocument.body:ie).removeChild(o.stateNode)}catch(m){Qt(o,i,m)}else try{ie.removeChild(o.stateNode)}catch(m){Qt(o,i,m)}break;case 18:ie!==null&&(ar?(r=ie,yA(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Is(r)):yA(ie,o.stateNode));break;case 4:u=ie,d=ar,ie=o.stateNode.containerInfo,ar=!0,Nn(r,i,o),ie=u,ar=d;break;case 0:case 11:case 14:case 15:be||li(2,o,i),be||li(4,o,i),Nn(r,i,o);break;case 1:be||(on(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"&&EE(o,i,u)),Nn(r,i,o);break;case 21:Nn(r,i,o);break;case 22:be=(u=be)||o.memoizedState!==null,Nn(r,i,o),be=u;break;default:Nn(r,i,o)}}function CE(r,i){if(i.memoizedState===null&&(r=i.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Is(r)}catch(o){Qt(i,i.return,o)}}function Q9(r){switch(r.tag){case 13:case 19:var i=r.stateNode;return i===null&&(i=r.stateNode=new ME),i;case 22:return r=r.stateNode,i=r._retryCache,i===null&&(i=r._retryCache=new ME),i;default:throw Error(a(435,r.tag))}}function eh(r,i){var o=Q9(r);i.forEach(function(u){var d=o7.bind(null,r,u);o.has(u)||(o.add(u),u.then(d,d))})}function pr(r,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=r,E=i,O=E;t:for(;O!==null;){switch(O.tag){case 27:if(gi(O.type)){ie=O.stateNode,ar=!1;break t}break;case 5:ie=O.stateNode,ar=!1;break t;case 3:case 4:ie=O.stateNode.containerInfo,ar=!0;break t}O=O.return}if(ie===null)throw Error(a(160));_E(m,E,d),ie=null,ar=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)qE(i,r),i=i.sibling}var Zr=null;function qE(r,i){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:pr(i,r),mr(r),u&4&&(li(3,r,r.return),_s(3,r),li(5,r,r.return));break;case 1:pr(i,r),mr(r),u&512&&(be||o===null||on(o,o.return)),u&64&&Dn&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Zr;if(pr(i,r),mr(r),u&512&&(be||o===null||on(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){t:{u=r.type,o=r.memoizedProps,d=d.ownerDocument||d;e:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[es]||m[He]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),Ve(m,u,o),m[He]=r,qe(m),u=m;break t;case"link":var E=xA("link","href",d).get(u+(o.href||""));if(E){for(var O=0;O<E.length;O++)if(m=E[O],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(O,1);break e}}m=d.createElement(u),Ve(m,u,o),d.head.appendChild(m);break;case"meta":if(E=xA("meta","content",d).get(u+(o.content||""))){for(O=0;O<E.length;O++)if(m=E[O],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(O,1);break e}}m=d.createElement(u),Ve(m,u,o),d.head.appendChild(m);break;default:throw Error(a(468,u))}m[He]=r,qe(m),u=m}r.stateNode=u}else MA(d,r.type,r.stateNode);else r.stateNode=RA(d,u,r.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?MA(d,r.type,r.stateNode):RA(d,u,r.memoizedProps)):u===null&&r.stateNode!==null&&Qd(r,r.memoizedProps,o.memoizedProps)}break;case 27:pr(i,r),mr(r),u&512&&(be||o===null||on(o,o.return)),o!==null&&u&4&&Qd(r,r.memoizedProps,o.memoizedProps);break;case 5:if(pr(i,r),mr(r),u&512&&(be||o===null||on(o,o.return)),r.flags&32){d=r.stateNode;try{$a(d,"")}catch(J){Qt(r,r.return,J)}}u&4&&r.stateNode!=null&&(d=r.memoizedProps,Qd(r,d,o!==null?o.memoizedProps:d)),u&1024&&(th=!0);break;case 6:if(pr(i,r),mr(r),u&4){if(r.stateNode===null)throw Error(a(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(J){Qt(r,r.return,J)}}break;case 3:if(Il=null,d=Zr,Zr=Fl(i.containerInfo),pr(i,r),Zr=d,mr(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Is(i.containerInfo)}catch(J){Qt(r,r.return,J)}th&&(th=!1,LE(r));break;case 4:u=Zr,Zr=Fl(r.stateNode.containerInfo),pr(i,r),mr(r),Zr=u;break;case 12:pr(i,r),mr(r);break;case 13:pr(i,r),mr(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sh=Ht()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,eh(r,u)));break;case 22:d=r.memoizedState!==null;var V=o!==null&&o.memoizedState!==null,I=Dn,at=be;if(Dn=I||d,be=at||V,pr(i,r),be=at,Dn=I,mr(r),u&8192)t:for(i=r.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(o===null||V||Dn||be||Ji(r)),o=null,i=r;;){if(i.tag===5||i.tag===26){if(o===null){V=o=i;try{if(m=V.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{O=V.stateNode;var lt=V.memoizedProps.style,K=lt!=null&&lt.hasOwnProperty("display")?lt.display:null;O.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(J){Qt(V,V.return,J)}}}else if(i.tag===6){if(o===null){V=i;try{V.stateNode.nodeValue=d?"":V.memoizedProps}catch(J){Qt(V,V.return,J)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===r)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,eh(r,o))));break;case 19:pr(i,r),mr(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,eh(r,u)));break;case 30:break;case 21:break;default:pr(i,r),mr(r)}}function mr(r){var i=r.flags;if(i&2){try{for(var o,u=r.return;u!==null;){if(RE(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var d=o.stateNode,m=Wd(r);Ll(r,m,d);break;case 5:var E=o.stateNode;o.flags&32&&($a(E,""),o.flags&=-33);var O=Wd(r);Ll(r,O,E);break;case 3:case 4:var V=o.stateNode.containerInfo,I=Wd(r);Jd(r,I,V);break;default:throw Error(a(161))}}catch(at){Qt(r,r.return,at)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function LE(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var i=r;LE(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),r=r.sibling}}function ci(r,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$E(r,i.alternate,i),i=i.sibling}function Ji(r){for(r=r.child;r!==null;){var i=r;switch(i.tag){case 0:case 11:case 14:case 15:li(4,i,i.return),Ji(i);break;case 1:on(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&EE(i,i.return,o),Ji(i);break;case 27:zs(i.stateNode);case 26:case 5:on(i,i.return),Ji(i);break;case 22:i.memoizedState===null&&Ji(i);break;case 30:Ji(i);break;default:Ji(i)}r=r.sibling}}function fi(r,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,d=r,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:fi(d,m,o),_s(4,m);break;case 1:if(fi(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(I){Qt(u,u.return,I)}if(u=m,d=u.updateQueue,d!==null){var O=u.stateNode;try{var V=d.shared.hiddenCallbacks;if(V!==null)for(d.shared.hiddenCallbacks=null,d=0;d<V.length;d++)uw(V[d],O)}catch(I){Qt(u,u.return,I)}}o&&E&64&&wE(m),Cs(m,m.return);break;case 27:xE(m);case 26:case 5:fi(d,m,o),o&&u===null&&E&4&&AE(m),Cs(m,m.return);break;case 12:fi(d,m,o);break;case 13:fi(d,m,o),o&&E&4&&CE(d,m);break;case 22:m.memoizedState===null&&fi(d,m,o),Cs(m,m.return);break;case 30:break;default:fi(d,m,o)}i=i.sibling}}function rh(r,i){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&vs(o))}function nh(r,i){r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&vs(r))}function sn(r,i,o,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)DE(r,i,o,u),i=i.sibling}function DE(r,i,o,u){var d=i.flags;switch(i.tag){case 0:case 11:case 15:sn(r,i,o,u),d&2048&&_s(9,i);break;case 1:sn(r,i,o,u);break;case 3:sn(r,i,o,u),d&2048&&(r=null,i.alternate!==null&&(r=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==r&&(i.refCount++,r!=null&&vs(r)));break;case 12:if(d&2048){sn(r,i,o,u),r=i.stateNode;try{var m=i.memoizedProps,E=m.id,O=m.onPostCommit;typeof O=="function"&&O(E,i.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(V){Qt(i,i.return,V)}}else sn(r,i,o,u);break;case 13:sn(r,i,o,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?sn(r,i,o,u):qs(r,i):m._visibility&2?sn(r,i,o,u):(m._visibility|=2,Xa(r,i,o,u,(i.subtreeFlags&10256)!==0)),d&2048&&rh(E,i);break;case 24:sn(r,i,o,u),d&2048&&nh(i.alternate,i);break;default:sn(r,i,o,u)}}function Xa(r,i,o,u,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=r,E=i,O=o,V=u,I=E.flags;switch(E.tag){case 0:case 11:case 15:Xa(m,E,O,V,d),_s(8,E);break;case 23:break;case 22:var at=E.stateNode;E.memoizedState!==null?at._visibility&2?Xa(m,E,O,V,d):qs(m,E):(at._visibility|=2,Xa(m,E,O,V,d)),d&&I&2048&&rh(E.alternate,E);break;case 24:Xa(m,E,O,V,d),d&&I&2048&&nh(E.alternate,E);break;default:Xa(m,E,O,V,d)}i=i.sibling}}function qs(r,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=r,u=i,d=u.flags;switch(u.tag){case 22:qs(o,u),d&2048&&rh(u.alternate,u);break;case 24:qs(o,u),d&2048&&nh(u.alternate,u);break;default:qs(o,u)}i=i.sibling}}var Ls=8192;function Ia(r){if(r.subtreeFlags&Ls)for(r=r.child;r!==null;)NE(r),r=r.sibling}function NE(r){switch(r.tag){case 26:Ia(r),r.flags&Ls&&r.memoizedState!==null&&B7(Zr,r.memoizedState,r.memoizedProps);break;case 5:Ia(r);break;case 3:case 4:var i=Zr;Zr=Fl(r.stateNode.containerInfo),Ia(r),Zr=i;break;case 22:r.memoizedState===null&&(i=r.alternate,i!==null&&i.memoizedState!==null?(i=Ls,Ls=16777216,Ia(r),Ls=i):Ia(r));break;default:Ia(r)}}function BE(r){var i=r.alternate;if(i!==null&&(r=i.child,r!==null)){i.child=null;do i=r.sibling,r.sibling=null,r=i;while(r!==null)}}function Ds(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];De=u,VE(u,r)}BE(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)jE(r),r=r.sibling}function jE(r){switch(r.tag){case 0:case 11:case 15:Ds(r),r.flags&2048&&li(9,r,r.return);break;case 3:Ds(r);break;case 12:Ds(r);break;case 22:var i=r.stateNode;r.memoizedState!==null&&i._visibility&2&&(r.return===null||r.return.tag!==13)?(i._visibility&=-3,Dl(r)):Ds(r);break;default:Ds(r)}}function Dl(r){var i=r.deletions;if((r.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];De=u,VE(u,r)}BE(r)}for(r=r.child;r!==null;){switch(i=r,i.tag){case 0:case 11:case 15:li(8,i,i.return),Dl(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,Dl(i));break;default:Dl(i)}r=r.sibling}}function VE(r,i){for(;De!==null;){var o=De;switch(o.tag){case 0:case 11:case 15:li(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:vs(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,De=u;else t:for(o=r;De!==null;){u=De;var d=u.sibling,m=u.return;if(OE(u),u===o){De=null;break t}if(d!==null){d.return=m,De=d;break t}De=m}}}var W9={getCacheForType:function(r){var i=Ye(Oe),o=i.data.get(r);return o===void 0&&(o=r(),i.data.set(r,o)),o}},J9=typeof WeakMap=="function"?WeakMap:Map,Yt=0,ee=null,Lt=null,jt=0,Ft=0,vr=null,di=!1,Ka=!1,ih=!1,Bn=0,fe=0,hi=0,ta=0,ah=0,Cr=0,Za=0,Ns=null,or=null,oh=!1,sh=0,Nl=1/0,Bl=null,pi=null,je=0,mi=null,Qa=null,Wa=0,uh=0,lh=null,PE=null,Bs=0,ch=null;function gr(){if((Yt&2)!==0&&jt!==0)return jt&-jt;if(P.T!==null){var r=Pa;return r!==0?r:gh()}return er()}function zE(){Cr===0&&(Cr=(jt&536870912)===0||Pt?Gu():536870912);var r=_r.current;return r!==null&&(r.flags|=32),Cr}function yr(r,i,o){(r===ee&&(Ft===2||Ft===9)||r.cancelPendingCommit!==null)&&(Ja(r,0),vi(r,jt,Cr,!1)),Vi(r,o),((Yt&2)===0||r!==ee)&&(r===ee&&((Yt&2)===0&&(ta|=o),fe===4&&vi(r,jt,Cr,!1)),un(r))}function UE(r,i,o){if((Yt&6)!==0)throw Error(a(327));var u=!o&&(i&124)===0&&(i&r.expiredLanes)===0||ji(r,i),d=u?r7(r,i):hh(r,i,!0),m=u;do{if(d===0){Ka&&!u&&vi(r,i,0,!1);break}else{if(o=r.current.alternate,m&&!t7(o)){d=hh(r,i,!1),m=!1;continue}if(d===2){if(m=i,r.errorRecoveryDisabledLanes&m)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var O=r;d=Ns;var V=O.current.memoizedState.isDehydrated;if(V&&(Ja(O,E).flags|=256),E=hh(O,E,!1),E!==2){if(ih&&!V){O.errorRecoveryDisabledLanes|=m,ta|=m,d=4;break t}m=or,or=d,m!==null&&(or===null?or=m:or.push.apply(or,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){Ja(r,0),vi(r,i,0,!0);break}t:{switch(u=r,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:vi(u,i,Cr,!di);break t;case 2:or=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=sh+300-Ht(),10<d)){if(vi(u,i,Cr,!di),Jn(u,0,!0)!==0)break t;u.timeoutHandle=vA(kE.bind(null,u,o,or,Bl,oh,i,Cr,ta,Za,di,m,2,-0,0),d);break t}kE(u,o,or,Bl,oh,i,Cr,ta,Za,di,m,0,-0,0)}}break}while(!0);un(r)}function kE(r,i,o,u,d,m,E,O,V,I,at,lt,K,J){if(r.timeoutHandle=-1,lt=i.subtreeFlags,(lt&8192||(lt&16785408)===16785408)&&(Gs={stylesheets:null,count:0,unsuspend:N7},NE(i),lt=j7(),lt!==null)){r.cancelPendingCommit=lt(KE.bind(null,r,i,m,o,u,d,E,O,V,at,1,K,J)),vi(r,m,E,!I);return}KE(r,i,m,o,u,d,E,O,V)}function t7(r){for(var i=r;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!dr(m(),d))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vi(r,i,o,u){i&=~ah,i&=~ta,r.suspendedLanes|=i,r.pingedLanes&=~i,u&&(r.warmLanes|=i),u=r.expirationTimes;for(var d=i;0<d;){var m=31-$e(d),E=1<<m;u[m]=-1,d&=~E}o!==0&&Yu(r,o,i)}function jl(){return(Yt&6)===0?(js(0),!1):!0}function fh(){if(Lt!==null){if(Ft===0)var r=Lt.return;else r=Lt,$n=Ii=null,$d(r),Ya=null,Ms=0,r=Lt;for(;r!==null;)TE(r.alternate,r),r=r.return;Lt=null}}function Ja(r,i){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,y7(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),fh(),ee=r,Lt=o=Rn(r.current,null),jt=i,Ft=0,vr=null,di=!1,Ka=ji(r,i),ih=!1,Za=Cr=ah=ta=hi=fe=0,or=Ns=null,oh=!1,(i&8)!==0&&(i|=i&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=i;0<u;){var d=31-$e(u),m=1<<d;i|=r[d],u&=~m}return Bn=i,al(),o}function GE(r,i){_t=null,P.H=Al,i===ys||i===pl?(i=ow(),Ft=3):i===nw?(i=ow(),Ft=4):Ft=i===sE?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vr=i,Lt===null&&(fe=1,Ol(r,xr(i,r.current)))}function HE(){var r=P.H;return P.H=Al,r===null?Al:r}function YE(){var r=P.A;return P.A=W9,r}function dh(){fe=4,di||(jt&4194048)!==jt&&_r.current!==null||(Ka=!0),(hi&134217727)===0&&(ta&134217727)===0||ee===null||vi(ee,jt,Cr,!1)}function hh(r,i,o){var u=Yt;Yt|=2;var d=HE(),m=YE();(ee!==r||jt!==i)&&(Bl=null,Ja(r,i)),i=!1;var E=fe;t:do try{if(Ft!==0&&Lt!==null){var O=Lt,V=vr;switch(Ft){case 8:fh(),E=6;break t;case 3:case 2:case 9:case 6:_r.current===null&&(i=!0);var I=Ft;if(Ft=0,vr=null,to(r,O,V,I),o&&Ka){E=0;break t}break;default:I=Ft,Ft=0,vr=null,to(r,O,V,I)}}e7(),E=fe;break}catch(at){GE(r,at)}while(!0);return i&&r.shellSuspendCounter++,$n=Ii=null,Yt=u,P.H=d,P.A=m,Lt===null&&(ee=null,jt=0,al()),E}function e7(){for(;Lt!==null;)FE(Lt)}function r7(r,i){var o=Yt;Yt|=2;var u=HE(),d=YE();ee!==r||jt!==i?(Bl=null,Nl=Ht()+500,Ja(r,i)):Ka=ji(r,i);t:do try{if(Ft!==0&&Lt!==null){i=Lt;var m=vr;e:switch(Ft){case 1:Ft=0,vr=null,to(r,i,m,1);break;case 2:case 9:if(iw(m)){Ft=0,vr=null,XE(i);break}i=function(){Ft!==2&&Ft!==9||ee!==r||(Ft=7),un(r)},m.then(i,i);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:iw(m)?(Ft=0,vr=null,XE(i)):(Ft=0,vr=null,to(r,i,m,7));break;case 5:var E=null;switch(Lt.tag){case 26:E=Lt.memoizedState;case 5:case 27:var O=Lt;if(!E||$A(E)){Ft=0,vr=null;var V=O.sibling;if(V!==null)Lt=V;else{var I=O.return;I!==null?(Lt=I,Vl(I)):Lt=null}break e}}Ft=0,vr=null,to(r,i,m,5);break;case 6:Ft=0,vr=null,to(r,i,m,6);break;case 8:fh(),fe=6;break t;default:throw Error(a(462))}}n7();break}catch(at){GE(r,at)}while(!0);return $n=Ii=null,P.H=u,P.A=d,Yt=o,Lt!==null?0:(ee=null,jt=0,al(),fe)}function n7(){for(;Lt!==null&&!yt();)FE(Lt)}function FE(r){var i=bE(r.alternate,r,Bn);r.memoizedProps=r.pendingProps,i===null?Vl(r):Lt=i}function XE(r){var i=r,o=i.alternate;switch(i.tag){case 15:case 0:i=hE(o,i,i.pendingProps,i.type,void 0,jt);break;case 11:i=hE(o,i,i.pendingProps,i.type.render,i.ref,jt);break;case 5:$d(i);default:TE(o,i),i=Lt=IT(i,Bn),i=bE(o,i,Bn)}r.memoizedProps=r.pendingProps,i===null?Vl(r):Lt=i}function to(r,i,o,u){$n=Ii=null,$d(i),Ya=null,Ms=0;var d=i.return;try{if(F9(r,d,i,o,jt)){fe=1,Ol(r,xr(o,r.current)),Lt=null;return}}catch(m){if(d!==null)throw Lt=d,m;fe=1,Ol(r,xr(o,r.current)),Lt=null;return}i.flags&32768?(Pt||u===1?r=!0:Ka||(jt&536870912)!==0?r=!1:(di=r=!0,(u===2||u===9||u===3||u===6)&&(u=_r.current,u!==null&&u.tag===13&&(u.flags|=16384))),IE(i,r)):Vl(i)}function Vl(r){var i=r;do{if((i.flags&32768)!==0){IE(i,di);return}r=i.return;var o=I9(i.alternate,i,Bn);if(o!==null){Lt=o;return}if(i=i.sibling,i!==null){Lt=i;return}Lt=i=r}while(i!==null);fe===0&&(fe=5)}function IE(r,i){do{var o=K9(r.alternate,r);if(o!==null){o.flags&=32767,Lt=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(r=r.sibling,r!==null)){Lt=r;return}Lt=r=o}while(r!==null);fe=6,Lt=null}function KE(r,i,o,u,d,m,E,O,V){r.cancelPendingCommit=null;do Pl();while(je!==0);if((Yt&6)!==0)throw Error(a(327));if(i!==null){if(i===r.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=nd,Cf(r,o,m,E,O,V),r===ee&&(Lt=ee=null,jt=0),Qa=i,mi=r,Wa=o,uh=m,lh=d,PE=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,s7(Ze,function(){return tA(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=P.T,P.T=null,d=tt.p,tt.p=2,E=Yt,Yt|=4;try{Z9(r,i,o)}finally{Yt=E,tt.p=d,P.T=u}}je=1,ZE(),QE(),WE()}}function ZE(){if(je===1){je=0;var r=mi,i=Qa,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=P.T,P.T=null;var u=tt.p;tt.p=2;var d=Yt;Yt|=4;try{qE(i,r);var m=Rh,E=VT(r.containerInfo),O=m.focusedElem,V=m.selectionRange;if(E!==O&&O&&O.ownerDocument&&jT(O.ownerDocument.documentElement,O)){if(V!==null&&Wf(O)){var I=V.start,at=V.end;if(at===void 0&&(at=I),"selectionStart"in O)O.selectionStart=I,O.selectionEnd=Math.min(at,O.value.length);else{var lt=O.ownerDocument||document,K=lt&&lt.defaultView||window;if(K.getSelection){var J=K.getSelection(),At=O.textContent.length,Tt=Math.min(V.start,At),Kt=V.end===void 0?Tt:Math.min(V.end,At);!J.extend&&Tt>Kt&&(E=Kt,Kt=Tt,Tt=E);var G=BT(O,Tt),z=BT(O,Kt);if(G&&z&&(J.rangeCount!==1||J.anchorNode!==G.node||J.anchorOffset!==G.offset||J.focusNode!==z.node||J.focusOffset!==z.offset)){var F=lt.createRange();F.setStart(G.node,G.offset),J.removeAllRanges(),Tt>Kt?(J.addRange(F),J.extend(z.node,z.offset)):(F.setEnd(z.node,z.offset),J.addRange(F))}}}}for(lt=[],J=O;J=J.parentNode;)J.nodeType===1&&lt.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<lt.length;O++){var st=lt[O];st.element.scrollLeft=st.left,st.element.scrollTop=st.top}}Ql=!!Ah,Rh=Ah=null}finally{Yt=d,tt.p=u,P.T=o}}r.current=i,je=2}}function QE(){if(je===2){je=0;var r=mi,i=Qa,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=P.T,P.T=null;var u=tt.p;tt.p=2;var d=Yt;Yt|=4;try{$E(r,i.alternate,i)}finally{Yt=d,tt.p=u,P.T=o}}je=3}}function WE(){if(je===4||je===3){je=0,Gt();var r=mi,i=Qa,o=Wa,u=PE;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?je=5:(je=0,Qa=mi=null,JE(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(pi=null),xt(o),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ge,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=P.T,d=tt.p,tt.p=2,P.T=null;try{for(var m=r.onRecoverableError,E=0;E<u.length;E++){var O=u[E];m(O.value,{componentStack:O.stack})}}finally{P.T=i,tt.p=d}}(Wa&3)!==0&&Pl(),un(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===ch?Bs++:(Bs=0,ch=r):Bs=0,js(0)}}function JE(r,i){(r.pooledCacheLanes&=i)===0&&(i=r.pooledCache,i!=null&&(r.pooledCache=null,vs(i)))}function Pl(r){return ZE(),QE(),WE(),tA()}function tA(){if(je!==5)return!1;var r=mi,i=uh;uh=0;var o=xt(Wa),u=P.T,d=tt.p;try{tt.p=32>o?32:o,P.T=null,o=lh,lh=null;var m=mi,E=Wa;if(je=0,Qa=mi=null,Wa=0,(Yt&6)!==0)throw Error(a(331));var O=Yt;if(Yt|=4,jE(m.current),DE(m,m.current,E,o),Yt=O,js(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ge,m)}catch{}return!0}finally{tt.p=d,P.T=u,JE(r,i)}}function eA(r,i,o){i=xr(o,i),i=kd(r.stateNode,i,2),r=ai(r,i,2),r!==null&&(Vi(r,2),un(r))}function Qt(r,i,o){if(r.tag===3)eA(r,r,o);else for(;i!==null;){if(i.tag===3){eA(i,r,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pi===null||!pi.has(u))){r=xr(o,r),o=aE(2),u=ai(i,o,2),u!==null&&(oE(o,u,i,r),Vi(u,2),un(u));break}}i=i.return}}function ph(r,i,o){var u=r.pingCache;if(u===null){u=r.pingCache=new J9;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(ih=!0,d.add(o),r=i7.bind(null,r,i,o),i.then(r,r))}function i7(r,i,o){var u=r.pingCache;u!==null&&u.delete(i),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ee===r&&(jt&o)===o&&(fe===4||fe===3&&(jt&62914560)===jt&&300>Ht()-sh?(Yt&2)===0&&Ja(r,0):ah|=o,Za===jt&&(Za=0)),un(r)}function rA(r,i){i===0&&(i=Hu()),r=Na(r,i),r!==null&&(Vi(r,i),un(r))}function a7(r){var i=r.memoizedState,o=0;i!==null&&(o=i.retryLane),rA(r,o)}function o7(r,i){var o=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),rA(r,o)}function s7(r,i){return pt(r,i)}var zl=null,eo=null,mh=!1,Ul=!1,vh=!1,ea=0;function un(r){r!==eo&&r.next===null&&(eo===null?zl=eo=r:eo=eo.next=r),Ul=!0,mh||(mh=!0,l7())}function js(r,i){if(!vh&&Ul){vh=!0;do for(var o=!1,u=zl;u!==null;){if(r!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var E=u.suspendedLanes,O=u.pingedLanes;m=(1<<31-$e(42|r)+1)-1,m&=d&~(E&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,oA(u,m))}else m=jt,m=Jn(u,u===ee?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||ji(u,m)||(o=!0,oA(u,m));u=u.next}while(o);vh=!1}}function u7(){nA()}function nA(){Ul=mh=!1;var r=0;ea!==0&&(g7()&&(r=ea),ea=0);for(var i=Ht(),o=null,u=zl;u!==null;){var d=u.next,m=iA(u,i);m===0?(u.next=null,o===null?zl=d:o.next=d,d===null&&(eo=o)):(o=u,(r!==0||(m&3)!==0)&&(Ul=!0)),u=d}js(r)}function iA(r,i){for(var o=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var E=31-$e(m),O=1<<E,V=d[E];V===-1?((O&o)===0||(O&u)!==0)&&(d[E]=Sa(O,i)):V<=i&&(r.expiredLanes|=O),m&=~O}if(i=ee,o=jt,o=Jn(r,r===i?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===i&&(Ft===2||Ft===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Bt(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||ji(r,o)){if(i=o&-o,i===r.callbackPriority)return i;switch(u!==null&&Bt(u),xt(o)){case 2:case 8:o=ke;break;case 32:o=Ze;break;case 268435456:o=Ir;break;default:o=Ze}return u=aA.bind(null,r),o=pt(o,u),r.callbackPriority=i,r.callbackNode=o,i}return u!==null&&u!==null&&Bt(u),r.callbackPriority=2,r.callbackNode=null,2}function aA(r,i){if(je!==0&&je!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Pl()&&r.callbackNode!==o)return null;var u=jt;return u=Jn(r,r===ee?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(UE(r,u,i),iA(r,Ht()),r.callbackNode!=null&&r.callbackNode===o?aA.bind(null,r):null)}function oA(r,i){if(Pl())return null;UE(r,i,!0)}function l7(){b7(function(){(Yt&6)!==0?pt(Xr,u7):nA()})}function gh(){return ea===0&&(ea=Gu()),ea}function sA(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Wu(""+r)}function uA(r,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,r.id&&o.setAttribute("form",r.id),i.parentNode.insertBefore(o,i),r=new FormData(r),o.parentNode.removeChild(o),r}function c7(r,i,o,u,d){if(i==="submit"&&o&&o.stateNode===d){var m=sA((d[rr]||null).action),E=u.submitter;E&&(i=(i=E[rr]||null)?sA(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var O=new rl("action","action",null,u,d);r.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ea!==0){var V=E?uA(d,E):new FormData(d);jd(o,{pending:!0,data:V,method:d.method,action:m},null,V)}}else typeof m=="function"&&(O.preventDefault(),V=E?uA(d,E):new FormData(d),jd(o,{pending:!0,data:V,method:d.method,action:m},m,V))},currentTarget:d}]})}}for(var yh=0;yh<rd.length;yh++){var bh=rd[yh],f7=bh.toLowerCase(),d7=bh[0].toUpperCase()+bh.slice(1);Kr(f7,"on"+d7)}Kr(UT,"onAnimationEnd"),Kr(kT,"onAnimationIteration"),Kr(GT,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(O9,"onTransitionRun"),Kr(_9,"onTransitionStart"),Kr(C9,"onTransitionCancel"),Kr(HT,"onTransitionEnd"),Ra("onMouseEnter",["mouseout","mouseover"]),Ra("onMouseLeave",["mouseout","mouseover"]),Ra("onPointerEnter",["pointerout","pointerover"]),Ra("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h7=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vs));function lA(r,i){i=(i&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],d=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var O=u[E],V=O.instance,I=O.currentTarget;if(O=O.listener,V!==m&&d.isPropagationStopped())break t;m=O,d.currentTarget=I;try{m(d)}catch(at){$l(at)}d.currentTarget=null,m=V}else for(E=0;E<u.length;E++){if(O=u[E],V=O.instance,I=O.currentTarget,O=O.listener,V!==m&&d.isPropagationStopped())break t;m=O,d.currentTarget=I;try{m(d)}catch(at){$l(at)}d.currentTarget=null,m=V}}}}function Dt(r,i){var o=i[qf];o===void 0&&(o=i[qf]=new Set);var u=r+"__bubble";o.has(u)||(cA(i,r,2,!1),o.add(u))}function Sh(r,i,o){var u=0;i&&(u|=4),cA(o,r,u,i)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Th(r){if(!r[kl]){r[kl]=!0,nT.forEach(function(o){o!=="selectionchange"&&(h7.has(o)||Sh(o,!1,r),Sh(o,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[kl]||(i[kl]=!0,Sh("selectionchange",!1,i))}}function cA(r,i,o,u){switch(DA(i)){case 2:var d=z7;break;case 8:d=U7;break;default:d=Nh}o=d.bind(null,i,o,r),d=void 0,!Gf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,o,{capture:!0,passive:d}):r.addEventListener(i,o,!0):d!==void 0?r.addEventListener(i,o,{passive:d}):r.addEventListener(i,o,!1)}function wh(r,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var O=u.stateNode.containerInfo;if(O===d)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;O!==null;){if(E=wa(O),E===null)return;if(V=E.tag,V===5||V===6||V===26||V===27){u=m=E;continue t}O=O.parentNode}}u=u.return}gT(function(){var I=m,at=Uf(o),lt=[];t:{var K=YT.get(r);if(K!==void 0){var J=rl,At=r;switch(r){case"keypress":if(tl(o)===0)break t;case"keydown":case"keyup":J=s9;break;case"focusin":At="focus",J=Xf;break;case"focusout":At="blur",J=Xf;break;case"beforeblur":case"afterblur":J=Xf;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ST;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=KL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=c9;break;case UT:case kT:case GT:J=WL;break;case HT:J=d9;break;case"scroll":case"scrollend":J=XL;break;case"wheel":J=p9;break;case"copy":case"cut":case"paste":J=t9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=wT;break;case"toggle":case"beforetoggle":J=v9}var Tt=(i&4)!==0,Kt=!Tt&&(r==="scroll"||r==="scrollend"),G=Tt?K!==null?K+"Capture":null:K;Tt=[];for(var z=I,F;z!==null;){var st=z;if(F=st.stateNode,st=st.tag,st!==5&&st!==26&&st!==27||F===null||G===null||(st=ns(z,G),st!=null&&Tt.push(Ps(z,st,F))),Kt)break;z=z.return}0<Tt.length&&(K=new J(K,At,null,o,at),lt.push({event:K,listeners:Tt}))}}if((i&7)===0){t:{if(K=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",K&&o!==zf&&(At=o.relatedTarget||o.fromElement)&&(wa(At)||At[Ta]))break t;if((J||K)&&(K=at.window===at?at:(K=at.ownerDocument)?K.defaultView||K.parentWindow:window,J?(At=o.relatedTarget||o.toElement,J=I,At=At?wa(At):null,At!==null&&(Kt=l(At),Tt=At.tag,At!==Kt||Tt!==5&&Tt!==27&&Tt!==6)&&(At=null)):(J=null,At=I),J!==At)){if(Tt=ST,st="onMouseLeave",G="onMouseEnter",z="mouse",(r==="pointerout"||r==="pointerover")&&(Tt=wT,st="onPointerLeave",G="onPointerEnter",z="pointer"),Kt=J==null?K:rs(J),F=At==null?K:rs(At),K=new Tt(st,z+"leave",J,o,at),K.target=Kt,K.relatedTarget=F,st=null,wa(at)===I&&(Tt=new Tt(G,z+"enter",At,o,at),Tt.target=F,Tt.relatedTarget=Kt,st=Tt),Kt=st,J&&At)e:{for(Tt=J,G=At,z=0,F=Tt;F;F=ro(F))z++;for(F=0,st=G;st;st=ro(st))F++;for(;0<z-F;)Tt=ro(Tt),z--;for(;0<F-z;)G=ro(G),F--;for(;z--;){if(Tt===G||G!==null&&Tt===G.alternate)break e;Tt=ro(Tt),G=ro(G)}Tt=null}else Tt=null;J!==null&&fA(lt,K,J,Tt,!1),At!==null&&Kt!==null&&fA(lt,Kt,At,Tt,!0)}}t:{if(K=I?rs(I):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var gt=_T;else if($T(K))if(CT)gt=x9;else{gt=A9;var Ct=E9}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?I&&Pf(I.elementType)&&(gt=_T):gt=R9;if(gt&&(gt=gt(r,I))){OT(lt,gt,o,at);break t}Ct&&Ct(r,K,I),r==="focusout"&&I&&K.type==="number"&&I.memoizedProps.value!=null&&Vf(K,"number",K.value)}switch(Ct=I?rs(I):window,r){case"focusin":($T(Ct)||Ct.contentEditable==="true")&&(qa=Ct,Jf=I,fs=null);break;case"focusout":fs=Jf=qa=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,PT(lt,o,at);break;case"selectionchange":if($9)break;case"keydown":case"keyup":PT(lt,o,at)}var St;if(Kf)t:{switch(r){case"compositionstart":var wt="onCompositionStart";break t;case"compositionend":wt="onCompositionEnd";break t;case"compositionupdate":wt="onCompositionUpdate";break t}wt=void 0}else Ca?xT(r,o)&&(wt="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(wt="onCompositionStart");wt&&(ET&&o.locale!=="ko"&&(Ca||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Ca&&(St=yT()):(ei=at,Hf="value"in ei?ei.value:ei.textContent,Ca=!0)),Ct=Gl(I,wt),0<Ct.length&&(wt=new TT(wt,r,null,o,at),lt.push({event:wt,listeners:Ct}),St?wt.data=St:(St=MT(o),St!==null&&(wt.data=St)))),(St=y9?b9(r,o):S9(r,o))&&(wt=Gl(I,"onBeforeInput"),0<wt.length&&(Ct=new TT("onBeforeInput","beforeinput",null,o,at),lt.push({event:Ct,listeners:wt}),Ct.data=St)),c7(lt,r,I,o,at)}lA(lt,i)})}function Ps(r,i,o){return{instance:r,listener:i,currentTarget:o}}function Gl(r,i){for(var o=i+"Capture",u=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=ns(r,o),d!=null&&u.unshift(Ps(r,d,m)),d=ns(r,i),d!=null&&u.push(Ps(r,d,m))),r.tag===3)return u;r=r.return}return[]}function ro(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function fA(r,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var O=o,V=O.alternate,I=O.stateNode;if(O=O.tag,V!==null&&V===u)break;O!==5&&O!==26&&O!==27||I===null||(V=I,d?(I=ns(o,m),I!=null&&E.unshift(Ps(o,I,V))):d||(I=ns(o,m),I!=null&&E.push(Ps(o,I,V)))),o=o.return}E.length!==0&&r.push({event:i,listeners:E})}var p7=/\r\n?/g,m7=/\u0000|\uFFFD/g;function dA(r){return(typeof r=="string"?r:""+r).replace(p7,`
`).replace(m7,"")}function hA(r,i){return i=dA(i),dA(r)===i}function Hl(){}function It(r,i,o,u,d,m){switch(o){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||$a(r,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&$a(r,""+u);break;case"className":Ku(r,"class",u);break;case"tabIndex":Ku(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ku(r,o,u);break;case"style":mT(r,u,m);break;case"data":if(i!=="object"){Ku(r,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Wu(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&It(r,i,"name",d.name,d,null),It(r,i,"formEncType",d.formEncType,d,null),It(r,i,"formMethod",d.formMethod,d,null),It(r,i,"formTarget",d.formTarget,d,null)):(It(r,i,"encType",d.encType,d,null),It(r,i,"method",d.method,d,null),It(r,i,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Wu(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Hl);break;case"onScroll":u!=null&&Dt("scroll",r);break;case"onScrollEnd":u!=null&&Dt("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Wu(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Dt("beforetoggle",r),Dt("toggle",r),Iu(r,"popover",u);break;case"xlinkActuate":En(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":En(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":En(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":En(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":En(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":En(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":En(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":En(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":En(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Iu(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=YL.get(o)||o,Iu(r,o,u))}}function Eh(r,i,o,u,d,m){switch(o){case"style":mT(r,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(a(60));r.innerHTML=o}}break;case"children":typeof u=="string"?$a(r,u):(typeof u=="number"||typeof u=="bigint")&&$a(r,""+u);break;case"onScroll":u!=null&&Dt("scroll",r);break;case"onScrollEnd":u!=null&&Dt("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Hl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iT.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),i=o.slice(2,d?o.length-7:void 0),m=r[rr]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(i,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(i,u,d);break t}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Iu(r,o,u)}}}function Ve(r,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",r),Dt("load",r);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:It(r,i,m,E,o,null)}}d&&It(r,i,"srcSet",o.srcSet,o,null),u&&It(r,i,"src",o.src,o,null);return;case"input":Dt("invalid",r);var O=m=E=d=null,V=null,I=null;for(u in o)if(o.hasOwnProperty(u)){var at=o[u];if(at!=null)switch(u){case"name":d=at;break;case"type":E=at;break;case"checked":V=at;break;case"defaultChecked":I=at;break;case"value":m=at;break;case"defaultValue":O=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:It(r,i,u,at,o,null)}}fT(r,m,O,V,I,E,d,!1),Zu(r);return;case"select":Dt("invalid",r),u=E=m=null;for(d in o)if(o.hasOwnProperty(d)&&(O=o[d],O!=null))switch(d){case"value":m=O;break;case"defaultValue":E=O;break;case"multiple":u=O;default:It(r,i,d,O,o,null)}i=m,o=E,r.multiple=!!u,i!=null?Ma(r,!!u,i,!1):o!=null&&Ma(r,!!u,o,!0);return;case"textarea":Dt("invalid",r),m=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(O=o[E],O!=null))switch(E){case"value":u=O;break;case"defaultValue":d=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(91));break;default:It(r,i,E,O,o,null)}hT(r,u,d,m),Zu(r);return;case"option":for(V in o)if(o.hasOwnProperty(V)&&(u=o[V],u!=null))switch(V){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:It(r,i,V,u,o,null)}return;case"dialog":Dt("beforetoggle",r),Dt("toggle",r),Dt("cancel",r),Dt("close",r);break;case"iframe":case"object":Dt("load",r);break;case"video":case"audio":for(u=0;u<Vs.length;u++)Dt(Vs[u],r);break;case"image":Dt("error",r),Dt("load",r);break;case"details":Dt("toggle",r);break;case"embed":case"source":case"link":Dt("error",r),Dt("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:It(r,i,I,u,o,null)}return;default:if(Pf(i)){for(at in o)o.hasOwnProperty(at)&&(u=o[at],u!==void 0&&Eh(r,i,at,u,o,void 0));return}}for(O in o)o.hasOwnProperty(O)&&(u=o[O],u!=null&&It(r,i,O,u,o,null))}function v7(r,i,o,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,O=null,V=null,I=null,at=null;for(J in o){var lt=o[J];if(o.hasOwnProperty(J)&&lt!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":V=lt;default:u.hasOwnProperty(J)||It(r,i,J,null,u,lt)}}for(var K in u){var J=u[K];if(lt=o[K],u.hasOwnProperty(K)&&(J!=null||lt!=null))switch(K){case"type":m=J;break;case"name":d=J;break;case"checked":I=J;break;case"defaultChecked":at=J;break;case"value":E=J;break;case"defaultValue":O=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(a(137,i));break;default:J!==lt&&It(r,i,K,J,u,lt)}}jf(r,E,O,V,I,at,m,d);return;case"select":J=E=O=K=null;for(m in o)if(V=o[m],o.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":J=V;default:u.hasOwnProperty(m)||It(r,i,m,null,u,V)}for(d in u)if(m=u[d],V=o[d],u.hasOwnProperty(d)&&(m!=null||V!=null))switch(d){case"value":K=m;break;case"defaultValue":O=m;break;case"multiple":E=m;default:m!==V&&It(r,i,d,m,u,V)}i=O,o=E,u=J,K!=null?Ma(r,!!o,K,!1):!!u!=!!o&&(i!=null?Ma(r,!!o,i,!0):Ma(r,!!o,o?[]:"",!1));return;case"textarea":J=K=null;for(O in o)if(d=o[O],o.hasOwnProperty(O)&&d!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:It(r,i,O,null,u,d)}for(E in u)if(d=u[E],m=o[E],u.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":K=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&It(r,i,E,d,u,m)}dT(r,K,J);return;case"option":for(var At in o)if(K=o[At],o.hasOwnProperty(At)&&K!=null&&!u.hasOwnProperty(At))switch(At){case"selected":r.selected=!1;break;default:It(r,i,At,null,u,K)}for(V in u)if(K=u[V],J=o[V],u.hasOwnProperty(V)&&K!==J&&(K!=null||J!=null))switch(V){case"selected":r.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:It(r,i,V,K,u,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Tt in o)K=o[Tt],o.hasOwnProperty(Tt)&&K!=null&&!u.hasOwnProperty(Tt)&&It(r,i,Tt,null,u,K);for(I in u)if(K=u[I],J=o[I],u.hasOwnProperty(I)&&K!==J&&(K!=null||J!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,i));break;default:It(r,i,I,K,u,J)}return;default:if(Pf(i)){for(var Kt in o)K=o[Kt],o.hasOwnProperty(Kt)&&K!==void 0&&!u.hasOwnProperty(Kt)&&Eh(r,i,Kt,void 0,u,K);for(at in u)K=u[at],J=o[at],!u.hasOwnProperty(at)||K===J||K===void 0&&J===void 0||Eh(r,i,at,K,u,J);return}}for(var G in o)K=o[G],o.hasOwnProperty(G)&&K!=null&&!u.hasOwnProperty(G)&&It(r,i,G,null,u,K);for(lt in u)K=u[lt],J=o[lt],!u.hasOwnProperty(lt)||K===J||K==null&&J==null||It(r,i,lt,K,u,J)}var Ah=null,Rh=null;function Yl(r){return r.nodeType===9?r:r.ownerDocument}function pA(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mA(r,i){if(r===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&i==="foreignObject"?0:r}function xh(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mh=null;function g7(){var r=window.event;return r&&r.type==="popstate"?r===Mh?!1:(Mh=r,!0):(Mh=null,!1)}var vA=typeof setTimeout=="function"?setTimeout:void 0,y7=typeof clearTimeout=="function"?clearTimeout:void 0,gA=typeof Promise=="function"?Promise:void 0,b7=typeof queueMicrotask=="function"?queueMicrotask:typeof gA<"u"?function(r){return gA.resolve(null).then(r).catch(S7)}:vA;function S7(r){setTimeout(function(){throw r})}function gi(r){return r==="head"}function yA(r,i){var o=i,u=0,d=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&zs(E.documentElement),o&2&&zs(E.body),o&4)for(o=E.head,zs(o),E=o.firstChild;E;){var O=E.nextSibling,V=E.nodeName;E[es]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=O}}if(d===0){r.removeChild(m),Is(i);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Is(i)}function $h(r){var i=r.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":$h(o),Lf(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function T7(r,i,o,u){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[es])switch(i){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(i==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=Qr(r.nextSibling),r===null)break}return null}function w7(r,i,o){if(i==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=Qr(r.nextSibling),r===null))return null;return r}function Oh(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function E7(r,i){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")i();else{var u=function(){i(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function Qr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return r}var _h=null;function bA(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return r;i--}else o==="/$"&&i++}r=r.previousSibling}return null}function SA(r,i,o){switch(i=Yl(o),r){case"html":if(r=i.documentElement,!r)throw Error(a(452));return r;case"head":if(r=i.head,!r)throw Error(a(453));return r;case"body":if(r=i.body,!r)throw Error(a(454));return r;default:throw Error(a(451))}}function zs(r){for(var i=r.attributes;i.length;)r.removeAttributeNode(i[0]);Lf(r)}var qr=new Map,TA=new Set;function Fl(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var jn=tt.d;tt.d={f:A7,r:R7,D:x7,C:M7,L:$7,m:O7,X:C7,S:_7,M:q7};function A7(){var r=jn.f(),i=jl();return r||i}function R7(r){var i=Ea(r);i!==null&&i.tag===5&&i.type==="form"?Uw(i):jn.r(r)}var no=typeof document>"u"?null:document;function wA(r,i,o){var u=no;if(u&&typeof i=="string"&&i){var d=Rr(i);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),TA.has(d)||(TA.add(d),r={rel:r,crossOrigin:o,href:i},u.querySelector(d)===null&&(i=u.createElement("link"),Ve(i,"link",r),qe(i),u.head.appendChild(i)))}}function x7(r){jn.D(r),wA("dns-prefetch",r,null)}function M7(r,i){jn.C(r,i),wA("preconnect",r,i)}function $7(r,i,o){jn.L(r,i,o);var u=no;if(u&&r&&i){var d='link[rel="preload"][as="'+Rr(i)+'"]';i==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Rr(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Rr(o.imageSizes)+'"]')):d+='[href="'+Rr(r)+'"]';var m=d;switch(i){case"style":m=io(r);break;case"script":m=ao(r)}qr.has(m)||(r=v({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:r,as:i},o),qr.set(m,r),u.querySelector(d)!==null||i==="style"&&u.querySelector(Us(m))||i==="script"&&u.querySelector(ks(m))||(i=u.createElement("link"),Ve(i,"link",r),qe(i),u.head.appendChild(i)))}}function O7(r,i){jn.m(r,i);var o=no;if(o&&r){var u=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+Rr(u)+'"][href="'+Rr(r)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ao(r)}if(!qr.has(m)&&(r=v({rel:"modulepreload",href:r},i),qr.set(m,r),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ks(m)))return}u=o.createElement("link"),Ve(u,"link",r),qe(u),o.head.appendChild(u)}}}function _7(r,i,o){jn.S(r,i,o);var u=no;if(u&&r){var d=Aa(u).hoistableStyles,m=io(r);i=i||"default";var E=d.get(m);if(!E){var O={loading:0,preload:null};if(E=u.querySelector(Us(m)))O.loading=5;else{r=v({rel:"stylesheet",href:r,"data-precedence":i},o),(o=qr.get(m))&&Ch(r,o);var V=E=u.createElement("link");qe(V),Ve(V,"link",r),V._p=new Promise(function(I,at){V.onload=I,V.onerror=at}),V.addEventListener("load",function(){O.loading|=1}),V.addEventListener("error",function(){O.loading|=2}),O.loading|=4,Xl(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:O},d.set(m,E)}}}function C7(r,i){jn.X(r,i);var o=no;if(o&&r){var u=Aa(o).hoistableScripts,d=ao(r),m=u.get(d);m||(m=o.querySelector(ks(d)),m||(r=v({src:r,async:!0},i),(i=qr.get(d))&&qh(r,i),m=o.createElement("script"),qe(m),Ve(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function q7(r,i){jn.M(r,i);var o=no;if(o&&r){var u=Aa(o).hoistableScripts,d=ao(r),m=u.get(d);m||(m=o.querySelector(ks(d)),m||(r=v({src:r,async:!0,type:"module"},i),(i=qr.get(d))&&qh(r,i),m=o.createElement("script"),qe(m),Ve(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function EA(r,i,o,u){var d=(d=U.current)?Fl(d):null;if(!d)throw Error(a(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=io(o.href),o=Aa(d).hoistableStyles,u=o.get(i),u||(u={type:"style",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=io(o.href);var m=Aa(d).hoistableStyles,E=m.get(r);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,E),(m=d.querySelector(Us(r)))&&!m._p&&(E.instance=m,E.state.loading=5),qr.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},qr.set(r,o),m||L7(d,r,o,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ao(o),o=Aa(d).hoistableScripts,u=o.get(i),u||(u={type:"script",instance:null,count:0,state:null},o.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,r))}}function io(r){return'href="'+Rr(r)+'"'}function Us(r){return'link[rel="stylesheet"]['+r+"]"}function AA(r){return v({},r,{"data-precedence":r.precedence,precedence:null})}function L7(r,i,o,u){r.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=r.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Ve(i,"link",o),qe(i),r.head.appendChild(i))}function ao(r){return'[src="'+Rr(r)+'"]'}function ks(r){return"script[async]"+r}function RA(r,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var u=r.querySelector('style[data-href~="'+Rr(o.href)+'"]');if(u)return i.instance=u,qe(u),u;var d=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),qe(u),Ve(u,"style",d),Xl(u,o.precedence,r),i.instance=u;case"stylesheet":d=io(o.href);var m=r.querySelector(Us(d));if(m)return i.state.loading|=4,i.instance=m,qe(m),m;u=AA(o),(d=qr.get(d))&&Ch(u,d),m=(r.ownerDocument||r).createElement("link"),qe(m);var E=m;return E._p=new Promise(function(O,V){E.onload=O,E.onerror=V}),Ve(m,"link",u),i.state.loading|=4,Xl(m,o.precedence,r),i.instance=m;case"script":return m=ao(o.src),(d=r.querySelector(ks(m)))?(i.instance=d,qe(d),d):(u=o,(d=qr.get(m))&&(u=v({},o),qh(u,d)),r=r.ownerDocument||r,d=r.createElement("script"),qe(d),Ve(d,"link",u),r.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Xl(u,o.precedence,r));return i.instance}function Xl(r,i,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,E=0;E<u.length;E++){var O=u[E];if(O.dataset.precedence===i)m=O;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(r,i.firstChild))}function Ch(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.title==null&&(r.title=i.title)}function qh(r,i){r.crossOrigin==null&&(r.crossOrigin=i.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=i.referrerPolicy),r.integrity==null&&(r.integrity=i.integrity)}var Il=null;function xA(r,i,o){if(Il===null){var u=new Map,d=Il=new Map;d.set(o,u)}else d=Il,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var m=o[d];if(!(m[es]||m[He]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=r+E;var O=u.get(E);O?O.push(m):u.set(E,[m])}}return u}function MA(r,i,o){r=r.ownerDocument||r,r.head.insertBefore(o,i==="title"?r.querySelector("head > title"):null)}function D7(r,i,o){if(o===1||i.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return r=i.disabled,typeof i.precedence=="string"&&r==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function $A(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Gs=null;function N7(){}function B7(r,i,o){if(Gs===null)throw Error(a(475));var u=Gs;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=io(o.href),m=r.querySelector(Us(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Kl.bind(u),r.then(u,u)),i.state.loading|=4,i.instance=m,qe(m);return}m=r.ownerDocument||r,o=AA(o),(d=qr.get(d))&&Ch(o,d),m=m.createElement("link"),qe(m);var E=m;E._p=new Promise(function(O,V){E.onload=O,E.onerror=V}),Ve(m,"link",o),i.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,r),(r=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=Kl.bind(u),r.addEventListener("load",i),r.addEventListener("error",i))}}function j7(){if(Gs===null)throw Error(a(475));var r=Gs;return r.stylesheets&&r.count===0&&Lh(r,r.stylesheets),0<r.count?function(i){var o=setTimeout(function(){if(r.stylesheets&&Lh(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=i,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Lh(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Zl=null;function Lh(r,i){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Zl=new Map,i.forEach(V7,r),Zl=null,Kl.call(r))}function V7(r,i){if(!(i.state.loading&4)){var o=Zl.get(r);if(o)var u=o.get(null);else{o=new Map,Zl.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=i.instance,E=d.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,d),o.set(E,d),this.count++,u=Kl.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),i.state.loading|=4}}var Hs={$$typeof:_,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function P7(r,i,o,u,d,m,E,O){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.hiddenUpdates=Jo(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function OA(r,i,o,u,d,m,E,O,V,I,at,lt){return r=new P7(r,i,o,E,O,V,I,lt),i=1,m===!0&&(i|=24),m=hr(3,null,null,i),r.current=m,m.stateNode=r,i=pd(),i.refCount++,r.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:i},yd(m),r}function _A(r){return r?(r=Ba,r):Ba}function CA(r,i,o,u,d,m){d=_A(d),u.context===null?u.context=d:u.pendingContext=d,u=ii(i),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ai(r,u,i),o!==null&&(yr(o,r,i),Ss(o,r,i))}function qA(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<i?o:i}}function Dh(r,i){qA(r,i),(r=r.alternate)&&qA(r,i)}function LA(r){if(r.tag===13){var i=Na(r,67108864);i!==null&&yr(i,r,67108864),Dh(r,67108864)}}var Ql=!0;function z7(r,i,o,u){var d=P.T;P.T=null;var m=tt.p;try{tt.p=2,Nh(r,i,o,u)}finally{tt.p=m,P.T=d}}function U7(r,i,o,u){var d=P.T;P.T=null;var m=tt.p;try{tt.p=8,Nh(r,i,o,u)}finally{tt.p=m,P.T=d}}function Nh(r,i,o,u){if(Ql){var d=Bh(u);if(d===null)wh(r,i,u,Wl,o),NA(r,u);else if(G7(d,r,i,o,u))u.stopPropagation();else if(NA(r,u),i&4&&-1<k7.indexOf(r)){for(;d!==null;){var m=Ea(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=wn(m.pendingLanes);if(E!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;E;){var V=1<<31-$e(E);O.entanglements[1]|=V,E&=~V}un(m),(Yt&6)===0&&(Nl=Ht()+500,js(0))}}break;case 13:O=Na(m,2),O!==null&&yr(O,m,2),jl(),Dh(m,2)}if(m=Bh(u),m===null&&wh(r,i,u,Wl,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else wh(r,i,u,null,o)}}function Bh(r){return r=Uf(r),jh(r)}var Wl=null;function jh(r){if(Wl=null,r=wa(r),r!==null){var i=l(r);if(i===null)r=null;else{var o=i.tag;if(o===13){if(r=c(i),r!==null)return r;r=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null)}}return Wl=r,null}function DA(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case Xr:return 2;case ke:return 8;case Ze:case en:return 32;case Ir:return 268435456;default:return 32}default:return 32}}var Vh=!1,yi=null,bi=null,Si=null,Ys=new Map,Fs=new Map,Ti=[],k7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function NA(r,i){switch(r){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(i.pointerId)}}function Xs(r,i,o,u,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ea(i),i!==null&&LA(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function G7(r,i,o,u,d){switch(i){case"focusin":return yi=Xs(yi,r,i,o,u,d),!0;case"dragenter":return bi=Xs(bi,r,i,o,u,d),!0;case"mouseover":return Si=Xs(Si,r,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return Ys.set(m,Xs(Ys.get(m)||null,r,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Fs.set(m,Xs(Fs.get(m)||null,r,i,o,u,d)),!0}return!1}function BA(r){var i=wa(r.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=c(o),i!==null){r.blockedOn=i,Xu(r.priority,function(){if(o.tag===13){var u=gr();u=ts(u);var d=Na(o,u);d!==null&&yr(d,o,u),Dh(o,u)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Jl(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var o=Bh(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);zf=u,o.target.dispatchEvent(u),zf=null}else return i=Ea(o),i!==null&&LA(i),r.blockedOn=o,!1;i.shift()}return!0}function jA(r,i,o){Jl(r)&&o.delete(i)}function H7(){Vh=!1,yi!==null&&Jl(yi)&&(yi=null),bi!==null&&Jl(bi)&&(bi=null),Si!==null&&Jl(Si)&&(Si=null),Ys.forEach(jA),Fs.forEach(jA)}function tc(r,i){r.blockedOn===i&&(r.blockedOn=null,Vh||(Vh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,H7)))}var ec=null;function VA(r){ec!==r&&(ec=r,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ec===r&&(ec=null);for(var i=0;i<r.length;i+=3){var o=r[i],u=r[i+1],d=r[i+2];if(typeof u!="function"){if(jh(u||o)===null)continue;break}var m=Ea(o);m!==null&&(r.splice(i,3),i-=3,jd(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function Is(r){function i(V){return tc(V,r)}yi!==null&&tc(yi,r),bi!==null&&tc(bi,r),Si!==null&&tc(Si,r),Ys.forEach(i),Fs.forEach(i);for(var o=0;o<Ti.length;o++){var u=Ti[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<Ti.length&&(o=Ti[0],o.blockedOn===null);)BA(o),o.blockedOn===null&&Ti.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],E=d[rr]||null;if(typeof m=="function")E||VA(o);else if(E){var O=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[rr]||null)O=E.formAction;else if(jh(d)!==null)continue}else O=E.action;typeof O=="function"?o[u+1]=O:(o.splice(u,3),u-=3),VA(o)}}}function Ph(r){this._internalRoot=r}rc.prototype.render=Ph.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,u=gr();CA(o,u,r,i,null,null)},rc.prototype.unmount=Ph.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;CA(r.current,2,null,r,null,null),jl(),i[Ta]=null}};function rc(r){this._internalRoot=r}rc.prototype.unstable_scheduleHydration=function(r){if(r){var i=er();r={blockedOn:null,target:r,priority:i};for(var o=0;o<Ti.length&&i!==0&&i<Ti[o].priority;o++);Ti.splice(o,0,r),o===0&&BA(r)}};var PA=e.version;if(PA!=="19.1.0")throw Error(a(527,PA,"19.1.0"));tt.findDOMNode=function(r){var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(a(188)):(r=Object.keys(r).join(","),Error(a(268,r)));return r=h(i),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var Y7={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{ge=nc.inject(Y7),bt=nc}catch{}}return Zs.createRoot=function(r,i){if(!s(r))throw Error(a(299));var o=!1,u="",d=eE,m=rE,E=nE,O=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(O=i.unstable_transitionCallbacks)),i=OA(r,1,!1,null,null,o,u,d,m,E,O,null),r[Ta]=i.current,Th(r),new Ph(i)},Zs.hydrateRoot=function(r,i,o){if(!s(r))throw Error(a(299));var u=!1,d="",m=eE,E=rE,O=nE,V=null,I=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(O=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(V=o.unstable_transitionCallbacks),o.formState!==void 0&&(I=o.formState)),i=OA(r,1,!0,i,o??null,u,d,m,E,O,V,I),i.context=_A(null),o=i.current,u=gr(),u=ts(u),d=ii(u),d.callback=null,ai(o,d,u),o=u,i.current.lanes=o,Vi(i,o),un(i),r[Ta]=i.current,Th(r),new rc(i)},Zs.version="19.1.0",Zs}var KA;function nD(){if(KA)return kh.exports;KA=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),kh.exports=rD(),kh.exports}var iD=nD();/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fh,ZA;function aD(){if(ZA)return Fh;ZA=1;var t=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Fh=t,Fh}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xh,QA;function oD(){if(QA)return Xh;QA=1;var t=aD();function e(){try{return t({},"x",{}),!0}catch{return!1}}return Xh=e,Xh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ih,WA;function sD(){if(WA)return Ih;WA=1;var t=Object.defineProperty;return Ih=t,Ih}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kh,JA;function O_(){if(JA)return Kh;JA=1;function t(e){return typeof e=="number"}return Kh=t,Kh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zh,t3;function __(){if(t3)return Zh;t3=1;function t(a){return a[0]==="-"}function e(a){var s="",l;for(l=0;l<a;l++)s+="0";return s}function n(a,s,l){var c=!1,f=s-a.length;return f<0||(t(a)&&(c=!0,a=a.substr(1)),a=l?a+e(f):e(f)+a,c&&(a="-"+a)),a}return Zh=n,Zh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qh,e3;function uD(){if(e3)return Qh;e3=1;var t=O_(),e=__(),n=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(l){var c,f,h;switch(l.specifier){case"b":c=2;break;case"o":c=8;break;case"x":case"X":c=16;break;case"d":case"i":case"u":default:c=10;break}if(f=l.arg,h=parseInt(f,10),!isFinite(h)){if(!t(f))throw new Error("invalid integer. Value: "+f);h=0}return h<0&&(l.specifier==="u"||c!==10)&&(h=4294967295+h+1),h<0?(f=(-h).toString(c),l.precision&&(f=e(f,l.precision,l.padRight)),f="-"+f):(f=h.toString(c),!h&&!l.precision?f="":l.precision&&(f=e(f,l.precision,l.padRight)),l.sign&&(f=l.sign+f)),c===16&&(l.alternate&&(f="0x"+f),f=l.specifier===a.call(l.specifier)?a.call(f):n.call(f)),c===8&&l.alternate&&f.charAt(0)!=="0"&&(f="0"+f),f}return Qh=s,Qh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wh,r3;function lD(){if(r3)return Wh;r3=1;function t(e){return typeof e=="string"}return Wh=t,Wh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jh,n3;function cD(){if(n3)return Jh;n3=1;var t=O_(),e=Math.abs,n=String.prototype.toLowerCase,a=String.prototype.toUpperCase,s=String.prototype.replace,l=/e\+(\d)$/,c=/e-(\d)$/,f=/^(\d+)$/,h=/^(\d+)e/,p=/\.0$/,v=/\.0*e/,g=/(\..*[^0])0*e/;function S(y){var A,b,M=parseFloat(y.arg);if(!isFinite(M)){if(!t(y.arg))throw new Error("invalid floating-point number. Value: "+b);M=y.arg}switch(y.specifier){case"e":case"E":b=M.toExponential(y.precision);break;case"f":case"F":b=M.toFixed(y.precision);break;case"g":case"G":e(M)<1e-4?(A=y.precision,A>0&&(A-=1),b=M.toExponential(A)):b=M.toPrecision(y.precision),y.alternate||(b=s.call(b,g,"$1e"),b=s.call(b,v,"e"),b=s.call(b,p,""));break;default:throw new Error("invalid double notation. Value: "+y.specifier)}return b=s.call(b,l,"e+0$1"),b=s.call(b,c,"e-0$1"),y.alternate&&(b=s.call(b,f,"$1."),b=s.call(b,h,"$1.e")),M>=0&&y.sign&&(b=y.sign+b),b=y.specifier===a.call(y.specifier)?a.call(b):n.call(b),b}return Jh=S,Jh}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp,i3;function fD(){if(i3)return tp;i3=1;function t(n){var a="",s;for(s=0;s<n;s++)a+=" ";return a}function e(n,a,s){var l=a-n.length;return l<0||(n=s?n+t(l):t(l)+n),n}return tp=e,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,a3;function dD(){if(a3)return ep;a3=1;var t=uD(),e=lD(),n=cD(),a=fD(),s=__(),l=String.fromCharCode,c=Array.isArray;function f(v){return v!==v}function h(v){var g={};return g.specifier=v.specifier,g.precision=v.precision===void 0?1:v.precision,g.width=v.width,g.flags=v.flags||"",g.mapping=v.mapping,g}function p(v){var g,S,y,A,b,M,$,B,_;if(!c(v))throw new TypeError("invalid argument. First argument must be an array. Value: `"+v+"`.");for(M="",$=1,B=0;B<v.length;B++)if(y=v[B],e(y))M+=y;else{if(g=y.precision!==void 0,y=h(y),!y.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+B+"`. Value: `"+y+"`.");for(y.mapping&&($=y.mapping),S=y.flags,_=0;_<S.length;_++)switch(A=S.charAt(_),A){case" ":y.sign=" ";break;case"+":y.sign="+";break;case"-":y.padRight=!0,y.padZeros=!1;break;case"0":y.padZeros=S.indexOf("-")<0;break;case"#":y.alternate=!0;break;default:throw new Error("invalid flag: "+A)}if(y.width==="*"){if(y.width=parseInt(arguments[$],10),$+=1,f(y.width))throw new TypeError("the argument for * width at position "+$+" is not a number. Value: `"+y.width+"`.");y.width<0&&(y.padRight=!0,y.width=-y.width)}if(g&&y.precision==="*"){if(y.precision=parseInt(arguments[$],10),$+=1,f(y.precision))throw new TypeError("the argument for * precision at position "+$+" is not a number. Value: `"+y.precision+"`.");y.precision<0&&(y.precision=1,g=!1)}switch(y.arg=arguments[$],y.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":g&&(y.padZeros=!1),y.arg=t(y);break;case"s":y.maxWidth=g?y.precision:-1,y.arg=String(y.arg);break;case"c":if(!f(y.arg)){if(b=parseInt(y.arg,10),b<0||b>127)throw new Error("invalid character code. Value: "+y.arg);y.arg=f(b)?String(y.arg):l(b)}break;case"e":case"E":case"f":case"F":case"g":case"G":g||(y.precision=6),y.arg=n(y);break;default:throw new Error("invalid specifier: "+y.specifier)}y.maxWidth>=0&&y.arg.length>y.maxWidth&&(y.arg=y.arg.substring(0,y.maxWidth)),y.padZeros?y.arg=s(y.arg,y.width||y.precision,y.padRight):y.width&&(y.arg=a(y.arg,y.width,y.padRight)),M+=y.arg||"",$+=1}return M}return ep=p,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp,o3;function hD(){if(o3)return rp;o3=1;var t=dD();return rp=t,rp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np,s3;function pD(){if(s3)return np;s3=1;var t=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(a){var s={mapping:a[1]?parseInt(a[1],10):void 0,flags:a[2],width:a[3],precision:a[5],specifier:a[6]};return a[4]==="."&&a[5]===void 0&&(s.precision="1"),s}function n(a){var s,l,c,f;for(l=[],f=0,c=t.exec(a);c;)s=a.slice(f,t.lastIndex-c[0].length),s.length&&l.push(s),l.push(e(c)),f=t.lastIndex,c=t.exec(a);return s=a.slice(f),s.length&&l.push(s),l}return np=n,np}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ip,u3;function mD(){if(u3)return ip;u3=1;var t=pD();return ip=t,ip}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ap,l3;function vD(){if(l3)return ap;l3=1;function t(e){return typeof e=="string"}return ap=t,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var op,c3;function gD(){if(c3)return op;c3=1;var t=hD(),e=mD(),n=vD();function a(s){var l,c;if(!n(s))throw new TypeError(a("invalid argument. First argument must be a string. Value: `%s`.",s));for(l=[e(s)],c=1;c<arguments.length;c++)l.push(arguments[c]);return t.apply(null,l)}return op=a,op}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,f3;function ve(){if(f3)return sp;f3=1;var t=gD();return sp=t,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var up,d3;function yD(){if(d3)return up;d3=1;var t=ve(),e=Object.prototype,n=e.toString,a=e.__defineGetter__,s=e.__defineSetter__,l=e.__lookupGetter__,c=e.__lookupSetter__;function f(h,p,v){var g,S,y,A;if(typeof h!="object"||h===null||n.call(h)==="[object Array]")throw new TypeError(t("invalid argument. First argument must be an object. Value: `%s`.",h));if(typeof v!="object"||v===null||n.call(v)==="[object Array]")throw new TypeError(t("invalid argument. Property descriptor must be an object. Value: `%s`.",v));if(S="value"in v,S&&(l.call(h,p)||c.call(h,p)?(g=h.__proto__,h.__proto__=e,delete h[p],h[p]=v.value,h.__proto__=g):h[p]=v.value),y="get"in v,A="set"in v,S&&(y||A))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(h,p,v.get),A&&s&&s.call(h,p,v.set),h}return up=f,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,h3;function ga(){if(h3)return lp;h3=1;var t=oD(),e=sD(),n=yD(),a;return t()?a=e:a=n,lp=a,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,p3;function bD(){if(p3)return cp;p3=1;var t=ga();function e(n,a,s){t(n,a,{configurable:!1,enumerable:!1,writable:!1,value:s})}return cp=e,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,m3;function te(){if(m3)return fp;m3=1;var t=bD();return fp=t,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,v3;function SD(){if(v3)return dp;v3=1;var t=ga();function e(n,a,s){t(n,a,{configurable:!1,enumerable:!1,get:s})}return dp=e,dp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,g3;function jo(){if(g3)return hp;g3=1;var t=SD();return hp=t,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,y3;function TD(){if(y3)return pp;y3=1;var t=ga();function e(n,a,s,l){t(n,a,{configurable:!1,enumerable:!1,get:s,set:l})}return pp=e,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,b3;function Yc(){if(b3)return mp;b3=1;var t=TD();return mp=t,mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp,S3;function wD(){if(S3)return vp;S3=1;function t(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return vp=t,vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp,T3;function ED(){if(T3)return gp;T3=1;var t=wD();return gp=t,gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,w3;function AD(){if(w3)return yp;w3=1;var t=ED(),e=t();function n(){return e&&typeof Symbol.toStringTag=="symbol"}return yp=n,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bp,E3;function Fc(){if(E3)return bp;E3=1;var t=AD();return bp=t,bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,A3;function C_(){if(A3)return Sp;A3=1;var t=Object.prototype.toString;return Sp=t,Sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp,R3;function RD(){if(R3)return Tp;R3=1;var t=C_();function e(n){return t.call(n)}return Tp=e,Tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp,x3;function xD(){if(x3)return wp;x3=1;var t=Object.prototype.hasOwnProperty;function e(n,a){return n==null?!1:t.call(n,a)}return wp=e,wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,M3;function ya(){if(M3)return Ep;M3=1;var t=xD();return Ep=t,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,$3;function MD(){if($3)return Ap;$3=1;var t=typeof Symbol=="function"?Symbol:void 0;return Ap=t,Ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp,O3;function q_(){if(O3)return Rp;O3=1;var t=MD();return Rp=t,Rp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp,_3;function $D(){if(_3)return xp;_3=1;var t=q_(),e=typeof t=="function"?t.toStringTag:"";return xp=e,xp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mp,C3;function OD(){if(C3)return Mp;C3=1;var t=ya(),e=$D(),n=C_();function a(s){var l,c,f;if(s==null)return n.call(s);c=s[e],l=t(s,e);try{s[e]=void 0}catch{return n.call(s)}return f=n.call(s),l?s[e]=c:delete s[e],f}return Mp=a,Mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,q3;function Ue(){if(q3)return $p;q3=1;var t=Fc(),e=RD(),n=OD(),a;return t()?a=n:a=e,$p=a,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Op,L3;function _D(){if(L3)return Op;L3=1;var t=Ue(),e;function n(a){return t(a)==="[object Array]"}return Array.isArray?e=Array.isArray:e=n,Op=e,Op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _p,D3;function Ou(){if(D3)return _p;D3=1;var t=_D();return _p=t,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp,N3;function CD(){if(N3)return Cp;N3=1;var t=Ou();function e(n){return typeof n=="object"&&n!==null&&!t(n)}return Cp=e,Cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp,B3;function R2(){if(B3)return qp;B3=1;var t=CD();return qp=t,qp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp,j3;function qD(){if(j3)return Lp;j3=1;var t=/./;return Lp=t,Lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dp,V3;function L_(){if(V3)return Dp;V3=1;function t(e){return typeof e=="boolean"}return Dp=t,Dp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Np,P3;function LD(){if(P3)return Np;P3=1;var t=Boolean;return Np=t,Np}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bp,z3;function DD(){if(z3)return Bp;z3=1;var t=LD();return Bp=t,Bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp,U3;function ND(){if(U3)return jp;U3=1;var t=Boolean.prototype.toString;return jp=t,jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp,k3;function BD(){if(k3)return Vp;k3=1;var t=ND();function e(n){try{return t.call(n),!0}catch{return!1}}return Vp=e,Vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pp,G3;function D_(){if(G3)return Pp;G3=1;var t=Fc(),e=Ue(),n=DD(),a=BD(),s=t();function l(c){return typeof c=="object"?c instanceof n?!0:s?a(c):e(c)==="[object Boolean]":!1}return Pp=l,Pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp,H3;function jD(){if(H3)return zp;H3=1;var t=L_(),e=D_();function n(a){return t(a)||e(a)}return zp=n,zp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Up,Y3;function x2(){if(Y3)return Up;Y3=1;var t=te(),e=jD(),n=L_(),a=D_();return t(e,"isPrimitive",n),t(e,"isObject",a),Up=e,Up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kp,F3;function VD(){if(F3)return kp;F3=1;function t(){return new Function("return this;")()}return kp=t,kp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp,X3;function PD(){if(X3)return Gp;X3=1;var t=typeof self=="object"?self:null;return Gp=t,Gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp,I3;function zD(){if(I3)return Hp;I3=1;var t=typeof window=="object"?window:null;return Hp=t,Hp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yp,K3;function UD(){if(K3)return Yp;K3=1;var t=typeof globalThis=="object"?globalThis:null;return Yp=t,Yp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fp,Z3;function kD(){if(Z3)return Fp;Z3=1;var t=x2().isPrimitive,e=ve(),n=VD(),a=PD(),s=zD(),l=UD();function c(f){if(arguments.length){if(!t(f))throw new TypeError(e("invalid argument. Must provide a boolean. Value: `%s`.",f));if(f)return n()}if(l)return l;if(a)return a;if(s)return s;throw new Error("unexpected error. Unable to resolve global object.")}return Fp=c,Fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xp,Q3;function GD(){if(Q3)return Xp;Q3=1;var t=kD(),e=t(),n=e.document&&e.document.childNodes;return Xp=n,Xp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip,W3;function HD(){if(W3)return Ip;W3=1;var t=Int8Array;return Ip=t,Ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kp,J3;function YD(){if(J3)return Kp;J3=1;var t=qD(),e=GD(),n=HD();function a(){return typeof t=="function"||typeof n=="object"||typeof e=="function"}return Kp=a,Kp}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp,tR;function N_(){if(tR)return Zp;tR=1;function t(){return/^\s*function\s*([^(]*)/i}return Zp=t,Zp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp,eR;function FD(){if(eR)return Qp;eR=1;var t=N_(),e=t();return Qp=e,Qp}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wp,rR;function B_(){if(rR)return Wp;rR=1;var t=te(),e=N_(),n=FD();return t(e,"REGEXP",n),Wp=e,Wp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp,nR;function XD(){if(nR)return Jp;nR=1;var t=Ou(),e=ve();function n(a){if(typeof a!="function")throw new TypeError(e("invalid argument. Must provide a function. Value: `%s`.",a));return s;function s(l){var c,f;if(!t(l)||(c=l.length,c===0))return!1;for(f=0;f<c;f++)if(a(l[f])===!1)return!1;return!0}}return Jp=n,Jp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tm,iR;function ID(){if(iR)return tm;iR=1;var t=XD();return tm=t,tm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var em,aR;function KD(){if(aR)return em;aR=1;function t(e){return e!==null&&typeof e=="object"}return em=t,em}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rm,oR;function ZD(){if(oR)return rm;oR=1;var t=te(),e=ID(),n=KD(),a=e(n);return t(n,"isObjectLikeArray",a),rm=n,rm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nm,sR;function QD(){if(sR)return nm;sR=1;var t=ZD();function e(n){return t(n)&&(n._isBuffer||n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n))}return nm=e,nm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im,uR;function j_(){if(uR)return im;uR=1;var t=QD();return im=t,im}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var am,lR;function WD(){if(lR)return am;lR=1;var t=Ue(),e=B_().REGEXP,n=j_();function a(s){var l,c,f;if(c=t(s).slice(8,-1),(c==="Object"||c==="Error")&&s.constructor){if(f=s.constructor,typeof f.name=="string")return f.name;if(l=e.exec(f.toString()),l)return l[1]}return n(s)?"Buffer":c}return am=a,am}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om,cR;function Vo(){if(cR)return om;cR=1;var t=WD();return om=t,om}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sm,fR;function JD(){if(fR)return sm;fR=1;var t=Vo();function e(n){var a;return n===null?"null":(a=typeof n,a==="object"?t(n).toLowerCase():a)}return sm=e,sm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um,dR;function tN(){if(dR)return um;dR=1;var t=Vo();function e(n){return t(n).toLowerCase()}return um=e,um}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lm,hR;function eN(){if(hR)return lm;hR=1;var t=YD(),e=JD(),n=tN(),a=t()?n:e;return lm=a,lm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm,pR;function rN(){if(pR)return cm;pR=1;var t=eN();function e(n){return t(n)==="function"}return cm=e,cm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fm,mR;function $i(){if(mR)return fm;mR=1;var t=rN();return fm=t,fm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm,vR;function nN(){if(vR)return dm;vR=1;var t=Object;return dm=t,dm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hm,gR;function iN(){if(gR)return hm;gR=1;var t=nN();return hm=t,hm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pm,yR;function aN(){if(yR)return pm;yR=1;var t=Object.getPrototypeOf;return pm=t,pm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mm,bR;function oN(){if(bR)return mm;bR=1;function t(e){return e.__proto__}return mm=t,mm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vm,SR;function sN(){if(SR)return vm;SR=1;var t=Ue(),e=oN();function n(a){var s=e(a);return s||s===null?s:t(a.constructor)==="[object Function]"?a.constructor.prototype:a instanceof Object?Object.prototype:null}return vm=n,vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm,TR;function uN(){if(TR)return gm;TR=1;var t=$i(),e=aN(),n=sN(),a;return t(Object.getPrototypeOf)?a=e:a=n,gm=a,gm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym,wR;function lN(){if(wR)return ym;wR=1;var t=iN(),e=uN();function n(a){return a==null?null:(a=t(a),e(a))}return ym=n,ym}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bm,ER;function Xc(){if(ER)return bm;ER=1;var t=lN();return bm=t,bm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm,AR;function cN(){if(AR)return Sm;AR=1;var t=R2(),e=$i(),n=Xc(),a=ya(),s=Ue(),l=Object.prototype;function c(h){var p;for(p in h)if(!a(h,p))return!1;return!0}function f(h){var p;return t(h)?(p=n(h),p?!a(h,"constructor")&&a(p,"constructor")&&e(p.constructor)&&s(p.constructor)==="[object Function]"&&a(p,"isPrototypeOf")&&e(p.isPrototypeOf)&&(p===l||c(h)):!0):!1}return Sm=f,Sm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tm,RR;function Ic(){if(RR)return Tm;RR=1;var t=cN();return Tm=t,Tm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm,xR;function fN(){if(xR)return wm;xR=1;function t(e){return n;function n(){return e}}return wm=t,wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Em,MR;function M2(){if(MR)return Em;MR=1;var t=fN();return Em=t,Em}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am,$R;function dN(){if($R)return Am;$R=1;function t(){}return Am=t,Am}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rm,OR;function $2(){if(OR)return Rm;OR=1;var t=dN();return Rm=t,Rm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xm,_R;function hN(){if(_R)return xm;_R=1;var t=Ue(),e=typeof Uint32Array=="function";function n(a){return e&&a instanceof Uint32Array||t(a)==="[object Uint32Array]"}return xm=n,xm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm,CR;function O2(){if(CR)return Mm;CR=1;var t=hN();return Mm=t,Mm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $m,qR;function pN(){if(qR)return $m;qR=1;var t=Math.floor;return $m=t,$m}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Om,LR;function Po(){if(LR)return Om;LR=1;var t=pN();return Om=t,Om}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _m,DR;function mN(){if(DR)return _m;DR=1;var t=Po();function e(n){return t(n)===n}return _m=e,_m}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cm,NR;function zo(){if(NR)return Cm;NR=1;var t=mN();return Cm=t,Cm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qm,BR;function vN(){if(BR)return qm;BR=1;var t=9007199254740991;return qm=t,qm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lm,jR;function gN(){if(jR)return Lm;jR=1;var t=zo(),e=vN();function n(a){return typeof a=="object"&&a!==null&&typeof a.length=="number"&&t(a.length)&&a.length>=0&&a.length<=e}return Lm=n,Lm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dm,VR;function _2(){if(VR)return Dm;VR=1;var t=gN();return Dm=t,Dm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm,PR;function V_(){if(PR)return Nm;PR=1;function t(e){return typeof e=="number"}return Nm=t,Nm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bm,zR;function yN(){return zR||(zR=1,Bm=Number),Bm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jm,UR;function C2(){if(UR)return jm;UR=1;var t=yN();return jm=t,jm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vm,kR;function bN(){if(kR)return Vm;kR=1;var t=C2(),e=t.prototype.toString;return Vm=e,Vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pm,GR;function SN(){if(GR)return Pm;GR=1;var t=bN();function e(n){try{return t.call(n),!0}catch{return!1}}return Pm=e,Pm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm,HR;function P_(){if(HR)return zm;HR=1;var t=Fc(),e=Ue(),n=C2(),a=SN(),s=t();function l(c){return typeof c=="object"?c instanceof n?!0:s?a(c):e(c)==="[object Number]":!1}return zm=l,zm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Um,YR;function TN(){if(YR)return Um;YR=1;var t=V_(),e=P_();function n(a){return t(a)||e(a)}return Um=n,Um}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var km,FR;function Hr(){if(FR)return km;FR=1;var t=te(),e=TN(),n=V_(),a=P_();return t(e,"isPrimitive",n),t(e,"isObject",a),km=e,km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gm,XR;function ba(){if(XR)return Gm;XR=1;var t=Number.POSITIVE_INFINITY;return Gm=t,Gm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hm,IR;function _u(){if(IR)return Hm;IR=1;var t=C2(),e=t.NEGATIVE_INFINITY;return Hm=e,Hm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ym,KR;function z_(){if(KR)return Ym;KR=1;var t=ba(),e=_u(),n=zo();function a(s){return s<t&&s>e&&n(s)}return Ym=a,Ym}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm,ZR;function U_(){if(ZR)return Fm;ZR=1;var t=Hr().isPrimitive,e=z_();function n(a){return t(a)&&e(a)}return Fm=n,Fm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xm,QR;function k_(){if(QR)return Xm;QR=1;var t=Hr().isObject,e=z_();function n(a){return t(a)&&e(a.valueOf())}return Xm=n,Xm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im,WR;function wN(){if(WR)return Im;WR=1;var t=U_(),e=k_();function n(a){return t(a)||e(a)}return Im=n,Im}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Km,JR;function Kc(){if(JR)return Km;JR=1;var t=te(),e=wN(),n=U_(),a=k_();return t(e,"isPrimitive",n),t(e,"isObject",a),Km=e,Km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zm,tx;function G_(){if(tx)return Zm;tx=1;var t=Kc().isPrimitive;function e(n){return t(n)&&n>0}return Zm=e,Zm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qm,ex;function H_(){if(ex)return Qm;ex=1;var t=Kc().isObject;function e(n){return t(n)&&n.valueOf()>0}return Qm=e,Qm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wm,rx;function EN(){if(rx)return Wm;rx=1;var t=G_(),e=H_();function n(a){return t(a)||e(a)}return Wm=n,Wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jm,nx;function AN(){if(nx)return Jm;nx=1;var t=te(),e=EN(),n=G_(),a=H_();return t(e,"isPrimitive",n),t(e,"isObject",a),Jm=e,Jm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tv,ix;function RN(){if(ix)return tv;ix=1;var t=9007199254740991;return tv=t,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,ax;function Zc(){if(ax)return ev;ax=1;var t=4294967295;return ev=t,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rv,ox;function xN(){if(ox)return rv;ox=1;var t=typeof Uint32Array=="function"?Uint32Array:null;return rv=t,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,sx;function MN(){if(sx)return nv;sx=1;var t=O2(),e=Zc(),n=xN();function a(){var s,l;if(typeof n!="function")return!1;try{l=[1,3.14,-3.14,e+1,e+2],l=new n(l),s=t(l)&&l[0]===1&&l[1]===3&&l[2]===e-2&&l[3]===0&&l[4]===1}catch{s=!1}return s}return nv=a,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,ux;function $N(){if(ux)return iv;ux=1;var t=MN();return iv=t,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var av,lx;function ON(){if(lx)return av;lx=1;var t=typeof Uint32Array=="function"?Uint32Array:void 0;return av=t,av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ov,cx;function _N(){if(cx)return ov;cx=1;function t(){throw new Error("not implemented")}return ov=t,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,fx;function Oi(){if(fx)return sv;fx=1;var t=$N(),e=ON(),n=_N(),a;return t()?a=e:a=n,sv=a,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,dx;function CN(){if(dx)return uv;dx=1;var t=ba();function e(n){return n===0&&1/n===t}return uv=e,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,hx;function qN(){if(hx)return lv;hx=1;var t=CN();return lv=t,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cv,px;function LN(){if(px)return cv;px=1;function t(e){return e!==e}return cv=t,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv,mx;function In(){if(mx)return fv;mx=1;var t=LN();return fv=t,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dv,vx;function DN(){if(vx)return dv;vx=1;var t=qN(),e=In(),n=ba();function a(s,l){return e(s)||e(l)?NaN:s===n||l===n?n:s===l&&s===0?t(s)?s:l:s>l?s:l}return dv=a,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,gx;function NN(){if(gx)return hv;gx=1;var t=DN();return hv=t,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,yx;function BN(){if(yx)return pv;yx=1;var t=65535;function e(n,a){var s,l,c,f,h,p;return n>>>=0,a>>>=0,c=n>>>16>>>0,f=a>>>16>>>0,h=(n&t)>>>0,p=(a&t)>>>0,s=h*p>>>0,l=c*p+h*f<<16>>>0,s+l>>>0}return pv=e,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,bx;function jN(){if(bx)return mv;bx=1;var t=BN();return mv=t,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vv,Sx;function VN(){if(Sx)return vv;Sx=1;var t="function";function e(n){return typeof n.get===t&&typeof n.set===t}return vv=e,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gv,Tx;function PN(){if(Tx)return gv;Tx=1;var t=VN();return gv=t,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv,wx;function zN(){if(wx)return yv;wx=1;var t={float64:e,float32:n,int32:a,int16:s,int8:l,uint32:c,uint16:f,uint8:h,uint8c:p,generic:v,default:g};function e(y,A){return y[A]}function n(y,A){return y[A]}function a(y,A){return y[A]}function s(y,A){return y[A]}function l(y,A){return y[A]}function c(y,A){return y[A]}function f(y,A){return y[A]}function h(y,A){return y[A]}function p(y,A){return y[A]}function v(y,A){return y[A]}function g(y,A){return y[A]}function S(y){var A=t[y];return typeof A=="function"?A:t.default}return yv=S,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,Ex;function q2(){if(Ex)return bv;Ex=1;var t=zN();return bv=t,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,Ax;function UN(){if(Ax)return Sv;Ax=1;var t={float64:e,float32:n,int32:a,int16:s,int8:l,uint32:c,uint16:f,uint8:h,uint8c:p,generic:v,default:g};function e(y,A,b){y[A]=b}function n(y,A,b){y[A]=b}function a(y,A,b){y[A]=b}function s(y,A,b){y[A]=b}function l(y,A,b){y[A]=b}function c(y,A,b){y[A]=b}function f(y,A,b){y[A]=b}function h(y,A,b){y[A]=b}function p(y,A,b){y[A]=b}function v(y,A,b){y[A]=b}function g(y,A,b){y[A]=b}function S(y){var A=t[y];return typeof A=="function"?A:t.default}return Sv=S,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tv,Rx;function kN(){if(Rx)return Tv;Rx=1;var t=UN();return Tv=t,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wv,xx;function GN(){if(xx)return wv;xx=1;var t={complex128:e,complex64:n,default:a};function e(l,c){return l.get(c)}function n(l,c){return l.get(c)}function a(l,c){return l.get(c)}function s(l){var c=t[l];return typeof c=="function"?c:t.default}return wv=s,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ev,Mx;function L2(){if(Mx)return Ev;Mx=1;var t=GN();return Ev=t,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,$x;function HN(){if($x)return Av;$x=1;var t={complex128:e,complex64:n,default:a};function e(l,c,f){l.set(f,c)}function n(l,c,f){l.set(f,c)}function a(l,c,f){l.set(f,c)}function s(l){var c=t[l];return typeof c=="function"?c:t.default}return Av=s,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,Ox;function YN(){if(Ox)return Rv;Ox=1;var t=HN();return Rv=t,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xv,_x;function FN(){if(_x)return xv;_x=1;var t={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};return xv=t,xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,Cx;function XN(){if(Cx)return Mv;Cx=1;var t=Ue(),e=typeof Float64Array=="function";function n(a){return e&&a instanceof Float64Array||t(a)==="[object Float64Array]"}return Mv=n,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $v,qx;function IN(){if(qx)return $v;qx=1;var t=XN();return $v=t,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ov,Lx;function KN(){if(Lx)return Ov;Lx=1;var t=typeof Float64Array=="function"?Float64Array:null;return Ov=t,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _v,Dx;function ZN(){if(Dx)return _v;Dx=1;var t=IN(),e=KN();function n(){var a,s;if(typeof e!="function")return!1;try{s=new e([1,3.14,-3.14,NaN]),a=t(s)&&s[0]===1&&s[1]===3.14&&s[2]===-3.14&&s[3]!==s[3]}catch{a=!1}return a}return _v=n,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,Nx;function Y_(){if(Nx)return Cv;Nx=1;var t=ZN();return Cv=t,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qv,Bx;function QN(){if(Bx)return qv;Bx=1;var t=typeof Float64Array=="function"?Float64Array:void 0;return qv=t,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lv,jx;function WN(){if(jx)return Lv;jx=1;function t(){throw new Error("not implemented")}return Lv=t,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,Vx;function Sn(){if(Vx)return Dv;Vx=1;var t=Y_(),e=QN(),n=WN(),a;return t()?a=e:a=n,Dv=a,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,Px;function JN(){if(Px)return Nv;Px=1;var t=Ue(),e=typeof Float32Array=="function";function n(a){return e&&a instanceof Float32Array||t(a)==="[object Float32Array]"}return Nv=n,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,zx;function tB(){if(zx)return Bv;zx=1;var t=JN();return Bv=t,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jv,Ux;function eB(){if(Ux)return jv;Ux=1;var t=typeof Float32Array=="function"?Float32Array:null;return jv=t,jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,kx;function rB(){if(kx)return Vv;kx=1;var t=tB(),e=ba(),n=eB();function a(){var s,l;if(typeof n!="function")return!1;try{l=new n([1,3.14,-3.14,5e40]),s=t(l)&&l[0]===1&&l[1]===3.140000104904175&&l[2]===-3.140000104904175&&l[3]===e}catch{s=!1}return s}return Vv=a,Vv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,Gx;function nB(){if(Gx)return Pv;Gx=1;var t=rB();return Pv=t,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zv,Hx;function iB(){if(Hx)return zv;Hx=1;var t=typeof Float32Array=="function"?Float32Array:void 0;return zv=t,zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,Yx;function aB(){if(Yx)return Uv;Yx=1;function t(){throw new Error("not implemented")}return Uv=t,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kv,Fx;function Uo(){if(Fx)return kv;Fx=1;var t=nB(),e=iB(),n=aB(),a;return t()?a=e:a=n,kv=a,kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,Xx;function oB(){if(Xx)return Gv;Xx=1;var t=Ue(),e=typeof Int32Array=="function";function n(a){return e&&a instanceof Int32Array||t(a)==="[object Int32Array]"}return Gv=n,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,Ix;function sB(){if(Ix)return Hv;Ix=1;var t=oB();return Hv=t,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,Kx;function uB(){if(Kx)return Yv;Kx=1;var t=2147483647;return Yv=t,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fv,Zx;function lB(){if(Zx)return Fv;Zx=1;var t=-2147483648;return Fv=t,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,Qx;function cB(){if(Qx)return Xv;Qx=1;var t=typeof Int32Array=="function"?Int32Array:null;return Xv=t,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iv,Wx;function fB(){if(Wx)return Iv;Wx=1;var t=sB(),e=uB(),n=lB(),a=cB();function s(){var l,c;if(typeof a!="function")return!1;try{c=new a([1,3.14,-3.14,e+1]),l=t(c)&&c[0]===1&&c[1]===3&&c[2]===-3&&c[3]===n}catch{l=!1}return l}return Iv=s,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,Jx;function dB(){if(Jx)return Kv;Jx=1;var t=fB();return Kv=t,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,t5;function hB(){if(t5)return Zv;t5=1;var t=typeof Int32Array=="function"?Int32Array:void 0;return Zv=t,Zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qv,e5;function pB(){if(e5)return Qv;e5=1;function t(){throw new Error("not implemented")}return Qv=t,Qv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,r5;function D2(){if(r5)return Wv;r5=1;var t=dB(),e=hB(),n=pB(),a;return t()?a=e:a=n,Wv=a,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jv,n5;function mB(){if(n5)return Jv;n5=1;var t=Ue(),e=typeof Uint16Array=="function";function n(a){return e&&a instanceof Uint16Array||t(a)==="[object Uint16Array]"}return Jv=n,Jv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,i5;function vB(){if(i5)return t0;i5=1;var t=mB();return t0=t,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,a5;function gB(){if(a5)return e0;a5=1;var t=65535;return e0=t,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,o5;function yB(){if(o5)return r0;o5=1;var t=typeof Uint16Array=="function"?Uint16Array:null;return r0=t,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,s5;function bB(){if(s5)return n0;s5=1;var t=vB(),e=gB(),n=yB();function a(){var s,l;if(typeof n!="function")return!1;try{l=[1,3.14,-3.14,e+1,e+2],l=new n(l),s=t(l)&&l[0]===1&&l[1]===3&&l[2]===e-2&&l[3]===0&&l[4]===1}catch{s=!1}return s}return n0=a,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,u5;function SB(){if(u5)return i0;u5=1;var t=bB();return i0=t,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,l5;function TB(){if(l5)return a0;l5=1;var t=typeof Uint16Array=="function"?Uint16Array:void 0;return a0=t,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,c5;function wB(){if(c5)return o0;c5=1;function t(){throw new Error("not implemented")}return o0=t,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,f5;function Qc(){if(f5)return s0;f5=1;var t=SB(),e=TB(),n=wB(),a;return t()?a=e:a=n,s0=a,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,d5;function EB(){if(d5)return u0;d5=1;var t=Ue(),e=typeof Int16Array=="function";function n(a){return e&&a instanceof Int16Array||t(a)==="[object Int16Array]"}return u0=n,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,h5;function AB(){if(h5)return l0;h5=1;var t=EB();return l0=t,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,p5;function RB(){if(p5)return c0;p5=1;var t=32767;return c0=t,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,m5;function xB(){if(m5)return f0;m5=1;var t=-32768;return f0=t,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,v5;function MB(){if(v5)return d0;v5=1;var t=typeof Int16Array=="function"?Int16Array:null;return d0=t,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,g5;function $B(){if(g5)return h0;g5=1;var t=AB(),e=RB(),n=xB(),a=MB();function s(){var l,c;if(typeof a!="function")return!1;try{c=new a([1,3.14,-3.14,e+1]),l=t(c)&&c[0]===1&&c[1]===3&&c[2]===-3&&c[3]===n}catch{l=!1}return l}return h0=s,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,y5;function OB(){if(y5)return p0;y5=1;var t=$B();return p0=t,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,b5;function _B(){if(b5)return m0;b5=1;var t=typeof Int16Array=="function"?Int16Array:void 0;return m0=t,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,S5;function CB(){if(S5)return v0;S5=1;function t(){throw new Error("not implemented")}return v0=t,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,T5;function N2(){if(T5)return g0;T5=1;var t=OB(),e=_B(),n=CB(),a;return t()?a=e:a=n,g0=a,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,w5;function qB(){if(w5)return y0;w5=1;var t=Ue(),e=typeof Uint8Array=="function";function n(a){return e&&a instanceof Uint8Array||t(a)==="[object Uint8Array]"}return y0=n,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,E5;function LB(){if(E5)return b0;E5=1;var t=qB();return b0=t,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,A5;function DB(){if(A5)return S0;A5=1;var t=255;return S0=t,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,R5;function NB(){if(R5)return T0;R5=1;var t=typeof Uint8Array=="function"?Uint8Array:null;return T0=t,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,x5;function BB(){if(x5)return w0;x5=1;var t=LB(),e=DB(),n=NB();function a(){var s,l;if(typeof n!="function")return!1;try{l=[1,3.14,-3.14,e+1,e+2],l=new n(l),s=t(l)&&l[0]===1&&l[1]===3&&l[2]===e-2&&l[3]===0&&l[4]===1}catch{s=!1}return s}return w0=a,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,M5;function jB(){if(M5)return E0;M5=1;var t=BB();return E0=t,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,$5;function VB(){if($5)return A0;$5=1;var t=typeof Uint8Array=="function"?Uint8Array:void 0;return A0=t,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,O5;function PB(){if(O5)return R0;O5=1;function t(){throw new Error("not implemented")}return R0=t,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,_5;function Wc(){if(_5)return x0;_5=1;var t=jB(),e=VB(),n=PB(),a;return t()?a=e:a=n,x0=a,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,C5;function zB(){if(C5)return M0;C5=1;var t=Ue(),e=typeof Uint8ClampedArray=="function";function n(a){return e&&a instanceof Uint8ClampedArray||t(a)==="[object Uint8ClampedArray]"}return M0=n,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,q5;function UB(){if(q5)return $0;q5=1;var t=zB();return $0=t,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,L5;function kB(){if(L5)return O0;L5=1;var t=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;return O0=t,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,D5;function GB(){if(D5)return _0;D5=1;var t=UB(),e=kB();function n(){var a,s;if(typeof e!="function")return!1;try{s=new e([-1,0,1,3.14,4.99,255,256]),a=t(s)&&s[0]===0&&s[1]===0&&s[2]===1&&s[3]===3&&s[4]===5&&s[5]===255&&s[6]===255}catch{a=!1}return a}return _0=n,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,N5;function HB(){if(N5)return C0;N5=1;var t=GB();return C0=t,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,B5;function YB(){if(B5)return q0;B5=1;var t=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;return q0=t,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,j5;function FB(){if(j5)return L0;j5=1;function t(){throw new Error("not implemented")}return L0=t,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,V5;function B2(){if(V5)return D0;V5=1;var t=HB(),e=YB(),n=FB(),a;return t()?a=e:a=n,D0=a,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,P5;function XB(){if(P5)return N0;P5=1;var t=Ue(),e=typeof Int8Array=="function";function n(a){return e&&a instanceof Int8Array||t(a)==="[object Int8Array]"}return N0=n,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,z5;function IB(){if(z5)return B0;z5=1;var t=XB();return B0=t,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,U5;function KB(){if(U5)return j0;U5=1;var t=127;return j0=t,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,k5;function ZB(){if(k5)return V0;k5=1;var t=-128;return V0=t,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,G5;function QB(){if(G5)return P0;G5=1;var t=typeof Int8Array=="function"?Int8Array:null;return P0=t,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,H5;function WB(){if(H5)return z0;H5=1;var t=IB(),e=KB(),n=ZB(),a=QB();function s(){var l,c;if(typeof a!="function")return!1;try{c=new a([1,3.14,-3.14,e+1]),l=t(c)&&c[0]===1&&c[1]===3&&c[2]===-3&&c[3]===n}catch{l=!1}return l}return z0=s,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,Y5;function JB(){if(Y5)return U0;Y5=1;var t=WB();return U0=t,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,F5;function tj(){if(F5)return k0;F5=1;var t=typeof Int8Array=="function"?Int8Array:void 0;return k0=t,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,X5;function ej(){if(X5)return G0;X5=1;function t(){throw new Error("not implemented")}return G0=t,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,I5;function j2(){if(I5)return H0;I5=1;var t=JB(),e=tj(),n=ej(),a;return t()?a=e:a=n,H0=a,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,K5;function F_(){if(K5)return Y0;K5=1;var t=Kc().isPrimitive;function e(n){return t(n)&&n>=0}return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,Z5;function X_(){if(Z5)return F0;Z5=1;var t=Kc().isObject;function e(n){return t(n)&&n.valueOf()>=0}return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,Q5;function rj(){if(Q5)return X0;Q5=1;var t=F_(),e=X_();function n(a){return t(a)||e(a)}return X0=n,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,W5;function I_(){if(W5)return I0;W5=1;var t=te(),e=rj(),n=F_(),a=X_();return t(e,"isPrimitive",n),t(e,"isObject",a),I0=e,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,J5;function nj(){if(J5)return K0;J5=1;var t=4294967295;return K0=t,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,tM;function ij(){if(tM)return Z0;tM=1;var t=zo(),e=nj();function n(a){return typeof a=="object"&&a!==null&&typeof a.length=="number"&&t(a.length)&&a.length>=0&&a.length<=e}return Z0=n,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,eM;function ko(){if(eM)return Q0;eM=1;var t=ij();return Q0=t,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,rM;function aj(){if(rM)return W0;rM=1;var t=Ue(),e=typeof ArrayBuffer=="function";function n(a){return e&&a instanceof ArrayBuffer||t(a)==="[object ArrayBuffer]"}return W0=n,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,nM;function K_(){if(nM)return J0;nM=1;var t=aj();return J0=t,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tg,iM;function Z_(){if(iM)return tg;iM=1;function t(e){return typeof e=="string"}return tg=t,tg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eg,aM;function oj(){if(aM)return eg;aM=1;var t=String.prototype.valueOf;return eg=t,eg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rg,oM;function sj(){if(oM)return rg;oM=1;var t=oj();function e(n){try{return t.call(n),!0}catch{return!1}}return rg=e,rg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ng,sM;function Q_(){if(sM)return ng;sM=1;var t=Fc(),e=Ue(),n=sj(),a=t();function s(l){return typeof l=="object"?l instanceof String?!0:a?n(l):e(l)==="[object String]":!1}return ng=s,ng}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ig,uM;function uj(){if(uM)return ig;uM=1;var t=Z_(),e=Q_();function n(a){return t(a)||e(a)}return ig=n,ig}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ag,lM;function W_(){if(lM)return ag;lM=1;var t=te(),e=uj(),n=Z_(),a=Q_();return t(e,"isPrimitive",n),t(e,"isObject",a),ag=e,ag}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var og,cM;function lj(){if(cM)return og;cM=1;function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return og=t,og}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sg,fM;function cj(){if(fM)return sg;fM=1;function t(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}return sg=t,sg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ug,dM;function fj(){if(dM)return ug;dM=1;var t=Hr().isPrimitive,e=ga(),n=te(),a=ve(),s=lj(),l=cj();function c(f,h){if(!(this instanceof c))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!t(f))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",f));if(!t(h))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",h));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:f}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:h}),this}return n(c,"BYTES_PER_ELEMENT",8),n(c.prototype,"BYTES_PER_ELEMENT",8),n(c.prototype,"byteLength",16),n(c.prototype,"toString",s),n(c.prototype,"toJSON",l),ug=c,ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lg,hM;function dj(){if(hM)return lg;hM=1;var t=fj();return lg=t,lg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cg,pM;function hj(){if(pM)return cg;pM=1;var t=typeof Math.fround=="function"?Math.fround:null;return cg=t,cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fg,mM;function pj(){if(mM)return fg;mM=1;var t=Uo(),e=new t(1);function n(a){return e[0]=a,e[0]}return fg=n,fg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dg,vM;function J_(){if(vM)return dg;vM=1;var t=hj(),e=pj(),n;return typeof t=="function"?n=t:n=e,dg=n,dg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hg,gM;function mj(){if(gM)return hg;gM=1;function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return hg=t,hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pg,yM;function vj(){if(yM)return pg;yM=1;function t(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}return pg=t,pg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mg,bM;function gj(){if(bM)return mg;bM=1;var t=Hr().isPrimitive,e=ga(),n=te(),a=J_(),s=ve(),l=mj(),c=vj();function f(h,p){if(!(this instanceof f))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!t(h))throw new TypeError(s("invalid argument. Real component must be a number. Value: `%s`.",h));if(!t(p))throw new TypeError(s("invalid argument. Imaginary component must be a number. Value: `%s`.",p));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:a(h)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a(p)}),this}return n(f,"BYTES_PER_ELEMENT",4),n(f.prototype,"BYTES_PER_ELEMENT",4),n(f.prototype,"byteLength",8),n(f.prototype,"toString",l),n(f.prototype,"toJSON",c),mg=f,mg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vg,SM;function yj(){if(SM)return vg;SM=1;var t=gj();return vg=t,vg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gg,TM;function bj(){if(TM)return gg;TM=1;var t=dj(),e=yj();function n(a){return a instanceof t||a instanceof e?!0:typeof a=="object"&&a!==null&&typeof a.re=="number"&&typeof a.im=="number"}return gg=n,gg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yg,wM;function _i(){if(wM)return yg;wM=1;var t=bj();return yg=t,yg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bg,EM;function Sj(){if(EM)return bg;EM=1;var t=zo();function e(n){return t(n/2)}return bg=e,bg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sg,AM;function tC(){if(AM)return Sg;AM=1;var t=Sj();return Sg=t,Sg}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tg,RM;function Tj(){if(RM)return Tg;RM=1;var t=8;function e(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex64Array"&&n.BYTES_PER_ELEMENT===t}return Tg=e,Tg}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wg,xM;function eC(){if(xM)return wg;xM=1;var t=Tj();return wg=t,wg}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eg,MM;function wj(){if(MM)return Eg;MM=1;var t=16;function e(n){return typeof n=="object"&&n!==null&&n.constructor.name==="Complex128Array"&&n.BYTES_PER_ELEMENT===t}return Eg=e,Eg}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ag,$M;function rC(){if($M)return Ag;$M=1;var t=wj();return Ag=t,Ag}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rg,OM;function Ej(){if(OM)return Rg;OM=1;var t=ya(),e=q_();function n(){return typeof e=="function"&&typeof e("foo")=="symbol"&&t(e,"iterator")&&typeof e.iterator=="symbol"}return Rg=n,Rg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xg,_M;function V2(){if(_M)return xg;_M=1;var t=Ej();return xg=t,xg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mg,CM;function Aj(){if(CM)return Mg;CM=1;var t=V2(),e=t()?Symbol.iterator:null;return Mg=e,Mg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $g,qM;function nC(){if(qM)return $g;qM=1;var t=Aj();return $g=t,$g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Og,LM;function Rj(){if(LM)return Og;LM=1;function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return Og=t,Og}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _g,DM;function xj(){if(DM)return _g;DM=1;function t(){var e={};return e.type="Complex64",e.re=this.re,e.im=this.im,e}return _g=t,_g}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cg,NM;function Mj(){if(NM)return Cg;NM=1;var t=Hr().isPrimitive,e=ga(),n=te(),a=J_(),s=ve(),l=Rj(),c=xj();function f(h,p){if(!(this instanceof f))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!t(h))throw new TypeError(s("invalid argument. Real component must be a number. Value: `%s`.",h));if(!t(p))throw new TypeError(s("invalid argument. Imaginary component must be a number. Value: `%s`.",p));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:a(h)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:a(p)}),this}return n(f,"BYTES_PER_ELEMENT",4),n(f.prototype,"BYTES_PER_ELEMENT",4),n(f.prototype,"byteLength",8),n(f.prototype,"toString",l),n(f.prototype,"toJSON",c),Cg=f,Cg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qg,BM;function $j(){if(BM)return qg;BM=1;var t=Mj();return qg=t,qg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lg,jM;function Oj(){if(jM)return Lg;jM=1;function t(e){return e.re}return Lg=t,Lg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dg,VM;function Jc(){if(VM)return Dg;VM=1;var t=Oj();return Dg=t,Dg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ng,PM;function _j(){if(PM)return Ng;PM=1;function t(e){return e.im}return Ng=t,Ng}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bg,zM;function tf(){if(zM)return Bg;zM=1;var t=_j();return Bg=t,Bg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jg,UM;function Cj(){if(UM)return jg;UM=1;var t=Uo();function e(n,a){return new t(n.buffer,n.byteOffset+n.BYTES_PER_ELEMENT*a,2*(n.length-a))}return jg=e,jg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vg,kM;function P2(){if(kM)return Vg;kM=1;var t=Cj();return Vg=t,Vg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pg,GM;function qj(){if(GM)return Pg;GM=1;var t=Sn();function e(n,a){return new t(n.buffer,n.byteOffset+n.BYTES_PER_ELEMENT*a,2*(n.length-a))}return Pg=e,Pg}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zg,HM;function z2(){if(HM)return zg;HM=1;var t=qj();return zg=t,zg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ug,YM;function Lj(){if(YM)return Ug;YM=1;var t=ko(),e=_i(),n=Jc(),a=tf(),s=ve();function l(c){var f,h,p;for(f=[];h=c.next(),!h.done;)if(p=h.value,t(p)&&p.length>=2)f.push(p[0],p[1]);else if(e(p))f.push(n(p),a(p));else return new TypeError(s("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));return f}return Ug=l,Ug}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kg,FM;function Dj(){if(FM)return kg;FM=1;var t=ko(),e=_i(),n=Jc(),a=tf(),s=ve();function l(c,f,h){var p,v,g,S;for(p=[],S=-1;v=c.next(),!v.done;)if(S+=1,g=f.call(h,v.value,S),t(g)&&g.length>=2)p.push(g[0],g[1]);else if(e(g))p.push(n(g),a(g));else return new TypeError(s("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));return p}return kg=l,kg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gg,XM;function Nj(){if(XM)return Gg;XM=1;var t=_i(),e=Jc(),n=tf();function a(s,l){var c,f,h,p;for(c=l.length,p=0,h=0;h<c;h++){if(f=l[h],!t(f))return null;s[p]=e(f),s[p+1]=n(f),p+=2}return s}return Gg=a,Gg}var Hg,IM;function Bj(){if(IM)return Hg;IM=1;var t=I_().isPrimitive,e=ko(),n=_2(),a=K_(),s=R2(),l=Ou(),c=W_().isPrimitive,f=$i(),h=_i(),p=tC(),v=zo(),g=eC(),S=rC(),y=V2(),A=nC(),b=te(),M=jo(),$=Uo(),B=$j(),_=ve(),N=Jc(),L=tf(),k=Po(),j=P2(),H=z2(),rt=q2(),R=L2(),Y=Lj(),et=Dj(),ct=Nj(),ft=$.BYTES_PER_ELEMENT*2,dt=y();function P(C){return C instanceof Q||typeof C=="object"&&C!==null&&(C.constructor.name==="Complex64Array"||C.constructor.name==="Complex128Array")&&typeof C._length=="number"&&typeof C._buffer=="object"}function tt(C){return C===Q||C.name==="Complex128Array"}function ot(C,T){return T*=2,new B(C[T],C[T+1])}function Q(){var C,T,w,x;if(T=arguments.length,!(this instanceof Q))return T===0?new Q:T===1?new Q(arguments[0]):T===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(T===0)w=new $(0);else if(T===1)if(t(arguments[0]))w=new $(arguments[0]*2);else if(n(arguments[0]))if(w=arguments[0],x=w.length,x&&l(w)&&h(w[0])){if(w=ct(new $(x*2),w),w===null){if(!p(x))throw new RangeError(_("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",x));w=new $(arguments[0])}}else{if(g(w))w=j(w,0);else if(S(w))w=H(w,0);else if(!p(x))throw new RangeError(_("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",x));w=new $(w)}else if(a(arguments[0])){if(w=arguments[0],!v(w.byteLength/ft))throw new RangeError(_("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,w.byteLength));w=new $(w)}else if(s(arguments[0])){if(w=arguments[0],dt===!1)throw new TypeError(_("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",w));if(!f(w[A]))throw new TypeError(_("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",w));if(w=w[A](),!f(w.next))throw new TypeError(_("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",w));if(w=Y(w),w instanceof Error)throw w;w=new $(w)}else throw new TypeError(_("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(w=arguments[0],!a(w))throw new TypeError(_("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",w));if(C=arguments[1],!t(C))throw new TypeError(_("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",C));if(!v(C/ft))throw new RangeError(_("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,C));if(T===2){if(x=w.byteLength-C,!v(x/ft))throw new RangeError(_("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,x));w=new $(w,C)}else{if(x=arguments[2],!t(x))throw new TypeError(_("invalid argument. Length must be a nonnegative integer. Value: `%s`.",x));if(x*ft>w.byteLength-C)throw new RangeError(_("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",x*ft));w=new $(w,C,x*2)}}return b(this,"_buffer",w),b(this,"_length",w.length/2),this}return b(Q,"BYTES_PER_ELEMENT",ft),b(Q,"name","Complex64Array"),b(Q,"from",function(T){var w,x,q,D,U,X,mt,it,Et,ut,W,pt;if(!f(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(x=arguments.length,x>1){if(q=arguments[1],!f(q))throw new TypeError(_("invalid argument. Second argument must be a function. Value: `%s`.",q));x>2&&(w=arguments[2])}if(P(T)){if(it=T.length,q){for(D=new this(it),U=D._buffer,pt=0,W=0;W<it;W++){if(ut=q.call(w,T.get(W),W),h(ut))U[pt]=N(ut),U[pt+1]=L(ut);else if(e(ut)&&ut.length>=2)U[pt]=ut[0],U[pt+1]=ut[1];else throw new TypeError(_("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",ut));pt+=2}return D}return new this(T)}if(n(T)){if(q){for(it=T.length,T.get&&T.set?mt=R("default"):mt=rt("default"),W=0;W<it;W++)if(!h(mt(T,W))){Et=!0;break}if(Et){if(!p(it))throw new RangeError(_("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,it));for(D=new this(it/2),U=D._buffer,W=0;W<it;W++)U[W]=q.call(w,mt(T,W),W);return D}for(D=new this(it),U=D._buffer,pt=0,W=0;W<it;W++){if(ut=q.call(w,mt(T,W),W),h(ut))U[pt]=N(ut),U[pt+1]=L(ut);else if(e(ut)&&ut.length>=2)U[pt]=ut[0],U[pt+1]=ut[1];else throw new TypeError(_("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",ut));pt+=2}return D}return new this(T)}if(s(T)&&dt&&f(T[A])){if(U=T[A](),!f(U.next))throw new TypeError(_("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",T));if(q?X=et(U,q,w):X=Y(U),X instanceof Error)throw X;for(it=X.length/2,D=new this(it),U=D._buffer,W=0;W<it;W++)U[W]=X[W];return D}throw new TypeError(_("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",T))}),b(Q,"of",function(){var T,w;if(!f(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(T=[],w=0;w<arguments.length;w++)T.push(arguments[w]);return new this(T)}),b(Q.prototype,"at",function(T){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!v(T))throw new TypeError(_("invalid argument. Must provide an integer. Value: `%s`.",T));if(T<0&&(T+=this._length),!(T<0||T>=this._length))return ot(this._buffer,T)}),M(Q.prototype,"buffer",function(){return this._buffer.buffer}),M(Q.prototype,"byteLength",function(){return this._buffer.byteLength}),M(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset}),b(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT),b(Q.prototype,"copyWithin",function(T,w){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(T*2,w*2):this._buffer.copyWithin(T*2,w*2,arguments[2]*2),this}),b(Q.prototype,"entries",function(){var T,w,x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return w=this,T=this._buffer,q=this._length,U=-1,X=-2,x={},b(x,"next",mt),b(x,"return",it),A&&b(x,A,Et),x;function mt(){var ut;return U+=1,D||U>=q?{done:!0}:(X+=2,ut=new B(T[X],T[X+1]),{value:[U,ut],done:!1})}function it(ut){return D=!0,arguments.length?{value:ut,done:!0}:{done:!0}}function Et(){return w.entries()}}),b(Q.prototype,"every",function(T,w){var x,q;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(!T.call(w,ot(x,q),q,this))return!1;return!0}),b(Q.prototype,"fill",function(T,w,x){var q,D,U,X,mt,it;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(_("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(q=this._buffer,D=this._length,arguments.length>1){if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));if(w<0&&(w+=D,w<0&&(w=0)),arguments.length>2){if(!v(x))throw new TypeError(_("invalid argument. Third argument must be an integer. Value: `%s`.",x));x<0&&(x+=D,x<0&&(x=0)),x>D&&(x=D)}else x=D}else w=0,x=D;for(X=N(T),mt=L(T),it=w;it<x;it++)U=2*it,q[U]=X,q[U+1]=mt;return this}),b(Q.prototype,"filter",function(T,w){var x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=[],D=0;D<this._length;D++)U=ot(x,D),T.call(w,U,D,this)&&q.push(U);return new this.constructor(q)}),b(Q.prototype,"find",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(D=ot(x,q),T.call(w,D,q,this))return D}),b(Q.prototype,"findIndex",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(D=ot(x,q),T.call(w,D,q,this))return q;return-1}),b(Q.prototype,"findLast",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=this._length-1;q>=0;q--)if(D=ot(x,q),T.call(w,D,q,this))return D}),b(Q.prototype,"findLastIndex",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=this._length-1;q>=0;q--)if(D=ot(x,q),T.call(w,D,q,this))return q;return-1}),b(Q.prototype,"forEach",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)D=ot(x,q),T.call(w,D,q,this)}),b(Q.prototype,"get",function(T){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!t(T))throw new TypeError(_("invalid argument. Must provide a nonnegative integer. Value: `%s`.",T));if(!(T>=this._length))return ot(this._buffer,T)}),b(Q.prototype,"includes",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(_("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0&&(w+=this._length,w<0&&(w=0))}else w=0;for(D=N(T),U=L(T),x=this._buffer,X=w;X<this._length;X++)if(q=2*X,D===x[q]&&U===x[q+1])return!0;return!1}),b(Q.prototype,"indexOf",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(_("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0&&(w+=this._length,w<0&&(w=0))}else w=0;for(D=N(T),U=L(T),x=this._buffer,X=w;X<this._length;X++)if(q=2*X,D===x[q]&&U===x[q+1])return X;return-1}),b(Q.prototype,"join",function(T){var w,x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)q=",";else if(c(T))q=T;else throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",T));for(w=[],x=this._buffer,D=0;D<this._length;D++)w.push(ot(x,D).toString());return w.join(q)}),b(Q.prototype,"lastIndexOf",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(_("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));w>=this._length?w=this._length-1:w<0&&(w+=this._length)}else w=this._length-1;for(D=N(T),U=L(T),x=this._buffer,X=w;X>=0;X--)if(q=2*X,D===x[q]&&U===x[q+1])return X;return-1}),M(Q.prototype,"length",function(){return this._length}),b(Q.prototype,"map",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(q=this._buffer,D=new this.constructor(this._length),x=D._buffer,U=0;U<this._length;U++)if(X=T.call(w,ot(q,U),U,this),h(X))x[2*U]=N(X),x[2*U+1]=L(X);else if(e(X)&&X.length===2)x[2*U]=X[0],x[2*U+1]=X[1];else throw new TypeError(_("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",X));return D}),b(Q.prototype,"reduce",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));if(x=this._buffer,D=this._length,arguments.length>1)q=w,X=0;else{if(D===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");q=ot(x,0),X=1}for(;X<D;X++)U=ot(x,X),q=T(q,U,X,this);return q}),b(Q.prototype,"reverse",function(){var T,w,x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(x=this._length,T=this._buffer,q=k(x/2),D=0;D<q;D++)U=x-D-1,w=T[2*D],T[2*D]=T[2*U],T[2*U]=w,w=T[2*D+1],T[2*D+1]=T[2*U+1],T[2*U+1]=w;return this}),b(Q.prototype,"set",function(T){var w,x,q,D,U,X,mt,it,Et;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(q=this._buffer,arguments.length>1){if(x=arguments[1],!t(x))throw new TypeError(_("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",x))}else x=0;if(h(T)){if(x>=this._length)throw new RangeError(_("invalid argument. Index argument is out-of-bounds. Value: `%u`.",x));x*=2,q[x]=N(T),q[x+1]=L(T);return}if(P(T)){if(X=T._length,x+X>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(w=T._buffer,Et=q.byteOffset+x*ft,w.buffer===q.buffer&&w.byteOffset<Et&&w.byteOffset+w.byteLength>Et){for(D=new $(w.length),it=0;it<w.length;it++)D[it]=w[it];w=D}for(x*=2,Et=0,it=0;it<X;it++)q[x]=w[Et],q[x+1]=w[Et+1],x+=2,Et+=2;return}if(n(T)){for(X=T.length,it=0;it<X;it++)if(!h(T[it])){U=!0;break}if(U){if(!p(X))throw new RangeError(_("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",X));if(x+X/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(w=T,Et=q.byteOffset+x*ft,w.buffer===q.buffer&&w.byteOffset<Et&&w.byteOffset+w.byteLength>Et){for(D=new $(X),it=0;it<X;it++)D[it]=w[it];w=D}for(x*=2,X/=2,Et=0,it=0;it<X;it++)q[x]=w[Et],q[x+1]=w[Et+1],x+=2,Et+=2;return}if(x+X>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(x*=2,it=0;it<X;it++)mt=T[it],q[x]=N(mt),q[x+1]=L(mt),x+=2;return}throw new TypeError(_("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",T))}),b(Q.prototype,"slice",function(T,w){var x,q,D,U,X,mt,it;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(X=this._buffer,mt=this._length,arguments.length===0)T=0,w=mt;else{if(!v(T))throw new TypeError(_("invalid argument. First argument must be an integer. Value: `%s`.",T));if(T<0&&(T+=mt,T<0&&(T=0)),arguments.length===1)w=mt;else{if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0?(w+=mt,w<0&&(w=0)):w>mt&&(w=mt)}}for(T<w?x=w-T:x=0,D=new this.constructor(x),q=D._buffer,it=0;it<x;it++)U=2*(it+T),q[2*it]=X[U],q[2*it+1]=X[U+1];return D}),b(Q.prototype,"some",function(T,w){var x,q;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(_("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(T.call(w,ot(x,q),q,this))return!0;return!1}),b(Q.prototype,"subarray",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(q=this._buffer,D=this._length,arguments.length===0)T=0,w=D;else{if(!v(T))throw new TypeError(_("invalid argument. First argument must be an integer. Value: `%s`.",T));if(T<0&&(T+=D,T<0&&(T=0)),arguments.length===1)w=D;else{if(!v(w))throw new TypeError(_("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0?(w+=D,w<0&&(w=0)):w>D&&(w=D)}}return T>=D?(D=0,x=q.byteLength):T>=w?(D=0,x=q.byteOffset+T*ft):(D=w-T,x=q.byteOffset+T*ft),new this.constructor(q.buffer,x,D<0?0:D)}),b(Q.prototype,"toReversed",function(){var T,w,x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(x=this._length,w=new this.constructor(x),q=this._buffer,T=w._buffer,D=0;D<x;D++)U=x-D-1,T[2*D]=q[2*U],T[2*D+1]=q[2*U+1];return w}),b(Q.prototype,"toString",function(){var T,w,x;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(T=[],w=this._buffer,x=0;x<this._length;x++)T.push(ot(w,x).toString());return T.join(",")}),b(Q.prototype,"with",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!v(T))throw new TypeError(_("invalid argument. First argument must be an integer. Value: `%s`.",T));if(D=this._length,T<0&&(T+=D),T<0||T>=D)throw new RangeError(_("invalid argument. Index argument is out-of-bounds. Value: `%s`.",T));if(!h(w))throw new TypeError(_("invalid argument. Second argument must be a complex number. Value: `%s`.",w));return q=new this.constructor(this._buffer),x=q._buffer,x[2*T]=N(w),x[2*T+1]=L(w),q}),Hg=Q,Hg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yg,KM;function U2(){if(KM)return Yg;KM=1;var t=Bj();return Yg=t,Yg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fg,ZM;function jj(){if(ZM)return Fg;ZM=1;function t(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i",e}return Fg=t,Fg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xg,QM;function Vj(){if(QM)return Xg;QM=1;function t(){var e={};return e.type="Complex128",e.re=this.re,e.im=this.im,e}return Xg=t,Xg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ig,WM;function Pj(){if(WM)return Ig;WM=1;var t=Hr().isPrimitive,e=ga(),n=te(),a=ve(),s=jj(),l=Vj();function c(f,h){if(!(this instanceof c))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!t(f))throw new TypeError(a("invalid argument. Real component must be a number. Value: `%s`.",f));if(!t(h))throw new TypeError(a("invalid argument. Imaginary component must be a number. Value: `%s`.",h));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:f}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:h}),this}return n(c,"BYTES_PER_ELEMENT",8),n(c.prototype,"BYTES_PER_ELEMENT",8),n(c.prototype,"byteLength",16),n(c.prototype,"toString",s),n(c.prototype,"toJSON",l),Ig=c,Ig}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kg,JM;function zj(){if(JM)return Kg;JM=1;var t=Pj();return Kg=t,Kg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zg,t$;function Uj(){if(t$)return Zg;t$=1;function t(e){return e.re}return Zg=t,Zg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qg,e$;function ef(){if(e$)return Qg;e$=1;var t=Uj();return Qg=t,Qg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wg,r$;function kj(){if(r$)return Wg;r$=1;function t(e){return e.im}return Wg=t,Wg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jg,n$;function rf(){if(n$)return Jg;n$=1;var t=kj();return Jg=t,Jg}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ty,i$;function Gj(){if(i$)return ty;i$=1;var t=ko(),e=_i(),n=ve(),a=ef(),s=rf();function l(c){var f,h,p;for(f=[];h=c.next(),!h.done;)if(p=h.value,t(p)&&p.length>=2)f.push(p[0],p[1]);else if(e(p))f.push(a(p),s(p));else return new TypeError(n("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",p));return f}return ty=l,ty}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ey,a$;function Hj(){if(a$)return ey;a$=1;var t=ko(),e=_i(),n=ve(),a=ef(),s=rf();function l(c,f,h){var p,v,g,S;for(p=[],S=-1;v=c.next(),!v.done;)if(S+=1,g=f.call(h,v.value,S),t(g)&&g.length>=2)p.push(g[0],g[1]);else if(e(g))p.push(a(g),s(g));else return new TypeError(n("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",g));return p}return ey=l,ey}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ry,o$;function Yj(){if(o$)return ry;o$=1;var t=_i(),e=ef(),n=rf();function a(s,l){var c,f,h,p;for(c=l.length,p=0,h=0;h<c;h++){if(f=l[h],!t(f))return null;s[p]=e(f),s[p+1]=n(f),p+=2}return s}return ry=a,ry}var ny,s$;function Fj(){if(s$)return ny;s$=1;var t=I_().isPrimitive,e=ko(),n=_2(),a=K_(),s=R2(),l=Ou(),c=W_(),f=$i(),h=_i(),p=tC(),v=zo(),g=eC(),S=rC(),y=V2(),A=nC(),b=te(),M=jo(),$=Sn(),B=zj(),_=ef(),N=rf(),L=Po(),k=P2(),j=z2(),H=q2(),rt=L2(),R=ve(),Y=Gj(),et=Hj(),ct=Yj(),ft=$.BYTES_PER_ELEMENT*2,dt=y();function P(C){return C instanceof Q||typeof C=="object"&&C!==null&&(C.constructor.name==="Complex64Array"||C.constructor.name==="Complex128Array")&&typeof C._length=="number"&&typeof C._buffer=="object"}function tt(C){return C===Q||C.name==="Complex64Array"}function ot(C,T){return T*=2,new B(C[T],C[T+1])}function Q(){var C,T,w,x;if(T=arguments.length,!(this instanceof Q))return T===0?new Q:T===1?new Q(arguments[0]):T===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(T===0)w=new $(0);else if(T===1)if(t(arguments[0]))w=new $(arguments[0]*2);else if(n(arguments[0]))if(w=arguments[0],x=w.length,x&&l(w)&&h(w[0])){if(w=ct(new $(x*2),w),w===null){if(!p(x))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",x));w=new $(arguments[0])}}else{if(g(w))w=k(w,0);else if(S(w))w=j(w,0);else if(!p(x))throw new RangeError(R("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",x));w=new $(w)}else if(a(arguments[0])){if(w=arguments[0],!v(w.byteLength/ft))throw new RangeError(R("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,w.byteLength));w=new $(w)}else if(s(arguments[0])){if(w=arguments[0],dt===!1)throw new TypeError(R("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",w));if(!f(w[A]))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",w));if(w=w[A](),!f(w.next))throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",w));if(w=Y(w),w instanceof Error)throw w;w=new $(w)}else throw new TypeError(R("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(w=arguments[0],!a(w))throw new TypeError(R("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",w));if(C=arguments[1],!t(C))throw new TypeError(R("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",C));if(!v(C/ft))throw new RangeError(R("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,C));if(T===2){if(x=w.byteLength-C,!v(x/ft))throw new RangeError(R("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,x));w=new $(w,C)}else{if(x=arguments[2],!t(x))throw new TypeError(R("invalid argument. Length must be a nonnegative integer. Value: `%s`.",x));if(x*ft>w.byteLength-C)throw new RangeError(R("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",x*ft));w=new $(w,C,x*2)}}return b(this,"_buffer",w),b(this,"_length",w.length/2),this}return b(Q,"BYTES_PER_ELEMENT",ft),b(Q,"name","Complex128Array"),b(Q,"from",function(T){var w,x,q,D,U,X,mt,it,Et,ut,W,pt;if(!f(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(x=arguments.length,x>1){if(q=arguments[1],!f(q))throw new TypeError(R("invalid argument. Second argument must be a function. Value: `%s`.",q));x>2&&(w=arguments[2])}if(P(T)){if(it=T.length,q){for(D=new this(it),U=D._buffer,pt=0,W=0;W<it;W++){if(ut=q.call(w,T.get(W),W),h(ut))U[pt]=_(ut),U[pt+1]=N(ut);else if(e(ut)&&ut.length>=2)U[pt]=ut[0],U[pt+1]=ut[1];else throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",ut));pt+=2}return D}return new this(T)}if(n(T)){if(q){for(it=T.length,T.get&&T.set?mt=rt("default"):mt=H("default"),W=0;W<it;W++)if(!h(mt(T,W))){Et=!0;break}if(Et){if(!p(it))throw new RangeError(R("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",it));for(D=new this(it/2),U=D._buffer,W=0;W<it;W++)U[W]=q.call(w,mt(T,W),W);return D}for(D=new this(it),U=D._buffer,pt=0,W=0;W<it;W++){if(ut=q.call(w,mt(T,W),W),h(ut))U[pt]=_(ut),U[pt+1]=N(ut);else if(e(ut)&&ut.length>=2)U[pt]=ut[0],U[pt+1]=ut[1];else throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",ut));pt+=2}return D}return new this(T)}if(s(T)&&dt&&f(T[A])){if(U=T[A](),!f(U.next))throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",T));if(q?X=et(U,q,w):X=Y(U),X instanceof Error)throw X;for(it=X.length/2,D=new this(it),U=D._buffer,W=0;W<it;W++)U[W]=X[W];return D}throw new TypeError(R("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",T))}),b(Q,"of",function(){var T,w;if(!f(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(T=[],w=0;w<arguments.length;w++)T.push(arguments[w]);return new this(T)}),b(Q.prototype,"at",function(T){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!v(T))throw new TypeError(R("invalid argument. Must provide an integer. Value: `%s`.",T));if(T<0&&(T+=this._length),!(T<0||T>=this._length))return ot(this._buffer,T)}),M(Q.prototype,"buffer",function(){return this._buffer.buffer}),M(Q.prototype,"byteLength",function(){return this._buffer.byteLength}),M(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset}),b(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT),b(Q.prototype,"copyWithin",function(T,w){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(T*2,w*2):this._buffer.copyWithin(T*2,w*2,arguments[2]*2),this}),b(Q.prototype,"entries",function(){var T,w,x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return w=this,T=this._buffer,q=this._length,U=-1,X=-2,x={},b(x,"next",mt),b(x,"return",it),A&&b(x,A,Et),x;function mt(){var ut;return U+=1,D||U>=q?{done:!0}:(X+=2,ut=new B(T[X],T[X+1]),{value:[U,ut],done:!1})}function it(ut){return D=!0,arguments.length?{value:ut,done:!0}:{done:!0}}function Et(){return w.entries()}}),b(Q.prototype,"every",function(T,w){var x,q;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(!T.call(w,ot(x,q),q,this))return!1;return!0}),b(Q.prototype,"fill",function(T,w,x){var q,D,U,X,mt,it;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(R("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(q=this._buffer,D=this._length,arguments.length>1){if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));if(w<0&&(w+=D,w<0&&(w=0)),arguments.length>2){if(!v(x))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",x));x<0&&(x+=D,x<0&&(x=0)),x>D&&(x=D)}else x=D}else w=0,x=D;for(X=_(T),mt=N(T),it=w;it<x;it++)U=2*it,q[U]=X,q[U+1]=mt;return this}),b(Q.prototype,"filter",function(T,w){var x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=[],D=0;D<this._length;D++)U=ot(x,D),T.call(w,U,D,this)&&q.push(U);return new this.constructor(q)}),b(Q.prototype,"find",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(D=ot(x,q),T.call(w,D,q,this))return D}),b(Q.prototype,"findIndex",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(D=ot(x,q),T.call(w,D,q,this))return q;return-1}),b(Q.prototype,"findLast",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=this._length-1;q>=0;q--)if(D=ot(x,q),T.call(w,D,q,this))return D}),b(Q.prototype,"findLastIndex",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=this._length-1;q>=0;q--)if(D=ot(x,q),T.call(w,D,q,this))return q;return-1}),b(Q.prototype,"forEach",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)D=ot(x,q),T.call(w,D,q,this)}),b(Q.prototype,"get",function(T){if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!t(T))throw new TypeError(R("invalid argument. Must provide a nonnegative integer. Value: `%s`.",T));if(!(T>=this._length))return ot(this._buffer,T)}),M(Q.prototype,"length",function(){return this._length}),b(Q.prototype,"includes",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(R("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0&&(w+=this._length,w<0&&(w=0))}else w=0;for(D=_(T),U=N(T),x=this._buffer,X=w;X<this._length;X++)if(q=2*X,D===x[q]&&U===x[q+1])return!0;return!1}),b(Q.prototype,"indexOf",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(R("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0&&(w+=this._length,w<0&&(w=0))}else w=0;for(D=_(T),U=N(T),x=this._buffer,X=w;X<this._length;X++)if(q=2*X,D===x[q]&&U===x[q+1])return X;return-1}),b(Q.prototype,"join",function(T){var w,x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(arguments.length===0)q=",";else if(c(T))q=T;else throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",T));for(w=[],x=this._buffer,D=0;D<this._length;D++)w.push(ot(x,D).toString());return w.join(q)}),b(Q.prototype,"lastIndexOf",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!h(T))throw new TypeError(R("invalid argument. First argument must be a complex number. Value: `%s`.",T));if(arguments.length>1){if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));w>=this._length?w=this._length-1:w<0&&(w+=this._length)}else w=this._length-1;for(D=_(T),U=N(T),x=this._buffer,X=w;X>=0;X--)if(q=2*X,D===x[q]&&U===x[q+1])return X;return-1}),b(Q.prototype,"map",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(q=this._buffer,D=new this.constructor(this._length),x=D._buffer,U=0;U<this._length;U++)if(X=T.call(w,ot(q,U),U,this),h(X))x[2*U]=_(X),x[2*U+1]=N(X);else if(e(X)&&X.length===2)x[2*U]=X[0],x[2*U+1]=X[1];else throw new TypeError(R("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",X));return D}),b(Q.prototype,"reduce",function(T,w){var x,q,D,U,X;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));if(x=this._buffer,D=this._length,arguments.length>1)q=w,X=0;else{if(D===0)throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");q=ot(x,0),X=1}for(;X<D;X++)U=ot(x,X),q=T(q,U,X,this);return q}),b(Q.prototype,"reverse",function(){var T,w,x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(x=this._length,T=this._buffer,q=L(x/2),D=0;D<q;D++)U=x-D-1,w=T[2*D],T[2*D]=T[2*U],T[2*U]=w,w=T[2*D+1],T[2*D+1]=T[2*U+1],T[2*U+1]=w;return this}),b(Q.prototype,"set",function(T){var w,x,q,D,U,X,mt,it,Et;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(q=this._buffer,arguments.length>1){if(x=arguments[1],!t(x))throw new TypeError(R("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",x))}else x=0;if(h(T)){if(x>=this._length)throw new RangeError(R("invalid argument. Index argument is out-of-bounds. Value: `%u`.",x));x*=2,q[x]=_(T),q[x+1]=N(T);return}if(P(T)){if(X=T._length,x+X>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(w=T._buffer,Et=q.byteOffset+x*ft,w.buffer===q.buffer&&w.byteOffset<Et&&w.byteOffset+w.byteLength>Et){for(D=new $(w.length),it=0;it<w.length;it++)D[it]=w[it];w=D}for(x*=2,Et=0,it=0;it<X;it++)q[x]=w[Et],q[x+1]=w[Et+1],x+=2,Et+=2;return}if(n(T)){for(X=T.length,it=0;it<X;it++)if(!h(T[it])){U=!0;break}if(U){if(!p(X))throw new RangeError(R("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",X));if(x+X/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(w=T,Et=q.byteOffset+x*ft,w.buffer===q.buffer&&w.byteOffset<Et&&w.byteOffset+w.byteLength>Et){for(D=new $(X),it=0;it<X;it++)D[it]=w[it];w=D}for(x*=2,X/=2,Et=0,it=0;it<X;it++)q[x]=w[Et],q[x+1]=w[Et+1],x+=2,Et+=2;return}if(x+X>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(x*=2,it=0;it<X;it++)mt=T[it],q[x]=_(mt),q[x+1]=N(mt),x+=2;return}throw new TypeError(R("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",T))}),b(Q.prototype,"slice",function(T,w){var x,q,D,U,X,mt,it;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(X=this._buffer,mt=this._length,arguments.length===0)T=0,w=mt;else{if(!v(T))throw new TypeError(R("invalid argument. First argument must be an integer. Value: `%s`.",T));if(T<0&&(T+=mt,T<0&&(T=0)),arguments.length===1)w=mt;else{if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0?(w+=mt,w<0&&(w=0)):w>mt&&(w=mt)}}for(T<w?x=w-T:x=0,D=new this.constructor(x),q=D._buffer,it=0;it<x;it++)U=2*(it+T),q[2*it]=X[U],q[2*it+1]=X[U+1];return D}),b(Q.prototype,"some",function(T,w){var x,q;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!f(T))throw new TypeError(R("invalid argument. First argument must be a function. Value: `%s`.",T));for(x=this._buffer,q=0;q<this._length;q++)if(T.call(w,ot(x,q),q,this))return!0;return!1}),b(Q.prototype,"subarray",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(q=this._buffer,D=this._length,arguments.length===0)T=0,w=D;else{if(!v(T))throw new TypeError(R("invalid argument. First argument must be an integer. Value: `%s`.",T));if(T<0&&(T+=D,T<0&&(T=0)),arguments.length===1)w=D;else{if(!v(w))throw new TypeError(R("invalid argument. Second argument must be an integer. Value: `%s`.",w));w<0?(w+=D,w<0&&(w=0)):w>D&&(w=D)}}return T>=D?(D=0,x=q.byteLength):T>=w?(D=0,x=q.byteOffset+T*ft):(D=w-T,x=q.byteOffset+T*ft),new this.constructor(q.buffer,x,D<0?0:D)}),b(Q.prototype,"toReversed",function(){var T,w,x,q,D,U;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(x=this._length,w=new this.constructor(x),q=this._buffer,T=w._buffer,D=0;D<x;D++)U=x-D-1,T[2*D]=q[2*U],T[2*D+1]=q[2*U+1];return w}),b(Q.prototype,"toString",function(){var T,w,x;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(T=[],w=this._buffer,x=0;x<this._length;x++)T.push(ot(w,x).toString());return T.join(",")}),b(Q.prototype,"with",function(T,w){var x,q,D;if(!P(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!v(T))throw new TypeError(R("invalid argument. First argument must be an integer. Value: `%s`.",T));if(D=this._length,T<0&&(T+=D),T<0||T>=D)throw new RangeError(R("invalid argument. Index argument is out-of-bounds. Value: `%s`.",T));if(!h(w))throw new TypeError(R("invalid argument. Second argument must be a complex number. Value: `%s`.",w));return q=new this.constructor(this._buffer),x=q._buffer,x[2*T]=_(w),x[2*T+1]=N(w),q}),ny=Q,ny}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iy,u$;function k2(){if(u$)return iy;u$=1;var t=Fj();return iy=t,iy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ay,l$;function Xj(){if(l$)return ay;l$=1;var t=Sn(),e=Uo(),n=Oi(),a=D2(),s=Qc(),l=N2(),c=Wc(),f=B2(),h=j2(),p=U2(),v=k2(),g=[t,e,a,n,l,s,h,c,f,p,v];return ay=g,ay}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oy,c$;function Ij(){if(c$)return oy;c$=1;var t=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];return oy=t,oy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sy,f$;function Kj(){if(f$)return sy;f$=1;var t=j_(),e=Ou(),n=Vo(),a=FN(),s=Xj(),l=Ij(),c=l.length;function f(h){var p;if(e(h))return"generic";if(t(h))return null;for(p=0;p<c;p++)if(h instanceof s[p])return l[p];return a[n(h)]||null}return sy=f,sy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uy,d$;function Zj(){if(d$)return uy;d$=1;var t=Kj();return uy=t,uy}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ly,h$;function Qj(){if(h$)return ly;h$=1;var t=PN(),e=q2(),n=kN(),a=L2(),s=YN(),l=Zj();function c(f){var h=l(f);return t(f)?{data:f,dtype:h,accessorProtocol:!0,accessors:[a(h),s(h)]}:{data:f,dtype:h,accessorProtocol:!1,accessors:[e(h),n(h)]}}return ly=c,ly}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cy,p$;function iC(){if(p$)return cy;p$=1;var t=Qj();return cy=t,cy}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fy,m$;function aC(){if(m$)return fy;m$=1;function t(e,n,a,s,l,c,f){var h,p,v,g,S,y,A;for(h=n.data,p=l.data,g=n.accessors[0],v=l.accessors[1],S=s,y=f,A=0;A<e;A++)v(p,y,g(h,S)),S+=a,y+=c;return n}return fy=t,fy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dy,v$;function Wj(){if(v$)return dy;v$=1;var t=iC(),e=aC(),n=8;function a(s,l,c,f,h){var p,v,g,S,y,A;if(s<=0)return f;if(g=t(l),S=t(f),g.accessorProtocol||S.accessorProtocol)return c<0?p=(1-s)*c:p=0,h<0?v=(1-s)*h:v=0,e(s,g,c,p,S,h,v),S.data;if(c===1&&h===1){if(y=s%n,y>0)for(A=0;A<y;A++)f[A]=l[A];if(s<n)return f;for(A=y;A<s;A+=n)f[A]=l[A],f[A+1]=l[A+1],f[A+2]=l[A+2],f[A+3]=l[A+3],f[A+4]=l[A+4],f[A+5]=l[A+5],f[A+6]=l[A+6],f[A+7]=l[A+7];return f}for(c<0?p=(1-s)*c:p=0,h<0?v=(1-s)*h:v=0,A=0;A<s;A++)f[v]=l[p],p+=c,v+=h;return f}return dy=a,dy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hy,g$;function Jj(){if(g$)return hy;g$=1;var t=iC(),e=aC(),n=8;function a(s,l,c,f,h,p,v){var g,S,y,A,b,M;if(s<=0)return h;if(y=t(l),A=t(h),y.accessorProtocol||A.accessorProtocol)return e(s,y,c,f,A,p,v),A.data;if(g=f,S=v,c===1&&p===1){if(b=s%n,b>0)for(M=0;M<b;M++)h[S]=l[g],g+=c,S+=p;if(s<n)return h;for(M=b;M<s;M+=n)h[S]=l[g],h[S+1]=l[g+1],h[S+2]=l[g+2],h[S+3]=l[g+3],h[S+4]=l[g+4],h[S+5]=l[g+5],h[S+6]=l[g+6],h[S+7]=l[g+7],g+=n,S+=n;return h}for(M=0;M<s;M++)h[S]=l[g],g+=c,S+=p;return h}return hy=a,hy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var py,y$;function tV(){if(y$)return py;y$=1;var t=te(),e=Wj(),n=Jj();return t(e,"ndarray",n),py=e,py}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var my,b$;function eV(){if(b$)return my;b$=1;function t(){}return my=t,my}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vy,S$;function rV(){if(S$)return vy;S$=1;var t=eV();function e(){return t.name==="foo"}return vy=e,vy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gy,T$;function nV(){if(T$)return gy;T$=1;var t=rV();return gy=t,gy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yy,w$;function iV(){if(w$)return yy;w$=1;var t=$i(),e=nV(),n=ve(),a=B_().REGEXP,s=e();function l(c){if(t(c)===!1)throw new TypeError(n("invalid argument. Must provide a function. Value: `%s`.",c));return s?c.name:a.exec(c.toString())[1]}return yy=l,yy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var by,E$;function aV(){if(E$)return by;E$=1;var t=iV();return by=t,by}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sy,A$;function oV(){if(A$)return Sy;A$=1;var t=j2(),e=Wc(),n=B2(),a=N2(),s=Qc(),l=D2(),c=Oi(),f=Uo(),h=Sn(),p=[h,f,l,c,a,s,t,e,n];return Sy=p,Sy}const sV=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ty,R$;function uV(){if(R$)return Ty;R$=1;var t=Vo(),e=aV(),n=Xc(),a=Y_(),s=Sn(),l=oV(),c=sV,f=a()?n(s):h;f=e(f)==="TypedArray"?f:h;function h(){}function p(v){var g,S;if(typeof v!="object"||v===null)return!1;if(v instanceof f)return!0;for(S=0;S<l.length;S++)if(v instanceof l[S])return!0;for(;v;){for(g=t(v),S=0;S<c.length;S++)if(c[S]===g)return!0;v=n(v)}return!1}return Ty=p,Ty}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wy,x$;function lV(){if(x$)return wy;x$=1;var t=uV();return wy=t,wy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ey,M$;function cV(){if(M$)return Ey;M$=1;var t=U2(),e=k2(),n=[e,t];return Ey=n,Ey}const fV=["Complex64Array","Complex128Array"];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ay,$$;function dV(){if($$)return Ay;$$=1;var t=Vo(),e=Xc(),n=cV(),a=fV;function s(l){var c,f;if(typeof l!="object"||l===null)return!1;for(f=0;f<n.length;f++)if(l instanceof n[f])return!0;for(;l;){for(c=t(l),f=0;f<a.length;f++)if(a[f]===c)return!0;l=e(l)}return!1}return Ay=s,Ay}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ry,O$;function hV(){if(O$)return Ry;O$=1;var t=dV();return Ry=t,Ry}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xy,_$;function pV(){if(_$)return xy;_$=1;var t=ve();function e(n,a){if(typeof a!="function")throw new TypeError(t("invalid argument. Second argument must be callable. Value: `%s`.",a));return n instanceof a}return xy=e,xy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var My,C$;function mV(){if(C$)return My;C$=1;var t=pV();return My=t,My}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $y,q$;function vV(){if(q$)return $y;q$=1;var t=j2(),e=Wc(),n=B2(),a=N2(),s=Qc(),l=D2(),c=Oi(),f=Uo(),h=Sn(),p=U2(),v=k2(),g=[[h,"Float64Array"],[f,"Float32Array"],[l,"Int32Array"],[c,"Uint32Array"],[a,"Int16Array"],[s,"Uint16Array"],[t,"Int8Array"],[e,"Uint8Array"],[n,"Uint8ClampedArray"],[p,"Complex64Array"],[v,"Complex128Array"]];return $y=g,$y}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oy,L$;function gV(){if(L$)return Oy;L$=1;var t=mV(),e=Vo(),n=Xc(),a=vV();function s(l){var c,f;for(f=0;f<a.length;f++)if(t(l,a[f][0]))return a[f][1];for(;l;){for(c=e(l),f=0;f<a.length;f++)if(c===a[f][1])return a[f][1];l=n(l)}}return Oy=s,Oy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _y,D$;function yV(){if(D$)return _y;D$=1;var t=lV(),e=hV(),n=P2(),a=z2(),s=ve(),l=gV();function c(f){var h,p,v;if(t(f))h=f;else if(e(f))f.BYTES_PER_ELEMENT===8?h=n(f,0):h=a(f,0);else throw new TypeError(s("invalid argument. Must provide a typed array. Value: `%s`.",f));for(p={type:l(f),data:[]},v=0;v<h.length;v++)p.data.push(h[v]);return p}return _y=c,_y}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cy,N$;function nf(){if(N$)return Cy;N$=1;var t=yV();return Cy=t,Cy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qy,B$;function oC(){if(B$)return qy;B$=1;var t=Zc(),e=Po(),n=t-1;function a(){var s=e(1+n*Math.random());return s>>>0}return qy=a,qy}var Ly,j$;function sC(){if(j$)return Ly;j$=1;var t=te(),e=jo(),n=Yc(),a=ya(),s=Ic(),l=_2(),c=O2(),f=x2().isPrimitive,h=AN().isPrimitive,p=RN(),v=Zc(),g=Oi(),S=NN(),y=jN(),A=tV(),b=nf(),M=ve(),$=oC(),B=624,_=397,N=v>>>0,L=19650218,k=2147483648,j=2147483647,H=1812433253,rt=1664525,R=1566083941,Y=2636928640,et=4022730752,ct=2567483615,ft=[0,ct>>>0],dt=1/(p+1),P=67108864,tt=2147483648,ot=1,Q=p*dt,C=1,T=3,w=2,x=B+3,q=B+5,D=B+6;function U(ut,W){var pt;return W?pt="option":pt="argument",ut.length<D+1?new RangeError(M("invalid %s. `state` array has insufficient length.",pt)):ut[0]!==C?new RangeError(M("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",pt,C,ut[0])):ut[1]!==T?new RangeError(M("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",pt,T,ut[1])):ut[w]!==B?new RangeError(M("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",pt,B,ut[w])):ut[x]!==1?new RangeError(M("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",pt,1,ut[x])):ut[q]!==ut.length-D?new RangeError(M("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",pt,ut.length-D,ut[q])):null}function X(ut,W,pt){var Bt;for(ut[0]=pt>>>0,Bt=1;Bt<W;Bt++)pt=ut[Bt-1]>>>0,pt=(pt^pt>>>30)>>>0,ut[Bt]=y(pt,H)+Bt>>>0;return ut}function mt(ut,W,pt,Bt){var yt,Gt,Ht,Ce;for(Gt=1,Ht=0,Ce=S(W,Bt);Ce>0;Ce--)yt=ut[Gt-1]>>>0,yt=(yt^yt>>>30)>>>0,yt=y(yt,rt)>>>0,ut[Gt]=(ut[Gt]>>>0^yt)+pt[Ht]+Ht>>>0,Gt+=1,Ht+=1,Gt>=W&&(ut[0]=ut[W-1],Gt=1),Ht>=Bt&&(Ht=0);for(Ce=W-1;Ce>0;Ce--)yt=ut[Gt-1]>>>0,yt=(yt^yt>>>30)>>>0,yt=y(yt,R)>>>0,ut[Gt]=(ut[Gt]>>>0^yt)-Gt>>>0,Gt+=1,Gt>=W&&(ut[0]=ut[W-1],Gt=1);return ut[0]=tt,ut}function it(ut){var W,pt,Bt,yt;for(yt=B-_,pt=0;pt<yt;pt++)W=ut[pt]&k|ut[pt+1]&j,ut[pt]=ut[pt+_]^W>>>1^ft[W&ot];for(Bt=B-1;pt<Bt;pt++)W=ut[pt]&k|ut[pt+1]&j,ut[pt]=ut[pt-yt]^W>>>1^ft[W&ot];return W=ut[Bt]&k|ut[0]&j,ut[Bt]=ut[_-1]^W>>>1^ft[W&ot],ut}function Et(ut){var W,pt,Bt,yt,Gt,Ht;if(Bt={},arguments.length){if(!s(ut))throw new TypeError(M("invalid argument. Options argument must be an object. Value: `%s`.",ut));if(a(ut,"copy")&&(Bt.copy=ut.copy,!f(ut.copy)))throw new TypeError(M("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",ut.copy));if(a(ut,"state")){if(pt=ut.state,Bt.state=!0,!c(pt))throw new TypeError(M("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",pt));if(Ht=U(pt,!0),Ht)throw Ht;Bt.copy===!1?W=pt:(W=new g(pt.length),A(pt.length,pt,1,W,1)),pt=new g(W.buffer,W.byteOffset+(w+1)*W.BYTES_PER_ELEMENT,B),yt=new g(W.buffer,W.byteOffset+(q+1)*W.BYTES_PER_ELEMENT,pt[q])}if(yt===void 0)if(a(ut,"seed"))if(yt=ut.seed,Bt.seed=!0,h(yt)){if(yt>N)throw new RangeError(M("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",yt));yt>>>=0}else{if(l(yt)===!1||yt.length<1)throw new TypeError(M("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",yt));if(yt.length===1){if(yt=yt[0],!h(yt))throw new TypeError(M("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",yt));if(yt>N)throw new RangeError(M("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",yt));yt>>>=0}else Gt=yt.length,W=new g(D+Gt),W[0]=C,W[1]=T,W[w]=B,W[x]=1,W[x+1]=B,W[q]=Gt,A.ndarray(Gt,yt,1,0,W,1,q+1),pt=new g(W.buffer,W.byteOffset+(w+1)*W.BYTES_PER_ELEMENT,B),yt=new g(W.buffer,W.byteOffset+(q+1)*W.BYTES_PER_ELEMENT,Gt),pt=X(pt,B,L),pt=mt(pt,B,yt,Gt)}else yt=$()>>>0}else yt=$()>>>0;return pt===void 0&&(W=new g(D+1),W[0]=C,W[1]=T,W[w]=B,W[x]=1,W[x+1]=B,W[q]=1,W[q+1]=yt,pt=new g(W.buffer,W.byteOffset+(w+1)*W.BYTES_PER_ELEMENT,B),yt=new g(W.buffer,W.byteOffset+(q+1)*W.BYTES_PER_ELEMENT,1),pt=X(pt,B,yt)),t(le,"NAME","mt19937"),e(le,"seed",Ce),e(le,"seedLength",Xr),n(le,"state",en,Ir),e(le,"stateLength",ke),e(le,"byteLength",Ze),t(le,"toJSON",rn),t(le,"MIN",0),t(le,"MAX",v),t(le,"normalized",ge),t(ge,"NAME",le.NAME),e(ge,"seed",Ce),e(ge,"seedLength",Xr),n(ge,"state",en,Ir),e(ge,"stateLength",ke),e(ge,"byteLength",Ze),t(ge,"toJSON",rn),t(ge,"MIN",0),t(ge,"MAX",Q),le;function Ce(){var bt=W[q];return A(bt,yt,1,new g(bt),1)}function Xr(){return W[q]}function ke(){return W.length}function Ze(){return W.byteLength}function en(){var bt=W.length;return A(bt,W,1,new g(bt),1)}function Ir(bt){var re;if(!c(bt))throw new TypeError(M("invalid argument. Must provide a Uint32Array. Value: `%s`.",bt));if(re=U(bt,!1),re)throw re;Bt.copy===!1?Bt.state&&bt.length===W.length?A(bt.length,bt,1,W,1):(W=bt,Bt.state=!0):(bt.length!==W.length&&(W=new g(bt.length)),A(bt.length,bt,1,W,1)),pt=new g(W.buffer,W.byteOffset+(w+1)*W.BYTES_PER_ELEMENT,B),yt=new g(W.buffer,W.byteOffset+(q+1)*W.BYTES_PER_ELEMENT,W[q])}function rn(){var bt={};return bt.type="PRNG",bt.name=le.NAME,bt.state=b(W),bt.params=[],bt}function le(){var bt,re;return re=W[x+1],re>=B&&(pt=it(pt),re=0),bt=pt[re],W[x+1]=re+1,bt^=bt>>>11,bt^=bt<<7&Y,bt^=bt<<15&et,bt^=bt>>>18,bt>>>0}function ge(){var bt=le()>>>5,re=le()>>>6;return(bt*P+re)*dt}}return Ly=Et,Ly}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dy,V$;function bV(){if(V$)return Dy;V$=1;var t=sC(),e=oC(),n=t({seed:e()});return Dy=n,Dy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ny,P$;function uC(){if(P$)return Ny;P$=1;var t=te(),e=bV(),n=sC();return t(e,"factory",n),Ny=e,Ny}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var By,z$;function SV(){if(z$)return By;z$=1;function t(e){return Math.abs(e)}return By=t,By}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jy,U$;function lC(){if(U$)return jy;U$=1;var t=SV();return jy=t,jy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vy,k$;function TV(){if(k$)return Vy;k$=1;var t=Math.ceil;return Vy=t,Vy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Py,G$;function wV(){if(G$)return Py;G$=1;var t=TV();return Py=t,Py}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zy,H$;function EV(){if(H$)return zy;H$=1;var t=Po(),e=wV();function n(a){return a<0?e(a):t(a)}return zy=n,zy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uy,Y$;function AV(){if(Y$)return Uy;Y$=1;var t=EV();return Uy=t,Uy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ky,F$;function G2(){if(F$)return ky;F$=1;var t=1023;return ky=t,ky}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gy,X$;function RV(){if(X$)return Gy;X$=1;var t=1023;return Gy=t,Gy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hy,I$;function xV(){if(I$)return Hy;I$=1;var t=-1023;return Hy=t,Hy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yy,K$;function MV(){if(K$)return Yy;K$=1;var t=-1074;return Yy=t,Yy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fy,Z$;function $V(){if(Z$)return Fy;Z$=1;var t=ba(),e=_u();function n(a){return a===t||a===e}return Fy=n,Fy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xy,Q$;function cC(){if(Q$)return Xy;Q$=1;var t=$V();return Xy=t,Xy}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iy,W$;function OV(){if(W$)return Iy;W$=1;var t=2147483648;return Iy=t,Iy}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ky,J$;function _V(){if(J$)return Ky;J$=1;var t=2147483647;return Ky=t,Ky}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zy,t6;function CV(){if(t6)return Zy;t6=1;var t=Wc(),e=Qc(),n={uint16:e,uint8:t};return Zy=n,Zy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qy,e6;function qV(){if(e6)return Qy;e6=1;var t=CV(),e;function n(){var a,s;return a=new t.uint16(1),a[0]=4660,s=new t.uint8(a.buffer),s[0]===52}return e=n(),Qy=e,Qy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wy,r6;function af(){if(r6)return Wy;r6=1;var t=qV();return Wy=t,Wy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jy,n6;function LV(){if(n6)return Jy;n6=1;var t=af(),e,n,a;return t===!0?(n=1,a=0):(n=0,a=1),e={HIGH:n,LOW:a},Jy=e,Jy}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t1,i6;function fC(){if(i6)return t1;i6=1;var t=Oi(),e=Sn(),n=LV(),a=new e(1),s=new t(a.buffer),l=n.HIGH,c=n.LOW;function f(h,p,v,g){return a[0]=h,p[g]=s[l],p[g+v]=s[c],p}return t1=f,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,a6;function DV(){if(a6)return e1;a6=1;var t=fC();function e(n){return t(n,[0,0],1,0)}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r1,o6;function dC(){if(o6)return r1;o6=1;var t=te(),e=DV(),n=fC();return t(e,"assign",n),r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,s6;function NV(){if(s6)return n1;s6=1;var t=af(),e;return t===!0?e=1:e=0,n1=e,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i1,u6;function BV(){if(u6)return i1;u6=1;var t=Oi(),e=Sn(),n=NV(),a=new e(1),s=new t(a.buffer);function l(c){return a[0]=c,s[n]}return i1=l,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a1,l6;function H2(){if(l6)return a1;l6=1;var t=BV();return a1=t,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,c6;function jV(){if(c6)return o1;c6=1;var t=af(),e,n,a;return t===!0?(n=1,a=0):(n=0,a=1),e={HIGH:n,LOW:a},o1=e,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s1,f6;function VV(){if(f6)return s1;f6=1;var t=Oi(),e=Sn(),n=jV(),a=new e(1),s=new t(a.buffer),l=n.HIGH,c=n.LOW;function f(h,p){return s[l]=h,s[c]=p,a[0]}return s1=f,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,d6;function hC(){if(d6)return u1;d6=1;var t=VV();return u1=t,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,h6;function PV(){if(h6)return l1;h6=1;var t=OV(),e=_V(),n=dC(),a=H2(),s=hC(),l=[0,0];function c(f,h){var p,v;return n.assign(f,l,1,0),p=l[0],p&=e,v=a(h),v&=t,p|=v,s(p,l[1])}return l1=c,l1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c1,p6;function zV(){if(p6)return c1;p6=1;var t=PV();return c1=t,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f1,m6;function UV(){if(m6)return f1;m6=1;var t=22250738585072014e-324;return f1=t,f1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d1,v6;function pC(){if(v6)return d1;v6=1;var t=UV(),e=cC(),n=In(),a=lC(),s=4503599627370496;function l(c,f,h,p){return n(c)||e(c)?(f[p]=c,f[p+h]=0,f):c!==0&&a(c)<t?(f[p]=c*s,f[p+h]=-52,f):(f[p]=c,f[p+h]=0,f)}return d1=l,d1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h1,g6;function kV(){if(g6)return h1;g6=1;var t=pC();function e(n){return t(n,[0,0],1,0)}return h1=e,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p1,y6;function GV(){if(y6)return p1;y6=1;var t=te(),e=kV(),n=pC();return t(e,"assign",n),p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m1,b6;function HV(){if(b6)return m1;b6=1;var t=2146435072;return m1=t,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,S6;function YV(){if(S6)return v1;S6=1;var t=H2(),e=HV(),n=G2();function a(s){var l=t(s);return l=(l&e)>>>20,l-n|0}return v1=a,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g1,T6;function FV(){if(T6)return g1;T6=1;var t=YV();return g1=t,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,w6;function XV(){if(w6)return y1;w6=1;var t=ba(),e=_u(),n=G2(),a=RV(),s=xV(),l=MV(),c=In(),f=cC(),h=zV(),p=GV().assign,v=FV(),g=dC(),S=hC(),y=2220446049250313e-31,A=2148532223,b=[0,0],M=[0,0];function $(B,_){var N,L;return _===0||B===0||c(B)||f(B)?B:(p(B,b,1,0),B=b[0],_+=b[1],_+=v(B),_<l?h(0,B):_>a?B<0?e:t:(_<=s?(_+=52,L=y):L=1,g.assign(B,M,1,0),N=M[0],N&=A,N|=_+n<<20,L*S(N,M[1])))}return y1=$,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,E6;function IV(){if(E6)return b1;E6=1;var t=XV();return b1=t,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,A6;function KV(){if(A6)return S1;A6=1;function t(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return S1=t,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var T1,R6;function ZV(){if(R6)return T1;R6=1;var t=IV(),e=KV();function n(a,s,l){var c,f,h,p;return c=a-s,f=c*c,h=c-f*e(f),p=1-(s-c*h/(2-h)-a),t(p,l)}return T1=n,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var w1,x6;function QV(){if(x6)return w1;x6=1;var t=In(),e=AV(),n=_u(),a=ba(),s=ZV(),l=.6931471803691238,c=19082149292705877e-26,f=1.4426950408889634,h=709.782712893384,p=-745.1332191019411,v=1/(1<<28),g=-3725290298461914e-24;function S(y){var A,b,M;return t(y)||y===a?y:y===n?0:y>h?a:y<p?0:y>g&&y<v?1+y:(y<0?M=e(f*y-.5):M=e(f*y+.5),A=y-M*l,b=M*c,s(A,b,M))}return w1=S,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,M6;function mC(){if(M6)return E1;M6=1;var t=QV();return E1=t,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A1,$6;function WV(){if($6)return A1;$6=1;var t=Math.sqrt;return A1=t,A1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R1,O6;function JV(){if(O6)return R1;O6=1;var t=WV();return R1=t,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,_6;function tP(){if(_6)return x1;_6=1;var t=af(),e;return t===!0?e=1:e=0,x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,C6;function eP(){if(C6)return M1;C6=1;var t=Oi(),e=Sn(),n=tP(),a=new e(1),s=new t(a.buffer);function l(c,f){return a[0]=c,s[n]=f>>>0,a[0]}return M1=l,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $1,q6;function rP(){if(q6)return $1;q6=1;var t=eP();return $1=t,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O1,L6;function nP(){if(L6)return O1;L6=1;function t(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return O1=t,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _1,D6;function iP(){if(D6)return _1;D6=1;function t(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return _1=t,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var C1,N6;function aP(){if(N6)return C1;N6=1;var t=H2(),e=rP(),n=In(),a=G2(),s=_u(),l=nP(),c=iP(),f=.6931471803691238,h=19082149292705877e-26,p=0x40000000000000,v=.3333333333333333,g=1048575,S=2146435072,y=1048576,A=1072693248;function b(M){var $,B,_,N,L,k,j,H,rt,R,Y,et;return M===0?s:n(M)||M<0?NaN:(B=t(M),L=0,B<y&&(L-=54,M*=p,B=t(M)),B>=S?M+M:(L+=(B>>20)-a|0,B&=g,H=B+614244&1048576|0,M=e(M,B|H^A),L+=H>>20|0,j=M-1,(g&2+B)<3?j===0?L===0?0:L*f+L*h:(k=j*j*(.5-v*j),L===0?j-k:L*f-(k-L*h-j)):(R=j/(2+j),et=R*R,H=B-398458|0,Y=et*et,rt=440401-B|0,N=Y*l(Y),_=et*c(Y),H|=rt,k=_+N,H>0?($=.5*j*j,L===0?j-($-R*($+k)):L*f-($-(R*($+k)+L*h)-j)):L===0?j-R*(j-k):L*f-(R*(j-k)-L*h-j))))}return C1=b,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,B6;function vC(){if(B6)return q1;B6=1;var t=aP();return q1=t,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L1,j6;function oP(){if(j6)return L1;j6=1;var t=JV(),e=mC(),n=vC(),a=.00991256303526217;function s(l,c){var f,h,p;for(h=e(-.5*c*c),f=[],f.push(a/h),f.push(c),p=2;p<l;p++)f[p]=t(-2*n(a/f[p-1]+h)),h=e(-.5*f[p]*f[p]);return f.push(0),f}return L1=s,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D1,V6;function sP(){if(V6)return D1;V6=1;function t(e){var n,a;for(n=[],a=0;a<e.length-1;a++)n.push(e[a+1]/e[a]);return n}return D1=t,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,P6;function uP(){if(P6)return N1;P6=1;var t=vC();function e(n,a,s){var l,c;do l=t(n())/a,c=t(n());while(-2*c<l*l);return s?l-a:a-l}return N1=e,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,z6;function lP(){if(z6)return B1;z6=1;var t=lC(),e=mC(),n=oP(),a=sP(),s=uP(),l=128,c=3.442619855899,f=n(l,c),h=a(f),p=127;function v(g,S){return y;function y(){for(var A,b,M,$,B,_,N;;){if(B=2*g()-1,_=S()&p,t(B)<h[_])return B*f[_];if(_===0)return s(g,c,B<0);if($=B*f[_],M=$*$,N=_+1,A=e(-.5*(f[_]*f[_]-M)),b=e(-.5*(f[N]*f[N]-M)),b+g()*(A-b)<1)return $}}}return B1=v,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,U6;function gC(){if(U6)return j1;U6=1;var t=te(),e=jo(),n=Yc(),a=$i(),s=Ic(),l=x2().isPrimitive,c=ya(),f=O2(),h=uC().factory,p=M2(),v=$2(),g=Po(),S=Zc(),y=nf(),A=ve(),b=lP();function M($){var B,_,N,L;if(L={copy:!0},arguments.length){if(!s($))throw new TypeError(A("invalid argument. Must provide an object. Value: `%s`.",$));if(c($,"copy")&&(L.copy=$.copy,!l($.copy)))throw new TypeError(A("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",$.copy));if(c($,"prng")){if(!a($.prng))throw new TypeError(A("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",$.prng));B=$.prng}else if(c($,"state")){if(L.state=$.state,!f($.state))throw new TypeError(A("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",$.state))}else if(c($,"seed")&&(L.seed=$.seed,$.seed===void 0))throw new TypeError(A("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",$.seed))}return L.state===void 0?B===void 0?(_=h(L),B=_.normalized):(_=h({seed:g(1+S*B()),copy:L.copy}),L.seed=null):(_=h(L),B=_.normalized),N=b(B,_),t(N,"NAME","improved-ziggurat"),L.seed===null?(t(N,"seed",null),t(N,"seedLength",null)):(e(N,"seed",k),e(N,"seedLength",j)),$&&$.prng?(n(N,"state",p(null),v),t(N,"stateLength",null),t(N,"byteLength",null),t(N,"toJSON",p(null))):(n(N,"state",R,Y),e(N,"stateLength",H),e(N,"byteLength",rt),t(N,"toJSON",et)),t(N,"PRNG",B),N;function k(){return _.seed}function j(){return _.seedLength}function H(){return _.stateLength}function rt(){return _.byteLength}function R(){return _.state}function Y(ct){_.state=ct}function et(){var ct={};return ct.type="PRNG",ct.name=N.NAME,ct.state=y(_.state),ct.params=[],ct}}return j1=M,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V1,k6;function cP(){if(k6)return V1;k6=1;var t=gC(),e=t();return V1=e,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,G6;function fP(){if(G6)return P1;G6=1;var t=te(),e=cP(),n=gC();return t(e,"factory",n),P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,H6;function yC(){if(H6)return z1;H6=1;var t=Hr().isPrimitive;function e(n){return t(n)&&n>0}return z1=e,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,Y6;function bC(){if(Y6)return U1;Y6=1;var t=Hr().isObject;function e(n){return t(n)&&n.valueOf()>0}return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,F6;function dP(){if(F6)return k1;F6=1;var t=yC(),e=bC();function n(a){return t(a)||e(a)}return k1=n,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,X6;function hP(){if(X6)return G1;X6=1;var t=te(),e=dP(),n=yC(),a=bC();return t(e,"isPrimitive",n),t(e,"isObject",a),G1=e,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,I6;function SC(){if(I6)return H1;I6=1;var t=Hr().isPrimitive,e=In();function n(a){return t(a)&&e(a)}return H1=n,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,K6;function TC(){if(K6)return Y1;K6=1;var t=Hr().isObject,e=In();function n(a){return t(a)&&e(a.valueOf())}return Y1=n,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F1,Z6;function pP(){if(Z6)return F1;Z6=1;var t=SC(),e=TC();function n(a){return t(a)||e(a)}return F1=n,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X1,Q6;function wC(){if(Q6)return X1;Q6=1;var t=te(),e=pP(),n=SC(),a=TC();return t(e,"isPrimitive",n),t(e,"isObject",a),X1=e,X1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,W6;function mP(){if(W6)return I1;W6=1;var t=Hr().isPrimitive,e=hP().isPrimitive,n=ve(),a=wC();function s(l,c){return!t(l)||a(l)?new TypeError(n("invalid argument. First argument must be a number and not NaN. Value: `%s`.",l)):e(c)?null:new TypeError(n("invalid argument. Second argument must be a positive number. Value: `%s`.",c))}return I1=s,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K1,J6;function vP(){if(J6)return K1;J6=1;function t(e,n,a){return n+a*e()}return K1=t,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,t4;function EC(){if(t4)return Z1;t4=1;var t=te(),e=jo(),n=Yc(),a=Ic(),s=$i(),l=ya(),c=M2(),f=$2(),h=fP().factory,p=In(),v=nf(),g=ve(),S=mP(),y=vP();function A(){var b,M,$,B,_,N,L;if(arguments.length===0)M=h();else if(arguments.length===1){if($=arguments[0],!a($))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",$));if(l($,"prng")){if(!s($.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",$.prng));M=h({prng:$.prng})}else M=h($)}else{if(L=arguments[0],b=arguments[1],N=S(L,b),N)throw N;if(arguments.length>2){if($=arguments[2],!a($))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",$));if(l($,"prng")){if(!s($.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",$.prng));M=h({prng:$.prng})}else M=h($)}else M=h()}return L===void 0?_=ft:_=ct,B=M.PRNG,t(_,"NAME","normal"),$&&$.prng?(t(_,"seed",null),t(_,"seedLength",null),n(_,"state",c(null),f),t(_,"stateLength",null),t(_,"byteLength",null),t(_,"toJSON",c(null))):(e(_,"seed",k),e(_,"seedLength",j),n(_,"state",R,Y),e(_,"stateLength",H),e(_,"byteLength",rt),t(_,"toJSON",et)),t(_,"PRNG",B),_;function k(){return B.seed}function j(){return B.seedLength}function H(){return B.stateLength}function rt(){return B.byteLength}function R(){return B.state}function Y(dt){B.state=dt}function et(){var dt={};return dt.type="PRNG",dt.name=_.NAME,dt.state=v(B.state),L===void 0?dt.params=[]:dt.params=[L,b],dt}function ct(){return y(M,L,b)}function ft(dt,P){return p(dt)||p(P)||P<=0?NaN:y(M,dt,P)}}return Z1=A,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,e4;function gP(){if(e4)return Q1;e4=1;var t=EC(),e=t();return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W1,r4;function yP(){if(r4)return W1;r4=1;var t=te(),e=gP(),n=EC();return t(e,"factory",n),W1=e,W1}var bP=yP();const SP=Hc(bP);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,n4;function TP(){if(n4)return J1;n4=1;var t=Hr().isPrimitive,e=ve(),n=wC();function a(s,l){return!t(s)||n(s)?new TypeError(e("invalid argument. First argument must be a number and not NaN. Value: `%s`.",s)):!t(l)||n(l)?new TypeError(e("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",l)):s>=l?new RangeError(e("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",s,l)):null}return J1=a,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tb,i4;function wP(){if(i4)return tb;i4=1;function t(e,n,a){var s=e();return a*s+(1-s)*n}return tb=t,tb}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eb,a4;function AC(){if(a4)return eb;a4=1;var t=te(),e=jo(),n=Yc(),a=Ic(),s=$i(),l=ya(),c=M2(),f=$2(),h=uC().factory,p=In(),v=nf(),g=ve(),S=TP(),y=wP();function A(){var b,M,$,B,_,N;if(arguments.length===0)M=h();else if(arguments.length===1){if(b=arguments[0],!a(b))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",b));if(l(b,"prng")){if(!s(b.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",b.prng));M=b.prng}else M=h(b)}else{if(_=arguments[0],N=arguments[1],B=S(_,N),B)throw B;if(arguments.length>2){if(b=arguments[2],!a(b))throw new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",b));if(l(b,"prng")){if(!s(b.prng))throw new TypeError(g("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",b.prng));M=b.prng}else M=h(b)}else M=h()}return _===void 0?$=ct:$=et,t($,"NAME","uniform"),b&&b.prng?(t($,"seed",null),t($,"seedLength",null),n($,"state",c(null),f),t($,"stateLength",null),t($,"byteLength",null),t($,"toJSON",c(null)),t($,"PRNG",M)):(e($,"seed",L),e($,"seedLength",k),n($,"state",rt,R),e($,"stateLength",j),e($,"byteLength",H),t($,"toJSON",Y),t($,"PRNG",M),M=M.normalized),$;function L(){return M.seed}function k(){return M.seedLength}function j(){return M.stateLength}function H(){return M.byteLength}function rt(){return M.state}function R(ft){M.state=ft}function Y(){var ft={};return ft.type="PRNG",ft.name=$.NAME,ft.state=v(M.state),_===void 0?ft.params=[]:ft.params=[_,N],ft}function et(){return y(M,_,N)}function ct(ft,dt){return p(ft)||p(dt)||ft>=dt?NaN:y(M,ft,dt)}}return eb=A,eb}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rb,o4;function EP(){if(o4)return rb;o4=1;var t=AC(),e=t();return rb=e,rb}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nb,s4;function AP(){if(s4)return nb;s4=1;var t=te(),e=EP(),n=AC();return t(e,"factory",n),nb=e,nb}var RP=AP();const xP=Hc(RP),RC=(t,e,n,a,s)=>{let l;if(t==="normal"){if(e===void 0||n===void 0)throw new Error("Mean and std are required for normal distribution");l=SP(e,n)}else if(t==="uniform"){if(a===void 0||s===void 0)throw new Error("Min and max are required for uniform distribution");l=xP(a,s)}else throw new Error("Distribution not implemented");return l},MP=(t,e)=>{const{trueMeanMin:n,trueMeanMax:a}=t?e.xsBoundsSettings:e.boundsSettings,s=RC("uniform",void 0,void 0,n,a);return Math.round(s*10)/10},ib=(t,e)=>{const n=e.dataIntervalInMS*Math.pow(e.dataIntervalInterTurnDecay,t);return console.log(`Base interval: ${n}`),n*(1-Math.pow(e.dataIntervalIntraTurnDecay,e.maxPoints))/(1-e.dataIntervalIntraTurnDecay)+e.dataPointFallDurationInMS},xC=(t,e)=>Math.max(e.initialGuessInterval*Math.pow(e.guessIntervalDecay,t),e.minGuessInterval),$P=(t,e,n,a)=>{const{windowMin:s,windowMax:l}=n?a.xsBoundsSettings:a.boundsSettings,c=xC(e,a),f=[t];for(let p=t-c;p>s;p-=c)f.push(p);const h=f.length-1;for(let p=t+c;p<l;p+=c)f.push(p);return f.sort((p,v)=>p-v),{guessOptions:f,truePosition:h}},OP=(t,e,n,a)=>{const s=[];console.log(`Sampling ${t} data points from ${e} with mean ${n} and std ${a}`);for(let l=0;l<t;l++)s.push(RC(e,n,a));return s},MC=(t,e)=>e.std*Math.pow(e.stdDecay,t),_P=(t,e,n)=>{const a=Math.max(t,0)/10,s=MC(e,n),l=xC(e,n),c=Math.round(a/l*s/100)*100;return console.log(`Points: ${a} / ${l} * ${s} ~= ${c}`),c},$C=(t,e,n)=>{const a=MP(e,n),{guessOptions:s,truePosition:l}=$P(a,t,e,n),c=OP(n.maxPoints,n.distribution,a,MC(t,n));return{trueMean:a,guessOptions:s,truePosition:l,data:c,userGuess:null}},mu={black:"#000",white:"#fff"},oo={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},so={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},uo={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},lo={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},co={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},Qs={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},CP={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function da(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(a=>n.searchParams.append("args[]",a)),`Minified MUI error #${t}; visit ${n} for the full message.`}const of="$$material";function Nb(){return Nb=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)({}).hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Nb.apply(null,arguments)}function qP(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function LP(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var DP=function(){function t(n){var a=this;this._insertTag=function(s){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(s,l),a.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(LP(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=qP(s);try{l.insertRule(a,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){var s;return(s=a.parentNode)==null?void 0:s.removeChild(a)}),this.tags=[],this.ctr=0},t}(),Xe="-ms-",_c="-moz-",zt="-webkit-",OC="comm",Y2="rule",F2="decl",NP="@import",_C="@keyframes",BP="@layer",jP=Math.abs,sf=String.fromCharCode,VP=Object.assign;function PP(t,e){return ze(t,0)^45?(((e<<2^ze(t,0))<<2^ze(t,1))<<2^ze(t,2))<<2^ze(t,3):0}function CC(t){return t.trim()}function zP(t,e){return(t=e.exec(t))?t[0]:t}function Ut(t,e,n){return t.replace(e,n)}function Bb(t,e){return t.indexOf(e)}function ze(t,e){return t.charCodeAt(e)|0}function vu(t,e,n){return t.slice(e,n)}function cn(t){return t.length}function X2(t){return t.length}function ac(t,e){return e.push(t),t}function UP(t,e){return t.map(e).join("")}var uf=1,Mo=1,qC=0,cr=0,Me=0,Go="";function lf(t,e,n,a,s,l,c){return{value:t,root:e,parent:n,type:a,props:s,children:l,line:uf,column:Mo,length:c,return:""}}function Ws(t,e){return VP(lf("",null,null,"",null,null,0),t,{length:-t.length},e)}function kP(){return Me}function GP(){return Me=cr>0?ze(Go,--cr):0,Mo--,Me===10&&(Mo=1,uf--),Me}function Sr(){return Me=cr<qC?ze(Go,cr++):0,Mo++,Me===10&&(Mo=1,uf++),Me}function hn(){return ze(Go,cr)}function Sc(){return cr}function Cu(t,e){return vu(Go,t,e)}function gu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LC(t){return uf=Mo=1,qC=cn(Go=t),cr=0,[]}function DC(t){return Go="",t}function Tc(t){return CC(Cu(cr-1,jb(t===91?t+2:t===40?t+1:t)))}function HP(t){for(;(Me=hn())&&Me<33;)Sr();return gu(t)>2||gu(Me)>3?"":" "}function YP(t,e){for(;--e&&Sr()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Cu(t,Sc()+(e<6&&hn()==32&&Sr()==32))}function jb(t){for(;Sr();)switch(Me){case t:return cr;case 34:case 39:t!==34&&t!==39&&jb(Me);break;case 40:t===41&&jb(t);break;case 92:Sr();break}return cr}function FP(t,e){for(;Sr()&&t+Me!==57;)if(t+Me===84&&hn()===47)break;return"/*"+Cu(e,cr-1)+"*"+sf(t===47?t:Sr())}function XP(t){for(;!gu(hn());)Sr();return Cu(t,cr)}function IP(t){return DC(wc("",null,null,null,[""],t=LC(t),0,[0],t))}function wc(t,e,n,a,s,l,c,f,h){for(var p=0,v=0,g=c,S=0,y=0,A=0,b=1,M=1,$=1,B=0,_="",N=s,L=l,k=a,j=_;M;)switch(A=B,B=Sr()){case 40:if(A!=108&&ze(j,g-1)==58){Bb(j+=Ut(Tc(B),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:j+=Tc(B);break;case 9:case 10:case 13:case 32:j+=HP(A);break;case 92:j+=YP(Sc()-1,7);continue;case 47:switch(hn()){case 42:case 47:ac(KP(FP(Sr(),Sc()),e,n),h);break;default:j+="/"}break;case 123*b:f[p++]=cn(j)*$;case 125*b:case 59:case 0:switch(B){case 0:case 125:M=0;case 59+v:$==-1&&(j=Ut(j,/\f/g,"")),y>0&&cn(j)-g&&ac(y>32?l4(j+";",a,n,g-1):l4(Ut(j," ","")+";",a,n,g-2),h);break;case 59:j+=";";default:if(ac(k=u4(j,e,n,p,v,s,f,_,N=[],L=[],g),l),B===123)if(v===0)wc(j,e,k,k,N,l,g,f,L);else switch(S===99&&ze(j,3)===110?100:S){case 100:case 108:case 109:case 115:wc(t,k,k,a&&ac(u4(t,k,k,0,0,s,f,_,s,N=[],g),L),s,L,g,f,a?N:L);break;default:wc(j,k,k,k,[""],L,0,f,L)}}p=v=y=0,b=$=1,_=j="",g=c;break;case 58:g=1+cn(j),y=A;default:if(b<1){if(B==123)--b;else if(B==125&&b++==0&&GP()==125)continue}switch(j+=sf(B),B*b){case 38:$=v>0?1:(j+="\f",-1);break;case 44:f[p++]=(cn(j)-1)*$,$=1;break;case 64:hn()===45&&(j+=Tc(Sr())),S=hn(),v=g=cn(_=j+=XP(Sc())),B++;break;case 45:A===45&&cn(j)==2&&(b=0)}}return l}function u4(t,e,n,a,s,l,c,f,h,p,v){for(var g=s-1,S=s===0?l:[""],y=X2(S),A=0,b=0,M=0;A<a;++A)for(var $=0,B=vu(t,g+1,g=jP(b=c[A])),_=t;$<y;++$)(_=CC(b>0?S[$]+" "+B:Ut(B,/&\f/g,S[$])))&&(h[M++]=_);return lf(t,e,n,s===0?Y2:f,h,p,v)}function KP(t,e,n){return lf(t,e,n,OC,sf(kP()),vu(t,2,-2),0)}function l4(t,e,n,a){return lf(t,e,n,F2,vu(t,0,a),vu(t,a+1,-1),a)}function Ao(t,e){for(var n="",a=X2(t),s=0;s<a;s++)n+=e(t[s],s,t,e)||"";return n}function ZP(t,e,n,a){switch(t.type){case BP:if(t.children.length)break;case NP:case F2:return t.return=t.return||t.value;case OC:return"";case _C:return t.return=t.value+"{"+Ao(t.children,a)+"}";case Y2:t.value=t.props.join(",")}return cn(n=Ao(t.children,a))?t.return=t.value+"{"+n+"}":""}function QP(t){var e=X2(t);return function(n,a,s,l){for(var c="",f=0;f<e;f++)c+=t[f](n,a,s,l)||"";return c}}function WP(t){return function(e){e.root||(e=e.return)&&t(e)}}function NC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var JP=function(e,n,a){for(var s=0,l=0;s=l,l=hn(),s===38&&l===12&&(n[a]=1),!gu(l);)Sr();return Cu(e,cr)},tz=function(e,n){var a=-1,s=44;do switch(gu(s)){case 0:s===38&&hn()===12&&(n[a]=1),e[a]+=JP(cr-1,n,a);break;case 2:e[a]+=Tc(s);break;case 4:if(s===44){e[++a]=hn()===58?"&\f":"",n[a]=e[a].length;break}default:e[a]+=sf(s)}while(s=Sr());return e},ez=function(e,n){return DC(tz(LC(e),n))},c4=new WeakMap,rz=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,a=e.parent,s=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!c4.get(a))&&!s){c4.set(e,!0);for(var l=[],c=ez(n,l),f=a.props,h=0,p=0;h<c.length;h++)for(var v=0;v<f.length;v++,p++)e.props[p]=l[h]?c[h].replace(/&\f/g,f[v]):f[v]+" "+c[h]}}},nz=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function BC(t,e){switch(PP(t,e)){case 5103:return zt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return zt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return zt+t+_c+t+Xe+t+t;case 6828:case 4268:return zt+t+Xe+t+t;case 6165:return zt+t+Xe+"flex-"+t+t;case 5187:return zt+t+Ut(t,/(\w+).+(:[^]+)/,zt+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return zt+t+Xe+"flex-item-"+Ut(t,/flex-|-self/,"")+t;case 4675:return zt+t+Xe+"flex-line-pack"+Ut(t,/align-content|flex-|-self/,"")+t;case 5548:return zt+t+Xe+Ut(t,"shrink","negative")+t;case 5292:return zt+t+Xe+Ut(t,"basis","preferred-size")+t;case 6060:return zt+"box-"+Ut(t,"-grow","")+zt+t+Xe+Ut(t,"grow","positive")+t;case 4554:return zt+Ut(t,/([^-])(transform)/g,"$1"+zt+"$2")+t;case 6187:return Ut(Ut(Ut(t,/(zoom-|grab)/,zt+"$1"),/(image-set)/,zt+"$1"),t,"")+t;case 5495:case 3959:return Ut(t,/(image-set\([^]*)/,zt+"$1$`$1");case 4968:return Ut(Ut(t,/(.+:)(flex-)?(.*)/,zt+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+zt+t+t;case 4095:case 3583:case 4068:case 2532:return Ut(t,/(.+)-inline(.+)/,zt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(cn(t)-1-e>6)switch(ze(t,e+1)){case 109:if(ze(t,e+4)!==45)break;case 102:return Ut(t,/(.+:)(.+)-([^]+)/,"$1"+zt+"$2-$3$1"+_c+(ze(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Bb(t,"stretch")?BC(Ut(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ze(t,e+1)!==115)break;case 6444:switch(ze(t,cn(t)-3-(~Bb(t,"!important")&&10))){case 107:return Ut(t,":",":"+zt)+t;case 101:return Ut(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+zt+(ze(t,14)===45?"inline-":"")+"box$3$1"+zt+"$2$3$1"+Xe+"$2box$3")+t}break;case 5936:switch(ze(t,e+11)){case 114:return zt+t+Xe+Ut(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return zt+t+Xe+Ut(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return zt+t+Xe+Ut(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return zt+t+Xe+t+t}return t}var iz=function(e,n,a,s){if(e.length>-1&&!e.return)switch(e.type){case F2:e.return=BC(e.value,e.length);break;case _C:return Ao([Ws(e,{value:Ut(e.value,"@","@"+zt)})],s);case Y2:if(e.length)return UP(e.props,function(l){switch(zP(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ao([Ws(e,{props:[Ut(l,/:(read-\w+)/,":"+_c+"$1")]})],s);case"::placeholder":return Ao([Ws(e,{props:[Ut(l,/:(plac\w+)/,":"+zt+"input-$1")]}),Ws(e,{props:[Ut(l,/:(plac\w+)/,":"+_c+"$1")]}),Ws(e,{props:[Ut(l,/:(plac\w+)/,Xe+"input-$1")]})],s)}return""})}},az=[iz],oz=function(e){var n=e.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(b){var M=b.getAttribute("data-emotion");M.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var s=e.stylisPlugins||az,l={},c,f=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var M=b.getAttribute("data-emotion").split(" "),$=1;$<M.length;$++)l[M[$]]=!0;f.push(b)});var h,p=[rz,nz];{var v,g=[ZP,WP(function(b){v.insert(b)})],S=QP(p.concat(s,g)),y=function(M){return Ao(IP(M),S)};h=function(M,$,B,_){v=B,y(M?M+"{"+$.styles+"}":$.styles),_&&(A.inserted[$.name]=!0)}}var A={key:n,sheet:new DP({key:n,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:h};return A.sheet.hydrate(f),A},ab={exports:{}},kt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f4;function sz(){if(f4)return kt;f4=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,h=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,v=t?Symbol.for("react.forward_ref"):60112,g=t?Symbol.for("react.suspense"):60113,S=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,A=t?Symbol.for("react.lazy"):60116,b=t?Symbol.for("react.block"):60121,M=t?Symbol.for("react.fundamental"):60117,$=t?Symbol.for("react.responder"):60118,B=t?Symbol.for("react.scope"):60119;function _(L){if(typeof L=="object"&&L!==null){var k=L.$$typeof;switch(k){case e:switch(L=L.type,L){case h:case p:case a:case l:case s:case g:return L;default:switch(L=L&&L.$$typeof,L){case f:case v:case A:case y:case c:return L;default:return k}}case n:return k}}}function N(L){return _(L)===p}return kt.AsyncMode=h,kt.ConcurrentMode=p,kt.ContextConsumer=f,kt.ContextProvider=c,kt.Element=e,kt.ForwardRef=v,kt.Fragment=a,kt.Lazy=A,kt.Memo=y,kt.Portal=n,kt.Profiler=l,kt.StrictMode=s,kt.Suspense=g,kt.isAsyncMode=function(L){return N(L)||_(L)===h},kt.isConcurrentMode=N,kt.isContextConsumer=function(L){return _(L)===f},kt.isContextProvider=function(L){return _(L)===c},kt.isElement=function(L){return typeof L=="object"&&L!==null&&L.$$typeof===e},kt.isForwardRef=function(L){return _(L)===v},kt.isFragment=function(L){return _(L)===a},kt.isLazy=function(L){return _(L)===A},kt.isMemo=function(L){return _(L)===y},kt.isPortal=function(L){return _(L)===n},kt.isProfiler=function(L){return _(L)===l},kt.isStrictMode=function(L){return _(L)===s},kt.isSuspense=function(L){return _(L)===g},kt.isValidElementType=function(L){return typeof L=="string"||typeof L=="function"||L===a||L===p||L===l||L===s||L===g||L===S||typeof L=="object"&&L!==null&&(L.$$typeof===A||L.$$typeof===y||L.$$typeof===c||L.$$typeof===f||L.$$typeof===v||L.$$typeof===M||L.$$typeof===$||L.$$typeof===B||L.$$typeof===b)},kt.typeOf=_,kt}var d4;function uz(){return d4||(d4=1,ab.exports=sz()),ab.exports}var ob,h4;function lz(){if(h4)return ob;h4=1;var t=uz(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=a,l[t.Memo]=s;function c(A){return t.isMemo(A)?s:l[A.$$typeof]||e}var f=Object.defineProperty,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,S=Object.prototype;function y(A,b,M){if(typeof b!="string"){if(S){var $=g(b);$&&$!==S&&y(A,$,M)}var B=h(b);p&&(B=B.concat(p(b)));for(var _=c(A),N=c(b),L=0;L<B.length;++L){var k=B[L];if(!n[k]&&!(M&&M[k])&&!(N&&N[k])&&!(_&&_[k])){var j=v(b,k);try{f(A,k,j)}catch{}}}}return A}return ob=y,ob}lz();var cz=!0;function jC(t,e,n){var a="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):s&&(a+=s+" ")}),a}var I2=function(e,n,a){var s=e.key+"-"+n.name;(a===!1||cz===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},VC=function(e,n,a){I2(e,n,a);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var l=n;do e.insert(n===l?"."+s:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function fz(t){for(var e=0,n,a=0,s=t.length;s>=4;++a,s-=4)n=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var dz={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hz=/[A-Z]|^ms/g,pz=/_EMO_([^_]+?)_([^]*?)_EMO_/g,PC=function(e){return e.charCodeAt(1)===45},p4=function(e){return e!=null&&typeof e!="boolean"},sb=NC(function(t){return PC(t)?t:t.replace(hz,"-$&").toLowerCase()}),m4=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(pz,function(a,s,l){return fn={name:s,styles:l,next:fn},s})}return dz[e]!==1&&!PC(e)&&typeof n=="number"&&n!==0?n+"px":n};function yu(t,e,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return fn={name:s.name,styles:s.styles,next:fn},s.name;var l=n;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)fn={name:c.name,styles:c.styles,next:fn},c=c.next;var f=l.styles+";";return f}return mz(t,e,n)}case"function":{if(t!==void 0){var h=fn,p=n(t);return fn=h,yu(t,e,p)}break}}var v=n;if(e==null)return v;var g=e[v];return g!==void 0?g:v}function mz(t,e,n){var a="";if(Array.isArray(n))for(var s=0;s<n.length;s++)a+=yu(t,e,n[s])+";";else for(var l in n){var c=n[l];if(typeof c!="object"){var f=c;e!=null&&e[f]!==void 0?a+=l+"{"+e[f]+"}":p4(f)&&(a+=sb(l)+":"+m4(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var h=0;h<c.length;h++)p4(c[h])&&(a+=sb(l)+":"+m4(l,c[h])+";");else{var p=yu(t,e,c);switch(l){case"animation":case"animationName":{a+=sb(l)+":"+p+";";break}default:a+=l+"{"+p+"}"}}}return a}var v4=/label:\s*([^\s;{]+)\s*(;|$)/g,fn;function cf(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,s="";fn=void 0;var l=t[0];if(l==null||l.raw===void 0)a=!1,s+=yu(n,e,l);else{var c=l;s+=c[0]}for(var f=1;f<t.length;f++)if(s+=yu(n,e,t[f]),a){var h=l;s+=h[f]}v4.lastIndex=0;for(var p="",v;(v=v4.exec(s))!==null;)p+="-"+v[1];var g=fz(s)+p;return{name:g,styles:s,next:fn}}var vz=function(e){return e()},gz=Oc.useInsertionEffect?Oc.useInsertionEffect:!1,zC=gz||vz,UC=Z.createContext(typeof HTMLElement<"u"?oz({key:"css"}):null);UC.Provider;var kC=function(e){return Z.forwardRef(function(n,a){var s=Z.useContext(UC);return e(n,s,a)})},K2=Z.createContext({}),Z2={}.hasOwnProperty,Vb="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",yz=function(e,n){var a={};for(var s in n)Z2.call(n,s)&&(a[s]=n[s]);return a[Vb]=e,a},bz=function(e){var n=e.cache,a=e.serialized,s=e.isStringTag;return I2(n,a,s),zC(function(){return VC(n,a,s)}),null},Sz=kC(function(t,e,n){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var s=t[Vb],l=[a],c="";typeof t.className=="string"?c=jC(e.registered,l,t.className):t.className!=null&&(c=t.className+" ");var f=cf(l,void 0,Z.useContext(K2));c+=e.key+"-"+f.name;var h={};for(var p in t)Z2.call(t,p)&&p!=="css"&&p!==Vb&&(h[p]=t[p]);return h.className=c,n&&(h.ref=n),Z.createElement(Z.Fragment,null,Z.createElement(bz,{cache:e,serialized:f,isStringTag:typeof s=="string"}),Z.createElement(s,h))}),Tz=Sz,g4=function(e,n){var a=arguments;if(n==null||!Z2.call(n,"css"))return Z.createElement.apply(void 0,a);var s=a.length,l=new Array(s);l[0]=Tz,l[1]=yz(e,n);for(var c=2;c<s;c++)l[c]=a[c];return Z.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(g4||(g4={}));function ff(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return cf(e)}function df(){var t=ff.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var wz=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ez=NC(function(t){return wz.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Az=Ez,Rz=function(e){return e!=="theme"},y4=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Az:Rz},b4=function(e,n,a){var s;if(n){var l=n.shouldForwardProp;s=e.__emotion_forwardProp&&l?function(c){return e.__emotion_forwardProp(c)&&l(c)}:l}return typeof s!="function"&&a&&(s=e.__emotion_forwardProp),s},xz=function(e){var n=e.cache,a=e.serialized,s=e.isStringTag;return I2(n,a,s),zC(function(){return VC(n,a,s)}),null},Mz=function t(e,n){var a=e.__emotion_real===e,s=a&&e.__emotion_base||e,l,c;n!==void 0&&(l=n.label,c=n.target);var f=b4(e,n,a),h=f||y4(s),p=!h("as");return function(){var v=arguments,g=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(l!==void 0&&g.push("label:"+l+";"),v[0]==null||v[0].raw===void 0)g.push.apply(g,v);else{var S=v[0];g.push(S[0]);for(var y=v.length,A=1;A<y;A++)g.push(v[A],S[A])}var b=kC(function(M,$,B){var _=p&&M.as||s,N="",L=[],k=M;if(M.theme==null){k={};for(var j in M)k[j]=M[j];k.theme=Z.useContext(K2)}typeof M.className=="string"?N=jC($.registered,L,M.className):M.className!=null&&(N=M.className+" ");var H=cf(g.concat(L),$.registered,k);N+=$.key+"-"+H.name,c!==void 0&&(N+=" "+c);var rt=p&&f===void 0?y4(_):h,R={};for(var Y in M)p&&Y==="as"||rt(Y)&&(R[Y]=M[Y]);return R.className=N,B&&(R.ref=B),Z.createElement(Z.Fragment,null,Z.createElement(xz,{cache:$,serialized:H,isStringTag:typeof _=="string"}),Z.createElement(_,R))});return b.displayName=l!==void 0?l:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",b.defaultProps=e.defaultProps,b.__emotion_real=b,b.__emotion_base=s,b.__emotion_styles=g,b.__emotion_forwardProp=f,Object.defineProperty(b,"toString",{value:function(){return"."+c}}),b.withComponent=function(M,$){var B=t(M,Nb({},n,$,{shouldForwardProp:b4(b,$,!0)}));return B.apply(void 0,g)},b}},$z=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Pb=Mz.bind(null);$z.forEach(function(t){Pb[t]=Pb(t)});function GC(t,e){return Pb(t,e)}function Oz(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const S4=[];function T4(t){return S4[0]=t,cf(S4)}var ub={exports:{}},Zt={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w4;function _z(){if(w4)return Zt;w4=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.view_transition"),y=Symbol.for("react.client.reference");function A(b){if(typeof b=="object"&&b!==null){var M=b.$$typeof;switch(M){case t:switch(b=b.type,b){case n:case s:case a:case h:case p:case S:return b;default:switch(b=b&&b.$$typeof,b){case c:case f:case g:case v:return b;case l:return b;default:return M}}case e:return M}}}return Zt.ContextConsumer=l,Zt.ContextProvider=c,Zt.Element=t,Zt.ForwardRef=f,Zt.Fragment=n,Zt.Lazy=g,Zt.Memo=v,Zt.Portal=e,Zt.Profiler=s,Zt.StrictMode=a,Zt.Suspense=h,Zt.SuspenseList=p,Zt.isContextConsumer=function(b){return A(b)===l},Zt.isContextProvider=function(b){return A(b)===c},Zt.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===t},Zt.isForwardRef=function(b){return A(b)===f},Zt.isFragment=function(b){return A(b)===n},Zt.isLazy=function(b){return A(b)===g},Zt.isMemo=function(b){return A(b)===v},Zt.isPortal=function(b){return A(b)===e},Zt.isProfiler=function(b){return A(b)===s},Zt.isStrictMode=function(b){return A(b)===a},Zt.isSuspense=function(b){return A(b)===h},Zt.isSuspenseList=function(b){return A(b)===p},Zt.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===n||b===s||b===a||b===h||b===p||typeof b=="object"&&b!==null&&(b.$$typeof===g||b.$$typeof===v||b.$$typeof===c||b.$$typeof===l||b.$$typeof===f||b.$$typeof===y||b.getModuleId!==void 0)},Zt.typeOf=A,Zt}var E4;function Cz(){return E4||(E4=1,ub.exports=_z()),ub.exports}var HC=Cz();function dn(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function YC(t){if(Z.isValidElement(t)||HC.isValidElementType(t)||!dn(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=YC(t[n])}),e}function Tr(t,e,n={clone:!0}){const a=n.clone?{...t}:t;return dn(t)&&dn(e)&&Object.keys(e).forEach(s=>{Z.isValidElement(e[s])||HC.isValidElementType(e[s])?a[s]=e[s]:dn(e[s])&&Object.prototype.hasOwnProperty.call(t,s)&&dn(t[s])?a[s]=Tr(t[s],e[s],n):n.clone?a[s]=dn(e[s])?YC(e[s]):e[s]:a[s]=e[s]}),a}const qz=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,a)=>n.val-a.val),e.reduce((n,a)=>({...n,[a.key]:a.val}),{})};function Lz(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:a=5,...s}=t,l=qz(e),c=Object.keys(l);function f(S){return`@media (min-width:${typeof e[S]=="number"?e[S]:S}${n})`}function h(S){return`@media (max-width:${(typeof e[S]=="number"?e[S]:S)-a/100}${n})`}function p(S,y){const A=c.indexOf(y);return`@media (min-width:${typeof e[S]=="number"?e[S]:S}${n}) and (max-width:${(A!==-1&&typeof e[c[A]]=="number"?e[c[A]]:y)-a/100}${n})`}function v(S){return c.indexOf(S)+1<c.length?p(S,c[c.indexOf(S)+1]):f(S)}function g(S){const y=c.indexOf(S);return y===0?f(c[1]):y===c.length-1?h(c[y]):p(S,c[c.indexOf(S)+1]).replace("@media","@media not all and")}return{keys:c,values:l,up:f,down:h,between:p,only:v,not:g,unit:n,...s}}function Dz(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(a=>a.startsWith("@container")).sort((a,s)=>{var c,f;const l=/min-width:\s*([0-9.]+)/;return+(((c=a.match(l))==null?void 0:c[1])||0)-+(((f=s.match(l))==null?void 0:f[1])||0)});return n.length?n.reduce((a,s)=>{const l=e[s];return delete a[s],a[s]=l,a},{...e}):e}function Nz(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function Bz(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,a,s]=n,l=Number.isNaN(+a)?a||0:+a;return t.containerQueries(s).up(l)}function jz(t){const e=(l,c)=>l.replace("@media",c?`@container ${c}`:"@container");function n(l,c){l.up=(...f)=>e(t.breakpoints.up(...f),c),l.down=(...f)=>e(t.breakpoints.down(...f),c),l.between=(...f)=>e(t.breakpoints.between(...f),c),l.only=(...f)=>e(t.breakpoints.only(...f),c),l.not=(...f)=>{const h=e(t.breakpoints.not(...f),c);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const a={},s=l=>(n(a,l),a);return n(s),{...t,containerQueries:s}}const Vz={borderRadius:4};function su(t,e){return e?Tr(t,e,{clone:!1}):t}const hf={xs:0,sm:600,md:900,lg:1200,xl:1536},A4={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${hf[t]}px)`},Pz={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:hf[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function Hn(t,e,n){const a=t.theme||{};if(Array.isArray(e)){const l=a.breakpoints||A4;return e.reduce((c,f,h)=>(c[l.up(l.keys[h])]=n(e[h]),c),{})}if(typeof e=="object"){const l=a.breakpoints||A4;return Object.keys(e).reduce((c,f)=>{if(Nz(l.keys,f)){const h=Bz(a.containerQueries?a:Pz,f);h&&(c[h]=n(e[f],f))}else if(Object.keys(l.values||hf).includes(f)){const h=l.up(f);c[h]=n(e[f],f)}else{const h=f;c[h]=e[h]}return c},{})}return n(e)}function zz(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((a,s)=>{const l=t.up(s);return a[l]={},a},{}))||{}}function Uz(t,e){return t.reduce((n,a)=>{const s=n[a];return(!s||Object.keys(s).length===0)&&delete n[a],n},e)}function ne(t){if(typeof t!="string")throw new Error(da(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Ai(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const a=`vars.${e}`.split(".").reduce((s,l)=>s&&s[l]?s[l]:null,t);if(a!=null)return a}return e.split(".").reduce((a,s)=>a&&a[s]!=null?a[s]:null,t)}function Cc(t,e,n,a=n){let s;return typeof t=="function"?s=t(n):Array.isArray(t)?s=t[n]||a:s=Ai(t,n)||a,e&&(s=e(s,a,t)),s}function Te(t){const{prop:e,cssProperty:n=t.prop,themeKey:a,transform:s}=t,l=c=>{if(c[e]==null)return null;const f=c[e],h=c.theme,p=Ai(h,a)||{};return Hn(c,f,g=>{let S=Cc(p,s,g);return g===S&&typeof g=="string"&&(S=Cc(p,s,`${e}${g==="default"?"":ne(g)}`,g)),n===!1?S:{[n]:S}})};return l.propTypes={},l.filterProps=[e],l}function kz(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const Gz={m:"margin",p:"padding"},Hz={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},R4={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Yz=kz(t=>{if(t.length>2)if(R4[t])t=R4[t];else return[t];const[e,n]=t.split(""),a=Gz[e],s=Hz[n]||"";return Array.isArray(s)?s.map(l=>a+l):[a+s]}),Q2=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],W2=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Q2,...W2];function qu(t,e,n,a){const s=Ai(t,e,!0)??n;return typeof s=="number"||typeof s=="string"?l=>typeof l=="string"?l:typeof s=="string"?s.startsWith("var(")&&l===0?0:s.startsWith("var(")&&l===1?s:`calc(${l} * ${s})`:s*l:Array.isArray(s)?l=>{if(typeof l=="string")return l;const c=Math.abs(l),f=s[c];return l>=0?f:typeof f=="number"?-f:typeof f=="string"&&f.startsWith("var(")?`calc(-1 * ${f})`:`-${f}`}:typeof s=="function"?s:()=>{}}function J2(t){return qu(t,"spacing",8)}function Lu(t,e){return typeof e=="string"||e==null?e:t(e)}function Fz(t,e){return n=>t.reduce((a,s)=>(a[s]=Lu(e,n),a),{})}function Xz(t,e,n,a){if(!e.includes(n))return null;const s=Yz(n),l=Fz(s,a),c=t[n];return Hn(t,c,l)}function FC(t,e){const n=J2(t.theme);return Object.keys(t).map(a=>Xz(t,e,a,n)).reduce(su,{})}function de(t){return FC(t,Q2)}de.propTypes={};de.filterProps=Q2;function he(t){return FC(t,W2)}he.propTypes={};he.filterProps=W2;function XC(t=8,e=J2({spacing:t})){if(t.mui)return t;const n=(...a)=>(a.length===0?[1]:a).map(l=>{const c=e(l);return typeof c=="number"?`${c}px`:c}).join(" ");return n.mui=!0,n}function pf(...t){const e=t.reduce((a,s)=>(s.filterProps.forEach(l=>{a[l]=s}),a),{}),n=a=>Object.keys(a).reduce((s,l)=>e[l]?su(s,e[l](a)):s,{});return n.propTypes={},n.filterProps=t.reduce((a,s)=>a.concat(s.filterProps),[]),n}function Br(t){return typeof t!="number"?t:`${t}px solid`}function Yr(t,e){return Te({prop:t,themeKey:"borders",transform:e})}const Iz=Yr("border",Br),Kz=Yr("borderTop",Br),Zz=Yr("borderRight",Br),Qz=Yr("borderBottom",Br),Wz=Yr("borderLeft",Br),Jz=Yr("borderColor"),tU=Yr("borderTopColor"),eU=Yr("borderRightColor"),rU=Yr("borderBottomColor"),nU=Yr("borderLeftColor"),iU=Yr("outline",Br),aU=Yr("outlineColor"),mf=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=qu(t.theme,"shape.borderRadius",4),n=a=>({borderRadius:Lu(e,a)});return Hn(t,t.borderRadius,n)}return null};mf.propTypes={};mf.filterProps=["borderRadius"];pf(Iz,Kz,Zz,Qz,Wz,Jz,tU,eU,rU,nU,mf,iU,aU);const vf=t=>{if(t.gap!==void 0&&t.gap!==null){const e=qu(t.theme,"spacing",8),n=a=>({gap:Lu(e,a)});return Hn(t,t.gap,n)}return null};vf.propTypes={};vf.filterProps=["gap"];const gf=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=qu(t.theme,"spacing",8),n=a=>({columnGap:Lu(e,a)});return Hn(t,t.columnGap,n)}return null};gf.propTypes={};gf.filterProps=["columnGap"];const yf=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=qu(t.theme,"spacing",8),n=a=>({rowGap:Lu(e,a)});return Hn(t,t.rowGap,n)}return null};yf.propTypes={};yf.filterProps=["rowGap"];const oU=Te({prop:"gridColumn"}),sU=Te({prop:"gridRow"}),uU=Te({prop:"gridAutoFlow"}),lU=Te({prop:"gridAutoColumns"}),cU=Te({prop:"gridAutoRows"}),fU=Te({prop:"gridTemplateColumns"}),dU=Te({prop:"gridTemplateRows"}),hU=Te({prop:"gridTemplateAreas"}),pU=Te({prop:"gridArea"});pf(vf,gf,yf,oU,sU,uU,lU,cU,fU,dU,hU,pU);function Ro(t,e){return e==="grey"?e:t}const mU=Te({prop:"color",themeKey:"palette",transform:Ro}),vU=Te({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ro}),gU=Te({prop:"backgroundColor",themeKey:"palette",transform:Ro});pf(mU,vU,gU);function br(t){return t<=1&&t!==0?`${t*100}%`:t}const yU=Te({prop:"width",transform:br}),tS=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var s,l,c,f,h;const a=((c=(l=(s=t.theme)==null?void 0:s.breakpoints)==null?void 0:l.values)==null?void 0:c[n])||hf[n];return a?((h=(f=t.theme)==null?void 0:f.breakpoints)==null?void 0:h.unit)!=="px"?{maxWidth:`${a}${t.theme.breakpoints.unit}`}:{maxWidth:a}:{maxWidth:br(n)}};return Hn(t,t.maxWidth,e)}return null};tS.filterProps=["maxWidth"];const bU=Te({prop:"minWidth",transform:br}),SU=Te({prop:"height",transform:br}),TU=Te({prop:"maxHeight",transform:br}),wU=Te({prop:"minHeight",transform:br});Te({prop:"size",cssProperty:"width",transform:br});Te({prop:"size",cssProperty:"height",transform:br});const EU=Te({prop:"boxSizing"});pf(yU,tS,bU,SU,TU,wU,EU);const Du={border:{themeKey:"borders",transform:Br},borderTop:{themeKey:"borders",transform:Br},borderRight:{themeKey:"borders",transform:Br},borderBottom:{themeKey:"borders",transform:Br},borderLeft:{themeKey:"borders",transform:Br},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Br},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:mf},color:{themeKey:"palette",transform:Ro},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ro},backgroundColor:{themeKey:"palette",transform:Ro},p:{style:he},pt:{style:he},pr:{style:he},pb:{style:he},pl:{style:he},px:{style:he},py:{style:he},padding:{style:he},paddingTop:{style:he},paddingRight:{style:he},paddingBottom:{style:he},paddingLeft:{style:he},paddingX:{style:he},paddingY:{style:he},paddingInline:{style:he},paddingInlineStart:{style:he},paddingInlineEnd:{style:he},paddingBlock:{style:he},paddingBlockStart:{style:he},paddingBlockEnd:{style:he},m:{style:de},mt:{style:de},mr:{style:de},mb:{style:de},ml:{style:de},mx:{style:de},my:{style:de},margin:{style:de},marginTop:{style:de},marginRight:{style:de},marginBottom:{style:de},marginLeft:{style:de},marginX:{style:de},marginY:{style:de},marginInline:{style:de},marginInlineStart:{style:de},marginInlineEnd:{style:de},marginBlock:{style:de},marginBlockStart:{style:de},marginBlockEnd:{style:de},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:vf},rowGap:{style:yf},columnGap:{style:gf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:br},maxWidth:{style:tS},minWidth:{transform:br},height:{transform:br},maxHeight:{transform:br},minHeight:{transform:br},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function AU(...t){const e=t.reduce((a,s)=>a.concat(Object.keys(s)),[]),n=new Set(e);return t.every(a=>n.size===Object.keys(a).length)}function RU(t,e){return typeof t=="function"?t(e):t}function xU(){function t(n,a,s,l){const c={[n]:a,theme:s},f=l[n];if(!f)return{[n]:a};const{cssProperty:h=n,themeKey:p,transform:v,style:g}=f;if(a==null)return null;if(p==="typography"&&a==="inherit")return{[n]:a};const S=Ai(s,p)||{};return g?g(c):Hn(c,a,A=>{let b=Cc(S,v,A);return A===b&&typeof A=="string"&&(b=Cc(S,v,`${n}${A==="default"?"":ne(A)}`,A)),h===!1?b:{[h]:b}})}function e(n){const{sx:a,theme:s={}}=n||{};if(!a)return null;const l=s.unstable_sxConfig??Du;function c(f){let h=f;if(typeof f=="function")h=f(s);else if(typeof f!="object")return f;if(!h)return null;const p=zz(s.breakpoints),v=Object.keys(p);let g=p;return Object.keys(h).forEach(S=>{const y=RU(h[S],s);if(y!=null)if(typeof y=="object")if(l[S])g=su(g,t(S,y,s,l));else{const A=Hn({theme:s},y,b=>({[S]:b}));AU(A,y)?g[S]=e({sx:y,theme:s}):g=su(g,A)}else g=su(g,t(S,y,s,l))}),Dz(s,Uz(v,g))}return Array.isArray(a)?a.map(c):c(a)}return e}const ha=xU();ha.filterProps=["sx"];function MU(t,e){var a;const n=this;if(n.vars){if(!((a=n.colorSchemes)!=null&&a[t])||typeof n.getColorSchemeSelector!="function")return{};let s=n.getColorSchemeSelector(t);return s==="&"?e:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:e})}return n.palette.mode===t?e:{}}function Nu(t={},...e){const{breakpoints:n={},palette:a={},spacing:s,shape:l={},...c}=t,f=Lz(n),h=XC(s);let p=Tr({breakpoints:f,direction:"ltr",components:{},palette:{mode:"light",...a},spacing:h,shape:{...Vz,...l}},c);return p=jz(p),p.applyStyles=MU,p=e.reduce((v,g)=>Tr(v,g),p),p.unstable_sxConfig={...Du,...c==null?void 0:c.unstable_sxConfig},p.unstable_sx=function(g){return ha({sx:g,theme:this})},p}function $U(t){return Object.keys(t).length===0}function IC(t=null){const e=Z.useContext(K2);return!e||$U(e)?t:e}const OU=Nu();function Bu(t=OU){return IC(t)}const _U=t=>{var a;const e={systemProps:{},otherProps:{}},n=((a=t==null?void 0:t.theme)==null?void 0:a.unstable_sxConfig)??Du;return Object.keys(t).forEach(s=>{n[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e};function eS(t){const{sx:e,...n}=t,{systemProps:a,otherProps:s}=_U(n);let l;return Array.isArray(e)?l=[a,...e]:typeof e=="function"?l=(...c)=>{const f=e(...c);return dn(f)?{...a,...f}:a}:l={...a,...e},{...s,sx:l}}const x4=t=>t,CU=()=>{let t=x4;return{configure(e){t=e},generate(e){return t(e)},reset(){t=x4}}},KC=CU();function ZC(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=ZC(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function zr(){for(var t,e,n=0,a="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=ZC(t))&&(a&&(a+=" "),a+=e);return a}function qU(t={}){const{themeId:e,defaultTheme:n,defaultClassName:a="MuiBox-root",generateClassName:s}=t,l=GC("div",{shouldForwardProp:f=>f!=="theme"&&f!=="sx"&&f!=="as"})(ha);return Z.forwardRef(function(h,p){const v=Bu(n),{className:g,component:S="div",...y}=eS(h);return vt.jsx(l,{as:S,ref:p,className:zr(g,s?s(a):a),theme:e&&v[e]||v,...y})})}const LU={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Tn(t,e,n="Mui"){const a=LU[e];return a?`${n}-${a}`:`${KC.generate(t)}-${e}`}function Ci(t,e,n="Mui"){const a={};return e.forEach(s=>{a[s]=Tn(t,s,n)}),a}function QC(t){const{variants:e,...n}=t,a={variants:e,style:T4(n),isProcessed:!0};return a.style===n||e&&e.forEach(s=>{typeof s.style!="function"&&(s.style=T4(s.style))}),a}const DU=Nu();function lb(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function NU(t){return t?(e,n)=>n[t]:null}function BU(t,e,n){t.theme=VU(t.theme)?n:t.theme[e]||t.theme}function Ec(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(a=>Ec(t,a));if(Array.isArray(n==null?void 0:n.variants)){let a;if(n.isProcessed)a=n.style;else{const{variants:s,...l}=n;a=l}return WC(t,n.variants,[a])}return n!=null&&n.isProcessed?n.style:n}function WC(t,e,n=[]){var s;let a;t:for(let l=0;l<e.length;l+=1){const c=e[l];if(typeof c.props=="function"){if(a??(a={...t,...t.ownerState,ownerState:t.ownerState}),!c.props(a))continue}else for(const f in c.props)if(t[f]!==c.props[f]&&((s=t.ownerState)==null?void 0:s[f])!==c.props[f])continue t;typeof c.style=="function"?(a??(a={...t,...t.ownerState,ownerState:t.ownerState}),n.push(c.style(a))):n.push(c.style)}return n}function JC(t={}){const{themeId:e,defaultTheme:n=DU,rootShouldForwardProp:a=lb,slotShouldForwardProp:s=lb}=t;function l(f){BU(f,e,n)}return(f,h={})=>{Oz(f,L=>L.filter(k=>k!==ha));const{name:p,slot:v,skipVariantsResolver:g,skipSx:S,overridesResolver:y=NU(zU(v)),...A}=h,b=g!==void 0?g:v&&v!=="Root"&&v!=="root"||!1,M=S||!1;let $=lb;v==="Root"||v==="root"?$=a:v?$=s:PU(f)&&($=void 0);const B=GC(f,{shouldForwardProp:$,label:jU(),...A}),_=L=>{if(typeof L=="function"&&L.__emotion_real!==L)return function(j){return Ec(j,L)};if(dn(L)){const k=QC(L);return k.variants?function(H){return Ec(H,k)}:k.style}return L},N=(...L)=>{const k=[],j=L.map(_),H=[];if(k.push(l),p&&y&&H.push(function(et){var P,tt;const ft=(tt=(P=et.theme.components)==null?void 0:P[p])==null?void 0:tt.styleOverrides;if(!ft)return null;const dt={};for(const ot in ft)dt[ot]=Ec(et,ft[ot]);return y(et,dt)}),p&&!b&&H.push(function(et){var dt,P;const ct=et.theme,ft=(P=(dt=ct==null?void 0:ct.components)==null?void 0:dt[p])==null?void 0:P.variants;return ft?WC(et,ft):null}),M||H.push(ha),Array.isArray(j[0])){const Y=j.shift(),et=new Array(k.length).fill(""),ct=new Array(H.length).fill("");let ft;ft=[...et,...Y,...ct],ft.raw=[...et,...Y.raw,...ct],k.unshift(ft)}const rt=[...k,...j,...H],R=B(...rt);return f.muiName&&(R.muiName=f.muiName),R};return B.withConfig&&(N.withConfig=B.withConfig),N}}function jU(t,e){return void 0}function VU(t){for(const e in t)return!1;return!0}function PU(t){return typeof t=="string"&&t.charCodeAt(0)>96}function zU(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}const tq=JC();function qc(t,e){const n={...e};for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const s=a;if(s==="components"||s==="slots")n[s]={...t[s],...n[s]};else if(s==="componentsProps"||s==="slotProps"){const l=t[s],c=e[s];if(!c)n[s]=l||{};else if(!l)n[s]=c;else{n[s]={...c};for(const f in l)if(Object.prototype.hasOwnProperty.call(l,f)){const h=f;n[s][h]=qc(l[h],c[h])}}}else n[s]===void 0&&(n[s]=t[s])}return n}function eq(t){const{theme:e,name:n,props:a}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?a:qc(e.components[n].defaultProps,a)}function rq({props:t,name:e,defaultTheme:n,themeId:a}){let s=Bu(n);return a&&(s=s[a]||s),eq({theme:s,name:e,props:t})}const $o=typeof window<"u"?Z.useLayoutEffect:Z.useEffect;function UU(t,e,n,a,s){const[l,c]=Z.useState(()=>s&&n?n(t).matches:a?a(t).matches:e);return $o(()=>{if(!n)return;const f=n(t),h=()=>{c(f.matches)};return h(),f.addEventListener("change",h),()=>{f.removeEventListener("change",h)}},[t,n]),l}const kU={...Oc},nq=kU.useSyncExternalStore;function GU(t,e,n,a,s){const l=Z.useCallback(()=>e,[e]),c=Z.useMemo(()=>{if(s&&n)return()=>n(t).matches;if(a!==null){const{matches:v}=a(t);return()=>v}return l},[l,t,a,s,n]),[f,h]=Z.useMemo(()=>{if(n===null)return[l,()=>()=>{}];const v=n(t);return[()=>v.matches,g=>(v.addEventListener("change",g),()=>{v.removeEventListener("change",g)})]},[l,n,t]);return nq(h,f,c)}function iq(t={}){const{themeId:e}=t;return function(a,s={}){let l=IC();l&&e&&(l=l[e]||l);const c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:f=!1,matchMedia:h=c?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:v=!1}=eq({name:"MuiUseMediaQuery",props:s,theme:l});let g=typeof a=="function"?a(l):a;return g=g.replace(/^@media( ?)/m,""),g.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(nq!==void 0?GU:UU)(g,f,h,p,v)}}const HU=iq();function YU(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function rS(t,e=0,n=1){return YU(t,e,n)}function FU(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(a=>a+a)),n?`rgb${n.length===4?"a":""}(${n.map((a,s)=>s<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function Ri(t){if(t.type)return t;if(t.charAt(0)==="#")return Ri(FU(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(da(9,t));let a=t.substring(e+1,t.length-1),s;if(n==="color"){if(a=a.split(" "),s=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(s))throw new Error(da(10,s))}else a=a.split(",");return a=a.map(l=>parseFloat(l)),{type:n,values:a,colorSpace:s}}const XU=t=>{const e=Ri(t);return e.values.slice(0,3).map((n,a)=>e.type.includes("hsl")&&a!==0?`${n}%`:n).join(" ")},ru=(t,e)=>{try{return XU(t)}catch{return t}};function bf(t){const{type:e,colorSpace:n}=t;let{values:a}=t;return e.includes("rgb")?a=a.map((s,l)=>l<3?parseInt(s,10):s):e.includes("hsl")&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),e.includes("color")?a=`${n} ${a.join(" ")}`:a=`${a.join(", ")}`,`${e}(${a})`}function aq(t){t=Ri(t);const{values:e}=t,n=e[0],a=e[1]/100,s=e[2]/100,l=a*Math.min(s,1-s),c=(p,v=(p+n/30)%12)=>s-l*Math.max(Math.min(v-3,9-v,1),-1);let f="rgb";const h=[Math.round(c(0)*255),Math.round(c(8)*255),Math.round(c(4)*255)];return t.type==="hsla"&&(f+="a",h.push(e[3])),bf({type:f,values:h})}function zb(t){t=Ri(t);let e=t.type==="hsl"||t.type==="hsla"?Ri(aq(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function IU(t,e){const n=zb(t),a=zb(e);return(Math.max(n,a)+.05)/(Math.min(n,a)+.05)}function kn(t,e){return t=Ri(t),e=rS(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,bf(t)}function oc(t,e,n){try{return kn(t,e)}catch{return t}}function Sf(t,e){if(t=Ri(t),e=rS(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return bf(t)}function Wt(t,e,n){try{return Sf(t,e)}catch{return t}}function Tf(t,e){if(t=Ri(t),e=rS(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return bf(t)}function Jt(t,e,n){try{return Tf(t,e)}catch{return t}}function KU(t,e=.15){return zb(t)>.5?Sf(t,e):Tf(t,e)}function sc(t,e,n){try{return KU(t,e)}catch{return t}}const ZU=Z.createContext(),nS=()=>Z.useContext(ZU)??!1,QU=Z.createContext(void 0);function WU(t){const{theme:e,name:n,props:a}=t;if(!e||!e.components||!e.components[n])return a;const s=e.components[n];return s.defaultProps?qc(s.defaultProps,a):!s.styleOverrides&&!s.variants?qc(s,a):a}function JU({props:t,name:e}){const n=Z.useContext(QU);return WU({props:t,name:e,theme:{components:n}})}const M4={theme:void 0};function tk(t){let e,n;return function(s){let l=e;return(l===void 0||s.theme!==n)&&(M4.theme=s.theme,l=QC(t(M4)),e=l,n=s.theme),l}}function ek(t=""){function e(...a){if(!a.length)return"";const s=a[0];return typeof s=="string"&&!s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${s}${e(...a.slice(1))})`:`, ${s}`}return(a,...s)=>`var(--${t?`${t}-`:""}${a}${e(...s)})`}const $4=(t,e,n,a=[])=>{let s=t;e.forEach((l,c)=>{c===e.length-1?Array.isArray(s)?s[Number(l)]=n:s&&typeof s=="object"&&(s[l]=n):s&&typeof s=="object"&&(s[l]||(s[l]=a.includes(l)?[]:{}),s=s[l])})},rk=(t,e,n)=>{function a(s,l=[],c=[]){Object.entries(s).forEach(([f,h])=>{(!n||n&&!n([...l,f]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?a(h,[...l,f],Array.isArray(h)?[...c,f]:c):e([...l,f],h,c))})}a(t)},nk=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(a=>t.includes(a))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function cb(t,e){const{prefix:n,shouldSkipGeneratingVar:a}=e||{},s={},l={},c={};return rk(t,(f,h,p)=>{if((typeof h=="string"||typeof h=="number")&&(!a||!a(f,h))){const v=`--${n?`${n}-`:""}${f.join("-")}`,g=nk(f,h);Object.assign(s,{[v]:g}),$4(l,f,`var(${v})`,p),$4(c,f,`var(${v}, ${g})`,p)}},f=>f[0]==="vars"),{css:s,vars:l,varsWithDefaults:c}}function ik(t,e={}){const{getSelector:n=M,disableCssColorScheme:a,colorSchemeSelector:s}=e,{colorSchemes:l={},components:c,defaultColorScheme:f="light",...h}=t,{vars:p,css:v,varsWithDefaults:g}=cb(h,e);let S=g;const y={},{[f]:A,...b}=l;if(Object.entries(b||{}).forEach(([_,N])=>{const{vars:L,css:k,varsWithDefaults:j}=cb(N,e);S=Tr(S,j),y[_]={css:k,vars:L}}),A){const{css:_,vars:N,varsWithDefaults:L}=cb(A,e);S=Tr(S,L),y[f]={css:_,vars:N}}function M(_,N){var k,j;let L=s;if(s==="class"&&(L=".%s"),s==="data"&&(L="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(L=`[${s}="%s"]`),_){if(L==="media")return t.defaultColorScheme===_?":root":{[`@media (prefers-color-scheme: ${((j=(k=l[_])==null?void 0:k.palette)==null?void 0:j.mode)||_})`]:{":root":N}};if(L)return t.defaultColorScheme===_?`:root, ${L.replace("%s",String(_))}`:L.replace("%s",String(_))}return":root"}return{vars:S,generateThemeVars:()=>{let _={...p};return Object.entries(y).forEach(([,{vars:N}])=>{_=Tr(_,N)}),_},generateStyleSheets:()=>{var H,rt;const _=[],N=t.defaultColorScheme||"light";function L(R,Y){Object.keys(Y).length&&_.push(typeof R=="string"?{[R]:{...Y}}:R)}L(n(void 0,{...v}),v);const{[N]:k,...j}=y;if(k){const{css:R}=k,Y=(rt=(H=l[N])==null?void 0:H.palette)==null?void 0:rt.mode,et=!a&&Y?{colorScheme:Y,...R}:{...R};L(n(N,{...et}),et)}return Object.entries(j).forEach(([R,{css:Y}])=>{var ft,dt;const et=(dt=(ft=l[R])==null?void 0:ft.palette)==null?void 0:dt.mode,ct=!a&&et?{colorScheme:et,...Y}:{...Y};L(n(R,{...ct}),ct)}),_}}}function ak(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}function Kn(t,e,n=void 0){const a={};for(const s in t){const l=t[s];let c="",f=!0;for(let h=0;h<l.length;h+=1){const p=l[h];p&&(c+=(f===!0?"":" ")+e(p),f=!1,n&&n[p]&&(c+=" "+n[p]))}a[s]=c}return a}const ok=Nu(),sk=tq("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${ne(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),uk=t=>rq({props:t,name:"MuiContainer",defaultTheme:ok}),lk=(t,e)=>{const n=h=>Tn(e,h),{classes:a,fixed:s,disableGutters:l,maxWidth:c}=t,f={root:["root",c&&`maxWidth${ne(String(c))}`,s&&"fixed",l&&"disableGutters"]};return Kn(f,n,a)};function ck(t={}){const{createStyledComponent:e=sk,useThemeProps:n=uk,componentName:a="MuiContainer"}=t,s=e(({theme:c,ownerState:f})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!f.disableGutters&&{paddingLeft:c.spacing(2),paddingRight:c.spacing(2),[c.breakpoints.up("sm")]:{paddingLeft:c.spacing(3),paddingRight:c.spacing(3)}}}),({theme:c,ownerState:f})=>f.fixed&&Object.keys(c.breakpoints.values).reduce((h,p)=>{const v=p,g=c.breakpoints.values[v];return g!==0&&(h[c.breakpoints.up(v)]={maxWidth:`${g}${c.breakpoints.unit}`}),h},{}),({theme:c,ownerState:f})=>({...f.maxWidth==="xs"&&{[c.breakpoints.up("xs")]:{maxWidth:Math.max(c.breakpoints.values.xs,444)}},...f.maxWidth&&f.maxWidth!=="xs"&&{[c.breakpoints.up(f.maxWidth)]:{maxWidth:`${c.breakpoints.values[f.maxWidth]}${c.breakpoints.unit}`}}}));return Z.forwardRef(function(f,h){const p=n(f),{className:v,component:g="div",disableGutters:S=!1,fixed:y=!1,maxWidth:A="lg",classes:b,...M}=p,$={...p,component:g,disableGutters:S,fixed:y,maxWidth:A},B=lk($,a);return vt.jsx(s,{as:g,ownerState:$,className:zr(B.root,v),ref:h,...M})})}function fk(t,e){var n,a,s;return Z.isValidElement(t)&&e.indexOf(t.type.muiName??((s=(a=(n=t.type)==null?void 0:n._payload)==null?void 0:a.value)==null?void 0:s.muiName))!==-1}const dk=(t,e)=>t.filter(n=>e.includes(n)),Ho=(t,e,n)=>{const a=t.keys[0];Array.isArray(e)?e.forEach((s,l)=>{n((c,f)=>{l<=t.keys.length-1&&(l===0?Object.assign(c,f):c[t.up(t.keys[l])]=f)},s)}):e&&typeof e=="object"?(Object.keys(e).length>t.keys.length?t.keys:dk(t.keys,Object.keys(e))).forEach(l=>{if(t.keys.includes(l)){const c=e[l];c!==void 0&&n((f,h)=>{a===l?Object.assign(f,h):f[t.up(l)]=h},c)}}):(typeof e=="number"||typeof e=="string")&&n((s,l)=>{Object.assign(s,l)},e)};function Lc(t){return`--Grid-${t}Spacing`}function wf(t){return`--Grid-parent-${t}Spacing`}const O4="--Grid-columns",xo="--Grid-parent-columns",hk=({theme:t,ownerState:e})=>{const n={};return Ho(t.breakpoints,e.size,(a,s)=>{let l={};s==="grow"&&(l={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(l={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(l={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${xo}) - (var(${xo}) - ${s}) * (var(${wf("column")}) / var(${xo})))`}),a(n,l)}),n},pk=({theme:t,ownerState:e})=>{const n={};return Ho(t.breakpoints,e.offset,(a,s)=>{let l={};s==="auto"&&(l={marginLeft:"auto"}),typeof s=="number"&&(l={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${xo}) + var(${wf("column")}) * ${s} / var(${xo}))`}),a(n,l)}),n},mk=({theme:t,ownerState:e})=>{if(!e.container)return{};const n={[O4]:12};return Ho(t.breakpoints,e.columns,(a,s)=>{const l=s??12;a(n,{[O4]:l,"> *":{[xo]:l}})}),n},vk=({theme:t,ownerState:e})=>{if(!e.container)return{};const n={};return Ho(t.breakpoints,e.rowSpacing,(a,s)=>{var c;const l=typeof s=="string"?s:(c=t.spacing)==null?void 0:c.call(t,s);a(n,{[Lc("row")]:l,"> *":{[wf("row")]:l}})}),n},gk=({theme:t,ownerState:e})=>{if(!e.container)return{};const n={};return Ho(t.breakpoints,e.columnSpacing,(a,s)=>{var c;const l=typeof s=="string"?s:(c=t.spacing)==null?void 0:c.call(t,s);a(n,{[Lc("column")]:l,"> *":{[wf("column")]:l}})}),n},yk=({theme:t,ownerState:e})=>{if(!e.container)return{};const n={};return Ho(t.breakpoints,e.direction,(a,s)=>{a(n,{flexDirection:s})}),n},bk=({ownerState:t})=>({minWidth:0,boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",...t.wrap&&t.wrap!=="wrap"&&{flexWrap:t.wrap},gap:`var(${Lc("row")}) var(${Lc("column")})`}}),Sk=t=>{const e=[];return Object.entries(t).forEach(([n,a])=>{a!==!1&&a!==void 0&&e.push(`grid-${n}-${String(a)}`)}),e},Tk=(t,e="xs")=>{function n(a){return a===void 0?!1:typeof a=="string"&&!Number.isNaN(Number(a))||typeof a=="number"&&a>0}if(n(t))return[`spacing-${e}-${String(t)}`];if(typeof t=="object"&&!Array.isArray(t)){const a=[];return Object.entries(t).forEach(([s,l])=>{n(l)&&a.push(`spacing-${s}-${String(l)}`)}),a}return[]},wk=t=>t===void 0?[]:typeof t=="object"?Object.entries(t).map(([e,n])=>`direction-${e}-${n}`):[`direction-xs-${String(t)}`];function Ek(t,e){t.item!==void 0&&delete t.item,t.zeroMinWidth!==void 0&&delete t.zeroMinWidth,e.keys.forEach(n=>{t[n]!==void 0&&delete t[n]})}const Ak=Nu(),Rk=tq("div",{name:"MuiGrid",slot:"Root"});function xk(t){return rq({props:t,name:"MuiGrid",defaultTheme:Ak})}function Mk(t={}){const{createStyledComponent:e=Rk,useThemeProps:n=xk,useTheme:a=Bu,componentName:s="MuiGrid"}=t,l=(p,v)=>{const{container:g,direction:S,spacing:y,wrap:A,size:b}=p,M={root:["root",g&&"container",A!=="wrap"&&`wrap-xs-${String(A)}`,...wk(S),...Sk(b),...g?Tk(y,v.breakpoints.keys[0]):[]]};return Kn(M,$=>Tn(s,$),{})};function c(p,v,g=()=>!0){const S={};return p===null||(Array.isArray(p)?p.forEach((y,A)=>{y!==null&&g(y)&&v.keys[A]&&(S[v.keys[A]]=y)}):typeof p=="object"?Object.keys(p).forEach(y=>{const A=p[y];A!=null&&g(A)&&(S[y]=A)}):S[v.keys[0]]=p),S}const f=e(mk,gk,vk,hk,yk,bk,pk),h=Z.forwardRef(function(v,g){const S=a(),y=n(v),A=eS(y);Ek(A,S.breakpoints);const{className:b,children:M,columns:$=12,container:B=!1,component:_="div",direction:N="row",wrap:L="wrap",size:k={},offset:j={},spacing:H=0,rowSpacing:rt=H,columnSpacing:R=H,unstable_level:Y=0,...et}=A,ct=c(k,S.breakpoints,T=>T!==!1),ft=c(j,S.breakpoints),dt=v.columns??(Y?void 0:$),P=v.spacing??(Y?void 0:H),tt=v.rowSpacing??v.spacing??(Y?void 0:rt),ot=v.columnSpacing??v.spacing??(Y?void 0:R),Q={...A,level:Y,columns:dt,container:B,direction:N,wrap:L,spacing:P,rowSpacing:tt,columnSpacing:ot,size:ct,offset:ft},C=l(Q,S);return vt.jsx(f,{ref:g,as:_,ownerState:Q,className:zr(C.root,b),...et,children:Z.Children.map(M,T=>{var w;return Z.isValidElement(T)&&fk(T,["Grid"])&&B&&T.props.container?Z.cloneElement(T,{unstable_level:((w=T.props)==null?void 0:w.unstable_level)??Y+1}):T})})});return h.muiName="Grid",h}function oq(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:mu.white,default:mu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const $k=oq();function sq(){return{text:{primary:mu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:mu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const _4=sq();function C4(t,e,n,a){const s=a.light||a,l=a.dark||a*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Tf(t.main,s):e==="dark"&&(t.dark=Sf(t.main,l)))}function Ok(t="light"){return t==="dark"?{main:uo[200],light:uo[50],dark:uo[400]}:{main:uo[700],light:uo[400],dark:uo[800]}}function _k(t="light"){return t==="dark"?{main:so[200],light:so[50],dark:so[400]}:{main:so[500],light:so[300],dark:so[700]}}function Ck(t="light"){return t==="dark"?{main:oo[500],light:oo[300],dark:oo[700]}:{main:oo[700],light:oo[400],dark:oo[800]}}function qk(t="light"){return t==="dark"?{main:lo[400],light:lo[300],dark:lo[700]}:{main:lo[700],light:lo[500],dark:lo[900]}}function Lk(t="light"){return t==="dark"?{main:co[400],light:co[300],dark:co[700]}:{main:co[800],light:co[500],dark:co[900]}}function Dk(t="light"){return t==="dark"?{main:Qs[400],light:Qs[300],dark:Qs[700]}:{main:"#ed6c02",light:Qs[500],dark:Qs[900]}}function iS(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:a=.2,...s}=t,l=t.primary||Ok(e),c=t.secondary||_k(e),f=t.error||Ck(e),h=t.info||qk(e),p=t.success||Lk(e),v=t.warning||Dk(e);function g(b){return IU(b,_4.text.primary)>=n?_4.text.primary:$k.text.primary}const S=({color:b,name:M,mainShade:$=500,lightShade:B=300,darkShade:_=700})=>{if(b={...b},!b.main&&b[$]&&(b.main=b[$]),!b.hasOwnProperty("main"))throw new Error(da(11,M?` (${M})`:"",$));if(typeof b.main!="string")throw new Error(da(12,M?` (${M})`:"",JSON.stringify(b.main)));return C4(b,"light",B,a),C4(b,"dark",_,a),b.contrastText||(b.contrastText=g(b.main)),b};let y;return e==="light"?y=oq():e==="dark"&&(y=sq()),Tr({common:{...mu},mode:e,primary:S({color:l,name:"primary"}),secondary:S({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:S({color:f,name:"error"}),warning:S({color:v,name:"warning"}),info:S({color:h,name:"info"}),success:S({color:p,name:"success"}),grey:CP,contrastThreshold:n,getContrastText:g,augmentColor:S,tonalOffset:a,...y},s)}function Nk(t){const e={};return Object.entries(t).forEach(a=>{const[s,l]=a;typeof l=="object"&&(e[s]=`${l.fontStyle?`${l.fontStyle} `:""}${l.fontVariant?`${l.fontVariant} `:""}${l.fontWeight?`${l.fontWeight} `:""}${l.fontStretch?`${l.fontStretch} `:""}${l.fontSize||""}${l.lineHeight?`/${l.lineHeight} `:""}${l.fontFamily||""}`)}),e}function Bk(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function jk(t){return Math.round(t*1e5)/1e5}const q4={textTransform:"uppercase"},L4='"Roboto", "Helvetica", "Arial", sans-serif';function Vk(t,e){const{fontFamily:n=L4,fontSize:a=14,fontWeightLight:s=300,fontWeightRegular:l=400,fontWeightMedium:c=500,fontWeightBold:f=700,htmlFontSize:h=16,allVariants:p,pxToRem:v,...g}=typeof e=="function"?e(t):e,S=a/14,y=v||(M=>`${M/h*S}rem`),A=(M,$,B,_,N)=>({fontFamily:n,fontWeight:M,fontSize:y($),lineHeight:B,...n===L4?{letterSpacing:`${jk(_/$)}em`}:{},...N,...p}),b={h1:A(s,96,1.167,-1.5),h2:A(s,60,1.2,-.5),h3:A(l,48,1.167,0),h4:A(l,34,1.235,.25),h5:A(l,24,1.334,0),h6:A(c,20,1.6,.15),subtitle1:A(l,16,1.75,.15),subtitle2:A(c,14,1.57,.1),body1:A(l,16,1.5,.15),body2:A(l,14,1.43,.15),button:A(c,14,1.75,.4,q4),caption:A(l,12,1.66,.4),overline:A(l,12,2.66,1,q4),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Tr({htmlFontSize:h,pxToRem:y,fontFamily:n,fontSize:a,fontWeightLight:s,fontWeightRegular:l,fontWeightMedium:c,fontWeightBold:f,...b},g,{clone:!1})}const Pk=.2,zk=.14,Uk=.12;function ae(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Pk})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${zk})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${Uk})`].join(",")}const kk=["none",ae(0,2,1,-1,0,1,1,0,0,1,3,0),ae(0,3,1,-2,0,2,2,0,0,1,5,0),ae(0,3,3,-2,0,3,4,0,0,1,8,0),ae(0,2,4,-1,0,4,5,0,0,1,10,0),ae(0,3,5,-1,0,5,8,0,0,1,14,0),ae(0,3,5,-1,0,6,10,0,0,1,18,0),ae(0,4,5,-2,0,7,10,1,0,2,16,1),ae(0,5,5,-3,0,8,10,1,0,3,14,2),ae(0,5,6,-3,0,9,12,1,0,3,16,2),ae(0,6,6,-3,0,10,14,1,0,4,18,3),ae(0,6,7,-4,0,11,15,1,0,4,20,3),ae(0,7,8,-4,0,12,17,2,0,5,22,4),ae(0,7,8,-4,0,13,19,2,0,5,24,4),ae(0,7,9,-4,0,14,21,2,0,5,26,4),ae(0,8,9,-5,0,15,22,2,0,6,28,5),ae(0,8,10,-5,0,16,24,2,0,6,30,5),ae(0,8,11,-5,0,17,26,2,0,6,32,5),ae(0,9,11,-5,0,18,28,2,0,7,34,6),ae(0,9,12,-6,0,19,29,2,0,7,36,6),ae(0,10,13,-6,0,20,31,3,0,8,38,7),ae(0,10,13,-6,0,21,33,3,0,8,40,7),ae(0,10,14,-6,0,22,35,3,0,8,42,7),ae(0,11,14,-7,0,23,36,3,0,9,44,8),ae(0,11,15,-7,0,24,38,3,0,9,46,8)],Gk={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Hk={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function D4(t){return`${Math.round(t)}ms`}function Yk(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function Fk(t){const e={...Gk,...t.easing},n={...Hk,...t.duration};return{getAutoHeightDuration:Yk,create:(s=["all"],l={})=>{const{duration:c=n.standard,easing:f=e.easeInOut,delay:h=0,...p}=l;return(Array.isArray(s)?s:[s]).map(v=>`${v} ${typeof c=="string"?c:D4(c)} ${f} ${typeof h=="string"?h:D4(h)}`).join(",")},...t,easing:e,duration:n}}const Xk={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Ik(t){return dn(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function uq(t={}){const e={...t};function n(a){const s=Object.entries(a);for(let l=0;l<s.length;l++){const[c,f]=s[l];!Ik(f)||c.startsWith("unstable_")?delete a[c]:dn(f)&&(a[c]={...f},n(a[c]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function Ub(t={},...e){const{breakpoints:n,mixins:a={},spacing:s,palette:l={},transitions:c={},typography:f={},shape:h,...p}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(da(20));const v=iS(l),g=Nu(t);let S=Tr(g,{mixins:Bk(g.breakpoints,a),palette:v,shadows:kk.slice(),typography:Vk(v,f),transitions:Fk(c),zIndex:{...Xk}});return S=Tr(S,p),S=e.reduce((y,A)=>Tr(y,A),S),S.unstable_sxConfig={...Du,...p==null?void 0:p.unstable_sxConfig},S.unstable_sx=function(A){return ha({sx:A,theme:this})},S.toRuntimeSource=uq,S}function Kk(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const Zk=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=Kk(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function lq(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function cq(t){return t==="dark"?Zk:[]}function Qk(t){const{palette:e={mode:"light"},opacity:n,overlays:a,...s}=t,l=iS(e);return{palette:l,opacity:{...lq(l.mode),...n},overlays:a||cq(l.mode),...s}}function Wk(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const Jk=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],tG=t=>(e,n)=>{const a=t.rootSelector||":root",s=t.colorSchemeSelector;let l=s;if(s==="class"&&(l=".%s"),s==="data"&&(l="[data-%s]"),s!=null&&s.startsWith("data-")&&!s.includes("%s")&&(l=`[${s}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const c={};return Jk(t.cssVarPrefix).forEach(f=>{c[f]=n[f],delete n[f]}),l==="media"?{[a]:n,"@media (prefers-color-scheme: dark)":{[a]:c}}:l?{[l.replace("%s",e)]:c,[`${a}, ${l.replace("%s",e)}`]:n}:{[a]:{...n,...c}}}if(l&&l!=="media")return`${a}, ${l.replace("%s",String(e))}`}else if(e){if(l==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[a]:n}};if(l)return l.replace("%s",String(e))}return a};function eG(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function nt(t,e,n){!t[e]&&n&&(t[e]=n)}function nu(t){return typeof t!="string"||!t.startsWith("hsl")?t:aq(t)}function Vn(t,e){`${e}Channel`in t||(t[`${e}Channel`]=ru(nu(t[e])))}function rG(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const ln=t=>{try{return t()}catch{}},nG=(t="mui")=>ek(t);function fb(t,e,n,a){if(!e)return;e=e===!0?{}:e;const s=a==="dark"?"dark":"light";if(!n){t[a]=Qk({...e,palette:{mode:s,...e==null?void 0:e.palette}});return}const{palette:l,...c}=Ub({...n,palette:{mode:s,...e==null?void 0:e.palette}});return t[a]={...e,palette:l,opacity:{...lq(s),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||cq(s)},c}function iG(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:a,disableCssColorScheme:s=!1,cssVarPrefix:l="mui",shouldSkipGeneratingVar:c=Wk,colorSchemeSelector:f=n.light&&n.dark?"media":void 0,rootSelector:h=":root",...p}=t,v=Object.keys(n)[0],g=a||(n.light&&v!=="light"?"light":v),S=nG(l),{[g]:y,light:A,dark:b,...M}=n,$={...M};let B=y;if((g==="dark"&&!("dark"in n)||g==="light"&&!("light"in n))&&(B=!0),!B)throw new Error(da(21,g));const _=fb($,B,p,g);A&&!$.light&&fb($,A,void 0,"light"),b&&!$.dark&&fb($,b,void 0,"dark");let N={defaultColorScheme:g,..._,cssVarPrefix:l,colorSchemeSelector:f,rootSelector:h,getCssVar:S,colorSchemes:$,font:{...Nk(_.typography),..._.font},spacing:rG(p.spacing)};Object.keys(N.colorSchemes).forEach(rt=>{const R=N.colorSchemes[rt].palette,Y=et=>{const ct=et.split("-"),ft=ct[1],dt=ct[2];return S(et,R[ft][dt])};if(R.mode==="light"&&(nt(R.common,"background","#fff"),nt(R.common,"onBackground","#000")),R.mode==="dark"&&(nt(R.common,"background","#000"),nt(R.common,"onBackground","#fff")),eG(R,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),R.mode==="light"){nt(R.Alert,"errorColor",Wt(R.error.light,.6)),nt(R.Alert,"infoColor",Wt(R.info.light,.6)),nt(R.Alert,"successColor",Wt(R.success.light,.6)),nt(R.Alert,"warningColor",Wt(R.warning.light,.6)),nt(R.Alert,"errorFilledBg",Y("palette-error-main")),nt(R.Alert,"infoFilledBg",Y("palette-info-main")),nt(R.Alert,"successFilledBg",Y("palette-success-main")),nt(R.Alert,"warningFilledBg",Y("palette-warning-main")),nt(R.Alert,"errorFilledColor",ln(()=>R.getContrastText(R.error.main))),nt(R.Alert,"infoFilledColor",ln(()=>R.getContrastText(R.info.main))),nt(R.Alert,"successFilledColor",ln(()=>R.getContrastText(R.success.main))),nt(R.Alert,"warningFilledColor",ln(()=>R.getContrastText(R.warning.main))),nt(R.Alert,"errorStandardBg",Jt(R.error.light,.9)),nt(R.Alert,"infoStandardBg",Jt(R.info.light,.9)),nt(R.Alert,"successStandardBg",Jt(R.success.light,.9)),nt(R.Alert,"warningStandardBg",Jt(R.warning.light,.9)),nt(R.Alert,"errorIconColor",Y("palette-error-main")),nt(R.Alert,"infoIconColor",Y("palette-info-main")),nt(R.Alert,"successIconColor",Y("palette-success-main")),nt(R.Alert,"warningIconColor",Y("palette-warning-main")),nt(R.AppBar,"defaultBg",Y("palette-grey-100")),nt(R.Avatar,"defaultBg",Y("palette-grey-400")),nt(R.Button,"inheritContainedBg",Y("palette-grey-300")),nt(R.Button,"inheritContainedHoverBg",Y("palette-grey-A100")),nt(R.Chip,"defaultBorder",Y("palette-grey-400")),nt(R.Chip,"defaultAvatarColor",Y("palette-grey-700")),nt(R.Chip,"defaultIconColor",Y("palette-grey-700")),nt(R.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),nt(R.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),nt(R.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),nt(R.LinearProgress,"primaryBg",Jt(R.primary.main,.62)),nt(R.LinearProgress,"secondaryBg",Jt(R.secondary.main,.62)),nt(R.LinearProgress,"errorBg",Jt(R.error.main,.62)),nt(R.LinearProgress,"infoBg",Jt(R.info.main,.62)),nt(R.LinearProgress,"successBg",Jt(R.success.main,.62)),nt(R.LinearProgress,"warningBg",Jt(R.warning.main,.62)),nt(R.Skeleton,"bg",`rgba(${Y("palette-text-primaryChannel")} / 0.11)`),nt(R.Slider,"primaryTrack",Jt(R.primary.main,.62)),nt(R.Slider,"secondaryTrack",Jt(R.secondary.main,.62)),nt(R.Slider,"errorTrack",Jt(R.error.main,.62)),nt(R.Slider,"infoTrack",Jt(R.info.main,.62)),nt(R.Slider,"successTrack",Jt(R.success.main,.62)),nt(R.Slider,"warningTrack",Jt(R.warning.main,.62));const et=sc(R.background.default,.8);nt(R.SnackbarContent,"bg",et),nt(R.SnackbarContent,"color",ln(()=>R.getContrastText(et))),nt(R.SpeedDialAction,"fabHoverBg",sc(R.background.paper,.15)),nt(R.StepConnector,"border",Y("palette-grey-400")),nt(R.StepContent,"border",Y("palette-grey-400")),nt(R.Switch,"defaultColor",Y("palette-common-white")),nt(R.Switch,"defaultDisabledColor",Y("palette-grey-100")),nt(R.Switch,"primaryDisabledColor",Jt(R.primary.main,.62)),nt(R.Switch,"secondaryDisabledColor",Jt(R.secondary.main,.62)),nt(R.Switch,"errorDisabledColor",Jt(R.error.main,.62)),nt(R.Switch,"infoDisabledColor",Jt(R.info.main,.62)),nt(R.Switch,"successDisabledColor",Jt(R.success.main,.62)),nt(R.Switch,"warningDisabledColor",Jt(R.warning.main,.62)),nt(R.TableCell,"border",Jt(oc(R.divider,1),.88)),nt(R.Tooltip,"bg",oc(R.grey[700],.92))}if(R.mode==="dark"){nt(R.Alert,"errorColor",Jt(R.error.light,.6)),nt(R.Alert,"infoColor",Jt(R.info.light,.6)),nt(R.Alert,"successColor",Jt(R.success.light,.6)),nt(R.Alert,"warningColor",Jt(R.warning.light,.6)),nt(R.Alert,"errorFilledBg",Y("palette-error-dark")),nt(R.Alert,"infoFilledBg",Y("palette-info-dark")),nt(R.Alert,"successFilledBg",Y("palette-success-dark")),nt(R.Alert,"warningFilledBg",Y("palette-warning-dark")),nt(R.Alert,"errorFilledColor",ln(()=>R.getContrastText(R.error.dark))),nt(R.Alert,"infoFilledColor",ln(()=>R.getContrastText(R.info.dark))),nt(R.Alert,"successFilledColor",ln(()=>R.getContrastText(R.success.dark))),nt(R.Alert,"warningFilledColor",ln(()=>R.getContrastText(R.warning.dark))),nt(R.Alert,"errorStandardBg",Wt(R.error.light,.9)),nt(R.Alert,"infoStandardBg",Wt(R.info.light,.9)),nt(R.Alert,"successStandardBg",Wt(R.success.light,.9)),nt(R.Alert,"warningStandardBg",Wt(R.warning.light,.9)),nt(R.Alert,"errorIconColor",Y("palette-error-main")),nt(R.Alert,"infoIconColor",Y("palette-info-main")),nt(R.Alert,"successIconColor",Y("palette-success-main")),nt(R.Alert,"warningIconColor",Y("palette-warning-main")),nt(R.AppBar,"defaultBg",Y("palette-grey-900")),nt(R.AppBar,"darkBg",Y("palette-background-paper")),nt(R.AppBar,"darkColor",Y("palette-text-primary")),nt(R.Avatar,"defaultBg",Y("palette-grey-600")),nt(R.Button,"inheritContainedBg",Y("palette-grey-800")),nt(R.Button,"inheritContainedHoverBg",Y("palette-grey-700")),nt(R.Chip,"defaultBorder",Y("palette-grey-700")),nt(R.Chip,"defaultAvatarColor",Y("palette-grey-300")),nt(R.Chip,"defaultIconColor",Y("palette-grey-300")),nt(R.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),nt(R.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),nt(R.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),nt(R.LinearProgress,"primaryBg",Wt(R.primary.main,.5)),nt(R.LinearProgress,"secondaryBg",Wt(R.secondary.main,.5)),nt(R.LinearProgress,"errorBg",Wt(R.error.main,.5)),nt(R.LinearProgress,"infoBg",Wt(R.info.main,.5)),nt(R.LinearProgress,"successBg",Wt(R.success.main,.5)),nt(R.LinearProgress,"warningBg",Wt(R.warning.main,.5)),nt(R.Skeleton,"bg",`rgba(${Y("palette-text-primaryChannel")} / 0.13)`),nt(R.Slider,"primaryTrack",Wt(R.primary.main,.5)),nt(R.Slider,"secondaryTrack",Wt(R.secondary.main,.5)),nt(R.Slider,"errorTrack",Wt(R.error.main,.5)),nt(R.Slider,"infoTrack",Wt(R.info.main,.5)),nt(R.Slider,"successTrack",Wt(R.success.main,.5)),nt(R.Slider,"warningTrack",Wt(R.warning.main,.5));const et=sc(R.background.default,.98);nt(R.SnackbarContent,"bg",et),nt(R.SnackbarContent,"color",ln(()=>R.getContrastText(et))),nt(R.SpeedDialAction,"fabHoverBg",sc(R.background.paper,.15)),nt(R.StepConnector,"border",Y("palette-grey-600")),nt(R.StepContent,"border",Y("palette-grey-600")),nt(R.Switch,"defaultColor",Y("palette-grey-300")),nt(R.Switch,"defaultDisabledColor",Y("palette-grey-600")),nt(R.Switch,"primaryDisabledColor",Wt(R.primary.main,.55)),nt(R.Switch,"secondaryDisabledColor",Wt(R.secondary.main,.55)),nt(R.Switch,"errorDisabledColor",Wt(R.error.main,.55)),nt(R.Switch,"infoDisabledColor",Wt(R.info.main,.55)),nt(R.Switch,"successDisabledColor",Wt(R.success.main,.55)),nt(R.Switch,"warningDisabledColor",Wt(R.warning.main,.55)),nt(R.TableCell,"border",Wt(oc(R.divider,1),.68)),nt(R.Tooltip,"bg",oc(R.grey[700],.92))}Vn(R.background,"default"),Vn(R.background,"paper"),Vn(R.common,"background"),Vn(R.common,"onBackground"),Vn(R,"divider"),Object.keys(R).forEach(et=>{const ct=R[et];et!=="tonalOffset"&&ct&&typeof ct=="object"&&(ct.main&&nt(R[et],"mainChannel",ru(nu(ct.main))),ct.light&&nt(R[et],"lightChannel",ru(nu(ct.light))),ct.dark&&nt(R[et],"darkChannel",ru(nu(ct.dark))),ct.contrastText&&nt(R[et],"contrastTextChannel",ru(nu(ct.contrastText))),et==="text"&&(Vn(R[et],"primary"),Vn(R[et],"secondary")),et==="action"&&(ct.active&&Vn(R[et],"active"),ct.selected&&Vn(R[et],"selected")))})}),N=e.reduce((rt,R)=>Tr(rt,R),N);const L={prefix:l,disableCssColorScheme:s,shouldSkipGeneratingVar:c,getSelector:tG(N)},{vars:k,generateThemeVars:j,generateStyleSheets:H}=ik(N,L);return N.vars=k,Object.entries(N.colorSchemes[N.defaultColorScheme]).forEach(([rt,R])=>{N[rt]=R}),N.generateThemeVars=j,N.generateStyleSheets=H,N.generateSpacing=function(){return XC(p.spacing,J2(this))},N.getColorSchemeSelector=ak(f),N.spacing=N.generateSpacing(),N.shouldSkipGeneratingVar=c,N.unstable_sxConfig={...Du,...p==null?void 0:p.unstable_sxConfig},N.unstable_sx=function(R){return ha({sx:R,theme:this})},N.toRuntimeSource=uq,N}function N4(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:iS({...n===!0?{}:n.palette,mode:e})})}function fq(t={},...e){const{palette:n,cssVariables:a=!1,colorSchemes:s=n?void 0:{light:!0},defaultColorScheme:l=n==null?void 0:n.mode,...c}=t,f=l||"light",h=s==null?void 0:s[f],p={...s,...n?{[f]:{...typeof h!="boolean"&&h,palette:n}}:void 0};if(a===!1){if(!("colorSchemes"in t))return Ub(t,...e);let v=n;"palette"in t||p[f]&&(p[f]!==!0?v=p[f].palette:f==="dark"&&(v={mode:"dark"}));const g=Ub({...t,palette:v},...e);return g.defaultColorScheme=f,g.colorSchemes=p,g.palette.mode==="light"&&(g.colorSchemes.light={...p.light!==!0&&p.light,palette:g.palette},N4(g,"dark",p.dark)),g.palette.mode==="dark"&&(g.colorSchemes.dark={...p.dark!==!0&&p.dark,palette:g.palette},N4(g,"light",p.light)),g}return!n&&!("light"in p)&&f==="light"&&(p.light=!0),iG({...c,colorSchemes:p,defaultColorScheme:f,...typeof a!="boolean"&&a},...e)}const dq=fq();function Zn(){const t=Bu(dq);return t[of]||t}function aG(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const oG=t=>aG(t)&&t!=="classes",tr=JC({themeId:of,defaultTheme:dq,rootShouldForwardProp:oG});function sG(){return eS}const Fr=tk;function Qn(t){return JU(t)}function uG(t){return Tn("MuiSvgIcon",t)}Ci("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const lG=t=>{const{color:e,fontSize:n,classes:a}=t,s={root:["root",e!=="inherit"&&`color${ne(e)}`,`fontSize${ne(n)}`]};return Kn(s,uG,a)},cG=tr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${ne(n.color)}`],e[`fontSize${ne(n.fontSize)}`]]}})(Fr(({theme:t})=>{var e,n,a,s,l,c,f,h,p,v,g,S,y,A;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(s=(e=t.transitions)==null?void 0:e.create)==null?void 0:s.call(e,"fill",{duration:(a=(n=(t.vars??t).transitions)==null?void 0:n.duration)==null?void 0:a.shorter}),variants:[{props:b=>!b.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((c=(l=t.typography)==null?void 0:l.pxToRem)==null?void 0:c.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((h=(f=t.typography)==null?void 0:f.pxToRem)==null?void 0:h.call(f,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((v=(p=t.typography)==null?void 0:p.pxToRem)==null?void 0:v.call(p,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,b])=>b&&b.main).map(([b])=>{var M,$;return{props:{color:b},style:{color:($=(M=(t.vars??t).palette)==null?void 0:M[b])==null?void 0:$.main}}}),{props:{color:"action"},style:{color:(S=(g=(t.vars??t).palette)==null?void 0:g.action)==null?void 0:S.active}},{props:{color:"disabled"},style:{color:(A=(y=(t.vars??t).palette)==null?void 0:y.action)==null?void 0:A.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),kb=Z.forwardRef(function(e,n){const a=Qn({props:e,name:"MuiSvgIcon"}),{children:s,className:l,color:c="inherit",component:f="svg",fontSize:h="medium",htmlColor:p,inheritViewBox:v=!1,titleAccess:g,viewBox:S="0 0 24 24",...y}=a,A=Z.isValidElement(s)&&s.type==="svg",b={...a,color:c,component:f,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:v,viewBox:S,hasSvgAsChild:A},M={};v||(M.viewBox=S);const $=lG(b);return vt.jsxs(cG,{as:f,className:zr($.root,l),focusable:"false",color:p,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:n,...M,...y,...A&&s.props,ownerState:b,children:[A?s.props.children:s,g?vt.jsx("title",{children:g}):null]})});kb.muiName="SvgIcon";function fG(t,e){function n(a,s){return vt.jsx(kb,{"data-testid":void 0,ref:s,...a,children:t})}return n.muiName=kb.muiName,Z.memo(Z.forwardRef(n))}function B4(t){return t&&t.ownerDocument||document}function j4(t,e){typeof t=="function"?t(e):t&&(t.current=e)}let V4=0;function dG(t){const[e,n]=Z.useState(t),a=t||e;return Z.useEffect(()=>{e==null&&(V4+=1,n(`mui-${V4}`))},[e]),a}const hG={...Oc},P4=hG.useId;function pG(t){if(P4!==void 0){const e=P4();return t??e}return dG(t)}function mG(t){const{controlled:e,default:n}=t,{current:a}=Z.useRef(e!==void 0),[s,l]=Z.useState(n),c=a?e:s,f=Z.useCallback(h=>{a||l(h)},[]);return[c,f]}function z4(t){const e=Z.useRef(t);return $o(()=>{e.current=t}),Z.useRef((...n)=>(0,e.current)(...n)).current}function pa(...t){const e=Z.useRef(void 0),n=Z.useCallback(a=>{const s=t.map(l=>{if(l==null)return null;if(typeof l=="function"){const c=l,f=c(a);return typeof f=="function"?f:()=>{c(null)}}return l.current=a,()=>{l.current=null}});return()=>{s.forEach(l=>l==null?void 0:l())}},t);return Z.useMemo(()=>t.every(a=>a==null)?null:a=>{e.current&&(e.current(),e.current=void 0),a!=null&&(e.current=n(a))},t)}function vG(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function Gb(t,e){return Gb=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Gb(t,e)}function gG(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Gb(t,e)}var hq=$_();const uc=Hc(hq),U4={disabled:!1},pq=go.createContext(null);var yG=function(e){return e.scrollTop},iu="unmounted",na="exited",ia="entering",vo="entered",Hb="exiting",Wn=function(t){gG(e,t);function e(a,s){var l;l=t.call(this,a,s)||this;var c=s,f=c&&!c.isMounting?a.enter:a.appear,h;return l.appearStatus=null,a.in?f?(h=na,l.appearStatus=ia):h=vo:a.unmountOnExit||a.mountOnEnter?h=iu:h=na,l.state={status:h},l.nextCallback=null,l}e.getDerivedStateFromProps=function(s,l){var c=s.in;return c&&l.status===iu?{status:na}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(s){var l=null;if(s!==this.props){var c=this.state.status;this.props.in?c!==ia&&c!==vo&&(l=ia):(c===ia||c===vo)&&(l=Hb)}this.updateStatus(!1,l)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var s=this.props.timeout,l,c,f;return l=c=f=s,s!=null&&typeof s!="number"&&(l=s.exit,c=s.enter,f=s.appear!==void 0?s.appear:c),{exit:l,enter:c,appear:f}},n.updateStatus=function(s,l){if(s===void 0&&(s=!1),l!==null)if(this.cancelNextCallback(),l===ia){if(this.props.unmountOnExit||this.props.mountOnEnter){var c=this.props.nodeRef?this.props.nodeRef.current:uc.findDOMNode(this);c&&yG(c)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===na&&this.setState({status:iu})},n.performEnter=function(s){var l=this,c=this.props.enter,f=this.context?this.context.isMounting:s,h=this.props.nodeRef?[f]:[uc.findDOMNode(this),f],p=h[0],v=h[1],g=this.getTimeouts(),S=f?g.appear:g.enter;if(!s&&!c||U4.disabled){this.safeSetState({status:vo},function(){l.props.onEntered(p)});return}this.props.onEnter(p,v),this.safeSetState({status:ia},function(){l.props.onEntering(p,v),l.onTransitionEnd(S,function(){l.safeSetState({status:vo},function(){l.props.onEntered(p,v)})})})},n.performExit=function(){var s=this,l=this.props.exit,c=this.getTimeouts(),f=this.props.nodeRef?void 0:uc.findDOMNode(this);if(!l||U4.disabled){this.safeSetState({status:na},function(){s.props.onExited(f)});return}this.props.onExit(f),this.safeSetState({status:Hb},function(){s.props.onExiting(f),s.onTransitionEnd(c.exit,function(){s.safeSetState({status:na},function(){s.props.onExited(f)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(s,l){l=this.setNextCallback(l),this.setState(s,l)},n.setNextCallback=function(s){var l=this,c=!0;return this.nextCallback=function(f){c&&(c=!1,l.nextCallback=null,s(f))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},n.onTransitionEnd=function(s,l){this.setNextCallback(l);var c=this.props.nodeRef?this.props.nodeRef.current:uc.findDOMNode(this),f=s==null&&!this.props.addEndListener;if(!c||f){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],p=h[0],v=h[1];this.props.addEndListener(p,v)}s!=null&&setTimeout(this.nextCallback,s)},n.render=function(){var s=this.state.status;if(s===iu)return null;var l=this.props,c=l.children;l.in,l.mountOnEnter,l.unmountOnExit,l.appear,l.enter,l.exit,l.timeout,l.addEndListener,l.onEnter,l.onEntering,l.onEntered,l.onExit,l.onExiting,l.onExited,l.nodeRef;var f=vG(l,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return go.createElement(pq.Provider,{value:null},typeof c=="function"?c(s,f):go.cloneElement(go.Children.only(c),f))},e}(go.Component);Wn.contextType=pq;Wn.propTypes={};function fo(){}Wn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:fo,onEntering:fo,onEntered:fo,onExit:fo,onExiting:fo,onExited:fo};Wn.UNMOUNTED=iu;Wn.EXITED=na;Wn.ENTERING=ia;Wn.ENTERED=vo;Wn.EXITING=Hb;const k4={};function bG(t,e){const n=Z.useRef(k4);return n.current===k4&&(n.current=t(e)),n}const SG=[];function TG(t){Z.useEffect(t,SG)}class Ef{constructor(){ic(this,"currentId",null);ic(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});ic(this,"disposeEffect",()=>this.clear)}static create(){return new Ef}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function au(){const t=bG(Ef.create).current;return TG(t.disposeEffect),t}const wG=t=>t.scrollTop;function G4(t,e){const{timeout:n,easing:a,style:s={}}=t;return{duration:s.transitionDuration??(typeof n=="number"?n:n[e.mode]||0),easing:s.transitionTimingFunction??(typeof a=="object"?a[e.mode]:a),delay:s.transitionDelay}}function EG(t){return typeof t=="string"}function mq(t,e,n){return t===void 0||EG(t)?e:{...e,ownerState:{...e.ownerState,...n}}}function vq(t,e,n){return typeof t=="function"?t(e,n):t}function AG(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(a=>a.match(/^on[A-Z]/)&&typeof t[a]=="function"&&!e.includes(a)).forEach(a=>{n[a]=t[a]}),n}function H4(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function gq(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:a,externalForwardedProps:s,className:l}=t;if(!e){const y=zr(n==null?void 0:n.className,l,s==null?void 0:s.className,a==null?void 0:a.className),A={...n==null?void 0:n.style,...s==null?void 0:s.style,...a==null?void 0:a.style},b={...n,...s,...a};return y.length>0&&(b.className=y),Object.keys(A).length>0&&(b.style=A),{props:b,internalRef:void 0}}const c=AG({...s,...a}),f=H4(a),h=H4(s),p=e(c),v=zr(p==null?void 0:p.className,n==null?void 0:n.className,l,s==null?void 0:s.className,a==null?void 0:a.className),g={...p==null?void 0:p.style,...n==null?void 0:n.style,...s==null?void 0:s.style,...a==null?void 0:a.style},S={...p,...n,...h,...f};return v.length>0&&(S.className=v),Object.keys(g).length>0&&(S.style=g),{props:S,internalRef:p.ref}}function lc(t,e){const{className:n,elementType:a,ownerState:s,externalForwardedProps:l,internalForwardedProps:c,shouldForwardComponentProp:f=!1,...h}=e,{component:p,slots:v={[t]:void 0},slotProps:g={[t]:void 0},...S}=l,y=v[t]||a,A=vq(g[t],s),{props:{component:b,...M},internalRef:$}=gq({className:n,...h,externalForwardedProps:t==="root"?S:void 0,externalSlotProps:A}),B=pa($,A==null?void 0:A.ref,e.ref),_=t==="root"?b||p:b,N=mq(y,{...t==="root"&&!p&&!v[t]&&c,...t!=="root"&&!v[t]&&c,...M,..._&&!f&&{as:_},..._&&f&&{component:_},ref:B},s);return[y,N]}function Dc(t){try{return t.matches(":focus-visible")}catch{}return!1}function RG(t){return typeof t.main=="string"}function xG(t,e=[]){if(!RG(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function ma(t=[]){return([,e])=>e&&xG(e,t)}function MG(t){return Tn("MuiTypography",t)}Ci("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $G={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},OG=sG(),_G=t=>{const{align:e,gutterBottom:n,noWrap:a,paragraph:s,variant:l,classes:c}=t,f={root:["root",l,t.align!=="inherit"&&`align${ne(e)}`,n&&"gutterBottom",a&&"noWrap",s&&"paragraph"]};return Kn(f,MG,c)},CG=tr("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.variant&&e[n.variant],n.align!=="inherit"&&e[`align${ne(n.align)}`],n.noWrap&&e.noWrap,n.gutterBottom&&e.gutterBottom,n.paragraph&&e.paragraph]}})(Fr(({theme:t})=>{var e;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([n,a])=>n!=="inherit"&&a&&typeof a=="object").map(([n,a])=>({props:{variant:n},style:a})),...Object.entries(t.palette).filter(ma()).map(([n])=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),...Object.entries(((e=t.palette)==null?void 0:e.text)||{}).filter(([,n])=>typeof n=="string").map(([n])=>({props:{color:`text${ne(n)}`},style:{color:(t.vars||t).palette.text[n]}})),{props:({ownerState:n})=>n.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:n})=>n.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:n})=>n.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:n})=>n.paragraph,style:{marginBottom:16}}]}})),Y4={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},yo=Z.forwardRef(function(e,n){const{color:a,...s}=Qn({props:e,name:"MuiTypography"}),l=!$G[a],c=OG({...s,...l&&{color:a}}),{align:f="inherit",className:h,component:p,gutterBottom:v=!1,noWrap:g=!1,paragraph:S=!1,variant:y="body1",variantMapping:A=Y4,...b}=c,M={...c,align:f,color:a,className:h,component:p,gutterBottom:v,noWrap:g,paragraph:S,variant:y,variantMapping:A},$=p||(S?"p":A[y]||Y4[y])||"span",B=_G(M);return vt.jsx(CG,{as:$,ref:n,className:zr(B.root,h),...b,ownerState:M,style:{...f!=="inherit"&&{"--Typography-textAlign":f},...b.style}})});var ur="top",Ur="bottom",kr="right",lr="left",aS="auto",ju=[ur,Ur,kr,lr],Oo="start",bu="end",qG="clippingParents",yq="viewport",Js="popper",LG="reference",F4=ju.reduce(function(t,e){return t.concat([e+"-"+Oo,e+"-"+bu])},[]),bq=[].concat(ju,[aS]).reduce(function(t,e){return t.concat([e,e+"-"+Oo,e+"-"+bu])},[]),DG="beforeRead",NG="read",BG="afterRead",jG="beforeMain",VG="main",PG="afterMain",zG="beforeWrite",UG="write",kG="afterWrite",GG=[DG,NG,BG,jG,VG,PG,zG,UG,kG];function bn(t){return t?(t.nodeName||"").toLowerCase():null}function wr(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function va(t){var e=wr(t).Element;return t instanceof e||t instanceof Element}function jr(t){var e=wr(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function oS(t){if(typeof ShadowRoot>"u")return!1;var e=wr(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function HG(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var a=e.styles[n]||{},s=e.attributes[n]||{},l=e.elements[n];!jr(l)||!bn(l)||(Object.assign(l.style,a),Object.keys(s).forEach(function(c){var f=s[c];f===!1?l.removeAttribute(c):l.setAttribute(c,f===!0?"":f)}))})}function YG(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(a){var s=e.elements[a],l=e.attributes[a]||{},c=Object.keys(e.styles.hasOwnProperty(a)?e.styles[a]:n[a]),f=c.reduce(function(h,p){return h[p]="",h},{});!jr(s)||!bn(s)||(Object.assign(s.style,f),Object.keys(l).forEach(function(h){s.removeAttribute(h)}))})}}const FG={name:"applyStyles",enabled:!0,phase:"write",fn:HG,effect:YG,requires:["computeStyles"]};function pn(t){return t.split("-")[0]}var ua=Math.max,Nc=Math.min,_o=Math.round;function Yb(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Sq(){return!/^((?!chrome|android).)*safari/i.test(Yb())}function Co(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var a=t.getBoundingClientRect(),s=1,l=1;e&&jr(t)&&(s=t.offsetWidth>0&&_o(a.width)/t.offsetWidth||1,l=t.offsetHeight>0&&_o(a.height)/t.offsetHeight||1);var c=va(t)?wr(t):window,f=c.visualViewport,h=!Sq()&&n,p=(a.left+(h&&f?f.offsetLeft:0))/s,v=(a.top+(h&&f?f.offsetTop:0))/l,g=a.width/s,S=a.height/l;return{width:g,height:S,top:v,right:p+g,bottom:v+S,left:p,x:p,y:v}}function sS(t){var e=Co(t),n=t.offsetWidth,a=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-a)<=1&&(a=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:a}}function Tq(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&oS(n)){var a=e;do{if(a&&t.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Yn(t){return wr(t).getComputedStyle(t)}function XG(t){return["table","td","th"].indexOf(bn(t))>=0}function qi(t){return((va(t)?t.ownerDocument:t.document)||window.document).documentElement}function Af(t){return bn(t)==="html"?t:t.assignedSlot||t.parentNode||(oS(t)?t.host:null)||qi(t)}function X4(t){return!jr(t)||Yn(t).position==="fixed"?null:t.offsetParent}function IG(t){var e=/firefox/i.test(Yb()),n=/Trident/i.test(Yb());if(n&&jr(t)){var a=Yn(t);if(a.position==="fixed")return null}var s=Af(t);for(oS(s)&&(s=s.host);jr(s)&&["html","body"].indexOf(bn(s))<0;){var l=Yn(s);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||e&&l.willChange==="filter"||e&&l.filter&&l.filter!=="none")return s;s=s.parentNode}return null}function Vu(t){for(var e=wr(t),n=X4(t);n&&XG(n)&&Yn(n).position==="static";)n=X4(n);return n&&(bn(n)==="html"||bn(n)==="body"&&Yn(n).position==="static")?e:n||IG(t)||e}function uS(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function uu(t,e,n){return ua(t,Nc(e,n))}function KG(t,e,n){var a=uu(t,e,n);return a>n?n:a}function wq(){return{top:0,right:0,bottom:0,left:0}}function Eq(t){return Object.assign({},wq(),t)}function Aq(t,e){return e.reduce(function(n,a){return n[a]=t,n},{})}var ZG=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Eq(typeof e!="number"?e:Aq(e,ju))};function QG(t){var e,n=t.state,a=t.name,s=t.options,l=n.elements.arrow,c=n.modifiersData.popperOffsets,f=pn(n.placement),h=uS(f),p=[lr,kr].indexOf(f)>=0,v=p?"height":"width";if(!(!l||!c)){var g=ZG(s.padding,n),S=sS(l),y=h==="y"?ur:lr,A=h==="y"?Ur:kr,b=n.rects.reference[v]+n.rects.reference[h]-c[h]-n.rects.popper[v],M=c[h]-n.rects.reference[h],$=Vu(l),B=$?h==="y"?$.clientHeight||0:$.clientWidth||0:0,_=b/2-M/2,N=g[y],L=B-S[v]-g[A],k=B/2-S[v]/2+_,j=uu(N,k,L),H=h;n.modifiersData[a]=(e={},e[H]=j,e.centerOffset=j-k,e)}}function WG(t){var e=t.state,n=t.options,a=n.element,s=a===void 0?"[data-popper-arrow]":a;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||Tq(e.elements.popper,s)&&(e.elements.arrow=s))}const JG={name:"arrow",enabled:!0,phase:"main",fn:QG,effect:WG,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function qo(t){return t.split("-")[1]}var tH={top:"auto",right:"auto",bottom:"auto",left:"auto"};function eH(t,e){var n=t.x,a=t.y,s=e.devicePixelRatio||1;return{x:_o(n*s)/s||0,y:_o(a*s)/s||0}}function I4(t){var e,n=t.popper,a=t.popperRect,s=t.placement,l=t.variation,c=t.offsets,f=t.position,h=t.gpuAcceleration,p=t.adaptive,v=t.roundOffsets,g=t.isFixed,S=c.x,y=S===void 0?0:S,A=c.y,b=A===void 0?0:A,M=typeof v=="function"?v({x:y,y:b}):{x:y,y:b};y=M.x,b=M.y;var $=c.hasOwnProperty("x"),B=c.hasOwnProperty("y"),_=lr,N=ur,L=window;if(p){var k=Vu(n),j="clientHeight",H="clientWidth";if(k===wr(n)&&(k=qi(n),Yn(k).position!=="static"&&f==="absolute"&&(j="scrollHeight",H="scrollWidth")),k=k,s===ur||(s===lr||s===kr)&&l===bu){N=Ur;var rt=g&&k===L&&L.visualViewport?L.visualViewport.height:k[j];b-=rt-a.height,b*=h?1:-1}if(s===lr||(s===ur||s===Ur)&&l===bu){_=kr;var R=g&&k===L&&L.visualViewport?L.visualViewport.width:k[H];y-=R-a.width,y*=h?1:-1}}var Y=Object.assign({position:f},p&&tH),et=v===!0?eH({x:y,y:b},wr(n)):{x:y,y:b};if(y=et.x,b=et.y,h){var ct;return Object.assign({},Y,(ct={},ct[N]=B?"0":"",ct[_]=$?"0":"",ct.transform=(L.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",ct))}return Object.assign({},Y,(e={},e[N]=B?b+"px":"",e[_]=$?y+"px":"",e.transform="",e))}function rH(t){var e=t.state,n=t.options,a=n.gpuAcceleration,s=a===void 0?!0:a,l=n.adaptive,c=l===void 0?!0:l,f=n.roundOffsets,h=f===void 0?!0:f,p={placement:pn(e.placement),variation:qo(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,I4(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:h})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,I4(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const nH={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:rH,data:{}};var cc={passive:!0};function iH(t){var e=t.state,n=t.instance,a=t.options,s=a.scroll,l=s===void 0?!0:s,c=a.resize,f=c===void 0?!0:c,h=wr(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return l&&p.forEach(function(v){v.addEventListener("scroll",n.update,cc)}),f&&h.addEventListener("resize",n.update,cc),function(){l&&p.forEach(function(v){v.removeEventListener("scroll",n.update,cc)}),f&&h.removeEventListener("resize",n.update,cc)}}const aH={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:iH,data:{}};var oH={left:"right",right:"left",bottom:"top",top:"bottom"};function Ac(t){return t.replace(/left|right|bottom|top/g,function(e){return oH[e]})}var sH={start:"end",end:"start"};function K4(t){return t.replace(/start|end/g,function(e){return sH[e]})}function lS(t){var e=wr(t),n=e.pageXOffset,a=e.pageYOffset;return{scrollLeft:n,scrollTop:a}}function cS(t){return Co(qi(t)).left+lS(t).scrollLeft}function uH(t,e){var n=wr(t),a=qi(t),s=n.visualViewport,l=a.clientWidth,c=a.clientHeight,f=0,h=0;if(s){l=s.width,c=s.height;var p=Sq();(p||!p&&e==="fixed")&&(f=s.offsetLeft,h=s.offsetTop)}return{width:l,height:c,x:f+cS(t),y:h}}function lH(t){var e,n=qi(t),a=lS(t),s=(e=t.ownerDocument)==null?void 0:e.body,l=ua(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),c=ua(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),f=-a.scrollLeft+cS(t),h=-a.scrollTop;return Yn(s||n).direction==="rtl"&&(f+=ua(n.clientWidth,s?s.clientWidth:0)-l),{width:l,height:c,x:f,y:h}}function fS(t){var e=Yn(t),n=e.overflow,a=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+a)}function Rq(t){return["html","body","#document"].indexOf(bn(t))>=0?t.ownerDocument.body:jr(t)&&fS(t)?t:Rq(Af(t))}function lu(t,e){var n;e===void 0&&(e=[]);var a=Rq(t),s=a===((n=t.ownerDocument)==null?void 0:n.body),l=wr(a),c=s?[l].concat(l.visualViewport||[],fS(a)?a:[]):a,f=e.concat(c);return s?f:f.concat(lu(Af(c)))}function Fb(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function cH(t,e){var n=Co(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Z4(t,e,n){return e===yq?Fb(uH(t,n)):va(e)?cH(e,n):Fb(lH(qi(t)))}function fH(t){var e=lu(Af(t)),n=["absolute","fixed"].indexOf(Yn(t).position)>=0,a=n&&jr(t)?Vu(t):t;return va(a)?e.filter(function(s){return va(s)&&Tq(s,a)&&bn(s)!=="body"}):[]}function dH(t,e,n,a){var s=e==="clippingParents"?fH(t):[].concat(e),l=[].concat(s,[n]),c=l[0],f=l.reduce(function(h,p){var v=Z4(t,p,a);return h.top=ua(v.top,h.top),h.right=Nc(v.right,h.right),h.bottom=Nc(v.bottom,h.bottom),h.left=ua(v.left,h.left),h},Z4(t,c,a));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function xq(t){var e=t.reference,n=t.element,a=t.placement,s=a?pn(a):null,l=a?qo(a):null,c=e.x+e.width/2-n.width/2,f=e.y+e.height/2-n.height/2,h;switch(s){case ur:h={x:c,y:e.y-n.height};break;case Ur:h={x:c,y:e.y+e.height};break;case kr:h={x:e.x+e.width,y:f};break;case lr:h={x:e.x-n.width,y:f};break;default:h={x:e.x,y:e.y}}var p=s?uS(s):null;if(p!=null){var v=p==="y"?"height":"width";switch(l){case Oo:h[p]=h[p]-(e[v]/2-n[v]/2);break;case bu:h[p]=h[p]+(e[v]/2-n[v]/2);break}}return h}function Su(t,e){e===void 0&&(e={});var n=e,a=n.placement,s=a===void 0?t.placement:a,l=n.strategy,c=l===void 0?t.strategy:l,f=n.boundary,h=f===void 0?qG:f,p=n.rootBoundary,v=p===void 0?yq:p,g=n.elementContext,S=g===void 0?Js:g,y=n.altBoundary,A=y===void 0?!1:y,b=n.padding,M=b===void 0?0:b,$=Eq(typeof M!="number"?M:Aq(M,ju)),B=S===Js?LG:Js,_=t.rects.popper,N=t.elements[A?B:S],L=dH(va(N)?N:N.contextElement||qi(t.elements.popper),h,v,c),k=Co(t.elements.reference),j=xq({reference:k,element:_,placement:s}),H=Fb(Object.assign({},_,j)),rt=S===Js?H:k,R={top:L.top-rt.top+$.top,bottom:rt.bottom-L.bottom+$.bottom,left:L.left-rt.left+$.left,right:rt.right-L.right+$.right},Y=t.modifiersData.offset;if(S===Js&&Y){var et=Y[s];Object.keys(R).forEach(function(ct){var ft=[kr,Ur].indexOf(ct)>=0?1:-1,dt=[ur,Ur].indexOf(ct)>=0?"y":"x";R[ct]+=et[dt]*ft})}return R}function hH(t,e){e===void 0&&(e={});var n=e,a=n.placement,s=n.boundary,l=n.rootBoundary,c=n.padding,f=n.flipVariations,h=n.allowedAutoPlacements,p=h===void 0?bq:h,v=qo(a),g=v?f?F4:F4.filter(function(A){return qo(A)===v}):ju,S=g.filter(function(A){return p.indexOf(A)>=0});S.length===0&&(S=g);var y=S.reduce(function(A,b){return A[b]=Su(t,{placement:b,boundary:s,rootBoundary:l,padding:c})[pn(b)],A},{});return Object.keys(y).sort(function(A,b){return y[A]-y[b]})}function pH(t){if(pn(t)===aS)return[];var e=Ac(t);return[K4(t),e,K4(e)]}function mH(t){var e=t.state,n=t.options,a=t.name;if(!e.modifiersData[a]._skip){for(var s=n.mainAxis,l=s===void 0?!0:s,c=n.altAxis,f=c===void 0?!0:c,h=n.fallbackPlacements,p=n.padding,v=n.boundary,g=n.rootBoundary,S=n.altBoundary,y=n.flipVariations,A=y===void 0?!0:y,b=n.allowedAutoPlacements,M=e.options.placement,$=pn(M),B=$===M,_=h||(B||!A?[Ac(M)]:pH(M)),N=[M].concat(_).reduce(function(q,D){return q.concat(pn(D)===aS?hH(e,{placement:D,boundary:v,rootBoundary:g,padding:p,flipVariations:A,allowedAutoPlacements:b}):D)},[]),L=e.rects.reference,k=e.rects.popper,j=new Map,H=!0,rt=N[0],R=0;R<N.length;R++){var Y=N[R],et=pn(Y),ct=qo(Y)===Oo,ft=[ur,Ur].indexOf(et)>=0,dt=ft?"width":"height",P=Su(e,{placement:Y,boundary:v,rootBoundary:g,altBoundary:S,padding:p}),tt=ft?ct?kr:lr:ct?Ur:ur;L[dt]>k[dt]&&(tt=Ac(tt));var ot=Ac(tt),Q=[];if(l&&Q.push(P[et]<=0),f&&Q.push(P[tt]<=0,P[ot]<=0),Q.every(function(q){return q})){rt=Y,H=!1;break}j.set(Y,Q)}if(H)for(var C=A?3:1,T=function(D){var U=N.find(function(X){var mt=j.get(X);if(mt)return mt.slice(0,D).every(function(it){return it})});if(U)return rt=U,"break"},w=C;w>0;w--){var x=T(w);if(x==="break")break}e.placement!==rt&&(e.modifiersData[a]._skip=!0,e.placement=rt,e.reset=!0)}}const vH={name:"flip",enabled:!0,phase:"main",fn:mH,requiresIfExists:["offset"],data:{_skip:!1}};function Q4(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function W4(t){return[ur,kr,Ur,lr].some(function(e){return t[e]>=0})}function gH(t){var e=t.state,n=t.name,a=e.rects.reference,s=e.rects.popper,l=e.modifiersData.preventOverflow,c=Su(e,{elementContext:"reference"}),f=Su(e,{altBoundary:!0}),h=Q4(c,a),p=Q4(f,s,l),v=W4(h),g=W4(p);e.modifiersData[n]={referenceClippingOffsets:h,popperEscapeOffsets:p,isReferenceHidden:v,hasPopperEscaped:g},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":v,"data-popper-escaped":g})}const yH={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:gH};function bH(t,e,n){var a=pn(t),s=[lr,ur].indexOf(a)>=0?-1:1,l=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,c=l[0],f=l[1];return c=c||0,f=(f||0)*s,[lr,kr].indexOf(a)>=0?{x:f,y:c}:{x:c,y:f}}function SH(t){var e=t.state,n=t.options,a=t.name,s=n.offset,l=s===void 0?[0,0]:s,c=bq.reduce(function(v,g){return v[g]=bH(g,e.rects,l),v},{}),f=c[e.placement],h=f.x,p=f.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=h,e.modifiersData.popperOffsets.y+=p),e.modifiersData[a]=c}const TH={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:SH};function wH(t){var e=t.state,n=t.name;e.modifiersData[n]=xq({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const EH={name:"popperOffsets",enabled:!0,phase:"read",fn:wH,data:{}};function AH(t){return t==="x"?"y":"x"}function RH(t){var e=t.state,n=t.options,a=t.name,s=n.mainAxis,l=s===void 0?!0:s,c=n.altAxis,f=c===void 0?!1:c,h=n.boundary,p=n.rootBoundary,v=n.altBoundary,g=n.padding,S=n.tether,y=S===void 0?!0:S,A=n.tetherOffset,b=A===void 0?0:A,M=Su(e,{boundary:h,rootBoundary:p,padding:g,altBoundary:v}),$=pn(e.placement),B=qo(e.placement),_=!B,N=uS($),L=AH(N),k=e.modifiersData.popperOffsets,j=e.rects.reference,H=e.rects.popper,rt=typeof b=="function"?b(Object.assign({},e.rects,{placement:e.placement})):b,R=typeof rt=="number"?{mainAxis:rt,altAxis:rt}:Object.assign({mainAxis:0,altAxis:0},rt),Y=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,et={x:0,y:0};if(k){if(l){var ct,ft=N==="y"?ur:lr,dt=N==="y"?Ur:kr,P=N==="y"?"height":"width",tt=k[N],ot=tt+M[ft],Q=tt-M[dt],C=y?-H[P]/2:0,T=B===Oo?j[P]:H[P],w=B===Oo?-H[P]:-j[P],x=e.elements.arrow,q=y&&x?sS(x):{width:0,height:0},D=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:wq(),U=D[ft],X=D[dt],mt=uu(0,j[P],q[P]),it=_?j[P]/2-C-mt-U-R.mainAxis:T-mt-U-R.mainAxis,Et=_?-j[P]/2+C+mt+X+R.mainAxis:w+mt+X+R.mainAxis,ut=e.elements.arrow&&Vu(e.elements.arrow),W=ut?N==="y"?ut.clientTop||0:ut.clientLeft||0:0,pt=(ct=Y==null?void 0:Y[N])!=null?ct:0,Bt=tt+it-pt-W,yt=tt+Et-pt,Gt=uu(y?Nc(ot,Bt):ot,tt,y?ua(Q,yt):Q);k[N]=Gt,et[N]=Gt-tt}if(f){var Ht,Ce=N==="x"?ur:lr,Xr=N==="x"?Ur:kr,ke=k[L],Ze=L==="y"?"height":"width",en=ke+M[Ce],Ir=ke-M[Xr],rn=[ur,lr].indexOf($)!==-1,le=(Ht=Y==null?void 0:Y[L])!=null?Ht:0,ge=rn?en:ke-j[Ze]-H[Ze]-le+R.altAxis,bt=rn?ke+j[Ze]+H[Ze]-le-R.altAxis:Ir,re=y&&rn?KG(ge,ke,bt):uu(y?ge:en,ke,y?bt:Ir);k[L]=re,et[L]=re-ke}e.modifiersData[a]=et}}const xH={name:"preventOverflow",enabled:!0,phase:"main",fn:RH,requiresIfExists:["offset"]};function MH(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function $H(t){return t===wr(t)||!jr(t)?lS(t):MH(t)}function OH(t){var e=t.getBoundingClientRect(),n=_o(e.width)/t.offsetWidth||1,a=_o(e.height)/t.offsetHeight||1;return n!==1||a!==1}function _H(t,e,n){n===void 0&&(n=!1);var a=jr(e),s=jr(e)&&OH(e),l=qi(e),c=Co(t,s,n),f={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(a||!a&&!n)&&((bn(e)!=="body"||fS(l))&&(f=$H(e)),jr(e)?(h=Co(e,!0),h.x+=e.clientLeft,h.y+=e.clientTop):l&&(h.x=cS(l))),{x:c.left+f.scrollLeft-h.x,y:c.top+f.scrollTop-h.y,width:c.width,height:c.height}}function CH(t){var e=new Map,n=new Set,a=[];t.forEach(function(l){e.set(l.name,l)});function s(l){n.add(l.name);var c=[].concat(l.requires||[],l.requiresIfExists||[]);c.forEach(function(f){if(!n.has(f)){var h=e.get(f);h&&s(h)}}),a.push(l)}return t.forEach(function(l){n.has(l.name)||s(l)}),a}function qH(t){var e=CH(t);return GG.reduce(function(n,a){return n.concat(e.filter(function(s){return s.phase===a}))},[])}function LH(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function DH(t){var e=t.reduce(function(n,a){var s=n[a.name];return n[a.name]=s?Object.assign({},s,a,{options:Object.assign({},s.options,a.options),data:Object.assign({},s.data,a.data)}):a,n},{});return Object.keys(e).map(function(n){return e[n]})}var J4={placement:"bottom",modifiers:[],strategy:"absolute"};function tO(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function NH(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,a=n===void 0?[]:n,s=e.defaultOptions,l=s===void 0?J4:s;return function(f,h,p){p===void 0&&(p=l);var v={placement:"bottom",orderedModifiers:[],options:Object.assign({},J4,l),modifiersData:{},elements:{reference:f,popper:h},attributes:{},styles:{}},g=[],S=!1,y={state:v,setOptions:function($){var B=typeof $=="function"?$(v.options):$;b(),v.options=Object.assign({},l,v.options,B),v.scrollParents={reference:va(f)?lu(f):f.contextElement?lu(f.contextElement):[],popper:lu(h)};var _=qH(DH([].concat(a,v.options.modifiers)));return v.orderedModifiers=_.filter(function(N){return N.enabled}),A(),y.update()},forceUpdate:function(){if(!S){var $=v.elements,B=$.reference,_=$.popper;if(tO(B,_)){v.rects={reference:_H(B,Vu(_),v.options.strategy==="fixed"),popper:sS(_)},v.reset=!1,v.placement=v.options.placement,v.orderedModifiers.forEach(function(R){return v.modifiersData[R.name]=Object.assign({},R.data)});for(var N=0;N<v.orderedModifiers.length;N++){if(v.reset===!0){v.reset=!1,N=-1;continue}var L=v.orderedModifiers[N],k=L.fn,j=L.options,H=j===void 0?{}:j,rt=L.name;typeof k=="function"&&(v=k({state:v,options:H,name:rt,instance:y})||v)}}}},update:LH(function(){return new Promise(function(M){y.forceUpdate(),M(v)})}),destroy:function(){b(),S=!0}};if(!tO(f,h))return y;y.setOptions(p).then(function(M){!S&&p.onFirstUpdate&&p.onFirstUpdate(M)});function A(){v.orderedModifiers.forEach(function(M){var $=M.name,B=M.options,_=B===void 0?{}:B,N=M.effect;if(typeof N=="function"){var L=N({state:v,name:$,instance:y,options:_}),k=function(){};g.push(L||k)}})}function b(){g.forEach(function(M){return M()}),g=[]}return y}}var BH=[aH,EH,nH,FG,TH,vH,xH,JG,yH],jH=NH({defaultModifiers:BH});function VH(t){var g;const{elementType:e,externalSlotProps:n,ownerState:a,skipResolvingSlotProps:s=!1,...l}=t,c=s?{}:vq(n,a),{props:f,internalRef:h}=gq({...l,externalSlotProps:c}),p=pa(h,c==null?void 0:c.ref,(g=t.additionalProps)==null?void 0:g.ref);return mq(e,{...f,ref:p},a)}function dS(t){var e;return parseInt(Z.version,10)>=19?((e=t==null?void 0:t.props)==null?void 0:e.ref)||null:(t==null?void 0:t.ref)||null}function PH(t){return typeof t=="function"?t():t}const zH=Z.forwardRef(function(e,n){const{children:a,container:s,disablePortal:l=!1}=e,[c,f]=Z.useState(null),h=pa(Z.isValidElement(a)?dS(a):null,n);if($o(()=>{l||f(PH(s)||document.body)},[s,l]),$o(()=>{if(c&&!l)return j4(n,c),()=>{j4(n,null)}},[n,c,l]),l){if(Z.isValidElement(a)){const p={ref:h};return Z.cloneElement(a,p)}return a}return c&&hq.createPortal(a,c)});function UH(t){return Tn("MuiPopper",t)}Ci("MuiPopper",["root"]);function kH(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function Xb(t){return typeof t=="function"?t():t}function GH(t){return t.nodeType!==void 0}const HH=t=>{const{classes:e}=t;return Kn({root:["root"]},UH,e)},YH={},FH=Z.forwardRef(function(e,n){const{anchorEl:a,children:s,direction:l,disablePortal:c,modifiers:f,open:h,placement:p,popperOptions:v,popperRef:g,slotProps:S={},slots:y={},TransitionProps:A,ownerState:b,...M}=e,$=Z.useRef(null),B=pa($,n),_=Z.useRef(null),N=pa(_,g),L=Z.useRef(N);$o(()=>{L.current=N},[N]),Z.useImperativeHandle(g,()=>_.current,[]);const k=kH(p,l),[j,H]=Z.useState(k),[rt,R]=Z.useState(Xb(a));Z.useEffect(()=>{_.current&&_.current.forceUpdate()}),Z.useEffect(()=>{a&&R(Xb(a))},[a]),$o(()=>{if(!rt||!h)return;const dt=ot=>{H(ot.placement)};let P=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:ot})=>{dt(ot)}}];f!=null&&(P=P.concat(f)),v&&v.modifiers!=null&&(P=P.concat(v.modifiers));const tt=jH(rt,$.current,{placement:k,...v,modifiers:P});return L.current(tt),()=>{tt.destroy(),L.current(null)}},[rt,c,f,h,v,k]);const Y={placement:j};A!==null&&(Y.TransitionProps=A);const et=HH(e),ct=y.root??"div",ft=VH({elementType:ct,externalSlotProps:S.root,externalForwardedProps:M,additionalProps:{role:"tooltip",ref:B},ownerState:e,className:et.root});return vt.jsx(ct,{...ft,children:typeof s=="function"?s(Y):s})}),XH=Z.forwardRef(function(e,n){const{anchorEl:a,children:s,container:l,direction:c="ltr",disablePortal:f=!1,keepMounted:h=!1,modifiers:p,open:v,placement:g="bottom",popperOptions:S=YH,popperRef:y,style:A,transition:b=!1,slotProps:M={},slots:$={},...B}=e,[_,N]=Z.useState(!0),L=()=>{N(!1)},k=()=>{N(!0)};if(!h&&!v&&(!b||_))return null;let j;if(l)j=l;else if(a){const R=Xb(a);j=R&&GH(R)?B4(R).body:B4(null).body}const H=!v&&h&&(!b||_)?"none":void 0,rt=b?{in:v,onEnter:L,onExited:k}:void 0;return vt.jsx(zH,{disablePortal:f,container:j,children:vt.jsx(FH,{anchorEl:a,direction:c,disablePortal:f,modifiers:p,ref:n,open:b?!_:v,placement:g,popperOptions:S,popperRef:y,slotProps:M,slots:$,...B,style:{position:"fixed",top:0,left:0,display:H,...A},TransitionProps:rt,children:s})})}),IH=tr(XH,{name:"MuiPopper",slot:"Root"})({}),Mq=Z.forwardRef(function(e,n){const a=nS(),s=Qn({props:e,name:"MuiPopper"}),{anchorEl:l,component:c,components:f,componentsProps:h,container:p,disablePortal:v,keepMounted:g,modifiers:S,open:y,placement:A,popperOptions:b,popperRef:M,transition:$,slots:B,slotProps:_,...N}=s,L=(B==null?void 0:B.root)??(f==null?void 0:f.Root),k={anchorEl:l,container:p,disablePortal:v,keepMounted:g,modifiers:S,open:y,placement:A,popperOptions:b,popperRef:M,transition:$,...N};return vt.jsx(IH,{as:c,direction:a?"rtl":"ltr",slots:{root:L},slotProps:_??h,...k,ref:n})}),KH=Ci("MuiBox",["root"]),ZH=fq(),hS=qU({themeId:of,defaultTheme:ZH,defaultClassName:KH.root,generateClassName:KC.generate}),QH=ck({createStyledComponent:tr("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${ne(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}}),useThemeProps:t=>Qn({props:t,name:"MuiContainer"})});function WH(t){return Tn("MuiDivider",t)}Ci("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const JH=t=>{const{absolute:e,children:n,classes:a,flexItem:s,light:l,orientation:c,textAlign:f,variant:h}=t;return Kn({root:["root",e&&"absolute",h,l&&"light",c==="vertical"&&"vertical",s&&"flexItem",n&&"withChildren",n&&c==="vertical"&&"withChildrenVertical",f==="right"&&c!=="vertical"&&"textAlignRight",f==="left"&&c!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",c==="vertical"&&"wrapperVertical"]},WH,a)},tY=tr("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,n.orientation==="vertical"&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&n.orientation==="vertical"&&e.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&e.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&e.textAlignLeft]}})(Fr(({theme:t})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:kn(t.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:t.spacing(1),marginBottom:t.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:e})=>!!e.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:e})=>e.children&&e.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:e})=>e.orientation==="vertical"&&e.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:e})=>e.textAlign==="right"&&e.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:e})=>e.textAlign==="left"&&e.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),eY=tr("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.wrapper,n.orientation==="vertical"&&e.wrapperVertical]}})(Fr(({theme:t})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}}]}))),Ib=Z.forwardRef(function(e,n){const a=Qn({props:e,name:"MuiDivider"}),{absolute:s=!1,children:l,className:c,orientation:f="horizontal",component:h=l||f==="vertical"?"div":"hr",flexItem:p=!1,light:v=!1,role:g=h!=="hr"?"separator":void 0,textAlign:S="center",variant:y="fullWidth",...A}=a,b={...a,absolute:s,component:h,flexItem:p,light:v,orientation:f,role:g,textAlign:S,variant:y},M=JH(b);return vt.jsx(tY,{as:h,className:zr(M.root,c),role:g,ref:n,ownerState:b,"aria-orientation":g==="separator"&&(h!=="hr"||f==="vertical")?f:void 0,...A,children:l?vt.jsx(eY,{className:M.wrapper,ownerState:b,children:l}):null})});Ib&&(Ib.muiSkipListHighlight=!0);const Nr=Mk({createStyledComponent:tr("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.container&&e.container]}}),componentName:"MuiGrid",useThemeProps:t=>Qn({props:t,name:"MuiGrid"}),useTheme:Zn});function Kb(t){return`scale(${t}, ${t**2})`}const rY={entering:{opacity:1,transform:Kb(1)},entered:{opacity:1,transform:"none"}},db=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Zb=Z.forwardRef(function(e,n){const{addEndListener:a,appear:s=!0,children:l,easing:c,in:f,onEnter:h,onEntered:p,onEntering:v,onExit:g,onExited:S,onExiting:y,style:A,timeout:b="auto",TransitionComponent:M=Wn,...$}=e,B=au(),_=Z.useRef(),N=Zn(),L=Z.useRef(null),k=pa(L,dS(l),n),j=dt=>P=>{if(dt){const tt=L.current;P===void 0?dt(tt):dt(tt,P)}},H=j(v),rt=j((dt,P)=>{wG(dt);const{duration:tt,delay:ot,easing:Q}=G4({style:A,timeout:b,easing:c},{mode:"enter"});let C;b==="auto"?(C=N.transitions.getAutoHeightDuration(dt.clientHeight),_.current=C):C=tt,dt.style.transition=[N.transitions.create("opacity",{duration:C,delay:ot}),N.transitions.create("transform",{duration:db?C:C*.666,delay:ot,easing:Q})].join(","),h&&h(dt,P)}),R=j(p),Y=j(y),et=j(dt=>{const{duration:P,delay:tt,easing:ot}=G4({style:A,timeout:b,easing:c},{mode:"exit"});let Q;b==="auto"?(Q=N.transitions.getAutoHeightDuration(dt.clientHeight),_.current=Q):Q=P,dt.style.transition=[N.transitions.create("opacity",{duration:Q,delay:tt}),N.transitions.create("transform",{duration:db?Q:Q*.666,delay:db?tt:tt||Q*.333,easing:ot})].join(","),dt.style.opacity=0,dt.style.transform=Kb(.75),g&&g(dt)}),ct=j(S),ft=dt=>{b==="auto"&&B.start(_.current||0,dt),a&&a(L.current,dt)};return vt.jsx(M,{appear:s,in:f,nodeRef:L,onEnter:rt,onEntered:R,onEntering:H,onExit:et,onExited:ct,onExiting:Y,addEndListener:ft,timeout:b==="auto"?null:b,...$,children:(dt,{ownerState:P,...tt})=>Z.cloneElement(l,{style:{opacity:0,transform:Kb(.75),visibility:dt==="exited"&&!f?"hidden":void 0,...rY[dt],...A,...l.props.style},ref:k,...tt})})});Zb&&(Zb.muiSupportAuto=!0);function nY(t){return Tn("MuiLinearProgress",t)}Ci("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Qb=4,Wb=df`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,iY=typeof Wb!="string"?ff`
        animation: ${Wb} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,Jb=df`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,aY=typeof Jb!="string"?ff`
        animation: ${Jb} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,t2=df`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,oY=typeof t2!="string"?ff`
        animation: ${t2} 3s infinite linear;
      `:null,sY=t=>{const{classes:e,variant:n,color:a}=t,s={root:["root",`color${ne(a)}`,n],dashed:["dashed",`dashedColor${ne(a)}`],bar1:["bar","bar1",`barColor${ne(a)}`,(n==="indeterminate"||n==="query")&&"bar1Indeterminate",n==="determinate"&&"bar1Determinate",n==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",n!=="buffer"&&`barColor${ne(a)}`,n==="buffer"&&`color${ne(a)}`,(n==="indeterminate"||n==="query")&&"bar2Indeterminate",n==="buffer"&&"bar2Buffer"]};return Kn(s,nY,e)},pS=(t,e)=>t.vars?t.vars.palette.LinearProgress[`${e}Bg`]:t.palette.mode==="light"?Tf(t.palette[e].main,.62):Sf(t.palette[e].main,.5),uY=tr("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`color${ne(n.color)}`],e[n.variant]]}})(Fr(({theme:t})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(t.palette).filter(ma()).map(([e])=>({props:{color:e},style:{backgroundColor:pS(t,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),lY=tr("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.dashed,e[`dashedColor${ne(n.color)}`]]}})(Fr(({theme:t})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(t.palette).filter(ma()).map(([e])=>{const n=pS(t,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),oY||{animation:`${t2} 3s infinite linear`}),cY=tr("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.bar,e.bar1,e[`barColor${ne(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&e.bar1Indeterminate,n.variant==="determinate"&&e.bar1Determinate,n.variant==="buffer"&&e.bar1Buffer]}})(Fr(({theme:t})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(t.palette).filter(ma()).map(([e])=>({props:{color:e},style:{backgroundColor:(t.vars||t).palette[e].main}})),{props:{variant:"determinate"},style:{transition:`transform .${Qb}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${Qb}s linear`}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:iY||{animation:`${Wb} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),fY=tr("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.bar,e.bar2,e[`barColor${ne(n.color)}`],(n.variant==="indeterminate"||n.variant==="query")&&e.bar2Indeterminate,n.variant==="buffer"&&e.bar2Buffer]}})(Fr(({theme:t})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(t.palette).filter(ma()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(t.vars||t).palette[e].main}})),{props:({ownerState:e})=>e.variant!=="buffer"&&e.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>e.variant!=="buffer"&&e.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(t.palette).filter(ma()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:pS(t,e),transition:`transform .${Qb}s linear`}})),{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:{width:"auto"}},{props:({ownerState:e})=>e.variant==="indeterminate"||e.variant==="query",style:aY||{animation:`${Jb} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),dY=Z.forwardRef(function(e,n){const a=Qn({props:e,name:"MuiLinearProgress"}),{className:s,color:l="primary",value:c,valueBuffer:f,variant:h="indeterminate",...p}=a,v={...a,color:l,variant:h},g=sY(v),S=nS(),y={},A={bar1:{},bar2:{}};if((h==="determinate"||h==="buffer")&&c!==void 0){y["aria-valuenow"]=Math.round(c),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let b=c-100;S&&(b=-b),A.bar1.transform=`translateX(${b}%)`}if(h==="buffer"&&f!==void 0){let b=(f||0)-100;S&&(b=-b),A.bar2.transform=`translateX(${b}%)`}return vt.jsxs(uY,{className:zr(g.root,s),ownerState:v,role:"progressbar",...y,ref:n,...p,children:[h==="buffer"?vt.jsx(lY,{className:g.dashed,ownerState:v}):null,vt.jsx(cY,{className:g.bar1,ownerState:v,style:A.bar1}),h==="determinate"?null:vt.jsx(fY,{className:g.bar2,ownerState:v,style:A.bar2})]})});function hY(t){return Tn("MuiLink",t)}const pY=Ci("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),mY=({theme:t,ownerState:e})=>{const n=e.color,a=Ai(t,`palette.${n}.main`,!1)||Ai(t,`palette.${n}`,!1)||e.color,s=Ai(t,`palette.${n}.mainChannel`)||Ai(t,`palette.${n}Channel`);return"vars"in t&&s?`rgba(${s} / 0.4)`:kn(a,.4)},eO={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},vY=t=>{const{classes:e,component:n,focusVisible:a,underline:s}=t,l={root:["root",`underline${ne(s)}`,n==="button"&&"button",a&&"focusVisible"]};return Kn(l,hY,e)},gY=tr(yo,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`underline${ne(n.underline)}`],n.component==="button"&&e.button]}})(Fr(({theme:t})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:n})=>e==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(t.palette).filter(ma()).map(([e])=>({props:{underline:"always",color:e},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette[e].mainChannel} / 0.4)`:kn(t.palette[e].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.primaryChannel} / 0.4)`:kn(t.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":t.vars?`rgba(${t.vars.palette.text.secondaryChannel} / 0.4)`:kn(t.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(t.vars||t).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pY.focusVisible}`]:{outline:"auto"}}}]}))),yY=Z.forwardRef(function(e,n){const a=Qn({props:e,name:"MuiLink"}),s=Zn(),{className:l,color:c="primary",component:f="a",onBlur:h,onFocus:p,TypographyClasses:v,underline:g="always",variant:S="inherit",sx:y,...A}=a,[b,M]=Z.useState(!1),$=L=>{Dc(L.target)||M(!1),h&&h(L)},B=L=>{Dc(L.target)&&M(!0),p&&p(L)},_={...a,color:c,component:f,focusVisible:b,underline:g,variant:S},N=vY(_);return vt.jsx(gY,{color:c,className:zr(N.root,l),classes:v,component:f,onBlur:$,onFocus:B,ref:n,ownerState:_,variant:S,...A,sx:[...eO[c]===void 0?[{color:c}]:[],...Array.isArray(y)?y:[y]],style:{...A.style,...g==="always"&&c!=="inherit"&&!eO[c]&&{"--Link-underlineColor":mY({theme:s,ownerState:_})}}})});function bY(t){return Tn("MuiTooltip",t)}const pe=Ci("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function SY(t){return Math.round(t*1e5)/1e5}const TY=t=>{const{classes:e,disableInteractive:n,arrow:a,touch:s,placement:l}=t,c={popper:["popper",!n&&"popperInteractive",a&&"popperArrow"],tooltip:["tooltip",a&&"tooltipArrow",s&&"touch",`tooltipPlacement${ne(l.split("-")[0])}`],arrow:["arrow"]};return Kn(c,bY,e)},wY=tr(Mq,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(Fr(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${pe.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${pe.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${pe.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${pe.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${pe.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${pe.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${pe.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${pe.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),EY=tr("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${ne(n.placement.split("-")[0])}`]]}})(Fr(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:kn(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${pe.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${pe.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${pe.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${pe.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${SY(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${pe.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${pe.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${pe.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${pe.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${pe.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${pe.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${pe.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${pe.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${pe.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${pe.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),AY=tr("span",{name:"MuiTooltip",slot:"Arrow"})(Fr(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:kn(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let fc=!1;const rO=new Ef;let tu={x:0,y:0};function dc(t,e){return(n,...a)=>{e&&e(n,...a),t(n,...a)}}const RY=Z.forwardRef(function(e,n){const a=Qn({props:e,name:"MuiTooltip"}),{arrow:s=!1,children:l,classes:c,components:f={},componentsProps:h={},describeChild:p=!1,disableFocusListener:v=!1,disableHoverListener:g=!1,disableInteractive:S=!1,disableTouchListener:y=!1,enterDelay:A=100,enterNextDelay:b=0,enterTouchDelay:M=700,followCursor:$=!1,id:B,leaveDelay:_=0,leaveTouchDelay:N=1500,onClose:L,onOpen:k,open:j,placement:H="bottom",PopperComponent:rt,PopperProps:R={},slotProps:Y={},slots:et={},title:ct,TransitionComponent:ft,TransitionProps:dt,...P}=a,tt=Z.isValidElement(l)?l:vt.jsx("span",{children:l}),ot=Zn(),Q=nS(),[C,T]=Z.useState(),[w,x]=Z.useState(null),q=Z.useRef(!1),D=S||$,U=au(),X=au(),mt=au(),it=au(),[Et,ut]=mG({controlled:j,default:!1});let W=Et;const pt=pG(B),Bt=Z.useRef(),yt=z4(()=>{Bt.current!==void 0&&(document.body.style.WebkitUserSelect=Bt.current,Bt.current=void 0),it.clear()});Z.useEffect(()=>yt,[yt]);const Gt=xt=>{rO.clear(),fc=!0,ut(!0),k&&!W&&k(xt)},Ht=z4(xt=>{rO.start(800+_,()=>{fc=!1}),ut(!1),L&&W&&L(xt),U.start(ot.transitions.duration.shortest,()=>{q.current=!1})}),Ce=xt=>{q.current&&xt.type!=="touchstart"||(C&&C.removeAttribute("title"),X.clear(),mt.clear(),A||fc&&b?X.start(fc?b:A,()=>{Gt(xt)}):Gt(xt))},Xr=xt=>{X.clear(),mt.start(_,()=>{Ht(xt)})},[,ke]=Z.useState(!1),Ze=xt=>{Dc(xt.target)||(ke(!1),Xr(xt))},en=xt=>{C||T(xt.currentTarget),Dc(xt.target)&&(ke(!0),Ce(xt))},Ir=xt=>{q.current=!0;const er=tt.props;er.onTouchStart&&er.onTouchStart(xt)},rn=xt=>{Ir(xt),mt.clear(),U.clear(),yt(),Bt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",it.start(M,()=>{document.body.style.WebkitUserSelect=Bt.current,Ce(xt)})},le=xt=>{tt.props.onTouchEnd&&tt.props.onTouchEnd(xt),yt(),mt.start(N,()=>{Ht(xt)})};Z.useEffect(()=>{if(!W)return;function xt(er){er.key==="Escape"&&Ht(er)}return document.addEventListener("keydown",xt),()=>{document.removeEventListener("keydown",xt)}},[Ht,W]);const ge=pa(dS(tt),T,n);!ct&&ct!==0&&(W=!1);const bt=Z.useRef(),re=xt=>{const er=tt.props;er.onMouseMove&&er.onMouseMove(xt),tu={x:xt.clientX,y:xt.clientY},bt.current&&bt.current.update()},$e={},Wo=typeof ct=="string";p?($e.title=!W&&Wo&&!g?ct:null,$e["aria-describedby"]=W?pt:null):($e["aria-label"]=Wo?ct:null,$e["aria-labelledby"]=W&&!Wo?pt:null);const fr={...$e,...P,...tt.props,className:zr(P.className,tt.props.className),onTouchStart:Ir,ref:ge,...$?{onMouseMove:re}:{}},Bi={};y||(fr.onTouchStart=rn,fr.onTouchEnd=le),g||(fr.onMouseOver=dc(Ce,fr.onMouseOver),fr.onMouseLeave=dc(Xr,fr.onMouseLeave),D||(Bi.onMouseOver=Ce,Bi.onMouseLeave=Xr)),v||(fr.onFocus=dc(en,fr.onFocus),fr.onBlur=dc(Ze,fr.onBlur),D||(Bi.onFocus=en,Bi.onBlur=Ze));const Er={...a,isRtl:Q,arrow:s,disableInteractive:D,placement:H,PopperComponentProp:rt,touch:q.current},Ge=typeof Y.popper=="function"?Y.popper(Er):Y.popper,wn=Z.useMemo(()=>{var er,Xu;let xt=[{name:"arrow",enabled:!!w,options:{element:w,padding:4}}];return(er=R.popperOptions)!=null&&er.modifiers&&(xt=xt.concat(R.popperOptions.modifiers)),(Xu=Ge==null?void 0:Ge.popperOptions)!=null&&Xu.modifiers&&(xt=xt.concat(Ge.popperOptions.modifiers)),{...R.popperOptions,...Ge==null?void 0:Ge.popperOptions,modifiers:xt}},[w,R.popperOptions,Ge==null?void 0:Ge.popperOptions]),Jn=TY(Er),ji=typeof Y.transition=="function"?Y.transition(Er):Y.transition,Sa={slots:{popper:f.Popper,transition:f.Transition??ft,tooltip:f.Tooltip,arrow:f.Arrow,...et},slotProps:{arrow:Y.arrow??h.arrow,popper:{...R,...Ge??h.popper},tooltip:Y.tooltip??h.tooltip,transition:{...dt,...ji??h.transition}}},[Gu,Hu]=lc("popper",{elementType:wY,externalForwardedProps:Sa,ownerState:Er,className:zr(Jn.popper,R==null?void 0:R.className)}),[Jo,Vi]=lc("transition",{elementType:Zb,externalForwardedProps:Sa,ownerState:Er}),[Cf,Yu]=lc("tooltip",{elementType:EY,className:Jn.tooltip,externalForwardedProps:Sa,ownerState:Er}),[Fu,ts]=lc("arrow",{elementType:AY,className:Jn.arrow,externalForwardedProps:Sa,ownerState:Er,ref:x});return vt.jsxs(Z.Fragment,{children:[Z.cloneElement(tt,fr),vt.jsx(Gu,{as:rt??Mq,placement:H,anchorEl:$?{getBoundingClientRect:()=>({top:tu.y,left:tu.x,right:tu.x,bottom:tu.y,width:0,height:0})}:C,popperRef:bt,open:C?W:!1,id:pt,transition:!0,...Bi,...Hu,popperOptions:wn,children:({TransitionProps:xt})=>vt.jsx(Jo,{timeout:ot.transitions.duration.shorter,...xt,...Vi,children:vt.jsxs(Cf,{...Yu,children:[ct,s?vt.jsx(Fu,{...ts}):null]})})})]})}),$q=iq({themeId:of}),Oq=Z.createContext({});function xY(t){const e=Z.useRef(null);return e.current===null&&(e.current=t()),e.current}const mS=typeof window<"u",MY=mS?Z.useLayoutEffect:Z.useEffect,vS=Z.createContext(null),_q=Z.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Cq(t){return typeof t=="object"&&t!==null}function qq(t){return Cq(t)&&"offsetHeight"in t}function $Y(t=!0){const e=Z.useContext(vS);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:s}=e,l=Z.useId();Z.useEffect(()=>{if(t)return s(l)},[t]);const c=Z.useCallback(()=>t&&a&&a(l),[l,a,t]);return!n&&a?[!1,c]:[!0]}const hc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],nO={value:null};function OY(t,e){let n=new Set,a=new Set,s=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},h=0;function p(g){c.has(g)&&(v.schedule(g),t()),h++,g(f)}const v={schedule:(g,S=!1,y=!1)=>{const b=y&&s?n:a;return S&&c.add(g),b.has(g)||b.add(g),g},cancel:g=>{a.delete(g),c.delete(g)},process:g=>{if(f=g,s){l=!0;return}s=!0,[n,a]=[a,n],n.forEach(p),e&&nO.value&&nO.value.frameloop[e].push(h),h=0,n.clear(),s=!1,l&&(l=!1,v.process(g))}};return v}const Fn={},_Y=40;function Lq(t,e){let n=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,c=hc.reduce((_,N)=>(_[N]=OY(l,e?N:void 0),_),{}),{setup:f,read:h,resolveKeyframes:p,preUpdate:v,update:g,preRender:S,render:y,postRender:A}=c,b=()=>{const _=Fn.useManualTiming?s.timestamp:performance.now();n=!1,Fn.useManualTiming||(s.delta=a?1e3/60:Math.max(Math.min(_-s.timestamp,_Y),1)),s.timestamp=_,s.isProcessing=!0,f.process(s),h.process(s),p.process(s),v.process(s),g.process(s),S.process(s),y.process(s),A.process(s),s.isProcessing=!1,n&&e&&(a=!1,t(b))},M=()=>{n=!0,a=!0,s.isProcessing||t(b)};return{schedule:hc.reduce((_,N)=>{const L=c[N];return _[N]=(k,j=!1,H=!1)=>(n||M(),L.schedule(k,j,H)),_},{}),cancel:_=>{for(let N=0;N<hc.length;N++)c[hc[N]].cancel(_)},state:s,steps:c}}const Vr=t=>t,{schedule:ue,cancel:xi,state:Pe,steps:hb}=Lq(typeof requestAnimationFrame<"u"?requestAnimationFrame:Vr,!0),Dq=Z.createContext({strict:!1}),iO={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lo={};for(const t in iO)Lo[t]={isEnabled:e=>iO[t].some(n=>!!e[n])};function CY(t){for(const e in t)Lo[e]={...Lo[e],...t[e]}}const qY=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||qY.has(t)}let Nq=t=>!Bc(t);function LY(t){typeof t=="function"&&(Nq=e=>e.startsWith("on")?!Bc(e):t(e))}try{LY(require("@emotion/is-prop-valid").default)}catch{}function DY(t,e,n){const a={};for(const s in t)s==="values"&&typeof t.values=="object"||(Nq(s)||n===!0&&Bc(s)||!e&&!Bc(s)||t.draggable&&s.startsWith("onDrag"))&&(a[s]=t[s]);return a}function NY(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...a)=>t(...a);return new Proxy(n,{get:(a,s)=>s==="create"?t:(e.has(s)||e.set(s,t(s)),e.get(s))})}const Rf=Z.createContext({});function xf(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Tu(t){return typeof t=="string"||Array.isArray(t)}const gS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yS=["initial",...gS];function Mf(t){return xf(t.animate)||yS.some(e=>Tu(t[e]))}function Bq(t){return!!(Mf(t)||t.variants)}function BY(t,e){if(Mf(t)){const{initial:n,animate:a}=t;return{initial:n===!1||Tu(n)?n:void 0,animate:Tu(a)?a:void 0}}return t.inherit!==!1?e:{}}function jY(t){const{initial:e,animate:n}=BY(t,Z.useContext(Rf));return Z.useMemo(()=>({initial:e,animate:n}),[aO(e),aO(n)])}function aO(t){return Array.isArray(t)?t.join(" "):t}const VY=Symbol.for("motionComponentSymbol");function bo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function PY(t,e,n){return Z.useCallback(a=>{a&&t.onMount&&t.onMount(a),e&&(a?e.mount(a):e.unmount()),n&&(typeof n=="function"?n(a):bo(n)&&(n.current=a))},[e])}const bS=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zY="framerAppearId",jq="data-"+bS(zY),Vq=Z.createContext({}),{schedule:SS}=Lq(queueMicrotask,!1);function UY(t,e,n,a,s){var b,M;const{visualElement:l}=Z.useContext(Rf),c=Z.useContext(Dq),f=Z.useContext(vS),h=Z.useContext(_q).reducedMotion,p=Z.useRef(null);a=a||c.renderer,!p.current&&a&&(p.current=a(t,{visualState:e,parent:l,props:n,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:h}));const v=p.current,g=Z.useContext(Vq);v&&!v.projection&&s&&(v.type==="html"||v.type==="svg")&&kY(p.current,n,s,g);const S=Z.useRef(!1);Z.useInsertionEffect(()=>{v&&S.current&&v.update(n,f)});const y=n[jq],A=Z.useRef(!!y&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,y))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,y)));return MY(()=>{v&&(S.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),SS.render(v.render),A.current&&v.animationState&&v.animationState.animateChanges())}),Z.useEffect(()=>{v&&(!A.current&&v.animationState&&v.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,y)}),A.current=!1))}),v}function kY(t,e,n,a){const{layoutId:s,layout:l,drag:c,dragConstraints:f,layoutScroll:h,layoutRoot:p,layoutCrossfade:v}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Pq(t.parent)),t.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!c||f&&bo(f),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:v,layoutScroll:h,layoutRoot:p})}function Pq(t){if(t)return t.options.allowProjection!==!1?t.projection:Pq(t.parent)}let TS=()=>{};function GY({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:a,Component:s}){t&&CY(t);function l(f,h){let p;const v={...Z.useContext(_q),...f,layoutId:HY(f)},{isStatic:g}=v,S=jY(f),y=a(f,g);if(!g&&mS){YY();const A=FY(v);p=A.MeasureLayout,S.visualElement=UY(s,y,v,e,A.ProjectionNode)}return vt.jsxs(Rf.Provider,{value:S,children:[p&&S.visualElement?vt.jsx(p,{visualElement:S.visualElement,...v}):null,n(s,f,PY(y,S.visualElement,h),y,g,S.visualElement)]})}l.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const c=Z.forwardRef(l);return c[VY]=s,c}function HY({layoutId:t}){const e=Z.useContext(Oq).id;return e&&t!==void 0?e+"-"+t:t}function YY(t,e){Z.useContext(Dq).strict}function FY(t){const{drag:e,layout:n}=Lo;if(!e&&!n)return{};const a={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const zq=t=>e=>typeof e=="string"&&e.startsWith(t),wS=zq("--"),XY=zq("var(--"),ES=t=>XY(t)?IY.test(t.split("/*")[0].trim()):!1,IY=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,wu={};function KY(t){for(const e in t)wu[e]=t[e],wS(e)&&(wu[e].isCSSVariable=!0)}const Yo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fo=new Set(Yo);function Uq(t,{layout:e,layoutId:n}){return Fo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!wu[t]||t==="opacity")}const kq=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Xn=(t,e,n)=>n>e?e:n<t?t:n,Xo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Eu={...Xo,transform:t=>Xn(0,1,t)},pc={...Xo,default:1},oO={...Xo,transform:Math.round},Pu=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ei=Pu("deg"),mn=Pu("%"),Rt=Pu("px"),ZY=Pu("vh"),QY=Pu("vw"),sO={...mn,parse:t=>mn.parse(t)/100,transform:t=>mn.transform(t*100)},WY={rotate:Ei,rotateX:Ei,rotateY:Ei,rotateZ:Ei,scale:pc,scaleX:pc,scaleY:pc,scaleZ:pc,skew:Ei,skewX:Ei,skewY:Ei,distance:Rt,translateX:Rt,translateY:Rt,translateZ:Rt,x:Rt,y:Rt,z:Rt,perspective:Rt,transformPerspective:Rt,opacity:Eu,originX:sO,originY:sO,originZ:Rt},AS={borderWidth:Rt,borderTopWidth:Rt,borderRightWidth:Rt,borderBottomWidth:Rt,borderLeftWidth:Rt,borderRadius:Rt,radius:Rt,borderTopLeftRadius:Rt,borderTopRightRadius:Rt,borderBottomRightRadius:Rt,borderBottomLeftRadius:Rt,width:Rt,maxWidth:Rt,height:Rt,maxHeight:Rt,top:Rt,right:Rt,bottom:Rt,left:Rt,padding:Rt,paddingTop:Rt,paddingRight:Rt,paddingBottom:Rt,paddingLeft:Rt,margin:Rt,marginTop:Rt,marginRight:Rt,marginBottom:Rt,marginLeft:Rt,backgroundPositionX:Rt,backgroundPositionY:Rt,...WY,zIndex:oO,fillOpacity:Eu,strokeOpacity:Eu,numOctaves:oO},JY={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tF=Yo.length;function eF(t,e,n){let a="",s=!0;for(let l=0;l<tF;l++){const c=Yo[l],f=t[c];if(f===void 0)continue;let h=!0;if(typeof f=="number"?h=f===(c.startsWith("scale")?1:0):h=parseFloat(f)===0,!h||n){const p=kq(f,AS[c]);if(!h){s=!1;const v=JY[c]||c;a+=`${v}(${p}) `}n&&(e[c]=p)}}return a=a.trim(),n?a=n(e,s?"":a):s&&(a="none"),a}function RS(t,e,n){const{style:a,vars:s,transformOrigin:l}=t;let c=!1,f=!1;for(const h in e){const p=e[h];if(Fo.has(h)){c=!0;continue}else if(wS(h)){s[h]=p;continue}else{const v=kq(p,AS[h]);h.startsWith("origin")?(f=!0,l[h]=v):a[h]=v}}if(e.transform||(c||n?a.transform=eF(e,t.transform,n):a.transform&&(a.transform="none")),f){const{originX:h="50%",originY:p="50%",originZ:v=0}=l;a.transformOrigin=`${h} ${p} ${v}`}}const xS=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ie=t=>!!(t&&t.getVelocity);function Gq(t,e,n){for(const a in e)!Ie(e[a])&&!Uq(a,n)&&(t[a]=e[a])}function rF({transformTemplate:t},e){return Z.useMemo(()=>{const n=xS();return RS(n,e,t),Object.assign({},n.vars,n.style)},[e])}function nF(t,e){const n=t.style||{},a={};return Gq(a,n,t),Object.assign(a,rF(t,e)),a}function iF(t,e){const n={},a=nF(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=a,n}const aF={offset:"stroke-dashoffset",array:"stroke-dasharray"},oF={offset:"strokeDashoffset",array:"strokeDasharray"};function sF(t,e,n=1,a=0,s=!0){t.pathLength=1;const l=s?aF:oF;t[l.offset]=Rt.transform(-a);const c=Rt.transform(e),f=Rt.transform(n);t[l.array]=`${c} ${f}`}function Hq(t,{attrX:e,attrY:n,attrScale:a,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...f},h,p,v){if(RS(t,f,p),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:S}=t;g.transform&&(S.transform=g.transform,delete g.transform),(S.transform||g.transformOrigin)&&(S.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),S.transform&&(S.transformBox=(v==null?void 0:v.transformBox)??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),n!==void 0&&(g.y=n),a!==void 0&&(g.scale=a),s!==void 0&&sF(g,s,l,c,!1)}const Yq=()=>({...xS(),attrs:{}}),Fq=t=>typeof t=="string"&&t.toLowerCase()==="svg";function uF(t,e,n,a){const s=Z.useMemo(()=>{const l=Yq();return Hq(l,e,Fq(a),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};Gq(l,t.style,t),s.style={...l,...s.style}}return s}const lF=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function MS(t){return typeof t!="string"||t.includes("-")?!1:!!(lF.indexOf(t)>-1||/[A-Z]/u.test(t))}function cF(t=!1){return(n,a,s,{latestValues:l},c)=>{const h=(MS(n)?uF:iF)(a,l,c,n),p=DY(a,typeof n=="string",t),v=n!==Z.Fragment?{...p,...h,ref:s}:{},{children:g}=a,S=Z.useMemo(()=>Ie(g)?g.get():g,[g]);return Z.createElement(n,{...v,children:S})}}function uO(t){const e=[{},{}];return t==null||t.values.forEach((n,a)=>{e[0][a]=n.get(),e[1][a]=n.getVelocity()}),e}function $S(t,e,n,a){if(typeof e=="function"){const[s,l]=uO(a);e=e(n!==void 0?n:t.custom,s,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,l]=uO(a);e=e(n!==void 0?n:t.custom,s,l)}return e}function Rc(t){return Ie(t)?t.get():t}function fF({scrapeMotionValuesFromProps:t,createRenderState:e},n,a,s){return{latestValues:dF(n,a,s,t),renderState:e()}}const Xq=t=>(e,n)=>{const a=Z.useContext(Rf),s=Z.useContext(vS),l=()=>fF(t,e,a,s);return n?l():xY(l)};function dF(t,e,n,a){const s={},l=a(t,{});for(const S in l)s[S]=Rc(l[S]);let{initial:c,animate:f}=t;const h=Mf(t),p=Bq(t);e&&p&&!h&&t.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let v=n?n.initial===!1:!1;v=v||c===!1;const g=v?f:c;if(g&&typeof g!="boolean"&&!xf(g)){const S=Array.isArray(g)?g:[g];for(let y=0;y<S.length;y++){const A=$S(t,S[y]);if(A){const{transitionEnd:b,transition:M,...$}=A;for(const B in $){let _=$[B];if(Array.isArray(_)){const N=v?_.length-1:0;_=_[N]}_!==null&&(s[B]=_)}for(const B in b)s[B]=b[B]}}}return s}function OS(t,e,n){var l;const{style:a}=t,s={};for(const c in a)(Ie(a[c])||e.style&&Ie(e.style[c])||Uq(c,t)||((l=n==null?void 0:n.getValue(c))==null?void 0:l.liveStyle)!==void 0)&&(s[c]=a[c]);return s}const hF={useVisualState:Xq({scrapeMotionValuesFromProps:OS,createRenderState:xS})};function Iq(t,e,n){const a=OS(t,e,n);for(const s in t)if(Ie(t[s])||Ie(e[s])){const l=Yo.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[l]=t[s]}return a}const pF={useVisualState:Xq({scrapeMotionValuesFromProps:Iq,createRenderState:Yq})};function mF(t,e){return function(a,{forwardMotionProps:s}={forwardMotionProps:!1}){const c={...MS(a)?pF:hF,preloadedFeatures:t,useRender:cF(s),createVisualElement:e,Component:a};return GY(c)}}function Au(t,e,n){const a=t.getProps();return $S(a,e,n!==void 0?n:a.custom,t)}const e2=t=>Array.isArray(t);let xc;function vF(){xc=void 0}const sr={now:()=>(xc===void 0&&sr.set(Pe.isProcessing||Fn.useManualTiming?Pe.timestamp:performance.now()),xc),set:t=>{xc=t,queueMicrotask(vF)}};function _S(t,e){t.indexOf(e)===-1&&t.push(e)}function CS(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class qS{constructor(){this.subscriptions=[]}add(e){return _S(this.subscriptions,e),()=>CS(this.subscriptions,e)}notify(e,n,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,a);else for(let l=0;l<s;l++){const c=this.subscriptions[l];c&&c(e,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Kq(t,e){return e?t*(1e3/e):0}const lO=30,gF=t=>!isNaN(parseFloat(t));class yF{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,s=!0)=>{var c,f;const l=sr.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty();s&&((f=this.events.renderRequest)==null||f.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=sr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=gF(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new qS);const a=this.events[e].add(n);return e==="change"?()=>{a(),ue.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=sr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>lO)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,lO);return Kq(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Do(t,e){return new yF(t,e)}function bF(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Do(n))}function SF(t){return e2(t)?t[t.length-1]||0:t}function TF(t,e){const n=Au(t,e);let{transitionEnd:a={},transition:s={},...l}=n||{};l={...l,...a};for(const c in l){const f=SF(l[c]);bF(t,c,f)}}function wF(t){return!!(Ie(t)&&t.add)}function r2(t,e){const n=t.getValue("willChange");if(wF(n))return n.add(e);if(!n&&Fn.WillChange){const a=new Fn.WillChange("auto");t.addValue("willChange",a),a.add(e)}}function Zq(t){return t.props[jq]}const EF=t=>t!==null;function AF(t,{repeat:e,repeatType:n="loop"},a){const s=t.filter(EF),l=e&&n!=="loop"&&e%2===1?0:s.length-1;return s[l]}const RF={type:"spring",stiffness:500,damping:25,restSpeed:10},xF=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),MF={type:"keyframes",duration:.8},$F={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},OF=(t,{keyframes:e})=>e.length>2?MF:Fo.has(t)?t.startsWith("scale")?xF(e[1]):RF:$F;function _F({when:t,delay:e,delayChildren:n,staggerChildren:a,staggerDirection:s,repeat:l,repeatType:c,repeatDelay:f,from:h,elapsed:p,...v}){return!!Object.keys(v).length}function LS(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const vn=t=>t*1e3,gn=t=>t/1e3,cu=t=>Math.round(t*1e5)/1e5,DS=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CF(t){return t==null}const qF=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,NS=(t,e)=>n=>!!(typeof n=="string"&&qF.test(n)&&n.startsWith(t)||e&&!CF(n)&&Object.prototype.hasOwnProperty.call(n,e)),Qq=(t,e,n)=>a=>{if(typeof a!="string")return a;const[s,l,c,f]=a.match(DS);return{[t]:parseFloat(s),[e]:parseFloat(l),[n]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},LF=t=>Xn(0,255,t),pb={...Xo,transform:t=>Math.round(LF(t))},oa={test:NS("rgb","red"),parse:Qq("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:a=1})=>"rgba("+pb.transform(t)+", "+pb.transform(e)+", "+pb.transform(n)+", "+cu(Eu.transform(a))+")"};function DF(t){let e="",n="",a="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),a=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),a=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,a+=a,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const n2={test:NS("#"),parse:DF,transform:oa.transform},So={test:NS("hsl","hue"),parse:Qq("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:a=1})=>"hsla("+Math.round(t)+", "+mn.transform(cu(e))+", "+mn.transform(cu(n))+", "+cu(Eu.transform(a))+")"},xe={test:t=>oa.test(t)||n2.test(t)||So.test(t),parse:t=>oa.test(t)?oa.parse(t):So.test(t)?So.parse(t):n2.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?oa.transform(t):So.transform(t),getAnimatableNone:t=>{const e=xe.parse(t);return e.alpha=0,xe.transform(e)}},NF=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function BF(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(DS))==null?void 0:e.length)||0)+(((n=t.match(NF))==null?void 0:n.length)||0)>0}const Wq="number",Jq="color",jF="var",VF="var(",cO="${}",PF=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ru(t){const e=t.toString(),n=[],a={color:[],number:[],var:[]},s=[];let l=0;const f=e.replace(PF,h=>(xe.test(h)?(a.color.push(l),s.push(Jq),n.push(xe.parse(h))):h.startsWith(VF)?(a.var.push(l),s.push(jF),n.push(h)):(a.number.push(l),s.push(Wq),n.push(parseFloat(h))),++l,cO)).split(cO);return{values:n,split:f,indexes:a,types:s}}function t8(t){return Ru(t).values}function e8(t){const{split:e,types:n}=Ru(t),a=e.length;return s=>{let l="";for(let c=0;c<a;c++)if(l+=e[c],s[c]!==void 0){const f=n[c];f===Wq?l+=cu(s[c]):f===Jq?l+=xe.transform(s[c]):l+=s[c]}return l}}const zF=t=>typeof t=="number"?0:xe.test(t)?xe.getAnimatableNone(t):t;function UF(t){const e=t8(t);return e8(t)(e.map(zF))}const Mi={test:BF,parse:t8,createTransformer:e8,getAnimatableNone:UF};function mb(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function kF({hue:t,saturation:e,lightness:n,alpha:a}){t/=360,e/=100,n/=100;let s=0,l=0,c=0;if(!e)s=l=c=n;else{const f=n<.5?n*(1+e):n+e-n*e,h=2*n-f;s=mb(h,f,t+1/3),l=mb(h,f,t),c=mb(h,f,t-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:a}}function jc(t,e){return n=>n>0?e:t}const se=(t,e,n)=>t+(e-t)*n,vb=(t,e,n)=>{const a=t*t,s=n*(e*e-a)+a;return s<0?0:Math.sqrt(s)},GF=[n2,oa,So],HF=t=>GF.find(e=>e.test(t));function fO(t){const e=HF(t);if(!e)return!1;let n=e.parse(t);return e===So&&(n=kF(n)),n}const dO=(t,e)=>{const n=fO(t),a=fO(e);if(!n||!a)return jc(t,e);const s={...n};return l=>(s.red=vb(n.red,a.red,l),s.green=vb(n.green,a.green,l),s.blue=vb(n.blue,a.blue,l),s.alpha=se(n.alpha,a.alpha,l),oa.transform(s))},i2=new Set(["none","hidden"]);function YF(t,e){return i2.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}const FF=(t,e)=>n=>e(t(n)),zu=(...t)=>t.reduce(FF);function XF(t,e){return n=>se(t,e,n)}function BS(t){return typeof t=="number"?XF:typeof t=="string"?ES(t)?jc:xe.test(t)?dO:ZF:Array.isArray(t)?r8:typeof t=="object"?xe.test(t)?dO:IF:jc}function r8(t,e){const n=[...t],a=n.length,s=t.map((l,c)=>BS(l)(l,e[c]));return l=>{for(let c=0;c<a;c++)n[c]=s[c](l);return n}}function IF(t,e){const n={...t,...e},a={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(a[s]=BS(t[s])(t[s],e[s]));return s=>{for(const l in a)n[l]=a[l](s);return n}}function KF(t,e){const n=[],a={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const l=e.types[s],c=t.indexes[l][a[l]],f=t.values[c]??0;n[s]=f,a[l]++}return n}const ZF=(t,e)=>{const n=Mi.createTransformer(e),a=Ru(t),s=Ru(e);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?i2.has(t)&&!s.values.length||i2.has(e)&&!a.values.length?YF(t,e):zu(r8(KF(a,s),s.values),n):jc(t,e)};function n8(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?se(t,e,n):BS(t)(t,e)}const QF=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ue.update(e,n),stop:()=>xi(e),now:()=>Pe.isProcessing?Pe.timestamp:sr.now()}},i8=(t,e,n=10)=>{let a="";const s=Math.max(Math.round(e/n),2);for(let l=0;l<s;l++)a+=Math.round(t(l/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Vc=2e4;function jS(t){let e=0;const n=50;let a=t.next(e);for(;!a.done&&e<Vc;)e+=n,a=t.next(e);return e>=Vc?1/0:e}function WF(t,e=100,n){const a=n({...t,keyframes:[0,e]}),s=Math.min(jS(a),Vc);return{type:"keyframes",ease:l=>a.next(s*l).value/e,duration:gn(s)}}const JF=5;function a8(t,e,n){const a=Math.max(e-JF,0);return Kq(n-t(a),e-a)}const me={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hO=.001;function tX({duration:t=me.duration,bounce:e=me.bounce,velocity:n=me.velocity,mass:a=me.mass}){let s,l,c=1-e;c=Xn(me.minDamping,me.maxDamping,c),t=Xn(me.minDuration,me.maxDuration,gn(t)),c<1?(s=p=>{const v=p*c,g=v*t,S=v-n,y=a2(p,c),A=Math.exp(-g);return hO-S/y*A},l=p=>{const g=p*c*t,S=g*n+n,y=Math.pow(c,2)*Math.pow(p,2)*t,A=Math.exp(-g),b=a2(Math.pow(p,2),c);return(-s(p)+hO>0?-1:1)*((S-y)*A)/b}):(s=p=>{const v=Math.exp(-p*t),g=(p-n)*t+1;return-.001+v*g},l=p=>{const v=Math.exp(-p*t),g=(n-p)*(t*t);return v*g});const f=5/t,h=rX(s,l,f);if(t=vn(t),isNaN(h))return{stiffness:me.stiffness,damping:me.damping,duration:t};{const p=Math.pow(h,2)*a;return{stiffness:p,damping:c*2*Math.sqrt(a*p),duration:t}}}const eX=12;function rX(t,e,n){let a=n;for(let s=1;s<eX;s++)a=a-t(a)/e(a);return a}function a2(t,e){return t*Math.sqrt(1-e*e)}const nX=["duration","bounce"],iX=["stiffness","damping","mass"];function pO(t,e){return e.some(n=>t[n]!==void 0)}function aX(t){let e={velocity:me.velocity,stiffness:me.stiffness,damping:me.damping,mass:me.mass,isResolvedFromDuration:!1,...t};if(!pO(t,iX)&&pO(t,nX))if(t.visualDuration){const n=t.visualDuration,a=2*Math.PI/(n*1.2),s=a*a,l=2*Xn(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:me.mass,stiffness:s,damping:l}}else{const n=tX(t);e={...e,...n,mass:me.mass},e.isResolvedFromDuration=!0}return e}function Pc(t=me.visualDuration,e=me.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:a,restDelta:s}=n;const l=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:h,damping:p,mass:v,duration:g,velocity:S,isResolvedFromDuration:y}=aX({...n,velocity:-gn(n.velocity||0)}),A=S||0,b=p/(2*Math.sqrt(h*v)),M=c-l,$=gn(Math.sqrt(h/v)),B=Math.abs(M)<5;a||(a=B?me.restSpeed.granular:me.restSpeed.default),s||(s=B?me.restDelta.granular:me.restDelta.default);let _;if(b<1){const L=a2($,b);_=k=>{const j=Math.exp(-b*$*k);return c-j*((A+b*$*M)/L*Math.sin(L*k)+M*Math.cos(L*k))}}else if(b===1)_=L=>c-Math.exp(-$*L)*(M+(A+$*M)*L);else{const L=$*Math.sqrt(b*b-1);_=k=>{const j=Math.exp(-b*$*k),H=Math.min(L*k,300);return c-j*((A+b*$*M)*Math.sinh(H)+L*M*Math.cosh(H))/L}}const N={calculatedDuration:y&&g||null,next:L=>{const k=_(L);if(y)f.done=L>=g;else{let j=L===0?A:0;b<1&&(j=L===0?vn(A):a8(_,L,k));const H=Math.abs(j)<=a,rt=Math.abs(c-k)<=s;f.done=H&&rt}return f.value=f.done?c:k,f},toString:()=>{const L=Math.min(jS(N),Vc),k=i8(j=>N.next(L*j).value,L,30);return L+"ms "+k},toTransition:()=>{}};return N}Pc.applyToOptions=t=>{const e=WF(t,100,Pc);return t.ease=e.ease,t.duration=vn(e.duration),t.type="keyframes",t};function o2({keyframes:t,velocity:e=0,power:n=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:h,restDelta:p=.5,restSpeed:v}){const g=t[0],S={done:!1,value:g},y=H=>f!==void 0&&H<f||h!==void 0&&H>h,A=H=>f===void 0?h:h===void 0||Math.abs(f-H)<Math.abs(h-H)?f:h;let b=n*e;const M=g+b,$=c===void 0?M:c(M);$!==M&&(b=$-g);const B=H=>-b*Math.exp(-H/a),_=H=>$+B(H),N=H=>{const rt=B(H),R=_(H);S.done=Math.abs(rt)<=p,S.value=S.done?$:R};let L,k;const j=H=>{y(S.value)&&(L=H,k=Pc({keyframes:[S.value,A(S.value)],velocity:a8(_,H,S.value),damping:s,stiffness:l,restDelta:p,restSpeed:v}))};return j(0),{calculatedDuration:null,next:H=>{let rt=!1;return!k&&L===void 0&&(rt=!0,N(H),j(H)),L!==void 0&&H>=L?k.next(H-L):(!rt&&N(H),S)}}}const xu=(t,e,n)=>{const a=e-t;return a===0?1:(n-t)/a};function oX(t,e,n){const a=[],s=n||Fn.mix||n8,l=t.length-1;for(let c=0;c<l;c++){let f=s(t[c],t[c+1]);if(e){const h=Array.isArray(e)?e[c]||Vr:e;f=zu(h,f)}a.push(f)}return a}function sX(t,e,{clamp:n=!0,ease:a,mixer:s}={}){const l=t.length;if(TS(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const f=oX(e,a,s),h=f.length,p=v=>{if(c&&v<t[0])return e[0];let g=0;if(h>1)for(;g<t.length-2&&!(v<t[g+1]);g++);const S=xu(t[g],t[g+1],v);return f[g](S)};return n?v=>p(Xn(t[0],t[l-1],v)):p}function uX(t,e){const n=t[t.length-1];for(let a=1;a<=e;a++){const s=xu(0,e,a);t.push(se(n,1,s))}}function lX(t){const e=[0];return uX(e,t.length-1),e}function cX(t,e){return t.map(n=>n*e)}const o8=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,fX=1e-7,dX=12;function hX(t,e,n,a,s){let l,c,f=0;do c=e+(n-e)/2,l=o8(c,a,s)-t,l>0?n=c:e=c;while(Math.abs(l)>fX&&++f<dX);return c}function Uu(t,e,n,a){if(t===e&&n===a)return Vr;const s=l=>hX(l,0,1,t,n);return l=>l===0||l===1?l:o8(s(l),e,a)}const pX=Uu(.42,0,1,1),mX=Uu(0,0,.58,1),s8=Uu(.42,0,.58,1),vX=t=>Array.isArray(t)&&typeof t[0]!="number",u8=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,l8=t=>e=>1-t(1-e),c8=Uu(.33,1.53,.69,.99),VS=l8(c8),f8=u8(VS),d8=t=>(t*=2)<1?.5*VS(t):.5*(2-Math.pow(2,-10*(t-1))),PS=t=>1-Math.sin(Math.acos(t)),h8=l8(PS),p8=u8(PS),m8=t=>Array.isArray(t)&&typeof t[0]=="number",gX={linear:Vr,easeIn:pX,easeInOut:s8,easeOut:mX,circIn:PS,circInOut:p8,circOut:h8,backIn:VS,backInOut:f8,backOut:c8,anticipate:d8},yX=t=>typeof t=="string",mO=t=>{if(m8(t)){TS(t.length===4);const[e,n,a,s]=t;return Uu(e,n,a,s)}else if(yX(t))return gX[t];return t};function bX(t,e){return t.map(()=>e||s8).splice(0,t.length-1)}function fu({duration:t=300,keyframes:e,times:n,ease:a="easeInOut"}){const s=vX(a)?a.map(mO):mO(a),l={done:!1,value:e[0]},c=cX(n&&n.length===e.length?n:lX(e),t),f=sX(c,e,{ease:Array.isArray(s)?s:bX(e,s)});return{calculatedDuration:t,next:h=>(l.value=f(h),l.done=h>=t,l)}}const SX=t=>t!==null;function zS(t,{repeat:e,repeatType:n="loop"},a,s=1){const l=t.filter(SX),f=s<0||e&&n!=="loop"&&e%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const TX={decay:o2,inertia:o2,tween:fu,keyframes:fu,spring:Pc};function v8(t){typeof t.type=="string"&&(t.type=TX[t.type])}class US{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const wX=t=>t/100;class kS extends US{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,s;const{motionValue:n}=this.options;n&&n.updatedAt!==sr.now()&&this.tick(sr.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(a=this.options).onStop)==null||s.call(a))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;v8(e);const{type:n=fu,repeat:a=0,repeatDelay:s=0,repeatType:l,velocity:c=0}=e;let{keyframes:f}=e;const h=n||fu;h!==fu&&typeof f[0]!="number"&&(this.mixKeyframes=zu(wX,n8(f[0],f[1])),f=[0,100]);const p=h({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...f].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=jS(p));const{calculatedDuration:v}=p;this.calculatedDuration=v,this.resolvedDuration=v+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=p}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:a,totalDuration:s,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:h}=this;if(this.startTime===null)return a.next(0);const{delay:p=0,keyframes:v,repeat:g,repeatType:S,repeatDelay:y,type:A,onUpdate:b,finalKeyframe:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const $=this.currentTime-p*(this.playbackSpeed>=0?1:-1),B=this.playbackSpeed>=0?$<0:$>s;this.currentTime=Math.max($,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let _=this.currentTime,N=a;if(g){const H=Math.min(this.currentTime,s)/f;let rt=Math.floor(H),R=H%1;!R&&H>=1&&(R=1),R===1&&rt--,rt=Math.min(rt,g+1),!!(rt%2)&&(S==="reverse"?(R=1-R,y&&(R-=y/f)):S==="mirror"&&(N=c)),_=Xn(0,1,R)*f}const L=B?{done:!1,value:v[0]}:N.next(_);l&&(L.value=l(L.value));let{done:k}=L;!B&&h!==null&&(k=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return j&&A!==o2&&(L.value=zS(v,this.options,M,this.speed)),b&&b(L.value),j&&this.finish(),L}then(e,n){return this.finished.then(e,n)}get duration(){return gn(this.calculatedDuration)}get time(){return gn(this.currentTime)}set time(e){var n;e=vn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(sr.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=gn(this.currentTime))}play(){var s,l;if(this.isStopped)return;const{driver:e=QF,startTime:n}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(l=(s=this.options).onPlay)==null||l.call(s);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(sr.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function EX(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const sa=t=>t*180/Math.PI,s2=t=>{const e=sa(Math.atan2(t[1],t[0]));return u2(e)},AX={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:s2,rotateZ:s2,skewX:t=>sa(Math.atan(t[1])),skewY:t=>sa(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},u2=t=>(t=t%360,t<0&&(t+=360),t),vO=s2,gO=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),yO=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),RX={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gO,scaleY:yO,scale:t=>(gO(t)+yO(t))/2,rotateX:t=>u2(sa(Math.atan2(t[6],t[5]))),rotateY:t=>u2(sa(Math.atan2(-t[2],t[0]))),rotateZ:vO,rotate:vO,skewX:t=>sa(Math.atan(t[4])),skewY:t=>sa(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function l2(t){return t.includes("scale")?1:0}function c2(t,e){if(!t||t==="none")return l2(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(n)a=RX,s=n;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=AX,s=f}if(!s)return l2(e);const l=a[e],c=s[1].split(",").map(MX);return typeof l=="function"?l(c):c[l]}const xX=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return c2(n,e)};function MX(t){return parseFloat(t.trim())}const bO=t=>t===Xo||t===Rt,$X=new Set(["x","y","z"]),OX=Yo.filter(t=>!$X.has(t));function _X(t){const e=[];return OX.forEach(n=>{const a=t.getValue(n);a!==void 0&&(e.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),e}const la={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>c2(e,"x"),y:(t,{transform:e})=>c2(e,"y")};la.translateX=la.x;la.translateY=la.y;const ca=new Set;let f2=!1,d2=!1,h2=!1;function g8(){if(d2){const t=Array.from(ca).filter(a=>a.needsMeasurement),e=new Set(t.map(a=>a.element)),n=new Map;e.forEach(a=>{const s=_X(a);s.length&&(n.set(a,s),a.render())}),t.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const s=n.get(a);s&&s.forEach(([l,c])=>{var f;(f=a.getValue(l))==null||f.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}d2=!1,f2=!1,ca.forEach(t=>t.complete(h2)),ca.clear()}function y8(){ca.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(d2=!0)})}function CX(){h2=!0,y8(),g8(),h2=!1}class GS{constructor(e,n,a,s,l,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=a,this.motionValue=s,this.element=l,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ca.add(this),f2||(f2=!0,ue.read(y8),ue.resolveKeyframes(g8))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:a,motionValue:s}=this;if(e[0]===null){const l=s==null?void 0:s.get(),c=e[e.length-1];if(l!==void 0)e[0]=l;else if(a&&n){const f=a.readValue(n,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),s&&l===void 0&&s.set(e[0])}EX(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ca.delete(this)}cancel(){this.state==="scheduled"&&(ca.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qX=t=>t.startsWith("--");function LX(t,e,n){qX(e)?t.style.setProperty(e,n):t.style[e]=n}function HS(t){let e;return()=>(e===void 0&&(e=t()),e)}const DX=HS(()=>window.ScrollTimeline!==void 0),NX={};function BX(t,e){const n=HS(t);return()=>NX[e]??n()}const b8=BX(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ou=([t,e,n,a])=>`cubic-bezier(${t}, ${e}, ${n}, ${a})`,SO={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ou([0,.65,.55,1]),circOut:ou([.55,0,1,.45]),backIn:ou([.31,.01,.66,-.59]),backOut:ou([.33,1.53,.69,.99])};function S8(t,e){if(t)return typeof t=="function"?b8()?i8(t,e):"ease-out":m8(t)?ou(t):Array.isArray(t)?t.map(n=>S8(n,e)||SO.easeOut):SO[t]}function jX(t,e,n,{delay:a=0,duration:s=300,repeat:l=0,repeatType:c="loop",ease:f="easeOut",times:h}={},p=void 0){const v={[e]:n};h&&(v.offset=h);const g=S8(f,s);Array.isArray(g)&&(v.easing=g);const S={delay:a,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"};return p&&(S.pseudoElement=p),t.animate(v,S)}function T8(t){return typeof t=="function"&&"applyToOptions"in t}function VX({type:t,...e}){return T8(t)&&b8()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class PX extends US{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:a,keyframes:s,pseudoElement:l,allowFlatten:c=!1,finalKeyframe:f,onComplete:h}=e;this.isPseudoElement=!!l,this.allowFlatten=c,this.options=e,TS(typeof e.type!="string");const p=VX(e);this.animation=jX(n,a,s,p,l),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const v=zS(s,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(v):LX(n,a,v),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,a;const e=((a=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:a.call(n).duration)||0;return gn(Number(e))}get time(){return gn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=vn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&DX()?(this.animation.timeline=e,Vr):n(this)}}const w8={anticipate:d8,backInOut:f8,circInOut:p8};function zX(t){return t in w8}function UX(t){typeof t.ease=="string"&&zX(t.ease)&&(t.ease=w8[t.ease])}const TO=10;class kX extends PX{constructor(e){UX(e),v8(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:a,onComplete:s,element:l,...c}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const f=new kS({...c,autoplay:!1}),h=vn(this.finishedTime??this.time);n.setWithVelocity(f.sample(h-TO).value,f.sample(h).value,TO),f.stop()}}const wO=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Mi.test(t)||t==="0")&&!t.startsWith("url("));function GX(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function HX(t,e,n,a){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],c=wO(s,e),f=wO(l,e);return!c||!f?!1:GX(t)||(n==="spring"||T8(n))&&a}const YX=new Set(["opacity","clipPath","filter","transform"]),FX=HS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function XX(t){var p;const{motionValue:e,name:n,repeatDelay:a,repeatType:s,damping:l,type:c}=t;if(!qq((p=e==null?void 0:e.owner)==null?void 0:p.current))return!1;const{onUpdate:f,transformTemplate:h}=e.owner.getProps();return FX()&&n&&YX.has(n)&&(n!=="transform"||!h)&&!f&&!a&&s!=="mirror"&&l!==0&&c!=="inertia"}const IX=40;class KX extends US{constructor({autoplay:e=!0,delay:n=0,type:a="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:c="loop",keyframes:f,name:h,motionValue:p,element:v,...g}){var A;super(),this.stop=()=>{var b,M;this._animation&&(this._animation.stop(),(b=this.stopTimeline)==null||b.call(this)),(M=this.keyframeResolver)==null||M.cancel()},this.createdAt=sr.now();const S={autoplay:e,delay:n,type:a,repeat:s,repeatDelay:l,repeatType:c,name:h,motionValue:p,element:v,...g},y=(v==null?void 0:v.KeyframeResolver)||GS;this.keyframeResolver=new y(f,(b,M,$)=>this.onKeyframesResolved(b,M,S,!$),h,p,v),(A=this.keyframeResolver)==null||A.scheduleResolve()}onKeyframesResolved(e,n,a,s){this.keyframeResolver=void 0;const{name:l,type:c,velocity:f,delay:h,isHandoff:p,onUpdate:v}=a;this.resolvedAt=sr.now(),HX(e,l,c,f)||((Fn.instantAnimations||!h)&&(v==null||v(zS(e,a,n))),e[0]=e[e.length-1],a.duration=0,a.repeat=0);const S={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>IX?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:e},y=!p&&XX(S)?new kX({...S,element:S.motionValue.owner.current}):new kS(S);y.finished.then(()=>this.notifyFinished()).catch(Vr),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),CX()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const YS=(t,e,n,a={},s,l)=>c=>{const f=LS(a,t)||{},h=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-vn(h);const v={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-p,onUpdate:S=>{e.set(S),f.onUpdate&&f.onUpdate(S)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:t,motionValue:e,element:l?void 0:s};_F(f)||Object.assign(v,OF(t,v)),v.duration&&(v.duration=vn(v.duration)),v.repeatDelay&&(v.repeatDelay=vn(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let g=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(g=!0)),(Fn.instantAnimations||Fn.skipAnimations)&&(g=!0,v.duration=0,v.delay=0),v.allowFlatten=!f.type&&!f.ease,g&&!l&&e.get()!==void 0){const S=AF(v.keyframes,f);if(S!==void 0){ue.update(()=>{v.onUpdate(S),v.onComplete()});return}}return f.isSync?new kS(v):new KX(v)},E8=new Set(["width","height","top","left","right","bottom",...Yo]);function ZX({protectedKeys:t,needsAnimating:e},n){const a=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,a}function A8(t,e,{delay:n=0,transitionOverride:a,type:s}={}){let{transition:l=t.getDefaultTransition(),transitionEnd:c,...f}=e;a&&(l=a);const h=[],p=s&&t.animationState&&t.animationState.getState()[s];for(const v in f){const g=t.getValue(v,t.latestValues[v]??null),S=f[v];if(S===void 0||p&&ZX(p,v))continue;const y={delay:n,...LS(l||{},v)},A=g.get();if(A!==void 0&&!g.isAnimating&&!Array.isArray(S)&&S===A&&!y.velocity)continue;let b=!1;if(window.MotionHandoffAnimation){const $=Zq(t);if($){const B=window.MotionHandoffAnimation($,v,ue);B!==null&&(y.startTime=B,b=!0)}}r2(t,v),g.start(YS(v,g,S,t.shouldReduceMotion&&E8.has(v)?{type:!1}:y,t,b));const M=g.animation;M&&h.push(M)}return c&&Promise.all(h).then(()=>{ue.update(()=>{c&&TF(t,c)})}),h}function p2(t,e,n={}){var h;const a=Au(t,e,n.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(s=n.transitionOverride);const l=a?()=>Promise.all(A8(t,a,n)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:g,staggerDirection:S}=s;return QX(t,e,v+p,g,S,n)}:()=>Promise.resolve(),{when:f}=s;if(f){const[p,v]=f==="beforeChildren"?[l,c]:[c,l];return p().then(()=>v())}else return Promise.all([l(),c(n.delay)])}function QX(t,e,n=0,a=0,s=1,l){const c=[],f=(t.variantChildren.size-1)*a,h=s===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(t.variantChildren).sort(WX).forEach((p,v)=>{p.notify("AnimationStart",e),c.push(p2(p,e,{...l,delay:n+h(v)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(c)}function WX(t,e){return t.sortNodePosition(e)}function JX(t,e,n={}){t.notify("AnimationStart",e);let a;if(Array.isArray(e)){const s=e.map(l=>p2(t,l,n));a=Promise.all(s)}else if(typeof e=="string")a=p2(t,e,n);else{const s=typeof e=="function"?Au(t,e,n.custom):e;a=Promise.all(A8(t,s,n))}return a.then(()=>{t.notify("AnimationComplete",e)})}function R8(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let a=0;a<n;a++)if(e[a]!==t[a])return!1;return!0}const tI=yS.length;function x8(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?x8(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<tI;n++){const a=yS[n],s=t.props[a];(Tu(s)||s===!1)&&(e[a]=s)}return e}const eI=[...gS].reverse(),rI=gS.length;function nI(t){return e=>Promise.all(e.map(({animation:n,options:a})=>JX(t,n,a)))}function iI(t){let e=nI(t),n=EO(),a=!0;const s=h=>(p,v)=>{var S;const g=Au(t,v,h==="exit"?(S=t.presenceContext)==null?void 0:S.custom:void 0);if(g){const{transition:y,transitionEnd:A,...b}=g;p={...p,...b,...A}}return p};function l(h){e=h(t)}function c(h){const{props:p}=t,v=x8(t.parent)||{},g=[],S=new Set;let y={},A=1/0;for(let M=0;M<rI;M++){const $=eI[M],B=n[$],_=p[$]!==void 0?p[$]:v[$],N=Tu(_),L=$===h?B.isActive:null;L===!1&&(A=M);let k=_===v[$]&&_!==p[$]&&N;if(k&&a&&t.manuallyAnimateOnMount&&(k=!1),B.protectedKeys={...y},!B.isActive&&L===null||!_&&!B.prevProp||xf(_)||typeof _=="boolean")continue;const j=aI(B.prevProp,_);let H=j||$===h&&B.isActive&&!k&&N||M>A&&N,rt=!1;const R=Array.isArray(_)?_:[_];let Y=R.reduce(s($),{});L===!1&&(Y={});const{prevResolvedValues:et={}}=B,ct={...et,...Y},ft=tt=>{H=!0,S.has(tt)&&(rt=!0,S.delete(tt)),B.needsAnimating[tt]=!0;const ot=t.getValue(tt);ot&&(ot.liveStyle=!1)};for(const tt in ct){const ot=Y[tt],Q=et[tt];if(y.hasOwnProperty(tt))continue;let C=!1;e2(ot)&&e2(Q)?C=!R8(ot,Q):C=ot!==Q,C?ot!=null?ft(tt):S.add(tt):ot!==void 0&&S.has(tt)?ft(tt):B.protectedKeys[tt]=!0}B.prevProp=_,B.prevResolvedValues=Y,B.isActive&&(y={...y,...Y}),a&&t.blockInitialAnimation&&(H=!1),H&&(!(k&&j)||rt)&&g.push(...R.map(tt=>({animation:tt,options:{type:$}})))}if(S.size){const M={};if(typeof p.initial!="boolean"){const $=Au(t,Array.isArray(p.initial)?p.initial[0]:p.initial);$&&$.transition&&(M.transition=$.transition)}S.forEach($=>{const B=t.getBaseTarget($),_=t.getValue($);_&&(_.liveStyle=!0),M[$]=B??null}),g.push({animation:M})}let b=!!g.length;return a&&(p.initial===!1||p.initial===p.animate)&&!t.manuallyAnimateOnMount&&(b=!1),a=!1,b?e(g):Promise.resolve()}function f(h,p){var g;if(n[h].isActive===p)return Promise.resolve();(g=t.variantChildren)==null||g.forEach(S=>{var y;return(y=S.animationState)==null?void 0:y.setActive(h,p)}),n[h].isActive=p;const v=c(h);for(const S in n)n[S].protectedKeys={};return v}return{animateChanges:c,setActive:f,setAnimateFunction:l,getState:()=>n,reset:()=>{n=EO(),a=!0}}}function aI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!R8(e,t):!1}function ra(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function EO(){return{animate:ra(!0),whileInView:ra(),whileHover:ra(),whileTap:ra(),whileDrag:ra(),whileFocus:ra(),exit:ra()}}class Li{constructor(e){this.isMounted=!1,this.node=e}update(){}}class oI extends Li{constructor(e){super(e),e.animationState||(e.animationState=iI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xf(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let sI=0;class uI extends Li{constructor(){super(...arguments),this.id=sI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const lI={animation:{Feature:oI},exit:{Feature:uI}};function Mu(t,e,n,a={passive:!0}){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n)}const FS=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function ku(t){return{point:{x:t.pageX,y:t.pageY}}}const cI=t=>e=>FS(e)&&t(e,ku(e));function du(t,e,n,a){return Mu(t,e,cI(n),a)}function M8({top:t,left:e,right:n,bottom:a}){return{x:{min:e,max:n},y:{min:t,max:a}}}function fI({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function dI(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),a=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}const $8=1e-4,hI=1-$8,pI=1+$8,O8=.01,mI=0-O8,vI=0+O8;function Je(t){return t.max-t.min}function gI(t,e,n){return Math.abs(t-e)<=n}function AO(t,e,n,a=.5){t.origin=a,t.originPoint=se(e.min,e.max,t.origin),t.scale=Je(n)/Je(e),t.translate=se(n.min,n.max,t.origin)-t.originPoint,(t.scale>=hI&&t.scale<=pI||isNaN(t.scale))&&(t.scale=1),(t.translate>=mI&&t.translate<=vI||isNaN(t.translate))&&(t.translate=0)}function hu(t,e,n,a){AO(t.x,e.x,n.x,a?a.originX:void 0),AO(t.y,e.y,n.y,a?a.originY:void 0)}function RO(t,e,n){t.min=n.min+e.min,t.max=t.min+Je(e)}function yI(t,e,n){RO(t.x,e.x,n.x),RO(t.y,e.y,n.y)}function xO(t,e,n){t.min=e.min-n.min,t.max=t.min+Je(e)}function pu(t,e,n){xO(t.x,e.x,n.x),xO(t.y,e.y,n.y)}const MO=()=>({translate:0,scale:1,origin:0,originPoint:0}),To=()=>({x:MO(),y:MO()}),$O=()=>({min:0,max:0}),Se=()=>({x:$O(),y:$O()});function Dr(t){return[t("x"),t("y")]}function gb(t){return t===void 0||t===1}function m2({scale:t,scaleX:e,scaleY:n}){return!gb(t)||!gb(e)||!gb(n)}function aa(t){return m2(t)||_8(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function _8(t){return OO(t.x)||OO(t.y)}function OO(t){return t&&t!=="0%"}function zc(t,e,n){const a=t-n,s=e*a;return n+s}function _O(t,e,n,a,s){return s!==void 0&&(t=zc(t,s,a)),zc(t,n,a)+e}function v2(t,e=0,n=1,a,s){t.min=_O(t.min,e,n,a,s),t.max=_O(t.max,e,n,a,s)}function C8(t,{x:e,y:n}){v2(t.x,e.translate,e.scale,e.originPoint),v2(t.y,n.translate,n.scale,n.originPoint)}const CO=.999999999999,qO=1.0000000000001;function bI(t,e,n,a=!1){const s=n.length;if(!s)return;e.x=e.y=1;let l,c;for(let f=0;f<s;f++){l=n[f],c=l.projectionDelta;const{visualElement:h}=l.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Eo(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,C8(t,c)),a&&aa(l.latestValues)&&Eo(t,l.latestValues))}e.x<qO&&e.x>CO&&(e.x=1),e.y<qO&&e.y>CO&&(e.y=1)}function wo(t,e){t.min=t.min+e,t.max=t.max+e}function LO(t,e,n,a,s=.5){const l=se(t.min,t.max,s);v2(t,e,n,l,a)}function Eo(t,e){LO(t.x,e.x,e.scaleX,e.scale,e.originX),LO(t.y,e.y,e.scaleY,e.scale,e.originY)}function q8(t,e){return M8(dI(t.getBoundingClientRect(),e))}function SI(t,e,n){const a=q8(t,n),{scroll:s}=e;return s&&(wo(a.x,s.offset.x),wo(a.y,s.offset.y)),a}const L8=({current:t})=>t?t.ownerDocument.defaultView:null,DO=(t,e)=>Math.abs(t-e);function TI(t,e){const n=DO(t.x,e.x),a=DO(t.y,e.y);return Math.sqrt(n**2+a**2)}class D8{constructor(e,n,{transformPagePoint:a,contextWindow:s,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=bb(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,y=TI(g.offset,{x:0,y:0})>=3;if(!S&&!y)return;const{point:A}=g,{timestamp:b}=Pe;this.history.push({...A,timestamp:b});const{onStart:M,onMove:$}=this.handlers;S||(M&&M(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),$&&$(this.lastMoveEvent,g)},this.handlePointerMove=(g,S)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=yb(S,this.transformPagePoint),ue.update(this.updatePoint,!0)},this.handlePointerUp=(g,S)=>{this.end();const{onEnd:y,onSessionEnd:A,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=bb(g.type==="pointercancel"?this.lastMoveEventInfo:yb(S,this.transformPagePoint),this.history);this.startEvent&&y&&y(g,M),A&&A(g,M)},!FS(e))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.contextWindow=s||window;const c=ku(e),f=yb(c,this.transformPagePoint),{point:h}=f,{timestamp:p}=Pe;this.history=[{...h,timestamp:p}];const{onSessionStart:v}=n;v&&v(e,bb(f,this.history)),this.removeListeners=zu(du(this.contextWindow,"pointermove",this.handlePointerMove),du(this.contextWindow,"pointerup",this.handlePointerUp),du(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),xi(this.updatePoint)}}function yb(t,e){return e?{point:e(t.point)}:t}function NO(t,e){return{x:t.x-e.x,y:t.y-e.y}}function bb({point:t},e){return{point:t,delta:NO(t,N8(e)),offset:NO(t,wI(e)),velocity:EI(e,.1)}}function wI(t){return t[0]}function N8(t){return t[t.length-1]}function EI(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,a=null;const s=N8(t);for(;n>=0&&(a=t[n],!(s.timestamp-a.timestamp>vn(e)));)n--;if(!a)return{x:0,y:0};const l=gn(s.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const c={x:(s.x-a.x)/l,y:(s.y-a.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function AI(t,{min:e,max:n},a){return e!==void 0&&t<e?t=a?se(e,t,a.min):Math.max(t,e):n!==void 0&&t>n&&(t=a?se(n,t,a.max):Math.min(t,n)),t}function BO(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function RI(t,{top:e,left:n,bottom:a,right:s}){return{x:BO(t.x,n,s),y:BO(t.y,e,a)}}function jO(t,e){let n=e.min-t.min,a=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,a]=[a,n]),{min:n,max:a}}function xI(t,e){return{x:jO(t.x,e.x),y:jO(t.y,e.y)}}function MI(t,e){let n=.5;const a=Je(t),s=Je(e);return s>a?n=xu(e.min,e.max-a,t.min):a>s&&(n=xu(t.min,t.max-s,e.min)),Xn(0,1,n)}function $I(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const g2=.35;function OI(t=g2){return t===!1?t=0:t===!0&&(t=g2),{x:VO(t,"left","right"),y:VO(t,"top","bottom")}}function VO(t,e,n){return{min:PO(t,e),max:PO(t,n)}}function PO(t,e){return typeof t=="number"?t:t[e]||0}const Wr={x:!1,y:!1};function B8(){return Wr.x||Wr.y}function _I(t){return t==="x"||t==="y"?Wr[t]?null:(Wr[t]=!0,()=>{Wr[t]=!1}):Wr.x||Wr.y?null:(Wr.x=Wr.y=!0,()=>{Wr.x=Wr.y=!1})}const CI=new WeakMap;class qI{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Se(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=v=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ku(v).point)},l=(v,g)=>{const{drag:S,dragPropagation:y,onDragStart:A}=this.getProps();if(S&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=_I(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dr(M=>{let $=this.getAxisMotionValue(M).get()||0;if(mn.test($)){const{projection:B}=this.visualElement;if(B&&B.layout){const _=B.layout.layoutBox[M];_&&($=Je(_)*(parseFloat($)/100))}}this.originPoint[M]=$}),A&&ue.postRender(()=>A(v,g)),r2(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},c=(v,g)=>{const{dragPropagation:S,dragDirectionLock:y,onDirectionLock:A,onDrag:b}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:M}=g;if(y&&this.currentDirection===null){this.currentDirection=LI(M),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",g.point,M),this.updateAxis("y",g.point,M),this.visualElement.render(),b&&b(v,g)},f=(v,g)=>this.stop(v,g),h=()=>Dr(v=>{var g;return this.getAnimationState(v)==="paused"&&((g=this.getAxisMotionValue(v).animation)==null?void 0:g.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new D8(e,{onSessionStart:s,onStart:l,onMove:c,onSessionEnd:f,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:L8(this.visualElement)})}stop(e,n){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&ue.postRender(()=>l(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,a){const{drag:s}=this.getProps();if(!a||!mc(e,s,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=AI(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,s=this.constraints;e&&bo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=RI(a.layoutBox,e):this.constraints=!1,this.elastic=OI(n),s!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Dr(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=$I(a.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!bo(e))return!1;const a=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=SI(a,s.root,this.visualElement.getTransformPagePoint());let c=xI(s.layout.layoutBox,l);if(n){const f=n(fI(c));this.hasMutatedConstraints=!!f,f&&(c=M8(f))}return c}startAnimation(e){const{drag:n,dragMomentum:a,dragElastic:s,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),h=this.constraints||{},p=Dr(v=>{if(!mc(v,n,this.currentDirection))return;let g=h&&h[v]||{};c&&(g={min:0,max:0});const S=s?200:1e6,y=s?40:1e7,A={type:"inertia",velocity:a?e[v]:0,bounceStiffness:S,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(v,A)});return Promise.all(p).then(f)}startAxisValueAnimation(e,n){const a=this.getAxisMotionValue(e);return r2(this.visualElement,e),a.start(YS(e,a,0,n,this.visualElement,!1))}stopAnimation(){Dr(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Dr(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),s=a[n];return s||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){Dr(n=>{const{drag:a}=this.getProps();if(!mc(n,a,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(n);if(s&&s.layout){const{min:c,max:f}=s.layout.layoutBox[n];l.set(e[n]-se(c,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!bo(n)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Dr(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const h=f.get();s[c]=MI({min:h,max:h},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Dr(c=>{if(!mc(c,e,null))return;const f=this.getAxisMotionValue(c),{min:h,max:p}=this.constraints[c];f.set(se(h,p,s[c]))})}addListeners(){if(!this.visualElement.current)return;CI.set(this.visualElement,this);const e=this.visualElement.current,n=du(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();bo(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ue.read(a);const c=Mu(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Dr(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())});return()=>{c(),n(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:c=g2,dragMomentum:f=!0}=e;return{...e,drag:n,dragDirectionLock:a,dragPropagation:s,dragConstraints:l,dragElastic:c,dragMomentum:f}}}function mc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function LI(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class DI extends Li{constructor(e){super(e),this.removeGroupControls=Vr,this.removeListeners=Vr,this.controls=new qI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Vr}unmount(){this.removeGroupControls(),this.removeListeners()}}const zO=t=>(e,n)=>{t&&ue.postRender(()=>t(e,n))};class NI extends Li{constructor(){super(...arguments),this.removePointerDownListener=Vr}onPointerDown(e){this.session=new D8(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:L8(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:zO(e),onStart:zO(n),onMove:a,onEnd:(l,c)=>{delete this.session,s&&ue.postRender(()=>s(l,c))}}}mount(){this.removePointerDownListener=du(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Mc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function UO(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const eu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Rt.test(t))t=parseFloat(t);else return t;const n=UO(t,e.target.x),a=UO(t,e.target.y);return`${n}% ${a}%`}},BI={correct:(t,{treeScale:e,projectionDelta:n})=>{const a=t,s=Mi.parse(t);if(s.length>5)return a;const l=Mi.createTransformer(t),c=typeof s[0]!="number"?1:0,f=n.x.scale*e.x,h=n.y.scale*e.y;s[0+c]/=f,s[1+c]/=h;const p=se(f,h,.5);return typeof s[2+c]=="number"&&(s[2+c]/=p),typeof s[3+c]=="number"&&(s[3+c]/=p),l(s)}};class jI extends Z.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:a,layoutId:s}=this.props,{projection:l}=e;KY(VI),l&&(n.group&&n.group.add(l),a&&a.register&&s&&a.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Mc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:a,drag:s,isPresent:l}=this.props,{projection:c}=a;return c&&(c.isPresent=l,s||e.layoutDependency!==n||n===void 0||e.isPresent!==l?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||ue.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),SS.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function j8(t){const[e,n]=$Y(),a=Z.useContext(Oq);return vt.jsx(jI,{...t,layoutGroup:a,switchLayoutGroup:Z.useContext(Vq),isPresent:e,safeToRemove:n})}const VI={borderRadius:{...eu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:eu,borderTopRightRadius:eu,borderBottomLeftRadius:eu,borderBottomRightRadius:eu,boxShadow:BI};function PI(t,e,n){const a=Ie(t)?t:Do(t);return a.start(YS("",a,e,n)),a.animation}const zI=(t,e)=>t.depth-e.depth;class UI{constructor(){this.children=[],this.isDirty=!1}add(e){_S(this.children,e),this.isDirty=!0}remove(e){CS(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(zI),this.isDirty=!1,this.children.forEach(e)}}function kI(t,e){const n=sr.now(),a=({timestamp:s})=>{const l=s-n;l>=e&&(xi(a),t(l-e))};return ue.setup(a,!0),()=>xi(a)}const V8=["TopLeft","TopRight","BottomLeft","BottomRight"],GI=V8.length,kO=t=>typeof t=="string"?parseFloat(t):t,GO=t=>typeof t=="number"||Rt.test(t);function HI(t,e,n,a,s,l){s?(t.opacity=se(0,n.opacity??1,YI(a)),t.opacityExit=se(e.opacity??1,0,FI(a))):l&&(t.opacity=se(e.opacity??1,n.opacity??1,a));for(let c=0;c<GI;c++){const f=`border${V8[c]}Radius`;let h=HO(e,f),p=HO(n,f);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||GO(h)===GO(p)?(t[f]=Math.max(se(kO(h),kO(p),a),0),(mn.test(p)||mn.test(h))&&(t[f]+="%")):t[f]=p}(e.rotate||n.rotate)&&(t.rotate=se(e.rotate||0,n.rotate||0,a))}function HO(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const YI=P8(0,.5,h8),FI=P8(.5,.95,Vr);function P8(t,e,n){return a=>a<t?0:a>e?1:n(xu(t,e,a))}function YO(t,e){t.min=e.min,t.max=e.max}function Lr(t,e){YO(t.x,e.x),YO(t.y,e.y)}function FO(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function XO(t,e,n,a,s){return t-=e,t=zc(t,1/n,a),s!==void 0&&(t=zc(t,1/s,a)),t}function XI(t,e=0,n=1,a=.5,s,l=t,c=t){if(mn.test(e)&&(e=parseFloat(e),e=se(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=se(l.min,l.max,a);t===l&&(f-=e),t.min=XO(t.min,e,n,f,s),t.max=XO(t.max,e,n,f,s)}function IO(t,e,[n,a,s],l,c){XI(t,e[n],e[a],e[s],e.scale,l,c)}const II=["x","scaleX","originX"],KI=["y","scaleY","originY"];function KO(t,e,n,a){IO(t.x,e,II,n?n.x:void 0,a?a.x:void 0),IO(t.y,e,KI,n?n.y:void 0,a?a.y:void 0)}function ZO(t){return t.translate===0&&t.scale===1}function z8(t){return ZO(t.x)&&ZO(t.y)}function QO(t,e){return t.min===e.min&&t.max===e.max}function ZI(t,e){return QO(t.x,e.x)&&QO(t.y,e.y)}function WO(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function U8(t,e){return WO(t.x,e.x)&&WO(t.y,e.y)}function JO(t){return Je(t.x)/Je(t.y)}function t_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class QI{constructor(){this.members=[]}add(e){_S(this.members,e),e.scheduleRender()}remove(e){if(CS(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let a;for(let s=n;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){a=l;break}}return a?(this.promote(a),!0):!1}promote(e,n){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,n&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:a}=e;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function WI(t,e,n){let a="";const s=t.x.translate/e.x,l=t.y.translate/e.y,c=(n==null?void 0:n.z)||0;if((s||l||c)&&(a=`translate3d(${s}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:p,rotate:v,rotateX:g,rotateY:S,skewX:y,skewY:A}=n;p&&(a=`perspective(${p}px) ${a}`),v&&(a+=`rotate(${v}deg) `),g&&(a+=`rotateX(${g}deg) `),S&&(a+=`rotateY(${S}deg) `),y&&(a+=`skewX(${y}deg) `),A&&(a+=`skewY(${A}deg) `)}const f=t.x.scale*e.x,h=t.y.scale*e.y;return(f!==1||h!==1)&&(a+=`scale(${f}, ${h})`),a||"none"}function k8(t){return Cq(t)&&"ownerSVGElement"in t}function JI(t){return k8(t)&&t.tagName==="svg"}const Sb=["","X","Y","Z"],tK={visibility:"hidden"},eK=1e3;let rK=0;function Tb(t,e,n,a){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),a&&(a[t]=0))}function G8(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Zq(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ue,!(s||l))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&G8(a)}function H8({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},f=e==null?void 0:e()){this.id=rK++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aK),this.nodes.forEach(cK),this.nodes.forEach(fK),this.nodes.forEach(oK)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new UI)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new qS),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const h=this.eventHandlers.get(c);h&&h.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=k8(c)&&!JI(c),this.instance=c;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||f)&&(this.isLayoutDirty=!0),t){let v;const g=()=>this.root.updateBlockedByResize=!1;t(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=kI(g,250),Mc.hasAnimatedSinceResize&&(Mc.hasAnimatedSinceResize=!1,this.nodes.forEach(r_))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:g,hasRelativeLayoutChanged:S,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||p.getDefaultTransition()||vK,{onLayoutAnimationStart:b,onLayoutAnimationComplete:M}=p.getProps(),$=!this.targetLayout||!U8(this.targetLayout,y),B=!g&&S;if(this.options.layoutRoot||this.resumeFrom||B||g&&($||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...LS(A,"layout"),onPlay:b,onComplete:M};(p.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(v,B)}else g||r_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(dK),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G8(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const g=this.path[v];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:h}=this.options;if(f===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(e_);return}this.isUpdating||this.nodes.forEach(uK),this.isUpdating=!1,this.nodes.forEach(lK),this.nodes.forEach(nK),this.nodes.forEach(iK),this.clearAllSnapshots();const f=sr.now();Pe.delta=Xn(0,1e3/60,f-Pe.timestamp),Pe.timestamp=f,Pe.isProcessing=!0,hb.update.process(Pe),hb.preRender.process(Pe),hb.render.process(Pe),Pe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,SS.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sK),this.sharedNodes.forEach(hK)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Je(this.snapshot.measuredBox.x)&&!Je(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Se(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!z8(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;c&&this.instance&&(f||aa(this.latestValues)||v)&&(s(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let h=this.removeElementScroll(f);return c&&(h=this.removeTransform(h)),gK(h),{animationId:this.root.animationId,measuredBox:f,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:c}=this.options;if(!c)return Se();const f=c.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(yK))){const{scroll:v}=this.root;v&&(wo(f.x,v.offset.x),wo(f.y,v.offset.y))}return f}removeElementScroll(c){var h;const f=Se();if(Lr(f,c),(h=this.scroll)!=null&&h.wasRoot)return f;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:g,options:S}=v;v!==this.root&&g&&S.layoutScroll&&(g.wasRoot&&Lr(f,c),wo(f.x,g.offset.x),wo(f.y,g.offset.y))}return f}applyTransform(c,f=!1){const h=Se();Lr(h,c);for(let p=0;p<this.path.length;p++){const v=this.path[p];!f&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Eo(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),aa(v.latestValues)&&Eo(h,v.latestValues)}return aa(this.latestValues)&&Eo(h,this.latestValues),h}removeTransform(c){const f=Se();Lr(f,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!p.instance||!aa(p.latestValues))continue;m2(p.latestValues)&&p.updateSnapshot();const v=Se(),g=p.measurePageBox();Lr(v,g),KO(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return aa(this.latestValues)&&KO(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var S;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:g}=this.options;if(!(!this.layout||!(v||g))){if(this.resolvedRelativeTargetAt=Pe.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),pu(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Lr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Se(),this.targetWithTransforms=Se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Lr(this.target,this.layout.layoutBox),C8(this.target,this.targetDelta)):Lr(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Se(),this.relativeTargetOrigin=Se(),pu(this.relativeTargetOrigin,this.target,y.target),Lr(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||m2(this.parent.latestValues)||_8(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var A;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(A=this.parent)!=null&&A.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Pe.timestamp&&(h=!1),h)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Lr(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,S=this.treeScale.y;bI(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Se());const{target:y}=c;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(FO(this.prevProjectionDelta.x,this.projectionDelta.x),FO(this.prevProjectionDelta.y,this.projectionDelta.y)),hu(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==S||!t_(this.projectionDelta.x,this.prevProjectionDelta.x)||!t_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=To(),this.projectionDelta=To(),this.projectionDeltaWithTransform=To()}setAnimationOrigin(c,f=!1){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},g=To();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const S=Se(),y=h?h.source:void 0,A=this.layout?this.layout.source:void 0,b=y!==A,M=this.getStack(),$=!M||M.members.length<=1,B=!!(b&&!$&&this.options.crossfade===!0&&!this.path.some(mK));this.animationProgress=0;let _;this.mixTargetDelta=N=>{const L=N/1e3;n_(g.x,c.x,L),n_(g.y,c.y,L),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pu(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),pK(this.relativeTarget,this.relativeTargetOrigin,S,L),_&&ZI(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Se()),Lr(_,this.relativeTarget)),b&&(this.animationValues=v,HI(v,p,this.latestValues,L,B,$)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var f,h,p;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(p=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||p.stop(),this.pendingAnimation&&(xi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ue.update(()=>{Mc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Do(0)),this.currentAnimation=PI(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:v=>{this.mixTargetDelta(v),c.onUpdate&&c.onUpdate(v)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(eK),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:h,layout:p,latestValues:v}=c;if(!(!f||!h||!p)){if(this!==c&&this.layout&&p&&Y8(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Se();const g=Je(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+g;const S=Je(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+S}Lr(f,h),Eo(f,v),hu(this.projectionDeltaWithTransform,this.layoutCorrected,f,v)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new QI),this.sharedNodes.get(c).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(f=!0),!f)return;const p={};h.z&&Tb("z",c,p,this.animationValues);for(let v=0;v<Sb.length;v++)Tb(`rotate${Sb[v]}`,c,p,this.animationValues),Tb(`skew${Sb[v]}`,c,p,this.animationValues);c.render();for(const v in p)c.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return tK;const f={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Rc(c==null?void 0:c.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Rc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!aa(this.latestValues)&&(y.transform=h?h({},""):"none",this.hasProjected=!1),y}const v=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=WI(this.projectionDeltaWithTransform,this.treeScale,v),h&&(f.transform=h(v,f.transform));const{x:g,y:S}=this.projectionDelta;f.transformOrigin=`${g.origin*100}% ${S.origin*100}% 0`,p.animationValues?f.opacity=p===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const y in wu){if(v[y]===void 0)continue;const{correct:A,applyTo:b,isCSSVariable:M}=wu[y],$=f.transform==="none"?v[y]:A(v[y],p);if(b){const B=b.length;for(let _=0;_<B;_++)f[b[_]]=$}else M?this.options.visualElement.renderState.vars[y]=$:f[y]=$}return this.options.layoutId&&(f.pointerEvents=p===this?Rc(c==null?void 0:c.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(e_),this.root.sharedNodes.clear()}}}function nK(t){t.updateLayout()}function iK(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:s}=t.layout,{animationType:l}=t.options,c=e.source!==t.layout.source;l==="size"?Dr(g=>{const S=c?e.measuredBox[g]:e.layoutBox[g],y=Je(S);S.min=a[g].min,S.max=S.min+y}):Y8(l,e.layoutBox,a)&&Dr(g=>{const S=c?e.measuredBox[g]:e.layoutBox[g],y=Je(a[g]);S.max=S.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[g].max=t.relativeTarget[g].min+y)});const f=To();hu(f,a,e.layoutBox);const h=To();c?hu(h,t.applyTransform(s,!0),e.measuredBox):hu(h,a,e.layoutBox);const p=!z8(f);let v=!1;if(!t.resumeFrom){const g=t.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:S,layout:y}=g;if(S&&y){const A=Se();pu(A,e.layoutBox,S.layoutBox);const b=Se();pu(b,a,y.layoutBox),U8(A,b)||(v=!0),g.options.layoutRoot&&(t.relativeTarget=b,t.relativeTargetOrigin=A,t.relativeParent=g)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:h,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function aK(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oK(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function sK(t){t.clearSnapshot()}function e_(t){t.clearMeasurements()}function uK(t){t.isLayoutDirty=!1}function lK(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function r_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function cK(t){t.resolveTargetDelta()}function fK(t){t.calcProjection()}function dK(t){t.resetSkewAndRotation()}function hK(t){t.removeLeadSnapshot()}function n_(t,e,n){t.translate=se(e.translate,0,n),t.scale=se(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function i_(t,e,n,a){t.min=se(e.min,n.min,a),t.max=se(e.max,n.max,a)}function pK(t,e,n,a){i_(t.x,e.x,n.x,a),i_(t.y,e.y,n.y,a)}function mK(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const vK={duration:.45,ease:[.4,0,.1,1]},a_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),o_=a_("applewebkit/")&&!a_("chrome/")?Math.round:Vr;function s_(t){t.min=o_(t.min),t.max=o_(t.max)}function gK(t){s_(t.x),s_(t.y)}function Y8(t,e,n){return t==="position"||t==="preserve-aspect"&&!gI(JO(e),JO(n),.2)}function yK(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const bK=H8({attachResizeListener:(t,e)=>Mu(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wb={current:void 0},F8=H8({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!wb.current){const t=new bK({});t.mount(window),t.setOptions({layoutScroll:!0}),wb.current=t}return wb.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),SK={pan:{Feature:NI},drag:{Feature:DI,ProjectionNode:F8,MeasureLayout:j8}};function TK(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let a=document;const s=(n==null?void 0:n[t])??a.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function X8(t,e){const n=TK(t),a=new AbortController,s={passive:!0,...e,signal:a.signal};return[n,s,()=>a.abort()]}function u_(t){return!(t.pointerType==="touch"||B8())}function wK(t,e,n={}){const[a,s,l]=X8(t,n),c=f=>{if(!u_(f))return;const{target:h}=f,p=e(h,f);if(typeof p!="function"||!h)return;const v=g=>{u_(g)&&(p(g),h.removeEventListener("pointerleave",v))};h.addEventListener("pointerleave",v,s)};return a.forEach(f=>{f.addEventListener("pointerenter",c,s)}),l}function l_(t,e,n){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,l=a[s];l&&ue.postRender(()=>l(e,ku(e)))}class EK extends Li{mount(){const{current:e}=this.node;e&&(this.unmount=wK(e,(n,a)=>(l_(this.node,a,"Start"),s=>l_(this.node,s,"End"))))}unmount(){}}class AK extends Li{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zu(Mu(this.node.current,"focus",()=>this.onFocus()),Mu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const I8=(t,e)=>e?t===e?!0:I8(t,e.parentElement):!1,RK=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xK(t){return RK.has(t.tagName)||t.tabIndex!==-1}const $c=new WeakSet;function c_(t){return e=>{e.key==="Enter"&&t(e)}}function Eb(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const MK=(t,e)=>{const n=t.currentTarget;if(!n)return;const a=c_(()=>{if($c.has(n))return;Eb(n,"down");const s=c_(()=>{Eb(n,"up")}),l=()=>Eb(n,"cancel");n.addEventListener("keyup",s,e),n.addEventListener("blur",l,e)});n.addEventListener("keydown",a,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),e)};function f_(t){return FS(t)&&!B8()}function $K(t,e,n={}){const[a,s,l]=X8(t,n),c=f=>{const h=f.currentTarget;if(!f_(f))return;$c.add(h);const p=e(h,f),v=(y,A)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",S),$c.has(h)&&$c.delete(h),f_(y)&&typeof p=="function"&&p(y,{success:A})},g=y=>{v(y,h===window||h===document||n.useGlobalTarget||I8(h,y.target))},S=y=>{v(y,!1)};window.addEventListener("pointerup",g,s),window.addEventListener("pointercancel",S,s)};return a.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",c,s),qq(f)&&(f.addEventListener("focus",p=>MK(p,s)),!xK(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function d_(t,e,n){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),l=a[s];l&&ue.postRender(()=>l(e,ku(e)))}class OK extends Li{mount(){const{current:e}=this.node;e&&(this.unmount=$K(e,(n,a)=>(d_(this.node,a,"Start"),(s,{success:l})=>d_(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const y2=new WeakMap,Ab=new WeakMap,_K=t=>{const e=y2.get(t.target);e&&e(t)},CK=t=>{t.forEach(_K)};function qK({root:t,...e}){const n=t||document;Ab.has(n)||Ab.set(n,{});const a=Ab.get(n),s=JSON.stringify(e);return a[s]||(a[s]=new IntersectionObserver(CK,{root:t,...e})),a[s]}function LK(t,e,n){const a=qK(e);return y2.set(t,n),a.observe(t),()=>{y2.delete(t),a.unobserve(t)}}const DK={some:0,all:1};class NK extends Li{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:a,amount:s="some",once:l}=e,c={root:n?n.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:DK[s]},f=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,l&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),S=p?v:g;S&&S(h)};return LK(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(BK(e,n))&&this.startObserver()}unmount(){}}function BK({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const jK={inView:{Feature:NK},tap:{Feature:OK},focus:{Feature:AK},hover:{Feature:EK}},VK={layout:{ProjectionNode:F8,MeasureLayout:j8}},b2={current:null},K8={current:!1};function PK(){if(K8.current=!0,!!mS)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>b2.current=t.matches;t.addListener(e),e()}else b2.current=!1}const zK=new WeakMap;function UK(t,e,n){for(const a in e){const s=e[a],l=n[a];if(Ie(s))t.addValue(a,s);else if(Ie(l))t.addValue(a,Do(s,{owner:t}));else if(l!==s)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=t.getStaticValue(a);t.addValue(a,Do(c!==void 0?c:s,{owner:t}))}}for(const a in n)e[a]===void 0&&t.removeValue(a);return e}const Z8=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Q8=t=>/^0[^.\s]+$/u.test(t),kK={test:t=>t==="auto",parse:t=>t},W8=t=>e=>e.test(t),J8=[Xo,Rt,mn,Ei,QY,ZY,kK],h_=t=>J8.find(W8(t)),GK=[...J8,xe,Mi],HK=t=>GK.find(W8(t)),YK=new Set(["brightness","contrast","saturate","opacity"]);function FK(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[a]=n.match(DS)||[];if(!a)return t;const s=n.replace(a,"");let l=YK.has(e)?1:0;return a!==n&&(l*=100),e+"("+l+s+")"}const XK=/\b([a-z-]*)\(.*?\)/gu,S2={...Mi,getAnimatableNone:t=>{const e=t.match(XK);return e?e.map(FK).join(" "):t}},IK={...AS,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:S2,WebkitFilter:S2},tL=t=>IK[t];function eL(t,e){let n=tL(t);return n!==S2&&(n=Mi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const p_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class KK{scrapeMotionValuesFromProps(e,n,a){return{}}constructor({parent:e,props:n,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:l,visualState:c},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=GS,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=sr.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,ue.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=c;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=n,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Mf(n),this.isVariantNode=Bq(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(n,{},this);for(const S in g){const y=g[S];h[S]!==void 0&&Ie(y)&&y.set(h[S],!1)}}mount(e){this.current=e,zK.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,a)=>this.bindToMotionValue(a,n)),K8.current||PK(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:b2.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),xi(this.notifyUpdate),xi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=Fo.has(e);a&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&ue.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),l=n.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{s(),l(),c&&c(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lo){const n=Lo[e];if(!n)continue;const{isEnabled:a,Feature:s}=n;if(!this.features[e]&&s&&a(this.props)&&(this.features[e]=new s(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Se()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<p_.length;a++){const s=p_[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,c=e[l];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=UK(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const a=this.values.get(e);n!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&n!==void 0&&(a=Do(n===null?void 0:n,{owner:this}),this.addValue(e,a)),a}readValue(e,n){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(Z8(a)||Q8(a))?a=parseFloat(a):!HK(a)&&Mi.test(n)&&(a=eL(e,n)),this.setBaseTarget(e,Ie(a)?a.get():a)),Ie(a)?a.get():a}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var l;const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const c=$S(this.props,n,(l=this.presenceContext)==null?void 0:l.custom);c&&(a=c[e])}if(n&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Ie(s)?s:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new qS),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}const ZK=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function QK(t){const e=ZK.exec(t);if(!e)return[,];const[,n,a,s]=e;return[`--${n??a}`,s]}function rL(t,e,n=1){const[a,s]=QK(t);if(!a)return;const l=window.getComputedStyle(e).getPropertyValue(a);if(l){const c=l.trim();return Z8(c)?parseFloat(c):c}return ES(s)?rL(s,e,n+1):s}function WK(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Q8(t):!0}const JK=new Set(["auto","none","0"]);function tZ(t,e,n){let a=0,s;for(;a<t.length&&!s;){const l=t[a];typeof l=="string"&&!JK.has(l)&&Ru(l).values.length&&(s=t[a]),a++}if(s&&n)for(const l of e)t[l]=eL(n,s)}class eZ extends GS{constructor(e,n,a,s,l){super(e,n,a,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let h=0;h<e.length;h++){let p=e[h];if(typeof p=="string"&&(p=p.trim(),ES(p))){const v=rL(p,n.current);v!==void 0&&(e[h]=v),h===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!E8.has(a)||e.length!==2)return;const[s,l]=e,c=h_(s),f=h_(l);if(c!==f)if(bO(c)&&bO(f))for(let h=0;h<e.length;h++){const p=e[h];typeof p=="string"&&(e[h]=parseFloat(p))}else la[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,a=[];for(let s=0;s<e.length;s++)(e[s]===null||WK(e[s]))&&a.push(s);a.length&&tZ(e,a,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=la[a](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(a,s).jump(s,!1)}measureEndState(){var f;const{element:e,name:n,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const s=e.getValue(n);s&&s.jump(this.measuredOrigin,!1);const l=a.length-1,c=a[l];a[l]=la[n](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}class nL extends KK{constructor(){super(...arguments),this.KeyframeResolver=eZ}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:a}){delete n[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ie(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function iL(t,{style:e,vars:n},a,s){Object.assign(t.style,e,s&&s.getProjectionStyles(a));for(const l in n)t.style.setProperty(l,n[l])}function rZ(t){return window.getComputedStyle(t)}class nZ extends nL{constructor(){super(...arguments),this.type="html",this.renderInstance=iL}readValueFromInstance(e,n){var a;if(Fo.has(n))return(a=this.projection)!=null&&a.isProjecting?l2(n):xX(e,n);{const s=rZ(e),l=(wS(n)?s.getPropertyValue(n):s[n])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:n}){return q8(e,n)}build(e,n,a){RS(e,n,a.transformTemplate)}scrapeMotionValuesFromProps(e,n,a){return OS(e,n,a)}}const aL=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function iZ(t,e,n,a){iL(t,e,void 0,a);for(const s in e.attrs)t.setAttribute(aL.has(s)?s:bS(s),e.attrs[s])}class aZ extends nL{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Se}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Fo.has(n)){const a=tL(n);return a&&a.default||0}return n=aL.has(n)?n:bS(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,a){return Iq(e,n,a)}build(e,n,a){Hq(e,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(e,n,a,s){iZ(e,n,a,s)}mount(e){this.isSVGTag=Fq(e.tagName),super.mount(e)}}const oZ=(t,e)=>MS(t)?new aZ(e):new nZ(e,{allowProjection:t!==Z.Fragment}),sZ=mF({...lI,...jK,...SK,...VK},oZ),oL=NY(sZ),uZ=(t,e,n)=>(t-e)/(n-e)*100,lZ=({values:t,dataIntervalInMS:e,showResults:n,showResultsDataIntervalInMS:a,dataIntervalIntraTurnDecay:s,dataIntervalInterTurnDecay:l,dataPointFallDurationInMS:c,turnNumber:f,dataMin:h,dataMax:p})=>{const[v,g]=Z.useState([]),S=Zn();Z.useEffect(()=>{let A=v.length;n||(g([]),A=0);const b=[],M=$=>{if($>=t.length)return;const _=(n?a:e*Math.pow(l,f))*Math.pow(s,$),N=setTimeout(()=>{const L={id:`${Date.now()}-${$}`,x:uZ(t[$],h,p)};g(k=>[...k,L]),M($+1)},_);b.push(N)};return M(A),()=>{b.forEach(clearTimeout)}},[t,n,h,p]);const y={width:"15px",height:"15px",backgroundColor:kn(S.palette.primary.main,.5),borderRadius:"50%"};return vt.jsx(hS,{sx:{position:"relative",height:"40vh",overflow:"hidden"},children:v.map(A=>vt.jsx(oL.div,{initial:{y:"-5vh"},animate:{y:"37vh"},style:{position:"absolute",left:`${A.x}%`,...y},transformTemplate:({y:b})=>`translateX(-50%) translateY(${b})`,transition:{type:"tween",duration:c/1e3}},A.id))})},$f=Z.createContext({});function cZ({children:t}){const e=Zn(),n=$q(e.breakpoints.only("xs")),[a,s]=Z.useState(()=>({distribution:"normal",std:1,stdDecay:1.1,mean:0,maxPoints:100,boundsSettings:{trueMeanMin:-3,trueMeanMax:3,windowMin:-5,windowMax:5},xsBoundsSettings:{trueMeanMin:-1.5,trueMeanMax:1.5,windowMin:-3,windowMax:3},initialGuessInterval:1,guessIntervalDecay:.9,minGuessInterval:.5,dataIntervalInMS:750,dataIntervalInterTurnDecay:1.1,showResultsDataIntervalInMS:20,dataIntervalIntraTurnDecay:.95,dataPointFallDurationInMS:1e3})),[l,c]=Z.useState(()=>({turnData:$C(0,n,a),turnNumber:0,showResults:!1,totalCorrectGuesses:0,totalGuesses:0,totalScore:0,paused:!1}));return vt.jsx($f.Provider,{value:{settings:a,setSettings:s,gameState:l,setGameState:c},children:t})}const fZ=fG(vt.jsx("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7z"})),dZ=(t,e,n)=>(t-e)/(n-e)*100,hZ=({xCoordinates:t,targetIndex:e,dataMin:n,dataMax:a})=>{const s=Zn(),{gameState:l,setGameState:c}=Z.useContext($f),{showResults:f}=l,h=(v,g)=>f?v===e?s.palette.success[g]:l.turnData.userGuess===v?s.palette.error[g]:s.palette.secondary[g]:s.palette.secondary[g],p=v=>f&&v===e?`2px solid ${l.turnData.userGuess===v?s.palette.success.main:s.palette.error.main}`:"none";return Z.useEffect(()=>{c({...l,showResults:!1})},[t]),vt.jsx(hS,{sx:{position:"relative",height:"60px"},children:t.map((v,g)=>vt.jsx(oL.div,{style:{position:"absolute",left:`${dZ(v,n,a)}%`,cursor:f?"default":"pointer",fontSize:"36px",color:h(g,"main"),transform:"translateX(-50%)",border:p(g),borderRadius:"50%",display:"flex",alignItems:"center"},transformTemplate:({scale:S})=>`translateX(-50%) scale(${S||1} )`,whileHover:f?{}:{scale:1.2,color:h(g,"dark")},whileTap:f?{}:{scale:.9,color:h(g,"light")},onClick:S=>{S.stopPropagation(),f||c({...l,turnData:{...l.turnData,userGuess:g},showResults:!0})},children:vt.jsx(fZ,{sx:{fontSize:"36px"}})},g))})},{min:pZ,max:mZ}=Math,fa=(t,e=0,n=1)=>pZ(mZ(e,t),n),XS=t=>{t._clipped=!1,t._unclipped=t.slice(0);for(let e=0;e<=3;e++)e<3?((t[e]<0||t[e]>255)&&(t._clipped=!0),t[e]=fa(t[e],0,255)):e===3&&(t[e]=fa(t[e],0,1));return t},sL={};for(let t of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])sL[`[object ${t}]`]=t.toLowerCase();function qt(t){return sL[Object.prototype.toString.call(t)]||"object"}const $t=(t,e=null)=>t.length>=3?Array.prototype.slice.call(t):qt(t[0])=="object"&&e?e.split("").filter(n=>t[0][n]!==void 0).map(n=>t[0][n]):t[0].slice(0),Io=t=>{if(t.length<2)return null;const e=t.length-1;return qt(t[e])=="string"?t[e].toLowerCase():null},{PI:Of,min:uL,max:lL}=Math,Pr=t=>Math.round(t*100)/100,T2=t=>Math.round(t*100)/100,zn=Of*2,Rb=Of/3,vZ=Of/180,gZ=180/Of;function cL(t){return[...t.slice(0,3).reverse(),...t.slice(3)]}const Mt={format:{},autodetect:[]};class ht{constructor(...e){const n=this;if(qt(e[0])==="object"&&e[0].constructor&&e[0].constructor===this.constructor)return e[0];let a=Io(e),s=!1;if(!a){s=!0,Mt.sorted||(Mt.autodetect=Mt.autodetect.sort((l,c)=>c.p-l.p),Mt.sorted=!0);for(let l of Mt.autodetect)if(a=l.test(...e),a)break}if(Mt.format[a]){const l=Mt.format[a].apply(null,s?e:e.slice(0,-1));n._rgb=XS(l)}else throw new Error("unknown format: "+e);n._rgb.length===3&&n._rgb.push(1)}toString(){return qt(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const yZ="3.1.2",Nt=(...t)=>new ht(...t);Nt.version=yZ;const No={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},bZ=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,SZ=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,fL=t=>{if(t.match(bZ)){(t.length===4||t.length===7)&&(t=t.substr(1)),t.length===3&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);const e=parseInt(t,16),n=e>>16,a=e>>8&255,s=e&255;return[n,a,s,1]}if(t.match(SZ)){(t.length===5||t.length===9)&&(t=t.substr(1)),t.length===4&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=parseInt(t,16),n=e>>24&255,a=e>>16&255,s=e>>8&255,l=Math.round((e&255)/255*100)/100;return[n,a,s,l]}throw new Error(`unknown hex color: ${t}`)},{round:vc}=Math,dL=(...t)=>{let[e,n,a,s]=$t(t,"rgba"),l=Io(t)||"auto";s===void 0&&(s=1),l==="auto"&&(l=s<1?"rgba":"rgb"),e=vc(e),n=vc(n),a=vc(a);let f="000000"+(e<<16|n<<8|a).toString(16);f=f.substr(f.length-6);let h="0"+vc(s*255).toString(16);switch(h=h.substr(h.length-2),l.toLowerCase()){case"rgba":return`#${f}${h}`;case"argb":return`#${h}${f}`;default:return`#${f}`}};ht.prototype.name=function(){const t=dL(this._rgb,"rgb");for(let e of Object.keys(No))if(No[e]===t)return e.toLowerCase();return t};Mt.format.named=t=>{if(t=t.toLowerCase(),No[t])return fL(No[t]);throw new Error("unknown color name: "+t)};Mt.autodetect.push({p:5,test:(t,...e)=>{if(!e.length&&qt(t)==="string"&&No[t.toLowerCase()])return"named"}});ht.prototype.alpha=function(t,e=!1){return t!==void 0&&qt(t)==="number"?e?(this._rgb[3]=t,this):new ht([this._rgb[0],this._rgb[1],this._rgb[2],t],"rgb"):this._rgb[3]};ht.prototype.clipped=function(){return this._rgb._clipped||!1};const yn={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},TZ=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Un(t){const e=TZ.get(String(t).toLowerCase());if(!e)throw new Error("unknown Lab illuminant "+t);yn.labWhitePoint=t,yn.Xn=e[0],yn.Zn=e[1]}function $u(){return yn.labWhitePoint}const IS=(...t)=>{t=$t(t,"lab");const[e,n,a]=t,[s,l,c]=wZ(e,n,a),[f,h,p]=hL(s,l,c);return[f,h,p,t.length>3?t[3]:1]},wZ=(t,e,n)=>{const{kE:a,kK:s,kKE:l,Xn:c,Yn:f,Zn:h}=yn,p=(t+16)/116,v=.002*e+p,g=p-.005*n,S=v*v*v,y=g*g*g,A=S>a?S:(116*v-16)/s,b=t>l?Math.pow((t+16)/116,3):t/s,M=y>a?y:(116*g-16)/s,$=A*c,B=b*f,_=M*h;return[$,B,_]},xb=t=>{const e=Math.sign(t);return t=Math.abs(t),(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055)*e},hL=(t,e,n)=>{const{MtxAdaptMa:a,MtxAdaptMaI:s,MtxXYZ2RGB:l,RefWhiteRGB:c,Xn:f,Yn:h,Zn:p}=yn,v=f*a.m00+h*a.m10+p*a.m20,g=f*a.m01+h*a.m11+p*a.m21,S=f*a.m02+h*a.m12+p*a.m22,y=c.X*a.m00+c.Y*a.m10+c.Z*a.m20,A=c.X*a.m01+c.Y*a.m11+c.Z*a.m21,b=c.X*a.m02+c.Y*a.m12+c.Z*a.m22,M=(t*a.m00+e*a.m10+n*a.m20)*(y/v),$=(t*a.m01+e*a.m11+n*a.m21)*(A/g),B=(t*a.m02+e*a.m12+n*a.m22)*(b/S),_=M*s.m00+$*s.m10+B*s.m20,N=M*s.m01+$*s.m11+B*s.m21,L=M*s.m02+$*s.m12+B*s.m22,k=xb(_*l.m00+N*l.m10+L*l.m20),j=xb(_*l.m01+N*l.m11+L*l.m21),H=xb(_*l.m02+N*l.m12+L*l.m22);return[k*255,j*255,H*255]},KS=(...t)=>{const[e,n,a,...s]=$t(t,"rgb"),[l,c,f]=pL(e,n,a),[h,p,v]=EZ(l,c,f);return[h,p,v,...s.length>0&&s[0]<1?[s[0]]:[]]};function EZ(t,e,n){const{Xn:a,Yn:s,Zn:l,kE:c,kK:f}=yn,h=t/a,p=e/s,v=n/l,g=h>c?Math.pow(h,1/3):(f*h+16)/116,S=p>c?Math.pow(p,1/3):(f*p+16)/116,y=v>c?Math.pow(v,1/3):(f*v+16)/116;return[116*S-16,500*(g-S),200*(S-y)]}function Mb(t){const e=Math.sign(t);return t=Math.abs(t),(t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4))*e}const pL=(t,e,n)=>{t=Mb(t/255),e=Mb(e/255),n=Mb(n/255);const{MtxRGB2XYZ:a,MtxAdaptMa:s,MtxAdaptMaI:l,Xn:c,Yn:f,Zn:h,As:p,Bs:v,Cs:g}=yn;let S=t*a.m00+e*a.m10+n*a.m20,y=t*a.m01+e*a.m11+n*a.m21,A=t*a.m02+e*a.m12+n*a.m22;const b=c*s.m00+f*s.m10+h*s.m20,M=c*s.m01+f*s.m11+h*s.m21,$=c*s.m02+f*s.m12+h*s.m22;let B=S*s.m00+y*s.m10+A*s.m20,_=S*s.m01+y*s.m11+A*s.m21,N=S*s.m02+y*s.m12+A*s.m22;return B*=b/p,_*=M/v,N*=$/g,S=B*l.m00+_*l.m10+N*l.m20,y=B*l.m01+_*l.m11+N*l.m21,A=B*l.m02+_*l.m12+N*l.m22,[S,y,A]};ht.prototype.lab=function(){return KS(this._rgb)};const AZ=(...t)=>new ht(...t,"lab");Object.assign(Nt,{lab:AZ,getLabWhitePoint:$u,setLabWhitePoint:Un});Mt.format.lab=IS;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"lab"),qt(t)==="array"&&t.length===3)return"lab"}});ht.prototype.darken=function(t=1){const e=this,n=e.lab();return n[0]-=yn.Kn*t,new ht(n,"lab").alpha(e.alpha(),!0)};ht.prototype.brighten=function(t=1){return this.darken(-t)};ht.prototype.darker=ht.prototype.darken;ht.prototype.brighter=ht.prototype.brighten;ht.prototype.get=function(t){const[e,n]=t.split("."),a=this[e]();if(n){const s=e.indexOf(n)-(e.substr(0,2)==="ok"?2:0);if(s>-1)return a[s];throw new Error(`unknown channel ${n} in mode ${e}`)}else return a};const{pow:RZ}=Math,xZ=1e-7,MZ=20;ht.prototype.luminance=function(t,e="rgb"){if(t!==void 0&&qt(t)==="number"){if(t===0)return new ht([0,0,0,this._rgb[3]],"rgb");if(t===1)return new ht([255,255,255,this._rgb[3]],"rgb");let n=this.luminance(),a=MZ;const s=(c,f)=>{const h=c.interpolate(f,.5,e),p=h.luminance();return Math.abs(t-p)<xZ||!a--?h:p>t?s(c,h):s(h,f)},l=(n>t?s(new ht([0,0,0]),this):s(this,new ht([255,255,255]))).rgb();return new ht([...l,this._rgb[3]])}return $Z(...this._rgb.slice(0,3))};const $Z=(t,e,n)=>(t=$b(t),e=$b(e),n=$b(n),.2126*t+.7152*e+.0722*n),$b=t=>(t/=255,t<=.03928?t/12.92:RZ((t+.055)/1.055,2.4)),Ke={},Bo=(t,e,n=.5,...a)=>{let s=a[0]||"lrgb";if(!Ke[s]&&!a.length&&(s=Object.keys(Ke)[0]),!Ke[s])throw new Error(`interpolation mode ${s} is not defined`);return qt(t)!=="object"&&(t=new ht(t)),qt(e)!=="object"&&(e=new ht(e)),Ke[s](t,e,n).alpha(t.alpha()+n*(e.alpha()-t.alpha()))};ht.prototype.mix=ht.prototype.interpolate=function(t,e=.5,...n){return Bo(this,t,e,...n)};ht.prototype.premultiply=function(t=!1){const e=this._rgb,n=e[3];return t?(this._rgb=[e[0]*n,e[1]*n,e[2]*n,n],this):new ht([e[0]*n,e[1]*n,e[2]*n,n],"rgb")};const{sin:OZ,cos:_Z}=Math,mL=(...t)=>{let[e,n,a]=$t(t,"lch");return isNaN(a)&&(a=0),a=a*vZ,[e,_Z(a)*n,OZ(a)*n]},ZS=(...t)=>{t=$t(t,"lch");const[e,n,a]=t,[s,l,c]=mL(e,n,a),[f,h,p]=IS(s,l,c);return[f,h,p,t.length>3?t[3]:1]},CZ=(...t)=>{const e=cL($t(t,"hcl"));return ZS(...e)},{sqrt:qZ,atan2:LZ,round:DZ}=Math,vL=(...t)=>{const[e,n,a]=$t(t,"lab"),s=qZ(n*n+a*a);let l=(LZ(a,n)*gZ+360)%360;return DZ(s*1e4)===0&&(l=Number.NaN),[e,s,l]},QS=(...t)=>{const[e,n,a,...s]=$t(t,"rgb"),[l,c,f]=KS(e,n,a),[h,p,v]=vL(l,c,f);return[h,p,v,...s.length>0&&s[0]<1?[s[0]]:[]]};ht.prototype.lch=function(){return QS(this._rgb)};ht.prototype.hcl=function(){return cL(QS(this._rgb))};const NZ=(...t)=>new ht(...t,"lch"),BZ=(...t)=>new ht(...t,"hcl");Object.assign(Nt,{lch:NZ,hcl:BZ});Mt.format.lch=ZS;Mt.format.hcl=CZ;["lch","hcl"].forEach(t=>Mt.autodetect.push({p:2,test:(...e)=>{if(e=$t(e,t),qt(e)==="array"&&e.length===3)return t}}));ht.prototype.saturate=function(t=1){const e=this,n=e.lch();return n[1]+=yn.Kn*t,n[1]<0&&(n[1]=0),new ht(n,"lch").alpha(e.alpha(),!0)};ht.prototype.desaturate=function(t=1){return this.saturate(-t)};ht.prototype.set=function(t,e,n=!1){const[a,s]=t.split("."),l=this[a]();if(s){const c=a.indexOf(s)-(a.substr(0,2)==="ok"?2:0);if(c>-1){if(qt(e)=="string")switch(e.charAt(0)){case"+":l[c]+=+e;break;case"-":l[c]+=+e;break;case"*":l[c]*=+e.substr(1);break;case"/":l[c]/=+e.substr(1);break;default:l[c]=+e}else if(qt(e)==="number")l[c]=e;else throw new Error("unsupported value for Color.set");const f=new ht(l,a);return n?(this._rgb=f._rgb,this):f}throw new Error(`unknown channel ${s} in mode ${a}`)}else return l};ht.prototype.tint=function(t=.5,...e){return Bo(this,"white",t,...e)};ht.prototype.shade=function(t=.5,...e){return Bo(this,"black",t,...e)};const jZ=(t,e,n)=>{const a=t._rgb,s=e._rgb;return new ht(a[0]+n*(s[0]-a[0]),a[1]+n*(s[1]-a[1]),a[2]+n*(s[2]-a[2]),"rgb")};Ke.rgb=jZ;const{sqrt:Ob,pow:ho}=Math,VZ=(t,e,n)=>{const[a,s,l]=t._rgb,[c,f,h]=e._rgb;return new ht(Ob(ho(a,2)*(1-n)+ho(c,2)*n),Ob(ho(s,2)*(1-n)+ho(f,2)*n),Ob(ho(l,2)*(1-n)+ho(h,2)*n),"rgb")};Ke.lrgb=VZ;const PZ=(t,e,n)=>{const a=t.lab(),s=e.lab();return new ht(a[0]+n*(s[0]-a[0]),a[1]+n*(s[1]-a[1]),a[2]+n*(s[2]-a[2]),"lab")};Ke.lab=PZ;const Ko=(t,e,n,a)=>{let s,l;a==="hsl"?(s=t.hsl(),l=e.hsl()):a==="hsv"?(s=t.hsv(),l=e.hsv()):a==="hcg"?(s=t.hcg(),l=e.hcg()):a==="hsi"?(s=t.hsi(),l=e.hsi()):a==="lch"||a==="hcl"?(a="hcl",s=t.hcl(),l=e.hcl()):a==="oklch"&&(s=t.oklch().reverse(),l=e.oklch().reverse());let c,f,h,p,v,g;(a.substr(0,1)==="h"||a==="oklch")&&([c,h,v]=s,[f,p,g]=l);let S,y,A,b;return!isNaN(c)&&!isNaN(f)?(f>c&&f-c>180?b=f-(c+360):f<c&&c-f>180?b=f+360-c:b=f-c,y=c+n*b):isNaN(c)?isNaN(f)?y=Number.NaN:(y=f,(v==1||v==0)&&a!="hsv"&&(S=p)):(y=c,(g==1||g==0)&&a!="hsv"&&(S=h)),S===void 0&&(S=h+n*(p-h)),A=v+n*(g-v),a==="oklch"?new ht([A,S,y],a):new ht([y,S,A],a)},gL=(t,e,n)=>Ko(t,e,n,"lch");Ke.lch=gL;Ke.hcl=gL;const zZ=t=>{if(qt(t)=="number"&&t>=0&&t<=16777215){const e=t>>16,n=t>>8&255,a=t&255;return[e,n,a,1]}throw new Error("unknown num color: "+t)},UZ=(...t)=>{const[e,n,a]=$t(t,"rgb");return(e<<16)+(n<<8)+a};ht.prototype.num=function(){return UZ(this._rgb)};const kZ=(...t)=>new ht(...t,"num");Object.assign(Nt,{num:kZ});Mt.format.num=zZ;Mt.autodetect.push({p:5,test:(...t)=>{if(t.length===1&&qt(t[0])==="number"&&t[0]>=0&&t[0]<=16777215)return"num"}});const GZ=(t,e,n)=>{const a=t.num(),s=e.num();return new ht(a+n*(s-a),"num")};Ke.num=GZ;const{floor:HZ}=Math,YZ=(...t)=>{t=$t(t,"hcg");let[e,n,a]=t,s,l,c;a=a*255;const f=n*255;if(n===0)s=l=c=a;else{e===360&&(e=0),e>360&&(e-=360),e<0&&(e+=360),e/=60;const h=HZ(e),p=e-h,v=a*(1-n),g=v+f*(1-p),S=v+f*p,y=v+f;switch(h){case 0:[s,l,c]=[y,S,v];break;case 1:[s,l,c]=[g,y,v];break;case 2:[s,l,c]=[v,y,S];break;case 3:[s,l,c]=[v,g,y];break;case 4:[s,l,c]=[S,v,y];break;case 5:[s,l,c]=[y,v,g];break}}return[s,l,c,t.length>3?t[3]:1]},FZ=(...t)=>{const[e,n,a]=$t(t,"rgb"),s=uL(e,n,a),l=lL(e,n,a),c=l-s,f=c*100/255,h=s/(255-c)*100;let p;return c===0?p=Number.NaN:(e===l&&(p=(n-a)/c),n===l&&(p=2+(a-e)/c),a===l&&(p=4+(e-n)/c),p*=60,p<0&&(p+=360)),[p,f,h]};ht.prototype.hcg=function(){return FZ(this._rgb)};const XZ=(...t)=>new ht(...t,"hcg");Nt.hcg=XZ;Mt.format.hcg=YZ;Mt.autodetect.push({p:1,test:(...t)=>{if(t=$t(t,"hcg"),qt(t)==="array"&&t.length===3)return"hcg"}});const IZ=(t,e,n)=>Ko(t,e,n,"hcg");Ke.hcg=IZ;const{cos:po}=Math,KZ=(...t)=>{t=$t(t,"hsi");let[e,n,a]=t,s,l,c;return isNaN(e)&&(e=0),isNaN(n)&&(n=0),e>360&&(e-=360),e<0&&(e+=360),e/=360,e<1/3?(c=(1-n)/3,s=(1+n*po(zn*e)/po(Rb-zn*e))/3,l=1-(c+s)):e<2/3?(e-=1/3,s=(1-n)/3,l=(1+n*po(zn*e)/po(Rb-zn*e))/3,c=1-(s+l)):(e-=2/3,l=(1-n)/3,c=(1+n*po(zn*e)/po(Rb-zn*e))/3,s=1-(l+c)),s=fa(a*s*3),l=fa(a*l*3),c=fa(a*c*3),[s*255,l*255,c*255,t.length>3?t[3]:1]},{min:ZZ,sqrt:QZ,acos:WZ}=Math,JZ=(...t)=>{let[e,n,a]=$t(t,"rgb");e/=255,n/=255,a/=255;let s;const l=ZZ(e,n,a),c=(e+n+a)/3,f=c>0?1-l/c:0;return f===0?s=NaN:(s=(e-n+(e-a))/2,s/=QZ((e-n)*(e-n)+(e-a)*(n-a)),s=WZ(s),a>n&&(s=zn-s),s/=zn),[s*360,f,c]};ht.prototype.hsi=function(){return JZ(this._rgb)};const tQ=(...t)=>new ht(...t,"hsi");Nt.hsi=tQ;Mt.format.hsi=KZ;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"hsi"),qt(t)==="array"&&t.length===3)return"hsi"}});const eQ=(t,e,n)=>Ko(t,e,n,"hsi");Ke.hsi=eQ;const w2=(...t)=>{t=$t(t,"hsl");const[e,n,a]=t;let s,l,c;if(n===0)s=l=c=a*255;else{const f=[0,0,0],h=[0,0,0],p=a<.5?a*(1+n):a+n-a*n,v=2*a-p,g=e/360;f[0]=g+1/3,f[1]=g,f[2]=g-1/3;for(let S=0;S<3;S++)f[S]<0&&(f[S]+=1),f[S]>1&&(f[S]-=1),6*f[S]<1?h[S]=v+(p-v)*6*f[S]:2*f[S]<1?h[S]=p:3*f[S]<2?h[S]=v+(p-v)*(2/3-f[S])*6:h[S]=v;[s,l,c]=[h[0]*255,h[1]*255,h[2]*255]}return t.length>3?[s,l,c,t[3]]:[s,l,c,1]},yL=(...t)=>{t=$t(t,"rgba");let[e,n,a]=t;e/=255,n/=255,a/=255;const s=uL(e,n,a),l=lL(e,n,a),c=(l+s)/2;let f,h;return l===s?(f=0,h=Number.NaN):f=c<.5?(l-s)/(l+s):(l-s)/(2-l-s),e==l?h=(n-a)/(l-s):n==l?h=2+(a-e)/(l-s):a==l&&(h=4+(e-n)/(l-s)),h*=60,h<0&&(h+=360),t.length>3&&t[3]!==void 0?[h,f,c,t[3]]:[h,f,c]};ht.prototype.hsl=function(){return yL(this._rgb)};const rQ=(...t)=>new ht(...t,"hsl");Nt.hsl=rQ;Mt.format.hsl=w2;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"hsl"),qt(t)==="array"&&t.length===3)return"hsl"}});const nQ=(t,e,n)=>Ko(t,e,n,"hsl");Ke.hsl=nQ;const{floor:iQ}=Math,aQ=(...t)=>{t=$t(t,"hsv");let[e,n,a]=t,s,l,c;if(a*=255,n===0)s=l=c=a;else{e===360&&(e=0),e>360&&(e-=360),e<0&&(e+=360),e/=60;const f=iQ(e),h=e-f,p=a*(1-n),v=a*(1-n*h),g=a*(1-n*(1-h));switch(f){case 0:[s,l,c]=[a,g,p];break;case 1:[s,l,c]=[v,a,p];break;case 2:[s,l,c]=[p,a,g];break;case 3:[s,l,c]=[p,v,a];break;case 4:[s,l,c]=[g,p,a];break;case 5:[s,l,c]=[a,p,v];break}}return[s,l,c,t.length>3?t[3]:1]},{min:oQ,max:sQ}=Math,uQ=(...t)=>{t=$t(t,"rgb");let[e,n,a]=t;const s=oQ(e,n,a),l=sQ(e,n,a),c=l-s;let f,h,p;return p=l/255,l===0?(f=Number.NaN,h=0):(h=c/l,e===l&&(f=(n-a)/c),n===l&&(f=2+(a-e)/c),a===l&&(f=4+(e-n)/c),f*=60,f<0&&(f+=360)),[f,h,p]};ht.prototype.hsv=function(){return uQ(this._rgb)};const lQ=(...t)=>new ht(...t,"hsv");Nt.hsv=lQ;Mt.format.hsv=aQ;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"hsv"),qt(t)==="array"&&t.length===3)return"hsv"}});const cQ=(t,e,n)=>Ko(t,e,n,"hsv");Ke.hsv=cQ;function Uc(t,e){let n=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(c=>[c]));let a=e[0].length,s=e[0].map((c,f)=>e.map(h=>h[f])),l=t.map(c=>s.map(f=>Array.isArray(c)?c.reduce((h,p,v)=>h+p*(f[v]||0),0):f.reduce((h,p)=>h+p*c,0)));return n===1&&(l=l[0]),a===1?l.map(c=>c[0]):l}const WS=(...t)=>{t=$t(t,"lab");const[e,n,a,...s]=t,[l,c,f]=fQ([e,n,a]),[h,p,v]=hL(l,c,f);return[h,p,v,...s.length>0&&s[0]<1?[s[0]]:[]]};function fQ(t){var e=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],n=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],a=Uc(n,t);return Uc(e,a.map(s=>s**3))}const JS=(...t)=>{const[e,n,a,...s]=$t(t,"rgb"),l=pL(e,n,a);return[...dQ(l),...s.length>0&&s[0]<1?[s[0]]:[]]};function dQ(t){const e=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],n=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],a=Uc(e,t);return Uc(n,a.map(s=>Math.cbrt(s)))}ht.prototype.oklab=function(){return JS(this._rgb)};const hQ=(...t)=>new ht(...t,"oklab");Object.assign(Nt,{oklab:hQ});Mt.format.oklab=WS;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"oklab"),qt(t)==="array"&&t.length===3)return"oklab"}});const pQ=(t,e,n)=>{const a=t.oklab(),s=e.oklab();return new ht(a[0]+n*(s[0]-a[0]),a[1]+n*(s[1]-a[1]),a[2]+n*(s[2]-a[2]),"oklab")};Ke.oklab=pQ;const mQ=(t,e,n)=>Ko(t,e,n,"oklch");Ke.oklch=mQ;const{pow:_b,sqrt:Cb,PI:qb,cos:m_,sin:v_,atan2:vQ}=Math,gQ=(t,e="lrgb",n=null)=>{const a=t.length;n||(n=Array.from(new Array(a)).map(()=>1));const s=a/n.reduce(function(g,S){return g+S});if(n.forEach((g,S)=>{n[S]*=s}),t=t.map(g=>new ht(g)),e==="lrgb")return yQ(t,n);const l=t.shift(),c=l.get(e),f=[];let h=0,p=0;for(let g=0;g<c.length;g++)if(c[g]=(c[g]||0)*n[0],f.push(isNaN(c[g])?0:n[0]),e.charAt(g)==="h"&&!isNaN(c[g])){const S=c[g]/180*qb;h+=m_(S)*n[0],p+=v_(S)*n[0]}let v=l.alpha()*n[0];t.forEach((g,S)=>{const y=g.get(e);v+=g.alpha()*n[S+1];for(let A=0;A<c.length;A++)if(!isNaN(y[A]))if(f[A]+=n[S+1],e.charAt(A)==="h"){const b=y[A]/180*qb;h+=m_(b)*n[S+1],p+=v_(b)*n[S+1]}else c[A]+=y[A]*n[S+1]});for(let g=0;g<c.length;g++)if(e.charAt(g)==="h"){let S=vQ(p/f[g],h/f[g])/qb*180;for(;S<0;)S+=360;for(;S>=360;)S-=360;c[g]=S}else c[g]=c[g]/f[g];return v/=a,new ht(c,e).alpha(v>.99999?1:v,!0)},yQ=(t,e)=>{const n=t.length,a=[0,0,0,0];for(let s=0;s<t.length;s++){const l=t[s],c=e[s]/n,f=l._rgb;a[0]+=_b(f[0],2)*c,a[1]+=_b(f[1],2)*c,a[2]+=_b(f[2],2)*c,a[3]+=f[3]*c}return a[0]=Cb(a[0]),a[1]=Cb(a[1]),a[2]=Cb(a[2]),a[3]>.9999999&&(a[3]=1),new ht(XS(a))},{pow:bQ}=Math;function kc(t){let e="rgb",n=Nt("#ccc"),a=0,s=[0,1],l=[],c=[0,0],f=!1,h=[],p=!1,v=0,g=1,S=!1,y={},A=!0,b=1;const M=function(j){if(j=j||["#fff","#000"],j&&qt(j)==="string"&&Nt.brewer&&Nt.brewer[j.toLowerCase()]&&(j=Nt.brewer[j.toLowerCase()]),qt(j)==="array"){j.length===1&&(j=[j[0],j[0]]),j=j.slice(0);for(let H=0;H<j.length;H++)j[H]=Nt(j[H]);l.length=0;for(let H=0;H<j.length;H++)l.push(H/(j.length-1))}return L(),h=j},$=function(j){if(f!=null){const H=f.length-1;let rt=0;for(;rt<H&&j>=f[rt];)rt++;return rt-1}return 0};let B=j=>j,_=j=>j;const N=function(j,H){let rt,R;if(H==null&&(H=!1),isNaN(j)||j===null)return n;H?R=j:f&&f.length>2?R=$(j)/(f.length-2):g!==v?R=(j-v)/(g-v):R=1,R=_(R),H||(R=B(R)),b!==1&&(R=bQ(R,b)),R=c[0]+R*(1-c[0]-c[1]),R=fa(R,0,1);const Y=Math.floor(R*1e4);if(A&&y[Y])rt=y[Y];else{if(qt(h)==="array")for(let et=0;et<l.length;et++){const ct=l[et];if(R<=ct){rt=h[et];break}if(R>=ct&&et===l.length-1){rt=h[et];break}if(R>ct&&R<l[et+1]){R=(R-ct)/(l[et+1]-ct),rt=Nt.interpolate(h[et],h[et+1],R,e);break}}else qt(h)==="function"&&(rt=h(R));A&&(y[Y]=rt)}return rt};var L=()=>y={};M(t);const k=function(j){const H=Nt(N(j));return p&&H[p]?H[p]():H};return k.classes=function(j){if(j!=null){if(qt(j)==="array")f=j,s=[j[0],j[j.length-1]];else{const H=Nt.analyze(s);j===0?f=[H.min,H.max]:f=Nt.limits(H,"e",j)}return k}return f},k.domain=function(j){if(!arguments.length)return s;v=j[0],g=j[j.length-1],l=[];const H=h.length;if(j.length===H&&v!==g)for(let rt of Array.from(j))l.push((rt-v)/(g-v));else{for(let rt=0;rt<H;rt++)l.push(rt/(H-1));if(j.length>2){const rt=j.map((Y,et)=>et/(j.length-1)),R=j.map(Y=>(Y-v)/(g-v));R.every((Y,et)=>rt[et]===Y)||(_=Y=>{if(Y<=0||Y>=1)return Y;let et=0;for(;Y>=R[et+1];)et++;const ct=(Y-R[et])/(R[et+1]-R[et]);return rt[et]+ct*(rt[et+1]-rt[et])})}}return s=[v,g],k},k.mode=function(j){return arguments.length?(e=j,L(),k):e},k.range=function(j,H){return M(j),k},k.out=function(j){return p=j,k},k.spread=function(j){return arguments.length?(a=j,k):a},k.correctLightness=function(j){return j==null&&(j=!0),S=j,L(),S?B=function(H){const rt=N(0,!0).lab()[0],R=N(1,!0).lab()[0],Y=rt>R;let et=N(H,!0).lab()[0];const ct=rt+(R-rt)*H;let ft=et-ct,dt=0,P=1,tt=20;for(;Math.abs(ft)>.01&&tt-- >0;)(function(){return Y&&(ft*=-1),ft<0?(dt=H,H+=(P-H)*.5):(P=H,H+=(dt-H)*.5),et=N(H,!0).lab()[0],ft=et-ct})();return H}:B=H=>H,k},k.padding=function(j){return j!=null?(qt(j)==="number"&&(j=[j,j]),c=j,k):c},k.colors=function(j,H){arguments.length<2&&(H="hex");let rt=[];if(arguments.length===0)rt=h.slice(0);else if(j===1)rt=[k(.5)];else if(j>1){const R=s[0],Y=s[1]-R;rt=SQ(0,j).map(et=>k(R+et/(j-1)*Y))}else{t=[];let R=[];if(f&&f.length>2)for(let Y=1,et=f.length,ct=1<=et;ct?Y<et:Y>et;ct?Y++:Y--)R.push((f[Y-1]+f[Y])*.5);else R=s;rt=R.map(Y=>k(Y))}return Nt[H]&&(rt=rt.map(R=>R[H]())),rt},k.cache=function(j){return j!=null?(A=j,k):A},k.gamma=function(j){return j!=null?(b=j,k):b},k.nodata=function(j){return j!=null?(n=Nt(j),k):n},k}function SQ(t,e,n){let a=[],s=t<e,l=e;for(let c=t;s?c<l:c>l;s?c++:c--)a.push(c);return a}const TQ=function(t){let e=[1,1];for(let n=1;n<t;n++){let a=[1];for(let s=1;s<=e.length;s++)a[s]=(e[s]||0)+e[s-1];e=a}return e},wQ=function(t){let e,n,a,s;if(t=t.map(l=>new ht(l)),t.length===2)[n,a]=t.map(l=>l.lab()),e=function(l){const c=[0,1,2].map(f=>n[f]+l*(a[f]-n[f]));return new ht(c,"lab")};else if(t.length===3)[n,a,s]=t.map(l=>l.lab()),e=function(l){const c=[0,1,2].map(f=>(1-l)*(1-l)*n[f]+2*(1-l)*l*a[f]+l*l*s[f]);return new ht(c,"lab")};else if(t.length===4){let l;[n,a,s,l]=t.map(c=>c.lab()),e=function(c){const f=[0,1,2].map(h=>(1-c)*(1-c)*(1-c)*n[h]+3*(1-c)*(1-c)*c*a[h]+3*(1-c)*c*c*s[h]+c*c*c*l[h]);return new ht(f,"lab")}}else if(t.length>=5){let l,c,f;l=t.map(h=>h.lab()),f=t.length-1,c=TQ(f),e=function(h){const p=1-h,v=[0,1,2].map(g=>l.reduce((S,y,A)=>S+c[A]*p**(f-A)*h**A*y[g],0));return new ht(v,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return e},EQ=t=>{const e=wQ(t);return e.scale=()=>kc(e),e},{round:bL}=Math;ht.prototype.rgb=function(t=!0){return t===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(bL)};ht.prototype.rgba=function(t=!0){return this._rgb.slice(0,4).map((e,n)=>n<3?t===!1?e:bL(e):e)};const AQ=(...t)=>new ht(...t,"rgb");Object.assign(Nt,{rgb:AQ});Mt.format.rgb=(...t)=>{const e=$t(t,"rgba");return e[3]===void 0&&(e[3]=1),e};Mt.autodetect.push({p:3,test:(...t)=>{if(t=$t(t,"rgba"),qt(t)==="array"&&(t.length===3||t.length===4&&qt(t[3])=="number"&&t[3]>=0&&t[3]<=1))return"rgb"}});const tn=(t,e,n)=>{if(!tn[n])throw new Error("unknown blend mode "+n);return tn[n](t,e)},Di=t=>(e,n)=>{const a=Nt(n).rgb(),s=Nt(e).rgb();return Nt.rgb(t(a,s))},Ni=t=>(e,n)=>{const a=[];return a[0]=t(e[0],n[0]),a[1]=t(e[1],n[1]),a[2]=t(e[2],n[2]),a},RQ=t=>t,xQ=(t,e)=>t*e/255,MQ=(t,e)=>t>e?e:t,$Q=(t,e)=>t>e?t:e,OQ=(t,e)=>255*(1-(1-t/255)*(1-e/255)),_Q=(t,e)=>e<128?2*t*e/255:255*(1-2*(1-t/255)*(1-e/255)),CQ=(t,e)=>255*(1-(1-e/255)/(t/255)),qQ=(t,e)=>t===255?255:(t=255*(e/255)/(1-t/255),t>255?255:t);tn.normal=Di(Ni(RQ));tn.multiply=Di(Ni(xQ));tn.screen=Di(Ni(OQ));tn.overlay=Di(Ni(_Q));tn.darken=Di(Ni(MQ));tn.lighten=Di(Ni($Q));tn.dodge=Di(Ni(qQ));tn.burn=Di(Ni(CQ));const{pow:LQ,sin:DQ,cos:NQ}=Math;function BQ(t=300,e=-1.5,n=1,a=1,s=[0,1]){let l=0,c;qt(s)==="array"?c=s[1]-s[0]:(c=0,s=[s,s]);const f=function(h){const p=zn*((t+120)/360+e*h),v=LQ(s[0]+c*h,a),S=(l!==0?n[0]+h*l:n)*v*(1-v)/2,y=NQ(p),A=DQ(p),b=v+S*(-.14861*y+1.78277*A),M=v+S*(-.29227*y-.90649*A),$=v+S*(1.97294*y);return Nt(XS([b*255,M*255,$*255,1]))};return f.start=function(h){return h==null?t:(t=h,f)},f.rotations=function(h){return h==null?e:(e=h,f)},f.gamma=function(h){return h==null?a:(a=h,f)},f.hue=function(h){return h==null?n:(n=h,qt(n)==="array"?(l=n[1]-n[0],l===0&&(n=n[1])):l=0,f)},f.lightness=function(h){return h==null?s:(qt(h)==="array"?(s=h,c=h[1]-h[0]):(s=[h,h],c=0),f)},f.scale=()=>Nt.scale(f),f.hue(n),f}const jQ="0123456789abcdef",{floor:VQ,random:PQ}=Math,zQ=()=>{let t="#";for(let e=0;e<6;e++)t+=jQ.charAt(VQ(PQ()*16));return new ht(t,"hex")},{log:g_,pow:UQ,floor:kQ,abs:GQ}=Math;function SL(t,e=null){const n={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return qt(t)==="object"&&(t=Object.values(t)),t.forEach(a=>{e&&qt(a)==="object"&&(a=a[e]),a!=null&&!isNaN(a)&&(n.values.push(a),n.sum+=a,a<n.min&&(n.min=a),a>n.max&&(n.max=a),n.count+=1)}),n.domain=[n.min,n.max],n.limits=(a,s)=>TL(n,a,s),n}function TL(t,e="equal",n=7){qt(t)=="array"&&(t=SL(t));const{min:a,max:s}=t,l=t.values.sort((f,h)=>f-h);if(n===1)return[a,s];const c=[];if(e.substr(0,1)==="c"&&(c.push(a),c.push(s)),e.substr(0,1)==="e"){c.push(a);for(let f=1;f<n;f++)c.push(a+f/n*(s-a));c.push(s)}else if(e.substr(0,1)==="l"){if(a<=0)throw new Error("Logarithmic scales are only possible for values > 0");const f=Math.LOG10E*g_(a),h=Math.LOG10E*g_(s);c.push(a);for(let p=1;p<n;p++)c.push(UQ(10,f+p/n*(h-f)));c.push(s)}else if(e.substr(0,1)==="q"){c.push(a);for(let f=1;f<n;f++){const h=(l.length-1)*f/n,p=kQ(h);if(p===h)c.push(l[p]);else{const v=h-p;c.push(l[p]*(1-v)+l[p+1]*v)}}c.push(s)}else if(e.substr(0,1)==="k"){let f;const h=l.length,p=new Array(h),v=new Array(n);let g=!0,S=0,y=null;y=[],y.push(a);for(let M=1;M<n;M++)y.push(a+M/n*(s-a));for(y.push(s);g;){for(let $=0;$<n;$++)v[$]=0;for(let $=0;$<h;$++){const B=l[$];let _=Number.MAX_VALUE,N;for(let L=0;L<n;L++){const k=GQ(y[L]-B);k<_&&(_=k,N=L),v[N]++,p[$]=N}}const M=new Array(n);for(let $=0;$<n;$++)M[$]=null;for(let $=0;$<h;$++)f=p[$],M[f]===null?M[f]=l[$]:M[f]+=l[$];for(let $=0;$<n;$++)M[$]*=1/v[$];g=!1;for(let $=0;$<n;$++)if(M[$]!==y[$]){g=!0;break}y=M,S++,S>200&&(g=!1)}const A={};for(let M=0;M<n;M++)A[M]=[];for(let M=0;M<h;M++)f=p[M],A[f].push(l[M]);let b=[];for(let M=0;M<n;M++)b.push(A[M][0]),b.push(A[M][A[M].length-1]);b=b.sort((M,$)=>M-$),c.push(b[0]);for(let M=1;M<b.length;M+=2){const $=b[M];!isNaN($)&&c.indexOf($)===-1&&c.push($)}}return c}const HQ=(t,e)=>{t=new ht(t),e=new ht(e);const n=t.luminance(),a=e.luminance();return n>a?(n+.05)/(a+.05):(a+.05)/(n+.05)};/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */const y_=.027,YQ=5e-4,FQ=.1,b_=1.14,gc=.022,S_=1.414,XQ=(t,e)=>{t=new ht(t),e=new ht(e),t.alpha()<1&&(t=Bo(e,t,t.alpha(),"rgb"));const n=T_(...t.rgb()),a=T_(...e.rgb()),s=n>=gc?n:n+Math.pow(gc-n,S_),l=a>=gc?a:a+Math.pow(gc-a,S_),c=Math.pow(l,.56)-Math.pow(s,.57),f=Math.pow(l,.65)-Math.pow(s,.62),h=Math.abs(l-s)<YQ?0:s<l?c*b_:f*b_;return(Math.abs(h)<FQ?0:h>0?h-y_:h+y_)*100};function T_(t,e,n){return .2126729*Math.pow(t/255,2.4)+.7151522*Math.pow(e/255,2.4)+.072175*Math.pow(n/255,2.4)}const{sqrt:Pn,pow:Ae,min:IQ,max:KQ,atan2:w_,abs:E_,cos:yc,sin:A_,exp:ZQ,PI:R_}=Math;function QQ(t,e,n=1,a=1,s=1){var l=function(x){return 360*x/(2*R_)},c=function(x){return 2*R_*x/360};t=new ht(t),e=new ht(e);const[f,h,p]=Array.from(t.lab()),[v,g,S]=Array.from(e.lab()),y=(f+v)/2,A=Pn(Ae(h,2)+Ae(p,2)),b=Pn(Ae(g,2)+Ae(S,2)),M=(A+b)/2,$=.5*(1-Pn(Ae(M,7)/(Ae(M,7)+Ae(25,7)))),B=h*(1+$),_=g*(1+$),N=Pn(Ae(B,2)+Ae(p,2)),L=Pn(Ae(_,2)+Ae(S,2)),k=(N+L)/2,j=l(w_(p,B)),H=l(w_(S,_)),rt=j>=0?j:j+360,R=H>=0?H:H+360,Y=E_(rt-R)>180?(rt+R+360)/2:(rt+R)/2,et=1-.17*yc(c(Y-30))+.24*yc(c(2*Y))+.32*yc(c(3*Y+6))-.2*yc(c(4*Y-63));let ct=R-rt;ct=E_(ct)<=180?ct:R<=rt?ct+360:ct-360,ct=2*Pn(N*L)*A_(c(ct)/2);const ft=v-f,dt=L-N,P=1+.015*Ae(y-50,2)/Pn(20+Ae(y-50,2)),tt=1+.045*k,ot=1+.015*k*et,Q=30*ZQ(-Ae((Y-275)/25,2)),T=-(2*Pn(Ae(k,7)/(Ae(k,7)+Ae(25,7))))*A_(2*c(Q)),w=Pn(Ae(ft/(n*P),2)+Ae(dt/(a*tt),2)+Ae(ct/(s*ot),2)+T*(dt/(a*tt))*(ct/(s*ot)));return KQ(0,IQ(100,w))}function WQ(t,e,n="lab"){t=new ht(t),e=new ht(e);const a=t.get(n),s=e.get(n);let l=0;for(let c in a){const f=(a[c]||0)-(s[c]||0);l+=f*f}return Math.sqrt(l)}const JQ=(...t)=>{try{return new ht(...t),!0}catch{return!1}},tW={cool(){return kc([Nt.hsl(180,1,.9),Nt.hsl(250,.7,.4)])},hot(){return kc(["#000","#f00","#ff0","#fff"]).mode("rgb")}},E2={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},wL=Object.keys(E2),x_=new Map(wL.map(t=>[t.toLowerCase(),t])),eW=typeof Proxy=="function"?new Proxy(E2,{get(t,e){const n=e.toLowerCase();if(x_.has(n))return t[x_.get(n)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(wL)}}):E2,rW=(...t)=>{t=$t(t,"cmyk");const[e,n,a,s]=t,l=t.length>4?t[4]:1;return s===1?[0,0,0,l]:[e>=1?0:255*(1-e)*(1-s),n>=1?0:255*(1-n)*(1-s),a>=1?0:255*(1-a)*(1-s),l]},{max:M_}=Math,nW=(...t)=>{let[e,n,a]=$t(t,"rgb");e=e/255,n=n/255,a=a/255;const s=1-M_(e,M_(n,a)),l=s<1?1/(1-s):0,c=(1-e-s)*l,f=(1-n-s)*l,h=(1-a-s)*l;return[c,f,h,s]};ht.prototype.cmyk=function(){return nW(this._rgb)};const iW=(...t)=>new ht(...t,"cmyk");Object.assign(Nt,{cmyk:iW});Mt.format.cmyk=rW;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"cmyk"),qt(t)==="array"&&t.length===4)return"cmyk"}});const aW=(...t)=>{const e=$t(t,"hsla");let n=Io(t)||"lsa";return e[0]=Pr(e[0]||0)+"deg",e[1]=Pr(e[1]*100)+"%",e[2]=Pr(e[2]*100)+"%",n==="hsla"||e.length>3&&e[3]<1?(e[3]="/ "+(e.length>3?e[3]:1),n="hsla"):e.length=3,`${n.substr(0,3)}(${e.join(" ")})`},oW=(...t)=>{const e=$t(t,"lab");let n=Io(t)||"lab";return e[0]=Pr(e[0])+"%",e[1]=Pr(e[1]),e[2]=Pr(e[2]),n==="laba"||e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`lab(${e.join(" ")})`},sW=(...t)=>{const e=$t(t,"lch");let n=Io(t)||"lab";return e[0]=Pr(e[0])+"%",e[1]=Pr(e[1]),e[2]=isNaN(e[2])?"none":Pr(e[2])+"deg",n==="lcha"||e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`lch(${e.join(" ")})`},uW=(...t)=>{const e=$t(t,"lab");return e[0]=Pr(e[0]*100)+"%",e[1]=T2(e[1]),e[2]=T2(e[2]),e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`oklab(${e.join(" ")})`},EL=(...t)=>{const[e,n,a,...s]=$t(t,"rgb"),[l,c,f]=JS(e,n,a),[h,p,v]=vL(l,c,f);return[h,p,v,...s.length>0&&s[0]<1?[s[0]]:[]]},lW=(...t)=>{const e=$t(t,"lch");return e[0]=Pr(e[0]*100)+"%",e[1]=T2(e[1]),e[2]=isNaN(e[2])?"none":Pr(e[2])+"deg",e.length>3&&e[3]<1?e[3]="/ "+(e.length>3?e[3]:1):e.length=3,`oklch(${e.join(" ")})`},{round:Lb}=Math,cW=(...t)=>{const e=$t(t,"rgba");let n=Io(t)||"rgb";if(n.substr(0,3)==="hsl")return aW(yL(e),n);if(n.substr(0,3)==="lab"){const a=$u();Un("d50");const s=oW(KS(e),n);return Un(a),s}if(n.substr(0,3)==="lch"){const a=$u();Un("d50");const s=sW(QS(e),n);return Un(a),s}return n.substr(0,5)==="oklab"?uW(JS(e)):n.substr(0,5)==="oklch"?lW(EL(e)):(e[0]=Lb(e[0]),e[1]=Lb(e[1]),e[2]=Lb(e[2]),(n==="rgba"||e.length>3&&e[3]<1)&&(e[3]="/ "+(e.length>3?e[3]:1),n="rgba"),`${n.substr(0,3)}(${e.slice(0,n==="rgb"?3:4).join(" ")})`)},AL=(...t)=>{t=$t(t,"lch");const[e,n,a,...s]=t,[l,c,f]=mL(e,n,a),[h,p,v]=WS(l,c,f);return[h,p,v,...s.length>0&&s[0]<1?[s[0]]:[]]},Gn=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Jr=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,Gc=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,Gr=/\s*/.source,Zo=/\s+/.source,tT=/\s*,\s*/.source,_f=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,Qo=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,RL=new RegExp("^rgba?\\("+Gr+[Gn,Gn,Gn].join(Zo)+Qo+"\\)$"),xL=new RegExp("^rgb\\("+Gr+[Gn,Gn,Gn].join(tT)+Gr+"\\)$"),ML=new RegExp("^rgba\\("+Gr+[Gn,Gn,Gn,Jr].join(tT)+Gr+"\\)$"),$L=new RegExp("^hsla?\\("+Gr+[_f,Gc,Gc].join(Zo)+Qo+"\\)$"),OL=new RegExp("^hsl?\\("+Gr+[_f,Gc,Gc].join(tT)+Gr+"\\)$"),_L=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,CL=new RegExp("^lab\\("+Gr+[Jr,Jr,Jr].join(Zo)+Qo+"\\)$"),qL=new RegExp("^lch\\("+Gr+[Jr,Jr,_f].join(Zo)+Qo+"\\)$"),LL=new RegExp("^oklab\\("+Gr+[Jr,Jr,Jr].join(Zo)+Qo+"\\)$"),DL=new RegExp("^oklch\\("+Gr+[Jr,Jr,_f].join(Zo)+Qo+"\\)$"),{round:NL}=Math,mo=t=>t.map((e,n)=>n<=2?fa(NL(e),0,255):e),Re=(t,e=0,n=100,a=!1)=>(typeof t=="string"&&t.endsWith("%")&&(t=parseFloat(t.substring(0,t.length-1))/100,a?t=e+(t+1)*.5*(n-e):t=e+t*(n-e)),+t),We=(t,e)=>t==="none"?e:t,eT=t=>{if(t=t.toLowerCase().trim(),t==="transparent")return[0,0,0,0];let e;if(Mt.format.named)try{return Mt.format.named(t)}catch{}if((e=t.match(RL))||(e=t.match(xL))){let n=e.slice(1,4);for(let s=0;s<3;s++)n[s]=+Re(We(n[s],0),0,255);n=mo(n);const a=e[4]!==void 0?+Re(e[4],0,1):1;return n[3]=a,n}if(e=t.match(ML)){const n=e.slice(1,5);for(let a=0;a<4;a++)n[a]=+Re(n[a],0,255);return n}if((e=t.match($L))||(e=t.match(OL))){const n=e.slice(1,4);n[0]=+We(n[0].replace("deg",""),0),n[1]=+Re(We(n[1],0),0,100)*.01,n[2]=+Re(We(n[2],0),0,100)*.01;const a=mo(w2(n)),s=e[4]!==void 0?+Re(e[4],0,1):1;return a[3]=s,a}if(e=t.match(_L)){const n=e.slice(1,4);n[1]*=.01,n[2]*=.01;const a=w2(n);for(let s=0;s<3;s++)a[s]=NL(a[s]);return a[3]=+e[4],a}if(e=t.match(CL)){const n=e.slice(1,4);n[0]=Re(We(n[0],0),0,100),n[1]=Re(We(n[1],0),-125,125,!0),n[2]=Re(We(n[2],0),-125,125,!0);const a=$u();Un("d50");const s=mo(IS(n));Un(a);const l=e[4]!==void 0?+Re(e[4],0,1):1;return s[3]=l,s}if(e=t.match(qL)){const n=e.slice(1,4);n[0]=Re(n[0],0,100),n[1]=Re(We(n[1],0),0,150,!1),n[2]=+We(n[2].replace("deg",""),0);const a=$u();Un("d50");const s=mo(ZS(n));Un(a);const l=e[4]!==void 0?+Re(e[4],0,1):1;return s[3]=l,s}if(e=t.match(LL)){const n=e.slice(1,4);n[0]=Re(We(n[0],0),0,1),n[1]=Re(We(n[1],0),-.4,.4,!0),n[2]=Re(We(n[2],0),-.4,.4,!0);const a=mo(WS(n)),s=e[4]!==void 0?+Re(e[4],0,1):1;return a[3]=s,a}if(e=t.match(DL)){const n=e.slice(1,4);n[0]=Re(We(n[0],0),0,1),n[1]=Re(We(n[1],0),0,.4,!1),n[2]=+We(n[2].replace("deg",""),0);const a=mo(AL(n)),s=e[4]!==void 0?+Re(e[4],0,1):1;return a[3]=s,a}};eT.test=t=>RL.test(t)||$L.test(t)||CL.test(t)||qL.test(t)||LL.test(t)||DL.test(t)||xL.test(t)||ML.test(t)||OL.test(t)||_L.test(t)||t==="transparent";ht.prototype.css=function(t){return cW(this._rgb,t)};const fW=(...t)=>new ht(...t,"css");Nt.css=fW;Mt.format.css=eT;Mt.autodetect.push({p:5,test:(t,...e)=>{if(!e.length&&qt(t)==="string"&&eT.test(t))return"css"}});Mt.format.gl=(...t)=>{const e=$t(t,"rgba");return e[0]*=255,e[1]*=255,e[2]*=255,e};const dW=(...t)=>new ht(...t,"gl");Nt.gl=dW;ht.prototype.gl=function(){const t=this._rgb;return[t[0]/255,t[1]/255,t[2]/255,t[3]]};ht.prototype.hex=function(t){return dL(this._rgb,t)};const hW=(...t)=>new ht(...t,"hex");Nt.hex=hW;Mt.format.hex=fL;Mt.autodetect.push({p:4,test:(t,...e)=>{if(!e.length&&qt(t)==="string"&&[3,4,5,6,7,8,9].indexOf(t.length)>=0)return"hex"}});const{log:bc}=Math,BL=t=>{const e=t/100;let n,a,s;return e<66?(n=255,a=e<6?0:-155.25485562709179-.44596950469579133*(a=e-2)+104.49216199393888*bc(a),s=e<20?0:-254.76935184120902+.8274096064007395*(s=e-10)+115.67994401066147*bc(s)):(n=351.97690566805693+.114206453784165*(n=e-55)-40.25366309332127*bc(n),a=325.4494125711974+.07943456536662342*(a=e-50)-28.0852963507957*bc(a),s=255),[n,a,s,1]},{round:pW}=Math,mW=(...t)=>{const e=$t(t,"rgb"),n=e[0],a=e[2];let s=1e3,l=4e4;const c=.4;let f;for(;l-s>c;){f=(l+s)*.5;const h=BL(f);h[2]/h[0]>=a/n?l=f:s=f}return pW(f)};ht.prototype.temp=ht.prototype.kelvin=ht.prototype.temperature=function(){return mW(this._rgb)};const Db=(...t)=>new ht(...t,"temp");Object.assign(Nt,{temp:Db,kelvin:Db,temperature:Db});Mt.format.temp=Mt.format.kelvin=Mt.format.temperature=BL;ht.prototype.oklch=function(){return EL(this._rgb)};const vW=(...t)=>new ht(...t,"oklch");Object.assign(Nt,{oklch:vW});Mt.format.oklch=AL;Mt.autodetect.push({p:2,test:(...t)=>{if(t=$t(t,"oklch"),qt(t)==="array"&&t.length===3)return"oklch"}});Object.assign(Nt,{analyze:SL,average:gQ,bezier:EQ,blend:tn,brewer:eW,Color:ht,colors:No,contrast:HQ,contrastAPCA:XQ,cubehelix:BQ,deltaE:QQ,distance:WQ,input:Mt,interpolate:Bo,limits:TL,mix:Bo,random:zQ,scale:kc,scales:tW,valid:JQ});const gW=(t,e,n,a,s)=>{const l=Math.max(Math.min((s-t)/(e-t),1),0);return Nt.mix(n,a,l).hex()},yW=({totalTimeInMS:t,pause:e})=>{const{gameState:n,setGameState:a}=Z.useContext($f),[s,l]=Z.useState(t),c=Zn();return Z.useEffect(()=>{s<=0&&a({...n,turnData:{...n.turnData,userGuess:-1},showResults:!0});const f=setInterval(()=>{e||l(s-50)},50);return()=>clearInterval(f)},[s,e]),vt.jsx(hS,{sx:{width:"100%",position:"relative",padding:1},children:vt.jsx(dY,{variant:"determinate",value:s/t*100,sx:{height:8,"& .MuiLinearProgress-bar":{background:gW(1,2,c.palette.error.light,c.palette.success.light,s)}}})})},bW="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%2324292f'/%3e%3c/svg%3e",SW=({leftComponent:t})=>{const e=Zn(),n=$q(e.breakpoints.only("xs"));return vt.jsxs(vt.Fragment,{children:[vt.jsxs(Nr,{container:!0,children:[vt.jsx(Nr,{size:1,sx:{textAlign:"left",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:t}),vt.jsx(Nr,{size:10,sx:{textAlign:"center",paddingY:2},children:vt.jsx(yo,{variant:"h3",sx:{fontSize:n?"1.5rem":"2rem"},children:"Mean Guessr"})}),vt.jsx(Nr,{size:1,sx:{textAlign:"right",display:"flex",alignItems:"center",justifyContent:"flex-start"},children:vt.jsx(yY,{href:"https://github.com/malcolmsailor/mean-guessr",children:vt.jsx(RY,{title:"GitHub",children:vt.jsx("img",{src:bW,alt:"GitHub",style:{width:n?20:32,height:n?20:32}})})})})]}),vt.jsx(Ib,{sx:{marginBottom:2}})]})},TW=df`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`,wW=()=>{const{gameState:t,setGameState:e,settings:n}=Z.useContext($f),[a,s]=Z.useState(!1),l=Bu(),c=HU(l.breakpoints.only("xs"));Z.useEffect(()=>{if(t.turnData.userGuess===null)return;let p=0,v=0;t.turnData.userGuess===t.turnData.truePosition?(p=1,v=_P(ib(t.turnNumber,n),t.turnNumber,n)):(navigator.vibrate&&(console.log("Vibrating"),navigator.vibrate(500)),console.log("Shaking"),s(!0),setTimeout(()=>s(!1),500)),e(g=>({...g,totalCorrectGuesses:g.totalCorrectGuesses+p,totalGuesses:g.totalGuesses+1,totalScore:g.totalScore+v}))},[t.turnData.userGuess]),Z.useEffect(()=>{if(!t.showResults)return;const p=v=>{v.stopPropagation();const g=t.turnNumber+1,S=$C(g,c,n);e(y=>({...y,turnData:S,turnNumber:g,showResults:!1}))};return document.addEventListener("click",p,{once:!0,capture:!0}),()=>document.removeEventListener("click",p)},[t.showResults]);const[f,h]=Z.useState(ib(t.turnNumber,n));return Z.useEffect(()=>{console.log("Setting total time in MS",t.turnNumber),h(ib(t.turnNumber,n))},[t.turnNumber]),vt.jsx(QH,{maxWidth:"lg",sx:{minHeight:"600px",py:2,animation:a?`${TW} 0.25s ease-in-out`:"none"},children:vt.jsxs(Nr,{container:!0,children:[vt.jsx(Nr,{size:12,children:vt.jsx(SW,{leftComponent:vt.jsx(vt.Fragment,{})})}),vt.jsx(Nr,{size:12,sx:{textAlign:"center"},children:t.showResults&&vt.jsx(yo,{variant:"h6",children:"Click anywhere to continue"})||vt.jsx(yo,{variant:"h6",children:"Click an arrow to guess"})}),vt.jsx(Nr,{size:12,children:vt.jsx(lZ,{values:t.turnData.data,dataIntervalInMS:n.dataIntervalInMS,showResults:t.showResults,showResultsDataIntervalInMS:n.showResultsDataIntervalInMS,dataIntervalIntraTurnDecay:n.dataIntervalIntraTurnDecay,dataIntervalInterTurnDecay:n.dataIntervalInterTurnDecay,dataPointFallDurationInMS:n.dataPointFallDurationInMS,turnNumber:t.turnNumber,dataMin:c?n.xsBoundsSettings.windowMin:n.boundsSettings.windowMin,dataMax:c?n.xsBoundsSettings.windowMax:n.boundsSettings.windowMax})}),vt.jsx(Nr,{size:12,children:vt.jsx(hZ,{xCoordinates:t.turnData.guessOptions,targetIndex:t.turnData.truePosition,dataMin:c?n.xsBoundsSettings.windowMin:n.boundsSettings.windowMin,dataMax:c?n.xsBoundsSettings.windowMax:n.boundsSettings.windowMax})}),vt.jsx(Nr,{size:6,sx:{textAlign:"center"},children:vt.jsxs(yo,{variant:"h6",children:[t.totalCorrectGuesses," / ",t.totalGuesses," correct"]})}),vt.jsx(Nr,{size:6,sx:{textAlign:"center"},children:vt.jsxs(yo,{variant:"h6",children:["Score: ",t.totalScore]})}),vt.jsx(Nr,{size:12,sx:{textAlign:"center"},children:vt.jsx(yW,{totalTimeInMS:f,pause:t.showResults},t.turnNumber)})]})})};function EW(){return vt.jsx(cZ,{children:vt.jsx(wW,{})})}iD.createRoot(document.getElementById("root")).render(vt.jsx(Z.StrictMode,{children:vt.jsx(EW,{})}));
