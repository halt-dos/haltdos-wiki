"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[31488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(l,".").concat(k)]||u[k]||b[k]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:27},s="KB: 1027",l={unversionedId:"kb/waf/kb-1027",id:"kb/waf/kb-1027",title:"KB: 1027",description:"-----------",source:"@site/docs/kb/waf/kb-1027.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1027",permalink:"/kb/waf/kb-1027",draft:!1,tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"kb_sidebar",previous:{title:"KB: 1026",permalink:"/kb/waf/kb-1026"},next:{title:"KB: 1028",permalink:"/kb/waf/kb-1028"}},c={},p=[{value:"<strong>How to mark any server as backup server?</strong>",id:"how-to-mark-any-server-as-backup-server",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},b="wrapper";function k(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(b,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1027"}),"KB: 1027"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"how-to-mark-any-server-as-backup-server"}),(0,n.kt)("strong",{parentName:"h3"},"How to mark any server as backup server?")),(0,n.kt)("h4",a({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"A listener is having multiple backend server in which some of them can be marked as backup server. It means that server is not actively handling the client requests. In case any active original server marked as down, system will automatically mark this backup server as active server and after that it actively Haltdos WAF will not send any client request to that server."),(0,n.kt)("h4",a({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1027",src:r(29719).Z,width:"1810",height:"966"})),(0,n.kt)("ol",a({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"li"},"Servers"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1027",src:r(82418).Z,width:"1820",height:"962"})),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"After clicking on server group name, click on edit button on server. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1027",src:r(31606).Z,width:"1820",height:"962"})),(0,n.kt)("ol",a({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Click on advance and set true or false on backup option.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1027",src:r(77126).Z,width:"1820",height:"962"})))}k.isMDXComponent=!0},77126:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/backup_kb_1027_4-b0e66c935e5c8baa7f86851ff4607162.png"},31606:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit_servers_kb_1027_3-b068c4e14795b1d7dd11bfd70b12294d.png"},29719:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1027_1-b66b77acbb01e13a8777400c8be88de8.png"},82418:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers_kb_1027_2-1f5914a8e8b75f18bc469668fc987d31.png"}}]);