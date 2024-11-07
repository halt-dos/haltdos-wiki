/*! For license information please see eabdf66f.2e880803.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[81215],{87587:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"kb/adc/kb-2000","title":"KB: 2000","description":"How to mark all server origin cookies as HTTP Only?","source":"@site/versioned_docs/version-7.0/kb/adc/kb-2000.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2000","permalink":"/v7/kb/adc/kb-2000","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"Application Delivery Controller","permalink":"/v7/kb/adc/"},"next":{"title":"KB: 2001","permalink":"/v7/kb/adc/kb-2001"}}');var t=r(74848),o=r(28453);const i={},l="KB: 2000",c={},a=[{value:"<strong>How to mark all server origin cookies as HTTP Only?</strong>",id:"how-to-mark-all-server-origin-cookies-as-http-only",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kb-2000",children:"KB: 2000"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-mark-all-server-origin-cookies-as-http-only",children:(0,t.jsx)(n.strong,{children:"How to mark all server origin cookies as HTTP Only?"})}),"\n",(0,t.jsx)(n.h4,{id:"problem-statement",children:(0,t.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,t.jsx)(n.p,{children:"The client requires to mark all the server origin cookies as HTTP Only"}),"\n",(0,t.jsx)(n.h4,{id:"solution",children:(0,t.jsx)(n.strong,{children:"Solution"})}),"\n",(0,t.jsx)(n.p,{children:"The client can achieve the requirement by creating the header rule as mentioned below"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Apps"})," > ",(0,t.jsx)(n.strong,{children:"SLB"})," > ",(0,t.jsx)(n.strong,{children:"Listener"})," > ",(0,t.jsx)(n.strong,{children:"Rules"})," > ",(0,t.jsx)(n.strong,{children:"Header Rules"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now create header rule by entering the information mentioned below."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Header Name: ",(0,t.jsx)(n.strong,{children:"set-cookie"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pattern: ",(0,t.jsx)(n.strong,{children:"^((?:.(?!\\ [Hh]ttp[Oo]nly))*)$"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Header Value: ",(0,t.jsx)(n.strong,{children:"\\1;\\ HttpOnly"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Action: ",(0,t.jsx)(n.strong,{children:"Overwrite Response Header"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Conditions: ",(0,t.jsx)(n.strong,{children:"NA"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Click on save changes for saving the rule."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Header Rule",src:r(83775).A+"",width:"1836",height:"963"})}),"\n",(0,t.jsx)(n.p,{children:"The above image shows creation of header rule with overwriting the response header."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,o={},a=null,d=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!c.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},83775:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/header_rule_kb_2000_1-3278527c292d33ed299c2507c58fb1ac.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);