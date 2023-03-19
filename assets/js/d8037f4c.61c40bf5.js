"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[81692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:1},l="Troubleshooting",s={unversionedId:"troubleshooting",id:"version-6.0/troubleshooting",title:"Troubleshooting",description:"Haltdos WAF Use cases and scenarios",source:"@site/versioned_docs/version-6.0/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/haltdos-wiki/v6/troubleshooting",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Match Finder",permalink:"/haltdos-wiki/v6/enterprise/waf/tools/match_finder"},next:{title:"Managing False Positives",permalink:"/haltdos-wiki/v6/troubleshooting/case-9001"}},c={},p=[],u={toc:p},f="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Haltdos WAF Use cases and scenarios")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This section describes How to use Haltdos WAF to adequately protect Web & API applications, diagnose common issues and steps for remediation and, in general, periodic activities to be conducted on the solution to keep your applications secured against cyber attacks on your application.  "),(0,n.kt)("p",null,"Some of the WAF troubleshooting steps are mentioned below:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9001"}),"Managing False Positives")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9002"}),"Handling HTTP Errors")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9003"}),"Configuring Maintenance Mode")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9004"}),"Masking Server Errors")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9005"}),"Mnaging Internal Gateway Errors")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9006"}),"Whitelisting a rule Globally for all applications")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/v6/troubleshooting/case-9007"}),"Fine-Tuning WAf signatures using FP Folder"))))}d.isMDXComponent=!0}}]);