"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60982],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(r),c=a,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return r?n.createElement(k,i(i({ref:e},p),{},{components:r})):n.createElement(k,i({ref:e},p))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85639:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={sidebar_position:6},o="Rate Limit Rules",u={unversionedId:"enterprise/adc/listeners/rules/rate_limit_rules",id:"enterprise/adc/listeners/rules/rate_limit_rules",title:"Rate Limit Rules",description:"---",source:"@site/docs/enterprise/adc/listeners/rules/rate_limit_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/rate_limit_rules",permalink:"/enterprise/adc/listeners/rules/rate_limit_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"adc_sidebar",previous:{title:"Upstream Rule",permalink:"/enterprise/adc/listeners/rules/upstream_rules"},next:{title:"SSL Cipher Suites",permalink:"/enterprise/adc/listeners/cipher_suites"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:4},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Max Rate</strong>",id:"max-rate",level:5},{value:"<strong>Track Limit</strong>",id:"track-limit",level:5},{value:"<strong>Track Duration</strong>",id:"track-duration",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:3},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5},{value:"<strong>Negation</strong>",id:"negation",level:5}],d={toc:p},m="wrapper";function c(t){var{components:e}=t,i=l(t,["components"]);return(0,n.kt)(m,a({},d,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos SLB that allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,n.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"li"},{href:"/adc/docs"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"../../listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate Limit rule",src:r(44519).Z,width:"1831",height:"788"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit rule",src:r(77755).Z,width:"1833",height:"676"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Enabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Max Rate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Track Limit"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Track Duration"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")))),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"The user can define the rule name."),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"The user can define the rule message."),(0,n.kt)("h5",a({},{id:"rule-enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,n.kt)("p",null,"Users can enable or disable the rule."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules"),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"The user can define what action needs to be taken when this rule condition is matched."),(0,n.kt)("h5",a({},{id:"max-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Max Rate")),(0,n.kt)("p",null,"The user can define the request rate for the page"),(0,n.kt)("h5",a({},{id:"track-limit"}),(0,n.kt)("strong",{parentName:"h5"},"Track Limit")),(0,n.kt)("p",null,"The user can define the track limit in order to track if the rate is exceeding the limit or not."),(0,n.kt)("h5",a({},{id:"track-duration"}),(0,n.kt)("strong",{parentName:"h5"},"Track Duration")),(0,n.kt)("p",null,"Specify the time duration for which the rule will limit the request."),(0,n.kt)("h3",a({},{id:"rule-condition"}),(0,n.kt)("strong",{parentName:"h3"},"Rule Condition")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate Limit rule",src:r(87123).Z,width:"1026",height:"598"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source IP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match IP Prefix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Negation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("h3",a({},{id:"description-1"}),"Description"),(0,n.kt)("h5",a({},{id:"find-location"}),(0,n.kt)("strong",{parentName:"h5"},"Find Location")),(0,n.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,n.kt)("h5",a({},{id:"find-parameter"}),(0,n.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h5",a({},{id:"match-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Match Condition")),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h5",a({},{id:"match-value"}),(0,n.kt)("strong",{parentName:"h5"},"Match Value")),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,n.kt)("h5",a({},{id:"negation"}),(0,n.kt)("strong",{parentName:"h5"},"Negation")),(0,n.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}c.isMDXComponent=!0},44519:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ratelimit-079fb6af539edb7f32bfd62e2fe03c71.png"},77755:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ratelimit1-f5ab57f56b76e135a3bf87a624971d36.png"},87123:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ratelimit2-28b195bcc3953a9a9449d17e1bdf5a42.png"}}]);