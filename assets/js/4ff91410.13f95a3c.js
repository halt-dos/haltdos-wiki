"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[79226],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),b=o,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return r?n.createElement(f,s(s({ref:e},c),{},{components:r})):n.createElement(f,s({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},16706:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const s={sidebar_position:20},i="KB: 1020",l={unversionedId:"kb/waf/kb-1020",id:"version-7.0/kb/waf/kb-1020",title:"KB: 1020",description:"How to add custom listener ports post creating the listener?",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1020.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1020",permalink:"/kb/waf/kb-1020",draft:!1,tags:[],version:"7.0",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"kb_sidebar",previous:{title:"KB: 1019",permalink:"/kb/waf/kb-1019"},next:{title:"KB: 1021",permalink:"/kb/waf/kb-1021"}},p={},c=[{value:"<strong>How to add custom listener ports post creating the listener?</strong>",id:"how-to-add-custom-listener-ports-post-creating-the-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},d="wrapper";function b(t){var{components:e}=t,s=a(t,["components"]);return(0,n.kt)(d,o({},u,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1020"}),"KB: 1020"),(0,n.kt)("h3",o({},{id:"how-to-add-custom-listener-ports-post-creating-the-listener"}),(0,n.kt)("strong",{parentName:"h3"},"How to add custom listener ports post creating the listener?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to add multiple listener ports on which Haltdos WAF should start listening. Users are allowed to add the listener port at the time of creation of listener. After creating a listener you  can still customize the listening ports."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1020",src:r(2962).Z,width:"1810",height:"966"})),(0,n.kt)("p",null,"2.Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"listener")," > ",(0,n.kt)("strong",{parentName:"p"},"listener settings")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1020",src:r(27618).Z,width:"1810",height:"950"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"By scrolling down on listener settings we can see the add port option, by clicking on which we                      can add custom listening port for our web application.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1020",src:r(28364).Z,width:"1810",height:"950"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1020",src:r(97921).Z,width:"1810",height:"950"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"After adding the port click on save changes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1020",src:r(38039).Z,width:"1810",height:"950"})),(0,n.kt)("p",null,"In this way the user can add multiple custom listener ports."))}b.isMDXComponent=!0},97921:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/add_port_kb_1020_4-84e4f40de598cffb53566b2c9b1387ff.png"},2962:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1020_1-b66b77acbb01e13a8777400c8be88de8.png"},38039:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/save_port_kb_1020_5-24388278436e0a804527977f258a7b34.png"},27618:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/settings_kb_1020_2-d136d57a0f0cb539ab6d781b0fc13236.png"},28364:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/settings_kb_1020_3-2f02e1802551f6139fbd645f3375830a.png"}}]);