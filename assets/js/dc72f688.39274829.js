/*! For license information please see dc72f688.39274829.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[75743],{78762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1038","title":"KB: 1038","description":"-----------","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1038.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1038","permalink":"/v6/kb/waf/kb-1038","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":38,"frontMatter":{"sidebar_position":38},"sidebar":"kb_sidebar","previous":{"title":"KB: 1037","permalink":"/v6/kb/waf/kb-1037"},"next":{"title":"KB: 1039","permalink":"/v6/kb/waf/kb-1039"}}');var r=n(74848),i=n(28453);const o={sidebar_position:38},a="KB: 1038",l={},c=[];function d(e){const t={h1:"h1",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1038",children:"KB: 1038"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"how-to-rate-limit-the-end-user-requests",children:"How to rate limit the end user requests?"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to rate limit the end user request so that no end user can send spam requests."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"First log into the Haltdos management console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(51676).A+"",width:"1920",height:"527"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Go to stack > WAF > listener > profile > profile settings > rules > rate limit rule."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(6050).A+"",width:"1835",height:"863"})}),"\n",(0,r.jsx)(t.p,{children:"3.Click on Add Rule and Configure your setting"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(54233).A+"",width:"1885",height:"860"})}),"\n",(0,r.jsx)(t.p,{children:"4.After completing  configuration click on save changes."}),"\n",(0,r.jsx)(t.p,{children:"Now, after creating this rate limiting rule, end users request will be blocked when it breaches the threshold set."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(34947).A+"",width:"1883",height:"866"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},51676:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},6050:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/f1-db3b35f4c6f072af6ea62ffdaa059326.png"},54233:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/f2-655cfcf3d6a01dc624cf457e23faedd3.png"},34947:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/f3-8fa1a950ade49b9867c78b9ab85ff53d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);