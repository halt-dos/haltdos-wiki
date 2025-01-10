/*! For license information please see 6ea56883.e7a0a91e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27395],{16310:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"enterprise/adc/listeners/server_groups/server_groups","title":"Server Groups","description":"User can determine load balancing mechanism and specify Server Groups.","source":"@site/versioned_docs/version-6.0/enterprise/adc/listeners/server_groups/server_groups.md","sourceDirName":"enterprise/adc/listeners/server_groups","slug":"/enterprise/adc/listeners/server_groups/","permalink":"/v6/enterprise/adc/listeners/server_groups/","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Geo Filtering","permalink":"/v6/enterprise/adc/listeners/geo_filtering"},"next":{"title":"Servers","permalink":"/v6/enterprise/adc/listeners/server_groups/servers"}}');var i=s(74848),t=s(28453);const o={},a="Server Groups",l={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Group Name",id:"group-name",level:4},{value:"Monitor",id:"monitor",level:4},{value:"SSL",id:"ssl",level:4},{value:"View Dashboard",id:"view-dashboard",level:3}];function h(e){const r={a:"a",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"server-groups",children:"Server Groups"})}),"\n",(0,i.jsx)(r.p,{children:"User can determine load balancing mechanism and specify Server Groups."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"Server Groups helps user to distributes network traffic to load balance across group of servers, for this at first we define a group name. Creating a group name in Servers Group helps to optimize and increase throughput of solution."}),"\n",(0,i.jsx)(r.p,{children:"Purpose of Server Groups:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Server Groups is specifically designed for high availability solution. In case, if a server is having a problem another server from the group takes over issue. This ensures the high availability of solution."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"If an active server from the group requires maintenance, it can be stopped while other servers handles its load. Thus, makes the maintenance more easier. The Server Groups can be configured and managed easily without any trouble."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Set up is easy because of Server Groups. If we want to change or modify at every servers, we can do it easily. Solution provides user to edit or modify the Group Name, Monitor, SSL and save the changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Server Groups provide user two functionality at a page to add Server Group and View Dashboard for optimal solution."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Server group",src:s(81853).A+"",width:"1567",height:"375"})}),"\n",(0,i.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Go to Stack > ",(0,i.jsx)(r.a,{href:"/enterprise/adc",children:(0,i.jsx)(r.strong,{children:"SLB"})})," > ",(0,i.jsx)(r.a,{href:"/v6/enterprise/adc/listeners/",children:(0,i.jsx)(r.strong,{children:"Listeners"})})," > Server groups."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Click ",(0,i.jsx)(r.strong,{children:"Add Server Group"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Click Save Changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"SETTINGS"}),(0,i.jsx)(r.th,{children:"ACCEPTED VALUE"}),(0,i.jsx)(r.th,{children:"DEFAULT"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Group Name"}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Blank"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Monitor"}),(0,i.jsx)(r.td,{children:"Drop-Down"}),(0,i.jsx)(r.td,{children:"Blank"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"SSL"}),(0,i.jsx)(r.td,{children:"Drop-Down"}),(0,i.jsx)(r.td,{children:"Disabled"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(r.h4,{id:"group-name",children:"Group Name"}),"\n",(0,i.jsx)(r.p,{children:"This option allows users to specify the user-friendly name to identify the Group Name."}),"\n",(0,i.jsx)(r.h4,{id:"monitor",children:"Monitor"}),"\n",(0,i.jsx)(r.p,{children:"This option allows users to set the monitor type which continuously test upstream server, avoid the failed server and gracefully add recovered servers into the server group."}),"\n",(0,i.jsx)(r.h4,{id:"ssl",children:"SSL"}),"\n",(0,i.jsxs)(r.p,{children:["This option allows users to enable/disable ",(0,i.jsx)(r.strong,{children:"SSL"}),". It helps to add more operational settings for send information safely and efficiently with the support of SSL Settings."]}),"\n",(0,i.jsx)(r.h3,{id:"view-dashboard",children:"View Dashboard"}),"\n",(0,i.jsx)(r.p,{children:"This option allows user to see the Server Analytics which is a dynamically report of server groups, show the analysis of resources, their upstream summary based on given date range. According to Date Range, dashboard shows report from past 5 Minutes to Custom Range."}),"\n",(0,i.jsxs)(r.p,{children:["This analytics is different from the homepage's analytics because here the dashboard is organized on the basis of server group and the analytics located under the ",(0,i.jsx)(r.strong,{children:"Stack"})," option is organized on the basis of ",(0,i.jsx)(r.a,{href:"/v6/enterprise/adc/listeners/",children:(0,i.jsx)(r.strong,{children:"listeners"})}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,r,s)=>{var n=s(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var n,t={},d=null,h=null;for(n in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(h=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:i,type:e,key:d,ref:h,props:t,_owner:a.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},74848:(e,r,s)=>{e.exports=s(21020)},81853:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/servergroup-89f18fde1edfa82f934ac585d13b4034.png"},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>a});var n=s(96540);const i={},t=n.createContext(i);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);