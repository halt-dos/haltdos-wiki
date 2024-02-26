"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8028],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={},i="Handiling HTTP Errors",s={unversionedId:"troubleshooting/case-9003",id:"version-7.0/troubleshooting/case-9003",title:"Handiling HTTP Errors",description:"---",source:"@site/versioned_docs/version-7.0/troubleshooting/case-9003.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/case-9003",permalink:"/troubleshooting/case-9003",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Masking Server Error",permalink:"/troubleshooting/case-9002"},next:{title:"Configuring Maintenance Mode",permalink:"/troubleshooting/case-9004"}},c={},u=[{value:"Case: 9003",id:"case-9003",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],p={toc:u},d="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,o({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"handiling-http-errors"}),"Handiling HTTP Errors"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"case-9003"}),"Case: 9003"),(0,n.kt)("h3",o({},{id:"problem-statement"}),"Problem Statement"),(0,n.kt)("p",null,"The client requires to have custom error pages as per the error codes."),(0,n.kt)("h3",o({},{id:"solution"}),"Solution"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve")),(0,n.kt)("p",null,"The client can design the custom error pages and can also associate designed custom error pages with the error codes."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(86413).Z,width:"938",height:"671"})),(0,n.kt)("p",null,"Here, the customer can configure the error rules and can also define the URI, error code, rule action and custom error page. Custom error pages can be designed by following the below steps:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to GUI, and select the stack."),(0,n.kt)("li",{parentName:"ul"},"Select the Application, for example: WAF and further select the pages"),(0,n.kt)("li",{parentName:"ul"},"Under pages, client can add pages and can fill the relevant information."),(0,n.kt)("li",{parentName:"ul"},"Save changes.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(91867).Z,width:"735",height:"665"})))}f.isMDXComponent=!0},86413:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/troubleshooting_403_error_rule-526c1002bb88a9a6bbde6415289e05d9.png"},91867:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/troubleshooting_403_error_rule_output-0cbd004e9fd16aef8d677d24e2d9dee7.png"}}]);