"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[56274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3},l="KB: 1003",s={unversionedId:"kb/waf/kb-1003",id:"version-7.0/kb/waf/kb-1003",title:"KB: 1003",description:"---",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1003.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1003",permalink:"/v7/kb/waf/kb-1003",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kb_sidebar",previous:{title:"KB: 1002",permalink:"/v7/kb/waf/kb-1002"},next:{title:"KB: 1004",permalink:"/v7/kb/waf/kb-1004"}},c={},p=[{value:"<strong>How to add custom headers for origin servers?</strong>",id:"how-to-add-custom-headers-for-origin-servers",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},d="wrapper";function b(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1003"}),"KB: 1003"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"how-to-add-custom-headers-for-origin-servers"}),(0,n.kt)("strong",{parentName:"h3"},"How to add custom headers for origin servers?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The client web application are running on real servers which are behind WAF. Now, the clients requirement is to find out the source of request."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("p",null,"The client can utilize the header rules in WAF to add source address in the request."),(0,n.kt)("p",null,"This can be achieved by the following way:- "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1003",src:r(40679).Z,width:"1810",height:"966"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Now go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Header Rules"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1003",src:r(82022).Z,width:"1798",height:"958"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Finally after adding the header we can observe that the header rule is working as intended: ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1003",src:r(25629).Z,width:"1806",height:"994"})))}b.isMDXComponent=!0},25629:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browser_kb_1003_3-43464086d210898d9e7b190c5746b877.png"},82022:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rule_kb_1003_2-d90f3336538643dedcaf43e37e50db71.png"},40679:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1003_1-b66b77acbb01e13a8777400c8be88de8.png"}}]);