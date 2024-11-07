/*! For license information please see 6f436f7c.a184b711.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44570],{72663:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"kb/adc/kb-2004","title":"KB: 2004","description":"How to mask application exceptions and errors with custom pages?","source":"@site/versioned_docs/version-7.0/kb/adc/kb-2004.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2004","permalink":"/v7/kb/adc/kb-2004","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2003","permalink":"/v7/kb/adc/kb-2003"},"next":{"title":"KB: 2005","permalink":"/v7/kb/adc/kb-2005"}}');var r=n(74848),o=n(28453);const i={},c="KB: 2004",a={},d=[{value:"<strong>How to mask application exceptions and errors with custom pages?</strong>",id:"how-to-mask-application-exceptions-and-errors-with-custom-pages",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function l(e){const s={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"kb-2004",children:"KB: 2004"})}),"\n",(0,r.jsx)(s.h3,{id:"how-to-mask-application-exceptions-and-errors-with-custom-pages",children:(0,r.jsx)(s.strong,{children:"How to mask application exceptions and errors with custom pages?"})}),"\n",(0,r.jsx)(s.h4,{id:"problem-statement",children:(0,r.jsx)(s.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(s.p,{children:"The client wants to mask application exceptions and errors with custom pages.."}),"\n",(0,r.jsx)(s.p,{children:'We have configured domain "diwakar.slb.com" on SLB and configured back-end server behind the SLB which is having the IP 139.0.0.5. when user tried to open the website is opening fine and all traffic is moving through SLB. User wants set the error pages on specific HTTP status code.'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(23197).A+"",width:"1913",height:"950"})}),"\n",(0,r.jsx)(s.h4,{id:"solution",children:(0,r.jsx)(s.strong,{children:"Solution"})}),"\n",(0,r.jsx)(s.p,{children:"The client can achieve the requirement by creating the error rule as mentioned below"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(69860).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.strong,{children:"Resourses"})," > ",(0,r.jsx)(s.strong,{children:"Web Pages"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(60804).A+"",width:"1824",height:"995"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:'Click on the "Add Page" option, write content that to be shown on the page and click on save changes.'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(9619).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsx)(s.li,{children:"Now go under added listener, select error rule from the rules drop-down menus"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"(Apps>SLB>Listeners>Rules>Error rule>Add Rule)"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(54748).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsx)(s.li,{children:"Configure the rule as per the client requirement for HTTP response code and select the error page required."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(693).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsxs)(s.ol,{start:"6",children:["\n",(0,r.jsx)(s.li,{children:"Click on save changes"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"In this way, users can configure the error rule."}),"\n",(0,r.jsxs)(s.ol,{start:"7",children:["\n",(0,r.jsx)(s.li,{children:"Below is the sample error page shown for 404 HTTP status code."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(14942).A+"",width:"1824",height:"952"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(86889).A+"",width:"1824",height:"952"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},21020:(e,s,n)=>{var t=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,o={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,t)&&!a.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:c.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},74848:(e,s,n)=>{e.exports=n(21020)},23197:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc5.1-6b1532001c25e41d48dd955fdc25b18b.png"},60804:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/browser_kb_2004_2-1a66a7bffaa1384d5099dcf9cb9cc69c.png"},86889:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/browser_kb_2004_7-2cfd620da8493400f7366120c79abb2b.png"},693:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/error_kb_2004_5-f1f94855e5ee81281af094beecc45d6f.png"},14942:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/error_kb_2004_6-b762e69d9d7cc6943a448cf5b8a5748b.png"},69860:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/overview_kb_2004_1-235dcc07fe1668182be616f50b2d5b5e.png"},9619:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/web_kb_2004_3-eb646e039b671df49f96131d1d53c63e.png"},54748:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/web_kb_2004_4-c0b49de5ec695b1d59d2a72c8ea955ed.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);