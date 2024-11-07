/*! For license information please see e508ed76.1d4d31b6.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[23589],{23818:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"kb/gslb/kb-4004","title":"KB: 4004","description":"How to configure DNS resolver to block the access to dangerous websites?","source":"@site/docs/kb/gslb/kb-4004.md","sourceDirName":"kb/gslb","slug":"/kb/gslb/kb-4004","permalink":"/kb/gslb/kb-4004","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 4003","permalink":"/kb/gslb/kb-4003"},"next":{"title":"KB: 4005","permalink":"/kb/gslb/kb-4005"}}');var r=s(74848),o=s(28453);const i={},l="KB: 4004",c={},a=[{value:"<strong>How to configure DNS resolver to block the access to dangerous websites?</strong>",id:"how-to-configure-dns-resolver-to-block-the-access-to-dangerous-websites",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-4004",children:"KB: 4004"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-configure-dns-resolver-to-block-the-access-to-dangerous-websites",children:(0,r.jsx)(t.strong,{children:"How to configure DNS resolver to block the access to dangerous websites?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"Client wants to configure DNS resolver to block the access to dangerous websites. So if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can\u2019t connect to the dangerous site."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsx)(t.p,{children:"The client can achieve the above requirement by utilising the Domain Filter under Haltdos GSLB."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-4004",src:s(49676).A+"",width:"1831",height:"945"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Now go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"GSLB"})," > ",(0,r.jsx)(t.strong,{children:"Listener Page will appear"})," > ",(0,r.jsx)(t.strong,{children:"Select Domain Filters"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-4004",src:s(67866).A+"",width:"1798",height:"941"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Add Domain Filter"})," > ",(0,r.jsx)(t.strong,{children:"Configure Domain Filter"})," > ",(0,r.jsx)(t.strong,{children:"Click on Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-4004",src:s(31971).A+"",width:"1798",height:"941"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Go Back to ",(0,r.jsx)(t.strong,{children:"Listener"})," > ",(0,r.jsx)(t.strong,{children:"Select a Listener"})," > ",(0,r.jsx)(t.strong,{children:"Operational Page will appear"})," > ",(0,r.jsx)(t.strong,{children:"Select Domain Filter File from Drop Down you have created"})," > ",(0,r.jsx)(t.strong,{children:"Click on Save Changes"}),".\r\n\u200b\r\n",(0,r.jsx)(t.img,{alt:"kb-4004",src:s(75078).A+"",width:"1798",height:"941"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,s)=>{var n=s(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var n,o={},a=null,d=null;for(n in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:a,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},74848:(e,t,s)=>{e.exports=s(21020)},67866:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/domain_kb_4004_2-413baa51bc0064c82b26e9d75f7e5993.png"},31971:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/domain_kb_4004_3-989d262a6ceca0cede9c0106f4182347.png"},75078:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/operational_kb_4004_4-309b40e58b1843630496641ca7ff18cc.png"},49676:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/overview_kb_4004_1-28d57536a9bc52f76916ab89dac8d7f8.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);