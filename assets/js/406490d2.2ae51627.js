"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[81681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=a,k=u["".concat(s,".").concat(b)]||u[b]||f[b]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},21201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:43},l="KB: 1043",s={unversionedId:"kb/waf/kb-1043",id:"version-6.0/kb/waf/kb-1043",title:"KB: 1043",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1043.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1043",permalink:"/v6/kb/waf/kb-1043",draft:!1,tags:[],version:"6.0",sidebarPosition:43,frontMatter:{sidebar_position:43},sidebar:"kb_sidebar",previous:{title:"KB: 1042",permalink:"/v6/kb/waf/kb-1042"},next:{title:"KB: 1044",permalink:"/v6/kb/waf/kb-1044"}},c={},p=[],u={toc:p},f="wrapper";function b(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1043"}),"KB: 1043"),(0,n.kt)("hr",null),(0,n.kt)("h1",a({},{id:"how-to-setchange-the-keep-alive-timeout-for-server-and-client"}),"How to set/change the keep-alive timeout for server and client?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to change the server and client keep-alive time so that longer process can take place easily."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First log into the haltdos management console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1043",src:r(8847).Z,width:"1920",height:"527"})),(0,n.kt)("ol",a({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > settings.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1042",src:r(53771).Z,width:"1780",height:"867"})),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},'User can set the value using option "Client Keep-Alive Timeout" and "Upstream Keep-Alive Timeout".')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1042",src:r(70642).Z,width:"1881",height:"879"})),(0,n.kt)("ol",a({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"After configuration, click on save changes.")),(0,n.kt)("p",null,"In this way, user can change the keep-alive timings for server side(upstream) and client side."))}b.isMDXComponent=!0},8847:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},53771:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/k1-e9cba3533a104f59841486abd9c9b7aa.png"},70642:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/m1-607470fba04230770e0cc0487c421459.png"}}]);