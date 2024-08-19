"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,m=u["".concat(l,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},40663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:55},s="KB: 1055",l={unversionedId:"kb/waf/kb-1055",id:"version-7.0/kb/waf/kb-1055",title:"KB: 1055",description:"How to create a response rule to filter responses from applications and prevent sensitive data leaks?",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1055.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1055",permalink:"/v7/kb/waf/kb-1055",draft:!1,tags:[],version:"7.0",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"kb_sidebar",previous:{title:"KB: 1054",permalink:"/v7/kb/waf/kb-1054"},next:{title:"KB: 1056",permalink:"/v7/kb/waf/kb-1056"}},p={},c=[{value:"<strong>How to create a response rule to filter responses from applications and prevent sensitive data leaks?</strong>",id:"how-to-create-a-response-rule-to-filter-responses-from-applications-and-prevent-sensitive-data-leaks",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},f="wrapper";function b(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1055"}),"KB: 1055"),(0,n.kt)("h3",o({},{id:"how-to-create-a-response-rule-to-filter-responses-from-applications-and-prevent-sensitive-data-leaks"}),(0,n.kt)("strong",{parentName:"h3"},"How to create a response rule to filter responses from applications and prevent sensitive data leaks?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"Client want to filter responses from back-end application servers for HTTP requests on matching specified URL patterns."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("p",null,"The client can achieve the above requirement by utilizing the Response Rule feature of the WAF."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login into Haltdos console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1055",src:r(23676).Z,width:"1810",height:"966"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Open the listener in the browser before applying the rule and login to the page.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1055",src:r(56301).Z,width:"1343",height:"951"})),(0,n.kt)("p",null,"3.Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listener")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile Rule")," > ",(0,n.kt)("strong",{parentName:"p"},"Response Rule")," > ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," > ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1055",src:r(51952).Z,width:"1809",height:"950"})),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},"After configuring the rule details client will open listener in the browser and check the replacement of the content (example-: Client search for a content General Instruction and replace with Rules which he created in rule configuration).")))}b.isMDXComponent=!0},56301:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/broswer-edf95b64849dbf97f41b6a0a215c0498.png"},23676:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1055_1-b66b77acbb01e13a8777400c8be88de8.png"},51952:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rules_kb_1055_3-c777c7532e99eea372145d5353c7ea3b.png"}}]);