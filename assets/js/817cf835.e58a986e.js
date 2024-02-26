"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[86867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},l="Header Rules",s={unversionedId:"professional/docs/waf/rules/header_rule",id:"professional/docs/waf/rules/header_rule",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/docs/professional/docs/waf/rules/header_rule.md",sourceDirName:"professional/docs/waf/rules",slug:"/professional/docs/waf/rules/header_rule",permalink:"/v8/professional/docs/waf/rules/header_rule",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"professional_sidebar",previous:{title:"Error Rules",permalink:"/v8/professional/docs/waf/rules/error_rules"},next:{title:"Redirectional Rules",permalink:"/v8/professional/docs/waf/rules/redirection_rule"}},u={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Message</strong>",id:"message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:4},{value:"<strong>Attribute Name</strong>",id:"attribute-name",level:5},{value:"<strong>Attribute Value</strong>",id:"attribute-value",level:5},{value:"<strong>Parameter</strong>",id:"parameter",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:4},{value:"<strong>Check Response</strong>",id:"check-response",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Parameter</strong>",id:"parameter-1",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],p={toc:d},c="wrapper";function h(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(c,a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"header-rules"}),"Header Rules"),(0,n.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"header_rules",src:r(46943).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"header_rules",src:r(8247).Z,width:"1888",height:"990"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Header Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described below."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."),(0,n.kt)("h5",a({},{id:"message"}),(0,n.kt)("strong",{parentName:"h5"},"Message")),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("h5",a({},{id:"uri"}),(0,n.kt)("strong",{parentName:"h5"},"URI")),(0,n.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,n.kt)("h5",a({},{id:"method"}),(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("p",null,"1) ",(0,n.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location."),(0,n.kt)("p",null,"2) ",(0,n.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location."),(0,n.kt)("p",null,"3) ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,n.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,n.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,n.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"}," In order to escape the dollar($) character in the replace, add the dollar symbol twice.")),(0,n.kt)("h4",a({},{id:"evaluation-phase"}),(0,n.kt)("strong",{parentName:"h4"},"Evaluation Phase")),(0,n.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,n.kt)("h5",a({},{id:"attribute-name"}),(0,n.kt)("strong",{parentName:"h5"},"Attribute Name")),(0,n.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,n.kt)("h5",a({},{id:"attribute-value"}),(0,n.kt)("strong",{parentName:"h5"},"Attribute Value")),(0,n.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,n.kt)("h5",a({},{id:"parameter"}),(0,n.kt)("strong",{parentName:"h5"},"Parameter")),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,n.kt)("h4",a({},{id:"add-condition"}),(0,n.kt)("strong",{parentName:"h4"},"Add Condition")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"For adding a condition, the required fields are:"),(0,n.kt)("h5",a({},{id:"check-response"}),(0,n.kt)("strong",{parentName:"h5"},"Check Response")),(0,n.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,n.kt)("h5",a({},{id:"find-location"}),(0,n.kt)("strong",{parentName:"h5"},"Find Location")),(0,n.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HEADER_VAL")," : Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"COOKIE_VAL")," : Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AGRS_VAL")," : Rule will be applicable to the argument value in the request or response. "),(0,n.kt)("h5",a({},{id:"parameter-1"}),(0,n.kt)("strong",{parentName:"h5"},"Parameter")),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,n.kt)("h5",a({},{id:"match-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Match Condition")),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h5",a({},{id:"match-value"}),(0,n.kt)("strong",{parentName:"h5"},"Match Value")),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}h.isMDXComponent=!0},46943:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rules1-e2bf62061a5fb04fcc852fea1481bb14.png"},8247:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rules2-ecd4bfc7df67bdcfa7592242b4c8000e.png"}}]);