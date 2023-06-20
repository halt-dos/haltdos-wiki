"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[25929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={},l="KB-9011",s={unversionedId:"community/kb/kb-9011",id:"community/kb/kb-9011",title:"KB-9011",description:"How to add multiple upstream server for load balancing?",source:"@site/docs/community/kb/kb-9011.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9011",permalink:"/community/kb/kb-9011",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"community_sidebar",previous:{title:"KB-9010",permalink:"/community/kb/kb-9010"},next:{title:"KB-9012",permalink:"/community/kb/kb-9012"}},c={},p=[{value:"<strong>How to add multiple upstream server for load balancing?</strong>",id:"how-to-add-multiple-upstream-server-for-load-balancing",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},m="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(m,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-9011"}),"KB-9011"),(0,n.kt)("h3",o({},{id:"how-to-add-multiple-upstream-server-for-load-balancing"}),(0,n.kt)("strong",{parentName:"h3"},"How to add multiple upstream server for load balancing?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"User wants to add multiple upstream servers in Haltdos WAF CE."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,"The users can configure multiple stream servers in Haltdos WAF CE. Users need to follow below steps in order to add other servers."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://<\\machineIP>:9000)")),(0,n.kt)("admonition",o({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(40705).Z,width:"1920",height:"972"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Users need to go to following path : ",(0,n.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > servers")," and click on add server. Users can take help of our documentation page to ",(0,n.kt)("a",o({parentName:"li"},{href:"/community/kb/kb-9005"}),"add a new server"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(59330).Z,width:"1891",height:"804"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30257).Z,width:"1903",height:"651"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Post adding server IP and port number, user need to click on save changes and new server is added. ")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(66376).Z,width:"1887",height:"813"})),(0,n.kt)("p",null,"In this way user can add multiple servers with multiple backend ports."))}d.isMDXComponent=!0},59330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server-4c7479cd511eb05faa8c8c720a83a05d.png"},30257:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server1-fff2e2f490503b1bbe94034b7e681d59.png"},66376:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server2-91bb32424e3e01b5d7e3685236d9f852.png"},40705:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"}}]);