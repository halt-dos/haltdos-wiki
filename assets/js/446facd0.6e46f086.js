"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[47122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:2},l="Match Finder",s={unversionedId:"enterprise/waf/tools/match_finder",id:"enterprise/waf/tools/match_finder",title:"Match Finder",description:"Overview",source:"@site/docs/enterprise/waf/tools/match_finder.md",sourceDirName:"enterprise/waf/tools",slug:"/enterprise/waf/tools/match_finder",permalink:"/enterprise/waf/tools/match_finder",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"False Positive Finder",permalink:"/enterprise/waf/tools/fp_finder"},next:{title:"IOC Exporter",permalink:"/enterprise/waf/tools/ioc_exporter"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"match-finder"}),"Match Finder"),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates match finder details for a specific or all listener so that you can identify all matched, rules for the listener by listing the events."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"matchfinder",src:r(12932).Z,width:"1910",height:"900"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Tool")," > ",(0,n.kt)("strong",{parentName:"li"},"Match Finder")),(0,n.kt)("li",{parentName:"ol"},"Click on the Run Query button on the top right side.")),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Incident ID"),(0,n.kt)("br",{parentName:"p"}),"\n","It displays the event ID logged for the certain request found to be malicious."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Matched Rule"),(0,n.kt)("br",{parentName:"p"}),"\n","It displays all matched rule id for the query."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI"),(0,n.kt)("br",{parentName:"p"}),"\n","It displays the matching URI for the current event."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zone"),(0,n.kt)("br",{parentName:"p"}),"\n","It displays the zone/sub-domain name that belongs to it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Payload"),(0,n.kt)("br",{parentName:"p"}),"\n","It displays the payload matched for the current event."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Action"),(0,n.kt)("br",{parentName:"p"}),"\n","It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button.\nWe can further download all events matched based on the filter from the event page."))}d.isMDXComponent=!0},12932:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mFinder-722cb0f40da1b857c24bc0c6925e835b.png"}}]);