/*! For license information please see a5eb6fea.c03998e0.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[59490],{48387:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"enterprise/gslb/listener/monitors","title":"Monitors","description":"DNS Monitoring in Haltdos GSLB.","source":"@site/versioned_docs/version-6.0/enterprise/gslb/listener/monitors.md","sourceDirName":"enterprise/gslb/listener","slug":"/enterprise/gslb/listener/monitors","permalink":"/v6/enterprise/gslb/listener/monitors","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"gslb_sidebar","previous":{"title":"Zones","permalink":"/v6/enterprise/gslb/listener/zones"},"next":{"title":"Rules","permalink":"/v6/enterprise/gslb/listener/rules"}}');var n=s(74848),i=s(28453);const o={sidebar_position:3},l="Monitors",h={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function d(e){const t={br:"br",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"monitors",children:"Monitors"})}),"\n",(0,n.jsx)(t.p,{children:"DNS Monitoring in Haltdos GSLB."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Haltdos allows users to configure custom monitoring that can monitor the server. These monitors check the health of the server to assist in efficient way to distribute all queries as per server set-up."}),"\n",(0,n.jsx)(t.p,{children:"If any of the server are monitored and marked as down, the traffic will not redirect to the same server unless the server comes up and complete the pass threshold meanwhile all the queries will be directed to another server."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to  ",(0,n.jsx)(t.strong,{children:"Stack"})," > ",(0,n.jsx)(t.strong,{children:"GSLB"})," > ",(0,n.jsx)(t.strong,{children:"Listener"})," > ",(0,n.jsx)(t.strong,{children:"Monitors"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Add Monitor"})," button."]}),"\n",(0,n.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Now go to ",(0,n.jsx)(t.strong,{children:"GSLB"})," > ",(0,n.jsx)(t.strong,{children:"Listeners"})," > ",(0,n.jsx)(t.strong,{children:"Zones"})," > Click on ",(0,n.jsx)(t.strong,{children:"Zone"})]}),"\n",(0,n.jsx)(t.li,{children:"Add the monitor to the Zone Server as required"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"monitors",src:s(24372).A+"",width:"1815",height:"884"})}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Monitor Name"}),(0,n.jsx)(t.br,{}),"\n","This option allows the user to set a name for his monitoring rule."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Health Check Interval"}),(0,n.jsx)(t.br,{}),"\n","This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Fail Threshold"}),(0,n.jsx)(t.br,{}),"\n","This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pass Threshold"}),(0,n.jsx)(t.br,{}),"\n","This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Monitor Timeout"}),(0,n.jsx)(t.br,{}),"\n","It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Health Check Type"}),(0,n.jsx)(t.br,{}),"\n","It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Check URI"}),(0,n.jsx)(t.br,{}),"\n","Specify the URI on which request will be send."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Match Status"}),(0,n.jsx)(t.br,{}),"\n","It Specify the response HTTP status to verify. 200 is by default."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Match Content"}),(0,n.jsx)(t.br,{}),"\n","It specifies the content that needs to be matched in the fetched resource."]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,s)=>{var r=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,i={},c=null,d=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},24372:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/monitors-b547044493401293aa7dd153ba0c974c.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);