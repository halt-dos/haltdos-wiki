"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(r),d=l,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const o={sidebar_position:5},i="Log Rules",s={unversionedId:"enterprise/llb/security/log",id:"enterprise/llb/security/log",title:"Log Rules",description:"log rule to capture packet information",source:"@site/docs/enterprise/llb/security/log.md",sourceDirName:"enterprise/llb/security",slug:"/enterprise/llb/security/log",permalink:"/v8/enterprise/llb/security/log",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"llb_sidebar",previous:{title:"Shaper Rules",permalink:"/v8/enterprise/llb/security/shaper_rules"},next:{title:"Policy Rules",permalink:"/v8/enterprise/llb/security/policy_rules"}},u={},p=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Incoming Group</strong>",id:"incoming-group",level:5},{value:"<strong>Outgoing Group</strong>",id:"outgoing-group",level:5},{value:"<strong>Source IP Range</strong>",id:"source-ip-range",level:5},{value:"<strong>Destination IP Range</strong>",id:"destination-ip-range",level:5},{value:"<strong>Service Protocol</strong>",id:"service-protocol",level:5},{value:"<strong>Source Port Range</strong>",id:"source-port-range",level:5},{value:"<strong> Destination Port Range</strong>",id:"-destination-port-range",level:5}],g={toc:p},c="wrapper";function d(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(c,l({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"log-rules"}),"Log Rules"),(0,n.kt)("p",null,"log rule to capture packet information"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This rule helps users to capture packet. Once we configure the log rule, all those packets which satisfy the condition of the log rule, will be captured and information will be shown in the ",(0,n.kt)("strong",{parentName:"p"},"Session Table"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llbsettings",src:r(78153).Z,width:"1147",height:"920"})),(0,n.kt)("h3",l({},{id:"how-to-use-"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use :")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB > Security > Log Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on add new rule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the rule conditions and click on save changes."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Accepted Value"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Default Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Enabled"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Specify Rule Name"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"User Friendly Message For Rule"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Incoming Group"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Outgoing Group"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Source IP range"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"IP address"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Destination IP range"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"IP address"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Service Protocol"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"ANY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Source Port Range"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Destination Range"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",l({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description:")),(0,n.kt)("h5",l({},{id:"rule-enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,n.kt)("p",null,"It specifies rule is enabled or disabled. By default, this option is enabled."),(0,n.kt)("h5",l({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"This option allows users to select desired rule name."),(0,n.kt)("h5",l({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,n.kt)("h5",l({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,n.kt)("h5",l({},{id:"incoming-group"}),(0,n.kt)("strong",{parentName:"h5"},"Incoming Group")),(0,n.kt)("p",null,"It specifies the incoming group for the log rule. All the traffic that is coming in from the Incoming group will be captured if no other conditions are configured."),(0,n.kt)("h5",l({},{id:"outgoing-group"}),(0,n.kt)("strong",{parentName:"h5"},"Outgoing Group")),(0,n.kt)("p",null,"It specifies the outgoing group for the log rule. All the traffic that is going out from the outgoing group will be captured if no other conditions are configured."),(0,n.kt)("h5",l({},{id:"source-ip-range"}),(0,n.kt)("strong",{parentName:"h5"},"Source IP Range")),(0,n.kt)("p",null,"It specifies the source IP range for the log rules. All the traffic that has configured source IP will be captured and shown in session table."),(0,n.kt)("h5",l({},{id:"destination-ip-range"}),(0,n.kt)("strong",{parentName:"h5"},"Destination IP Range")),(0,n.kt)("p",null,"It specifies the destination IP range for the log rules. All the traffic that has configured destination IP will be captured and shown in session table."),(0,n.kt)("h5",l({},{id:"service-protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Service Protocol")),(0,n.kt)("p",null,"It specifies the service protocol that need to be logged."),(0,n.kt)("h5",l({},{id:"source-port-range"}),(0,n.kt)("strong",{parentName:"h5"},"Source Port Range")),(0,n.kt)("p",null,"It specifies source port range for the logs capture."),(0,n.kt)("h5",l({},{id:"-destination-port-range"}),(0,n.kt)("strong",{parentName:"h5"}," Destination Port Range")),(0,n.kt)("p",null,"It specifies destination port range for the logs capture."))}d.isMDXComponent=!0},78153:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb_log_rules-ceea8b09948dda7054760bdef740176b.png"}}]);