"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[53752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},57423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},o="Header Rules",s={unversionedId:"enterprise/adc/listeners/rules/header_rules",id:"enterprise/adc/listeners/rules/header_rules",title:"Header Rules",description:"---",source:"@site/docs/enterprise/adc/listeners/rules/header_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/header_rules",permalink:"/v8/enterprise/adc/listeners/rules/header_rules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adc_sidebar",previous:{title:"Error Rules",permalink:"/v8/enterprise/adc/listeners/rules/error_rules"},next:{title:"Redirection Rules",permalink:"/v8/enterprise/adc/listeners/rules/redirection_rules"}},u={},p=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Message</strong>",id:"message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"Add Condition",id:"add-condition",level:4}],c={toc:p},d="wrapper";function h(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(d,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"header-rules"}),"Header Rules"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header in the request to the web-server (back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"headerrules",src:r(67929).Z,width:"1432",height:"895"})),(0,n.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack")," > ",(0,n.kt)("a",a({parentName:"li"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"/v8/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Header Rule"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",a({},{id:"message"}),(0,n.kt)("strong",{parentName:"h5"},"Message")),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",a({},{id:"rule-enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,n.kt)("p",null,"Users can enable or disable the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled    \n")),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank  \n")),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: ADD HEADER / ADD COOKIE / OVERWRITE HEADER / OVERWRITE COOKIE / REMOVE HEADER / REMOVE COOKIE\n\nDefault: REMOVE COOKIE \n")),(0,n.kt)("p",null,"1) ",(0,n.kt)("strong",{parentName:"p"},"ADD"),": This condition will allow adding a value at the specified location."),(0,n.kt)("p",null,"2) ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),": This condition will allow removing a value at the specified location."),(0,n.kt)("p",null,"3) ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),": This condition will allow overwriting a value at the specified location."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., Value that will be added for the specified Parameter."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is Search Pattern (string/regex that should match the existing value) and ",(0,n.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the ",(0,n.kt)("strong",{parentName:"p"},"PCRE")," capturing group using position with a prefix of '$'."),(0,n.kt)("h4",a({},{id:"add-condition"}),"Add Condition"),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",a({parentName:"p"},{href:"/v8/enterprise/adc/listeners/rules/conditions"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}h.isMDXComponent=!0},67929:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rule_1-2c71a0137e73f3a5f85ce5b2d718f6ff.png"}}]);