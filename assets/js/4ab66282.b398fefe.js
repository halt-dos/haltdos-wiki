"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[37971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:7},o="Variable Rules",u={unversionedId:"community/waf/rules/variable_rules",id:"version-7.0/community/waf/rules/variable_rules",title:"Variable Rules",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/rules/variable_rules.md",sourceDirName:"community/waf/rules",slug:"/community/waf/rules/variable_rules",permalink:"/community/waf/rules/variable_rules",draft:!1,tags:[],version:"7.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"community_sidebar",previous:{title:"Correlation Rules",permalink:"/community/waf/rules/correlation_rules"},next:{title:"Behavior Rules",permalink:"/community/waf/rules/behavior_rules"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Variable",id:"variable",level:4},{value:"Mutation action",id:"mutation-action",level:4},{value:"Value",id:"value",level:4},{value:"Add Condition",id:"add-condition",level:4}],p={toc:c},d="wrapper";function f(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(d,a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"variable-rules"}),"Variable Rules"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:  "),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Note: Any parameter from the Request/Response can be stored in a variable.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Variable Rule",src:r(39435).Z,width:"1642",height:"982"})),(0,n.kt)("h2",a({},{id:"how-to-use"}),"How to use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Variable Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Create rules with different conditions.  "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h4",a({},{id:"rule-name"}),"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"rule-message"}),"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Description for the rule in String format\n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"rule-priority"}),"Rule Priority"),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 0  \n")),(0,n.kt)("h4",a({},{id:"variable"}),"Variable"),(0,n.kt)("p",null,"User can select the variable which should be earlier created under variables."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Drop-Down \n\nDefault: Please Select \n")),(0,n.kt)("h4",a({},{id:"mutation-action"}),"Mutation action"),(0,n.kt)("p",null,"Users can specify the mutation action."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: SET / DELETE / INCREMENT / DECREMENT\n\nDefault: SET          \n")),(0,n.kt)("h4",a({},{id:"value"}),"Value"),(0,n.kt)("p",null,"Users can specify the value for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String \n\nDefault: None  \n")),(0,n.kt)("h4",a({},{id:"add-condition"}),"Add Condition"),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",a({parentName:"p"},{href:"/community/docs/waf/rules/conditions"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}f.isMDXComponent=!0},39435:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/variable_rule-ff068e897dc53e1eb3e966cbf935189a.png"}}]);