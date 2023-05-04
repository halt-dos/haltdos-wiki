"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60982],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85639:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:6},o="Rate Limit Rules",u={unversionedId:"enterprise/adc/listeners/rules/rate_limit_rules",id:"enterprise/adc/listeners/rules/rate_limit_rules",title:"Rate Limit Rules",description:"---",source:"@site/docs/enterprise/adc/listeners/rules/rate_limit_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/rate_limit_rules",permalink:"/enterprise/adc/listeners/rules/rate_limit_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"adc_sidebar",previous:{title:"Upstream Rule",permalink:"/enterprise/adc/listeners/rules/upstream_rules"},next:{title:"Incidents",permalink:"/enterprise/adc/incidents"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:4},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Max Rate</strong>",id:"max-rate",level:5},{value:"<strong>Track Limit</strong>",id:"track-limit",level:5},{value:"<strong>Track Duration</strong>",id:"track-duration",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:3},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5},{value:"<strong>Negation</strong>",id:"negation",level:5}],d={toc:p},m="wrapper";function c(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)(m,a({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Rate Limiting is a feature of Haltdos SLB that allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,r.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,r.kt)("a",a({parentName:"li"},{href:"/adc/docs"}),(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",a({parentName:"li"},{href:"../../listeners/"}),(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"li"},"Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Rate Limit Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:n(44519).Z,width:"1831",height:"788"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate limit rule",src:n(77755).Z,width:"1833",height:"676"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Max Rate"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Track Limit"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Track Duration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")))),(0,r.kt)("h3",a({},{id:"description"}),"Description:"),(0,r.kt)("h5",a({},{id:"rule-name"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"The user can define the rule name."),(0,r.kt)("h5",a({},{id:"rule-message"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"The user can define the rule message."),(0,r.kt)("h5",a({},{id:"rule-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,r.kt)("p",null,"Users can enable or disable the rule."),(0,r.kt)("h5",a({},{id:"rule-priority"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules"),(0,r.kt)("h5",a({},{id:"rule-action"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Action")),(0,r.kt)("p",null,"The user can define what action needs to be taken when this rule condition is matched."),(0,r.kt)("h5",a({},{id:"max-rate"}),(0,r.kt)("strong",{parentName:"h5"},"Max Rate")),(0,r.kt)("p",null,"The user can define the request rate for the page"),(0,r.kt)("h5",a({},{id:"track-limit"}),(0,r.kt)("strong",{parentName:"h5"},"Track Limit")),(0,r.kt)("p",null,"The user can define the track limit in order to track if the rate is exceeding the limit or not."),(0,r.kt)("h5",a({},{id:"track-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Track Duration")),(0,r.kt)("p",null,"Specify the time duration for which the rule will limit the request."),(0,r.kt)("h3",a({},{id:"rule-condition"}),(0,r.kt)("strong",{parentName:"h3"},"Rule Condition")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:n(87123).Z,width:"1026",height:"598"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match IP Prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Negation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h3",a({},{id:"description-1"}),"Description"),(0,r.kt)("h5",a({},{id:"find-location"}),(0,r.kt)("strong",{parentName:"h5"},"Find Location")),(0,r.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,r.kt)("h5",a({},{id:"find-parameter"}),(0,r.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,r.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,r.kt)("h5",a({},{id:"match-condition"}),(0,r.kt)("strong",{parentName:"h5"},"Match Condition")),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("h5",a({},{id:"match-value"}),(0,r.kt)("strong",{parentName:"h5"},"Match Value")),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("h5",a({},{id:"negation"}),(0,r.kt)("strong",{parentName:"h5"},"Negation")),(0,r.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}c.isMDXComponent=!0},44519:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ratelimit-079fb6af539edb7f32bfd62e2fe03c71.png"},77755:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ratelimit1-f5ab57f56b76e135a3bf87a624971d36.png"},87123:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ratelimit2-28b195bcc3953a9a9449d17e1bdf5a42.png"}}]);