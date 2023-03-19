"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:4},i="Transform Rules",p={unversionedId:"enterprise/waf/listener/rules/transformrule",id:"enterprise/waf/listener/rules/transformrule",title:"Transform Rules",description:"Transform Rule allow user to adjust or transform multiple attributes on there application. Like, User can Replace or Remove any parameter per there need. Even User can tranform parameter of there application like from XML to JSON or JSON to XML also.",source:"@site/docs/enterprise/waf/listener/rules/transformrule.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/transformrule",permalink:"/enterprise/waf/listener/rules/transformrule",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"Rules",permalink:"/enterprise/waf/listener/rules/"},next:{title:"Error Rules",permalink:"/enterprise/waf/listener/rules/errorrules"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Rule Information",id:"rule-information",level:2},{value:"Rule Condition",id:"rule-condition",level:2},{value:"Description",id:"description",level:2}],m={toc:s},d="wrapper";function c(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(d,a({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"transform-rules"}),"Transform Rules"),(0,n.kt)("p",null,"Transform Rule allow user to adjust or transform multiple attributes on there application. Like, User can Replace or Remove any parameter per there need. Even User can tranform parameter of there application like from XML to JSON or JSON to XML also."),(0,n.kt)("p",null,"Under Transform Rule user can even tranform certain protocol like HTTP to MQTT. MQTT is a standards-based messaging protocol, or set of rules, used for machine-to-machine communication."),(0,n.kt)("p",null,"Transform Rule allow user to do HTML encoding beacause it ensures that text will be correctly displayed in the browser, not interpreted by the browser as HTML"),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"transformrule",src:r(38842).Z,width:"1773",height:"925"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("p",null,"1.Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > ",(0,n.kt)("strong",{parentName:"p"},"Tranform Rule")),(0,n.kt)("p",null,"2.Configure the Rule and Rule Condition "),(0,n.kt)("p",null,"3.Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")),(0,n.kt)("h2",a({},{id:"rule-information"}),"Rule Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Transformation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Argument Value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Parameter Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Replace With"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h2",a({},{id:"rule-condition"}),"Rule Condition"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Body Argument Name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h2",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,"1.",(0,n.kt)("strong",{parentName:"p"},"Rule Name :")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,"2.",(0,n.kt)("strong",{parentName:"p"},"Rule Message :")),(0,n.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,n.kt)("p",null,"3.",(0,n.kt)("strong",{parentName:"p"},"Rule Priority:")," "),(0,n.kt)("p",null,"Set the priority of the rule. If two rules have the same priority, then selection will be random."),(0,n.kt)("p",null,"4.",(0,n.kt)("strong",{parentName:"p"},"URI:")),(0,n.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,n.kt)("p",null,"5.",(0,n.kt)("strong",{parentName:"p"},"Method:")),(0,n.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,n.kt)("p",null,"6.",(0,n.kt)("strong",{parentName:"p"},"Transformation:")),(0,n.kt)("p",null,"Under this user can select which tranform he wants eg. HTTP to MQTT, XML to JSON or JSON to XML. Under this user can also set, replace or remove any parameter of there application."),(0,n.kt)("p",null," 6.1",(0,n.kt)("strong",{parentName:"p"},"XML to JSON"),"- An element mentioned in XML can be tranform to JSON user just have to provide the location like whether it will be argument name, argument value,body ,body argument name , body argument value and Parameter Name."),(0,n.kt)("p",null," 6.2",(0,n.kt)("strong",{parentName:"p"},"JSON to XML"),"- An element mentioned in JSON can be tranform to XML user just have to provide the location like whether it will be argument name, argument value,body ,body argument name , body argument value and Parameter Name."),(0,n.kt)("p",null," 6.3 ",(0,n.kt)("strong",{parentName:"p"},"HTTP to MQTT"),"- Under this transformation user can convert the protocol service from HTTP to MQTT."),(0,n.kt)("p",null," 6.4 ",(0,n.kt)("strong",{parentName:"p"},"HTML Encode"),"- HTML Encode ensures that all the elements and text will be correctly displayed in the browser."),(0,n.kt)("p",null,"7.",(0,n.kt)("strong",{parentName:"p"},"Location:")),(0,n.kt)("p",null,"Location provides the path on which transformation rule is going to work."),(0,n.kt)("p",null,"8.",(0,n.kt)("strong",{parentName:"p"},"Parameter Name:")),(0,n.kt)("p",null,"User have to specify the parameter name of which transform rule will work."),(0,n.kt)("p",null,"9.",(0,n.kt)("strong",{parentName:"p"},"Replace:")),(0,n.kt)("p",null,"Replace option comes only in use when the transformation is SET, REPLACE, HTTP to MQTT or HTML Encode"),(0,n.kt)("p",null,"10.",(0,n.kt)("strong",{parentName:"p"},"MQTT Client ID:")),(0,n.kt)("p",null,"This option comes into play when Transformation is ",(0,n.kt)("strong",{parentName:"p"},"HTTP to MQTT"),". Here user have to specify the client ID. In this User will be able to connect the backend."),(0,n.kt)("p",null,"11.",(0,n.kt)("strong",{parentName:"p"},"MQTT Username:")),(0,n.kt)("p",null,"Here User have to specify MQTT username."),(0,n.kt)("p",null,"12.",(0,n.kt)("strong",{parentName:"p"},"MQTT Password:")),(0,n.kt)("p",null,"Here User have to specify MQTT passwordss"))}c.isMDXComponent=!0},38842:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/transformrule-9097b33e96877b2b8f343524552c5b01.png"}}]);