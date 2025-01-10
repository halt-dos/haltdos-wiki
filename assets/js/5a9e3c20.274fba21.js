/*! For license information please see 5a9e3c20.274fba21.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[39695],{84286:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/adc/kb-2003","title":"kb-2003","description":"How to mark all server origin cookies as SameSites?","source":"@site/versioned_docs/version-6.0/kb/adc/kb-2003.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2003","permalink":"/v6/kb/adc/kb-2003","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"kb-2002","permalink":"/v6/kb/adc/kb-2002"},"next":{"title":"kb-2004","permalink":"/v6/kb/adc/kb-2004"}}');var t=r(74848),o=r(28453);const i={},l=void 0,a={},c=[{value:"<strong>How to mark all server origin cookies as SameSites</strong>?",id:"how-to-mark-all-server-origin-cookies-as-samesites",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"how-to-mark-all-server-origin-cookies-as-samesites",children:[(0,t.jsx)(n.strong,{children:"How to mark all server origin cookies as SameSites"}),"?"]}),"\n",(0,t.jsx)(n.h4,{id:"problem-statement",children:(0,t.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,t.jsx)(n.p,{children:"The client requires to mark all the server origin cookies as SameSite."}),"\n",(0,t.jsx)(n.h4,{id:"solution",children:(0,t.jsx)(n.strong,{children:"Solution"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Steps to Solve"})}),"\n",(0,t.jsx)(n.p,{children:"The client can achive the requirement by creating the header rule as mentioned below"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login into Haltdos console"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Stack > SLB(APP) > Listner > Rule > Header Rule"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now create header rule by entering the information mentioned below"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Header Name: ",(0,t.jsx)(n.strong,{children:"Set-cookie"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pattern: ",(0,t.jsx)(n.strong,{children:"^((?:.(?!\\ [Ss]ame[Ss]ite))*)$"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Header Value: ",(0,t.jsx)(n.strong,{children:"\\1;\\ SameSite=none"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Action: ",(0,t.jsx)(n.strong,{children:"Overwrite Response Header"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Conditions: ",(0,t.jsx)(n.strong,{children:"NA"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Click on save changes for saving the rule"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"header",src:r(94320).A+"",width:"1186",height:"566"})}),"\n",(0,t.jsx)(n.p,{children:"The above image shows creation of header rule with overwriting the response header."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,o={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},94320:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/adc4.1-713092f47a9839508edeb5a1c915b078.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);