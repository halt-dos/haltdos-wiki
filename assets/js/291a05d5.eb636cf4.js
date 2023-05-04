"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[81482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:7},s="Signatures",o={unversionedId:"enterprise/waf/listener/profiles/signatures",id:"enterprise/waf/listener/profiles/signatures",title:"Signatures",description:"These are in-built rules of WAF.",source:"@site/docs/enterprise/waf/listener/profiles/signatures.md",sourceDirName:"enterprise/waf/listener/profiles",slug:"/enterprise/waf/listener/profiles/signatures",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/signatures",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"waf_sidebar",previous:{title:"Log Rules",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/rules/log_rules"},next:{title:"SSL Settings",permalink:"/haltdos-wiki/enterprise/waf/listener/ssl_settings"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:3},{value:"<strong>Rule ID</strong>",id:"rule-id",level:5},{value:"<strong>Type</strong>",id:"type",level:5},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Status</strong>",id:"status",level:5},{value:"<strong>Timestamp</strong>",id:"timestamp",level:5},{value:"<strong>Requests</strong>",id:"requests",level:5},{value:"<strong>Match</strong>",id:"match",level:5},{value:"<strong>Action</strong>",id:"action",level:5}],c={toc:p},d="wrapper";function h(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(d,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"signatures"}),"Signatures"),(0,n.kt)("p",null,"These are in-built rules of WAF."),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Signatures",src:r(35441).Z,width:"1830",height:"949"})),(0,n.kt)("h2",a({},{id:"how-to-use-"}),"How to Use :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Signatures")),(0,n.kt)("li",{parentName:"ol"},"You can change the status of the signature to AUTO, PROD, STAGED, DISABLED."),(0,n.kt)("li",{parentName:"ol"},"Configurations will be deployed successfully.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Id"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Type of rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name of the signature"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Status"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Choose the status of the signature from the drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Auto")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Timestamp"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Date and Timestamp of the rule when last updated."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Requests"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specifies the count of hits"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specifies the count when the rule is matched."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Delete the rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-id"}),(0,n.kt)("strong",{parentName:"h5"},"Rule ID")),(0,n.kt)("p",null,"Predefined rule ID for the signatures. The ID is unique for each rule."),(0,n.kt)("h5",a({},{id:"type"}),(0,n.kt)("strong",{parentName:"h5"},"Type")),(0,n.kt)("p",null,"It specifies the type of signature like Firewall, Response, etc."),(0,n.kt)("h5",a({},{id:"name"}),(0,n.kt)("strong",{parentName:"h5"},"Name")),(0,n.kt)("p",null,"It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule."),(0,n.kt)("h5",a({},{id:"status"}),(0,n.kt)("strong",{parentName:"h5"},"Status")),(0,n.kt)("p",null,"It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED."),(0,n.kt)("h5",a({},{id:"timestamp"}),(0,n.kt)("strong",{parentName:"h5"},"Timestamp")),(0,n.kt)("p",null,"It specifies the date time stamp at which the rule has been updated."),(0,n.kt)("h5",a({},{id:"requests"}),(0,n.kt)("strong",{parentName:"h5"},"Requests")),(0,n.kt)("p",null,"It specifies the number of times request matched with the current rule while learning-enabled with the current security profile."),(0,n.kt)("h5",a({},{id:"match"}),(0,n.kt)("strong",{parentName:"h5"},"Match")),(0,n.kt)("p",null,"It specifies the number of requests matched with the current rule in the current security profile."),(0,n.kt)("h5",a({},{id:"action"}),(0,n.kt)("strong",{parentName:"h5"},"Action")),(0,n.kt)("p",null,"It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile."),(0,n.kt)("p",null,"We can reset learning by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Reset Learning")," button at the top right of the page."),(0,n.kt)("p",null,"We can also update the rule status at once by selecting multiple rules. After clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Update Status")," button, select desired status to update."))}h.isMDXComponent=!0},35441:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profile_signatures-b0ec1e5ffc43e40121bd10e6fc607e75.png"}}]);