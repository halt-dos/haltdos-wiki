/*! For license information please see dcd1afe9.86209820.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[6706],{1110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1038","title":"KB: 1038","description":"-----------","source":"@site/docs/kb/waf/kb-1038.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1038","permalink":"/kb/waf/kb-1038","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":38,"frontMatter":{"sidebar_position":38},"sidebar":"kb_sidebar","previous":{"title":"KB: 1037","permalink":"/kb/waf/kb-1037"},"next":{"title":"KB: 1039","permalink":"/kb/waf/kb-1039"}}');var r=n(74848),i=n(28453);const o={sidebar_position:38},l="KB: 1038",a={},c=[{value:"<strong>How to rate limit the end user requests?</strong>",id:"how-to-rate-limit-the-end-user-requests",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1038",children:"KB: 1038"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"how-to-rate-limit-the-end-user-requests",children:(0,r.jsx)(t.strong,{children:"How to rate limit the end user requests?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to rate limit the end user request so that no end user can send spam requests."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(19397).A+"",width:"1400",height:"741"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"listener"})," > ",(0,r.jsx)(t.strong,{children:"profile"})," > ",(0,r.jsx)(t.strong,{children:"profile settings"})," > ",(0,r.jsx)(t.strong,{children:"rules"})," > ",(0,r.jsx)(t.strong,{children:"rate limit rule"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(59874).A+"",width:"1402",height:"742"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Click on Add Rule and Configure your setting"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(67773).A+"",width:"1402",height:"742"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"After completing configuration click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Now, after creating this rate limiting rule, end users request will be blocked when it breaches the threshold set."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1038",src:n(13654).A+"",width:"888",height:"540"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},13654:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/kb_1038_incident-160869d226cbd652019e71c2c0db5d26.png"},19397:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/kb_1038_overview-6299468031baf14ff38b884e9778857e.png"},59874:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/kb_1038_rate_limit-b63beb85472883496b738f256e234e58.png"},67773:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/kb_1038_rate_limit_conf-8c23df1f8442a8c99e5af4b52b79cc65.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);