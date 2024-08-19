"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,v=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:2},l="False Positive Finder",s={unversionedId:"enterprise/waf/tools/fp_finder",id:"version-7.0/enterprise/waf/tools/fp_finder",title:"False Positive Finder",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/waf/tools/fp_finder.md",sourceDirName:"enterprise/waf/tools",slug:"/enterprise/waf/tools/fp_finder",permalink:"/v7/enterprise/waf/tools/fp_finder",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"Tools",permalink:"/v7/enterprise/waf/tools/"},next:{title:"Match Finder",permalink:"/v7/enterprise/waf/tools/match_finder"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],f={toc:c},u="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(u,o({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"false-positive-finder"}),"False Positive Finder"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"FP Finder",src:r(42621).Z,width:"1833",height:"542"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," "),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"WAF"),"  > Click ",(0,n.kt)("strong",{parentName:"li"},"Tools")," > ",(0,n.kt)("strong",{parentName:"li"},"False Positive Finder")),(0,n.kt)("li",{parentName:"ol"},"Configure the settings "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Export"))),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Matched Rules")),(0,n.kt)("p",null,"It displays the rules for which False Positive is generated."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Impacted URLs")),(0,n.kt)("p",null,"It displays all matched URLs for the query."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Blocked Payload")),(0,n.kt)("p",null,"It displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.\nWe can further download all events matched based on the filter from the event page."))}d.isMDXComponent=!0},42621:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/false_positive-63cdea185bccabbf994e89514b5a170c.png"}}]);