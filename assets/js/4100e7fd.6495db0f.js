"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[19771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:15},l="KB: 1015",s={unversionedId:"kb/waf/kb-1015",id:"version-7.0/kb/waf/kb-1015",title:"KB: 1015",description:"How to configure custom HTML error page received from Haltdos Web Application Firewall.",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1015.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1015",permalink:"/v7/kb/waf/kb-1015",draft:!1,tags:[],version:"7.0",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"kb_sidebar",previous:{title:"KB: 1014",permalink:"/v7/kb/waf/kb-1014"},next:{title:"KB: 1016",permalink:"/v7/kb/waf/kb-1016"}},c={},p=[{value:"<strong>How to configure custom HTML error page received from Haltdos Web Application Firewall.</strong>",id:"how-to-configure-custom-html-error-page-received-from-haltdos-web-application-firewall",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},f="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1015"}),"KB: 1015"),(0,n.kt)("h3",o({},{id:"how-to-configure-custom-html-error-page-received-from-haltdos-web-application-firewall"}),(0,n.kt)("strong",{parentName:"h3"},"How to configure custom HTML error page received from Haltdos Web Application Firewall.")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to customize the error page from Haltdos WAF."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into Haltdos console.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"Resources")," > ",(0,n.kt)("strong",{parentName:"p"},"Web Pages")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1015",src:r(66581).Z,width:"1816",height:"958"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},'Click on "Add Page" option and write HTML code for error page and save changes.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1015",src:r(92998).Z,width:"1816",height:"949"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"Now go into the listener by clicking on listener name, select error rule under rules drop down menu. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1015",src:r(60437).Z,width:"1816",height:"951"})),(0,n.kt)("ol",o({},{start:5}),(0,n.kt)("li",{parentName:"ol"},"Configure the rule as per our requirement and select the error page we have created before.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1015",src:r(86483).Z,width:"1816",height:"951"})),(0,n.kt)("ol",o({},{start:6}),(0,n.kt)("li",{parentName:"ol"},"Click on save changes.\nIn this way users can configure the error page rule to send custom error page response. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1015",src:r(87525).Z,width:"1831",height:"1014"})))}m.isMDXComponent=!0},60437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_rule_kb_1015_3-239f2f3f9a0a38aa67c1b4c10a613b71.png"},87525:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/custom_page_kb_1015_5-8b7e919af25c1b6d160cfafd3a351f47.png"},86483:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error_rules_kb_1015_4-5d4d167cb60caa6419eaa63c0b13a3ce.png"},92998:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page1_kb_1015_2-3cfa774a23f90ee4865906b094b79622.png"},66581:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/page_kb_1015_1-8ea3f118c427b0ceef6ef34de5c4c89c.png"}}]);