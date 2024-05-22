"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||l;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},o="Rules",s={unversionedId:"community/waf/rules/rules",id:"version-7.0/community/waf/rules/rules",title:"Rules",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/rules/rules.md",sourceDirName:"community/waf/rules",slug:"/community/waf/rules/",permalink:"/community/waf/rules/",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"Variables",permalink:"/community/waf/variable"},next:{title:"Redirection Rules",permalink:"/community/waf/rules/redirection_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Request Handling Rules",id:"request-handling-rules",level:4},{value:"Request / Response Handling Rules",id:"request--response-handling-rules",level:4}],c={toc:p},m="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"rules"}),"Rules"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"The rules are configurations that define how incoming requests and outgoing responses should be handled. These rules allow administrators to implement security measures, performance optimizations, and custom behaviors based on specific criteria. The configurable rules include:    "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/redirection_rules"}),(0,n.kt)("strong",{parentName:"a"},"Redirection Rules")),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/header_rules"}),(0,n.kt)("strong",{parentName:"a"},"Header Rules"))," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/rate_limit"}),(0,n.kt)("strong",{parentName:"a"},"Rate Limit Rules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/firewall_rules"}),(0,n.kt)("strong",{parentName:"a"},"Firewall Rules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/whitelist_rules"}),(0,n.kt)("strong",{parentName:"a"},"Whitelist Rules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/correlation_rules"}),(0,n.kt)("strong",{parentName:"a"},"Correlation Rules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/variable_rules"}),(0,n.kt)("strong",{parentName:"a"},"Variable Rules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",a({parentName:"li"},{href:"/community/waf/rules/behavior_rules"}),(0,n.kt)("strong",{parentName:"a"},"Behaviour Rule")))),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules"),". "),(0,n.kt)("li",{parentName:"ol"},"Select the rule that has to be configured.")),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"These rules work according to the ",(0,n.kt)("strong",{parentName:"p"},"Request phase")," or ",(0,n.kt)("strong",{parentName:"p"},"Request/Respose Phase"),".   "),(0,n.kt)("h4",a({},{id:"request-handling-rules"}),"Request Handling Rules"),(0,n.kt)("p",null,"Request Phase Rules in the Haltdos WAF CE serve as gatekeepers for incoming requests. Before reaching the server, requests are rigorously validated based on configured rule conditions. When the request aligns with the configured rule conditions then it will perform rule action accordingly i.e. terminate or allow to the server-side for further processing. Rules in which these Request handling condition are configured are:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Redirection Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Firewall Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Whitelist Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Correlation Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Behaviour Rules"))),(0,n.kt)("h4",a({},{id:"request--response-handling-rules"}),"Request / Response Handling Rules"),(0,n.kt)("p",null,"Rules operating during the Request/Response Phase are enforced after the generation of a request/response but before it passes through the Haltdos WAF CE. Requests/Respons originating from the Server/Client are subject to validation against predefined rule conditions. Only those requests meeting these conditions are permitted to perform rule action. Rules in which these Request/Response handling condition are configured are: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Header Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Variable"))))}f.isMDXComponent=!0}}]);