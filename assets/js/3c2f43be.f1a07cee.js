"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:5},o="Rate Limit Rules",p={unversionedId:"enterprise/ddos/listeners/rules/ratelimit",id:"enterprise/ddos/listeners/rules/ratelimit",title:"Rate Limit Rules",description:"---",source:"@site/docs/enterprise/ddos/listeners/rules/ratelimit.md",sourceDirName:"enterprise/ddos/listeners/rules",slug:"/enterprise/ddos/listeners/rules/ratelimit",permalink:"/v8/enterprise/ddos/listeners/rules/ratelimit",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ddos_sidebar",previous:{title:"Policy Rules",permalink:"/v8/enterprise/ddos/listeners/rules/policy"},next:{title:"SSL Offloading",permalink:"/v8/enterprise/ddos/ssl_offloading"}},u={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Max Rate</strong>",id:"max-rate",level:5},{value:"<strong>Track Limit</strong>",id:"track-limit",level:5},{value:"<strong>Track Duration</strong>",id:"track-duration",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:5},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],d={toc:s},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(c,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"rate-limit-rules"}),"Rate Limit Rules"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Rate limit rules are used to rate limit the user requests."),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"DDOS")," > ",(0,r.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"p"},"Rules")," > ",(0,r.kt)("strong",{parentName:"p"},"Rate Limit Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Rate Limit Rules.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:n(72589).Z,width:"1412",height:"841"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Request"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Max Rate"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Track Limit"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Track Duration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"rule-name"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"The user can define the rule name."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"rule-message"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"The user can define the rule message."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"rule-priority"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"rule-action"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Action")),(0,r.kt)("p",null,"The user can define what action needs to be taken when this rule condition is matched."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha CHallenege\n\n\nDefault: Drop & Record Request\n")),(0,r.kt)("h5",a({},{id:"max-rate"}),(0,r.kt)("strong",{parentName:"h5"},"Max Rate")),(0,r.kt)("p",null,"The user can define the request rate for the page"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 10\n")),(0,r.kt)("h5",a({},{id:"track-limit"}),(0,r.kt)("strong",{parentName:"h5"},"Track Limit")),(0,r.kt)("p",null,"The user can define the track limit in order to track if the rate is exceeding the limit or not."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 20\n")),(0,r.kt)("h5",a({},{id:"track-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Track Duration")),(0,r.kt)("p",null,"Specify the time duration for which the rule will limit the request."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1\n")),(0,r.kt)("h5",a({},{id:"rule-condition"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Condition")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:n(97838).Z,width:"997",height:"564"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h3",a({},{id:"description-1"}),"Description"),(0,r.kt)("h5",a({},{id:"find-location"}),(0,r.kt)("strong",{parentName:"h5"},"Find Location")),(0,r.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"find-parameter"}),(0,r.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,r.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"match-condition"}),(0,r.kt)("strong",{parentName:"h5"},"Match Condition")),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"match-value"}),(0,r.kt)("strong",{parentName:"h5"},"Match Value")),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}m.isMDXComponent=!0},72589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ratelimit-afd8bbac1a0131633a96d3fc6a1a2aa2.png"},97838:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ratelimit2-d014db169c830b9d67ca22aa78775c8f.png"}}]);