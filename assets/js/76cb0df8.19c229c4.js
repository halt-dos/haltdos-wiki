/*! For license information please see 76cb0df8.19c229c4.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11737],{18038:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"kb/waf/kb-1006","title":"KB:1006","description":"----------","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1006.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1006","permalink":"/v6/kb/waf/kb-1006","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"kb_sidebar","previous":{"title":"KB:1005","permalink":"/v6/kb/waf/kb-1005"},"next":{"title":"KB:1007","permalink":"/v6/kb/waf/kb-1007"}}');var s=n(74848),i=n(28453);const o={sidebar_position:6},a="KB:1006",c={},l=[];function h(e){const r={a:"a",h1:"h1",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"kb1006",children:"KB:1006"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"how-to-monitor-origin-servers-",children:"How to monitor origin servers ?"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Problem Statement"})}),"\n",(0,s.jsxs)(r.p,{children:["The client requires to have health check for the ",(0,s.jsx)(r.a,{href:"/v6/enterprise/waf/listener/server_groups/servergroup",children:(0,s.jsx)(r.strong,{children:"Server Group"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Solution"})}),"\n",(0,s.jsxs)(r.p,{children:["The client can achieve this by attaching the ",(0,s.jsx)(r.a,{href:"/v6/enterprise/waf/listener/monitor",children:(0,s.jsx)(r.strong,{children:"Monitor"})})," with ",(0,s.jsx)(r.strong,{children:"Server Group"})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Steps to Solve"})}),"\n",(0,s.jsxs)(r.p,{children:["Go to ",(0,s.jsx)(r.a,{href:"/v6/enterprise/waf/listener/monitor",children:(0,s.jsx)(r.strong,{children:"Monitor"})})," page and create a monitor."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"kb-1006",src:n(67906).A+"",width:"1577",height:"837"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["Attach the Monitor to the ",(0,s.jsx)(r.a,{href:"/v6/enterprise/waf/listener/server_groups/servergroup",children:(0,s.jsx)(r.strong,{children:"Server Group"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"kb-1006",src:n(1153).A+"",width:"1796",height:"846"})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsxs)(r.li,{children:["Now go to the ",(0,s.jsx)(r.a,{href:"/enterprise/waf/incidents",children:(0,s.jsx)(r.strong,{children:"Incidents"})})," page to see the status of ",(0,s.jsx)(r.a,{href:"/v6/enterprise/waf/listener/server_groups/servergroup",children:(0,s.jsx)(r.strong,{children:"Server Group"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"kb-1006",src:n(28372).A+"",width:"1916",height:"932"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,h=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(h=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:h,props:i,_owner:a.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},74848:(e,r,n)=>{e.exports=n(21020)},67906:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/kb6-693926597c8792cf7a4749ee8c34e83a.png"},1153:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/kb61-8f92378b04d096c08b6dcc5c69100174.png"},28372:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/kb66incident-2304ac281de3644fd209a170fab414d6.png"},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);