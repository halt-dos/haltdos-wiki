"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[39276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},s="KB-9005",l={unversionedId:"community/kb/kb-9005",id:"version-7.0/community/kb/kb-9005",title:"KB-9005",description:"How to add a new server in server farm?",source:"@site/versioned_docs/version-7.0/community/kb/kb-9005.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9005",permalink:"/community/kb/kb-9005",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"KB-9004",permalink:"/community/kb/kb-9004"},next:{title:"KB-9006",permalink:"/community/kb/kb-9006"}},c={},p=[{value:"<strong>How to add a new server in server farm?</strong>",id:"how-to-add-a-new-server-in-server-farm",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],d={toc:p},m="wrapper";function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(m,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-9005"}),"KB-9005"),(0,n.kt)("h3",a({},{id:"how-to-add-a-new-server-in-server-farm"}),(0,n.kt)("strong",{parentName:"h3"},"How to add a new server in server farm?")),(0,n.kt)("h4",a({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"User wants to add a new server in the server farm to load balance the application traffic."),(0,n.kt)("h4",a({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,"In Haltdos WAF Community WAF, Users are allowed to add multiple servers under the server farm and with the help of load balancing feature, they can balance the load among the added servers. Users can follow the below steps to add a new server in server farm."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the first step users need to log in to the Haltdos WAF CR+E Web UI console using below-mentioned URL.")),(0,n.kt)("p",null,"(https://<\\managementIP>:9000)"),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(40705).Z,width:"1920",height:"972"})),(0,n.kt)("ol",a({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"User need to go to following path : ",(0,n.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > Servers")," and click on add server option.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server",src:r(44765).Z,width:"1894",height:"831"})),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Users need to fill the required details like, server IP address and backend server port and click on save changes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server",src:r(44906).Z,width:"1918",height:"705"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server",src:r(99759).Z,width:"1903",height:"816"})),(0,n.kt)("p",null,"Once user click on save changes, server will be added in server farm. Now, Haltdos WAF CE will automatically start balancing the load between the server added in the server farm."),(0,n.kt)("p",null,"In this way, Any user can add multiple server in the server farm."))}u.isMDXComponent=!0},40705:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},44906:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server1-16c261575a5ec3161deb6a8241ae522b.png"},99759:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server2-c85963c1c8a1488ee2f4e39c3a370bed.png"},44765:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers-52ccddc27414741e23634ea278f2bece.png"}}]);