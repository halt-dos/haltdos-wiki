/*! For license information please see 28455e56.6ea023aa.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[85947],{86864:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"kb/gslb/kb-4005","title":"KB: 4005","description":"How to configure load balancing for DNS Records?","source":"@site/docs/kb/gslb/kb-4005.md","sourceDirName":"kb/gslb","slug":"/kb/gslb/kb-4005","permalink":"/kb/gslb/kb-4005","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 4004","permalink":"/kb/gslb/kb-4004"},"next":{"title":"KB: 4006","permalink":"/kb/gslb/kb-4006"}}');var t=r(74848),s=r(28453);const i={},l="KB: 4005",c={},a=[{value:"<strong>How to configure load balancing for DNS Records?</strong>",id:"how-to-configure-load-balancing-for-dns-records",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"kb-4005",children:"KB: 4005"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-configure-load-balancing-for-dns-records",children:(0,t.jsx)(n.strong,{children:"How to configure load balancing for DNS Records?"})}),"\n",(0,t.jsx)(n.h4,{id:"problem-statement",children:(0,t.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,t.jsx)(n.p,{children:"Client want to balance load or traffic on certain IP for a particular Zone.\r\n\u200b"}),"\n",(0,t.jsx)(n.h4,{id:"solution",children:(0,t.jsx)(n.strong,{children:"Solution"})}),"\n",(0,t.jsxs)(n.p,{children:["The client can achieve the above requirement by utilising the ",(0,t.jsx)(n.strong,{children:"Load Balancing Algorithm"})," under Haltdos GSLB.\r\n\u200b"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kb-4005",src:r(72861).A+"",width:"1831",height:"945"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Now go to ",(0,t.jsx)(n.strong,{children:"Apps"})," > ",(0,t.jsx)(n.strong,{children:"GSLB"})," > ",(0,t.jsx)(n.strong,{children:"Go to Listener"})," > ",(0,t.jsx)(n.strong,{children:"Zones"})," > ",(0,t.jsx)(n.strong,{children:"Configure a Zone"})," > ",(0,t.jsx)(n.strong,{children:"Click on Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kb-4005",src:r(85621).A+"",width:"1798",height:"941"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"After creating a Zone User have to create its Record as well."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kb-4005",src:r(73996).A+"",width:"1798",height:"941"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Add Record"})," > ",(0,t.jsx)(n.strong,{children:"Configure Zone Record"})," > ",(0,t.jsx)(n.strong,{children:"Select Load Balancing from Drop Down LB Algorithm&"})," > ",(0,t.jsx)(n.strong,{children:"Click on Save Record"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"kb-4005",src:r(23395).A+"",width:"1798",height:"958"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),':- LB Algorithm can only be applied when Record Type is A or Quad A ("AAAA").']})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var o=r(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var o,s={},a=null,d=null;for(o in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:a,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},72861:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/overview_kb_4005_1-28d57536a9bc52f76916ab89dac8d7f8.png"},85621:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/zone_kb_4005_2-cffc72dff1857a31781e1e10d6be0ddc.png"},73996:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/zone_kb_4005_3-e4d782d08b6846e105bce3ccde586f26.png"},23395:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/zone_kb_4005_4-4fc2a56d536ba7f183a3152b141c9684.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);