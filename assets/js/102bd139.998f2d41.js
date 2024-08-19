"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[87822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={sidebar_position:4},s="Incidents",l={unversionedId:"enterprise/waf/incidents",id:"version-7.0/enterprise/waf/incidents",title:"Incidents",description:"Overview of various incidents and Alerts generated by Haltdos WAF",source:"@site/versioned_docs/version-7.0/enterprise/waf/incidents.md",sourceDirName:"enterprise/waf",slug:"/enterprise/waf/incidents",permalink:"/v7/enterprise/waf/incidents",draft:!1,tags:[],version:"7.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"Discovery",permalink:"/v7/enterprise/waf/listener/discovery"},next:{title:"Tools",permalink:"/v7/enterprise/waf/tools/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Events Page",id:"events-page",level:4},{value:"Event Details",id:"event-details",level:4},{value:"How to Use:",id:"how-to-use",level:2}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(d,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"incidents"}),"Incidents"),(0,r.kt)("p",null,"Overview of various incidents and Alerts generated by Haltdos WAF"),(0,r.kt)("hr",null),(0,r.kt)("h2",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Events. Events can be generated by the platform and various Apps subscribed to in your Stack. You can view all events or filter them based on category, scope, and time."),(0,r.kt)("h4",i({},{id:"events-page"}),"Events Page"),(0,r.kt)("p",null,"All events are listed on the Events Page. Filters are available to view events of a specific App/Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order."),(0,r.kt)("h4",i({},{id:"event-details"}),"Event Details"),(0,r.kt)("p",null,"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,r.kt)("p",null,"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Events",src:n(79474).Z,width:"1854",height:"923"})),(0,r.kt)("h2",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Apps")," "),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"WAF")),(0,r.kt)("li",{parentName:"ol"},"By Selecting different ",(0,r.kt)("strong",{parentName:"li"},"Category")," on Incident User can view different Incident like Drop, Record, Error or Health."),(0,r.kt)("li",{parentName:"ol"},"From ",(0,r.kt)("strong",{parentName:"li"},"Resources"),", User can select desired resource of listed listener."),(0,r.kt)("li",{parentName:"ol"},"From ",(0,r.kt)("strong",{parentName:"li"},"Date Range")," User can select customize date to view Incidents.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Auto-Refresh")),(0,r.kt)("p",null,"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."),(0,r.kt)("admonition",i({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Events are not verified via email or API. To recieve alerts, you have to create Alarms. All alarm\ntriggers are notified to selected authorized users on the platform")))}f.isMDXComponent=!0},79474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incidents-5324d024209182332d8f9a7aa17eb730.png"}}]);