"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||g[d]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:5},i="Log Rules",s={unversionedId:"enterprise/llb/security/log",id:"enterprise/llb/security/log",title:"Log Rules",description:"log rule to capture packet information",source:"@site/docs/enterprise/llb/security/log.md",sourceDirName:"enterprise/llb/security",slug:"/enterprise/llb/security/log",permalink:"/v8/enterprise/llb/security/log",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"llb_sidebar",previous:{title:"Shaper Rules",permalink:"/v8/enterprise/llb/security/shaper_rules"},next:{title:"Policy Rules",permalink:"/v8/enterprise/llb/security/policy_rules"}},u={},p=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Incoming Group</strong>",id:"incoming-group",level:5},{value:"<strong>Outgoing Group</strong>",id:"outgoing-group",level:5},{value:"<strong>Source IP Range</strong>",id:"source-ip-range",level:5},{value:"<strong>Destination IP Range</strong>",id:"destination-ip-range",level:5},{value:"<strong>Service Protocol</strong>",id:"service-protocol",level:5},{value:"<strong>Source Port Range</strong>",id:"source-port-range",level:5},{value:"<strong> Destination Port Range</strong>",id:"-destination-port-range",level:5}],c={toc:p},g="wrapper";function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(g,o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"log-rules"}),"Log Rules"),(0,n.kt)("p",null,"log rule to capture packet information"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This rule helps users to capture packet. Once we configure the log rule, all those packets which satisfy the condition of the log rule, will be captured and information will be shown in the ",(0,n.kt)("strong",{parentName:"p"},"Session Table"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llbsettings",src:r(78153).Z,width:"1147",height:"920"})),(0,n.kt)("h3",o({},{id:"how-to-use-"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use :")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB > Security > Log Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on add new rule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the rule conditions and click on save changes."))),(0,n.kt)("h3",o({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description:")),(0,n.kt)("h5",o({},{id:"rule-enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,n.kt)("p",null,"It specifies rule is enabled or disabled. By default, this option is enabled."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled \n\nDefault: Enabled\n")),(0,n.kt)("h5",o({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"This option allows users to select desired rule name."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank\n")),(0,n.kt)("h5",o({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,n.kt)("h5",o({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: \n\nDefault: Blank\n")),(0,n.kt)("h5",o({},{id:"incoming-group"}),(0,n.kt)("strong",{parentName:"h5"},"Incoming Group")),(0,n.kt)("p",null,"It specifies the incoming group for the log rule. All the traffic that is coming in from the Incoming group will be captured if no other conditions are configured."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Interface\n\nDefault: Blank\n")),(0,n.kt)("h5",o({},{id:"outgoing-group"}),(0,n.kt)("strong",{parentName:"h5"},"Outgoing Group")),(0,n.kt)("p",null,"It specifies the outgoing group for the log rule. All the traffic that is going out from the outgoing group will be captured if no other conditions are configured."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Interface\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"source-ip-range"}),(0,n.kt)("strong",{parentName:"h5"},"Source IP Range")),(0,n.kt)("p",null,"It specifies the source IP range for the log rules. All the traffic that has configured source IP will be captured and shown in session table."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"destination-ip-range"}),(0,n.kt)("strong",{parentName:"h5"},"Destination IP Range")),(0,n.kt)("p",null,"It specifies the destination IP range for the log rules. All the traffic that has configured destination IP will be captured and shown in session table."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"service-protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Service Protocol")),(0,n.kt)("p",null,"It specifies the service protocol that need to be logged."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"source-port-range"}),(0,n.kt)("strong",{parentName:"h5"},"Source Port Range")),(0,n.kt)("p",null,"It specifies source port range for the logs capture."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Port\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"-destination-port-range"}),(0,n.kt)("strong",{parentName:"h5"}," Destination Port Range")),(0,n.kt)("p",null,"It specifies destination port range for the logs capture."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Port\n\nDefault: Blank\n")))}d.isMDXComponent=!0},78153:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb_log_rules-ceea8b09948dda7054760bdef740176b.png"}}]);