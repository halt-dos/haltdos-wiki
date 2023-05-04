"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[46506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l="KB: 2021",s={unversionedId:"kb/adc/kb-2021",id:"kb/adc/kb-2021",title:"KB: 2021",description:"How to generate API token on Haltdos SLB?",source:"@site/docs/kb/adc/kb-2021.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2021",permalink:"/haltdos-wiki/kb/adc/kb-2021",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2020",permalink:"/haltdos-wiki/kb/adc/kb-2020"},next:{title:"KB: 2022",permalink:"/haltdos-wiki/kb/adc/kb-2022"}},c={},p=[{value:"<strong>How to generate API token on Haltdos SLB?</strong>",id:"how-to-generate-api-token-on-haltdos-slb",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},k="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(k,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-2021"}),"KB: 2021"),(0,r.kt)("h3",o({},{id:"how-to-generate-api-token-on-haltdos-slb"}),(0,r.kt)("strong",{parentName:"h3"},"How to generate API token on Haltdos SLB?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The user wants to generate the API token to authenticate API requests."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step to Solve"),":-"),(0,r.kt)("p",null,"The client can achieve the above requirement by utilizing the API token feature of the SLB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First log into the Haltdos management portal.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11156).Z,width:"1836",height:"963"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Integration")," > ",(0,r.kt)("strong",{parentName:"li"},"API Token")," > ",(0,r.kt)("strong",{parentName:"li"},"Generate API Token"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(45422).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Configure the setting of API token and click on save changes")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20450).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"After clicking on save changes the token will be generated.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89705).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"We are taking an example to show how we will authenticate API requests, with the help of generated token.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83229).Z,width:"1802",height:"898"})))}d.isMDXComponent=!0},83229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc21.5-4085d4d09430322211bca64a291eb66c.png"},11156:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_2021_1-235dcc07fe1668182be616f50b2d5b5e.png"},45422:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/token_kb_2021_2-4fd389ca892ed8d5dc86e492b1ba9ddb.png"},20450:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/token_kb_2021_3-ee2a7054185eaad6b136d66b6fad6902.png"},89705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/token_kb_2021_4-5f850d8252ad45d9aa6be6ab13e0dac0.png"}}]);