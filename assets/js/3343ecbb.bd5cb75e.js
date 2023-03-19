"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[90397],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1890:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const i={sidebar_position:4},l="KB: 3005",s={unversionedId:"kb/platform/kb-3005",id:"kb/platform/kb-3005",title:"KB: 3005",description:"How to configure SNMP through Haltdos Solution?",source:"@site/docs/kb/platform/kb-3005.md",sourceDirName:"kb/platform",slug:"/kb/platform/kb-3005",permalink:"/haltdos-wiki/kb/platform/kb-3005",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"kb_sidebar",previous:{title:"KB: 3004",permalink:"/haltdos-wiki/kb/platform/kb-3004"},next:{title:"KB: 3006",permalink:"/haltdos-wiki/kb/platform/kb-3006"}},c={},p=[{value:"How to configure SNMP through Haltdos Solution?",id:"how-to-configure-snmp-through-haltdos-solution",level:3},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}],u={toc:p},m="wrapper";function f(t){var{components:e}=t,i=a(t,["components"]);return(0,r.kt)(m,o({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-3005"}),"KB: 3005"),(0,r.kt)("h3",o({},{id:"how-to-configure-snmp-through-haltdos-solution"}),"How to configure SNMP through Haltdos Solution?"),(0,r.kt)("h4",o({},{id:"problem-statement"}),"Problem Statement"),(0,r.kt)("p",null,"Client wants to set  Simple Network Management Protocol (SNMP) for collecting and organizing information about managed devices on IP networks and for modifying that information to change device behaviour."),(0,r.kt)("h4",o({},{id:"solution"}),"Solution"),(0,r.kt)("p",null,"The client can achieve the above requirement by utilising the SNMP integration under Haltdos WAF."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp",src:n(45285).Z,width:"1809",height:"870"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Now go instances under the respective Stack.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp",src:n(59130).Z,width:"1677",height:"408"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stacks")," > ",(0,r.kt)("strong",{parentName:"li"},"Instances")," > ",(0,r.kt)("strong",{parentName:"li"},"Integration")," > ",(0,r.kt)("strong",{parentName:"li"},"SNMP")," > ",(0,r.kt)("strong",{parentName:"li"},"Configure SNMP")," > ",(0,r.kt)("strong",{parentName:"li"},"Save changes"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp",src:n(67392).Z,width:"1457",height:"779"})),(0,r.kt)("p",null,"From the above steps, client can configure SNMP successfully."))}f.isMDXComponent=!0},45285:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/snmp1-ef27260554c01615e596a8f4a18f8419.png"},59130:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/snmp2-947daacb69673f27c7bcf36d7a5a7d6f.png"},67392:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/snmp3-7aa1bc2a63dabca1383bde80f145eabd.png"}}]);