"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[4848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},c="KB-9010",s={unversionedId:"community/kb/kb-9010",id:"version-7.0/community/kb/kb-9010",title:"KB-9010",description:"How to configure monitoring on the backend servers?",source:"@site/versioned_docs/version-7.0/community/kb/kb-9010.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9010",permalink:"/community/kb/kb-9010",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"KB-9009",permalink:"/community/kb/kb-9009"},next:{title:"KB-9011",permalink:"/community/kb/kb-9011"}},l={},u=[{value:"<strong>How to configure monitoring on the backend servers?</strong>",id:"how-to-configure-monitoring-on-the-backend-servers",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],m={toc:u},p="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(p,o({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-9010"}),"KB-9010"),(0,n.kt)("h3",o({},{id:"how-to-configure-monitoring-on-the-backend-servers"}),(0,n.kt)("strong",{parentName:"h3"},"How to configure monitoring on the backend servers?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"User wants to configure the monitor to health check the backend servers."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,"Users can configure the Haltdos Inbuilt monitoring tool to check the health of backend servers. Users can follow below steps to achieve the required outcome:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://<\\machineIP>:9000)")),(0,n.kt)("admonition",o({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(40705).Z,width:"1920",height:"972"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"User need to go to following path : ",(0,n.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > Server Monitors")," and click on add monitors.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(27193).Z,width:"1918",height:"976"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Users can configure using monitor our guide document page : ",(0,n.kt)("a",o({parentName:"li"},{href:"/v8/community/docs/waf/server_farm/monitors"}),"Server Monitor"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(32880).Z,width:"1892",height:"807"})),(0,n.kt)("p",null,"In this way, Users can configure server health check monitor for their server farm in Haltdos WAF CE."))}f.isMDXComponent=!0},40705:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},27193:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor2-e9925e9c11d611196908f7b5ee23ff1a.png"},32880:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor3-92b7ddbac1aebc5e77b5a739c273f0d9.png"}}]);