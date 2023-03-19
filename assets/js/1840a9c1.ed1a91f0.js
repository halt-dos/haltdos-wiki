"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,d=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},s="Managing Internal Gateway Error",l={unversionedId:"troubleshooting/case-9005",id:"troubleshooting/case-9005",title:"Managing Internal Gateway Error",description:"---",source:"@site/docs/troubleshooting/case-9005.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/case-9005",permalink:"/troubleshooting/case-9005",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Configuring Maintenance Mode",permalink:"/troubleshooting/case-9004"},next:{title:"Global Whitelisting",permalink:"/troubleshooting/case-9006"}},c={},u=[{value:"Case: 9005",id:"case-9005",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],p={toc:u},g="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,o({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"managing-internal-gateway-error"}),"Managing Internal Gateway Error"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"case-9005"}),"Case: 9005"),(0,n.kt)("h3",o({},{id:"problem-statement"}),"Problem Statement"),(0,n.kt)("p",null,"The client getting 502 Internal Server Error while running the applicaton which is behind the WAF solution"),(0,n.kt)("h3",o({},{id:"solution"}),"Solution"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On getting 502 error customer checks the respective server configured with WAF, the backend server IP should be correct along with the Port."),(0,n.kt)("li",{parentName:"ol"},'The Customer checks the server settings and ensures the Server "Down" field is set to FALSE.')),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(27890).Z,width:"1834",height:"361"})),(0,n.kt)("p",null,"3.Customer can go to the incident section under WAF, and check the details related to errors in incidents directly or can use the reference id of an error."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(62283).Z,width:"1192",height:"565"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(53013).Z,width:"688",height:"689"})),(0,n.kt)("p",null,"4.The Customer can check by disabling the error handling under the Listeners settings."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(71879).Z,width:"1845",height:"695"})),(0,n.kt)("p",null,"5.The Customer can check the WAF working by checking the WAF services and logs."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(56380).Z,width:"855",height:"681"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(826).Z,width:"855",height:"334"})))}h.isMDXComponent=!0},27890:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1_troubleshooting_server-1df7a6e535146093dc4bfd98245fb5be.png"},62283:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2_troubleshooting_screenshot_from_2022-03-11-11-35-28-893a8c76eef7cda2483eeac8513587cc.png"},53013:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/3_troubleshooting_screenshot_from_2022-03-11-11-39-58-fed55f5020f21f0b1c0162ac18aae5d4.png"},71879:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4_troubleshooting_errorhandling-a4c69881351c9c35f3fdcf01d45e2665.png"},56380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/5_troubleshooting_offloaderservices-5642afc41299eac6f3ddb593348482d8.png"},826:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6_troubleshooting_lualogs-2dd0e2eb9a03c79063c93715f1d5a643.png"}}]);