/*! For license information please see 9fed5723.bc9d4b80.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[83104],{49021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"kb/adc/kb-2017","title":"KB: 2017","description":"How to manage maximum concurrent connection?","source":"@site/versioned_docs/version-7.0/kb/adc/kb-2017.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2017","permalink":"/v7/kb/adc/kb-2017","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2016","permalink":"/v7/kb/adc/kb-2016"},"next":{"title":"KB: 2018","permalink":"/v7/kb/adc/kb-2018"}}');var o=t(74848),r=t(28453);const i={},c="KB: 2017",a={},l=[{value:"<strong>How to manage maximum concurrent connection?</strong>",id:"how-to-manage-maximum-concurrent-connection",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kb-2017",children:"KB: 2017"})}),"\n",(0,o.jsx)(n.h3,{id:"how-to-manage-maximum-concurrent-connection",children:(0,o.jsx)(n.strong,{children:"How to manage maximum concurrent connection?"})}),"\n",(0,o.jsx)(n.h4,{id:"problem-statement",children:(0,o.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,o.jsx)(n.p,{children:"The client want to manage maximum concurrent connection on the listener level."}),"\n",(0,o.jsx)(n.h4,{id:"solution",children:(0,o.jsx)(n.strong,{children:"Solution"})}),"\n",(0,o.jsx)(n.p,{children:"The above requirement can be achieved by specifying maximum concurrent connection option under listener in Haltdos SLB."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(61812).A+"",width:"1836",height:"963"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.strong,{children:"Apps"})," > ",(0,o.jsx)(n.strong,{children:"SLB"})," > ",(0,o.jsx)(n.strong,{children:"listener"})," > ",(0,o.jsx)(n.strong,{children:"listener settings"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(96365).A+"",width:"1815",height:"958"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Client has to manage the maximum concurrent connection by using  session cookie,maximum concurrent user sessions and taking appropriate action against the maximum session exceeded action."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(33124).A+"",width:"1809",height:"967"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"In the above picture, we are using a sample configuration to showing the result."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(23138).A+"",width:"1815",height:"936"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"In above steps, we are configuring maximum concurrent user session = 1, which means that user will have one user session if someone tried for another user session then the maximum session is exceeded and the user request will be drooped on the basis of action mentioned(drop) in configuration."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(6599).A+"",width:"1852",height:"697"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,r={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:l,ref:d,props:r,_owner:c.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},6599:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/adc17.5-03f48a31255cf9a1c5913e7546182d77.png"},23138:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/browser_kb_2017_4-58644956f287b4c8b0ef6ab084056f4d.png"},61812:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/overview_kb_2017_1-235dcc07fe1668182be616f50b2d5b5e.png"},96365:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings_kb_2017_2-ba861def7d81bb3c0650a45548ef8897.png"},33124:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/settings_kb_2017_3-dfb7782b3a56e5989ebacb60fdb05c27.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);