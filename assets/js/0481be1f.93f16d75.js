"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},l="Fine-tuning WAF",s={unversionedId:"troubleshooting/case-9007",id:"version-7.0/troubleshooting/case-9007",title:"Fine-tuning WAF",description:"---",source:"@site/versioned_docs/version-7.0/troubleshooting/case-9007.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/case-9007",permalink:"/v7/troubleshooting/case-9007",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Global Whitelisting",permalink:"/v7/troubleshooting/case-9006"},next:{title:"WAF/WAAP",permalink:"/v7/kb/waf/"}},c={},p=[{value:"Case: 9007",id:"case-9007",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(f,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"fine-tuning-waf"}),"Fine-tuning WAF"),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"case-9007"}),"Case: 9007"),(0,r.kt)("h3",o({},{id:"problem-statement"}),"Problem Statement"),(0,r.kt)("p",null,"The client requires to finetune WAF to eliminate any false-positives for the Web Application."),(0,r.kt)("h3",o({},{id:"solution"}),"Solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to FP Finder page to view the signatures that were triggered during the specified time range.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(53444).Z,width:"1628",height:"722"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Analyse the affected URLs and Impacting Payload with respective to a rule Id triggered.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31735).Z,width:"1625",height:"716"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31402).Z,width:"1629",height:"539"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"The Incident details can be viewed by clicking on the respective event Id. A pop-up window provides the details of the request which was blocked by the rule.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26147).Z,width:"1920",height:"995"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"After verifying if the incident or the rule triggered was a false-positive, we can eliminate this false positive by clicking on gear icon in the Impact payload as below to fine-tune the WAF.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22242).Z,width:"1920",height:"995"})))}d.isMDXComponent=!0},53444:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1_troubleshooting_fp1-226c842b6ee97bef55ab218996dea969.png"},31402:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2.2_troubleshooting_fp3-6e253ed20769600420d691da4d969238.png"},31735:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2_troubleshooting_fp2-704555ac53d3c67cf03610940e51732c.png"},26147:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3_troubleshooting_screenshot_2022-03-11_at_14-38-20_haltdos_management_console-8e05edf52209273101ce0a859c0417a9.png"},22242:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4_troubleshooting_fp4-d11eb5890d2f5d896c665bcbd17966c9.png"}}]);