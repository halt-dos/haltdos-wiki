"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[54927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:1},s="Error Rules",i={unversionedId:"enterprise/adc/listeners/rules/error_rules",id:"enterprise/adc/listeners/rules/error_rules",title:"Error Rules",description:"---",source:"@site/docs/enterprise/adc/listeners/rules/error_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/error_rules",permalink:"/haltdos-wiki/enterprise/adc/listeners/rules/error_rules",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adc_sidebar",previous:{title:"Rules",permalink:"/haltdos-wiki/enterprise/adc/listeners/rules/"},next:{title:"Header Rules",permalink:"/haltdos-wiki/enterprise/adc/listeners/rules/header_rules"}},u={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5}],d={toc:p},c="wrapper";function m(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(c,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"error-rules"}),"Error Rules"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Error Rules is a feature of Haltdos SLB that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"errorrules",src:r(56946).Z,width:"1827",height:"749"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"li"},{href:"/adc/docs"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"../../listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Error rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Enabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"HTTP Response Codes"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Send Custom Response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Custom Error Page"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"File upload"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"User can mention the rule name. This will help the user to identify the rule and its usage."),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"User can enter a rule message to add a description on the rule name."),(0,n.kt)("h5",a({},{id:"rule-enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,n.kt)("p",null,"Users can enable or disable the rule."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("h5",a({},{id:"http-response-codes"}),(0,n.kt)("strong",{parentName:"h5"},"HTTP Response Codes")),(0,n.kt)("p",null,"User can mention the HTTP response code based on the custom error rule name."),(0,n.kt)("h5",a({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Specifies the action to be executed when this is gets triggered"),(0,n.kt)("h5",a({},{id:"custom-error-page"}),(0,n.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,n.kt)("p",null,"User can add custom error page that will be visible to end-users."))}m.isMDXComponent=!0},56946:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/errorrules-29e15860e38a70e7f8823fc8ead9cadb.png"}}]);