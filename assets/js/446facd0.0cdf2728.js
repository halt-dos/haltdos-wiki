"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[47122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={sidebar_position:3},l="Match Finder",c={unversionedId:"enterprise/waf/tools/match_finder",id:"enterprise/waf/tools/match_finder",title:"Match Finder",description:"Overview",source:"@site/docs/enterprise/waf/tools/match_finder.md",sourceDirName:"enterprise/waf/tools",slug:"/enterprise/waf/tools/match_finder",permalink:"/haltdos-wiki/enterprise/waf/tools/match_finder",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"waf_sidebar",previous:{title:"False Positive Finder",permalink:"/haltdos-wiki/enterprise/waf/tools/fp_finder"},next:{title:"Scan Importer",permalink:"/haltdos-wiki/enterprise/waf/tools/scan_importer"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2},{value:"Incident ID",id:"incident-id",level:2},{value:"Matched Rule",id:"matched-rule",level:2},{value:"URI",id:"uri",level:2},{value:"Zone",id:"zone",level:2},{value:"Payload",id:"payload",level:2},{value:"Action",id:"action",level:2}],p={toc:d},u="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(u,i({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"match-finder"}),"Match Finder"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates match finder details for a specific or all listener so that you can identify all matched, rules for the listener by listing the events."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"matchfinder",src:r(63849).Z,width:"1833",height:"827"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Tool")," > ",(0,n.kt)("strong",{parentName:"li"},"Match Finder")),(0,n.kt)("li",{parentName:"ol"},"Click on the Run Query button on the top right side.")),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("h2",i({},{id:"incident-id"}),"Incident ID"),(0,n.kt)("p",null,"It displays the event ID logged for the certain request found to be malicious."),(0,n.kt)("h2",i({},{id:"matched-rule"}),"Matched Rule"),(0,n.kt)("p",null,"It displays all matched rule id for the query."),(0,n.kt)("h2",i({},{id:"uri"}),"URI"),(0,n.kt)("p",null,"It displays the matching URI for the current event."),(0,n.kt)("h2",i({},{id:"zone"}),"Zone"),(0,n.kt)("p",null,"It displays the zone/sub-domain name that belongs to it."),(0,n.kt)("h2",i({},{id:"payload"}),"Payload"),(0,n.kt)("p",null,"It displays the payload matched for the current event."),(0,n.kt)("h2",i({},{id:"action"}),"Action"),(0,n.kt)("p",null,"It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button.\nWe can further download all events matched based on the filter from the event page."))}f.isMDXComponent=!0},63849:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/match_finder-667a6d3a3d24e370bbc65fccf56f5e34.png"}}]);