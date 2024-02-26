"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:8},o="Events",s={unversionedId:"enterprise/platform/system/events",id:"version-7.0/enterprise/platform/system/events",title:"Events",description:"Overview of various Events and Alerts generated by Haltdos",source:"@site/versioned_docs/version-7.0/enterprise/platform/system/events.md",sourceDirName:"enterprise/platform/system",slug:"/enterprise/platform/system/events",permalink:"/enterprise/platform/system/events",draft:!1,tags:[],version:"7.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"platform_sidebar",previous:{title:"TACACS server",permalink:"/enterprise/platform/system/authentication/tacacs"},next:{title:"Audit Trail",permalink:"/enterprise/platform/system/audit_trail"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Event Types",id:"event-types",level:3}],d={toc:u},c="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(c,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"events"}),"Events"),(0,r.kt)("p",null,"Overview of various Events and Alerts generated by Haltdos"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos solutions provides real-time alerts for various types of incidents from attacks to accounting / audit incidents through Events. Events can be generated by the platform and various Apps subscribed in your Stack. You can view all events or filter them based on category, scope and time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Events Page")),(0,r.kt)("p",null,"All events are listed on the Events Page. Filters are available to view events of a specific App/Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event Details")),(0,r.kt)("p",null,"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,r.kt)("p",null,"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"stackevents",src:n(14815).Z,width:"1826",height:"544"})),(0,r.kt)("h3",a({},{id:"event-types"}),"Event Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"App"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Email"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Actions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"All"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays all the events for configured Resoruce"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALL"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Alarm"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays details of configured alarms triggered"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALL"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Download"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays all the file download events"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Report"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays the report generated to be downloaded"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALL"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Instance"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays details of any instance notification"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Jobs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays the events for failed jobs"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALL"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Backup"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Displays the events for backup"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ALL"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filter")),(0,r.kt)("p",null,"Users can filter out the events based on All, App, Zone, and Listener configured for the specific app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download")),(0,r.kt)("p",null,"Users can download the events specifying the event count, start time & date, and category i.e. All, Attack, Health. Upon specifying the fields user will click on the Download button and a spreadsheet will be downloaded."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Auto Refresh")),(0,r.kt)("p",null,"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Events are not notified via email or API. To receive alerts, you have to create Alarms. All alarm triggers are notified to selected authorised users on the platform.")))}m.isMDXComponent=!0},14815:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/events_newui_-0e5a883674c8e1c19051f153609facc6.png"}}]);