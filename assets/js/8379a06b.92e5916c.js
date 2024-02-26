"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[82275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,b=u["".concat(l,".").concat(f)]||u[f]||g[f]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:59},i="KB: 1059",l={unversionedId:"kb/waf/kb-1059",id:"kb/waf/kb-1059",title:"KB: 1059",description:"How to prevent Cross-site Request Forgery through Haltdos WAF?",source:"@site/docs/kb/waf/kb-1059.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1059",permalink:"/v8/kb/waf/kb-1059",draft:!1,tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59},sidebar:"kb_sidebar",previous:{title:"KB: 1058",permalink:"/v8/kb/waf/kb-1058"},next:{title:"KB: 1060",permalink:"/v8/kb/waf/kb-1060"}},p={},c=[{value:"<strong>How to prevent Cross-site Request Forgery through Haltdos WAF?</strong>",id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},g="wrapper";function f(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(g,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1059"}),"KB: 1059"),(0,n.kt)("h3",o({},{id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf"}),(0,n.kt)("strong",{parentName:"h3"},"How to prevent Cross-site Request Forgery through Haltdos WAF?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"Client wants prevent their sites by Cross-site Request Forgery attack."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("p",null,"The client can achieve the above requirement by configuring settings to prevent CSRF on Haltdos console."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1059",src:r(18565).Z,width:"1810",height:"966"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Advance Bot")," > ",(0,n.kt)("strong",{parentName:"li"},"Configure settings for CSRF")," > ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1059",src:r(26158).Z,width:"1816",height:"964"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profile")," > ",(0,n.kt)("strong",{parentName:"li"},"Profile default setting")," > ",(0,n.kt)("strong",{parentName:"li"},"Policy")," > ",(0,n.kt)("strong",{parentName:"li"},"Web Policy")," > ",(0,n.kt)("strong",{parentName:"li"},"Enable CSRF toggle")," > ",(0,n.kt)("strong",{parentName:"li"},"Save changes"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1059",src:r(21689).Z,width:"1816",height:"964"})),(0,n.kt)("p",null,"By configuring above CSRF settings client can protect their sites from CSRF attack."))}f.isMDXComponent=!0},26158:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/csrf_kb_1059_2-3d3394f128fc0ed24319ce5b428a3901.png"},21689:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/csrf_kb_1059_3-65869ed7fdc9a29a8e6a225f28f38b7d.png"},18565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1059_1-b66b77acbb01e13a8777400c8be88de8.png"}}]);