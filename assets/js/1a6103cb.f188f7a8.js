"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[30602],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:e},p),{},{components:r})):n.createElement(h,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56955:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={sidebar_position:7},o="Rate Limit Rules",s={unversionedId:"docs/waf/rules/rate_limit_rules",id:"docs/waf/rules/rate_limit_rules",title:"Rate Limit Rules",description:"Overview",source:"@site/professional/docs/waf/rules/rate_limit_rules.md",sourceDirName:"docs/waf/rules",slug:"/docs/waf/rules/rate_limit_rules",permalink:"/professional/docs/waf/rules/rate_limit_rules",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"professional_sidebar",previous:{title:"Firewall Rules",permalink:"/professional/docs/waf/rules/firewall_rules"},next:{title:"Whitelist Rules",permalink:"/professional/docs/waf/rules/whitelist_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Limit Rate</strong>",id:"limit-rate",level:5},{value:"<strong>Limit Burst</strong>",id:"limit-burst",level:5},{value:"<strong>Limit Duration</strong>",id:"limit-duration",level:5},{value:"<strong>Limit On</strong>",id:"limit-on",level:5},{value:"<strong>Condition Phase</strong>",id:"condition-phase",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],d={toc:p},c="wrapper";function m(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(c,a({},d,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rate_limit_rules",src:r(68576).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"rate_limit_rules",src:r(6155).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"rate_limit_rules",src:r(70986).Z,width:"1888",height:"990"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rules")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the rule and click on save changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted value"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Record request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Burst"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Track Duration"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Increment on"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Condition Phase"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Variable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Pattern Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc."),(0,n.kt)("h5",a({},{id:"limit-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Rate")),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("h5",a({},{id:"limit-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Burst")),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("h5",a({},{id:"limit-duration"}),(0,n.kt)("strong",{parentName:"h5"},"Limit Duration")),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("h5",a({},{id:"limit-on"}),(0,n.kt)("strong",{parentName:"h5"},"Limit On")),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Always limit burst must be greater than or equal to limit rate.")),(0,n.kt)("h5",a({},{id:"condition-phase"}),(0,n.kt)("strong",{parentName:"h5"},"Condition Phase")),(0,n.kt)("p",null,"This drop-down allows to set the match condition i.e. request or response for the request."),(0,n.kt)("h5",a({},{id:"find-location"}),(0,n.kt)("strong",{parentName:"h5"},"Find Location")),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("h5",a({},{id:"find-parameter"}),(0,n.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h5",a({},{id:"match-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Match Condition")),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h5",a({},{id:"match-value"}),(0,n.kt)("strong",{parentName:"h5"},"Match Value")),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}m.isMDXComponent=!0},68576:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/rate_limit_rules1-13cd07937d39fd512ffb3b5ec401de3e.png"},6155:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/rate_limit_rules2-4a5c60713fcfc3473a800cdbecbcc509.png"},70986:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/rate_limit_rules3-905fed7e8ca37f8303edffdc0302edd3.png"}}]);