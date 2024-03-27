"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:4},o="Policy Rules",s={unversionedId:"enterprise/adc/listeners/rules/policy_rules",id:"enterprise/adc/listeners/rules/policy_rules",title:"Policy Rules",description:"---",source:"@site/docs/enterprise/adc/listeners/rules/policy_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/policy_rules",permalink:"/v8/enterprise/adc/listeners/rules/policy_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"adc_sidebar",previous:{title:"Redirection Rules",permalink:"/v8/enterprise/adc/listeners/rules/redirection_rules"},next:{title:"Upstream Rule",permalink:"/v8/enterprise/adc/listeners/rules/upstream_rules"}},u={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"Rule Action",id:"rule-action",level:4},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:4},{value:"<strong>Description</strong>:",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"Find Parameter",id:"find-parameter",level:5},{value:"Match Condition",id:"match-condition",level:5},{value:"Match Value",id:"match-value",level:5},{value:"Negation",id:"negation",level:5}],d={toc:p},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(c,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"policy-rules"}),"Policy Rules"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Policy rule",src:n(3198).Z,width:"1422",height:"898"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack")," > ",(0,r.kt)("a",a({parentName:"li"},{href:"/enterprise/adc"}),(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",a({parentName:"li"},{href:"/v8/enterprise/adc/listeners/"}),(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"li"},"Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Policy Rule"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Evaluation Phase"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Request Phase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Request")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"rule-name"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"User can define the rule name."),(0,r.kt)("h5",a({},{id:"rule-message"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"User can define the rule message."),(0,r.kt)("h5",a({},{id:"rule-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,r.kt)("p",null,"Users can enable and disable the rule."),(0,r.kt)("h5",a({},{id:"rule-priority"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"User can define the rule priority among various other policy rules."),(0,r.kt)("h5",a({},{id:"evaluation-phase"}),(0,r.kt)("strong",{parentName:"h5"},"Evaluation Phase")),(0,r.kt)("p",null,"Users are allowed to specify the phase for the rule i.e. Request/Response while evaluating the request."),(0,r.kt)("h4",a({},{id:"rule-action"}),"Rule Action"),(0,r.kt)("p",null,"User can define what action needs to be taken in case this rule is being satisfied."),(0,r.kt)("h4",a({},{id:"rule-condition"}),(0,r.kt)("strong",{parentName:"h4"},"Rule Condition")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Policy rule2",src:n(73918).Z,width:"961",height:"614"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Source IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match IP Prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Negation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h3",a({},{id:"description-1"}),(0,r.kt)("strong",{parentName:"h3"},"Description"),":"),(0,r.kt)("h5",a({},{id:"find-location"}),(0,r.kt)("strong",{parentName:"h5"},"Find Location")),(0,r.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,r.kt)("h5",a({},{id:"find-parameter"}),"Find Parameter"),(0,r.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,r.kt)("h5",a({},{id:"match-condition"}),"Match Condition"),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("h5",a({},{id:"match-value"}),"Match Value"),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("h5",a({},{id:"negation"}),"Negation"),(0,r.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}m.isMDXComponent=!0},3198:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_1-6477aed368a8005d985638746424f3fd.png"},73918:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_2-4a63cb264a4312b156009a6a0b669a1a.png"}}]);