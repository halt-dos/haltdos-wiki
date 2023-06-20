"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[28170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={sidebar_position:4},s="Incidents",l={unversionedId:"enterprise/waf/incidents",id:"enterprise/waf/incidents",title:"Incidents",description:"Overview of various incidents and Alerts generated by Haltdos WAF",source:"@site/docs/enterprise/waf/incidents.md",sourceDirName:"enterprise/waf",slug:"/enterprise/waf/incidents",permalink:"/enterprise/waf/incidents",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"User Groups",permalink:"/enterprise/waf/usergroups"},next:{title:"Global Whitelist",permalink:"/enterprise/waf/global_whitelist"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Events Page",id:"events-page",level:4},{value:"Event Details",id:"event-details",level:4},{value:"How to Use:",id:"how-to-use",level:2}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"incidents"}),"Incidents"),(0,n.kt)("p",null,"Overview of various incidents and Alerts generated by Haltdos WAF"),(0,n.kt)("hr",null),(0,n.kt)("h2",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Events. Events can be generated by the platform and various Apps subscribed to in your Stack. You can view all events or filter them based on category, scope, and time."),(0,n.kt)("h4",i({},{id:"events-page"}),"Events Page"),(0,n.kt)("p",null,"All events are listed on the Events Page. Filters are available to view events of a specific App/Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order."),(0,n.kt)("h4",i({},{id:"event-details"}),"Event Details"),(0,n.kt)("p",null,"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,n.kt)("p",null,"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Events",src:r(79474).Z,width:"1854",height:"923"})),(0,n.kt)("h2",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Apps")," "),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"WAF")),(0,n.kt)("li",{parentName:"ol"},"By Selecting different ",(0,n.kt)("strong",{parentName:"li"},"Category")," on Incident User can view different Incident like Drop, Record, Error or Health."),(0,n.kt)("li",{parentName:"ol"},"From ",(0,n.kt)("strong",{parentName:"li"},"Resources"),", User can select desired resource of listed listener."),(0,n.kt)("li",{parentName:"ol"},"From ",(0,n.kt)("strong",{parentName:"li"},"Date Range")," User can select customize date to view Incidents.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Auto-Refresh")),(0,n.kt)("p",null,"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Events are not verified via email or API. To recieve alerts, you have to create Alarms. All alarm\ntriggers are notified to selected authorized users on the platform")))}f.isMDXComponent=!0},79474:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/incidents-5324d024209182332d8f9a7aa17eb730.png"}}]);