/*! For license information please see a00a800e.3d346e61.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[42224],{34568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"kb/adc/kb-2022","title":"KB: 2022","description":"How to upload SSL certificate and use them for a web application (listener)?","source":"@site/docs/kb/adc/kb-2022.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2022","permalink":"/kb/adc/kb-2022","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2021","permalink":"/kb/adc/kb-2021"},"next":{"title":"KB: 2023","permalink":"/kb/adc/kb-2023"}}');var r=n(74848),i=n(28453);const o={},a="KB: 2022",c={},l=[{value:"<strong>How to upload SSL certificate and use them for a web application (listener)?</strong>",id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-2022",children:"KB: 2022"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener",children:(0,r.jsx)(t.strong,{children:"How to upload SSL certificate and use them for a web application (listener)?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to upload a SSL certificate and use it to offload SSL traffic."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsx)(t.p,{children:"The early requirement of the process is to have SSL certificate in .pem format."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(45328).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Resources"})," > ",(0,r.jsx)(t.strong,{children:"SSL Certificate"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(74829).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Click on add new certificate and add your public and private key for certificate."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(11588).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(66395).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"SLB"})," > ",(0,r.jsx)(t.strong,{children:"listener"})," > ",(0,r.jsx)(t.strong,{children:"SSL settings and enable the SSL offloading"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(2639).A+"",width:"1811",height:"955"})}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsx)(t.li,{children:"Select SSL certificate from the drop- down menu and click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(81172).A+"",width:"1811",height:"955"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,i={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},45328:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/overview_kb_2022_1-235dcc07fe1668182be616f50b2d5b5e.png"},74829:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_cert_kb_2022_2-5025e6de56aca9f10ff368dfd9e71a20.png"},11588:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_cert_kb_2022_3-e962cc257b7f544b514a66bbaa39a593.png"},66395:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_cert_kb_2022_4-d257bc08ff469dbf68f71d1a4379e3e1.png"},2639:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_settings_kb_2022_5-0d28226b74e3cca8c95a768acf86a816.png"},81172:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_settings_kb_2022_6-ad7789bc5ccd6a17ae1409d593c51b18.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);