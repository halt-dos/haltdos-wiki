/*! For license information please see 0da93dfc.a0236f5a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[15197],{11596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1064","title":"KB: 1064","description":"How to whitelist request based on particular pattern?","source":"@site/versioned_docs/version-7.0/kb/waf/kb-1064.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1064","permalink":"/v7/kb/waf/kb-1064","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":64,"frontMatter":{"sidebar_position":64},"sidebar":"kb_sidebar","previous":{"title":"KB: 1063","permalink":"/v7/kb/waf/kb-1063"},"next":{"title":"KB: 1065","permalink":"/v7/kb/waf/kb-1065"}}');var r=n(74848),i=n(28453);const o={sidebar_position:64},l="KB: 1064",a={},c=[{value:"<strong>How to whitelist request based on particular pattern?</strong>",id:"how-to-whitelist-request-based-on-particular-pattern",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1064",children:"KB: 1064"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-whitelist-request-based-on-particular-pattern",children:(0,r.jsx)(t.strong,{children:"How to whitelist request based on particular pattern?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"Client wants to whitelist requests based on particular pattern."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsx)(t.p,{children:"The client can whitelist the request by creating Whitelist rule on Haltdos WAF."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1064",src:n(89395).A+"",width:"1810",height:"966"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Now to analyze the pattern of request"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Go to Stacks > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Incidents"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1064",src:n(35198).A+"",width:"1809",height:"967"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"On a respective incident, click on setting icon."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1064",src:n(41097).A+"",width:"1809",height:"967"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"Enter the rule details along with the rule condition consisting of pattern to be whitelist."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1064",src:n(1014).A+"",width:"1809",height:"967"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},35198:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/incidents_kb_1064_2-8b1e192f96ed9e10d91c6cb3792cb5bb.png"},89395:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/overview_kb_1064_1-b66b77acbb01e13a8777400c8be88de8.png"},41097:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/whitelist_kb_1064_3-93027ed15718756016d6f9a4cc0708e6.png"},1014:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/whitelist_kb_1064_4-198c0430628e365342d9fa00ac250aad.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);