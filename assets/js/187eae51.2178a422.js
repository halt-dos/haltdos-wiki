/*! For license information please see 187eae51.2178a422.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[71480],{60374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"kb/adc/kb-2013","title":"KB: 2013","description":"How to add listener ports, post creating the listener?","source":"@site/versioned_docs/version-7.0/kb/adc/kb-2013.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2013","permalink":"/v7/kb/adc/kb-2013","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2012","permalink":"/v7/kb/adc/kb-2012"},"next":{"title":"KB: 2014","permalink":"/v7/kb/adc/kb-2014"}}');var r=n(74848),i=n(28453);const o={},l="KB: 2013",c={},a=[{value:"<strong>How to add listener ports, post creating the listener?</strong>",id:"how-to-add-listener-ports-post-creating-the-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-2013",children:"KB: 2013"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-add-listener-ports-post-creating-the-listener",children:(0,r.jsx)(t.strong,{children:"How to add listener ports, post creating the listener?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The client wants to add multiple listener ports on which Haltdos SLB should start listening. Users are allowed to add the listener port at the time of creation of listener. After creating a listener you can still customize the listening ports."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:["The client can achieve the above requirement by utilizing the ",(0,r.jsx)(t.strong,{children:'"Listener setting"'})," in the SLB."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(87848).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"SLB"})," > ",(0,r.jsx)(t.strong,{children:"listener"})," > ",(0,r.jsx)(t.strong,{children:"listener settings"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(70025).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"By scrolling down on listener settings we can see the add port option, by clicking on which we can add custom listening port for our web application."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(91904).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(43231).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"After adding the port click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(46294).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsx)(t.p,{children:"In this way client can add multiple custom listener ports."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,i={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},87848:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/overview_kb_2013_1-235dcc07fe1668182be616f50b2d5b5e.png"},70025:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_2013_2-4e6fa67877069a73974ab3fcae7d7f98.png"},91904:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_2013_3-554a4f25f4bcaf27f4bb7f55c02d84ea.png"},43231:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_2013_4-fa7b1d0cd92bc210fec67e9bfeb28e62.png"},46294:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_2013_5-331e4c45be9a34b5fe69b01bed074cea.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);