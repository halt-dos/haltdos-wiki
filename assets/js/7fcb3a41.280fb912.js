"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[53130],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||a;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69526:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const i={sidebar_position:64},l="KB: 1064",s={unversionedId:"kb/waf/kb-1064",id:"kb/waf/kb-1064",title:"KB: 1064",description:"How to whitelist request based on particular pattern?",source:"@site/docs/kb/waf/kb-1064.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1064",permalink:"/kb/waf/kb-1064",draft:!1,tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"kb_sidebar",previous:{title:"KB: 1063",permalink:"/kb/waf/kb-1063"},next:{title:"KB: 1065",permalink:"/kb/waf/kb-1065"}},c={},p=[{value:"<strong>How to whitelist request based on particular pattern?</strong>",id:"how-to-whitelist-request-based-on-particular-pattern",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},b="wrapper";function f(t){var{components:e}=t,i=a(t,["components"]);return(0,n.kt)(b,o({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1064"}),"KB: 1064"),(0,n.kt)("h3",o({},{id:"how-to-whitelist-request-based-on-particular-pattern"}),(0,n.kt)("strong",{parentName:"h3"},"How to whitelist request based on particular pattern?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"Client wants to whitelist requests based on particular pattern."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("p",null,"The client can whitelist the request by creating Whitelist rule on Haltdos WAF."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1064",src:r(15434).Z,width:"1810",height:"966"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Now to analyze the pattern of request")),(0,n.kt)("p",null,"Go to Stacks > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Incidents"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1064",src:r(26999).Z,width:"1809",height:"967"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On a respective incident, click on setting icon.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1064",src:r(22926).Z,width:"1809",height:"967"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Enter the rule details along with the rule condition consisting of pattern to be whitelist.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1064",src:r(28895).Z,width:"1809",height:"967"})))}f.isMDXComponent=!0},26999:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/incidents_kb_1064_2-8b1e192f96ed9e10d91c6cb3792cb5bb.png"},15434:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1064_1-b66b77acbb01e13a8777400c8be88de8.png"},22926:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/whitelist_kb_1064_3-93027ed15718756016d6f9a4cc0708e6.png"},28895:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/whitelist_kb_1064_4-198c0430628e365342d9fa00ac250aad.png"}}]);