"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[69750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={sidebar_position:3},s="Incidents",c={unversionedId:"docs/incident",id:"docs/incident",title:"Incidents",description:"---",source:"@site/community/docs/incident.md",sourceDirName:"docs",slug:"/docs/incident",permalink:"/community/docs/incident",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community_sidebar",previous:{title:"Signatures",permalink:"/community/docs/waf/signatures"},next:{title:"SSL Certificates",permalink:"/community/docs/ssl_certificates"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Incident Page",id:"incident-page",level:4},{value:"Incident Details",id:"incident-details",level:4},{value:"Type of Incidents",id:"type-of-incidents",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],d={toc:p},u="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(u,i({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"incidents"}),"Incidents"),(0,r.kt)("hr",null),(0,r.kt)("h2",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Incidents. Incidents can be generated. You can view all incidents or filter them based on category, time."),(0,r.kt)("h4",i({},{id:"incident-page"}),"Incident Page"),(0,r.kt)("p",null,"All incidents are listed on the Incidents Page. Filters are available to view incidents of a specific incident type. Each incident is identified by a unique Incident ID which can also be used for searching a specific incidents on the Incidents Page. All Incidents are listed in decreasing chronological order."),(0,r.kt)("h4",i({},{id:"incident-details"}),"Incident Details"),(0,r.kt)("p",null,"Depending upon the type of incidents, clicking on any Incident shows details of the incident. For example, a WAF Attack Incident will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,r.kt)("p",null,"Further to detailing the incident through Incidents, users can perform various actions. For example, virtual patching functionality is implemented through actions in Incident Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"incidents",src:n(93728).Z,width:"1280",height:"632"})),(0,r.kt)("h4",i({},{id:"type-of-incidents"}),"Type of Incidents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Drop Incidents"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Recorded Incidents"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Server Errors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Health Incidents")))),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"Incidents"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose Type of Incidents that you want to view."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You may also check the previous incidents by changing the date.")))),(0,r.kt)("h3",i({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filter"),"\nUsers can filter out the events based on type of incidents."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refresh"),"\nUsers can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Date Range"),"\nUsers are allowed to select an appropriate date range no longer than 1 month."))}f.isMDXComponent=!0},93728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incidents-4057b6f5ee84ee89b73b61918d0c1254.jpeg"}}]);