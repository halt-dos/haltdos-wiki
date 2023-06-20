"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78777],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={},o="Header Rules",s={unversionedId:"enterprise/ddos/listeners/rules/header",id:"enterprise/ddos/listeners/rules/header",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/docs/enterprise/ddos/listeners/rules/header.md",sourceDirName:"enterprise/ddos/listeners/rules",slug:"/enterprise/ddos/listeners/rules/header",permalink:"/enterprise/ddos/listeners/rules/header",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ddos_sidebar",previous:{title:"Error Rules",permalink:"/enterprise/ddos/listeners/rules/error"},next:{title:"Policy Rules",permalink:"/enterprise/ddos/listeners/rules/policy"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Attribute Name",id:"attribute-name",level:4},{value:"Attribute Value",id:"attribute-value",level:4},{value:"Add Condition",id:"add-condition",level:4},{value:"Check Response",id:"check-response",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:p},c="wrapper";function h(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(c,a({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"header-rules"}),"Header Rules"),(0,n.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Header rule",src:r(19968).Z,width:"1901",height:"939"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"DDOS")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > ",(0,n.kt)("strong",{parentName:"p"},"Header Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described below.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h4",a({},{id:"rule-name"}),"Rule Name"),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",a({},{id:"rule-message"}),"Rule Message"),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("h4",a({},{id:"rule-priority"}),"Rule Priority"),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("h4",a({},{id:"rule-action"}),"Rule Action"),(0,n.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."))),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,n.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,n.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,n.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"In order to escape the dollar($) character in the replace, add the dollar symbol twice.")),(0,n.kt)("h4",a({},{id:"evaluation-phase"}),"Evaluation Phase"),(0,n.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,n.kt)("h4",a({},{id:"attribute-name"}),"Attribute Name"),(0,n.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,n.kt)("h4",a({},{id:"attribute-value"}),"Attribute Value"),(0,n.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,n.kt)("h4",a({},{id:"add-condition"}),"Add Condition"),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"For adding a condition, the required fields are:"),(0,n.kt)("h4",a({},{id:"check-response"}),"Check Response"),(0,n.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,n.kt)("h4",a({},{id:"find-location"}),"Find Location"),(0,n.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HEADER_VAL:")," Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"COOKIE_VAL:")," Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AGRS_VAL:")," Rule will be applicable to the argument value in the request or response. "),(0,n.kt)("h4",a({},{id:"find-parameter"}),"Find Parameter"),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,n.kt)("h4",a({},{id:"match-condition"}),"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",a({},{id:"match-value"}),"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}h.isMDXComponent=!0},19968:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header-5195ecd30e60e84ac345e5b97ea4472f.png"}}]);