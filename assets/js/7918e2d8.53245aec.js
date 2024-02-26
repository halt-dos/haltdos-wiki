"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[57123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),k=l,f=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},71684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const o={sidebar_position:7},i="Network Rules",p={unversionedId:"enterprise/ddos/profile/network_rules",id:"version-7.0/enterprise/ddos/profile/network_rules",title:"Network Rules",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/ddos/profile/network_rules.md",sourceDirName:"enterprise/ddos/profile",slug:"/enterprise/ddos/profile/network_rules",permalink:"/enterprise/ddos/profile/network_rules",draft:!1,tags:[],version:"7.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"ddos_sidebar",previous:{title:"Traffic Shaping",permalink:"/enterprise/ddos/profile/traffic_shaping"},next:{title:"Geo Filtering",permalink:"/enterprise/ddos/geo_inspection"}},u={},s=[{value:"How to Use",id:"how-to-use",level:3},{value:"Rule Information",id:"rule-information",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Rule Description</strong>",id:"rule-description",level:5},{value:"<strong>Priority</strong>",id:"priority",level:5},{value:"<strong>Direction</strong>",id:"direction",level:5},{value:"<strong>Action</strong>",id:"action",level:5},{value:"Rule Conditions",id:"rule-conditions",level:3},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Field</strong>",id:"field",level:5},{value:"<strong>Criteria</strong>",id:"criteria",level:5}],d={toc:s},c="wrapper";function k(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(c,l({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"network-rules"}),"Network Rules"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule."),(0,n.kt)("h3",l({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > Network Rules"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add network rules with the specific configuration required.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"network_rukes",src:r(1463).Z,width:"1498",height:"922"})),(0,n.kt)("h3",l({},{id:"rule-information"}),"Rule Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Priority"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Direction"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Any")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Action"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Count")))),(0,n.kt)("h3",l({},{id:"description"}),"Description"),(0,n.kt)("h5",l({},{id:"name"}),(0,n.kt)("strong",{parentName:"h5"},"Name")),(0,n.kt)("p",null,"Specify the name of the rule"),(0,n.kt)("h5",l({},{id:"rule-description"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Description")),(0,n.kt)("p",null,"Specify the description for the rule"),(0,n.kt)("h5",l({},{id:"priority"}),(0,n.kt)("strong",{parentName:"h5"},"Priority")),(0,n.kt)("p",null,"User can specify the priority of the rule. In case of multiple rules, user can set the priority accordingly"),(0,n.kt)("h5",l({},{id:"direction"}),(0,n.kt)("strong",{parentName:"h5"},"Direction")),(0,n.kt)("p",null,"Specify the direction of the rule on which rule can apply i.e. Any, Inbound, Outbound"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Any"),": Rule is applicable on both Inbound as well as Outbound traffic"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inbound"),": Rule is applicable on Inbound traffic only"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Outbound"),": Rule is applicable on Outbound traffic only"),(0,n.kt)("h5",l({},{id:"action"}),(0,n.kt)("strong",{parentName:"h5"},"Action")),(0,n.kt)("p",null,"In this field user can select the action which should be applicable on the rule"),(0,n.kt)("h3",l({},{id:"rule-conditions"}),"Rule Conditions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Protocol"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"IPV4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Is IPV4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Criteria"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"None")))),(0,n.kt)("h5",l({},{id:"protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Protocol")),(0,n.kt)("p",null,"In this field user can specify the Protocol on which rule will be applicable."),(0,n.kt)("h5",l({},{id:"field"}),(0,n.kt)("strong",{parentName:"h5"},"Field")),(0,n.kt)("p",null,"User can specify the Field according to the selected protocol. Field will be different for the different protocol"),(0,n.kt)("h5",l({},{id:"criteria"}),(0,n.kt)("strong",{parentName:"h5"},"Criteria")),(0,n.kt)("p",null,"User can specify the Criteria according to the slected field. Criteria will be differnt for the different field"))}k.isMDXComponent=!0},1463:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/network-7786d7bfc976ec409f8dcae449164d55.png"}}]);