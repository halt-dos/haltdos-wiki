"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[71370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={sidebar_position:3},l="Rate Limit Rules",u={unversionedId:"community/waf/rules/rate_limit",id:"version-7.0/community/waf/rules/rate_limit",title:"Rate Limit Rules",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/rules/rate_limit.md",sourceDirName:"community/waf/rules",slug:"/community/waf/rules/rate_limit",permalink:"/community/waf/rules/rate_limit",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community_sidebar",previous:{title:"Header Rules",permalink:"/community/waf/rules/header_rules"},next:{title:"Firewall Rules",permalink:"/community/waf/rules/firewall_rules"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Rate",id:"rate",level:4},{value:"Brust",id:"brust",level:4},{value:"Track Duration",id:"track-duration",level:4},{value:"Increment On",id:"increment-on",level:4},{value:"Add Condition",id:"add-condition",level:4}],p={toc:c},d="wrapper";function m(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(d,i({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Rate Limiting allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:r(77059).Z,width:"1644",height:"984"})),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior.")),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h4",i({},{id:"rule-name"}),"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: None  \n")),(0,n.kt)("h4",i({},{id:"rule-message"}),"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Description for the rule in String format\n\nDefault: None  \n")),(0,n.kt)("h4",i({},{id:"rule-priority"}),"Rule Priority"),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 0  \n")),(0,n.kt)("h4",i({},{id:"rule-action"}),"Rule Action"),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. Record request, Drop & Record request, Bypass request, Redirect, and no action."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Record Request / Drop & Record Request / Bypass Request\n\nDefault: Record Request  \n")),(0,n.kt)("h4",i({},{id:"rate"}),"Rate"),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 1000000\n\nMin: 0\n\nDefault: 10\n\nMetric: Per Second  \n")),(0,n.kt)("h4",i({},{id:"brust"}),"Brust"),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 1000000\n\nMin: 0\n\nDefault: 20 \n\nMetric: Count \n")),(0,n.kt)("h4",i({},{id:"track-duration"}),"Track Duration"),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 1  \n\nMetrics: Second\n")),(0,n.kt)("h4",i({},{id:"increment-on"}),"Increment On"),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Request / Request Size\n\nDefault: Request  \n")),(0,n.kt)("admonition",i({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Note")," : Always limit burst must be greater than or equal to limit rate.")),(0,n.kt)("h4",i({},{id:"add-condition"}),"Add Condition"),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",i({parentName:"p"},{href:"/community/docs/waf/rules/conditions"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}m.isMDXComponent=!0},77059:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit-3d8ecfee31883f0112c363132e5bbd16.png"}}]);