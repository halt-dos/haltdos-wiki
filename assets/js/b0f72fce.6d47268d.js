/*! For license information please see b0f72fce.6d47268d.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[22904],{68390:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cloud/waf/listener/server-groups/server-groups","title":"Server Groups","description":"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/server-groups/server-groups.md","sourceDirName":"cloud/waf/listener/server-groups","slug":"/cloud/waf/listener/server-groups/","permalink":"/v7/cloud/waf/listener/server-groups/","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"cloud_sidebar","previous":{"title":"Upstream rules","permalink":"/v7/cloud/waf/listener/rules/upstream_rules"},"next":{"title":"Servers","permalink":"/v7/cloud/waf/listener/server-groups/servers"}}');var t=n(74848),i=n(28453);const o={sidebar_position:1},d="Server Groups",l={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function h(e){const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"server-groups",children:"Server Groups"})}),"\n",(0,t.jsx)(r.p,{children:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the Servers page. To pass requests to a server group, use Upstream Rules."}),"\n",(0,t.jsx)(r.p,{children:"This is useful for:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Autoscaling, when you need to add more servers."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Backup Server, When all active servers breach the failure"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Monitoring, when you get the state of the server or server group with one command."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Go to ",(0,t.jsx)(r.strong,{children:"WAF > Zones > Listeners > Server Groups"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click ",(0,t.jsx)(r.strong,{children:"Add Server Group"})," and configure details."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"PARAMETERS"}),(0,t.jsx)(r.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(r.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Group Name"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"blank"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Monitor"}),(0,t.jsx)(r.td,{children:"Select from existing monitors"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Connect Timeout"}),(0,t.jsx)(r.td,{children:"Integer (Seconds)"}),(0,t.jsx)(r.td,{children:"100"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Send Timeout"}),(0,t.jsx)(r.td,{children:"Integer (Seconds)"}),(0,t.jsx)(r.td,{children:"100"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Read Timeout"}),(0,t.jsx)(r.td,{children:"Integer (Seconds)"}),(0,t.jsx)(r.td,{children:"100"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Group Name"})}),"\n",(0,t.jsx)(r.p,{children:"Specify a user-friendly name to identify the server group. The group name takes alpha-numeric input."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Monitor"})}),"\n",(0,t.jsx)(r.p,{children:"Attach any existing monitor to the server group."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Connect Timeout"})}),"\n",(0,t.jsx)(r.p,{children:"Defines a timeout for establishing a connection with a proxied server."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Send Timeout"})}),"\n",(0,t.jsx)(r.p,{children:"Sets a timeout for transmitting a request to the proxied server. The timeout is set only between two successive write operations, not for the transmission of the whole request. If the proxied server does not receive anything within this time, the connection is closed."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Read Timeout"})}),"\n",(0,t.jsx)(r.p,{children:"Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations, not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed."})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)o.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:h,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var s=n(96540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);