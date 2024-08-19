"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={sidebar_position:4},o="Rate Limit Rules",s={unversionedId:"cloud/waf/listener/profiles/rules/ratelimit_rules",id:"cloud/waf/listener/profiles/rules/ratelimit_rules",title:"Rate Limit Rules",description:"Overview",source:"@site/docs/cloud/waf/listener/profiles/rules/ratelimit_rules.md",sourceDirName:"cloud/waf/listener/profiles/rules",slug:"/cloud/waf/listener/profiles/rules/ratelimit_rules",permalink:"/cloud/waf/listener/profiles/rules/ratelimit_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"cloud_sidebar",previous:{title:"Firewall Rule",permalink:"/cloud/waf/listener/profiles/rules/firewall_rules"},next:{title:"Whitelist Rule",permalink:"/cloud/waf/listener/profiles/rules/whitelist_rules"}},u={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Limit Rate</strong>",id:"limit-rate",level:5},{value:"<strong>Limit Burst</strong>",id:"limit-burst",level:5},{value:"<strong>Limit Duration</strong>",id:"limit-duration",level:5},{value:"<strong>Increment On</strong>",id:"increment-on",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}],p={toc:c},d="wrapper";function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(d,i({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:r(94402).Z,width:"1910",height:"900"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: None\n")),(0,n.kt)("h5",i({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Description for the rule in String format.\n\nDefault: None\n")),(0,n.kt)("h5",i({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,n.kt)("h5",i({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha Challenege / Tarpit Src IP / Terminate Connection / Send Crypto Challenege / Redirect / Block User Session.\n\nDefault: Record Request\n")),(0,n.kt)("h5",i({},{id:"limit-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Rate")),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 10  \n\nMetric: Per Second\n")),(0,n.kt)("h5",i({},{id:"limit-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Burst")),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 20  \n\nMetric: Count\n")),(0,n.kt)("h5",i({},{id:"limit-duration"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Duration")),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 0\n\nDefault: 1  \n\nMetric: Second\n")),(0,n.kt)("h5",i({},{id:"increment-on"}),(0,n.kt)("strong",{parentName:"h5"},"Increment On")),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Request / Request-Size / Response-Size / Total Band Width\n\nDefault: Request\n")),(0,n.kt)("admonition",i({},{title:"NOTE",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Always limit burst must be greater than or equal to limit rate.")),(0,n.kt)("h5",i({},{id:"add-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Add Condition")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",i({parentName:"p"},{href:"/cloud/waf/listener/profiles/rules/ruleCond"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}m.isMDXComponent=!0},94402:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rateLimitRule-4d42752cab34765757eae4bb4aabf333.png"}}]);