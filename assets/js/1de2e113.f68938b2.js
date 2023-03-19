"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[17423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:30},l="KB: 1030",s={unversionedId:"kb/waf/kb-1030",id:"version-6.0/kb/waf/kb-1030",title:"KB: 1030",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1030.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1030",permalink:"/v6/kb/waf/kb-1030",draft:!1,tags:[],version:"6.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"kb_sidebar",previous:{title:"KB: 1029",permalink:"/v6/kb/waf/kb-1029"},next:{title:"KB: 1031",permalink:"/v6/kb/waf/kb-1031"}},c={},p=[],u={toc:p},f="wrapper";function b(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1030"}),"KB: 1030"),(0,n.kt)("hr",null),(0,n.kt)("h1",o({},{id:"how-to-mitigate-bad-reputation-traffic-with-haltdos-waf"}),"How to mitigate bad reputation traffic with Haltdos WAF?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The user requires to mitigate the bad reputation traffic by either dropping or sending challenge to the incoming requests from anonymous IP, suspicious IP or TOR network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,"The user can make use of Haltdos WAF bot protection features."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1030",src:r(61067).Z,width:"1920",height:"527"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Stack > WAF > Listener > Profile > Bot Protection"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kb-1030",src:r(88449).Z,width:"1886",height:"854"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For incoming bad reputation traffic, traffic coming from suspicious IP addresses and TOR network, the user can select the action to be performed, like, Send Challenge and Drop."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"kb-1030",src:r(4669).Z,width:"1884",height:"868"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on save changes to deploy the configuration on the Haltdos WAF."))))}b.isMDXComponent=!0},61067:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b1-bbb644391863631c783a01eb30fc46a0.png"},88449:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b2-8ac89b014498db9850d0e694da229a1d.png"},4669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b3-562eb2727857270975a78f6f3edf2800.png"}}]);