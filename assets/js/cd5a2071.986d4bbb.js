/*! For license information please see cd5a2071.986d4bbb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[53034],{37593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"kb/adc/kb-2012","title":"KB: 2012","description":"How to set monitoring on origin servers?","source":"@site/versioned_docs/version-7.0/kb/adc/kb-2012.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2012","permalink":"/v7/kb/adc/kb-2012","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2011","permalink":"/v7/kb/adc/kb-2011"},"next":{"title":"KB: 2013","permalink":"/v7/kb/adc/kb-2013"}}');var o=t(74848),s=t(28453);const i={},c="KB: 2012",l={},d=[{value:"<strong>How to set monitoring on origin servers?</strong>",id:"how-to-set-monitoring-on-origin-servers",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function a(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kb-2012",children:"KB: 2012"})}),"\n",(0,o.jsx)(n.h3,{id:"how-to-set-monitoring-on-origin-servers",children:(0,o.jsx)(n.strong,{children:"How to set monitoring on origin servers?"})}),"\n",(0,o.jsx)(n.h4,{id:"problem-statement",children:(0,o.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,o.jsx)(n.p,{children:"The client requires to have health check for the Server Group."}),"\n",(0,o.jsx)(n.h4,{id:"solution",children:(0,o.jsx)(n.strong,{children:"Solution"})}),"\n",(0,o.jsx)(n.p,{children:"The client can achieve this by attaching the Monitor with Server Group."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(34649).A+"",width:"1836",height:"963"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Go to Monitors page and create a monitor ",(0,o.jsx)(n.strong,{children:"(Apps > SLB > Listner > Monitors)"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(56163).A+"",width:"1824",height:"952"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Attach the Monitor to the Server Group. ",(0,o.jsx)(n.strong,{children:"(Apps > SLB > Listner > Server Group)"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(95635).A+"",width:"1824",height:"952"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Now go to the Incidents page to see the status of Server Group."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(59503).A+"",width:"1824",height:"952"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:a,props:s,_owner:c.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},59503:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/incident_kb_2012_4-d2df205e8726f637237797e2f176837d.png"},56163:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/monitor_kb_2012_2-105b80bee4206aa03cecd4809c118d6f.png"},34649:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/overview_kb_2012_1-235dcc07fe1668182be616f50b2d5b5e.png"},95635:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/server_kb_2012_3-60b26a85f0317b4c7d0d7750953db62e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);