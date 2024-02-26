"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[51765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},s="KB: 2012",l={unversionedId:"kb/adc/kb-2012",id:"version-7.0/kb/adc/kb-2012",title:"KB: 2012",description:"How to set monitoring on origin servers?",source:"@site/versioned_docs/version-7.0/kb/adc/kb-2012.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2012",permalink:"/kb/adc/kb-2012",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2011",permalink:"/kb/adc/kb-2011"},next:{title:"KB: 2013",permalink:"/kb/adc/kb-2013"}},c={},p=[{value:"<strong>How to set monitoring on origin servers?</strong>",id:"how-to-set-monitoring-on-origin-servers",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},b="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(b,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-2012"}),"KB: 2012"),(0,n.kt)("h3",o({},{id:"how-to-set-monitoring-on-origin-servers"}),(0,n.kt)("strong",{parentName:"h3"},"How to set monitoring on origin servers?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The client requires to have health check for the Server Group."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,"The client can achieve this by attaching the Monitor with Server Group."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(43327).Z,width:"1836",height:"963"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to Monitors page and create a monitor ",(0,n.kt)("strong",{parentName:"li"},"(Apps > SLB > Listner > Monitors)"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(53177).Z,width:"1824",height:"952"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Attach the Monitor to the Server Group. ",(0,n.kt)("strong",{parentName:"li"},"(Apps > SLB > Listner > Server Group)"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(77675).Z,width:"1824",height:"952"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Now go to the Incidents page to see the status of Server Group.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(33919).Z,width:"1824",height:"952"})))}d.isMDXComponent=!0},33919:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/incident_kb_2012_4-d2df205e8726f637237797e2f176837d.png"},53177:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor_kb_2012_2-105b80bee4206aa03cecd4809c118d6f.png"},43327:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_2012_1-235dcc07fe1668182be616f50b2d5b5e.png"},77675:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server_kb_2012_3-60b26a85f0317b4c7d0d7750953db62e.png"}}]);