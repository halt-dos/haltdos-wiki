"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[77463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,d=f["".concat(s,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},66149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:36},l="KB: 1036",s={unversionedId:"kb/waf/kb-1036",id:"version-6.0/kb/waf/kb-1036",title:"KB: 1036",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1036.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1036",permalink:"/v6/kb/waf/kb-1036",draft:!1,tags:[],version:"6.0",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"kb_sidebar",previous:{title:"KB: 1035",permalink:"/v6/kb/waf/kb-1035"},next:{title:"KB: 1037",permalink:"/v6/kb/waf/kb-1037"}},c={},p=[],f={toc:p},u="wrapper";function b(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(u,a({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1036"}),"KB: 1036"),(0,n.kt)("hr",null),(0,n.kt)("h1",a({},{id:"how-to-configure-blacklist-and-whitelist-ip-addresses"}),"How to configure Blacklist and Whitelist IP addresses?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to blacklist/whitelist the IP address or sub-network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First log into the haltdos management portal.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1036",src:r(83110).Z,width:"1920",height:"527"})),(0,n.kt)("ol",a({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > profile > profile settings > Geo filtering.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1036",src:r(45937).Z,width:"1813",height:"577"})),(0,n.kt)("p",null,"3.Configure the sub net or IP address with their CIDR value for blacklisting/ whitelisting. as given in mentioned example we have blocked the sub network 192.168.0.96/27 which will block the IP address 192.168.0.123."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1036",src:r(25365).Z,width:"1909",height:"497"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1036",src:r(31777).Z,width:"1906",height:"848"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1036",src:r(46253).Z,width:"1263",height:"722"})))}b.isMDXComponent=!0},83110:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/d2-bbb644391863631c783a01eb30fc46a0.png"},45937:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e1-89e371467aa3a473d6a6dc6df51c99fd.png"},25365:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e3-822f436f49c474e78cd5fdf97ba60808.png"},31777:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e5-6a6bbe6b4e6ab8ff918e039648795487.png"},46253:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/e6-361f476813d5af7ee79204f40077a17b.png"}}]);