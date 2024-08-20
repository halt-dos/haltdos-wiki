"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={sidebar_position:7},o="Variable Rules",u={unversionedId:"docs/waf/rules/variable_rules",id:"docs/waf/rules/variable_rules",title:"Variable Rules",description:"Overview",source:"@site/community/docs/waf/rules/variable_rules.md",sourceDirName:"docs/waf/rules",slug:"/docs/waf/rules/variable_rules",permalink:"/community/docs/waf/rules/variable_rules",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"community_sidebar",previous:{title:"Behavior Rules",permalink:"/community/docs/waf/rules/behavior_rules"},next:{title:"Correlation Rules",permalink:"/community/docs/waf/rules/correlation_rules"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Variable",id:"variable",level:4},{value:"Mutation action",id:"mutation-action",level:4},{value:"Value",id:"value",level:4}],d={toc:p},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(c,n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"variable-rules"}),"Variable Rules"),(0,r.kt)("h3",n({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:"),(0,r.kt)("p",null,"Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped"),(0,r.kt)("p",null,"Note: Any parameter from the Request/Response can be stored in a variable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Variable Rule",src:a(39435).Z,width:"1642",height:"982"})),(0,r.kt)("h2",n({},{id:"how-to-use"}),"How to use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Variable Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Create rules with different conditions.  "),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Accepted value"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Rule Message"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Rule Priority"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Evaluation Phase"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mutation Action"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Value"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Condition Phase"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Find Location"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Variable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Find Parameter"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Match Condition"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Pattern Exists")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Match Value"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Variable Rule",src:a(94472).Z,width:"1055",height:"630"})),(0,r.kt)("h3",n({},{id:"description"}),"Description"),(0,r.kt)("h4",n({},{id:"rule-name"}),"Rule Name"),(0,r.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,r.kt)("h4",n({},{id:"rule-message"}),"Rule Message"),(0,r.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,r.kt)("h4",n({},{id:"rule-priority"}),"Rule Priority"),(0,r.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."),(0,r.kt)("h4",n({},{id:"evaluation-phase"}),"Evaluation Phase"),(0,r.kt)("p",null,"Users can set the evaluation phase either for request coming from end users or for response sending back to end users."),(0,r.kt)("h4",n({},{id:"variable"}),"Variable"),(0,r.kt)("p",null,"User can select the variable which should be earlier created under variables."),(0,r.kt)("h4",n({},{id:"mutation-action"}),"Mutation action"),(0,r.kt)("p",null,"Users can specify the mutation action."),(0,r.kt)("h4",n({},{id:"value"}),"Value"),(0,r.kt)("p",null,"Users can specify the value for the rule."))}m.isMDXComponent=!0},39435:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/variable_rule-ff068e897dc53e1eb3e966cbf935189a.png"},94472:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/variablerulescondition-01adb19a24495dafb3b066fbbbbb6ca3.png"}}]);