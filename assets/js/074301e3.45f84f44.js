"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[84323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=l,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const i={sidebar_position:12},o="Log Rules",s={unversionedId:"enterprise/waf/listener/profiles/rules/log_rules",id:"version-6.0/enterprise/waf/listener/profiles/rules/log_rules",title:"Log Rules",description:"Overview",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/log_rules.md",sourceDirName:"enterprise/waf/listener/profiles/rules",slug:"/enterprise/waf/listener/profiles/rules/log_rules",permalink:"/v6/enterprise/waf/listener/profiles/rules/log_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"waf_sidebar",previous:{title:"Script Rule",permalink:"/v6/enterprise/waf/listener/profiles/rules/script_rules"},next:{title:"Signatures",permalink:"/v6/enterprise/waf/listener/profiles/signatures"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],c={toc:p},d="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(d,l({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"log-rules"}),"Log Rules"),(0,n.kt)("h3",l({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"These rules prevent Haltdos WAF from logging sensitive information like passwords, etc, and adhere to your compliance policy.\n",(0,n.kt)("img",{alt:"Log Rules",src:r(96484).Z,width:"1495",height:"519"})),(0,n.kt)("h3",l({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," >  ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Log Rules")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Accepted value"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"ALL")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Log Rules",src:r(41099).Z,width:"1119",height:"785"})),(0,n.kt)("h3",l({},{id:"description"}),"Description"),(0,n.kt)("h4",l({},{id:"rule-name"}),"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",l({},{id:"rule-message"}),"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",l({},{id:"rule-priority"}),"Rule Priority"),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h4",l({},{id:"uri"}),"URI"),(0,n.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,n.kt)("h4",l({},{id:"method"}),"Method"),(0,n.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,n.kt)("h4",l({},{id:"find-location"}),"Find Location"),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("h4",l({},{id:"find-parameter"}),"Find Parameter"),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h4",l({},{id:"match-condition"}),"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",l({},{id:"match-value"}),"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}f.isMDXComponent=!0},96484:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/log_rules-e759e9c82c077e04211af68f1fa787d5.png"},41099:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/log_rules2-e4f28f1f3e6882f7f9c754627951fe18.png"}}]);