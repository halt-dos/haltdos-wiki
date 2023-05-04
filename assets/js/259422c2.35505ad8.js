"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[13524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},o="Header Rules",p={unversionedId:"enterprise/adc/listeners/rules/header_rules",id:"version-6.0/enterprise/adc/listeners/rules/header_rules",title:"Header Rules",description:"---",source:"@site/versioned_docs/version-6.0/enterprise/adc/listeners/rules/header_rules.md",sourceDirName:"enterprise/adc/listeners/rules",slug:"/enterprise/adc/listeners/rules/header_rules",permalink:"/v6/enterprise/adc/listeners/rules/header_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adc_sidebar",previous:{title:"Error Rules",permalink:"/v6/enterprise/adc/listeners/rules/error_rules"},next:{title:"Redirection Rule",permalink:"/v6/enterprise/adc/listeners/rules/redirection_rules"}},u={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Rule Condition",id:"rule-condition",level:3},{value:"Description:",id:"description",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4},{value:"Negation",id:"negation",level:4}],s={toc:d},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(c,a({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"header-rules"}),"Header Rules"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header in the request to the web-server (back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"headerrules",src:r(34879).Z,width:"1264",height:"462"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"p"},{href:"/adc/docs"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"p"},{href:"../../listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"p"},"Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Header Rule"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Enabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Add Request Header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Attribute Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Search Pattern"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Attribute Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"rule-condition"}),"Rule Condition"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"headerrules2",src:r(36109).Z,width:"932",height:"463"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"TYPE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source IP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Find Parameter"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match IP Perfix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Negation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("h4",a({},{id:"description"}),"Description:"),(0,n.kt)("h4",a({},{id:"find-location"}),"Find Location"),(0,n.kt)("p",null,"User can specify the location at which the header rule condition is being applied."),(0,n.kt)("h4",a({},{id:"find-parameter"}),"Find Parameter"),(0,n.kt)("p",null,"The user can set the parameter value for the header rule condition."),(0,n.kt)("h4",a({},{id:"match-condition"}),"Match Condition"),(0,n.kt)("p",null,"The user can set the match condition for above set parameter value and location."),(0,n.kt)("h4",a({},{id:"match-value"}),"Match Value"),(0,n.kt)("p",null,"The user can set the value that is matched with the condition set for particular rule condition. "),(0,n.kt)("h4",a({},{id:"negation"}),"Negation"),(0,n.kt)("p",null,"The user can also negate the rule condition."))}m.isMDXComponent=!0},34879:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/headerrules-aaa158077499b4cd3f456425f6e35c59.png"},36109:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/headerrules2-1b84d7297b0b593aba945862bf517be3.png"}}]);