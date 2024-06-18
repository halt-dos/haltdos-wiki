"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={sidebar_position:4},o="Rate Limit Rules",s={unversionedId:"enterprise/waf/listener/profiles/rules/ratelimit_rules",id:"version-7.0/enterprise/waf/listener/profiles/rules/ratelimit_rules",title:"Rate Limit Rules",description:"Overview",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/rules/ratelimit_rules.md",sourceDirName:"enterprise/waf/listener/profiles/rules",slug:"/enterprise/waf/listener/profiles/rules/ratelimit_rules",permalink:"/enterprise/waf/listener/profiles/rules/ratelimit_rules",draft:!1,tags:[],version:"7.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"Firewall Rule",permalink:"/enterprise/waf/listener/profiles/rules/firewall_rules"},next:{title:"Whitelist Rule",permalink:"/enterprise/waf/listener/profiles/rules/whitelist_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Rate</strong>",id:"rate",level:5},{value:"<strong>Burst</strong>",id:"burst",level:5},{value:"<strong>Track Duration</strong>",id:"track-duration",level:5},{value:"<strong>Increment On</strong>",id:"increment-on",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}],c={toc:p},d="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,i({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:r(6911).Z,width:"1836",height:"800"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:r(40598).Z,width:"1840",height:"645"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:r(18111).Z,width:"1025",height:"383"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: None\n")),(0,n.kt)("h5",i({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Description for the rule in String format.\n\nDefault: None\n")),(0,n.kt)("h5",i({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,n.kt)("h5",i({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha Challenege / Tarpit Src IP / Terminate Connection / Send Crypto Challenege / Redirect / Block User Session.\n\nDefault: Record Request\n")),(0,n.kt)("h5",i({},{id:"rate"}),(0,n.kt)("strong",{parentName:"h5"},"Rate")),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 10  \n\nMetric: Per Second\n")),(0,n.kt)("h5",i({},{id:"burst"}),(0,n.kt)("strong",{parentName:"h5"},"Burst")),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 20  \n\nMetric: Count\n")),(0,n.kt)("h5",i({},{id:"track-duration"}),(0,n.kt)("strong",{parentName:"h5"},"Track Duration")),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 0\n\nDefault: 1  \n\nMetric: Second\n")),(0,n.kt)("h5",i({},{id:"increment-on"}),(0,n.kt)("strong",{parentName:"h5"},"Increment On")),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Request / Request-Size / Response-Size / Total Band Width\n\nDefault: Request\n")),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Always limit burst must be greater than or equal to limit rate.")),(0,n.kt)("h5",i({},{id:"add-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Add Condition")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/waf/listener/profiles/rules/conditions"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}f.isMDXComponent=!0},6911:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit-e73eb20c76160b6ad04f6f8a4dc412ad.png"},40598:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit1-be5ef46627a11728592f1378aa09e02d.png"},18111:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit2-6df03e599427f572b9361a60b83e31ce.png"}}]);