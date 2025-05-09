const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BUQI0Iof.js","assets/AboutView-CSIvawM9.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Pt={},xr=[],Ye=()=>{},f_=()=>!1,To=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),kl=e=>e.startsWith("onUpdate:"),Wt=Object.assign,Nl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d_=Object.prototype.hasOwnProperty,bt=(e,t)=>d_.call(e,t),it=Array.isArray,kr=e=>ni(e)==="[object Map]",wo=e=>ni(e)==="[object Set]",Du=e=>ni(e)==="[object Date]",ft=e=>typeof e=="function",Ut=e=>typeof e=="string",je=e=>typeof e=="symbol",Vt=e=>e!==null&&typeof e=="object",td=e=>(Vt(e)||ft(e))&&ft(e.then)&&ft(e.catch),ed=Object.prototype.toString,ni=e=>ed.call(e),p_=e=>ni(e).slice(8,-1),nd=e=>ni(e)==="[object Object]",Ol=e=>Ut(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Is=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},g_=/-(\w)/g,Fn=Io(e=>e.replace(g_,(t,n)=>n?n.toUpperCase():"")),m_=/\B([A-Z])/g,Gn=Io(e=>e.replace(m_,"-$1").toLowerCase()),rd=Io(e=>e.charAt(0).toUpperCase()+e.slice(1)),ya=Io(e=>e?`on${rd(e)}`:""),xn=(e,t)=>!Object.is(e,t),Li=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},sd=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},__=e=>{const t=Ut(e)?Number(e):NaN;return isNaN(t)?e:t};let xu;const Ao=()=>xu||(xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ml(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ut(r)?T_(r):Ml(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Ut(e)||Vt(e))return e}const y_=/;(?![^(]*\))/g,v_=/:([^]+)/,E_=/\/\*[^]*?\*\//g;function T_(e){const t={};return e.replace(E_,"").split(y_).forEach(n=>{if(n){const r=n.split(v_);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ll(e){let t="";if(Ut(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=Ll(e[n]);r&&(t+=r+" ")}else if(Vt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const w_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I_=xl(w_);function id(e){return!!e||e===""}function A_(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=bo(e[r],t[r]);return n}function bo(e,t){if(e===t)return!0;let n=Du(e),r=Du(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=je(e),r=je(t),n||r)return e===t;if(n=it(e),r=it(t),n||r)return n&&r?A_(e,t):!1;if(n=Vt(e),r=Vt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!bo(e[a],t[a]))return!1}}return String(e)===String(t)}function b_(e,t){return e.findIndex(n=>bo(n,t))}const od=e=>!!(e&&e.__v_isRef===!0),Xe=e=>Ut(e)?e:e==null?"":it(e)||Vt(e)&&(e.toString===ed||!ft(e.toString))?od(e)?Xe(e.value):JSON.stringify(e,ad,2):String(e),ad=(e,t)=>od(t)?ad(e,t.value):kr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[va(r,i)+" =>"]=s,n),{})}:wo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>va(n))}:je(t)?va(t):Vt(t)&&!it(t)&&!nd(t)?String(t):t,va=(e,t="")=>{var n;return je(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class ld{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function R_(e){return new ld(e)}function S_(){return Re}let Dt;const Ea=new WeakSet;class cd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ea.has(this)&&(Ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ku(this),fd(this);const t=Dt,n=$e;Dt=this,$e=!0;try{return this.fn()}finally{dd(this),Dt=t,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Bl(t);this.deps=this.depsTail=void 0,ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ka(this)&&this.run()}get dirty(){return Ka(this)}}let ud=0,As,bs;function hd(e,t=!1){if(e.flags|=8,t){e.next=bs,bs=e;return}e.next=As,As=e}function Fl(){ud++}function Ul(){if(--ud>0)return;if(bs){let t=bs;for(bs=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;As;){let t=As;for(As=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function fd(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dd(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bl(r),C_(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ka(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ls))return;e.globalVersion=Ls;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ka(e)){e.flags&=-3;return}const n=Dt,r=$e;Dt=e,$e=!0;try{fd(e);const s=e.fn(e._value);(t.version===0||xn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Dt=n,$e=r,dd(e),e.flags&=-3}}function Bl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function C_(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $e=!0;const gd=[];function Wn(){gd.push($e),$e=!1}function Qn(){const e=gd.pop();$e=e===void 0?!0:e}function ku(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Dt;Dt=void 0;try{t()}finally{Dt=n}}}let Ls=0;class P_{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Dt||!$e||Dt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Dt)n=this.activeLink=new P_(Dt,this),Dt.deps?(n.prevDep=Dt.depsTail,Dt.depsTail.nextDep=n,Dt.depsTail=n):Dt.deps=Dt.depsTail=n,md(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Dt.depsTail,n.nextDep=void 0,Dt.depsTail.nextDep=n,Dt.depsTail=n,Dt.deps===n&&(Dt.deps=r)}return n}trigger(t){this.version++,Ls++,this.notify(t)}notify(t){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ul()}}}function md(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)md(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const za=new WeakMap,dr=Symbol(""),Ga=Symbol(""),Fs=Symbol("");function ce(e,t,n){if($e&&Dt){let r=za.get(e);r||za.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function fn(e,t,n,r,s,i){const a=za.get(e);if(!a){Ls++;return}const l=c=>{c&&c.trigger()};if(Fl(),t==="clear")a.forEach(l);else{const c=it(e),h=c&&Ol(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,m)=>{(m==="length"||m===Fs||!je(m)&&m>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Fs)),t){case"add":c?h&&l(a.get("length")):(l(a.get(dr)),kr(e)&&l(a.get(Ga)));break;case"delete":c||(l(a.get(dr)),kr(e)&&l(a.get(Ga)));break;case"set":kr(e)&&l(a.get(dr));break}}Ul()}function br(e){const t=It(e);return t===e?t:(ce(t,"iterate",Fs),Ne(e)?t:t.map(ue))}function Ro(e){return ce(e=It(e),"iterate",Fs),e}const V_={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,ue)},concat(...e){return br(this).concat(...e.map(t=>it(t)?br(t):t))},entries(){return Ta(this,"entries",e=>(e[1]=ue(e[1]),e))},every(e,t){return ln(this,"every",e,t,void 0,arguments)},filter(e,t){return ln(this,"filter",e,t,n=>n.map(ue),arguments)},find(e,t){return ln(this,"find",e,t,ue,arguments)},findIndex(e,t){return ln(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ln(this,"findLast",e,t,ue,arguments)},findLastIndex(e,t){return ln(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ln(this,"forEach",e,t,void 0,arguments)},includes(...e){return wa(this,"includes",e)},indexOf(...e){return wa(this,"indexOf",e)},join(e){return br(this).join(e)},lastIndexOf(...e){return wa(this,"lastIndexOf",e)},map(e,t){return ln(this,"map",e,t,void 0,arguments)},pop(){return gs(this,"pop")},push(...e){return gs(this,"push",e)},reduce(e,...t){return Nu(this,"reduce",e,t)},reduceRight(e,...t){return Nu(this,"reduceRight",e,t)},shift(){return gs(this,"shift")},some(e,t){return ln(this,"some",e,t,void 0,arguments)},splice(...e){return gs(this,"splice",e)},toReversed(){return br(this).toReversed()},toSorted(e){return br(this).toSorted(e)},toSpliced(...e){return br(this).toSpliced(...e)},unshift(...e){return gs(this,"unshift",e)},values(){return Ta(this,"values",ue)}};function Ta(e,t,n){const r=Ro(e),s=r[t]();return r!==e&&!Ne(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const D_=Array.prototype;function ln(e,t,n,r,s,i){const a=Ro(e),l=a!==e&&!Ne(e),c=a[t];if(c!==D_[t]){const p=c.apply(e,i);return l?ue(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,ue(p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Nu(e,t,n,r){const s=Ro(e);let i=n;return s!==e&&(Ne(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,ue(l),c,e)}),s[t](i,...r)}function wa(e,t,n){const r=It(e);ce(r,"iterate",Fs);const s=r[t](...n);return(s===-1||s===!1)&&Hl(n[0])?(n[0]=It(n[0]),r[t](...n)):s}function gs(e,t,n=[]){Wn(),Fl();const r=It(e)[t].apply(e,n);return Ul(),Qn(),r}const x_=xl("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function k_(e){je(e)||(e=String(e));const t=It(this);return ce(t,"has",e),t.hasOwnProperty(e)}class yd{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?q_:wd:i?Td:Ed).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let c;if(a&&(c=V_[n]))return c;if(n==="hasOwnProperty")return k_}const l=Reflect.get(t,n,de(t)?t:r);return(je(n)?_d.has(n):x_(n))||(s||ce(t,"get",n),i)?l:de(l)?a&&Ol(n)?l:l.value:Vt(l)?s?Ad(l):So(l):l}}class vd extends yd{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=pr(i);if(!Ne(r)&&!pr(r)&&(i=It(i),r=It(r)),!it(t)&&de(i)&&!de(r))return c?!1:(i.value=r,!0)}const a=it(t)&&Ol(n)?Number(n)<t.length:bt(t,n),l=Reflect.set(t,n,r,de(t)?t:s);return t===It(s)&&(a?xn(r,i)&&fn(t,"set",n,r):fn(t,"add",n,r)),l}deleteProperty(t,n){const r=bt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&fn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!je(n)||!_d.has(n))&&ce(t,"has",n),r}ownKeys(t){return ce(t,"iterate",it(t)?"length":dr),Reflect.ownKeys(t)}}class N_ extends yd{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const O_=new vd,M_=new N_,L_=new vd(!0);const Wa=e=>e,Ri=e=>Reflect.getPrototypeOf(e);function F_(e,t,n){return function(...r){const s=this.__v_raw,i=It(s),a=kr(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),f=n?Wa:t?Qa:ue;return!t&&ce(i,"iterate",c?Ga:dr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Si(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function U_(e,t){const n={get(s){const i=this.__v_raw,a=It(i),l=It(s);e||(xn(s,l)&&ce(a,"get",s),ce(a,"get",l));const{has:c}=Ri(a),h=t?Wa:e?Qa:ue;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ce(It(s),"iterate",dr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=It(i),l=It(s);return e||(xn(s,l)&&ce(a,"has",s),ce(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=It(l),h=t?Wa:e?Qa:ue;return!e&&ce(c,"iterate",dr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return Wt(n,e?{add:Si("add"),set:Si("set"),delete:Si("delete"),clear:Si("clear")}:{add(s){!t&&!Ne(s)&&!pr(s)&&(s=It(s));const i=It(this);return Ri(i).has.call(i,s)||(i.add(s),fn(i,"add",s,s)),this},set(s,i){!t&&!Ne(i)&&!pr(i)&&(i=It(i));const a=It(this),{has:l,get:c}=Ri(a);let h=l.call(a,s);h||(s=It(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?xn(i,f)&&fn(a,"set",s,i):fn(a,"add",s,i),this},delete(s){const i=It(this),{has:a,get:l}=Ri(i);let c=a.call(i,s);c||(s=It(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&fn(i,"delete",s,void 0),h},clear(){const s=It(this),i=s.size!==0,a=s.clear();return i&&fn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=F_(s,e,t)}),n}function jl(e,t){const n=U_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(bt(n,s)&&s in r?n:r,s,i)}const B_={get:jl(!1,!1)},$_={get:jl(!1,!0)},j_={get:jl(!0,!1)};const Ed=new WeakMap,Td=new WeakMap,wd=new WeakMap,q_=new WeakMap;function H_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(e){return e.__v_skip||!Object.isExtensible(e)?0:H_(p_(e))}function So(e){return pr(e)?e:ql(e,!1,O_,B_,Ed)}function Id(e){return ql(e,!1,L_,$_,Td)}function Ad(e){return ql(e,!0,M_,j_,wd)}function ql(e,t,n,r,s){if(!Vt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=K_(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function Nr(e){return pr(e)?Nr(e.__v_raw):!!(e&&e.__v_isReactive)}function pr(e){return!!(e&&e.__v_isReadonly)}function Ne(e){return!!(e&&e.__v_isShallow)}function Hl(e){return e?!!e.__v_raw:!1}function It(e){const t=e&&e.__v_raw;return t?It(t):e}function bd(e){return!bt(e,"__v_skip")&&Object.isExtensible(e)&&sd(e,"__v_skip",!0),e}const ue=e=>Vt(e)?So(e):e,Qa=e=>Vt(e)?Ad(e):e;function de(e){return e?e.__v_isRef===!0:!1}function Fe(e){return Rd(e,!1)}function z_(e){return Rd(e,!0)}function Rd(e,t){return de(e)?e:new G_(e,t)}class G_{constructor(t,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:It(t),this._value=n?t:ue(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ne(t)||pr(t);t=r?t:It(t),xn(t,n)&&(this._rawValue=t,this._value=r?t:ue(t),this.dep.trigger())}}function Or(e){return de(e)?e.value:e}const W_={get:(e,t,n)=>t==="__v_raw"?e:Or(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Sd(e){return Nr(e)?e:new Proxy(e,W_)}class Q_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Dt!==this)return hd(this,!0),!0}get value(){const t=this.dep.track();return pd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function X_(e,t,n=!1){let r,s;return ft(e)?r=e:(r=e.get,s=e.set),new Q_(r,s,n)}const Ci={},Xi=new WeakMap;let ar;function Y_(e,t=!1,n=ar){if(n){let r=Xi.get(n);r||Xi.set(n,r=[]),r.push(e)}}function J_(e,t,n=Pt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=q=>s?q:Ne(q)||s===!1||s===0?dn(q,1):dn(q);let f,p,m,_,S=!1,V=!1;if(de(e)?(p=()=>e.value,S=Ne(e)):Nr(e)?(p=()=>h(e),S=!0):it(e)?(V=!0,S=e.some(q=>Nr(q)||Ne(q)),p=()=>e.map(q=>{if(de(q))return q.value;if(Nr(q))return h(q);if(ft(q))return c?c(q,2):q()})):ft(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){Wn();try{m()}finally{Qn()}}const q=ar;ar=f;try{return c?c(e,3,[_]):e(_)}finally{ar=q}}:p=Ye,t&&s){const q=p,ot=s===!0?1/0:s;p=()=>dn(q(),ot)}const x=S_(),$=()=>{f.stop(),x&&x.active&&Nl(x.effects,f)};if(i&&t){const q=t;t=(...ot)=>{q(...ot),$()}}let B=V?new Array(e.length).fill(Ci):Ci;const j=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(t){const ot=f.run();if(s||S||(V?ot.some((et,b)=>xn(et,B[b])):xn(ot,B))){m&&m();const et=ar;ar=f;try{const b=[ot,B===Ci?void 0:V&&B[0]===Ci?[]:B,_];c?c(t,3,b):t(...b),B=ot}finally{ar=et}}}else f.run()};return l&&l(j),f=new cd(p),f.scheduler=a?()=>a(j,!1):j,_=q=>Y_(q,!1,f),m=f.onStop=()=>{const q=Xi.get(f);if(q){if(c)c(q,4);else for(const ot of q)ot();Xi.delete(f)}},t?r?j(!0):B=f.run():a?a(j.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function dn(e,t=1/0,n){if(t<=0||!Vt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))dn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)dn(e[r],t,n);else if(wo(e)||kr(e))e.forEach(r=>{dn(r,t,n)});else if(nd(e)){for(const r in e)dn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ri(e,t,n,r){try{return r?e(...r):e()}catch(s){Co(s,t,n)}}function qe(e,t,n,r){if(ft(e)){const s=ri(e,t,n,r);return s&&td(s)&&s.catch(i=>{Co(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(qe(e[i],t,n,r));return s}}function Co(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Pt;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,h)===!1)return}l=l.parent}if(i){Wn(),ri(i,null,10,[e,c,h]),Qn();return}}Z_(e,n,s,r,a)}function Z_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const _e=[];let Ge=-1;const Mr=[];let Sn=null,Rr=0;const Cd=Promise.resolve();let Yi=null;function Kl(e){const t=Yi||Cd;return e?t.then(this?e.bind(this):e):t}function ty(e){let t=Ge+1,n=_e.length;for(;t<n;){const r=t+n>>>1,s=_e[r],i=Us(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function zl(e){if(!(e.flags&1)){const t=Us(e),n=_e[_e.length-1];!n||!(e.flags&2)&&t>=Us(n)?_e.push(e):_e.splice(ty(t),0,e),e.flags|=1,Pd()}}function Pd(){Yi||(Yi=Cd.then(Dd))}function ey(e){it(e)?Mr.push(...e):Sn&&e.id===-1?Sn.splice(Rr+1,0,e):e.flags&1||(Mr.push(e),e.flags|=1),Pd()}function Ou(e,t,n=Ge+1){for(;n<_e.length;n++){const r=_e[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vd(e){if(Mr.length){const t=[...new Set(Mr)].sort((n,r)=>Us(n)-Us(r));if(Mr.length=0,Sn){Sn.push(...t);return}for(Sn=t,Rr=0;Rr<Sn.length;Rr++){const n=Sn[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Sn=null,Rr=0}}const Us=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Dd(e){try{for(Ge=0;Ge<_e.length;Ge++){const t=_e[Ge];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ri(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ge<_e.length;Ge++){const t=_e[Ge];t&&(t.flags&=-2)}Ge=-1,_e.length=0,Vd(),Yi=null,(_e.length||Mr.length)&&Dd()}}let ee=null,xd=null;function Ji(e){const t=ee;return ee=e,xd=e&&e.type.__scopeId||null,t}function Gl(e,t=ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Wu(-1);const i=Ji(t);let a;try{a=e(...s)}finally{Ji(i),r._d&&Wu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ms(e,t){if(ee===null)return e;const n=ko(ee),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=Pt]=t[s];i&&(ft(i)&&(i={mounted:i,updated:i}),i.deep&&dn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function rr(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Wn(),qe(c,n,8,[e.el,l,e,t]),Qn())}}const kd=Symbol("_vte"),Nd=e=>e.__isTeleport,Rs=e=>e&&(e.disabled||e.disabled===""),Mu=e=>e&&(e.defer||e.defer===""),Lu=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Fu=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xa=(e,t)=>{const n=e&&e.to;return Ut(n)?t?t(n):null:n},Od={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,a,l,c,h){const{mc:f,pc:p,pbc:m,o:{insert:_,querySelector:S,createText:V,createComment:x}}=h,$=Rs(t.props);let{shapeFlag:B,children:j,dynamicChildren:q}=t;if(e==null){const ot=t.el=V(""),et=t.anchor=V("");_(ot,n,r),_(et,n,r);const b=(y,I)=>{B&16&&(s&&s.isCE&&(s.ce._teleportTarget=y),f(j,y,I,s,i,a,l,c))},v=()=>{const y=t.target=Xa(t.props,S),I=Md(y,t,V,_);y&&(a!=="svg"&&Lu(y)?a="svg":a!=="mathml"&&Fu(y)&&(a="mathml"),$||(b(y,I),Fi(t,!1)))};$&&(b(n,et),Fi(t,!0)),Mu(t.props)?me(()=>{v(),t.el.__isMounted=!0},i):v()}else{if(Mu(t.props)&&!e.el.__isMounted){me(()=>{Od.process(e,t,n,r,s,i,a,l,c,h),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const ot=t.anchor=e.anchor,et=t.target=e.target,b=t.targetAnchor=e.targetAnchor,v=Rs(e.props),y=v?n:et,I=v?ot:b;if(a==="svg"||Lu(et)?a="svg":(a==="mathml"||Fu(et))&&(a="mathml"),q?(m(e.dynamicChildren,q,y,s,i,a,l),Ql(e,t,!0)):c||p(e,t,y,I,s,i,a,l,!1),$)v?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Pi(t,n,ot,h,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const R=t.target=Xa(t.props,S);R&&Pi(t,R,null,h,0)}else v&&Pi(t,et,b,h,1);Fi(t,$)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:a,children:l,anchor:c,targetStart:h,targetAnchor:f,target:p,props:m}=e;if(p&&(s(h),s(f)),i&&s(c),a&16){const _=i||!Rs(m);for(let S=0;S<l.length;S++){const V=l[S];r(V,t,n,_,!!V.dynamicChildren)}}},move:Pi,hydrate:ny};function Pi(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:h,props:f}=e,p=i===2;if(p&&r(a,t,n),(!p||Rs(f))&&c&16)for(let m=0;m<h.length;m++)s(h[m],t,n,2);p&&r(l,t,n)}function ny(e,t,n,r,s,i,{o:{nextSibling:a,parentNode:l,querySelector:c,insert:h,createText:f}},p){const m=t.target=Xa(t.props,c);if(m){const _=Rs(t.props),S=m._lpa||m.firstChild;if(t.shapeFlag&16)if(_)t.anchor=p(a(e),t,l(e),n,r,s,i),t.targetStart=S,t.targetAnchor=S&&a(S);else{t.anchor=a(e);let V=S;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")t.targetStart=V;else if(V.data==="teleport anchor"){t.targetAnchor=V,m._lpa=t.targetAnchor&&a(t.targetAnchor);break}}V=a(V)}t.targetAnchor||Md(m,t,f,h),p(S&&a(S),t,m,n,r,s,i)}Fi(t,_)}return t.anchor&&a(t.anchor)}const ry=Od;function Fi(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Md(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[kd]=i,e&&(r(s,e),r(i,e)),i}const Cn=Symbol("_leaveCb"),Vi=Symbol("_enterCb");function sy(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kd(()=>{e.isMounted=!0}),zd(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],Ld={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},Fd=e=>{const t=e.subTree;return t.component?Fd(t.component):t},iy={name:"BaseTransition",props:Ld,setup(e,{slots:t}){const n=ev(),r=sy();return()=>{const s=t.default&&$d(t.default(),!0);if(!s||!s.length)return;const i=Ud(s),a=It(e),{mode:l}=a;if(r.isLeaving)return Ia(i);const c=Uu(i);if(!c)return Ia(i);let h=Ya(c,a,r,n,p=>h=p);c.type!==ye&&Bs(c,h);let f=n.subTree&&Uu(n.subTree);if(f&&f.type!==ye&&!cr(c,f)&&Fd(n).type!==ye){let p=Ya(f,a,r,n);if(Bs(f,p),l==="out-in"&&c.type!==ye)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Ia(i);l==="in-out"&&c.type!==ye?p.delayLeave=(m,_,S)=>{const V=Bd(r,f);V[String(f.key)]=f,m[Cn]=()=>{_(),m[Cn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{S(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Ud(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ye){t=n;break}}return t}const oy=iy;function Bd(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ya(e,t,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:V,onBeforeAppear:x,onAppear:$,onAfterAppear:B,onAppearCancelled:j}=t,q=String(e.key),ot=Bd(n,e),et=(y,I)=>{y&&qe(y,r,9,I)},b=(y,I)=>{const R=I[1];et(y,I),it(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},v={mode:a,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=x||c;else return;y[Cn]&&y[Cn](!0);const R=ot[q];R&&cr(e,R)&&R.el[Cn]&&R.el[Cn](),et(I,[y])},enter(y){let I=h,R=f,A=p;if(!n.isMounted)if(i)I=$||h,R=B||f,A=j||p;else return;let E=!1;const St=y[Vi]=jt=>{E||(E=!0,jt?et(A,[y]):et(R,[y]),v.delayedLeave&&v.delayedLeave(),y[Vi]=void 0)};I?b(I,[y,St]):St()},leave(y,I){const R=String(e.key);if(y[Vi]&&y[Vi](!0),n.isUnmounting)return I();et(m,[y]);let A=!1;const E=y[Cn]=St=>{A||(A=!0,I(),St?et(V,[y]):et(S,[y]),y[Cn]=void 0,ot[R]===e&&delete ot[R])};ot[R]=e,_?b(_,[y,E]):E()},clone(y){const I=Ya(y,t,n,r,s);return s&&s(I),I}};return v}function Ia(e){if(Po(e))return e=Un(e),e.children=null,e}function Uu(e){if(!Po(e))return Nd(e.type)&&e.children?Ud(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ft(n.default))return n.default()}}function Bs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $d(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Gt?(a.patchFlag&128&&s++,r=r.concat($d(a.children,t,l))):(t||a.type!==ye)&&r.push(l!=null?Un(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jd(e,t){return ft(e)?Wt({name:e.name},t,{setup:e}):e}function qd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Zi(e,t,n,r,s=!1){if(it(e)){e.forEach((S,V)=>Zi(S,t&&(it(t)?t[V]:t),n,r,s));return}if(Lr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zi(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ko(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,f=l.refs===Pt?l.refs={}:l.refs,p=l.setupState,m=It(p),_=p===Pt?()=>!1:S=>bt(m,S);if(h!=null&&h!==c&&(Ut(h)?(f[h]=null,_(h)&&(p[h]=null)):de(h)&&(h.value=null)),ft(c))ri(c,l,12,[a,f]);else{const S=Ut(c),V=de(c);if(S||V){const x=()=>{if(e.f){const $=S?_(c)?p[c]:f[c]:c.value;s?it($)&&Nl($,i):it($)?$.includes(i)||$.push(i):S?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],e.k&&(f[e.k]=c.value))}else S?(f[c]=a,_(c)&&(p[c]=a)):V&&(c.value=a,e.k&&(f[e.k]=a))};a?(x.id=-1,me(x,n)):x()}}}Ao().requestIdleCallback;Ao().cancelIdleCallback;const Lr=e=>!!e.type.__asyncLoader,Po=e=>e.type.__isKeepAlive;function ay(e,t){Hd(e,"a",t)}function ly(e,t){Hd(e,"da",t)}function Hd(e,t,n=fe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Vo(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Po(s.parent.vnode)&&cy(r,t,n,s),s=s.parent}}function cy(e,t,n,r){const s=Vo(t,e,r,!0);Gd(()=>{Nl(r[t],s)},n)}function Vo(e,t,n=fe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Wn();const l=si(n),c=qe(t,n,e,a);return l(),Qn(),c});return r?s.unshift(i):s.push(i),i}}const vn=e=>(t,n=fe)=>{(!qs||e==="sp")&&Vo(e,(...r)=>t(...r),n)},uy=vn("bm"),Kd=vn("m"),hy=vn("bu"),fy=vn("u"),zd=vn("bum"),Gd=vn("um"),dy=vn("sp"),py=vn("rtg"),gy=vn("rtc");function my(e,t=fe){Vo("ec",e,t)}const _y=Symbol.for("v-ndc");function Ss(e,t,n,r){let s;const i=n,a=it(e);if(a||Ut(e)){const l=a&&Nr(e);let c=!1;l&&(c=!Ne(e),e=Ro(e)),s=new Array(e.length);for(let h=0,f=e.length;h<f;h++)s[h]=t(c?ue(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Vt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=t(e[f],f,c,i)}}else s=[];return s}function yy(e,t,n={},r,s){if(ee.ce||ee.parent&&Lr(ee.parent)&&ee.parent.ce)return n.name=t,Zt(),$r(Gt,null,[ve("slot",n,r&&r())],64);let i=e[t];i&&i._c&&(i._d=!1),Zt();const a=i&&Wd(i(n)),l=n.key||a&&a.key,c=$r(Gt,{key:(l&&!je(l)?l:`_${t}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&e._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Wd(e){return e.some(t=>js(t)?!(t.type===ye||t.type===Gt&&!Wd(t.children)):!0)?e:null}const Ja=e=>e?pp(e)?ko(e):Ja(e.parent):null,Cs=Wt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ja(e.parent),$root:e=>Ja(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xd(e),$forceUpdate:e=>e.f||(e.f=()=>{zl(e.update)}),$nextTick:e=>e.n||(e.n=Kl.bind(e.proxy)),$watch:e=>By.bind(e)}),Aa=(e,t)=>e!==Pt&&!e.__isScriptSetup&&bt(e,t),vy={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const _=a[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Aa(r,t))return a[t]=1,r[t];if(s!==Pt&&bt(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&bt(h,t))return a[t]=3,i[t];if(n!==Pt&&bt(n,t))return a[t]=4,n[t];Za&&(a[t]=0)}}const f=Cs[t];let p,m;if(f)return t==="$attrs"&&ce(e.attrs,"get",""),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Pt&&bt(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,bt(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Aa(s,t)?(s[t]=n,!0):r!==Pt&&bt(r,t)?(r[t]=n,!0):bt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Pt&&bt(e,a)||Aa(t,a)||(l=i[0])&&bt(l,a)||bt(r,a)||bt(Cs,a)||bt(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:bt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bu(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Za=!0;function Ey(e){const t=Xd(e),n=e.proxy,r=e.ctx;Za=!1,t.beforeCreate&&$u(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:V,deactivated:x,beforeDestroy:$,beforeUnmount:B,destroyed:j,unmounted:q,render:ot,renderTracked:et,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:R,components:A,directives:E,filters:St}=t;if(h&&Ty(h,r,null),a)for(const _t in a){const gt=a[_t];ft(gt)&&(r[_t]=gt.bind(n))}if(s){const _t=s.call(n,n);Vt(_t)&&(e.data=So(_t))}if(Za=!0,i)for(const _t in i){const gt=i[_t],Ae=ft(gt)?gt.bind(n,n):ft(gt.get)?gt.get.bind(n,n):Ye,Me=!ft(gt)&&ft(gt.set)?gt.set.bind(n):Ye,Ve=Be({get:Ae,set:Me});Object.defineProperty(r,_t,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ot=>Ve.value=Ot})}if(l)for(const _t in l)Qd(l[_t],r,n,_t);if(c){const _t=ft(c)?c.call(n):c;Reflect.ownKeys(_t).forEach(gt=>{Ui(gt,_t[gt])})}f&&$u(f,e,"c");function Nt(_t,gt){it(gt)?gt.forEach(Ae=>_t(Ae.bind(n))):gt&&_t(gt.bind(n))}if(Nt(uy,p),Nt(Kd,m),Nt(hy,_),Nt(fy,S),Nt(ay,V),Nt(ly,x),Nt(my,v),Nt(gy,et),Nt(py,b),Nt(zd,B),Nt(Gd,q),Nt(dy,y),it(I))if(I.length){const _t=e.exposed||(e.exposed={});I.forEach(gt=>{Object.defineProperty(_t,gt,{get:()=>n[gt],set:Ae=>n[gt]=Ae})})}else e.exposed||(e.exposed={});ot&&e.render===Ye&&(e.render=ot),R!=null&&(e.inheritAttrs=R),A&&(e.components=A),E&&(e.directives=E),y&&qd(e)}function Ty(e,t,n=Ye){it(e)&&(e=tl(e));for(const r in e){const s=e[r];let i;Vt(s)?"default"in s?i=pn(s.from||r,s.default,!0):i=pn(s.from||r):i=pn(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function $u(e,t,n){qe(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qd(e,t,n,r){let s=r.includes(".")?lp(n,r):()=>n[r];if(Ut(e)){const i=t[e];ft(i)&&Bi(s,i)}else if(ft(e))Bi(s,e.bind(n));else if(Vt(e))if(it(e))e.forEach(i=>Qd(i,t,n,r));else{const i=ft(e.handler)?e.handler.bind(n):t[e.handler];ft(i)&&Bi(s,i,e)}}function Xd(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>to(c,h,a,!0)),to(c,t,a)),Vt(t)&&i.set(t,c),c}function to(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&to(e,i,n,!0),s&&s.forEach(a=>to(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=wy[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const wy={data:ju,props:qu,emits:qu,methods:vs,computed:vs,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:vs,directives:vs,watch:Ay,provide:ju,inject:Iy};function ju(e,t){return t?e?function(){return Wt(ft(e)?e.call(this,this):e,ft(t)?t.call(this,this):t)}:t:e}function Iy(e,t){return vs(tl(e),tl(t))}function tl(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function vs(e,t){return e?Wt(Object.create(null),e,t):t}function qu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:Wt(Object.create(null),Bu(e),Bu(t??{})):t}function Ay(e,t){if(!e)return t;if(!t)return e;const n=Wt(Object.create(null),e);for(const r in t)n[r]=ge(e[r],t[r]);return n}function Yd(){return{app:null,config:{isNativeTag:f_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let by=0;function Ry(e,t){return function(r,s=null){ft(r)||(r=Wt({},r)),s!=null&&!Vt(s)&&(s=null);const i=Yd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:by++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:av,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ft(f.install)?(a.add(f),f.install(h,...p)):ft(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!c){const _=h._ceVNode||ve(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(_,f,m),c=!0,h._container=f,f.__vue_app__=h,ko(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(qe(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Fr;Fr=h;try{return f()}finally{Fr=p}}};return h}}let Fr=null;function Ui(e,t){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[e]=t}}function pn(e,t,n=!1){const r=fe||ee;if(r||Fr){const s=Fr?Fr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ft(t)?t.call(r&&r.proxy):t}}const Jd={},Zd=()=>Object.create(Jd),tp=e=>Object.getPrototypeOf(e)===Jd;function Sy(e,t,n,r=!1){const s={},i=Zd();e.propsDefaults=Object.create(null),ep(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Id(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Cy(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=It(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Do(e.emitsOptions,m))continue;const _=t[m];if(c)if(bt(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const S=Fn(m);s[S]=el(c,l,S,_,e,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{ep(e,t,s,i)&&(h=!0);let f;for(const p in l)(!t||!bt(t,p)&&((f=Gn(p))===p||!bt(t,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=el(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!bt(t,p))&&(delete i[p],h=!0)}h&&fn(e.attrs,"set","")}function ep(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Is(c))continue;const h=t[c];let f;s&&bt(s,f=Fn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Do(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=It(n),h=l||Pt;for(let f=0;f<i.length;f++){const p=i[f];n[p]=el(s,c,p,h[p],e,!bt(h,p))}}return a}function el(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=bt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ft(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=si(s);r=h[n]=c.call(null,t),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}const Py=new WeakMap;function np(e,t,n=!1){const r=n?Py:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ft(e)){const f=p=>{c=!0;const[m,_]=np(p,t,!0);Wt(a,m),_&&l.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!c)return Vt(e)&&r.set(e,xr),xr;if(it(i))for(let f=0;f<i.length;f++){const p=Fn(i[f]);Hu(p)&&(a[p]=Pt)}else if(i)for(const f in i){const p=Fn(f);if(Hu(p)){const m=i[f],_=a[p]=it(m)||ft(m)?{type:m}:Wt({},m),S=_.type;let V=!1,x=!0;if(it(S))for(let $=0;$<S.length;++$){const B=S[$],j=ft(B)&&B.name;if(j==="Boolean"){V=!0;break}else j==="String"&&(x=!1)}else V=ft(S)&&S.name==="Boolean";_[0]=V,_[1]=x,(V||bt(_,"default"))&&l.push(p)}}const h=[a,l];return Vt(e)&&r.set(e,h),h}function Hu(e){return e[0]!=="$"&&!Is(e)}const rp=e=>e[0]==="_"||e==="$stable",Wl=e=>it(e)?e.map(Qe):[Qe(e)],Vy=(e,t,n)=>{if(t._n)return t;const r=Gl((...s)=>Wl(t(...s)),n);return r._c=!1,r},sp=(e,t,n)=>{const r=e._ctx;for(const s in e){if(rp(s))continue;const i=e[s];if(ft(i))t[s]=Vy(s,i,r);else if(i!=null){const a=Wl(i);t[s]=()=>a}}},ip=(e,t)=>{const n=Wl(t);e.slots.default=()=>n},op=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Dy=(e,t,n)=>{const r=e.slots=Zd();if(e.vnode.shapeFlag&32){const s=t._;s?(op(r,t,n),n&&sd(r,"_",s,!0)):sp(t,r)}else t&&ip(e,t)},xy=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Pt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:op(s,t,n):(i=!t.$stable,sp(t,s)),a=t}else t&&(ip(e,t),a={default:1});if(i)for(const l in s)!rp(l)&&a[l]==null&&delete s[l]},me=Gy;function ky(e){return Ny(e)}function Ny(e,t){const n=Ao();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=Ye,insertStaticContent:S}=e,V=(T,w,C,N=null,L=null,O=null,G=void 0,K=null,H=!!w.dynamicChildren)=>{if(T===w)return;T&&!cr(T,w)&&(N=k(T),Ot(T,L,O,!0),T=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:U,ref:rt,shapeFlag:Q}=w;switch(U){case xo:x(T,w,C,N);break;case ye:$(T,w,C,N);break;case Ra:T==null&&B(w,C,N,G);break;case Gt:A(T,w,C,N,L,O,G,K,H);break;default:Q&1?ot(T,w,C,N,L,O,G,K,H):Q&6?E(T,w,C,N,L,O,G,K,H):(Q&64||Q&128)&&U.process(T,w,C,N,L,O,G,K,H,J)}rt!=null&&L&&Zi(rt,T&&T.ref,O,w||T,!w)},x=(T,w,C,N)=>{if(T==null)r(w.el=l(w.children),C,N);else{const L=w.el=T.el;w.children!==T.children&&h(L,w.children)}},$=(T,w,C,N)=>{T==null?r(w.el=c(w.children||""),C,N):w.el=T.el},B=(T,w,C,N)=>{[T.el,T.anchor]=S(T.children,w,C,N,T.el,T.anchor)},j=({el:T,anchor:w},C,N)=>{let L;for(;T&&T!==w;)L=m(T),r(T,C,N),T=L;r(w,C,N)},q=({el:T,anchor:w})=>{let C;for(;T&&T!==w;)C=m(T),s(T),T=C;s(w)},ot=(T,w,C,N,L,O,G,K,H)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),T==null?et(w,C,N,L,O,G,K,H):y(T,w,L,O,G,K,H)},et=(T,w,C,N,L,O,G,K)=>{let H,U;const{props:rt,shapeFlag:Q,transition:Z,dirs:at}=T;if(H=T.el=a(T.type,O,rt&&rt.is,rt),Q&8?f(H,T.children):Q&16&&v(T.children,H,null,N,L,ba(T,O),G,K),at&&rr(T,null,N,"created"),b(H,T,T.scopeId,G,N),rt){for(const dt in rt)dt!=="value"&&!Is(dt)&&i(H,dt,null,rt[dt],O,N);"value"in rt&&i(H,"value",null,rt.value,O),(U=rt.onVnodeBeforeMount)&&ze(U,N,T)}at&&rr(T,null,N,"beforeMount");const st=Oy(L,Z);st&&Z.beforeEnter(H),r(H,w,C),((U=rt&&rt.onVnodeMounted)||st||at)&&me(()=>{U&&ze(U,N,T),st&&Z.enter(H),at&&rr(T,null,N,"mounted")},L)},b=(T,w,C,N,L)=>{if(C&&_(T,C),N)for(let O=0;O<N.length;O++)_(T,N[O]);if(L){let O=L.subTree;if(w===O||up(O.type)&&(O.ssContent===w||O.ssFallback===w)){const G=L.vnode;b(T,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(T,w,C,N,L,O,G,K,H=0)=>{for(let U=H;U<T.length;U++){const rt=T[U]=K?Pn(T[U]):Qe(T[U]);V(null,rt,w,C,N,L,O,G,K)}},y=(T,w,C,N,L,O,G)=>{const K=w.el=T.el;let{patchFlag:H,dynamicChildren:U,dirs:rt}=w;H|=T.patchFlag&16;const Q=T.props||Pt,Z=w.props||Pt;let at;if(C&&sr(C,!1),(at=Z.onVnodeBeforeUpdate)&&ze(at,C,w,T),rt&&rr(w,T,C,"beforeUpdate"),C&&sr(C,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&f(K,""),U?I(T.dynamicChildren,U,K,C,N,ba(w,L),O):G||gt(T,w,K,null,C,N,ba(w,L),O,!1),H>0){if(H&16)R(K,Q,Z,C,L);else if(H&2&&Q.class!==Z.class&&i(K,"class",null,Z.class,L),H&4&&i(K,"style",Q.style,Z.style,L),H&8){const st=w.dynamicProps;for(let dt=0;dt<st.length;dt++){const yt=st[dt],re=Q[yt],Qt=Z[yt];(Qt!==re||yt==="value")&&i(K,yt,re,Qt,L,C)}}H&1&&T.children!==w.children&&f(K,w.children)}else!G&&U==null&&R(K,Q,Z,C,L);((at=Z.onVnodeUpdated)||rt)&&me(()=>{at&&ze(at,C,w,T),rt&&rr(w,T,C,"updated")},N)},I=(T,w,C,N,L,O,G)=>{for(let K=0;K<w.length;K++){const H=T[K],U=w[K],rt=H.el&&(H.type===Gt||!cr(H,U)||H.shapeFlag&70)?p(H.el):C;V(H,U,rt,null,N,L,O,G,!0)}},R=(T,w,C,N,L)=>{if(w!==C){if(w!==Pt)for(const O in w)!Is(O)&&!(O in C)&&i(T,O,w[O],null,L,N);for(const O in C){if(Is(O))continue;const G=C[O],K=w[O];G!==K&&O!=="value"&&i(T,O,K,G,L,N)}"value"in C&&i(T,"value",w.value,C.value,L)}},A=(T,w,C,N,L,O,G,K,H)=>{const U=w.el=T?T.el:l(""),rt=w.anchor=T?T.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:at}=w;at&&(K=K?K.concat(at):at),T==null?(r(U,C,N),r(rt,C,N),v(w.children||[],C,rt,L,O,G,K,H)):Q>0&&Q&64&&Z&&T.dynamicChildren?(I(T.dynamicChildren,Z,C,L,O,G,K),(w.key!=null||L&&w===L.subTree)&&Ql(T,w,!0)):gt(T,w,C,rt,L,O,G,K,H)},E=(T,w,C,N,L,O,G,K,H)=>{w.slotScopeIds=K,T==null?w.shapeFlag&512?L.ctx.activate(w,C,N,G,H):St(w,C,N,L,O,G,H):jt(T,w,H)},St=(T,w,C,N,L,O,G)=>{const K=T.component=tv(T,N,L);if(Po(T)&&(K.ctx.renderer=J),nv(K,!1,G),K.asyncDep){if(L&&L.registerDep(K,Nt,G),!T.el){const H=K.subTree=ve(ye);$(null,H,w,C)}}else Nt(K,T,w,C,L,O,G)},jt=(T,w,C)=>{const N=w.component=T.component;if(Ky(T,w,C))if(N.asyncDep&&!N.asyncResolved){_t(N,w,C);return}else N.next=w,N.update();else w.el=T.el,N.vnode=w},Nt=(T,w,C,N,L,O,G)=>{const K=()=>{if(T.isMounted){let{next:Q,bu:Z,u:at,parent:st,vnode:dt}=T;{const se=ap(T);if(se){Q&&(Q.el=dt.el,_t(T,Q,G)),se.asyncDep.then(()=>{T.isUnmounted||K()});return}}let yt=Q,re;sr(T,!1),Q?(Q.el=dt.el,_t(T,Q,G)):Q=dt,Z&&Li(Z),(re=Q.props&&Q.props.onVnodeBeforeUpdate)&&ze(re,st,Q,dt),sr(T,!0);const Qt=zu(T),De=T.subTree;T.subTree=Qt,V(De,Qt,p(De.el),k(De),T,L,O),Q.el=Qt.el,yt===null&&zy(T,Qt.el),at&&me(at,L),(re=Q.props&&Q.props.onVnodeUpdated)&&me(()=>ze(re,st,Q,dt),L)}else{let Q;const{el:Z,props:at}=w,{bm:st,m:dt,parent:yt,root:re,type:Qt}=T,De=Lr(w);sr(T,!1),st&&Li(st),!De&&(Q=at&&at.onVnodeBeforeMount)&&ze(Q,yt,w),sr(T,!0);{re.ce&&re.ce._injectChildStyle(Qt);const se=T.subTree=zu(T);V(null,se,C,N,T,L,O),w.el=se.el}if(dt&&me(dt,L),!De&&(Q=at&&at.onVnodeMounted)){const se=w;me(()=>ze(Q,yt,se),L)}(w.shapeFlag&256||yt&&Lr(yt.vnode)&&yt.vnode.shapeFlag&256)&&T.a&&me(T.a,L),T.isMounted=!0,w=C=N=null}};T.scope.on();const H=T.effect=new cd(K);T.scope.off();const U=T.update=H.run.bind(H),rt=T.job=H.runIfDirty.bind(H);rt.i=T,rt.id=T.uid,H.scheduler=()=>zl(rt),sr(T,!0),U()},_t=(T,w,C)=>{w.component=T;const N=T.vnode.props;T.vnode=w,T.next=null,Cy(T,w.props,N,C),xy(T,w.children,C),Wn(),Ou(T),Qn()},gt=(T,w,C,N,L,O,G,K,H=!1)=>{const U=T&&T.children,rt=T?T.shapeFlag:0,Q=w.children,{patchFlag:Z,shapeFlag:at}=w;if(Z>0){if(Z&128){Me(U,Q,C,N,L,O,G,K,H);return}else if(Z&256){Ae(U,Q,C,N,L,O,G,K,H);return}}at&8?(rt&16&&Ee(U,L,O),Q!==U&&f(C,Q)):rt&16?at&16?Me(U,Q,C,N,L,O,G,K,H):Ee(U,L,O,!0):(rt&8&&f(C,""),at&16&&v(Q,C,N,L,O,G,K,H))},Ae=(T,w,C,N,L,O,G,K,H)=>{T=T||xr,w=w||xr;const U=T.length,rt=w.length,Q=Math.min(U,rt);let Z;for(Z=0;Z<Q;Z++){const at=w[Z]=H?Pn(w[Z]):Qe(w[Z]);V(T[Z],at,C,null,L,O,G,K,H)}U>rt?Ee(T,L,O,!0,!1,Q):v(w,C,N,L,O,G,K,H,Q)},Me=(T,w,C,N,L,O,G,K,H)=>{let U=0;const rt=w.length;let Q=T.length-1,Z=rt-1;for(;U<=Q&&U<=Z;){const at=T[U],st=w[U]=H?Pn(w[U]):Qe(w[U]);if(cr(at,st))V(at,st,C,null,L,O,G,K,H);else break;U++}for(;U<=Q&&U<=Z;){const at=T[Q],st=w[Z]=H?Pn(w[Z]):Qe(w[Z]);if(cr(at,st))V(at,st,C,null,L,O,G,K,H);else break;Q--,Z--}if(U>Q){if(U<=Z){const at=Z+1,st=at<rt?w[at].el:N;for(;U<=Z;)V(null,w[U]=H?Pn(w[U]):Qe(w[U]),C,st,L,O,G,K,H),U++}}else if(U>Z)for(;U<=Q;)Ot(T[U],L,O,!0),U++;else{const at=U,st=U,dt=new Map;for(U=st;U<=Z;U++){const Xt=w[U]=H?Pn(w[U]):Qe(w[U]);Xt.key!=null&&dt.set(Xt.key,U)}let yt,re=0;const Qt=Z-st+1;let De=!1,se=0;const Tn=new Array(Qt);for(U=0;U<Qt;U++)Tn[U]=0;for(U=at;U<=Q;U++){const Xt=T[U];if(re>=Qt){Ot(Xt,L,O,!0);continue}let xe;if(Xt.key!=null)xe=dt.get(Xt.key);else for(yt=st;yt<=Z;yt++)if(Tn[yt-st]===0&&cr(Xt,w[yt])){xe=yt;break}xe===void 0?Ot(Xt,L,O,!0):(Tn[xe-st]=U+1,xe>=se?se=xe:De=!0,V(Xt,w[xe],C,null,L,O,G,K,H),re++)}const ns=De?My(Tn):xr;for(yt=ns.length-1,U=Qt-1;U>=0;U--){const Xt=st+U,xe=w[Xt],ui=Xt+1<rt?w[Xt+1].el:N;Tn[U]===0?V(null,xe,C,ui,L,O,G,K,H):De&&(yt<0||U!==ns[yt]?Ve(xe,C,ui,2):yt--)}}},Ve=(T,w,C,N,L=null)=>{const{el:O,type:G,transition:K,children:H,shapeFlag:U}=T;if(U&6){Ve(T.component.subTree,w,C,N);return}if(U&128){T.suspense.move(w,C,N);return}if(U&64){G.move(T,w,C,J);return}if(G===Gt){r(O,w,C);for(let Q=0;Q<H.length;Q++)Ve(H[Q],w,C,N);r(T.anchor,w,C);return}if(G===Ra){j(T,w,C);return}if(N!==2&&U&1&&K)if(N===0)K.beforeEnter(O),r(O,w,C),me(()=>K.enter(O),L);else{const{leave:Q,delayLeave:Z,afterLeave:at}=K,st=()=>r(O,w,C),dt=()=>{Q(O,()=>{st(),at&&at()})};Z?Z(O,st,dt):dt()}else r(O,w,C)},Ot=(T,w,C,N=!1,L=!1)=>{const{type:O,props:G,ref:K,children:H,dynamicChildren:U,shapeFlag:rt,patchFlag:Q,dirs:Z,cacheIndex:at}=T;if(Q===-2&&(L=!1),K!=null&&Zi(K,null,C,T,!0),at!=null&&(w.renderCache[at]=void 0),rt&256){w.ctx.deactivate(T);return}const st=rt&1&&Z,dt=!Lr(T);let yt;if(dt&&(yt=G&&G.onVnodeBeforeUnmount)&&ze(yt,w,T),rt&6)Ke(T.component,C,N);else{if(rt&128){T.suspense.unmount(C,N);return}st&&rr(T,null,w,"beforeUnmount"),rt&64?T.type.remove(T,w,C,J,N):U&&!U.hasOnce&&(O!==Gt||Q>0&&Q&64)?Ee(U,w,C,!1,!0):(O===Gt&&Q&384||!L&&rt&16)&&Ee(H,w,C),N&&Mt(T)}(dt&&(yt=G&&G.onVnodeUnmounted)||st)&&me(()=>{yt&&ze(yt,w,T),st&&rr(T,null,w,"unmounted")},C)},Mt=T=>{const{type:w,el:C,anchor:N,transition:L}=T;if(w===Gt){En(C,N);return}if(w===Ra){q(T);return}const O=()=>{s(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(T.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:K}=L,H=()=>G(C,O);K?K(T.el,O,H):H()}else O()},En=(T,w)=>{let C;for(;T!==w;)C=m(T),s(T),T=C;s(w)},Ke=(T,w,C)=>{const{bum:N,scope:L,job:O,subTree:G,um:K,m:H,a:U}=T;Ku(H),Ku(U),N&&Li(N),L.stop(),O&&(O.flags|=8,Ot(G,T,w,C)),K&&me(K,w),me(()=>{T.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ee=(T,w,C,N=!1,L=!1,O=0)=>{for(let G=O;G<T.length;G++)Ot(T[G],w,C,N,L)},k=T=>{if(T.shapeFlag&6)return k(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const w=m(T.anchor||T.el),C=w&&w[kd];return C?m(C):w};let X=!1;const W=(T,w,C)=>{T==null?w._vnode&&Ot(w._vnode,null,null,!0):V(w._vnode||null,T,w,null,null,null,C),w._vnode=T,X||(X=!0,Ou(),Vd(),X=!1)},J={p:V,um:Ot,m:Ve,r:Mt,mt:St,mc:v,pc:gt,pbc:I,n:k,o:e};return{render:W,hydrate:void 0,createApp:Ry(W)}}function ba({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function sr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Oy(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ql(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Pn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ql(a,l)),l.type===xo&&(l.el=a.el)}}function My(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function ap(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ap(t)}function Ku(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ly=Symbol.for("v-scx"),Fy=()=>pn(Ly);function Uy(e,t){return Xl(e,null,t)}function Bi(e,t,n){return Xl(e,t,n)}function Xl(e,t,n=Pt){const{immediate:r,deep:s,flush:i,once:a}=n,l=Wt({},n),c=t&&r||!t&&i!=="post";let h;if(qs){if(i==="sync"){const _=Fy();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Ye,_.resume=Ye,_.pause=Ye,_}}const f=fe;l.call=(_,S,V)=>qe(_,f,S,V);let p=!1;i==="post"?l.scheduler=_=>{me(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,S)=>{S?_():zl(_)}),l.augmentJob=_=>{t&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=J_(e,t,l);return qs&&(h?h.push(m):c&&m()),m}function By(e,t,n){const r=this.proxy,s=Ut(e)?e.includes(".")?lp(r,e):()=>r[e]:e.bind(r,r);let i;ft(t)?i=t:(i=t.handler,n=t);const a=si(this),l=Xl(s,i.bind(r),n);return a(),l}function lp(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const $y=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fn(t)}Modifiers`]||e[`${Gn(t)}Modifiers`];function jy(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Pt;let s=n;const i=t.startsWith("update:"),a=i&&$y(r,t.slice(7));a&&(a.trim&&(s=n.map(f=>Ut(f)?f.trim():f)),a.number&&(s=n.map(Qi)));let l,c=r[l=ya(t)]||r[l=ya(Fn(t))];!c&&i&&(c=r[l=ya(Gn(t))]),c&&qe(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,qe(h,e,6,s)}}function cp(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ft(e)){const c=h=>{const f=cp(h,t,!0);f&&(l=!0,Wt(a,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Vt(e)&&r.set(e,null),null):(it(i)?i.forEach(c=>a[c]=null):Wt(a,i),Vt(e)&&r.set(e,a),a)}function Do(e,t){return!e||!To(t)?!1:(t=t.slice(2).replace(/Once$/,""),bt(e,t[0].toLowerCase()+t.slice(1))||bt(e,Gn(t))||bt(e,t))}function zu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:V}=e,x=Ji(e);let $,B;try{if(n.shapeFlag&4){const q=s||r,ot=q;$=Qe(h.call(ot,q,f,p,_,m,S)),B=l}else{const q=t;$=Qe(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),B=t.props?l:qy(l)}}catch(q){Ps.length=0,Co(q,e,1),$=ve(ye)}let j=$;if(B&&V!==!1){const q=Object.keys(B),{shapeFlag:ot}=j;q.length&&ot&7&&(i&&q.some(kl)&&(B=Hy(B,i)),j=Un(j,B,!1,!0))}return n.dirs&&(j=Un(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Bs(j,n.transition),$=j,Ji(x),$}const qy=e=>{let t;for(const n in e)(n==="class"||n==="style"||To(n))&&((t||(t={}))[n]=e[n]);return t},Hy=(e,t)=>{const n={};for(const r in e)(!kl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ky(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gu(r,a,h):!!a;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!Do(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Gu(r,a,h):!0:!!a;return!1}function Gu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Do(n,i))return!0}return!1}function zy({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const up=e=>e.__isSuspense;function Gy(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):ey(e)}const Gt=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Ps=[];let Se=null;function Zt(e=!1){Ps.push(Se=e?null:[])}function Wy(){Ps.pop(),Se=Ps[Ps.length-1]||null}let $s=1;function Wu(e,t=!1){$s+=e,e<0&&Se&&t&&(Se.hasOnce=!0)}function hp(e){return e.dynamicChildren=$s>0?Se||xr:null,Wy(),$s>0&&Se&&Se.push(e),e}function Ue(e,t,n,r,s,i){return hp(ht(e,t,n,r,s,i,!0))}function $r(e,t,n,r,s){return hp(ve(e,t,n,r,s,!0))}function js(e){return e?e.__v_isVNode===!0:!1}function cr(e,t){return e.type===t.type&&e.key===t.key}const fp=({key:e})=>e??null,$i=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ut(e)||de(e)||ft(e)?{i:ee,r:e,k:t,f:!!n}:e:null);function ht(e,t=null,n=null,r=0,s=null,i=e===Gt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fp(t),ref:t&&$i(t),scopeId:xd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ee};return l?(Yl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ut(n)?8:16),$s>0&&!a&&Se&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Se.push(c),c}const ve=Qy;function Qy(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===_y)&&(e=ye),js(e)){const l=Un(e,t,!0);return n&&Yl(l,n),$s>0&&!i&&Se&&(l.shapeFlag&6?Se[Se.indexOf(e)]=l:Se.push(l)),l.patchFlag=-2,l}if(ov(e)&&(e=e.__vccOpts),t){t=Xy(t);let{class:l,style:c}=t;l&&!Ut(l)&&(t.class=Ll(l)),Vt(c)&&(Hl(c)&&!it(c)&&(c=Wt({},c)),t.style=Ml(c))}const a=Ut(e)?1:up(e)?128:Nd(e)?64:Vt(e)?4:ft(e)?2:0;return ht(e,t,n,r,s,a,i,!0)}function Xy(e){return e?Hl(e)||tp(e)?Wt({},e):e:null}function Un(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?Yy(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&fp(h),ref:t&&t.ref?n&&i?it(i)?i.concat($i(t)):[i,$i(t)]:$i(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Gt?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Un(e.ssContent),ssFallback:e.ssFallback&&Un(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Bs(f,c.clone(f)),f}function eo(e=" ",t=0){return ve(xo,null,e,t)}function dp(e="",t=!1){return t?(Zt(),$r(ye,null,e)):ve(ye,null,e)}function Qe(e){return e==null||typeof e=="boolean"?ve(ye):it(e)?ve(Gt,null,e.slice()):js(e)?Pn(e):ve(xo,null,String(e))}function Pn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Un(e)}function Yl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Yl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!tp(t)?t._ctx=ee:s===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ft(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),r&64?(n=16,t=[eo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ll([t.class,r.class]));else if(s==="style")t.style=Ml([t.style,r.style]);else if(To(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function ze(e,t,n,r=null){qe(e,t,7,[n,r])}const Jy=Yd();let Zy=0;function tv(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Jy,i={uid:Zy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(r,s),emitsOptions:cp(r,s),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:r.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jy.bind(null,i),e.ce&&e.ce(i),i}let fe=null;const ev=()=>fe||ee;let no,nl;{const e=Ao(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};no=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),nl=t("__VUE_SSR_SETTERS__",n=>qs=n)}const si=e=>{const t=fe;return no(e),e.scope.on(),()=>{e.scope.off(),no(t)}},Qu=()=>{fe&&fe.scope.off(),no(null)};function pp(e){return e.vnode.shapeFlag&4}let qs=!1;function nv(e,t=!1,n=!1){t&&nl(t);const{props:r,children:s}=e.vnode,i=pp(e);Sy(e,r,i,t),Dy(e,s,n);const a=i?rv(e,t):void 0;return t&&nl(!1),a}function rv(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vy);const{setup:r}=n;if(r){Wn();const s=e.setupContext=r.length>1?iv(e):null,i=si(e),a=ri(r,e,0,[e.props,s]),l=td(a);if(Qn(),i(),(l||e.sp)&&!Lr(e)&&qd(e),l){if(a.then(Qu,Qu),t)return a.then(c=>{Xu(e,c)}).catch(c=>{Co(c,e,0)});e.asyncDep=a}else Xu(e,a)}else gp(e)}function Xu(e,t,n){ft(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Vt(t)&&(e.setupState=Sd(t)),gp(e)}function gp(e,t,n){const r=e.type;e.render||(e.render=r.render||Ye);{const s=si(e);Wn();try{Ey(e)}finally{Qn(),s()}}}const sv={get(e,t){return ce(e,"get",""),e[t]}};function iv(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sv),slots:e.slots,emit:e.emit,expose:t}}function ko(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Sd(bd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cs)return Cs[n](e)},has(t,n){return n in t||n in Cs}})):e.proxy}function ov(e){return ft(e)&&"__vccOpts"in e}const Be=(e,t)=>X_(e,t,qs);function Jl(e,t,n){const r=arguments.length;return r===2?Vt(t)&&!it(t)?js(t)?ve(e,null,[t]):ve(e,t):ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),ve(e,t,n))}const av="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{rl=Yu.createPolicy("vue",{createHTML:e=>e})}catch{}const mp=rl?e=>rl.createHTML(e):e=>e,lv="http://www.w3.org/2000/svg",cv="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Ju=hn&&hn.createElement("template"),uv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?hn.createElementNS(lv,e):t==="mathml"?hn.createElementNS(cv,e):n?hn.createElement(e,{is:n}):hn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>hn.createTextNode(e),createComment:e=>hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ju.innerHTML=mp(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Ju.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bn="transition",_s="animation",Hs=Symbol("_vtc"),_p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hv=Wt({},Ld,_p),fv=e=>(e.displayName="Transition",e.props=hv,e),dv=fv((e,{slots:t})=>Jl(oy,pv(e),t)),ir=(e,t=[])=>{it(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zu=e=>e?it(e)?e.some(t=>t.length>1):e.length>1:!1;function pv(e){const t={};for(const A in e)A in _p||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,S=gv(s),V=S&&S[0],x=S&&S[1],{onBeforeEnter:$,onEnter:B,onEnterCancelled:j,onLeave:q,onLeaveCancelled:ot,onBeforeAppear:et=$,onAppear:b=B,onAppearCancelled:v=j}=t,y=(A,E,St,jt)=>{A._enterCancelled=jt,or(A,E?f:l),or(A,E?h:a),St&&St()},I=(A,E)=>{A._isLeaving=!1,or(A,p),or(A,_),or(A,m),E&&E()},R=A=>(E,St)=>{const jt=A?b:B,Nt=()=>y(E,A,St);ir(jt,[E,Nt]),th(()=>{or(E,A?c:i),cn(E,A?f:l),Zu(jt)||eh(E,r,V,Nt)})};return Wt(t,{onBeforeEnter(A){ir($,[A]),cn(A,i),cn(A,a)},onBeforeAppear(A){ir(et,[A]),cn(A,c),cn(A,h)},onEnter:R(!1),onAppear:R(!0),onLeave(A,E){A._isLeaving=!0;const St=()=>I(A,E);cn(A,p),A._enterCancelled?(cn(A,m),sh()):(sh(),cn(A,m)),th(()=>{A._isLeaving&&(or(A,p),cn(A,_),Zu(q)||eh(A,r,x,St))}),ir(q,[A,St])},onEnterCancelled(A){y(A,!1,void 0,!0),ir(j,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),ir(v,[A])},onLeaveCancelled(A){I(A),ir(ot,[A])}})}function gv(e){if(e==null)return null;if(Vt(e))return[Sa(e.enter),Sa(e.leave)];{const t=Sa(e);return[t,t]}}function Sa(e){return __(e)}function cn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Hs]||(e[Hs]=new Set)).add(t)}function or(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Hs];n&&(n.delete(t),n.size||(e[Hs]=void 0))}function th(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let mv=0;function eh(e,t,n,r){const s=e._endId=++mv,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=_v(e,t);if(!a)return r();const h=a+"end";let f=0;const p=()=>{e.removeEventListener(h,m),i()},m=_=>{_.target===e&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),e.addEventListener(h,m)}function _v(e,t){const n=window.getComputedStyle(e),r=S=>(n[S]||"").split(", "),s=r(`${bn}Delay`),i=r(`${bn}Duration`),a=nh(s,i),l=r(`${_s}Delay`),c=r(`${_s}Duration`),h=nh(l,c);let f=null,p=0,m=0;t===bn?a>0&&(f=bn,p=a,m=i.length):t===_s?h>0&&(f=_s,p=h,m=c.length):(p=Math.max(a,h),f=p>0?a>h?bn:_s:null,m=f?f===bn?i.length:c.length:0);const _=f===bn&&/\b(transform|all)(,|$)/.test(r(`${bn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function nh(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>rh(n)+rh(e[r])))}function rh(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function sh(){return document.body.offsetHeight}function yv(e,t,n){const r=e[Hs];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ih=Symbol("_vod"),vv=Symbol("_vsh"),Ev=Symbol(""),Tv=/(^|;)\s*display\s*:/;function wv(e,t,n){const r=e.style,s=Ut(n);let i=!1;if(n&&!s){if(t)if(Ut(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ji(r,l,"")}else for(const a in t)n[a]==null&&ji(r,a,"");for(const a in n)a==="display"&&(i=!0),ji(r,a,n[a])}else if(s){if(t!==n){const a=r[Ev];a&&(n+=";"+a),r.cssText=n,i=Tv.test(n)}}else t&&e.removeAttribute("style");ih in e&&(e[ih]=i?r.display:"",e[vv]&&(r.display="none"))}const oh=/\s*!important$/;function ji(e,t,n){if(it(n))n.forEach(r=>ji(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Iv(e,t);oh.test(n)?e.setProperty(Gn(r),n.replace(oh,""),"important"):e[r]=n}}const ah=["Webkit","Moz","ms"],Ca={};function Iv(e,t){const n=Ca[t];if(n)return n;let r=Fn(t);if(r!=="filter"&&r in e)return Ca[t]=r;r=rd(r);for(let s=0;s<ah.length;s++){const i=ah[s]+r;if(i in e)return Ca[t]=i}return t}const lh="http://www.w3.org/1999/xlink";function ch(e,t,n,r,s,i=I_(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(lh,t.slice(6,t.length)):e.setAttributeNS(lh,t,n):n==null||i&&!id(n)?e.removeAttribute(t):e.setAttribute(t,i?"":je(n)?String(n):n)}function uh(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?mp(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=id(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function ur(e,t,n,r){e.addEventListener(t,n,r)}function Av(e,t,n,r){e.removeEventListener(t,n,r)}const hh=Symbol("_vei");function bv(e,t,n,r,s=null){const i=e[hh]||(e[hh]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Rv(t);if(r){const h=i[t]=Pv(r,s);ur(e,l,h,c)}else a&&(Av(e,l,a,c),i[t]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function Rv(e){let t;if(fh.test(e)){t={};let r;for(;r=e.match(fh);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let Pa=0;const Sv=Promise.resolve(),Cv=()=>Pa||(Sv.then(()=>Pa=0),Pa=Date.now());function Pv(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Vv(r,n.value),t,5,[r])};return n.value=e,n.attached=Cv(),n}function Vv(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const dh=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dv=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?yv(e,r,a):t==="style"?wv(e,n,r):To(t)?kl(t)||bv(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xv(e,t,r,a))?(uh(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ch(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ut(r))?uh(e,Fn(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ch(e,t,r,a))};function xv(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&dh(t)&&ft(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dh(t)&&Ut(n)?!1:t in e}const ro=e=>{const t=e.props["onUpdate:modelValue"]||!1;return it(t)?n=>Li(t,n):t};function kv(e){e.target.composing=!0}function ph(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ur=Symbol("_assign"),Va={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ur]=ro(s);const i=r||s.props&&s.props.type==="number";ur(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Qi(l)),e[Ur](l)}),n&&ur(e,"change",()=>{e.value=e.value.trim()}),t||(ur(e,"compositionstart",kv),ur(e,"compositionend",ph),ur(e,"change",ph))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(e[Ur]=ro(a),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?Qi(e.value):e.value,c=t??"";l!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},gh={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=wo(t);ur(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Qi(so(a)):so(a));e[Ur](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Kl(()=>{e._assigning=!1})}),e[Ur]=ro(r)},mounted(e,{value:t}){mh(e,t)},beforeUpdate(e,t,n){e[Ur]=ro(n)},updated(e,{value:t}){e._assigning||mh(e,t)}};function mh(e,t){const n=e.multiple,r=it(t);if(!(n&&!r&&!wo(t))){for(let s=0,i=e.options.length;s<i;s++){const a=e.options[s],l=so(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=t.some(h=>String(h)===String(l)):a.selected=b_(t,l)>-1}else a.selected=t.has(l);else if(bo(so(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function so(e){return"_value"in e?e._value:e.value}const Nv=["ctrl","shift","alt","meta"],Ov={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nv.some(n=>e[`${n}Key`]&&!t.includes(n))},sl=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=Ov[t[a]];if(l&&l(s,t))return}return e(s,...i)})},Mv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lv=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Gn(s.key);if(t.some(a=>a===i||Mv[a]===i))return e(s)})},Fv=Wt({patchProp:Dv},uv);let _h;function Uv(){return _h||(_h=ky(Fv))}const Bv=(...e)=>{const t=Uv().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=jv(r);if(!s)return;const i=t._component;!ft(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,$v(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function $v(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jv(e){return Ut(e)?document.querySelector(e):e}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const qv=Symbol();var yh;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(yh||(yh={}));function Hv(){const e=R_(!0),t=e.run(()=>Fe({}));let n=[],r=[];const s=bd({install(i){s._a=i,i.provide(qv,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Kv={class:"text-xl font-semibold"},zv={class:"mt-2 flex gap-2"},Gv={class:"text-md rounded-lg px-2 font-bold text-pink-800 outline outline-pink-900"},Wv={class:"text-md rounded-full px-2 font-semibold text-pink-600 outline outline-pink-900"},Qv={class:"mt-2 truncate"},Xv={key:0,class:"mt-2 flex flex-wrap gap-2"},Yv={__name:"BirthdayCard",props:{birthday:Object},setup(e){const t=n=>n?new Date(2e3,n-1).toLocaleString("default",{month:"long"}):"";return(n,r)=>(Zt(),Ue("div",{class:"m-2 cursor-pointer rounded-lg bg-white p-4 shadow-md outline outline-transparent transition-all duration-150 ease-in-out hover:bg-pink-50 hover:shadow-lg hover:outline-pink-300 active:bg-pink-100 active:shadow-lg",onMousedown:r[0]||(r[0]=sl(()=>{},["prevent"]))},[ht("h3",Kv,Xe(e.birthday.name),1),ht("div",zv,[ht("p",Gv,Xe(t(e.birthday.birthMonth)),1),ht("p",Wv,Xe(e.birthday.birthDay),1)]),ht("p",Qv,Xe(e.birthday.notes),1),e.birthday.tags&&e.birthday.tags.length?(Zt(),Ue("div",Xv,[(Zt(!0),Ue(Gt,null,Ss(e.birthday.tags,(s,i)=>(Zt(),Ue("span",{key:i,class:"rounded-full bg-pink-200 px-2 py-1 text-xs text-pink-800"}," #"+Xe(s),1))),128))])):dp("",!0)],32))}},Jv=()=>{};var vh={};/**
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
 */const yp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Zv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;c||(_=64,a||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new tE;const m=i<<2|l>>4;if(r.push(m),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eE=function(e){const t=yp(e);return vp.encodeByteArray(t,!0)},io=function(e){return eE(e).replace(/\./g,"")},nE=function(e){try{return vp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function rE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sE=()=>rE().__FIREBASE_DEFAULTS__,iE=()=>{if(typeof process>"u"||typeof vh>"u")return;const e=vh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&nE(e[1]);return t&&JSON.parse(t)},Zl=()=>{try{return Jv()||sE()||iE()||oE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},aE=e=>{var t,n;return(n=(t=Zl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},lE=e=>{const t=aE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ep=()=>{var e;return(e=Zl())===null||e===void 0?void 0:e.config};/**
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
 */class cE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function uE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[io(JSON.stringify(n)),io(JSON.stringify(a)),""].join(".")}/**
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
 */function hE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fE(){var e;const t=(e=Zl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dE(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function pE(){return!fE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tp(){try{return typeof indexedDB=="object"}catch{return!1}}function wp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function gE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mE="FirebaseError";class Xn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mE,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?_E(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Xn(s,l,r)}}function _E(e,t){return e.replace(yE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yE=/\{\$([^}]+)}/g;function Ks(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Eh(i)&&Eh(a)){if(!Ks(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Eh(e){return e!==null&&typeof e=="object"}/**
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
 */const vE=1e3,EE=2,TE=4*60*60*1e3,wE=.5;function Th(e,t=vE,n=EE){const r=t*Math.pow(n,e),s=Math.round(wE*r*(Math.random()-.5)*2);return Math.min(TE,r+s)}/**
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
 */function nn(e){return e&&e._delegate?e._delegate:e}class gn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class IE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bE(t))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=lr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=lr){return this.instances.has(t)}getOptions(t=lr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=lr){return this.component?this.component.multipleInstances?t:lr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AE(e){return e===lr?void 0:e}function bE(e){return e.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new IE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Et;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Et||(Et={}));const SE={debug:Et.DEBUG,verbose:Et.VERBOSE,info:Et.INFO,warn:Et.WARN,error:Et.ERROR,silent:Et.SILENT},CE=Et.INFO,PE={[Et.DEBUG]:"log",[Et.VERBOSE]:"log",[Et.INFO]:"info",[Et.WARN]:"warn",[Et.ERROR]:"error"},VE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=PE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tc{constructor(t){this.name=t,this._logLevel=CE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?SE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Et.DEBUG,...t),this._logHandler(this,Et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Et.VERBOSE,...t),this._logHandler(this,Et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Et.INFO,...t),this._logHandler(this,Et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Et.WARN,...t),this._logHandler(this,Et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Et.ERROR,...t),this._logHandler(this,Et.ERROR,...t)}}const DE=(e,t)=>t.some(n=>e instanceof n);let wh,Ih;function xE(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kE(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ip=new WeakMap,il=new WeakMap,Ap=new WeakMap,Da=new WeakMap,ec=new WeakMap;function NE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(kn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ip.set(n,e)}).catch(()=>{}),ec.set(t,e),t}function OE(e){if(il.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});il.set(e,t)}let ol={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return il.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ap.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ME(e){ol=e(ol)}function LE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(xa(this),t,...n);return Ap.set(r,t.sort?t.sort():[t]),kn(r)}:kE().includes(e)?function(...t){return e.apply(xa(this),t),kn(Ip.get(this))}:function(...t){return kn(e.apply(xa(this),t))}}function FE(e){return typeof e=="function"?LE(e):(e instanceof IDBTransaction&&OE(e),DE(e,xE())?new Proxy(e,ol):e)}function kn(e){if(e instanceof IDBRequest)return NE(e);if(Da.has(e))return Da.get(e);const t=FE(e);return t!==e&&(Da.set(e,t),ec.set(t,e)),t}const xa=e=>ec.get(e);function bp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=kn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(kn(a.result),c.oldVersion,c.newVersion,kn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const UE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],ka=new Map;function Ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ka.get(t))return ka.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=BE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ka.set(t,i),i}ME(e=>({...e,get:(t,n,r)=>Ah(t,n)||e.get(t,n,r),has:(t,n)=>!!Ah(t,n)||e.has(t,n)}));/**
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
 */class $E{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const al="@firebase/app",bh="0.11.4";/**
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
 */const mn=new tc("@firebase/app"),qE="@firebase/app-compat",HE="@firebase/analytics-compat",KE="@firebase/analytics",zE="@firebase/app-check-compat",GE="@firebase/app-check",WE="@firebase/auth",QE="@firebase/auth-compat",XE="@firebase/database",YE="@firebase/data-connect",JE="@firebase/database-compat",ZE="@firebase/functions",tT="@firebase/functions-compat",eT="@firebase/installations",nT="@firebase/installations-compat",rT="@firebase/messaging",sT="@firebase/messaging-compat",iT="@firebase/performance",oT="@firebase/performance-compat",aT="@firebase/remote-config",lT="@firebase/remote-config-compat",cT="@firebase/storage",uT="@firebase/storage-compat",hT="@firebase/firestore",fT="@firebase/vertexai",dT="@firebase/firestore-compat",pT="firebase",gT="11.6.0";/**
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
 */const ll="[DEFAULT]",mT={[al]:"fire-core",[qE]:"fire-core-compat",[KE]:"fire-analytics",[HE]:"fire-analytics-compat",[GE]:"fire-app-check",[zE]:"fire-app-check-compat",[WE]:"fire-auth",[QE]:"fire-auth-compat",[XE]:"fire-rtdb",[YE]:"fire-data-connect",[JE]:"fire-rtdb-compat",[ZE]:"fire-fn",[tT]:"fire-fn-compat",[eT]:"fire-iid",[nT]:"fire-iid-compat",[rT]:"fire-fcm",[sT]:"fire-fcm-compat",[iT]:"fire-perf",[oT]:"fire-perf-compat",[aT]:"fire-rc",[lT]:"fire-rc-compat",[cT]:"fire-gcs",[uT]:"fire-gcs-compat",[hT]:"fire-fst",[dT]:"fire-fst-compat",[fT]:"fire-vertex","fire-js":"fire-js",[pT]:"fire-js-all"};/**
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
 */const oo=new Map,_T=new Map,cl=new Map;function Rh(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bn(e){const t=e.name;if(cl.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;cl.set(t,e);for(const n of oo.values())Rh(n,e);for(const n of _T.values())Rh(n,e);return!0}function ii(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function yT(e){return e==null?!1:e.settings!==void 0}/**
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
 */const vT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new No("app","Firebase",vT);/**
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
 */class ET{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const TT=gT;function Rp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ll,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(n||(n=Ep()),!n)throw Nn.create("no-options");const i=oo.get(s);if(i){if(Ks(n,i.options)&&Ks(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new RE(s);for(const c of cl.values())a.addComponent(c);const l=new ET(n,r,a);return oo.set(s,l),l}function Sp(e=ll){const t=oo.get(e);if(!t&&e===ll&&Ep())return Rp();if(!t)throw Nn.create("no-app",{appName:e});return t}function Je(e,t,n){var r;let s=(r=mT[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}Bn(new gn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const wT="firebase-heartbeat-database",IT=1,zs="firebase-heartbeat-store";let Na=null;function Cp(){return Na||(Na=bp(wT,IT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nn.create("idb-open",{originalErrorMessage:e.message})})),Na}async function AT(e){try{const n=(await Cp()).transaction(zs),r=await n.objectStore(zs).get(Pp(e));return await n.done,r}catch(t){if(t instanceof Xn)mn.warn(t.message);else{const n=Nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(n.message)}}}async function Sh(e,t){try{const r=(await Cp()).transaction(zs,"readwrite");await r.objectStore(zs).put(t,Pp(e)),await r.done}catch(n){if(n instanceof Xn)mn.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Pp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const bT=1024,RT=30;class ST{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ch();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RT){const a=VT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ch(),{heartbeatsToSend:r,unsentEntries:s}=CT(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function Ch(){return new Date().toISOString().substring(0,10)}function CT(e,t=bT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ph(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ph(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tp()?wp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ph(e){return io(JSON.stringify({version:2,heartbeats:e})).length}function VT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function DT(e){Bn(new gn("platform-logger",t=>new $E(t),"PRIVATE")),Bn(new gn("heartbeat",t=>new ST(t),"PRIVATE")),Je(al,bh,e),Je(al,bh,"esm2017"),Je("fire-js","")}DT("");var xT="firebase",kT="11.6.0";/**
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
 */Je(xT,kT,"app");const Vp="@firebase/installations",nc="0.6.13";/**
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
 */const Dp=1e4,xp=`w:${nc}`,kp="FIS_v2",NT="https://firebaseinstallations.googleapis.com/v1",OT=60*60*1e3,MT="installations",LT="Installations";/**
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
 */const FT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gr=new No(MT,LT,FT);function Np(e){return e instanceof Xn&&e.code.includes("request-failed")}/**
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
 */function Op({projectId:e}){return`${NT}/projects/${e}/installations`}function Mp(e){return{token:e.token,requestStatus:2,expiresIn:BT(e.expiresIn),creationTime:Date.now()}}async function Lp(e,t){const r=(await t.json()).error;return gr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function UT(e,{refreshToken:t}){const n=Fp(e);return n.append("Authorization",$T(t)),n}async function Up(e){const t=await e();return t.status>=500&&t.status<600?e():t}function BT(e){return Number(e.replace("s","000"))}function $T(e){return`${kp} ${e}`}/**
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
 */async function jT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Op(e),s=Fp(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:kp,appId:e.appId,sdkVersion:xp},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Up(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Mp(h.authToken)}}else throw await Lp("Create Installation",c)}/**
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
 */function Bp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function qT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HT=/^[cdef][\w-]{21}$/,ul="";function KT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=zT(e);return HT.test(n)?n:ul}catch{return ul}}function zT(e){return qT(e).substr(0,22)}/**
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
 */function Oo(e){return`${e.appName}!${e.appId}`}/**
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
 */const $p=new Map;function jp(e,t){const n=Oo(e);qp(n,t),GT(n,t)}function qp(e,t){const n=$p.get(e);if(n)for(const r of n)r(t)}function GT(e,t){const n=WT();n&&n.postMessage({key:e,fid:t}),QT()}let hr=null;function WT(){return!hr&&"BroadcastChannel"in self&&(hr=new BroadcastChannel("[Firebase] FID Change"),hr.onmessage=e=>{qp(e.data.key,e.data.fid)}),hr}function QT(){$p.size===0&&hr&&(hr.close(),hr=null)}/**
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
 */const XT="firebase-installations-database",YT=1,mr="firebase-installations-store";let Oa=null;function rc(){return Oa||(Oa=bp(XT,YT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mr)}}})),Oa}async function ao(e,t){const n=Oo(e),s=(await rc()).transaction(mr,"readwrite"),i=s.objectStore(mr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&jp(e,t.fid),t}async function Hp(e){const t=Oo(e),r=(await rc()).transaction(mr,"readwrite");await r.objectStore(mr).delete(t),await r.done}async function Mo(e,t){const n=Oo(e),s=(await rc()).transaction(mr,"readwrite"),i=s.objectStore(mr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&jp(e,l.fid),l}/**
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
 */async function sc(e){let t;const n=await Mo(e.appConfig,r=>{const s=JT(r),i=ZT(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===ul?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function JT(e){const t=e||{fid:KT(),registrationStatus:0};return Kp(t)}function ZT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=tw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ew(e)}:{installationEntry:t}}async function tw(e,t){try{const n=await jT(e,t);return ao(e.appConfig,n)}catch(n){throw Np(n)&&n.customData.serverCode===409?await Hp(e.appConfig):await ao(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ew(e){let t=await Vh(e.appConfig);for(;t.registrationStatus===1;)await Bp(100),t=await Vh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sc(e);return r||n}return t}function Vh(e){return Mo(e,t=>{if(!t)throw gr.create("installation-not-found");return Kp(t)})}function Kp(e){return nw(e)?{fid:e.fid,registrationStatus:0}:e}function nw(e){return e.registrationStatus===1&&e.registrationTime+Dp<Date.now()}/**
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
 */async function rw({appConfig:e,heartbeatServiceProvider:t},n){const r=sw(e,n),s=UT(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:xp,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Up(()=>fetch(r,l));if(c.ok){const h=await c.json();return Mp(h)}else throw await Lp("Generate Auth Token",c)}function sw(e,{fid:t}){return`${Op(e)}/${t}/authTokens:generate`}/**
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
 */async function ic(e,t=!1){let n;const r=await Mo(e.appConfig,i=>{if(!zp(i))throw gr.create("not-registered");const a=i.authToken;if(!t&&aw(a))return i;if(a.requestStatus===1)return n=iw(e,t),i;{if(!navigator.onLine)throw gr.create("app-offline");const l=cw(i);return n=ow(e,l),l}});return n?await n:r.authToken}async function iw(e,t){let n=await Dh(e.appConfig);for(;n.authToken.requestStatus===1;)await Bp(100),n=await Dh(e.appConfig);const r=n.authToken;return r.requestStatus===0?ic(e,t):r}function Dh(e){return Mo(e,t=>{if(!zp(t))throw gr.create("not-registered");const n=t.authToken;return uw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ow(e,t){try{const n=await rw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ao(e.appConfig,r),n}catch(n){if(Np(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ao(e.appConfig,r)}throw n}}function zp(e){return e!==void 0&&e.registrationStatus===2}function aw(e){return e.requestStatus===2&&!lw(e)}function lw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+OT}function cw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function uw(e){return e.requestStatus===1&&e.requestTime+Dp<Date.now()}/**
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
 */async function hw(e){const t=e,{installationEntry:n,registrationPromise:r}=await sc(t);return r?r.catch(console.error):ic(t).catch(console.error),n.fid}/**
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
 */async function fw(e,t=!1){const n=e;return await dw(n),(await ic(n,t)).token}async function dw(e){const{registrationPromise:t}=await sc(e);t&&await t}/**
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
 */function pw(e){if(!e||!e.options)throw Ma("App Configuration");if(!e.name)throw Ma("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ma(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ma(e){return gr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Gp="installations",gw="installations-internal",mw=e=>{const t=e.getProvider("app").getImmediate(),n=pw(t),r=ii(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_w=e=>{const t=e.getProvider("app").getImmediate(),n=ii(t,Gp).getImmediate();return{getId:()=>hw(n),getToken:s=>fw(n,s)}};function yw(){Bn(new gn(Gp,mw,"PUBLIC")),Bn(new gn(gw,_w,"PRIVATE"))}yw();Je(Vp,nc);Je(Vp,nc,"esm2017");/**
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
 */const lo="analytics",vw="firebase_id",Ew="origin",Tw=60*1e3,ww="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",oc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ie=new tc("@firebase/analytics");/**
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
 */const Iw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pe=new No("analytics","Analytics",Iw);/**
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
 */function Aw(e){if(!e.startsWith(oc)){const t=Pe.create("invalid-gtag-resource",{gtagURL:e});return Ie.warn(t.message),""}return e}function Wp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function bw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Rw(e,t){const n=bw("firebase-js-sdk-policy",{createScriptURL:Aw}),r=document.createElement("script"),s=`${oc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Sw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Cw(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await Wp(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){Ie.error(l)}e("config",s,i)}async function Pw(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Wp(n);for(const c of a){const h=l.find(p=>p.measurementId===c),f=h&&t[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ie.error(i)}}function Vw(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await Pw(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await Cw(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){Ie.error(l)}}return s}function Dw(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Vw(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function xw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(oc)&&n.src.includes(e))return n;return null}/**
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
 */const kw=30,Nw=1e3;class Ow{constructor(t={},n=Nw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qp=new Ow;function Mw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Lw(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Mw(r)},i=ww.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Pe.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Fw(e,t=Qp,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Pe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Pe.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $w;return setTimeout(async()=>{l.abort()},Tw),Xp({appId:r,apiKey:s,measurementId:i},a,l,t)}async function Xp(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Qp){var i;const{appId:a,measurementId:l}=e;try{await Uw(r,t)}catch(c){if(l)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Lw(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!Bw(h)){if(s.deleteThrottleMetadata(a),l)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Th(n,s.intervalMillis,kw):Th(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(a,p),Ie.debug(`Calling attemptFetch again in ${f} millis`),Xp(e,p,r,s)}}function Uw(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Pe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Bw(e){if(!(e instanceof Xn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $w{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function jw(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
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
 */async function qw(){if(Tp())try{await wp()}catch(e){return Ie.warn(Pe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Hw(e,t,n,r,s,i,a){var l;const c=Fw(e);c.then(_=>{n[_.measurementId]=_.appId,e.options.measurementId&&_.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Ie.error(_)),t.push(c);const h=qw().then(_=>{if(_)return r.getId()}),[f,p]=await Promise.all([c,h]);xw(i)||Rw(i,f.measurementId),s("js",new Date);const m=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return m[Ew]="firebase",m.update=!0,p!=null&&(m[vw]=p),s("config",f.measurementId,m),f.measurementId}/**
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
 */class Kw{constructor(t){this.app=t}_delete(){return delete Vs[this.app.options.appId],Promise.resolve()}}let Vs={},xh=[];const kh={};let La="dataLayer",zw="gtag",Nh,Yp,Oh=!1;function Gw(){const e=[];if(dE()&&e.push("This is a browser extension environment."),gE()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function Ww(e,t,n){Gw();const r=e.options.appId;if(!r)throw Pe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pe.create("no-api-key");if(Vs[r]!=null)throw Pe.create("already-exists",{id:r});if(!Oh){Sw(La);const{wrappedGtag:i,gtagCore:a}=Dw(Vs,xh,kh,La,zw);Yp=i,Nh=a,Oh=!0}return Vs[r]=Hw(e,xh,kh,t,Nh,La,n),new Kw(e)}function Qw(e=Sp()){e=nn(e);const t=ii(e,lo);return t.isInitialized()?t.getImmediate():Xw(e)}function Xw(e,t={}){const n=ii(e,lo);if(n.isInitialized()){const s=n.getImmediate();if(Ks(t,n.getOptions()))return s;throw Pe.create("already-initialized")}return n.initialize({options:t})}function Yw(e,t,n,r){e=nn(e),jw(Yp,Vs[e.app.options.appId],t,n,r).catch(s=>Ie.error(s))}const Mh="@firebase/analytics",Lh="0.10.12";function Jw(){Bn(new gn(lo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Ww(r,s,n)},"PUBLIC")),Bn(new gn("analytics-internal",e,"PRIVATE")),Je(Mh,Lh),Je(Mh,Lh,"esm2017");function e(t){try{const n=t.getProvider(lo).getImmediate();return{logEvent:(r,s,i)=>Yw(n,r,s,i)}}catch(n){throw Pe.create("interop-component-reg-failed",{reason:n})}}}Jw();var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,Jp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,R,A){for(var E=Array(arguments.length-2),St=2;St<arguments.length;St++)E[St-2]=arguments[St];return v.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)I[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)I[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],R=b.g[2];var A=b.g[3],E=v+(A^y&(R^A))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+I[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+I[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+I[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+I[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+I[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+I[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+I[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+I[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+I[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(A^y&(R^A))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=A+(R^v&(y^R))+I[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=R+(y^A&(v^y))+I[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(v^R&(A^v))+I[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^A&(y^R))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+I[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+I[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+I[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+I[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+I[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+I[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+I[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+I[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+I[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^A&(y^R))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(v^y))+I[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(A^v))+I[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^v&(R^A))+I[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^A)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+I[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+I[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+I[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+I[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+I[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+I[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+I[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+I[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+I[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^A)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=A+(v^y^R)+I[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=R+(A^v^y)+I[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^v)+I[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~A))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+I[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+I[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+I[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+I[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+I[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+I[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+I[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+I[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+I[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~A))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=A+(y^(v|~R))+I[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=R+(v^(A|~y))+I[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,I=this.B,R=this.h,A=0;A<v;){if(R==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(I[R++]=b.charCodeAt(A++),R==this.blockSize){s(this,I),R=0;break}}else for(;A<v;)if(I[R++]=b[A++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)b[y++]=this.g[v]>>>I&255;return b};function i(b,v){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function a(b,v){this.h=v;for(var y=[],I=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;I&&A==v||(y[R]=A,I=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?i(b,function(v){return new a([v|0],0>v?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return x(h(-b));for(var v=[],y=1,I=0;b>=y;I++)v[I]=b/y|0,y*=4294967296;return new a(v,0)}function f(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return x(f(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(v,8)),I=p,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+A),v);8>A?(A=h(Math.pow(v,A)),I=I.j(A).add(h(E))):(I=I.j(y),I=I.add(h(E)))}return I}var p=c(0),m=c(1),_=c(16777216);e=a.prototype,e.m=function(){if(V(this))return-x(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},e.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(V(this))return"-"+x(this).toString(b);for(var v=h(Math.pow(b,6)),y=this,I="";;){var R=q(y,v).g;y=$(y,R.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,S(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},e.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function V(b){return b.h==-1}e.l=function(b){return b=$(this,b),V(b)?-1:S(b)?0:1};function x(b){for(var v=b.g.length,y=[],I=0;I<v;I++)y[I]=~b.g[I];return new a(y,~b.h).add(m)}e.abs=function(){return V(this)?x(this):this},e.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0,R=0;R<=v;R++){var A=I+(this.i(R)&65535)+(b.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);I=E>>>16,A&=65535,E&=65535,y[R]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(b,v){return b.add(x(v))}e.j=function(b){if(S(this)||S(b))return p;if(V(this))return V(b)?x(this).j(x(b)):x(x(this).j(b));if(V(b))return x(this.j(x(b)));if(0>this.l(_)&&0>b.l(_))return h(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<b.g.length;R++){var A=this.i(I)>>>16,E=this.i(I)&65535,St=b.i(R)>>>16,jt=b.i(R)&65535;y[2*I+2*R]+=E*jt,B(y,2*I+2*R),y[2*I+2*R+1]+=A*jt,B(y,2*I+2*R+1),y[2*I+2*R+1]+=E*St,B(y,2*I+2*R+1),y[2*I+2*R+2]+=A*St,B(y,2*I+2*R+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new a(y,0)};function B(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function j(b,v){this.g=b,this.h=v}function q(b,v){if(S(v))throw Error("division by zero");if(S(b))return new j(p,p);if(V(b))return v=q(x(b),v),new j(x(v.g),x(v.h));if(V(v))return v=q(b,x(v)),new j(x(v.g),v.h);if(30<b.g.length){if(V(b)||V(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;0>=I.l(b);)y=ot(y),I=ot(I);var R=et(y,1),A=et(I,1);for(I=et(I,2),y=et(y,2);!S(I);){var E=A.add(I);0>=E.l(b)&&(R=R.add(y),A=E),I=et(I,1),y=et(y,1)}return v=$(b,R.j(v)),new j(R,v)}for(R=p;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=h(y),E=A.j(v);V(E)||0<E.l(b);)y-=I,A=h(y),E=A.j(v);S(A)&&(A=m),R=R.add(A),b=$(b,E)}return new j(R,b)}e.A=function(b){return q(this,b).h},e.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&b.i(I);return new a(y,this.h&b.h)},e.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|b.i(I);return new a(y,this.h|b.h)},e.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^b.i(I);return new a(y,this.h^b.h)};function ot(b){for(var v=b.g.length+1,y=[],I=0;I<v;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new a(y,b.h)}function et(b,v){var y=v>>5;v%=32;for(var I=b.g.length-y,R=[],A=0;A<I;A++)R[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new a(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,On=a}).apply(typeof Fh<"u"?Fh:typeof self<"u"?self:typeof window<"u"?window:{});var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zp,Es,tg,qi,hl,eg,ng,rg;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Di=="object"&&Di];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in d))break t;d=d[P]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,P={next:function(){if(!g&&d<o.length){var D=d++;return{value:u(D,o[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function S(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,P,D){for(var z=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)z[Ct-2]=arguments[Ct];return u.prototype[P].apply(g,z)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function x(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=o.length||0,D=g.length||0;o.length=P+D;for(let z=0;z<D;z++)o[P+z]=g[z]}else o.push(g)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var ot=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function et(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function b(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function v(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)o[d]=g[d];for(let D=0;D<y.length;D++)d=y[D],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function R(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Ae;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class St{constructor(){this.h=this.g=null}add(u,d){const g=jt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var jt=new $(()=>new Nt,o=>o.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,gt=!1,Ae=new St,Me=()=>{const o=l.Promise.resolve(void 0);_t=()=>{o.then(Ve)}};var Ve=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){A(d)}var u=jt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}gt=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Ke(o,u){if(Mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ot){t:{try{q(u.nodeName);var P=!0;break t}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ee[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ke.aa.h.call(this)}}S(Ke,Mt);var Ee={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),X=0;function W(o,u,d,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function J(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tt(o){this.src=o,this.g={},this.h=0}Tt.prototype.add=function(o,u,d,g,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var z=w(o,u,g,P);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new W(u,this.src,D,!!g,P),u.fa=d,o.push(u)),u};function T(o,u){var d=u.type;if(d in o.g){var g=o.g[d],P=Array.prototype.indexOf.call(g,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(J(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function w(o,u,d,g){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==g)return P}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function L(o,u,d,g,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)L(o,u[D],d,g,P);return null}return d=at(d),o&&o[k]?o.K(u,d,h(g)?!!g.capture:!1,P):O(o,u,d,!1,g,P)}function O(o,u,d,g,P,D){if(!u)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,Ct=Q(o);if(Ct||(o[C]=Ct=new Tt(o)),d=Ct.add(u,d,g,z,D),d.proxy)return d;if(g=G(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)En||(P=z),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=rt;return o}function K(o,u,d,g,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)K(o,u[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=at(d),o&&o[k]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],d=w(D,d,g,P),-1<d&&(J(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,d,g,P)),(d=-1<o?u[o]:null)&&H(d))}function H(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[k])T(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(U(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(T(d,o),d.h==0&&(d.src=null,u[C]=null)):J(o)}}}function U(o){return o in N?N[o]:N[o]="on"+o}function rt(o,u){if(o.da)o=!0;else{u=new Ke(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&H(o),o=d.call(g,u)}return o}function Q(o){return o=o[C],o instanceof Tt?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function at(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function st(){Ot.call(this),this.i=new Tt(this),this.M=this,this.F=null}S(st,Ot),st.prototype[k]=!0,st.prototype.removeEventListener=function(o,u,d,g){K(this,o,u,d,g)};function dt(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Mt(u,o);else if(u instanceof Mt)u.target=u.target||o;else{var P=u;u=new Mt(g,o),I(u,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var z=u.g=d[D];P=yt(z,g,!0,u)&&P}if(z=u.g=o,P=yt(z,g,!0,u)&&P,P=yt(z,g,!1,u)&&P,d)for(D=0;D<d.length;D++)z=u.g=d[D],P=yt(z,g,!1,u)&&P}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)J(d[g]);delete o.g[u],o.h--}}this.F=null},st.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},st.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function yt(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var z=u[D];if(z&&!z.da&&z.capture==d){var Ct=z.listener,Yt=z.ha||z.src;z.fa&&T(o.i,z),P=Ct.call(Yt,g)!==!1&&P}}return P&&!g.defaultPrevented}function re(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Qt(o){o.g=re(()=>{o.g=null,o.i&&(o.i=!1,Qt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class De extends Ot{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(o){Ot.call(this),this.h=o,this.g={}}S(se,Ot);var Tn=[];function ns(o){et(o.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},o),o.g={}}se.prototype.N=function(){se.aa.N.call(this),ns(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xt=l.JSON.stringify,xe=l.JSON.parse,ui=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ra(){}ra.prototype.h=null;function Bc(o){return o.h||(o.h=o.i())}function $c(){}var rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sa(){Mt.call(this,"d")}S(sa,Mt);function ia(){Mt.call(this,"c")}S(ia,Mt);var Zn={},jc=null;function hi(){return jc=jc||new st}Zn.La="serverreachability";function qc(o){Mt.call(this,Zn.La,o)}S(qc,Mt);function ss(o){const u=hi();dt(u,new qc(u))}Zn.STAT_EVENT="statevent";function Hc(o,u){Mt.call(this,Zn.STAT_EVENT,o),this.stat=u}S(Hc,Mt);function pe(o){const u=hi();dt(u,new Hc(u,o))}Zn.Ma="timingevent";function Kc(o,u){Mt.call(this,Zn.Ma,o),this.size=u}S(Kc,Mt);function is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function qm(o,u,d,g,P,D){o.info(function(){if(o.g)if(D)for(var z="",Ct=D.split("&"),Yt=0;Yt<Ct.length;Yt++){var wt=Ct[Yt].split("=");if(1<wt.length){var ie=wt[0];wt=wt[1];var oe=ie.split("_");z=2<=oe.length&&oe[1]=="type"?z+(ie+"="+wt+"&"):z+(ie+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+z})}function Hm(o,u,d,g,P,D,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+D+" "+z})}function Tr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+zm(o,d)+(g?" "+g:"")})}function Km(o,u){o.info(function(){return"TIMEOUT: "+u})}os.prototype.info=function(){};function zm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Xt(d)}catch{return u}}var fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oa;function di(){}S(di,ra),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},oa=new di;function wn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new se(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gc}function Gc(){this.i=null,this.g="",this.h=!1}var Wc={},aa={};function la(o,u,d){o.L=1,o.v=_i(on(u)),o.m=d,o.P=!0,Qc(o,null)}function Qc(o,u){o.F=Date.now(),pi(o),o.A=on(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),cu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Gc,o.g=Su(o.j,d?u:null,!o.m),0<o.O&&(o.M=new De(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Tn[0]=P.toString()),P=Tn);for(var D=0;D<P.length;D++){var z=L(d,P[D],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ss(),qm(o.i,o.u,o.A,o.l,o.R,o.m)}wn.prototype.ca=function(o){o=o.target;const u=this.M;u&&an(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)t:{const oe=an(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>oe)&&(oe!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||oe!=4||u==7||(u==8||0>=Ar?ss(3):ss(2)),ca(this);var d=this.g.Z();this.X=d;e:if(Xc(this)){var g=mu(this.g);o="";var P=g.length,D=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),as(this);var z="";break e}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(D&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Hm(this.i,this.u,this.A,this.l,this.R,oe,d),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,Yt=this.g;if((Ct=Yt.g?Yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ct)){var wt=Ct;break e}}wt=null}if(d=wt)Tr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ua(this,d);else{this.o=!1,this.s=3,pe(12),tr(this),as(this);break t}}if(this.P){d=!0;let Le;for(;!this.J&&this.C<z.length;)if(Le=Gm(this,z),Le==aa){oe==4&&(this.s=4,pe(14),d=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Wc){this.s=4,pe(15),Tr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Tr(this.i,this.l,Le,null),ua(this,Le);if(Xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||z.length!=0||this.h.h||(this.s=1,pe(16),d=!1),this.o=this.o&&d,!d)Tr(this.i,this.l,z,"[Invalid Chunked Response]"),tr(this),as(this);else if(0<z.length&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.ba&&!ie.M&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ma(ie),ie.M=!0,pe(11))}}else Tr(this.i,this.l,z,null),ua(this,z);oe==4&&tr(this),this.o&&!this.J&&(oe==4?Iu(this.j,this):(this.o=!1,pi(this)))}else u_(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,pe(12)):(this.s=0,pe(13)),tr(this),as(this)}}}catch{}finally{}};function Xc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Gm(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?aa:(d=Number(u.substring(d,g)),isNaN(d)?Wc:(g+=1,g+d>u.length?aa:(u=u.slice(g,g+d),o.C=g+d,u)))}wn.prototype.cancel=function(){this.J=!0,tr(this)};function pi(o){o.S=Date.now()+o.I,Yc(o,o.I)}function Yc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=is(m(o.ba,o),u)}function ca(o){o.B&&(l.clearTimeout(o.B),o.B=null)}wn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Km(this.i,this.A),this.L!=2&&(ss(),pe(17)),tr(this),this.s=2,as(this)):Yc(this,this.S-o)};function as(o){o.j.G==0||o.J||Iu(o.j,o)}function tr(o){ca(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ns(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ua(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ha(d.h,o))){if(!o.K&&ha(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){t:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ii(d),Ti(d);else break t;ga(d),pe(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=is(m(d.Za,d),6e3));if(1>=tu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else nr(d,11)}else if((o.K||d.g==o)&&Ii(d),!B(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let wt=P[u];if(d.T=wt[0],wt=wt[1],d.G==2)if(wt[0]=="c"){d.K=wt[1],d.ia=wt[2];const ie=wt[3];ie!=null&&(d.la=ie,d.j.info("VER="+d.la));const oe=wt[4];oe!=null&&(d.Aa=oe,d.j.info("SVER="+d.Aa));const Ar=wt[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(g=1.5*Ar,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Le=o.g;if(Le){const bi=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var D=g.h;D.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(fa(D,D.h),D.h=null))}if(g.D){const _a=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(g.ya=_a,xt(g.I,g.D,_a))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=Ru(g,g.J?g.ia:null,g.W),z.K){eu(g.h,z);var Ct=z,Yt=g.L;Yt&&(Ct.I=Yt),Ct.B&&(ca(Ct),pi(Ct)),g.g=z}else Tu(g);0<d.i.length&&wi(d)}else wt[0]!="stop"&&wt[0]!="close"||nr(d,7);else d.G==3&&(wt[0]=="stop"||wt[0]=="close"?wt[0]=="stop"?nr(d,7):pa(d):wt[0]!="noop"&&d.l&&d.l.ta(wt),d.v=0)}}ss(4)}catch{}}var Wm=class{constructor(o,u){this.g=o,this.map=u}};function Jc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function tu(o){return o.h?1:o.g?o.g.size:0}function ha(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function fa(o,u){o.g?o.g.add(u):o.h=u}function eu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Jc.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function Qm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function Xm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function ru(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Xm(o),g=Qm(o),P=g.length,D=0;D<P;D++)u.call(void 0,g[D],d&&d[D],o)}var su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ym(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),P=null;if(0<=g){var D=o[d].substring(0,g);P=o[d].substring(g+1)}else D=o[d];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,gi(this,o.j),this.o=o.o,this.g=o.g,mi(this,o.s),this.l=o.l;var u=o.i,d=new us;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),iu(this,d),this.m=o.m}else o&&(u=String(o).match(su))?(this.h=!1,gi(this,u[1]||"",!0),this.o=ls(u[2]||""),this.g=ls(u[3]||"",!0),mi(this,u[4]),this.l=ls(u[5]||"",!0),iu(this,u[6]||"",!0),this.m=ls(u[7]||"")):(this.h=!1,this.i=new us(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(cs(u,ou,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(cs(u,ou,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(cs(d,d.charAt(0)=="/"?t_:Zm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",cs(d,n_)),o.join("")};function on(o){return new er(o)}function gi(o,u,d){o.j=d?ls(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function mi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function iu(o,u,d){u instanceof us?(o.i=u,r_(o.i,o.h)):(d||(u=cs(u,e_)),o.i=new us(u,o.h))}function xt(o,u,d){o.i.set(u,d)}function _i(o){return xt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ls(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function cs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Jm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ou=/[#\/\?@]/g,Zm=/[#\?:]/g,t_=/[#\?]/g,e_=/[#\?@]/g,n_=/#/g;function us(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&Ym(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}e=us.prototype,e.add=function(o,u){In(this),this.i=null,o=wr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function au(o,u){In(o),u=wr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function lu(o,u){return In(o),u=wr(o,u),o.g.has(u)}e.forEach=function(o,u){In(this),this.g.forEach(function(d,g){d.forEach(function(P){o.call(u,P,g,this)},this)},this)},e.na=function(){In(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=o[g];for(let D=0;D<P.length;D++)d.push(u[g])}return d},e.V=function(o){In(this);let u=[];if(typeof o=="string")lu(this,o)&&(u=u.concat(this.g.get(wr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},e.set=function(o,u){return In(this),this.i=null,o=wr(this,o),lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function cu(o,u,d){au(o,u),0<d.length&&(o.i=null,o.g.set(wr(o,u),V(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),o.push(P)}}return this.i=o.join("&")};function wr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function r_(o,u){u&&!o.j&&(In(o),o.i=null,o.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(au(this,g),cu(this,P,d))},o)),o.j=u}function s_(o,u){const d=new os;if(l.Image){const g=new Image;g.onload=_(An,d,"TestLoadImage: loaded",!0,u,g),g.onerror=_(An,d,"TestLoadImage: error",!1,u,g),g.onabort=_(An,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(An,d,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function i_(o,u){const d=new os,g=new AbortController,P=setTimeout(()=>{g.abort(),An(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?An(d,"TestPingServer: ok",!0,u):An(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),An(d,"TestPingServer: error",!1,u)})}function An(o,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function o_(){this.g=new ui}function a_(o,u,d){const g=d||"";try{ru(o,function(P,D){let z=P;h(P)&&(z=Xt(P)),u.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function yi(o){this.l=o.Ub||null,this.j=o.eb||!1}S(yi,ra),yi.prototype.g=function(){return new vi(this.l,this.j)},yi.prototype.i=function(o){return function(){return o}}({});function vi(o,u){st.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(vi,st),e=vi.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,fs(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?hs(this):fs(this),this.readyState==3&&uu(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,hs(this))},e.Qa=function(o){this.g&&(this.response=o,hs(this))},e.ga=function(){this.g&&hs(this)};function hs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,fs(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function hu(o){let u="";return et(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function da(o,u,d){t:{for(g in d){var g=!1;break t}g=!0}g||(d=hu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):xt(o,u,d))}function Ft(o){st.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ft,st);var l_=/^https?$/i,c_=["POST","PUT"];e=Ft.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oa.g(),this.v=this.o?Bc(this.o):Bc(oa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){fu(this,D);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(c_,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gu(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){fu(this,D)}};function fu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,du(o),Ei(o)}function du(o){o.A||(o.A=!0,dt(o,"complete"),dt(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,dt(this,"complete"),dt(this,"abort"),Ei(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Ft.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?pu(this):this.bb())},e.bb=function(){pu(this)};function pu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||an(o)!=4||o.Z()!=2)){if(o.u&&an(o)==4)re(o.Ea,0,o);else if(dt(o,"readystatechange"),an(o)==4){o.h=!1;try{const z=o.Z();t:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var P=String(o.D).match(su)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!l_.test(P?P.toLowerCase():"")}d=g}if(d)dt(o,"complete"),dt(o,"success");else{o.m=6;try{var D=2<an(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",du(o)}}finally{Ei(o)}}}}function Ei(o,u){if(o.g){gu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||dt(o,"ready");try{d.onreadystatechange=g}catch{}}}function gu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),xe(u)}};function mu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function u_(o){const u={};o=(o.g&&2<=an(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var d=R(o[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[P]||[];u[P]=D,D.push(d)}b(u,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function _u(o){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,o),this.cb=ds("retryDelaySeedMs",1e4,o),this.Wa=ds("forwardChannelMaxRetries",2,o),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Jc(o&&o.concurrentRequestLimit),this.Da=new o_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=_u.prototype,e.la=8,e.G=1,e.connect=function(o,u,d,g){pe(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ru(this,null,this.W),wi(this)};function pa(o){if(yu(o),o.G==3){var u=o.U++,d=on(o.I);if(xt(d,"SID",o.K),xt(d,"RID",u),xt(d,"TYPE","terminate"),ps(o,d),u=new wn(o,o.j,u),u.L=2,u.v=_i(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Su(u.j,null),u.g.ea(u.v)),u.F=Date.now(),pi(u)}bu(o)}function Ti(o){o.g&&(ma(o),o.g.cancel(),o.g=null)}function yu(o){Ti(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function wi(o){if(!Zc(o.h)&&!o.s){o.s=!0;var u=o.Ga;_t||Me(),gt||(_t(),gt=!0),Ae.add(u,o),o.B=0}}function h_(o,u){return tu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=is(m(o.Ga,o,u),Au(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new wn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=v(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)t:{for(var u=0,d=0;d<this.i.length;d++){e:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break t}if(u===4096||d===this.i.length-1){u=d+1;break t}}u=1e3}else u=1e3;u=Eu(this,P,u),d=on(this.I),xt(d,"RID",o),xt(d,"CVER",22),this.D&&xt(d,"X-HTTP-Session-Id",this.D),ps(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(hu(D)))+"&"+u:this.m&&da(d,this.m,D)),fa(this.h,P),this.Ua&&xt(d,"TYPE","init"),this.P?(xt(d,"$req",u),xt(d,"SID","null"),P.T=!0,la(P,d,null)):la(P,d,u),this.G=2}}else this.G==3&&(o?vu(this,o):this.i.length==0||Zc(this.h)||vu(this))};function vu(o,u){var d;u?d=u.l:d=o.U++;const g=on(o.I);xt(g,"SID",o.K),xt(g,"RID",d),xt(g,"AID",o.T),ps(o,g),o.m&&o.o&&da(g,o.m,o.o),d=new wn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Eu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fa(o.h,d),la(d,g,u)}function ps(o,u){o.H&&et(o.H,function(d,g){xt(u,g,d)}),o.l&&ru({},function(d,g){xt(u,g,d)})}function Eu(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;t:{var P=o.i;let D=-1;for(;;){const z=["count="+d];D==-1?0<d?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let Ct=!0;for(let Yt=0;Yt<d;Yt++){let wt=P[Yt].g;const ie=P[Yt].map;if(wt-=D,0>wt)D=Math.max(0,P[Yt].g-100),Ct=!1;else try{a_(ie,z,"req"+wt+"_")}catch{g&&g(ie)}}if(Ct){g=z.join("&");break t}}}return o=o.i.splice(0,d),u.D=o,g}function Tu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;_t||Me(),gt||(_t(),gt=!0),Ae.add(u,o),o.v=0}}function ga(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=is(m(o.Fa,o),Au(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=is(m(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pe(10),Ti(this),wu(this))};function ma(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function wu(o){o.g=new wn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=on(o.qa);xt(u,"RID","rpc"),xt(u,"SID",o.K),xt(u,"AID",o.T),xt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&xt(u,"TO",o.ja),xt(u,"TYPE","xmlhttp"),ps(o,u),o.m&&o.o&&da(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=_i(on(u)),d.m=null,d.P=!0,Qc(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Ti(this),ga(this),pe(19))};function Ii(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Iu(o,u){var d=null;if(o.g==u){Ii(o),ma(o),o.g=null;var g=2}else if(ha(o.h,u))d=u.D,eu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=hi(),dt(g,new Kc(g,d)),wi(o)}else Tu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&h_(o,u)||g==2&&ga(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:nr(o,5);break;case 4:nr(o,10);break;case 3:nr(o,6);break;default:nr(o,2)}}}function Au(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function nr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const P=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gi(g,"https"),_i(g),P?s_(g.toString(),d):i_(g.toString(),d)}else pe(2);o.G=0,o.l&&o.l.sa(u),bu(o),yu(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function bu(o){if(o.G=0,o.ka=[],o.l){const u=nu(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Ru(o,u,d){var g=d instanceof er?on(d):new er(d);if(g.g!="")u&&(g.g=u+"."+g.g),mi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new er(null);g&&gi(D,g),u&&(D.g=u),P&&mi(D,P),d&&(D.l=d),g=D}return d=o.D,u=o.ya,d&&u&&xt(g,d,u),xt(g,"VER",o.la),ps(o,g),g}function Su(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ft(new yi({eb:d})):new Ft(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}e=Cu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ai(){}Ai.prototype.g=function(o,u){return new be(o,u)};function be(o,u){st.call(this),this.g=new _u(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ir(this)}S(be,st),be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){pa(this.g)},be.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Xt(o),o=d);u.i.push(new Wm(u.Ya++,o)),u.G==3&&wi(u)},be.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,be.aa.N.call(this)};function Pu(o){sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const d in u){o=d;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}S(Pu,sa);function Vu(){ia.call(this),this.status=1}S(Vu,ia);function Ir(o){this.g=o}S(Ir,Cu),Ir.prototype.ua=function(){dt(this.g,"a")},Ir.prototype.ta=function(o){dt(this.g,new Pu(o))},Ir.prototype.sa=function(o){dt(this.g,new Vu)},Ir.prototype.ra=function(){dt(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,rg=function(){return new Ai},ng=function(){return hi()},eg=Zn,hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fi.NO_ERROR=0,fi.TIMEOUT=8,fi.HTTP_ERROR=6,qi=fi,zc.COMPLETE="complete",tg=zc,$c.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",st.prototype.listen=st.prototype.K,Es=$c,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,Zp=Ft}).apply(typeof Di<"u"?Di:typeof self<"u"?self:typeof window<"u"?window:{});const Uh="@firebase/firestore",Bh="4.7.10";/**
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
 */class le{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");/**
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
 */let Jr="11.5.0";/**
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
 */const _r=new tc("@firebase/firestore");function Sr(){return _r.logLevel}function Y(e,...t){if(_r.logLevel<=Et.DEBUG){const n=t.map(ac);_r.debug(`Firestore (${Jr}): ${e}`,...n)}}function _n(e,...t){if(_r.logLevel<=Et.ERROR){const n=t.map(ac);_r.error(`Firestore (${Jr}): ${e}`,...n)}}function jr(e,...t){if(_r.logLevel<=Et.WARN){const n=t.map(ac);_r.warn(`Firestore (${Jr}): ${e}`,...n)}}function ac(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function lt(e="Unexpected state"){const t=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: `+e;throw _n(t),new Error(t)}function Rt(e,t){e||lt()}function ut(e,t){return e}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tt extends Xn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class sg{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(le.UNAUTHENTICATED))}shutdown(){}}class tI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eI{constructor(t){this.t=t,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Rt(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new sg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Rt(t===null||typeof t=="string"),new le(t)}}class nI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=le.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new nI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $h{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sI{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yT(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Rt(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new $h(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Rt(typeof n.token=="string"),this.R=n.token,new $h(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function ig(){return new TextEncoder}/**
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
 */class og{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function pt(e,t){return e<t?-1:e>t?1:0}function fl(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return pt(r,s);{const i=ig(),a=oI(i.encode(jh(e,n)),i.encode(jh(t,n)));return a!==0?a:pt(r,s)}}n+=r>65535?2:1}return pt(e.length,t.length)}function jh(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function oI(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return pt(e[n],t[n]);return pt(e.length,t.length)}function qr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const qh=-62135596800,Hh=1e6;class Ht{static now(){return Ht.fromMillis(Date.now())}static fromDate(t){return Ht.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Hh);return new Ht(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new tt(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new tt(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<qh)throw new tt(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new tt(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hh}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-qh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ct{static fromTimestamp(t){return new ct(t)}static min(){return new ct(new Ht(0,0))}static max(){return new ct(new Ht(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Kh="__name__";class We{constructor(t,n,r){n===void 0?n=0:n>t.length&&lt(),r===void 0?r=t.length-n:r>t.length-n&&lt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=We.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return pt(t.length,n.length)}static compareSegments(t,n){const r=We.isNumericId(t),s=We.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?We.extractNumericId(t).compare(We.extractNumericId(n)):fl(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return On.fromString(t.substring(4,t.length-2))}}class kt extends We{construct(t,n,r){return new kt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new tt(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new kt(n)}static emptyPath(){return new kt([])}}const aI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends We{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return aI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kh}static keyField(){return new te([Kh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new tt(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new tt(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new tt(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new tt(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
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
 */class nt{constructor(t){this.path=t}static fromPath(t){return new nt(kt.fromString(t))}static fromName(t){return new nt(kt.fromString(t).popFirst(5))}static empty(){return new nt(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return kt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new nt(new kt(t.slice()))}}/**
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
 */const Gs=-1;function lI(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new $n(s,nt.empty(),t)}function cI(e){return new $n(e.readTime,e.key,Gs)}class $n{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new $n(ct.min(),nt.empty(),Gs)}static max(){return new $n(ct.max(),nt.empty(),Gs)}}function uI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=nt.comparator(e.documentKey,t.documentKey),n!==0?n:pt(e.largestBatchId,t.largestBatchId))}/**
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
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Zr(e){if(e.code!==F.FAILED_PRECONDITION||e.message!==hI)throw e;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&lt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):M.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):M.reject(n)}static resolve(t){return new M((n,r)=>{n(t)})}static reject(t){return new M((n,r)=>{r(t)})}static waitFor(t){return new M((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=M.resolve(!1);for(const r of t)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new M((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(t,n){return new M((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function dI(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ts(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Lo.ae=-1;/**
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
 */const lc=-1;function Fo(e){return e==null}function co(e){return e===0&&1/e==-1/0}function pI(e){return typeof e=="number"&&Number.isInteger(e)&&!co(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const ag="";function gI(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=zh(t)),t=mI(e.get(n),t);return zh(t)}function mI(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case ag:n+="";break;default:n+=i}}return n}function zh(e){return e+ag+""}/**
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
 */function Gh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Yn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Lt{constructor(t,n){this.comparator=t,this.root=n||Jt.EMPTY}insert(t,n){return new Lt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xi(this.root,t,this.comparator,!0)}}class xi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Jt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Jt.RED,this.left=s??Jt.EMPTY,this.right=i??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Jt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw lt();const t=this.left.check();if(t!==this.right.check())throw lt();return t+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw lt()}get value(){throw lt()}get color(){throw lt()}get left(){throw lt()}get right(){throw lt()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Jt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Kt{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wh(this.data.getIterator())}getIteratorFrom(t){return new Wh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Kt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Kt(this.comparator);return n.data=t,n}}class Wh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ce{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new Ce([])}unionWith(t){let n=new Kt(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ce(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return qr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ne{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cg("Invalid base64 string: "+i):i}}(t);return new ne(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ne(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const _I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(e){if(Rt(!!e),typeof e=="string"){let t=0;const n=_I.exec(e);if(Rt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Bt(e.seconds),nanos:Bt(e.nanos)}}function Bt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qn(e){return typeof e=="string"?ne.fromBase64String(e):ne.fromUint8Array(e)}/**
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
 */const ug="server_timestamp",hg="__type__",fg="__previous_value__",dg="__local_write_time__";function cc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[hg])===null||n===void 0?void 0:n.stringValue)===ug}function Uo(e){const t=e.mapValue.fields[fg];return cc(t)?Uo(t):t}function Ws(e){const t=jn(e.mapValue.fields[dg].timestampValue);return new Ht(t.seconds,t.nanos)}/**
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
 */class yI{constructor(t,n,r,s,i,a,l,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}const uo="(default)";class Qs{constructor(t,n){this.projectId=t,this.database=n||uo}static empty(){return new Qs("","")}get isDefaultDatabase(){return this.database===uo}isEqual(t){return t instanceof Qs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const pg="__type__",vI="__max__",ki={mapValue:{}},gg="__vector__",ho="value";function Hn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?cc(e)?4:TI(e)?9007199254740991:EI(e)?10:11:lt()}function rn(e,t){if(e===t)return!0;const n=Hn(e);if(n!==Hn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ws(e).isEqual(Ws(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=jn(s.timestampValue),l=jn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qn(s.bytesValue).isEqual(qn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Bt(s.geoPointValue.latitude)===Bt(i.geoPointValue.latitude)&&Bt(s.geoPointValue.longitude)===Bt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Bt(s.integerValue)===Bt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Bt(s.doubleValue),l=Bt(i.doubleValue);return a===l?co(a)===co(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return qr(e.arrayValue.values||[],t.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Gh(a)!==Gh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0}(e,t);default:return lt()}}function Xs(e,t){return(e.values||[]).find(n=>rn(n,t))!==void 0}function Hr(e,t){if(e===t)return 0;const n=Hn(e),r=Hn(t);if(n!==r)return pt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Bt(i.integerValue||i.doubleValue),c=Bt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Qh(e.timestampValue,t.timestampValue);case 4:return Qh(Ws(e),Ws(t));case 5:return fl(e.stringValue,t.stringValue);case 6:return function(i,a){const l=qn(i),c=qn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=pt(l[h],c[h]);if(f!==0)return f}return pt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=pt(Bt(i.latitude),Bt(a.latitude));return l!==0?l:pt(Bt(i.longitude),Bt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Xh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},m=a.fields||{},_=(l=p[ho])===null||l===void 0?void 0:l.arrayValue,S=(c=m[ho])===null||c===void 0?void 0:c.arrayValue,V=pt(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Xh(_,S)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===ki.mapValue&&a===ki.mapValue)return 0;if(i===ki.mapValue)return 1;if(a===ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=fl(c[p],f[p]);if(m!==0)return m;const _=Hr(l[c[p]],h[f[p]]);if(_!==0)return _}return pt(c.length,f.length)}(e.mapValue,t.mapValue);default:throw lt()}}function Qh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return pt(e,t);const n=jn(e),r=jn(t),s=pt(n.seconds,r.seconds);return s!==0?s:pt(n.nanos,r.nanos)}function Xh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Hr(n[s],r[s]);if(i)return i}return pt(n.length,r.length)}function Kr(e){return dl(e)}function dl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=jn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return qn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return nt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dl(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${dl(n.fields[a])}`;return s+"}"}(e.mapValue):lt()}function Hi(e){switch(Hn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Uo(e);return t?16+Hi(t):16;case 5:return 2*e.stringValue.length;case 6:return qn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Hi(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Yn(r.fields,(i,a)=>{s+=i.length+Hi(a)}),s}(e.mapValue);default:throw lt()}}function pl(e){return!!e&&"integerValue"in e}function uc(e){return!!e&&"arrayValue"in e}function Yh(e){return!!e&&"nullValue"in e}function Jh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ki(e){return!!e&&"mapValue"in e}function EI(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{})[pg])===null||n===void 0?void 0:n.stringValue)===gg}function Ds(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Yn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ds(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ds(e.arrayValue.values[n]);return t}return Object.assign({},e)}function TI(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
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
 */class we{constructor(t){this.value=t}static empty(){return new we({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ki(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ds(n)}setAll(t){let n=te.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ds(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ki(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Yn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new we(Ds(this.value))}}function mg(e){const t=[];return Yn(e.fields,(n,r)=>{const s=new te([n]);if(Ki(r)){const i=mg(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ce(t)}/**
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
 */class he{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new he(t,0,ct.min(),ct.min(),ct.min(),we.empty(),0)}static newFoundDocument(t,n,r,s){return new he(t,1,n,ct.min(),r,s,0)}static newNoDocument(t,n){return new he(t,2,n,ct.min(),ct.min(),we.empty(),0)}static newUnknownDocument(t,n){return new he(t,3,n,ct.min(),ct.min(),we.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof he&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fo{constructor(t,n){this.position=t,this.inclusive=n}}function Zh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=nt.comparator(nt.fromName(a.referenceValue),n.key):r=Hr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tf(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class po{constructor(t,n="asc"){this.field=t,this.dir=n}}function wI(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class _g{}class qt extends _g{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new AI(t,n,r):n==="array-contains"?new SI(t,r):n==="in"?new CI(t,r):n==="not-in"?new PI(t,r):n==="array-contains-any"?new VI(t,r):new qt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new bI(t,r):new RI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hr(n,this.value)):n!==null&&Hn(this.value)===Hn(n)&&this.matchesComparison(Hr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return lt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends _g{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new sn(t,n)}matches(t){return yg(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function yg(e){return e.op==="and"}function vg(e){return II(e)&&yg(e)}function II(e){for(const t of e.filters)if(t instanceof sn)return!1;return!0}function gl(e){if(e instanceof qt)return e.field.canonicalString()+e.op.toString()+Kr(e.value);if(vg(e))return e.filters.map(t=>gl(t)).join(",");{const t=e.filters.map(n=>gl(n)).join(",");return`${e.op}(${t})`}}function Eg(e,t){return e instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(e,t):e instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Eg(a,s.filters[l]),!0):!1}(e,t):void lt()}function Tg(e){return e instanceof qt?function(n){return`${n.field.canonicalString()} ${n.op} ${Kr(n.value)}`}(e):e instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(Tg).join(" ,")+"}"}(e):"Filter"}class AI extends qt{constructor(t,n,r){super(t,n,r),this.key=nt.fromName(r.referenceValue)}matches(t){const n=nt.comparator(t.key,this.key);return this.matchesComparison(n)}}class bI extends qt{constructor(t,n){super(t,"in",n),this.keys=wg("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class RI extends qt{constructor(t,n){super(t,"not-in",n),this.keys=wg("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function wg(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>nt.fromName(r.referenceValue))}class SI extends qt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return uc(n)&&Xs(n.arrayValue,this.value)}}class CI extends qt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class PI extends qt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class VI extends qt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!uc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
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
 */class DI{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.le=null}}function ef(e,t=null,n=[],r=[],s=null,i=null,a=null){return new DI(e,t,n,r,s,i,a)}function hc(e){const t=ut(e);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>gl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Kr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Kr(r)).join(",")),t.le=n}return t.le}function fc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!wI(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Eg(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!tf(e.startAt,t.startAt)&&tf(e.endAt,t.endAt)}function ml(e){return nt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Bo{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function xI(e,t,n,r,s,i,a,l){return new Bo(e,t,n,r,s,i,a,l)}function Ig(e){return new Bo(e)}function nf(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function kI(e){return e.collectionGroup!==null}function xs(e){const t=ut(e);if(t.he===null){t.he=[];const n=new Set;for(const i of t.explicitOrderBy)t.he.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Kt(te.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.he.push(new po(i,r))}),n.has(te.keyField().canonicalString())||t.he.push(new po(te.keyField(),r))}return t.he}function Ze(e){const t=ut(e);return t.Pe||(t.Pe=NI(t,xs(e))),t.Pe}function NI(e,t){if(e.limitType==="F")return ef(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new po(s.field,i)});const n=e.endAt?new fo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new fo(e.startAt.position,e.startAt.inclusive):null;return ef(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function _l(e,t,n){return new Bo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $o(e,t){return fc(Ze(e),Ze(t))&&e.limitType===t.limitType}function Ag(e){return`${hc(Ze(e))}|lt:${e.limitType}`}function Cr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tg(s)).join(", ")}]`),Fo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Kr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Kr(s)).join(",")),`Target(${r})`}(Ze(e))}; limitType=${e.limitType})`}function jo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):nt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Zh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,xs(r),s)||r.endAt&&!function(a,l,c){const h=Zh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,xs(r),s))}(e,t)}function OI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bg(e){return(t,n)=>{let r=!1;for(const s of xs(e)){const i=MI(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MI(e,t,n){const r=e.field.isKeyField()?nt.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Hr(c,h):lt()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return lt()}}/**
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
 */class vr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new Lt(nt.comparator);function yn(){return LI}const Rg=new Lt(nt.comparator);function Ts(...e){let t=Rg;for(const n of e)t=t.insert(n.key,n);return t}function Sg(e){let t=Rg;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function fr(){return ks()}function Cg(){return ks()}function ks(){return new vr(e=>e.toString(),(e,t)=>e.isEqual(t))}const FI=new Lt(nt.comparator),UI=new Kt(nt.comparator);function mt(...e){let t=UI;for(const n of e)t=t.add(n);return t}const BI=new Kt(pt);function $I(){return BI}/**
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
 */function dc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(t)?"-0":t}}function Pg(e){return{integerValue:""+e}}function jI(e,t){return pI(t)?Pg(t):dc(e,t)}/**
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
 */class qo{constructor(){this._=void 0}}function qI(e,t,n){return e instanceof Ys?function(s,i){const a={fields:{[hg]:{stringValue:ug},[dg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cc(i)&&(i=Uo(i)),i&&(a.fields[fg]=i),{mapValue:a}}(n,t):e instanceof Js?Dg(e,t):e instanceof Zs?xg(e,t):function(s,i){const a=Vg(s,i),l=rf(a)+rf(s.Ie);return pl(a)&&pl(s.Ie)?Pg(l):dc(s.serializer,l)}(e,t)}function HI(e,t,n){return e instanceof Js?Dg(e,t):e instanceof Zs?xg(e,t):n}function Vg(e,t){return e instanceof go?function(r){return pl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Ys extends qo{}class Js extends qo{constructor(t){super(),this.elements=t}}function Dg(e,t){const n=kg(t);for(const r of e.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends qo{constructor(t){super(),this.elements=t}}function xg(e,t){let n=kg(t);for(const r of e.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class go extends qo{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function rf(e){return Bt(e.integerValue||e.doubleValue)}function kg(e){return uc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class KI{constructor(t,n){this.field=t,this.transform=n}}function zI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Js&&s instanceof Js||r instanceof Zs&&s instanceof Zs?qr(r.elements,s.elements,rn):r instanceof go&&s instanceof go?rn(r.Ie,s.Ie):r instanceof Ys&&s instanceof Ys}(e.transform,t.transform)}class GI{constructor(t,n){this.version=t,this.transformResults=n}}class tn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new tn}static exists(t){return new tn(void 0,t)}static updateTime(t){return new tn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ho{}function Ng(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Mg(e.key,tn.none()):new oi(e.key,e.data,tn.none());{const n=e.data,r=we.empty();let s=new Kt(te.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Jn(e.key,r,new Ce(s.toArray()),tn.none())}}function WI(e,t,n){e instanceof oi?function(s,i,a){const l=s.value.clone(),c=of(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Jn?function(s,i,a){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=of(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Og(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ns(e,t,n,r){return e instanceof oi?function(i,a,l,c){if(!zi(i.precondition,a))return l;const h=i.value.clone(),f=af(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Jn?function(i,a,l,c){if(!zi(i.precondition,a))return l;const h=af(i.fieldTransforms,c,a),f=a.data;return f.setAll(Og(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function QI(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Vg(r.transform,s||null);i!=null&&(n===null&&(n=we.empty()),n.set(r.field,i))}return n||null}function sf(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&qr(r,s,(i,a)=>zI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class oi extends Ho{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends Ho{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Og(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function of(e,t,n){const r=new Map;Rt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,HI(a,l,n[s]))}return r}function af(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,qI(i,a,t))}return r}class Mg extends Ho{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XI extends Ho{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&WI(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ns(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ns(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Cg();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ng(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),mt())}isEqual(t){return this.batchId===t.batchId&&qr(this.mutations,t.mutations,(n,r)=>sf(n,r))&&qr(this.baseMutations,t.baseMutations,(n,r)=>sf(n,r))}}class pc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Rt(t.mutations.length===r.length);let s=function(){return FI}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new pc(t,n,r,s)}}/**
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
 */class JI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ZI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var $t,vt;function tA(e){switch(e){case F.OK:return lt();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return lt()}}function Lg(e){if(e===void 0)return _n("GRPC error has no .code"),F.UNKNOWN;switch(e){case $t.OK:return F.OK;case $t.CANCELLED:return F.CANCELLED;case $t.UNKNOWN:return F.UNKNOWN;case $t.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case $t.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case $t.INTERNAL:return F.INTERNAL;case $t.UNAVAILABLE:return F.UNAVAILABLE;case $t.UNAUTHENTICATED:return F.UNAUTHENTICATED;case $t.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case $t.NOT_FOUND:return F.NOT_FOUND;case $t.ALREADY_EXISTS:return F.ALREADY_EXISTS;case $t.PERMISSION_DENIED:return F.PERMISSION_DENIED;case $t.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case $t.ABORTED:return F.ABORTED;case $t.OUT_OF_RANGE:return F.OUT_OF_RANGE;case $t.UNIMPLEMENTED:return F.UNIMPLEMENTED;case $t.DATA_LOSS:return F.DATA_LOSS;default:return lt()}}(vt=$t||($t={}))[vt.OK=0]="OK",vt[vt.CANCELLED=1]="CANCELLED",vt[vt.UNKNOWN=2]="UNKNOWN",vt[vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vt[vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vt[vt.NOT_FOUND=5]="NOT_FOUND",vt[vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",vt[vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",vt[vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",vt[vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vt[vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vt[vt.ABORTED=10]="ABORTED",vt[vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",vt[vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",vt[vt.INTERNAL=13]="INTERNAL",vt[vt.UNAVAILABLE=14]="UNAVAILABLE",vt[vt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const eA=new On([4294967295,4294967295],0);function lf(e){const t=ig().encode(e),n=new Jp;return n.update(t),new Uint8Array(n.digest())}function cf(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new On([n,r],0),new On([s,i],0)]}class gc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=On.fromNumber(this.Ee)}Ae(t,n,r){let s=t.add(n.multiply(On.fromNumber(r)));return s.compare(eA)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=lf(t),[r,s]=cf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new gc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const n=lf(t),[r,s]=cf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ko{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,ai.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ko(ct.min(),s,new Lt(pt),yn(),mt())}}class ai{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new ai(r,n,mt(),mt(),mt())}}/**
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
 */class Gi{constructor(t,n,r,s){this.me=t,this.removedTargetIds=n,this.key=r,this.fe=s}}class Fg{constructor(t,n){this.targetId=t,this.ge=n}}class Ug{constructor(t,n,r=ne.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class uf{constructor(){this.pe=0,this.ye=hf(),this.we=ne.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=mt(),n=mt(),r=mt();return this.ye.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:lt()}}),new ai(this.we,this.Se,t,n,r)}Me(){this.be=!1,this.ye=hf()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Rt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class nA{constructor(t){this.ke=t,this.qe=new Map,this.Qe=yn(),this.$e=Ni(),this.Ue=Ni(),this.Ke=new Lt(pt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(t.resumeToken));break;default:lt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){const n=t.targetId,r=t.ge.count,s=this.Xe(n);if(s){const i=s.target;if(ml(i))if(r===0){const a=new nt(i.path);this.ze(n,a,he.newNoDocument(a,ct.min()))}else Rt(r===1);else{const a=this.et(n);if(a!==r){const l=this.tt(t),c=l?this.nt(l,t,a):1;if(c!==0){this.Ye(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=qn(r).toUint8Array()}catch(c){if(c instanceof cg)return jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gc(a,s,i)}catch(c){return jr(c instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ee===0?null:l}nt(t,n,r){return n.ge.count===r-this.st(t,n.targetId)?0:2}st(t,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.ze(n,i,null),s++)}),s}ot(t){const n=new Map;this.qe.forEach((i,a)=>{const l=this.Xe(a);if(l){if(i.current&&ml(l.target)){const c=new nt(l.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,he.newNoDocument(c,t))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=mt();this.Ue.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(t));const s=new Ko(t,n,this.Ke,this.Qe,r);return this.Qe=yn(),this.$e=Ni(),this.Ue=Ni(),this.Ke=new Lt(pt),s}Ge(t,n){if(!this.Je(t))return;const r=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new uf,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new Kt(pt),this.Ue=this.Ue.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Kt(pt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new uf),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Ni(){return new Lt(nt.comparator)}function hf(){return new Lt(nt.comparator)}const rA={asc:"ASCENDING",desc:"DESCENDING"},sA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iA={and:"AND",or:"OR"};class oA{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function yl(e,t){return e.useProto3Json||Fo(t)?t:{value:t}}function mo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function aA(e,t){return mo(e,t.toTimestamp())}function en(e){return Rt(!!e),ct.fromTimestamp(function(n){const r=jn(n);return new Ht(r.seconds,r.nanos)}(e))}function mc(e,t){return vl(e,t).canonicalString()}function vl(e,t){const n=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function $g(e){const t=kt.fromString(e);return Rt(zg(t)),t}function El(e,t){return mc(e.databaseId,t.path)}function Fa(e,t){const n=$g(t);if(n.get(1)!==e.databaseId.projectId)throw new tt(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new tt(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new nt(qg(n))}function jg(e,t){return mc(e.databaseId,t)}function lA(e){const t=$g(e);return t.length===4?kt.emptyPath():qg(t)}function Tl(e){return new kt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qg(e){return Rt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ff(e,t,n){return{name:El(e,t),fields:n.value.mapValue.fields}}function cA(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:lt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Rt(f===void 0||typeof f=="string"),ne.fromBase64String(f||"")):(Rt(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ne.fromUint8Array(f||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const f=h.code===void 0?F.UNKNOWN:Lg(h.code);return new tt(f,h.message||"")}(a);n=new Ug(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fa(e,r.document.name),i=en(r.document.updateTime),a=r.document.createTime?en(r.document.createTime):ct.min(),l=new we({mapValue:{fields:r.document.fields}}),c=he.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Gi(h,f,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Fa(e,r.document),i=r.readTime?en(r.readTime):ct.min(),a=he.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Gi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Fa(e,r.document),i=r.removedTargetIds||[];n=new Gi([],i,s,null)}else{if(!("filter"in t))return lt();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ZI(s,i),l=r.targetId;n=new Fg(l,a)}}return n}function uA(e,t){let n;if(t instanceof oi)n={update:ff(e,t.key,t.value)};else if(t instanceof Mg)n={delete:El(e,t.key)};else if(t instanceof Jn)n={update:ff(e,t.key,t.data),updateMask:vA(t.fieldMask)};else{if(!(t instanceof XI))return lt();n={verify:El(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Js)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof go)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw lt()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:lt()}(e,t.precondition)),n}function hA(e,t){return e&&e.length>0?(Rt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?en(s.updateTime):en(i);return a.isEqual(ct.min())&&(a=en(i)),new GI(a,s.transformResults||[])}(n,t))):[]}function fA(e,t){return{documents:[jg(e,t.path)]}}function dA(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jg(e,s);const i=function(h){if(h.length!==0)return Kg(sn.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Pr(m.field),direction:mA(m.dir)}}(f))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=yl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ht:n,parent:s}}function pA(e){let t=lA(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Rt(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=Hg(p);return m instanceof sn&&vg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(S){return new po(Vr(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Fo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new fo(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new fo(_,m)}(n.endAt)),xI(t,s,a,i,l,"F",c,h)}function gA(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return lt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Hg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vr(n.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(n.unaryFilter.field);return qt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vr(n.unaryFilter.field);return qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vr(n.unaryFilter.field);return qt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return lt()}}(e):e.fieldFilter!==void 0?function(n){return qt.create(Vr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return lt()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>Hg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return lt()}}(n.compositeFilter.op))}(e):lt()}function mA(e){return rA[e]}function _A(e){return sA[e]}function yA(e){return iA[e]}function Pr(e){return{fieldPath:e.canonicalString()}}function Vr(e){return te.fromServerFormat(e.fieldPath)}function Kg(e){return e instanceof qt?function(n){if(n.op==="=="){if(Jh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(Yh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Jh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(Yh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:_A(n.op),value:n.value}}}(e):e instanceof sn?function(n){const r=n.getFilters().map(s=>Kg(s));return r.length===1?r[0]:{compositeFilter:{op:yA(n.op),filters:r}}}(e):lt()}function vA(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function zg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Dn{constructor(t,n,r,s,i=ct.min(),a=ct.min(),l=ne.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Dn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class EA{constructor(t){this.Tt=t}}function TA(e){const t=pA({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_l(t,t.limit,"L"):t}/**
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
 */class wA{constructor(){this.Tn=new IA}addToCollectionParentIndex(t,n){return this.Tn.add(n),M.resolve()}getCollectionParents(t,n){return M.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return M.resolve()}deleteFieldIndex(t,n){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,n){return M.resolve()}getDocumentsMatchingTarget(t,n){return M.resolve(null)}getIndexType(t,n){return M.resolve(0)}getFieldIndexes(t,n){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,n){return M.resolve($n.min())}getMinOffsetFromCollectionGroup(t,n){return M.resolve($n.min())}updateCollectionGroup(t,n,r){return M.resolve()}updateIndexEntries(t,n){return M.resolve()}}class IA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Kt(kt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Kt(kt.comparator)).toArray()}}/**
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
 */const df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gg=41943040;class Te{static withCacheSize(t){return new Te(t,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Te.DEFAULT_COLLECTION_PERCENTILE=10,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Te.DEFAULT=new Te(Gg,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Te.DISABLED=new Te(-1,0,0);/**
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
 */class zr{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new zr(0)}static Kn(){return new zr(-1)}}/**
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
 */const pf="LruGarbageCollector",AA=1048576;function gf([e,t],[n,r]){const s=pt(e,n);return s===0?pt(t,r):s}class bA{constructor(t){this.Hn=t,this.buffer=new Kt(gf),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();gf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RA{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){Y(pf,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ts(n)?Y(pf,"Ignoring IndexedDB error during garbage collection: ",n):await Zr(n)}await this.er(3e5)})}}class SA{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return M.resolve(Lo.ae);const r=new bA(n);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.tr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(df)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),df):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),Sr()<=Et.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function CA(e,t){return new SA(e,t)}/**
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
 */class PA{constructor(){this.changes=new vr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,he.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class VA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class DA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ns(r.mutation,s,Ce.empty(),Ht.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=mt()){const s=fr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Ts();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=fr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,mt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=yn();const a=ks(),l=function(){return ks()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Jn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ns(f.mutation,h,f.mutation.getFieldMask(),Ht.now())):a.set(h.key,Ce.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new VA(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,n){const r=ks();let s=new Lt((a,l)=>a-l),i=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Ce.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||mt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Cg();f.forEach(m=>{if(!i.has(m)){const _=Ng(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return nt.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):kI(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):M.resolve(fr());let l=Gs,c=i;return a.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(t,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,mt())).next(f=>({batchId:l,changes:Sg(f)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new nt(n)).next(r=>{let s=Ts();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Ts();return this.indexManager.getCollectionParents(t,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new Bo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,he.newInvalidDocument(f)))});let l=Ts();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ns(f.mutation,h,Ce.empty(),Ht.now()),jo(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class xA{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return M.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:en(s.createTime)}}(n)),M.resolve()}getNamedQuery(t,n){return M.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:TA(s.bundledQuery),readTime:en(s.readTime)}}(n)),M.resolve()}}/**
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
 */class kA{constructor(){this.overlays=new Lt(nt.comparator),this.Rr=new Map}getOverlay(t,n){return M.resolve(this.overlays.get(n))}getOverlays(t,n){const r=fr();return M.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Et(t,n,i)}),M.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),M.resolve()}getOverlaysForCollection(t,n,r){const s=fr(),i=n.length+1,a=new nt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Lt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=fr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}Et(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new JI(n,r));let i=this.Rr.get(n);i===void 0&&(i=mt(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class NA{constructor(){this.sessionToken=ne.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class _c{constructor(){this.Vr=new Kt(zt.mr),this.gr=new Kt(zt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const r=new zt(t,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.wr(new zt(t,n))}Sr(t,n){t.forEach(r=>this.removeReference(r,n))}br(t){const n=new nt(new kt([])),r=new zt(n,t),s=new zt(n,t+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new nt(new kt([])),r=new zt(n,t),s=new zt(n,t+1);let i=mt();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new zt(t,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class zt{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return nt.comparator(t.key,n.key)||pt(t.Cr,n.Cr)}static pr(t,n){return pt(t.Cr,n.Cr)||nt.comparator(t.key,n.key)}}/**
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
 */class OA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Kt(zt.mr)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new YI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Mr=this.Mr.add(new zt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,n){return M.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?lc:this.Fr-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new zt(n,0),s=new zt(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const l=this.Or(a.Cr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Kt(pt);return n.forEach(s=>{const i=new zt(s,0),a=new zt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],l=>{r=r.add(l.Cr)})}),M.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;nt.isDocumentKey(i)||(i=i.child(""));const a=new zt(new nt(i),0);let l=new Kt(pt);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Cr)),!0)},a),M.resolve(this.Br(l))}Br(t){const n=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Rt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return M.forEach(n.mutations,s=>{const i=new zt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,n){const r=new zt(n,0),s=this.Mr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MA{constructor(t){this.kr=t,this.docs=function(){return new Lt(nt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():he.newInvalidDocument(n))}getEntries(t,n){let r=yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():he.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=yn();const a=n.path,l=new nt(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||uI(cI(f),r)<=0||(s.has(f.key)||jo(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,n,r,s){lt()}qr(t,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new LA(this)}getSize(t){return M.resolve(this.size)}}class LA extends PA{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),M.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class FA{constructor(t){this.persistence=t,this.Qr=new vr(n=>hc(n),fc),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.$r=0,this.Ur=new _c,this.targetCount=0,this.Kr=zr.Un()}forEachTarget(t,n){return this.Qr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),M.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new zr(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,M.resolve()}updateTargetData(t,n){return this.zn(n),M.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,n){const r=this.Qr.get(n)||null;return M.resolve(r)}addMatchingKeys(t,n,r){return this.Ur.yr(n,r),M.resolve()}removeMatchingKeys(t,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),M.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ur.vr(n);return M.resolve(r)}containsKey(t,n){return M.resolve(this.Ur.containsKey(n))}}/**
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
 */class Wg{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Lo(0),this.zr=!1,this.zr=!0,this.jr=new NA,this.referenceDelegate=t(this),this.Hr=new FA(this),this.indexManager=new wA,this.remoteDocumentCache=function(s){return new MA(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new EA(n),this.Yr=new xA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new kA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Wr[t.toKey()];return r||(r=new OA(n,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,r){Y("MemoryPersistence","Starting transaction:",t);const s=new UA(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(t,n){return M.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,n)))}}class UA extends fI{constructor(t){super(),this.currentSequenceNumber=t}}class yc{constructor(t){this.persistence=t,this.ti=new _c,this.ni=null}static ri(t){return new yc(t)}get ii(){if(this.ni)return this.ni;throw lt()}addReference(t,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),M.resolve()}removeReference(t,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),M.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ii,r=>{const s=nt.fromPath(r);return this.si(t,s).next(i=>{i||n.removeEntry(s,ct.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return M.or([()=>M.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class _o{constructor(t,n){this.persistence=t,this.oi=new vr(r=>gI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=CA(this,n)}static ri(t,n){return new _o(t,n)}Zr(){}Xr(t){return M.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}sr(t){let n=0;return this.rr(t,r=>{n++}).next(()=>n)}rr(t,n){return M.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ct.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),M.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),M.resolve()}removeReference(t,n,r){return this.oi.set(r,t.currentSequenceNumber),M.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),M.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Hi(t.data.value)),n}ar(t,n,r){return M.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.oi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class vc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(t,n){let r=mt(),s=mt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vc(t,n.fromCache,r,s)}}/**
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
 */class BA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $A{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return pE()?8:dI(hE())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.rs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new BA;return this._s(t,n,a).next(l=>{if(i.result=l,this.Xi)return this.us(t,n,a,l.size)})}).next(()=>i.result)}us(t,n,r,s){return r.documentReadCount<this.es?(Sr()<=Et.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),M.resolve()):(Sr()<=Et.DEBUG&&Y("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Sr()<=Et.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ze(n))):M.resolve())}rs(t,n){if(nf(n))return M.resolve(null);let r=Ze(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_l(n,null,"F"),r=Ze(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=mt(...i);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.cs(n,l);return this.ls(n,h,a,c.readTime)?this.rs(t,_l(n,null,"F")):this.hs(t,h,n,c)}))})))}ss(t,n,r,s){return nf(n)||s.isEqual(ct.min())?M.resolve(null):this.ns.getDocuments(t,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?M.resolve(null):(Sr()<=Et.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.hs(t,a,n,lI(s,Gs)).next(l=>l))})}cs(t,n){let r=new Kt(bg(t));return n.forEach((s,i)=>{jo(t,i)&&(r=r.add(i))}),r}ls(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,n,r){return Sr()<=Et.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.ns.getDocumentsMatchingQuery(t,n,$n.min(),r)}hs(t,n,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ec="LocalStore",jA=3e8;class qA{constructor(t,n,r,s){this.persistence=t,this.Ps=n,this.serializer=s,this.Ts=new Lt(pt),this.Is=new vr(i=>hc(i),fc),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new DA(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function HA(e,t,n,r){return new qA(e,t,n,r)}async function Qg(e,t){const n=ut(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=mt();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:l}))})})}function KA(e,t){const n=ut(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,m=p.keys();let _=M.resolve();return m.forEach(S=>{_=_.next(()=>f.getEntry(c,S)).next(V=>{const x=h.docVersions.get(S);Rt(x!==null),V.version.compareTo(x)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=mt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Xg(e){const t=ut(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function zA(e,t){const n=ut(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const l=[];t.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?_=_.withResumeToken(ne.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(V,x,$){return V.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=jA?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(m,_,f)&&l.push(n.Hr.updateTargetData(i,_))});let c=yn(),h=mt();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(GA(i,a,t.documentUpdates).next(f=>{c=f.Vs,h=f.fs})),!r.isEqual(ct.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(p=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Ts=s,i))}function GA(e,t,n){let r=mt(),s=mt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=yn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ct.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):Y(Ec,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:s}})}function WA(e,t){const n=ut(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=lc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function QA(e,t){const n=ut(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,t).next(i=>i?(s=i,M.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new Dn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(t,r.targetId)),r})}async function wl(e,t,n){const r=ut(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ts(a))throw a;Y(Ec,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function mf(e,t,n){const r=ut(e);let s=ct.min(),i=mt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=ut(c),m=p.Is.get(f);return m!==void 0?M.resolve(p.Ts.get(m)):p.Hr.getTargetData(h,f)}(r,a,Ze(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,n?s:ct.min(),n?i:mt())).next(l=>(XA(r,OI(t),l),{documents:l,gs:i})))}function XA(e,t,n){let r=e.Es.get(t)||ct.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Es.set(t,r)}class _f{constructor(){this.activeTargetIds=$I()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class YA{constructor(){this.ho=new _f,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,r){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new _f,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class JA{To(t){}shutdown(){}}/**
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
 */const yf="ConnectivityMonitor";class vf{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Y(yf,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){Y(yf,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oi=null;function Il(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
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
 */const Ua="RestConnection",ZA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class t0{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===uo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,n,r,s,i){const a=Il(),l=this.bo(t,n.toUriEncodedString());Y(Ua,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(t,l,c,r).then(h=>(Y(Ua,`Received RPC '${t}' ${a}: `,h),h),h=>{throw jr(Ua,`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}Co(t,n,r,s,i,a){return this.So(t,n,r,s,i)}Do(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}bo(t,n){const r=ZA[t];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class e0{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const ae="WebChannelConnection";class n0 extends t0{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,s){const i=Il();return new Promise((a,l)=>{const c=new Zp;c.setWithCredentials(!0),c.listenOnce(tg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case qi.NO_ERROR:const f=c.getResponseJson();Y(ae,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case qi.TIMEOUT:Y(ae,`RPC '${t}' ${i} timed out`),l(new tt(F.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const p=c.getStatus();if(Y(ae,`RPC '${t}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(x){const $=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf($)>=0?$:F.UNKNOWN}(_.status);l(new tt(S,_.message))}else l(new tt(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new tt(F.UNAVAILABLE,"Connection failed."));break;default:lt()}}finally{Y(ae,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);Y(ae,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Wo(t,n,r){const s=Il(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=rg(),l=ng(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Y(ae,`Creating RPC '${t}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let m=!1,_=!1;const S=new e0({Fo:x=>{_?Y(ae,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(m||(Y(ae,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),Y(ae,`RPC '${t}' stream ${s} sending:`,x),p.send(x))},Mo:()=>p.close()}),V=(x,$,B)=>{x.listen($,j=>{try{B(j)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,Es.EventType.OPEN,()=>{_||(Y(ae,`RPC '${t}' stream ${s} transport opened.`),S.Qo())}),V(p,Es.EventType.CLOSE,()=>{_||(_=!0,Y(ae,`RPC '${t}' stream ${s} transport closed`),S.Uo())}),V(p,Es.EventType.ERROR,x=>{_||(_=!0,jr(ae,`RPC '${t}' stream ${s} transport errored:`,x),S.Uo(new tt(F.UNAVAILABLE,"The operation could not be completed")))}),V(p,Es.EventType.MESSAGE,x=>{var $;if(!_){const B=x.data[0];Rt(!!B);const j=B,q=(j==null?void 0:j.error)||(($=j[0])===null||$===void 0?void 0:$.error);if(q){Y(ae,`RPC '${t}' stream ${s} received error:`,q);const ot=q.status;let et=function(y){const I=$t[y];if(I!==void 0)return Lg(I)}(ot),b=q.message;et===void 0&&(et=F.INTERNAL,b="Unknown error status: "+ot+" with message "+q.message),_=!0,S.Uo(new tt(et,b)),p.close()}else Y(ae,`RPC '${t}' stream ${s} received:`,B),S.Ko(B)}}),V(l,eg.STAT_EVENT,x=>{x.stat===hl.PROXY?Y(ae,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===hl.NOPROXY&&Y(ae,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function Ba(){return typeof document<"u"?document:null}/**
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
 */function zo(e){return new oA(e,!0)}/**
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
 */class Yg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ef="PersistentStream";class Jg{constructor(t,n,r,s,i,a,l,c){this.Ti=t,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Yg(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{t(()=>{const s=new tt(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,n){const r=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return Y(Ef,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(Y(Ef,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r0 extends Jg{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=cA(this.serializer,t),r=function(i){if(!("targetChange"in i))return ct.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ct.min():a.readTime?en(a.readTime):ct.min()}(t);return this.listener.p_(n,r)}y_(t){const n={};n.database=Tl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=ml(c)?{documents:fA(i,c)}:{query:dA(i,c).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Bg(i,a.resumeToken);const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ct.min())>0){l.readTime=mo(i,a.snapshotVersion.toTimestamp());const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=gA(this.serializer,t);r&&(n.labels=r),this.I_(n)}w_(t){const n={};n.database=Tl(this.serializer),n.removeTarget=t,this.I_(n)}}class s0 extends Jg{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Rt(!!t.streamToken),this.lastStreamToken=t.streamToken,Rt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Rt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=hA(t.writeResults,t.commitTime),r=en(t.commitTime);return this.listener.v_(r,n)}C_(){const t={};t.database=Tl(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>uA(this.serializer,r))};this.I_(n)}}/**
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
 */class i0{}class o0 extends i0{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new tt(F.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(t,vl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new tt(F.UNKNOWN,i.toString())})}Co(t,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,vl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new tt(F.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class a0{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(_n(n),this.N_=!1):Y("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const yr="RemoteStore";class l0{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Er(this)&&(Y(yr,"Restarting streams for network reachability change."),await async function(c){const h=ut(c);h.W_.add(4),await li(h),h.j_.set("Unknown"),h.W_.delete(4),await Go(h)}(this))})}),this.j_=new a0(r,s)}}async function Go(e){if(Er(e))for(const t of e.G_)await t(!0)}async function li(e){for(const t of e.G_)await t(!1)}function Zg(e,t){const n=ut(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),Ac(n)?Ic(n):es(n).c_()&&wc(n,t))}function Tc(e,t){const n=ut(e),r=es(n);n.K_.delete(t),r.c_()&&tm(n,t),n.K_.size===0&&(r.c_()?r.P_():Er(n)&&n.j_.set("Unknown"))}function wc(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ct.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}es(e).y_(t)}function tm(e,t){e.H_.Ne(t),es(e).w_(t)}function Ic(e){e.H_=new nA({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),es(e).start(),e.j_.B_()}function Ac(e){return Er(e)&&!es(e).u_()&&e.K_.size>0}function Er(e){return ut(e).W_.size===0}function em(e){e.H_=void 0}async function c0(e){e.j_.set("Online")}async function u0(e){e.K_.forEach((t,n)=>{wc(e,t)})}async function h0(e,t){em(e),Ac(e)?(e.j_.q_(t),Ic(e)):e.j_.set("Unknown")}async function f0(e,t,n){if(e.j_.set("Online"),t instanceof Ug&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.K_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.K_.delete(l),s.H_.removeTarget(l))}(e,t)}catch(r){Y(yr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yo(e,r)}else if(t instanceof Gi?e.H_.We(t):t instanceof Fg?e.H_.Ze(t):e.H_.je(t),!n.isEqual(ct.min()))try{const r=await Xg(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.H_.ot(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.K_.get(h);f&&i.K_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.K_.get(c);if(!f)return;i.K_.set(c,f.withResumeToken(ne.EMPTY_BYTE_STRING,f.snapshotVersion)),tm(i,c);const p=new Dn(f.target,c,h,f.sequenceNumber);wc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){Y(yr,"Failed to raise snapshot:",r),await yo(e,r)}}async function yo(e,t,n){if(!ts(t))throw t;e.W_.add(1),await li(e),e.j_.set("Offline"),n||(n=()=>Xg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Y(yr,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Go(e)})}function nm(e,t){return t().catch(n=>yo(e,n,t))}async function Wo(e){const t=ut(e),n=Kn(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:lc;for(;d0(t);)try{const s=await WA(t.localStore,r);if(s===null){t.U_.length===0&&n.P_();break}r=s.batchId,p0(t,s)}catch(s){await yo(t,s)}rm(t)&&sm(t)}function d0(e){return Er(e)&&e.U_.length<10}function p0(e,t){e.U_.push(t);const n=Kn(e);n.c_()&&n.S_&&n.b_(t.mutations)}function rm(e){return Er(e)&&!Kn(e).u_()&&e.U_.length>0}function sm(e){Kn(e).start()}async function g0(e){Kn(e).C_()}async function m0(e){const t=Kn(e);for(const n of e.U_)t.b_(n.mutations)}async function _0(e,t,n){const r=e.U_.shift(),s=pc.from(r,t,n);await nm(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Wo(e)}async function y0(e,t){t&&Kn(e).S_&&await async function(r,s){if(function(a){return tA(a)&&a!==F.ABORTED}(s.code)){const i=r.U_.shift();Kn(r).h_(),await nm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wo(r)}}(e,t),rm(e)&&sm(e)}async function Tf(e,t){const n=ut(e);n.asyncQueue.verifyOperationInProgress(),Y(yr,"RemoteStore received new credentials");const r=Er(n);n.W_.add(3),await li(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Go(n)}async function v0(e,t){const n=ut(e);t?(n.W_.delete(2),await Go(n)):t||(n.W_.add(2),await li(n),n.j_.set("Unknown"))}function es(e){return e.J_||(e.J_=function(n,r,s){const i=ut(n);return i.M_(),new r0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:c0.bind(null,e),No:u0.bind(null,e),Lo:h0.bind(null,e),p_:f0.bind(null,e)}),e.G_.push(async t=>{t?(e.J_.h_(),Ac(e)?Ic(e):e.j_.set("Unknown")):(await e.J_.stop(),em(e))})),e.J_}function Kn(e){return e.Y_||(e.Y_=function(n,r,s){const i=ut(n);return i.M_(),new s0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:g0.bind(null,e),Lo:y0.bind(null,e),D_:m0.bind(null,e),v_:_0.bind(null,e)}),e.G_.push(async t=>{t?(e.Y_.h_(),await Wo(e)):(await e.Y_.stop(),e.U_.length>0&&(Y(yr,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))})),e.Y_}/**
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
 */class bc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new bc(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new tt(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rc(e,t){if(_n("AsyncQueue",`${t}: ${e}`),ts(e))return new tt(F.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Br{static emptySet(t){return new Br(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||nt.comparator(n.key,r.key):(n,r)=>nt.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new Lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Br)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class wf{constructor(){this.Z_=new Lt(nt.comparator)}track(t){const n=t.doc.key,r=this.Z_.get(n);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(n):t.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):lt():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Gr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Gr(t,n,Br.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$o(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class E0{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class T0{constructor(){this.queries=If(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=ut(n),i=s.queries;s.queries=If(),i.forEach((a,l)=>{for(const c of l.ta)c.onError(r)})})(this,new tt(F.ABORTED,"Firestore shutting down"))}}function If(){return new vr(e=>Ag(e),$o)}async function w0(e,t){const n=ut(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new E0,r=t.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Rc(a,`Initialization of query '${Cr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&Sc(n)}async function I0(e,t){const n=ut(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function A0(e,t){const n=ut(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.ta)l.oa(s)&&(r=!0);a.ea=s}}r&&Sc(n)}function b0(e,t,n){const r=ut(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function Sc(e){e.ia.forEach(t=>{t.next()})}var Al,Af;(Af=Al||(Al={}))._a="default",Af.Cache="cache";class R0{constructor(t,n,r){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Gr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Gr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Al.Cache}}/**
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
 */class im{constructor(t){this.key=t}}class om{constructor(t){this.key=t}}class S0{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=mt(),this.mutatedKeys=mt(),this.ya=bg(t),this.wa=new Br(this.ya)}get Sa(){return this.fa}ba(t,n){const r=n?n.Da:new wf,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,p)=>{const m=s.get(f),_=jo(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?S!==V&&(r.track({type:3,doc:_}),x=!0):this.va(m,_)||(r.track({type:2,doc:_}),x=!0,(c&&this.ya(_,c)>0||h&&this.ya(_,h)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(c||h)&&(l=!0)),x&&(_?(a=a.add(_),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:l,mutatedKeys:i}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((f,p)=>function(_,S){const V=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return lt()}};return V(_)-V(S)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),s=s!=null&&s;const l=n&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new Gr(this.query,t.wa,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new wf,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=mt(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return t.forEach(r=>{this.pa.has(r)||n.push(new om(r))}),this.pa.forEach(r=>{t.has(r)||n.push(new im(r))}),n}Oa(t){this.fa=t.gs,this.pa=mt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Gr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cc="SyncEngine";class C0{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class P0{constructor(t){this.key=t,this.Ba=!1}}class V0{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new vr(l=>Ag(l),$o),this.qa=new Map,this.Qa=new Set,this.$a=new Lt(nt.comparator),this.Ua=new Map,this.Ka=new _c,this.Wa={},this.Ga=new Map,this.za=zr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function D0(e,t,n=!0){const r=fm(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await am(r,t,n,!0),s}async function x0(e,t){const n=fm(e);await am(n,t,!0,!1)}async function am(e,t,n,r){const s=await QA(e.localStore,Ze(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await k0(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Zg(e.remoteStore,s),l}async function k0(e,t,n,r,s){e.Ha=(p,m,_)=>async function(V,x,$,B){let j=x.view.ba($);j.ls&&(j=await mf(V.localStore,x.query,!1).then(({documents:b})=>x.view.ba(b,j)));const q=B&&B.targetChanges.get(x.targetId),ot=B&&B.targetMismatches.get(x.targetId)!=null,et=x.view.applyChanges(j,V.isPrimaryClient,q,ot);return Rf(V,x.targetId,et.Ma),et.snapshot}(e,p,m,_);const i=await mf(e.localStore,t,!0),a=new S0(t,i.gs),l=a.ba(i.documents),c=ai.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);Rf(e,n,h.Ma);const f=new C0(t,n,a);return e.ka.set(t,f),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),h.snapshot}async function N0(e,t,n){const r=ut(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!$o(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tc(r.remoteStore,s.targetId),bl(r,s.targetId)}).catch(Zr)):(bl(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function O0(e,t){const n=ut(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tc(n.remoteStore,r.targetId))}async function M0(e,t,n){const r=q0(e);try{const s=await function(a,l){const c=ut(a),h=Ht.now(),f=l.reduce((_,S)=>_.add(S.key),mt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=yn(),V=mt();return c.ds.getEntries(_,f).next(x=>{S=x,S.forEach(($,B)=>{B.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(x=>{p=x;const $=[];for(const B of l){const j=QI(B,p.get(B.key).overlayedDocument);j!=null&&$.push(new Jn(B.key,j,mg(j.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,$,l)}).next(x=>{m=x;const $=x.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(_,x.batchId,$)})}).then(()=>({batchId:m.batchId,changes:Sg(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new Lt(pt)),h=h.insert(l,c),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await ci(r,s.changes),await Wo(r.remoteStore)}catch(s){const i=Rc(s,"Failed to persist write");n.reject(i)}}async function lm(e,t){const n=ut(e);try{const r=await zA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(Rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Rt(a.Ba):s.removedDocuments.size>0&&(Rt(a.Ba),a.Ba=!1))}),await ci(n,r,t)}catch(r){await Zr(r)}}function bf(e,t,n){const r=ut(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const l=a.view.sa(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ut(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(l)&&(h=!0)}),h&&Sc(c)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function L0(e,t,n){const r=ut(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let a=new Lt(nt.comparator);a=a.insert(i,he.newNoDocument(i,ct.min()));const l=mt().add(i),c=new Ko(ct.min(),new Map,new Lt(pt),a,l);await lm(r,c),r.$a=r.$a.remove(i),r.Ua.delete(t),Pc(r)}else await wl(r.localStore,t,!1).then(()=>bl(r,t,n)).catch(Zr)}async function F0(e,t){const n=ut(e),r=t.batch.batchId;try{const s=await KA(n.localStore,t);um(n,r,null),cm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ci(n,s)}catch(s){await Zr(s)}}async function U0(e,t,n){const r=ut(e);try{const s=await function(a,l){const c=ut(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Rt(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,t);um(r,t,n),cm(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ci(r,s)}catch(s){await Zr(s)}}function cm(e,t){(e.Ga.get(t)||[]).forEach(n=>{n.resolve()}),e.Ga.delete(t)}function um(e,t,n){const r=ut(e);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function bl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach(r=>{e.Ka.containsKey(r)||hm(e,r)})}function hm(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);n!==null&&(Tc(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),Pc(e))}function Rf(e,t,n){for(const r of n)r instanceof im?(e.Ka.addReference(r.key,t),B0(e,r)):r instanceof om?(Y(Cc,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||hm(e,r.key)):lt()}function B0(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(Y(Cc,"New document in limbo: "+n),e.Qa.add(r),Pc(e))}function Pc(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new nt(kt.fromString(t)),r=e.za.next();e.Ua.set(r,new P0(n)),e.$a=e.$a.insert(n,r),Zg(e.remoteStore,new Dn(Ze(Ig(n.path)),r,"TargetPurposeLimboResolution",Lo.ae))}}async function ci(e,t,n){const r=ut(e),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,c)=>{a.push(r.Ha(c,t,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=vc.Yi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.La.p_(s),await async function(c,h){const f=ut(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Hi,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.Ji,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!ts(p))throw p;Y(Ec,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=f.Ts.get(m),S=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(S);f.Ts=f.Ts.insert(m,V)}}}(r.localStore,i))}async function $0(e,t){const n=ut(e);if(!n.currentUser.isEqual(t)){Y(Cc,"User change. New user:",t.toKey());const r=await Qg(n.localStore,t);n.currentUser=t,function(i,a){i.Ga.forEach(l=>{l.forEach(c=>{c.reject(new tt(F.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ci(n,r.Rs)}}function j0(e,t){const n=ut(e),r=n.Ua.get(t);if(r&&r.Ba)return mt().add(r.key);{let s=mt();const i=n.qa.get(t);if(!i)return s;for(const a of i){const l=n.ka.get(a);s=s.unionWith(l.view.Sa)}return s}}function fm(e){const t=ut(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=lm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=j0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=L0.bind(null,t),t.La.p_=A0.bind(null,t.eventManager),t.La.Ja=b0.bind(null,t.eventManager),t}function q0(e){const t=ut(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=F0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=U0.bind(null,t),t}class vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zo(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return HA(this.persistence,new $A,t.initialUser,this.serializer)}Xa(t){return new Wg(yc.ri,this.serializer)}Za(t){return new YA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vo.provider={build:()=>new vo};class H0 extends vo{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Rt(this.persistence.referenceDelegate instanceof _o);const r=this.persistence.referenceDelegate.garbageCollector;return new RA(r,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?Te.withCacheSize(this.cacheSizeBytes):Te.DEFAULT;return new Wg(r=>_o.ri(r,n),this.serializer)}}class Rl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$0.bind(null,this.syncEngine),await v0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new T0}()}createDatastore(t){const n=zo(t.databaseInfo.databaseId),r=function(i){return new n0(i)}(t.databaseInfo);return function(i,a,l,c){return new o0(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new l0(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>bf(this.syncEngine,n,0),function(){return vf.D()?new vf:new JA}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,f){const p=new V0(s,i,a,l,c,h);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ut(s);Y(yr,"RemoteStore shutting down."),i.W_.add(5),await li(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rl.provider={build:()=>new Rl};/**
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
 */class K0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):_n("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const zn="FirestoreClient";class z0{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=le.UNAUTHENTICATED,this.clientId=og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Rc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $a(e,t){e.asyncQueue.verifyOperationInProgress(),Y(zn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Sf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await G0(e);Y(zn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Tf(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Tf(t.remoteStore,s)),e._onlineComponents=t}async function G0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Y(zn,"Using user provided OfflineComponentProvider");try{await $a(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await $a(e,new vo)}}else Y(zn,"Using default OfflineComponentProvider"),await $a(e,new H0(void 0));return e._offlineComponents}async function dm(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Y(zn,"Using user provided OnlineComponentProvider"),await Sf(e,e._uninitializedComponentsProvider._online)):(Y(zn,"Using default OnlineComponentProvider"),await Sf(e,new Rl))),e._onlineComponents}function W0(e){return dm(e).then(t=>t.syncEngine)}async function Q0(e){const t=await dm(e),n=t.eventManager;return n.onListen=D0.bind(null,t.syncEngine),n.onUnlisten=N0.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=x0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=O0.bind(null,t.syncEngine),n}function X0(e,t,n={}){const r=new Mn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new K0({next:m=>{f.su(),a.enqueueAndForget(()=>I0(i,p)),m.fromCache&&c.source==="server"?h.reject(new tt(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new R0(l,f,{includeMetadataChanges:!0,Ta:!0});return w0(i,p)}(await Q0(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function pm(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Cf=new Map;/**
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
 */function gm(e,t,n){if(!n)throw new tt(F.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Y0(e,t,n,r){if(t===!0&&r===!0)throw new tt(F.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Pf(e){if(!nt.isDocumentKey(e))throw new tt(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vf(e){if(nt.isDocumentKey(e))throw new tt(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":lt()}function Wr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tt(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(e);throw new tt(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const mm="firestore.googleapis.com",Df=!0;class xf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new tt(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mm,this.ssl=Df}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Df;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Gg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<AA)throw new tt(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Y0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new tt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new tt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new tt(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tt(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new tt(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zw;switch(r.type){case"firstParty":return new rI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new tt(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cf.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Cf.delete(n),r.terminate())}(this),Promise.resolve()}}function J0(e,t,n,r={}){var s;const i=(e=Wr(e,Qo))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;i.host!==mm&&i.host!==l&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!Ks(c,a)&&(e._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=le.MOCK_USER;else{h=uE(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new tt(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new le(p)}e._authCredentials=new tI(new sg(h,f))}}/**
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
 */class Xo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xo(this.firestore,t,this._query)}}class Oe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Oe(this.firestore,t,this._key)}}class Ln extends Xo{constructor(t,n,r){super(t,n,Ig(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Oe(this.firestore,null,new nt(t))}withConverter(t){return new Ln(this.firestore,t,this._path)}}function _m(e,t,...n){if(e=nn(e),gm("collection","path",t),e instanceof Qo){const r=kt.fromString(t,...n);return Vf(r),new Ln(e,null,r)}{if(!(e instanceof Oe||e instanceof Ln))throw new tt(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Vf(r),new Ln(e.firestore,null,r)}}function ym(e,t,...n){if(e=nn(e),arguments.length===1&&(t=og.newId()),gm("doc","path",t),e instanceof Qo){const r=kt.fromString(t,...n);return Pf(r),new Oe(e,null,new nt(r))}{if(!(e instanceof Oe||e instanceof Ln))throw new tt(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Pf(r),new Oe(e.firestore,e instanceof Ln?e.converter:null,new nt(r))}}/**
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
 */const kf="AsyncQueue";class Nf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Yg(this,"async_queue_retry"),this.Su=()=>{const r=Ba();r&&Y(kf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const n=Ba();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Ba();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Mn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!ts(t))throw t;Y(kf,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw _n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(t,n,r){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const s=bc.createAndSchedule(this,t,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&lt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Yo extends Qo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Nf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nf(t),this._firestoreClient=void 0,await t}}}function Z0(e,t){const n=typeof e=="object"?e:Sp(),r=typeof e=="string"?e:uo,s=ii(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lE("firestore");i&&J0(s,...i)}return s}function vm(e){if(e._terminated)throw new tt(F.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||tb(e),e._firestoreClient}function tb(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,f){return new yI(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pm(f.experimentalLongPollingOptions),f.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new z0(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
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
 */class Qr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qr(ne.fromBase64String(t))}catch(n){throw new tt(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qr(ne.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Jo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new tt(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Zo{constructor(t){this._methodName=t}}/**
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
 */class Dc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new tt(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new tt(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xc{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const eb=/^__.*__$/;class nb{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Jn(t,this.data,this.fieldMask,n,this.fieldTransforms):new oi(t,this.data,n,this.fieldTransforms)}}class Em{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Jn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw lt()}}class kc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new kc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Eo(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Tm(this.Lu)&&eb.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class rb{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||zo(t)}ju(t,n,r,s=!1){return new kc({Lu:t,methodName:n,zu:r,path:te.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wm(e){const t=e._freezeSettings(),n=zo(e._databaseId);return new rb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sb(e,t,n,r,s,i={}){const a=e.ju(i.merge||i.mergeFields?2:0,t,n,s);Oc("Data must be an object, but it was:",a,r);const l=Im(r,a);let c,h;if(i.merge)c=new Ce(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Sl(t,p,n);if(!a.contains(m))throw new tt(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);bm(f,m)||f.push(m)}c=new Ce(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new nb(new we(l),c,h)}class ta extends Zo{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ta}}class Nc extends Zo{_toFieldTransform(t){return new KI(t.path,new Ys)}isEqual(t){return t instanceof Nc}}function ib(e,t,n,r){const s=e.ju(1,t,n);Oc("Data must be an object, but it was:",s,r);const i=[],a=we.empty();Yn(r,(c,h)=>{const f=Mc(t,c,n);h=nn(h);const p=s.Uu(f);if(h instanceof ta)i.push(f);else{const m=ea(h,p);m!=null&&(i.push(f),a.set(f,m))}});const l=new Ce(i);return new Em(a,l,s.fieldTransforms)}function ob(e,t,n,r,s,i){const a=e.ju(1,t,n),l=[Sl(t,r,n)],c=[s];if(i.length%2!=0)throw new tt(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Sl(t,i[m])),c.push(i[m+1]);const h=[],f=we.empty();for(let m=l.length-1;m>=0;--m)if(!bm(h,l[m])){const _=l[m];let S=c[m];S=nn(S);const V=a.Uu(_);if(S instanceof ta)h.push(_);else{const x=ea(S,V);x!=null&&(h.push(_),f.set(_,x))}}const p=new Ce(h);return new Em(f,p,a.fieldTransforms)}function ea(e,t){if(Am(e=nn(e)))return Oc("Unsupported field value:",t,e),Im(e,t);if(e instanceof Zo)return function(r,s){if(!Tm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=ea(l,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ht.fromDate(r);return{timestampValue:mo(s.serializer,i)}}if(r instanceof Ht){const i=new Ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mo(s.serializer,i)}}if(r instanceof Dc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qr)return{bytesValue:Bg(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xc)return function(a,l){return{mapValue:{fields:{[pg]:{stringValue:gg},[ho]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Wu("VectorValues must only contain numeric values.");return dc(l.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Vc(r)}`)}(e,t)}function Im(e,t){const n={};return lg(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yn(e,(r,s)=>{const i=ea(s,t.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Am(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ht||e instanceof Dc||e instanceof Qr||e instanceof Oe||e instanceof Zo||e instanceof xc)}function Oc(e,t,n){if(!Am(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vc(n);throw r==="an object"?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}}function Sl(e,t,n){if((t=nn(t))instanceof Jo)return t._internalPath;if(typeof t=="string")return Mc(e,t);throw Eo("Field path arguments must be of type string or ",e,!1,void 0,n)}const ab=new RegExp("[~\\*/\\[\\]]");function Mc(e,t,n){if(t.search(ab)>=0)throw Eo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jo(...t.split("."))._internalPath}catch{throw Eo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Eo(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new tt(F.INVALID_ARGUMENT,l+e+c)}function bm(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Rm{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Sm("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lb extends Rm{data(){return super.data()}}function Sm(e,t){return typeof t=="string"?Mc(e,t):t instanceof Jo?t._internalPath:t._delegate._internalPath}/**
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
 */function cb(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new tt(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ub{convertValue(t,n="none"){switch(Hn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw lt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Yn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n[ho].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Bt(a.doubleValue));return new xc(i)}convertGeoPoint(t){return new Dc(Bt(t.latitude),Bt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Uo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ws(t));default:return null}}convertTimestamp(t){const n=jn(t);return new Ht(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=kt.fromString(t);Rt(zg(r));const s=new Qs(r.get(1),r.get(3)),i=new nt(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function hb(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
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
 */class Mi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fb extends Rm{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Sm("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wi extends fb{data(t={}){return super.data(t)}}class db{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Wi(this._firestore,this._userDataWriter,r.key,r,new Mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new tt(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Wi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Wi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:pb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return lt()}}class gb extends ub{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function mb(e){e=Wr(e,Xo);const t=Wr(e.firestore,Yo),n=vm(t),r=new gb(t);return cb(e._query),X0(n,e._query).then(s=>new db(t,r,e,s))}function _b(e,t,n,...r){e=Wr(e,Oe);const s=Wr(e.firestore,Yo),i=wm(s);let a;return a=typeof(t=nn(t))=="string"||t instanceof Jo?ob(i,"updateDoc",e._key,t,n,r):ib(i,"updateDoc",e._key,t),Cm(s,[a.toMutation(e._key,tn.exists(!0))])}function yb(e,t){const n=Wr(e.firestore,Yo),r=ym(e),s=hb(e.converter,t);return Cm(n,[sb(wm(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function Cm(e,t){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>M0(await W0(r),s,i)),i.promise}(vm(e),t)}function Of(){return new Nc("serverTimestamp")}(function(t,n=!0){(function(s){Jr=s})(TT),Bn(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Yo(new eI(r.getProvider("auth-internal")),new sI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new tt(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Je(Uh,Bh,t),Je(Uh,Bh,"esm2017")})();const vb={apiKey:"AIzaSyBFxjbUz7Do98SBiG0QWiNwyoAIuhlKFSQ",authDomain:"faey-birthday-reminder.firebaseapp.com",projectId:"faey-birthday-reminder",storageBucket:"faey-birthday-reminder.firebasestorage.app",messagingSenderId:"631353888571",appId:"1:631353888571:web:70dc44372eddebc661b11e",measurementId:"G-DQBHKCSTNZ"},Pm=Rp(vb);Qw(Pm);const Cl=Z0(Pm),Eb={key:0,class:"bg-opacity-50 fixed inset-0 flex items-center justify-center bg-gray-900/50"},Tb={class:"w-full max-w-sm rounded-lg bg-white p-6"},wb={class:"text-center text-xl font-semibold"},Ib={class:"mt-4"},Ab={class:"flex gap-4"},bb=["value"],Rb=["value"],Sb={class:"mt-4"},Cb={class:"mt-4"},Pb={class:"mt-2 flex max-h-24 flex-wrap gap-2 overflow-y-auto"},Vb=["onClick"],Db={class:"mt-2 flex"},xb=["onKeydown"],kb={class:"mt-4 flex justify-end"},Nb={__name:"BirthdayModal",props:{show:Boolean,birthdayToEdit:{type:Object,default:null}},emits:["close"],setup(e,{emit:t}){const n=e,r=t,s=Fe(""),i=Fe(""),a=Fe(""),l=Fe(""),c=Fe([]),h=Fe("");Uy(()=>{n.birthdayToEdit?(s.value=n.birthdayToEdit.name||"",i.value=n.birthdayToEdit.birthMonth||"",a.value=n.birthdayToEdit.birthDay||"",l.value=n.birthdayToEdit.notes||"",c.value=[...n.birthdayToEdit.tags||[]]):(s.value="",i.value="",a.value="",l.value="",c.value=[])});const f=()=>{const _=h.value.trim();_&&!c.value.includes(_)&&c.value.push(_),h.value=""},p=_=>{c.value=c.value.filter(S=>S!==_)},m=async()=>{const _={name:s.value,birthMonth:i.value,birthDay:a.value,notes:l.value,tags:c.value,createdAt:Of()};try{if(n.birthdayToEdit){const S=ym(Cl,"birthdays",n.birthdayToEdit.id);await _b(S,_),console.log("Document updated")}else _.createdAt=Of(),await yb(_m(Cl,"birthdays"),_),console.log("New document created");r("refresh"),r("close")}catch(S){console.error("Error saving document: ",S),alert("Failed to save birthday")}};return(_,S)=>(Zt(),$r(dv,{name:"BirthdayModal","enter-active-class":"transition-opacity duration-500","leave-active-class":"transition-opacity duration-500","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:Gl(()=>[e.show?(Zt(),Ue("div",Eb,[ht("div",Tb,[ht("h2",wb,[yy(_.$slots,"header",{},()=>[S[6]||(S[6]=eo("Add New Birthday"))])]),ht("form",{onSubmit:sl(m,["prevent"]),class:"mt-4"},[ht("div",null,[S[7]||(S[7]=ht("label",{for:"name",class:"block text-sm font-medium"},"Name",-1)),ms(ht("input",{"onUpdate:modelValue":S[0]||(S[0]=V=>s.value=V),type:"text",id:"name",required:"",class:"mt-2 w-full rounded-md border border-gray-300 px-4 py-2"},null,512),[[Va,s.value]])]),ht("div",Ib,[S[10]||(S[10]=ht("label",{class:"mb-2 block text-sm font-medium"},"Birthday",-1)),ht("div",Ab,[ms(ht("select",{"onUpdate:modelValue":S[1]||(S[1]=V=>i.value=V),required:"",class:"w-1/2 rounded-md border border-gray-300 px-4 py-2"},[S[8]||(S[8]=ht("option",{disabled:"",value:""},"Month",-1)),(Zt(),Ue(Gt,null,Ss(12,V=>ht("option",{key:V,value:V},Xe(new Date(0,V-1).toLocaleString("default",{month:"long"})),9,bb)),64))],512),[[gh,i.value]]),ms(ht("select",{"onUpdate:modelValue":S[2]||(S[2]=V=>a.value=V),required:"",class:"w-1/2 rounded-md border border-gray-300 px-4 py-2"},[S[9]||(S[9]=ht("option",{disabled:"",value:""},"Day",-1)),(Zt(),Ue(Gt,null,Ss(31,V=>ht("option",{key:V,value:V},Xe(V),9,Rb)),64))],512),[[gh,a.value]])])]),ht("div",Sb,[S[11]||(S[11]=ht("label",{for:"notes",class:"block text-sm font-medium"},"Notes",-1)),ms(ht("textarea",{rows:"4","onUpdate:modelValue":S[3]||(S[3]=V=>l.value=V),id:"notes",class:"mt-2 w-full rounded-md border border-gray-300 px-4 py-2"},null,512),[[Va,l.value]])]),ht("div",Cb,[S[12]||(S[12]=ht("label",{for:"tags",class:"block text-sm font-medium"},"Tags",-1)),ht("div",Pb,[(Zt(!0),Ue(Gt,null,Ss(c.value,V=>(Zt(),Ue("span",{key:V,class:"flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-pink-700"},[eo(Xe(V)+" ",1),ht("button",{type:"button",onClick:x=>p(V),class:"ml-2 text-pink-500 hover:text-pink-700"}," × ",8,Vb)]))),128))]),ht("div",Db,[ms(ht("input",{"onUpdate:modelValue":S[4]||(S[4]=V=>h.value=V),onKeydown:Lv(sl(f,["prevent"]),["enter"]),type:"text",placeholder:"Add a tag and press Enter",class:"flex-1 rounded-md border border-gray-300 px-4 py-2"},null,40,xb),[[Va,h.value]]),ht("button",{type:"button",onClick:f,class:"ml-2 rounded-md bg-pink-600 px-4 py-2 text-white"}," Add ")])]),ht("div",kb,[ht("button",{type:"button",onClick:S[5]||(S[5]=V=>_.$emit("close")),class:"mr-2 rounded-md bg-gray-400 px-4 py-2 text-white"}," Cancel "),S[13]||(S[13]=ht("button",{type:"submit",class:"rounded-md bg-pink-600 px-4 py-2 text-white"},"Save",-1))])],32)])])):dp("",!0)]),_:3}))}},Ob={class:"min-h-screen bg-gray-100"},Mb={class:"flex items-center justify-between bg-pink-700 p-4 text-white"},Lb={class:"mx-auto max-w-4xl py-2"},Fb={class:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"},Ub={__name:"App",setup(e){const t=Fe(!1),n=Fe([]),r=Fe(null);async function s(){const l=_m(Cl,"birthdays"),c=await mb(l);n.value=c.docs.map(h=>({id:h.id,...h.data()}))}s();const i=(l=null)=>{r.value=l,t.value=!0},a=async()=>{await s()};return(l,c)=>(Zt(),Ue("div",Ob,[ht("header",Mb,[c[3]||(c[3]=ht("h2",{class:"text-2xl font-semibold"},"Faey Birthday Reminder",-1)),ht("div",null,[ht("button",{onClick:c[0]||(c[0]=h=>t.value=!0),class:"flex h-10 w-10 items-center justify-center rounded-full bg-white outline outline-transparent transition-all duration-150 ease-in-out hover:bg-pink-50 hover:outline-pink-300 active:bg-pink-100","aria-label":"Add new birthday"},c[2]||(c[2]=[ht("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",class:"h-8 w-8 fill-pink-700"},[ht("path",{d:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"})],-1)]))])]),ht("div",Lb,[ht("div",Fb,[(Zt(!0),Ue(Gt,null,Ss(n.value,h=>(Zt(),$r(Yv,{key:h.name,birthday:h,onClick:f=>i(h)},null,8,["birthday","onClick"]))),128))])]),(Zt(),$r(ry,{to:"body"},[ve(Nb,{show:t.value,birthdayToEdit:r.value,onClose:c[1]||(c[1]=()=>{t.value=!1,r.value=null}),onRefresh:a},{header:Gl(()=>[eo(Xe(r.value?"Edit Birthday":"New Birthday Entry"),1)]),_:1},8,["show","birthdayToEdit"])]))]))}},Bb="modulepreload",$b=function(e){return"/"+e},Mf={},jb=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=$b(c),c in Mf)return;Mf[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Bb,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Vm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Vm(e.default)}const At=Object.assign;function ja(e,t){const n={};for(const r in t){const s=t[r];n[r]=He(s)?s.map(e):e(s)}return n}const Os=()=>{},He=Array.isArray,Dm=/#/g,Hb=/&/g,Kb=/\//g,zb=/=/g,Gb=/\?/g,xm=/\+/g,Wb=/%5B/g,Qb=/%5D/g,km=/%5E/g,Xb=/%60/g,Nm=/%7B/g,Yb=/%7C/g,Om=/%7D/g,Jb=/%20/g;function Lc(e){return encodeURI(""+e).replace(Yb,"|").replace(Wb,"[").replace(Qb,"]")}function Zb(e){return Lc(e).replace(Nm,"{").replace(Om,"}").replace(km,"^")}function Pl(e){return Lc(e).replace(xm,"%2B").replace(Jb,"+").replace(Dm,"%23").replace(Hb,"%26").replace(Xb,"`").replace(Nm,"{").replace(Om,"}").replace(km,"^")}function tR(e){return Pl(e).replace(zb,"%3D")}function eR(e){return Lc(e).replace(Dm,"%23").replace(Gb,"%3F")}function nR(e){return e==null?"":eR(e).replace(Kb,"%2F")}function ti(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const rR=/\/$/,sR=e=>e.replace(rR,"");function qa(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=lR(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ti(a)}}function iR(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Lf(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function oR(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(t.matched[r],n.matched[s])&&Mm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!aR(e[n],t[n]))return!1;return!0}function aR(e,t){return He(e)?Ff(e,t):He(t)?Ff(t,e):e===t}function Ff(e,t){return He(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function lR(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ei;(function(e){e.pop="pop",e.push="push"})(ei||(ei={}));var Ms;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ms||(Ms={}));function cR(e){if(!e)if(Dr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),sR(e)}const uR=/^[^#]+#/;function hR(e,t){return e.replace(uR,"#")+t}function fR(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const na=()=>({left:window.scrollX,top:window.scrollY});function dR(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=fR(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Uf(e,t){return(history.state?history.state.position-t:-1)+e}const Vl=new Map;function pR(e,t){Vl.set(e,t)}function gR(e){const t=Vl.get(e);return Vl.delete(e),t}let mR=()=>location.protocol+"//"+location.host;function Lm(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Lf(c,"")}return Lf(n,e)+r+s}function _R(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const _=Lm(e,location),S=n.value,V=t.value;let x=0;if(m){if(n.value=_,t.value=m,a&&a===S){a=null;return}x=V?m.position-V.position:0}else r(_);s.forEach($=>{$(n.value,S,{delta:x,type:ei.pop,direction:x?x>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){a=n.value}function h(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(At({},m.state,{scroll:na()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Bf(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?na():null}}function yR(e){const{history:t,location:n}=window,r={value:Lm(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:mR()+e+c;try{t[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function a(c,h){const f=At({},t.state,Bf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=At({},s.value,t.state,{forward:c,scroll:na()});i(f.current,f,!0);const p=At({},Bf(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function vR(e){e=cR(e);const t=yR(e),n=_R(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=At({location:"",base:e,go:r,createHref:hR.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ER(e){return typeof e=="string"||e&&typeof e=="object"}function Fm(e){return typeof e=="string"||typeof e=="symbol"}const Um=Symbol("");var $f;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($f||($f={}));function Yr(e,t){return At(new Error,{type:e,[Um]:!0},t)}function un(e,t){return e instanceof Error&&Um in e&&(t==null||!!(e.type&t))}const jf="[^/]+?",TR={sensitive:!1,strict:!1,start:!0,end:!0},wR=/[.+*?^${}()[\]/\\]/g;function IR(e,t){const n=At({},TR,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(wR,"\\$&"),_+=40;else if(m.type===1){const{value:S,repeatable:V,optional:x,regexp:$}=m;i.push({name:S,repeatable:V,optional:x});const B=$||jf;if(B!==jf){_+=10;try{new RegExp(`(${B})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${B}): `+q.message)}}let j=V?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(j=x&&h.length<2?`(?:/${j})`:"/"+j),x&&(j+="?"),s+=j,_+=20,x&&(_+=-8),V&&(_+=-20),B===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const m of e){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:V,optional:x}=_,$=S in h?h[S]:"";if(He($)&&!V)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const B=He($)?$.join("/"):$;if(!B)if(x)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=B}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function AR(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Bm(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=AR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qf(r))return 1;if(qf(s))return-1}return s.length-r.length}function qf(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bR={type:0,value:""},RR=/[a-zA-Z0-9_]/;function SR(e){if(!e)return[[]];if(e==="/")return[[bR]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:RR.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function CR(e,t,n){const r=IR(SR(e.path),n),s=At(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function PR(e,t){const n=[],r=new Map;t=Gf({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,m,_){const S=!_,V=Kf(p);V.aliasOf=_&&_.record;const x=Gf(t,p),$=[V];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ot of q)$.push(Kf(At({},V,{components:_?_.record.components:V.components,path:ot,aliasOf:_?_.record:V})))}let B,j;for(const q of $){const{path:ot}=q;if(m&&ot[0]!=="/"){const et=m.record.path,b=et[et.length-1]==="/"?"":"/";q.path=m.record.path+(ot&&b+ot)}if(B=CR(q,m,x),_?_.alias.push(B):(j=j||B,j!==B&&j.alias.push(B),S&&p.name&&!zf(B)&&a(p.name)),$m(B)&&c(B),V.children){const et=V.children;for(let b=0;b<et.length;b++)i(et[b],B,_&&_.children[b])}_=_||B}return j?()=>{a(j)}:Os}function a(p){if(Fm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=xR(p,n);n.splice(m,0,p),p.record.name&&!zf(p)&&r.set(p.record.name,p)}function h(p,m){let _,S={},V,x;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Yr(1,{location:p});x=_.record.name,S=At(Hf(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Hf(p.params,_.keys.map(j=>j.name))),V=_.stringify(S)}else if(p.path!=null)V=p.path,_=n.find(j=>j.re.test(V)),_&&(S=_.parse(V),x=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw Yr(1,{location:p,currentLocation:m});x=_.record.name,S=At({},m.params,p.params),V=_.stringify(S)}const $=[];let B=_;for(;B;)$.unshift(B.record),B=B.parent;return{name:x,path:V,params:S,matched:$,meta:DR($)}}e.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Hf(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Kf(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:VR(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function VR(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function zf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function DR(e){return e.reduce((t,n)=>At(t,n.meta),{})}function Gf(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xR(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Bm(e,t[i])<0?r=i:n=i+1}const s=kR(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function kR(e){let t=e;for(;t=t.parent;)if($m(t)&&Bm(e,t)===0)return t}function $m({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function NR(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xm," "),a=i.indexOf("="),l=ti(a<0?i:i.slice(0,a)),c=a<0?null:ti(i.slice(a+1));if(l in t){let h=t[l];He(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function Wf(e){let t="";for(let n in e){const r=e[n];if(n=tR(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&Pl(i)):[r&&Pl(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function OR(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=He(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const MR=Symbol(""),Qf=Symbol(""),Fc=Symbol(""),jm=Symbol(""),Dl=Symbol("");function ys(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Vn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Yr(4,{from:n,to:t})):m instanceof Error?c(m):ER(m)?c(Yr(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},f=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(f);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ha(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Vm(c)){const f=(c.__vccOpts||c)[t];f&&i.push(Vn(f,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=qb(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[t];return _&&Vn(_,n,r,a,l,s)()}))}}return i}function Xf(e){const t=pn(Fc),n=pn(jm),r=Be(()=>{const c=Or(e.to);return t.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Xr.bind(null,f));if(m>-1)return m;const _=Yf(c[h-2]);return h>1&&Yf(f)===_&&p[p.length-1].path!==_?p.findIndex(Xr.bind(null,c[h-2])):m}),i=Be(()=>s.value>-1&&$R(n.params,r.value.params)),a=Be(()=>s.value>-1&&s.value===n.matched.length-1&&Mm(n.params,r.value.params));function l(c={}){if(BR(c)){const h=t[Or(e.replace)?"replace":"push"](Or(e.to)).catch(Os);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function LR(e){return e.length===1?e[0]:e}const FR=jd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xf,setup(e,{slots:t}){const n=So(Xf(e)),{options:r}=pn(Fc),s=Be(()=>({[Jf(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&LR(t.default(n));return e.custom?i:Jl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),UR=FR;function BR(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function $R(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!He(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Yf(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Jf=(e,t,n)=>e??t??n,jR=jd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=pn(Dl),s=Be(()=>e.route||r.value),i=pn(Qf,0),a=Be(()=>{let h=Or(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Be(()=>s.value.matched[a.value]);Ui(Qf,Be(()=>a.value+1)),Ui(MR,l),Ui(Dl,s);const c=Fe();return Bi(()=>[c.value,l.value,e.name],([h,f,p],[m,_,S])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!Xr(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=e.name,p=l.value,m=p&&p.components[f];if(!m)return Zf(n.default,{Component:m,route:h});const _=p.props[f],S=_?_===!0?h.params:typeof _=="function"?_(h):_:null,x=Jl(m,At({},S,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Zf(n.default,{Component:x,route:h})||x}}});function Zf(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const qR=jR;function HR(e){const t=PR(e.routes,e),n=e.parseQuery||NR,r=e.stringifyQuery||Wf,s=e.history,i=ys(),a=ys(),l=ys(),c=z_(Rn);let h=Rn;Dr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ja.bind(null,k=>""+k),p=ja.bind(null,nR),m=ja.bind(null,ti);function _(k,X){let W,J;return Fm(k)?(W=t.getRecordMatcher(k),J=X):J=k,t.addRoute(J,W)}function S(k){const X=t.getRecordMatcher(k);X&&t.removeRoute(X)}function V(){return t.getRoutes().map(k=>k.record)}function x(k){return!!t.getRecordMatcher(k)}function $(k,X){if(X=At({},X||c.value),typeof k=="string"){const C=qa(n,k,X.path),N=t.resolve({path:C.path},X),L=s.createHref(C.fullPath);return At(C,N,{params:m(N.params),hash:ti(C.hash),redirectedFrom:void 0,href:L})}let W;if(k.path!=null)W=At({},k,{path:qa(n,k.path,X.path).path});else{const C=At({},k.params);for(const N in C)C[N]==null&&delete C[N];W=At({},k,{params:p(C)}),X.params=p(X.params)}const J=t.resolve(W,X),Tt=k.hash||"";J.params=f(m(J.params));const T=iR(r,At({},k,{hash:Zb(Tt),path:J.path})),w=s.createHref(T);return At({fullPath:T,hash:Tt,query:r===Wf?OR(k.query):k.query||{}},J,{redirectedFrom:void 0,href:w})}function B(k){return typeof k=="string"?qa(n,k,c.value.path):At({},k)}function j(k,X){if(h!==k)return Yr(8,{from:X,to:k})}function q(k){return b(k)}function ot(k){return q(At(B(k),{replace:!0}))}function et(k){const X=k.matched[k.matched.length-1];if(X&&X.redirect){const{redirect:W}=X;let J=typeof W=="function"?W(k):W;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=B(J):{path:J},J.params={}),At({query:k.query,hash:k.hash,params:J.path!=null?{}:k.params},J)}}function b(k,X){const W=h=$(k),J=c.value,Tt=k.state,T=k.force,w=k.replace===!0,C=et(W);if(C)return b(At(B(C),{state:typeof C=="object"?At({},Tt,C.state):Tt,force:T,replace:w}),X||W);const N=W;N.redirectedFrom=X;let L;return!T&&oR(r,J,W)&&(L=Yr(16,{to:N,from:J}),Ve(J,J,!0,!1)),(L?Promise.resolve(L):I(N,J)).catch(O=>un(O)?un(O,2)?O:Me(O):gt(O,N,J)).then(O=>{if(O){if(un(O,2))return b(At({replace:w},B(O.to),{state:typeof O.to=="object"?At({},Tt,O.to.state):Tt,force:T}),X||N)}else O=A(N,J,!0,w,Tt);return R(N,J,O),O})}function v(k,X){const W=j(k,X);return W?Promise.reject(W):Promise.resolve()}function y(k){const X=En.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(k):k()}function I(k,X){let W;const[J,Tt,T]=KR(k,X);W=Ha(J.reverse(),"beforeRouteLeave",k,X);for(const C of J)C.leaveGuards.forEach(N=>{W.push(Vn(N,k,X))});const w=v.bind(null,k,X);return W.push(w),Ee(W).then(()=>{W=[];for(const C of i.list())W.push(Vn(C,k,X));return W.push(w),Ee(W)}).then(()=>{W=Ha(Tt,"beforeRouteUpdate",k,X);for(const C of Tt)C.updateGuards.forEach(N=>{W.push(Vn(N,k,X))});return W.push(w),Ee(W)}).then(()=>{W=[];for(const C of T)if(C.beforeEnter)if(He(C.beforeEnter))for(const N of C.beforeEnter)W.push(Vn(N,k,X));else W.push(Vn(C.beforeEnter,k,X));return W.push(w),Ee(W)}).then(()=>(k.matched.forEach(C=>C.enterCallbacks={}),W=Ha(T,"beforeRouteEnter",k,X,y),W.push(w),Ee(W))).then(()=>{W=[];for(const C of a.list())W.push(Vn(C,k,X));return W.push(w),Ee(W)}).catch(C=>un(C,8)?C:Promise.reject(C))}function R(k,X,W){l.list().forEach(J=>y(()=>J(k,X,W)))}function A(k,X,W,J,Tt){const T=j(k,X);if(T)return T;const w=X===Rn,C=Dr?history.state:{};W&&(J||w?s.replace(k.fullPath,At({scroll:w&&C&&C.scroll},Tt)):s.push(k.fullPath,Tt)),c.value=k,Ve(k,X,W,w),Me()}let E;function St(){E||(E=s.listen((k,X,W)=>{if(!Ke.listening)return;const J=$(k),Tt=et(J);if(Tt){b(At(Tt,{replace:!0,force:!0}),J).catch(Os);return}h=J;const T=c.value;Dr&&pR(Uf(T.fullPath,W.delta),na()),I(J,T).catch(w=>un(w,12)?w:un(w,2)?(b(At(B(w.to),{force:!0}),J).then(C=>{un(C,20)&&!W.delta&&W.type===ei.pop&&s.go(-1,!1)}).catch(Os),Promise.reject()):(W.delta&&s.go(-W.delta,!1),gt(w,J,T))).then(w=>{w=w||A(J,T,!1),w&&(W.delta&&!un(w,8)?s.go(-W.delta,!1):W.type===ei.pop&&un(w,20)&&s.go(-1,!1)),R(J,T,w)}).catch(Os)}))}let jt=ys(),Nt=ys(),_t;function gt(k,X,W){Me(k);const J=Nt.list();return J.length?J.forEach(Tt=>Tt(k,X,W)):console.error(k),Promise.reject(k)}function Ae(){return _t&&c.value!==Rn?Promise.resolve():new Promise((k,X)=>{jt.add([k,X])})}function Me(k){return _t||(_t=!k,St(),jt.list().forEach(([X,W])=>k?W(k):X()),jt.reset()),k}function Ve(k,X,W,J){const{scrollBehavior:Tt}=e;if(!Dr||!Tt)return Promise.resolve();const T=!W&&gR(Uf(k.fullPath,0))||(J||!W)&&history.state&&history.state.scroll||null;return Kl().then(()=>Tt(k,X,T)).then(w=>w&&dR(w)).catch(w=>gt(w,k,X))}const Ot=k=>s.go(k);let Mt;const En=new Set,Ke={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:t.clearRoutes,hasRoute:x,getRoutes:V,resolve:$,options:e,push:q,replace:ot,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Nt.add,isReady:Ae,install(k){const X=this;k.component("RouterLink",UR),k.component("RouterView",qR),k.config.globalProperties.$router=X,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Or(c)}),Dr&&!Mt&&c.value===Rn&&(Mt=!0,q(s.location).catch(Tt=>{}));const W={};for(const Tt in Rn)Object.defineProperty(W,Tt,{get:()=>c.value[Tt],enumerable:!0});k.provide(Fc,X),k.provide(jm,Id(W)),k.provide(Dl,c);const J=k.unmount;En.add(k),k.unmount=function(){En.delete(k),En.size<1&&(h=Rn,E&&E(),E=null,c.value=Rn,Mt=!1,_t=!1),J()}}};function Ee(k){return k.reduce((X,W)=>X.then(()=>y(W)),Promise.resolve())}return Ke}function KR(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Xr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Xr(h,c))||s.push(c))}return[n,r,s]}const zR=HR({history:vR("/"),routes:[{path:"/about",name:"about",component:()=>jb(()=>import("./AboutView-BUQI0Iof.js"),__vite__mapDeps([0,1]))}]}),Uc=Bv(Ub);Uc.use(Hv());Uc.use(zR);Uc.mount("#app");export{ht as a,Ue as c,Zt as o};
