"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[98741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},o="Header Rules",s={unversionedId:"enterprise/waf/listener/rules/headerrules",id:"version-6.0/enterprise/waf/listener/rules/headerrules",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/rules/headerrules.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/headerrules",permalink:"/v6/enterprise/waf/listener/rules/headerrules",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Error Rules",permalink:"/v6/enterprise/waf/listener/rules/errorrules"},next:{title:"Redirectional Rules",permalink:"/v6/enterprise/waf/listener/rules/redirectionalrules"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:2}],c={toc:u},d="wrapper";function h(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(d,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"header-rules"}),"Header Rules"),(0,n.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,n.kt)("h1",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"header rules",src:r(34945).Z,width:"1496",height:"996"})),(0,n.kt)("h2",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("p",null,"1.Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > *Header Rules**."),(0,n.kt)("p",null,"2.Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described below."),(0,n.kt)("p",null,"3.Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"1.",(0,n.kt)("strong",{parentName:"p"},"Rule Name:")),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,"2.",(0,n.kt)("strong",{parentName:"p"},"Message:")),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("p",null,"3.",(0,n.kt)("strong",{parentName:"p"},"Rule Priority:")),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("p",null,"4.",(0,n.kt)("strong",{parentName:"p"},"URI:")),(0,n.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,n.kt)("p",null,"5.",(0,n.kt)("strong",{parentName:"p"},"Method:")),(0,n.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,n.kt)("p",null,"6.",(0,n.kt)("strong",{parentName:"p"},"Rule Action:")),(0,n.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("p",null,"1) ",(0,n.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location."),(0,n.kt)("p",null,"2) ",(0,n.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location."),(0,n.kt)("p",null,"3) ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,n.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,n.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,n.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," In order to escape the dollar($) character in the replace, add the dollar symbol twice."),(0,n.kt)("p",null,"7.",(0,n.kt)("strong",{parentName:"p"},"Evaluation Phase:")),(0,n.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,n.kt)("p",null,"8.",(0,n.kt)("strong",{parentName:"p"},"Attribute Name:")),(0,n.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,n.kt)("p",null,"9.",(0,n.kt)("strong",{parentName:"p"},"Attribute Value:")),(0,n.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,n.kt)("p",null,"10.",(0,n.kt)("strong",{parentName:"p"},"Parameter:")),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,n.kt)("p",null,"11.",(0,n.kt)("strong",{parentName:"p"},"Add Condition:")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"header rules",src:r(37754).Z,width:"1125",height:"594"})),(0,n.kt)("p",null,"For adding a condition, the required fields are:"),(0,n.kt)("p",null,"1.",(0,n.kt)("strong",{parentName:"p"},"Check Response:")),(0,n.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,n.kt)("p",null,"2.",(0,n.kt)("strong",{parentName:"p"},"Find Location:")),(0,n.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,"HEADER_VAL: Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,"COOKIE_VAL: Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,"AGRS_VAL: Rule will be applicable to the argument value in the request or response. "),(0,n.kt)("p",null,"3.",(0,n.kt)("strong",{parentName:"p"},"Parameter:")),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,n.kt)("p",null,"4.",(0,n.kt)("strong",{parentName:"p"},"Match Condition:")),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("p",null,"5.",(0,n.kt)("strong",{parentName:"p"},"Match Value:")),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}h.isMDXComponent=!0},34945:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rules-9b9fb1be95adbac0d6289e7e3d525a49.png"},37754:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/headerrulescondition-92e7cf38b5e5d69dcda213d171efef4a.png"}}]);