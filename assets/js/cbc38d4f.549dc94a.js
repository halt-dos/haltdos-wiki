/*! For license information please see cbc38d4f.549dc94a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[85124],{19879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"enterprise/ddos/incidents/network","title":"Network","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/ddos/incidents/network.md","sourceDirName":"enterprise/ddos/incidents","slug":"/enterprise/ddos/incidents/network","permalink":"/v7/enterprise/ddos/incidents/network","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"ddos_sidebar","previous":{"title":"Cloud Signaling","permalink":"/v7/enterprise/ddos/cloud_signaling"},"next":{"title":"Application","permalink":"/v7/enterprise/ddos/incidents/application"}}');var i=t(74848),s=t(28453);const o={sidebar_position:6},d="Network",c={},l=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Timestamp</strong>",id:"timestamp",level:5},{value:"<strong>Category</strong>",id:"category",level:5},{value:"<strong>Rule</strong>",id:"rule",level:5},{value:"<strong>Src IP</strong>",id:"src-ip",level:5},{value:"<strong>Src Port</strong>",id:"src-port",level:5},{value:"<strong>Dest IP</strong>",id:"dest-ip",level:5},{value:"<strong>Dest Port</strong>",id:"dest-port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>DPI Error Code</strong>",id:"dpi-error-code",level:5},{value:"<strong>Flag</strong>",id:"flag",level:5},{value:"<strong>Direction</strong>",id:"direction",level:5},{value:"<strong>Country</strong>",id:"country",level:5},{value:"<strong>Bit Saved</strong>",id:"bit-saved",level:5},{value:"<strong>Counter</strong>",id:"counter",level:5},{value:"<strong>Score</strong>",id:"score",level:5},{value:"<strong>Action</strong>",id:"action",level:5}];function h(e){const n={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"network",children:"Network"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"On the incident page, users can check what packets are dropped by Haltdos mitigation solution."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"incidents",src:t(79057).A+"",width:"1685",height:"702"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Apps > DDoS > Incident"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Users can customize the date range for the incident details & check incident details about specific network profiles. Users can see the following incident details."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"Fields"})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"TIMESTAMP"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"CATEGORY"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"RULE"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"SRC IP"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"SRC PORT"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"DST IP"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"DST PORT"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"PROTOCOL"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"DPI Error Code"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"FLAG"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"DIRECTION"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"COUNTRY"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"BYTES"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"SCORE"})}),(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.td,{children:"ACTION"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"timestamp",children:(0,i.jsx)(n.strong,{children:"Timestamp"})}),"\n",(0,i.jsx)(n.p,{children:"This column specify the timestamp for the event."}),"\n",(0,i.jsx)(n.h5,{id:"category",children:(0,i.jsx)(n.strong,{children:"Category"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the category for the event."}),"\n",(0,i.jsx)(n.h5,{id:"rule",children:(0,i.jsx)(n.strong,{children:"Rule"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the rule and rule ID for the triggered event."}),"\n",(0,i.jsx)(n.h5,{id:"src-ip",children:(0,i.jsx)(n.strong,{children:"Src IP"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the source IP for the event."}),"\n",(0,i.jsx)(n.h5,{id:"src-port",children:(0,i.jsx)(n.strong,{children:"Src Port"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the source port for the event."}),"\n",(0,i.jsx)(n.h5,{id:"dest-ip",children:(0,i.jsx)(n.strong,{children:"Dest IP"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the destination IP for the event."}),"\n",(0,i.jsx)(n.h5,{id:"dest-port",children:(0,i.jsx)(n.strong,{children:"Dest Port"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the destination port for the event."}),"\n",(0,i.jsx)(n.h5,{id:"protocol",children:(0,i.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the protocol used in communication for the event."}),"\n",(0,i.jsx)(n.h5,{id:"dpi-error-code",children:(0,i.jsx)(n.strong,{children:"DPI Error Code"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the DPI error code if any request has been dropped due to DPI inspection."}),"\n",(0,i.jsx)(n.h5,{id:"flag",children:(0,i.jsx)(n.strong,{children:"Flag"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the TCP flag used for the communication."}),"\n",(0,i.jsx)(n.h5,{id:"direction",children:(0,i.jsx)(n.strong,{children:"Direction"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the direction of the communication which has been dropped. The communication can be Inbound or outbound. Inbound communication indicates that traffic has been generated from the WAN and moving towards LAN segment. The Outbound communication indicates that traffic has been generated from the LAN and moving towards WAN segment."}),"\n",(0,i.jsx)(n.h5,{id:"country",children:(0,i.jsx)(n.strong,{children:"Country"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the country of the malicious IP."}),"\n",(0,i.jsx)(n.h5,{id:"bit-saved",children:(0,i.jsx)(n.strong,{children:"Bit Saved"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the overall bit count that has been blocked."}),"\n",(0,i.jsx)(n.h5,{id:"counter",children:(0,i.jsx)(n.strong,{children:"Counter"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the overall count of the event that has been dropped."}),"\n",(0,i.jsx)(n.h5,{id:"score",children:(0,i.jsx)(n.strong,{children:"Score"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the packet score for the triggered event."}),"\n",(0,i.jsx)(n.h5,{id:"action",children:(0,i.jsx)(n.strong,{children:"Action"})}),"\n",(0,i.jsx)(n.p,{children:"This option specify the action for the triggered event. The Action can be dropped or log."})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,h=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:l,ref:h,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},79057:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/incidents-4760a4803f7f3884b12b8848f869c994.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);