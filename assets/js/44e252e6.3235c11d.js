"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[22604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,m=d["".concat(s,".").concat(c)]||d[c]||h[c]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_position:6},o="Firewall Rules",s={unversionedId:"professional/docs/waf/rules/firewall_rules",id:"professional/docs/waf/rules/firewall_rules",title:"Firewall Rules",description:"Overview",source:"@site/docs/professional/docs/waf/rules/firewall_rules.md",sourceDirName:"professional/docs/waf/rules",slug:"/professional/docs/waf/rules/firewall_rules",permalink:"/v8/professional/docs/waf/rules/firewall_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"professional_sidebar",previous:{title:"Correlation Rules",permalink:"/v8/professional/docs/waf/rules/correlation_rules"},next:{title:"Rate Limit Rules",permalink:"/v8/professional/docs/waf/rules/rate_limit_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Pattern</strong>",id:"match-pattern",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Variable</strong>",id:"variable",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition-1",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],d={toc:p},h="wrapper";function c(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)(h,n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"firewall-rules"}),"Firewall Rules"),(0,a.kt)("h3",n({},{id:"overview"}),"Overview"),(0,a.kt)("p",null," A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User."),(0,a.kt)("p",null,"The following actions are available to the User :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DROP  & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CAPTCHA CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND RESPONSE WITH STATUS CODE")," - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CUSTOM RESPONSE")," - If the request satisfies the rule, a custom HTML response will be returned."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CHANGE RESPONSE CODE")," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TARPIT SRC. IP")," -  If the request satisfies the rule, the end-user IP will be tarpit."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SKIP LEARNING")," - If the request satisfies the rule, then no learning will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND EMPTY RESPONSE")," - If the request satisfies the rule, the end-user will get empty response / blank page in return.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"firewall_rules",src:r(75246).Z,width:"1888",height:"990"}),"\n",(0,a.kt)("img",{alt:"firewall_rules",src:r(80537).Z,width:"1888",height:"990"})),(0,a.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,a.kt)("li",{parentName:"ol"},"Then go to ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Firewall Rules")),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Rule"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure the rule and click on save changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Accepted value"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Rule Name"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Rule Message"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Rule Priority"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"URI"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Strng"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"All")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Rule Action"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Record Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Find Location"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-Down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Variable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Find Parameter"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Match Condition"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-Down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Pattern Exists")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Match Value"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")))),(0,a.kt)("h3",n({},{id:"description"}),"Description"),(0,a.kt)("h5",n({},{id:"rule-name"}),(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h5",n({},{id:"rule-message"}),(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,a.kt)("h5",n({},{id:"rule-priority"}),(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,a.kt)("h5",n({},{id:"uri"}),(0,a.kt)("strong",{parentName:"h5"},"URI")),(0,a.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,a.kt)("h5",n({},{id:"method"}),(0,a.kt)("strong",{parentName:"h5"},"Method")),(0,a.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,a.kt)("h5",n({},{id:"rule-action"}),(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,a.kt)("h5",n({},{id:"match-condition"}),(0,a.kt)("strong",{parentName:"h5"},"Match Condition")),(0,a.kt)("p",null,"This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."),(0,a.kt)("h5",n({},{id:"match-pattern"}),(0,a.kt)("strong",{parentName:"h5"},"Match Pattern")),(0,a.kt)("p",null,"Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."),(0,a.kt)("h5",n({},{id:"find-location"}),(0,a.kt)("strong",{parentName:"h5"},"Find Location")),(0,a.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,a.kt)("h5",n({},{id:"variable"}),(0,a.kt)("strong",{parentName:"h5"},"Variable")),(0,a.kt)("p",null,"Users can select the variable."),(0,a.kt)("h5",n({},{id:"match-condition-1"}),(0,a.kt)("strong",{parentName:"h5"},"Match Condition")),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("h5",n({},{id:"match-value"}),(0,a.kt)("strong",{parentName:"h5"},"Match Value")),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}c.isMDXComponent=!0},75246:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules1-3fecd89a67cb7583bdd0a84ebf8faa5d.png"},80537:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules2-db0c049bf8ea826e75bbe8c158451908.png"}}]);