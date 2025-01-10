/*! For license information please see 337299ce.1c505733.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[42812],{30807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"enterprise/platform/stacks/events","title":"Events","description":"Overview of various Events and Alerts generated by Haltdos","source":"@site/versioned_docs/version-7.0/enterprise/platform/stacks/events.md","sourceDirName":"enterprise/platform/stacks","slug":"/enterprise/platform/stacks/events","permalink":"/v7/enterprise/platform/stacks/events","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"platform_sidebar","previous":{"title":"Stacks","permalink":"/v7/enterprise/platform/stacks/"},"next":{"title":"Alarms","permalink":"/v7/enterprise/platform/stacks/alarms"}}');var r=n(74848),i=n(28453);const d={sidebar_position:2},l="Events",o={},a=[{value:"Overview",id:"overview",level:2},{value:"Event Types",id:"event-types",level:3}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"events",children:"Events"})}),"\n",(0,r.jsx)(t.p,{children:"Overview of various Events and Alerts generated by Haltdos"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Haltdos solutions provides real-time alerts for various types of incidents from attacks to accounting / audit incidents through Events. Events can be generated by the platform and various Apps subscribed in your Stack. You can view all events or filter them based on category, scope and time."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Events Page"})}),"\n",(0,r.jsx)(t.p,{children:"All events are listed on the Events Page. Filters are available to view events of a specific App/Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Event Details"})}),"\n",(0,r.jsx)(t.p,{children:"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."}),"\n",(0,r.jsx)(t.p,{children:"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"stackevents",src:n(81318).A+"",width:"1826",height:"544"})}),"\n",(0,r.jsx)(t.h3,{id:"event-types",children:"Event Types"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"App"}),(0,r.jsx)(t.th,{children:"Email"}),(0,r.jsx)(t.th,{children:"Actions"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"All"}),(0,r.jsx)(t.td,{children:"Displays all the events for configured Resoruce"}),(0,r.jsx)(t.td,{children:"ALL"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Alarm"}),(0,r.jsx)(t.td,{children:"Displays details of configured alarms triggered"}),(0,r.jsx)(t.td,{children:"ALL"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Download"}),(0,r.jsx)(t.td,{children:"Displays all the file download events"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Report"}),(0,r.jsx)(t.td,{children:"Displays the report generated to be downloaded"}),(0,r.jsx)(t.td,{children:"ALL"}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Instance"}),(0,r.jsx)(t.td,{children:"Displays details of any instance notification"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Jobs"}),(0,r.jsx)(t.td,{children:"Displays the events for failed jobs"}),(0,r.jsx)(t.td,{children:"ALL"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"--"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Backup"}),(0,r.jsx)(t.td,{children:"Displays the events for backup"}),(0,r.jsx)(t.td,{children:"ALL"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"--"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Filter"})}),"\n",(0,r.jsx)(t.p,{children:"Users can filter out the events based on All, App, Zone, and Listener configured for the specific app."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Download"})}),"\n",(0,r.jsx)(t.p,{children:"Users can download the events specifying the event count, start time & date, and category i.e. All, Attack, Health. Upon specifying the fields user will click on the Download button and a spreadsheet will be downloaded."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Auto Refresh"})}),"\n",(0,r.jsx)(t.p,{children:"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsx)(t.p,{children:"Events are not notified via email or API. To receive alerts, you have to create Alarms. All alarm triggers are notified to selected authorised users on the platform."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,i={},a=null,c=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,s)&&!o.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:a,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},81318:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/events_newui_-0e5a883674c8e1c19051f153609facc6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);