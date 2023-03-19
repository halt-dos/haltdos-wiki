"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,k=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:26},i="KB: 1026",l={unversionedId:"kb/waf/kb-1026",id:"kb/waf/kb-1026",title:"KB: 1026",description:"-----------",source:"@site/docs/kb/waf/kb-1026.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1026",permalink:"/haltdos-wiki/kb/waf/kb-1026",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"kb_sidebar",previous:{title:"KB: 1025",permalink:"/haltdos-wiki/kb/waf/kb-1025"},next:{title:"KB: 1027",permalink:"/haltdos-wiki/kb/waf/kb-1027"}},p={},c=[{value:"<strong>How to mark any server as  Ready or Down?</strong>",id:"how-to-mark-any-server-as--ready-or-down",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},b="wrapper";function d(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(b,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1026"}),"KB: 1026"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"how-to-mark-any-server-as--ready-or-down"}),(0,n.kt)("strong",{parentName:"h3"},"How to mark any server as  Ready or Down?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"A listener is having multiple backend server in which some of them can be marked as soft down. It means when a  server is marked down in a server group, Haltdos WAF will not send any client request to that server."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1026",src:r(35886).Z,width:"1810",height:"966"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"li"},"Servers"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1026",src:r(8297).Z,width:"1820",height:"962"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"After clicking on server group name, click on edit button on server. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1026",src:r(92966).Z,width:"1820",height:"962"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Mode")," option User can set the server Down or Ready as per required.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1026",src:r(69311).Z,width:"1912",height:"915"})),(0,n.kt)("p",null,"For example In the above image user has marked  server as Down. After this no end user request will be forwarded to that server."))}d.isMDXComponent=!0},69311:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aaaa-df57e788ad5c8fb51c863b5348078098.png"},92966:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit_servers_kb_1026_3-b068c4e14795b1d7dd11bfd70b12294d.png"},35886:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1026_1-b66b77acbb01e13a8777400c8be88de8.png"},8297:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers_kb_1026_2-1f5914a8e8b75f18bc469668fc987d31.png"}}]);