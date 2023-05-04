"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43019],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(n),k=o,b=u["".concat(l,".").concat(k)]||u[k]||f[k]||a;return n?r.createElement(b,i(i({ref:e},c),{},{components:n})):r.createElement(b,i({ref:e},c))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33902:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const i={sidebar_position:40},s="KB: 1040",l={unversionedId:"kb/waf/kb-1040",id:"kb/waf/kb-1040",title:"KB: 1040",description:"-----------",source:"@site/docs/kb/waf/kb-1040.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1040",permalink:"/haltdos-wiki/kb/waf/kb-1040",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"kb_sidebar",previous:{title:"KB: 1039",permalink:"/haltdos-wiki/kb/waf/kb-1039"},next:{title:"KB: 1041",permalink:"/haltdos-wiki/kb/waf/kb-1041"}},p={},c=[{value:"<strong>How to Mitigate XSS attack through Haltdos WAF Solution?</strong>",id:"how-to-mitigate-xss-attack-through-haltdos-waf-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},f="wrapper";function k(t){var{components:e}=t,i=a(t,["components"]);return(0,r.kt)(f,o({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-1040"}),"KB: 1040"),(0,r.kt)("hr",null),(0,r.kt)("h3",o({},{id:"how-to-mitigate-xss-attack-through-haltdos-waf-solution"}),(0,r.kt)("strong",{parentName:"h3"},"How to Mitigate XSS attack through Haltdos WAF Solution?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The user wants to set the WAF mitigation which can mitigate XSS attack."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First log into the haltdos management portal.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1040",src:n(9434).Z,width:"1810",height:"966"})),(0,r.kt)("p",null,"2.Go to ",(0,r.kt)("strong",{parentName:"p"},"Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"listener")," > ",(0,r.kt)("strong",{parentName:"p"},"profile")," > ",(0,r.kt)("strong",{parentName:"p"},"profile settings"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1040",src:n(98832).Z,width:"1836",height:"957"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Set the optional mode to mitigation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1040",src:n(31654).Z,width:"1836",height:"957"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1040",src:n(77100).Z,width:"1836",height:"957"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1040",src:n(99890).Z,width:"1836",height:"957"})),(0,r.kt)("p",null,"In this way, we can configure the WAF to mitigate the XSS drop."))}k.isMDXComponent=!0},77100:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/incidents_kb_1040_4-72e9e92e161fcc2eca510e370288fb04.png"},99890:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/incidents_kb_1040_5-94284ff37f258987950012d7ec0f2a5b.png"},9434:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/overview_kb_1040_1-b66b77acbb01e13a8777400c8be88de8.png"},98832:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/settings_kb_1040_2-559021809e9dc71f18529936299c1fce.png"},31654:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/settings_kb_1040_3-8b4583ac30ed6a16a849f891a3668491.png"}}]);