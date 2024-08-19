"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[21945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,g=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},30943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},s="KB: 2013",l={unversionedId:"kb/adc/kb-2013",id:"version-7.0/kb/adc/kb-2013",title:"KB: 2013",description:"How to add listener ports, post creating the listener?",source:"@site/versioned_docs/version-7.0/kb/adc/kb-2013.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2013",permalink:"/v7/kb/adc/kb-2013",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2012",permalink:"/v7/kb/adc/kb-2012"},next:{title:"KB: 2014",permalink:"/v7/kb/adc/kb-2014"}},c={},p=[{value:"<strong>How to add listener ports, post creating the listener?</strong>",id:"how-to-add-listener-ports-post-creating-the-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],d={toc:p},u="wrapper";function b(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(u,o({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-2013"}),"KB: 2013"),(0,r.kt)("h3",o({},{id:"how-to-add-listener-ports-post-creating-the-listener"}),(0,r.kt)("strong",{parentName:"h3"},"How to add listener ports, post creating the listener?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The client wants to add multiple listener ports on which Haltdos SLB should start listening. Users are allowed to add the listener port at the time of creation of listener. After creating a listener you can still customize the listening ports."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The client can achieve the above requirement by utilizing the ",(0,r.kt)("strong",{parentName:"p"},'"Listener setting"')," in the SLB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64913).Z,width:"1836",height:"963"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"listener")," > ",(0,r.kt)("strong",{parentName:"li"},"listener settings"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34429).Z,width:"1824",height:"952"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"By scrolling down on listener settings we can see the add port option, by clicking on which we can add custom listening port for our web application.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(44789).Z,width:"1824",height:"952"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38659).Z,width:"1824",height:"952"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"After adding the port click on save changes.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(69946).Z,width:"1811",height:"955"})),(0,r.kt)("p",null,"In this way client can add multiple custom listener ports."))}b.isMDXComponent=!0},64913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_2013_1-235dcc07fe1668182be616f50b2d5b5e.png"},34429:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2013_2-4e6fa67877069a73974ab3fcae7d7f98.png"},44789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2013_3-554a4f25f4bcaf27f4bb7f55c02d84ea.png"},38659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2013_4-fa7b1d0cd92bc210fec67e9bfeb28e62.png"},69946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2013_5-331e4c45be9a34b5fe69b01bed074cea.png"}}]);