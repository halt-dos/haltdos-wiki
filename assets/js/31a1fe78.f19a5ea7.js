"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:14},l="KB: 1014",s={unversionedId:"kb/waf/kb-1014",id:"version-7.0/kb/waf/kb-1014",title:"KB: 1014",description:"-------------",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1014.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1014",permalink:"/kb/waf/kb-1014",draft:!1,tags:[],version:"7.0",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"kb_sidebar",previous:{title:"KB: 1013",permalink:"/kb/waf/kb-1013"},next:{title:"KB: 1015",permalink:"/kb/waf/kb-1015"}},p={},c=[{value:"<strong>How to enable IPv6 support in listener</strong>",id:"how-to-enable-ipv6-support-in-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},b="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(b,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-1014"}),"KB: 1014"),(0,r.kt)("hr",null),(0,r.kt)("h3",o({},{id:"how-to-enable-ipv6-support-in-listener"}),(0,r.kt)("strong",{parentName:"h3"},"How to enable IPv6 support in listener")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The client requires IPv6 to be enabled on the listener level."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,r.kt)("p",null,"The above requirement can be achieved by enabling IPv6 option under listener in Haltdos WAF."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"listener name")," > ",(0,r.kt)("strong",{parentName:"li"},"listener settings"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1014",src:n(78729).Z,width:"1816",height:"963"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Enable IPv6 option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1014",src:n(57184).Z,width:"1816",height:"963"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"Instance")," > ",(0,r.kt)("strong",{parentName:"li"},"Instance Name")," > ",(0,r.kt)("strong",{parentName:"li"},"Network")," > ",(0,r.kt)("strong",{parentName:"li"},"Ethernet"),". select the active interface and enable IPv6 address option and configure the settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1014",src:n(1179).Z,width:"1816",height:"963"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Click on save changes.\nIn this way user can enable IPv6 support in their listener. User will add static/dynamic IPv6 address to listen.")))}m.isMDXComponent=!0},1179:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ethernet_kb_1014_3-f8019432c1e54131c04b4c7946c9360e.png"},57184:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/setting1_kb_1014_2-183217df4bdea373831b0b94f1470118.png"},78729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/setting_kb_1014_1-c915dd2977cdba5a9b845d571d05ee6f.png"}}]);