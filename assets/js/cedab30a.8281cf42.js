"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[28172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:4},o="Variable Rules",s={unversionedId:"enterprise/waf/listener/rules/variablerule",id:"enterprise/waf/listener/rules/variablerule",title:"Variable Rules",description:"Overview",source:"@site/docs/enterprise/waf/listener/rules/variablerule.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/variablerule",permalink:"/v8/enterprise/waf/listener/rules/variablerule",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"Redirectional Rules",permalink:"/v8/enterprise/waf/listener/rules/redirectionalrules"},next:{title:"Transform Rules",permalink:"/v8/enterprise/waf/listener/rules/transformrule"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"<strong>Variable</strong>",id:"variable",level:5},{value:"<strong>Mutation action</strong>",id:"mutation-action",level:5},{value:"<strong>Value</strong>",id:"value",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:4}],c={toc:p},d="wrapper";function f(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(d,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"variable-rules"}),"Variable Rules"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped")),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Any parameter from the Request/Response can be stored in a variable.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"variable rule",src:r(41857).Z,width:"1833",height:"877"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Variable Rules")),(0,n.kt)("li",{parentName:"ol"},"Create rules with different conditions"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify a user-friendly name to identify the rule. The rule name takes alphanumeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"Set the priority of the rule. If two rules have the same priority, then selection will be random."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0  \n")),(0,n.kt)("h5",a({},{id:"evaluation-phase"}),(0,n.kt)("strong",{parentName:"h5"},"Evaluation Phase")),(0,n.kt)("p",null,"Users can set the evaluation phase either for request coming from end users or for response sending back to end users."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Request Phase / Response Phase\n\nDefault: Request Phase  \n")),(0,n.kt)("h5",a({},{id:"variable"}),(0,n.kt)("strong",{parentName:"h5"},"Variable")),(0,n.kt)("p",null,"User can select the variable which should be earlier created under variables."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select Variable\n\nDefault: Blank\n")),(0,n.kt)("h5",a({},{id:"mutation-action"}),(0,n.kt)("strong",{parentName:"h5"},"Mutation action")),(0,n.kt)("p",null,"Users can specify the mutation action."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: SET / DELETE / INCREMENT / DECREMENT\n\nDefault: SET\n")),(0,n.kt)("h5",a({},{id:"value"}),(0,n.kt)("strong",{parentName:"h5"},"Value")),(0,n.kt)("p",null,"Users can specify the value for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"add-condition"}),(0,n.kt)("strong",{parentName:"h4"},"Add Condition")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",a({parentName:"p"},{href:"/v8/enterprise/waf/listener/rules/ruleCond"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}f.isMDXComponent=!0},41857:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/variablerule-3e4ee7060c2bfb99234a65db7494404b.png"}}]);