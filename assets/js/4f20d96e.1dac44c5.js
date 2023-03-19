"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=l,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var a=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const i={sidebar_position:3},o="Firewall Rule",s={unversionedId:"enterprise/waf/listener/profiles/rules/firewall_rules",id:"version-6.0/enterprise/waf/listener/profiles/rules/firewall_rules",title:"Firewall Rule",description:"Overview",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/firewall_rules.md",sourceDirName:"enterprise/waf/listener/profiles/rules",slug:"/enterprise/waf/listener/profiles/rules/firewall_rules",permalink:"/v6/enterprise/waf/listener/profiles/rules/firewall_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"waf_sidebar",previous:{title:"Form Rule",permalink:"/v6/enterprise/waf/listener/profiles/rules/form_rules"},next:{title:"Rate Limit Rules",permalink:"/v6/enterprise/waf/listener/profiles/rules/ratelimit_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Pattern",id:"match-pattern",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition-1",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:p},h="wrapper";function c(e){var{components:t}=e,i=n(e,["components"]);return(0,a.kt)(h,l({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"firewall-rule"}),"Firewall Rule"),(0,a.kt)("h3",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null," A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User.\n",(0,a.kt)("img",{alt:"Firewall Rule",src:r(10317).Z,width:"1254",height:"667"})),(0,a.kt)("p",null,"The following actions are available to the User :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DROP  & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CAPTCHA CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND RESPONSE WITH STATUS CODE")," - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CUSTOM RESPONSE")," - If the request satisfies the rule, a custom HTML response will be returned."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CHANGE RESPONSE CODE")," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TARPIT SRC. IP")," -  If the request satisfies the rule, the end-user IP will be tarpit."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SKIP LEARNING")," - If the request satisfies the rule, then no learning will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND EMPTY RESPONSE")," - If the request satisfies the rule, the end-user will get empty response / blank page in return.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Firewall Condition",src:r(45461).Z,width:"1101",height:"814"})),(0,a.kt)("h3",l({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Firewall Rules")),(0,a.kt)("li",{parentName:"ol"},"Click on the Add Rule Button and a pop-up box will open."),(0,a.kt)("li",{parentName:"ol"},"Configure the fields that are present."),(0,a.kt)("li",{parentName:"ol"},"Click on Save Changes and the rule will be reflected.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Accepted value"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Rule Name"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Rule Message"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Rule Priority"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"URI"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Strng"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"All")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Rule Action"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Record Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Find Location"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Drop-Down"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Variable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Find Parameter"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Match Condition"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Drop-Down"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Pattern Exists")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Match Value"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Blank")))),(0,a.kt)("h3",l({},{id:"description"}),"Description"),(0,a.kt)("h4",l({},{id:"rule-name"}),"Rule Name"),(0,a.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h4",l({},{id:"rule-message"}),"Rule Message"),(0,a.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,a.kt)("h4",l({},{id:"rule-priority"}),"Rule Priority"),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,a.kt)("h4",l({},{id:"uri"}),"URI"),(0,a.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,a.kt)("h4",l({},{id:"method"}),"Method"),(0,a.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,a.kt)("h4",l({},{id:"rule-action"}),"Rule Action"),(0,a.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,a.kt)("h4",l({},{id:"match-condition"}),"Match Condition"),(0,a.kt)("p",null,"This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."),(0,a.kt)("h4",l({},{id:"match-pattern"}),"Match Pattern"),(0,a.kt)("p",null,"Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."),(0,a.kt)("h4",l({},{id:"find-location"}),"Find Location"),(0,a.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,a.kt)("h4",l({},{id:"variable"}),"Variable"),(0,a.kt)("p",null,"Users can select the variable."),(0,a.kt)("h4",l({},{id:"match-condition-1"}),"Match Condition"),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("h4",l({},{id:"match-value"}),"Match Value"),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}c.isMDXComponent=!0},10317:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules-bbc3e174427d3de62dc27aff29341f95.png"},45461:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules_condition-8d4f5f980e88ae11659fe204681d91c4.png"}}]);