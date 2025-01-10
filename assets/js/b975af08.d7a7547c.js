/*! For license information please see b975af08.d7a7547c.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[41345],{84667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"enterprise/ddos/profile/general_settings","title":"General Settings","description":"For inspect the packet","source":"@site/versioned_docs/version-6.0/enterprise/ddos/profile/general_settings.md","sourceDirName":"enterprise/ddos/profile","slug":"/enterprise/ddos/profile/general_settings","permalink":"/v6/enterprise/ddos/profile/general_settings","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ddos_sidebar","previous":{"title":"Profile","permalink":"/v6/enterprise/ddos/profile/"},"next":{"title":"Detection","permalink":"/v6/enterprise/ddos/profile/detection"}}');var s=t(74848),i=t(28453);const o={sidebar_position:1},l="General Settings",d={},c=[{value:"<strong>How to Go:</strong>",id:"how-to-go",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Graceful Startup Period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Anti-Scanning Threshold</strong>",id:"anti-scanning-threshold",level:5}];function a(e){const n={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"general-settings",children:"General Settings"})}),"\n",(0,s.jsx)(n.p,{children:"For inspect the packet"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"General settings evaluates the data part and the header of a packet that is transmitted through an inspection point, weeding out any non-compliance to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"general_setting",src:t(15205).A+"",width:"1278",height:"427"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-go",children:(0,s.jsx)(n.strong,{children:"How to Go:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Stack > Resource > DDoS > Profile > General Settings"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable/Disable the settings"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click on Save Changes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Settings"}),(0,s.jsx)(n.th,{children:"Accepted Values"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protocols"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Graceful Startup Period"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SSL Renegotiation Threshold"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Anti-Scanning Threshold"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsx)(n.h5,{id:"protocol",children:(0,s.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,s.jsx)(n.p,{children:"Select the protocol name for inspection of the packets"}),"\n",(0,s.jsx)(n.h5,{id:"graceful-startup-period",children:(0,s.jsx)(n.strong,{children:"Graceful Startup Period"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)"}),"\n",(0,s.jsx)(n.h5,{id:"ssl-renegotiation-threshold",children:(0,s.jsx)(n.strong,{children:"SSL Renegotiation Threshold"})}),"\n",(0,s.jsx)(n.p,{children:"Users can specify the maximum allowed SSL negotiations in a connection."}),"\n",(0,s.jsx)(n.h5,{id:"anti-scanning-threshold",children:(0,s.jsx)(n.strong,{children:"Anti-Scanning Threshold"})}),"\n",(0,s.jsx)(n.p,{children:"Users can specify thresholds in pps to block network scanning attempts."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},15205:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ddos4-bfa78dee13dd5389eec14638f78f1faa.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);