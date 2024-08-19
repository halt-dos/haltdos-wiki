"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[57762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),b=o,d=f["".concat(l,".").concat(b)]||f[b]||u[b]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:60},i="KB: 1060",l={unversionedId:"kb/waf/kb-1060",id:"version-7.0/kb/waf/kb-1060",title:"KB: 1060",description:"How to configure TLS and SSL versions from Haltdos console?",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1060.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1060",permalink:"/v7/kb/waf/kb-1060",draft:!1,tags:[],version:"7.0",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"kb_sidebar",previous:{title:"KB: 1059",permalink:"/v7/kb/waf/kb-1059"},next:{title:"KB: 1061",permalink:"/v7/kb/waf/kb-1061"}},c={},p=[{value:"<strong>How to configure TLS and SSL versions from Haltdos console?</strong>",id:"how-to-configure-tls-and-ssl-versions-from-haltdos-console",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],f={toc:p},u="wrapper";function b(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(u,o({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-1060"}),"KB: 1060"),(0,r.kt)("h3",o({},{id:"how-to-configure-tls-and-ssl-versions-from-haltdos-console"}),(0,r.kt)("strong",{parentName:"h3"},"How to configure TLS and SSL versions from Haltdos console?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"Client wants to set TLS and SSL version from the Haltdos console."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,r.kt)("p",null,"The client can achieve the above requirement by configuring SSL settings from Haltdos console."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1060",src:n(52872).Z,width:"1810",height:"966"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"SSL Settings"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1060",src:n(78985).Z,width:"1805",height:"962"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},'Now enable SSL Offloading and select "CUSTOM" option from ssl cipher suites dropdown.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1060",src:n(38641).Z,width:"1805",height:"962"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Now configure SSL ciphers and protocol from the management console and save the configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1060",src:n(4812).Z,width:"1805",height:"913"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1060",src:n(14178).Z,width:"1799",height:"888"})),(0,r.kt)("p",null,"By following above steps client can set SSL ciphers and protocols accordingly."))}b.isMDXComponent=!0},52872:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_1060_1-b66b77acbb01e13a8777400c8be88de8.png"},14178:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_ciphers_kb_1060_5-9b525f81e8c31ba449d73a941d31666b.png"},4812:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_protocol_kb_1060_4-a0908ce94db63a49792219372b65941b.png"},78985:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings_kb_1060_2-3f7ff93affe3a253ed47a5e893854e06.png"},38641:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings_kb_1060_3-150e742becd6d77f089fec1851563280.png"}}]);