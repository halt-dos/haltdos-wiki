"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={},l="KB-9003",c={unversionedId:"community/kb/kb-9003",id:"version-6.0/community/kb/kb-9003",title:"KB-9003",description:"How to enable SSL Offloading?",source:"@site/versioned_docs/version-6.0/community/kb/kb-9003.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9003",permalink:"/v6/community/kb/kb-9003",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"KB-9002",permalink:"/v6/community/kb/kb-9002"},next:{title:"KB-9004",permalink:"/v6/community/kb/kb-9004"}},s={},p=[{value:"<strong>How to enable SSL Offloading?</strong>",id:"how-to-enable-ssl-offloading",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],f={toc:p},u="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)(u,r({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"kb-9003"}),"KB-9003"),(0,o.kt)("h3",r({},{id:"how-to-enable-ssl-offloading"}),(0,o.kt)("strong",{parentName:"h3"},"How to enable SSL Offloading?")),(0,o.kt)("h4",r({},{id:"problem-statement"}),(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"User wants to enable SSL Offloading in their Haltdos WAF community edition."),(0,o.kt)("h4",r({},{id:"solution"}),(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"User can enable SSL offloading by adding free SSL certificate provided Haltdos WAF CE or the can use their own certificate on WAF community edition. They need to follow below steps to generate certificate and enable SSL offloading for the application on-boarded on the Haltdos WAF Community Edition."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the first step user need to log in to the Haltdos WAF CE Web UI console using following URL in any web browser.")),(0,o.kt)("p",null,"(https://<'machineIP>:9000)"),(0,o.kt)("admonition",r({},{title:"Note",type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40705).Z,width:"1920",height:"972"})),(0,o.kt)("ol",r({},{start:2}),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Users can enable SSL offloading by adding certificate on the WAF CE. To know more about how to add new SSL certificate in Haltdos WAF  users can follow this document : ",(0,o.kt)("a",r({parentName:"p"},{href:"/community/kb/kb-9002"}),"How to add SSL certificate")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Post adding certificate, now user need to go to the following path: ",(0,o.kt)("strong",{parentName:"p"},"Home > WAF > SSL Settings"),". "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SSL Certificate",src:n(9736).Z,width:"1903",height:"747"})),(0,o.kt)("p",null,"User need to click on Enable SSL Offloading, select the SSL certificate from the drop-down and click on save changes."),(0,o.kt)("p",null,"In this way, any Haltdos WAF CE user can enable the SSL Offloading on their application."))}m.isMDXComponent=!0},40705:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},9736:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ssl_cert-923b96198568c21c855fcc29124c3026.png"}}]);