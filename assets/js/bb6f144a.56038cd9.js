"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[17010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l="KB: 2014",s={unversionedId:"kb/adc/kb-2014",id:"version-7.0/kb/adc/kb-2014",title:"KB: 2014",description:"How to enable IPv6 support in listener?",source:"@site/versioned_docs/version-7.0/kb/adc/kb-2014.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2014",permalink:"/kb/adc/kb-2014",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2013",permalink:"/kb/adc/kb-2013"},next:{title:"KB: 2015",permalink:"/kb/adc/kb-2015"}},c={},p=[{value:"<strong>How to enable IPv6 support in listener?</strong>",id:"how-to-enable-ipv6-support-in-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},b="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(b,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-2014"}),"KB: 2014"),(0,r.kt)("h3",o({},{id:"how-to-enable-ipv6-support-in-listener"}),(0,r.kt)("strong",{parentName:"h3"},"How to enable IPv6 support in listener?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The client requires IPv6 to be enabled on the listener level."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The above requirement can be achieved by enabling IPv6 option under listener in Haltdos SLB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(102).Z,width:"1836",height:"963"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"listener name")," > ",(0,r.kt)("strong",{parentName:"li"},"listener settings"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96457).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Enable IPv6 option.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87939).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"User Icon")," > ",(0,r.kt)("strong",{parentName:"li"},"System")," > ",(0,r.kt)("strong",{parentName:"li"},"Instance")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on Instance name")," > ",(0,r.kt)("strong",{parentName:"li"},"Network")," > ",(0,r.kt)("strong",{parentName:"li"},"Ethernet"),". Select the active interface and enable IPv6 address option and configure the settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46371).Z,width:"1811",height:"955"})),(0,r.kt)("ol",o({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,r.kt)("p",null,"In this way client can enable IPv6 support in their listener. Client will add static/dynamic IPv6 address to listen."))}d.isMDXComponent=!0},46371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incidents_kb_2014_4-eee4b6d1cc54fae1f6aa96261cc4f0b8.png"},102:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_2014_1-235dcc07fe1668182be616f50b2d5b5e.png"},96457:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2014_2-eadd347f2bea2bd9c9e4250d2537aa56.png"},87939:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2014_3-58e4ac4ecf3b11b782051f4859d72775.png"}}]);