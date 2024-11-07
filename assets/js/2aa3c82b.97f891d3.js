/*! For license information please see 2aa3c82b.97f891d3.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[21693],{5305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"kb/adc/kb-2014","title":"KB: 2014","description":"How to enable IPv6 support in listener?","source":"@site/docs/kb/adc/kb-2014.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2014","permalink":"/kb/adc/kb-2014","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2013","permalink":"/kb/adc/kb-2013"},"next":{"title":"KB: 2015","permalink":"/kb/adc/kb-2015"}}');var r=t(74848),i=t(28453);const o={},l="KB: 2014",c={},a=[{value:"<strong>How to enable IPv6 support in listener?</strong>",id:"how-to-enable-ipv6-support-in-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kb-2014",children:"KB: 2014"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-enable-ipv6-support-in-listener",children:(0,r.jsx)(n.strong,{children:"How to enable IPv6 support in listener?"})}),"\n",(0,r.jsx)(n.h4,{id:"problem-statement",children:(0,r.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(n.p,{children:"The client requires IPv6 to be enabled on the listener level."}),"\n",(0,r.jsx)(n.h4,{id:"solution",children:(0,r.jsx)(n.strong,{children:"Solution"})}),"\n",(0,r.jsx)(n.p,{children:"The above requirement can be achieved by enabling IPv6 option under listener in Haltdos SLB."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(75011).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Apps"})," > ",(0,r.jsx)(n.strong,{children:"SLB"})," > ",(0,r.jsx)(n.strong,{children:"listener name"})," > ",(0,r.jsx)(n.strong,{children:"listener settings"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(65122).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Enable IPv6 option."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(86251).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"User Icon"})," > ",(0,r.jsx)(n.strong,{children:"System"})," > ",(0,r.jsx)(n.strong,{children:"Instance"})," > ",(0,r.jsx)(n.strong,{children:"Click on Instance name"})," > ",(0,r.jsx)(n.strong,{children:"Network"})," > ",(0,r.jsx)(n.strong,{children:"Ethernet"}),". Select the active interface and enable IPv6 address option and configure the settings."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(63136).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this way client can enable IPv6 support in their listener. Client will add static/dynamic IPv6 address to listen."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var s,i={},a=null,d=null;for(s in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},63136:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/incidents_kb_2014_4-eee4b6d1cc54fae1f6aa96261cc4f0b8.png"},75011:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/overview_kb_2014_1-235dcc07fe1668182be616f50b2d5b5e.png"},65122:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings_kb_2014_2-eadd347f2bea2bd9c9e4250d2537aa56.png"},86251:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings_kb_2014_3-58e4ac4ecf3b11b782051f4859d72775.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);