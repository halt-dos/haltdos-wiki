"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[5404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:6},o="Response Rule",s={unversionedId:"enterprise/waf/listener/profiles/rules/response_rules",id:"enterprise/waf/listener/profiles/rules/response_rules",title:"Response Rule",description:"Overview",source:"@site/docs/enterprise/waf/listener/profiles/rules/response_rules.md",sourceDirName:"enterprise/waf/listener/profiles/rules",slug:"/enterprise/waf/listener/profiles/rules/response_rules",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/rules/response_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"waf_sidebar",previous:{title:"Whitelist Rule",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/rules/whitelist_rules"},next:{title:"Behavior Rule",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/rules/behavior_rules"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Condition Phase</strong>",id:"condition-phase",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],d={toc:u},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(c,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"response-rule"}),"Response Rule"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from back-end application servers for HTTP requests on matching specified URL patterns."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Response Rule",src:r(47866).Z,width:"1837",height:"774"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Response Rule"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Response Rule",src:r(35105).Z,width:"1030",height:"388"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted value"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"ALL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"No Action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Condition Phase"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Variable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Pattern Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h5",a({},{id:"uri"}),(0,n.kt)("strong",{parentName:"h5"},"URI")),(0,n.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,n.kt)("h5",a({},{id:"method"}),(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,n.kt)("h5",a({},{id:"condition-phase"}),(0,n.kt)("strong",{parentName:"h5"},"Condition Phase")),(0,n.kt)("p",null,"This drop-down allows to set the match condition i.e. request or response for the request."),(0,n.kt)("h5",a({},{id:"find-location"}),(0,n.kt)("strong",{parentName:"h5"},"Find Location")),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("h5",a({},{id:"find-parameter"}),(0,n.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h5",a({},{id:"match-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Match Condition")),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h5",a({},{id:"match-value"}),(0,n.kt)("strong",{parentName:"h5"},"Match Value")),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}m.isMDXComponent=!0},35105:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reponserule1-06ac6a23d411205716e90a1868794687.png"},47866:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/responserule-5dd956bae2d0388f232680f8d61ac3bf.png"}}]);