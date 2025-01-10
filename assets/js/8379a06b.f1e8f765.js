/*! For license information please see 8379a06b.f1e8f765.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26127],{60986:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"kb/waf/kb-1059","title":"KB: 1059","description":"How to prevent Cross-site Request Forgery through Haltdos WAF?","source":"@site/docs/kb/waf/kb-1059.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1059","permalink":"/kb/waf/kb-1059","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":59,"frontMatter":{"sidebar_position":59},"sidebar":"kb_sidebar","previous":{"title":"KB: 1058","permalink":"/kb/waf/kb-1058"},"next":{"title":"KB: 1060","permalink":"/kb/waf/kb-1060"}}');var r=s(74848),o=s(28453);const i={sidebar_position:59},l="KB: 1059",c={},a=[{value:"<strong>How to prevent Cross-site Request Forgery through Haltdos WAF?</strong>",id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1059",children:"KB: 1059"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf",children:(0,r.jsx)(t.strong,{children:"How to prevent Cross-site Request Forgery through Haltdos WAF?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"Client wants prevent their sites by Cross-site Request Forgery attack."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsx)(t.p,{children:"The client can achieve the above requirement by configuring settings to prevent CSRF on Haltdos console."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1059",src:s(37383).A+"",width:"1810",height:"966"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listener"})," > ",(0,r.jsx)(t.strong,{children:"Advance Bot"})," > ",(0,r.jsx)(t.strong,{children:"Configure settings for CSRF"})," > ",(0,r.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1059",src:s(14547).A+"",width:"1816",height:"964"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listener"})," > ",(0,r.jsx)(t.strong,{children:"Profile"})," > ",(0,r.jsx)(t.strong,{children:"Profile default setting"})," > ",(0,r.jsx)(t.strong,{children:"Policy"})," > ",(0,r.jsx)(t.strong,{children:"Web Policy"})," > ",(0,r.jsx)(t.strong,{children:"Enable CSRF toggle"})," > ",(0,r.jsx)(t.strong,{children:"Save changes"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1059",src:s(82634).A+"",width:"1816",height:"964"})}),"\n",(0,r.jsx)(t.p,{children:"By configuring above CSRF settings client can protect their sites from CSRF attack."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,s)=>{var n=s(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var n,o={},a=null,d=null;for(n in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:a,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},74848:(e,t,s)=>{e.exports=s(21020)},14547:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/csrf_kb_1059_2-3d3394f128fc0ed24319ce5b428a3901.png"},82634:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/csrf_kb_1059_3-65869ed7fdc9a29a8e6a225f28f38b7d.png"},37383:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/overview_kb_1059_1-b66b77acbb01e13a8777400c8be88de8.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);