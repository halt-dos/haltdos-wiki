/*! For license information please see 931fe7ca.684008a9.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[12930],{53622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"kb/waf/kb-1048","title":"KB: 1048","description":"-----------","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1048.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1048","permalink":"/v6/kb/waf/kb-1048","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":48,"frontMatter":{"sidebar_position":48},"sidebar":"kb_sidebar","previous":{"title":"KB: 1047","permalink":"/v6/kb/waf/kb-1047"},"next":{"title":"KB: 1049","permalink":"/v6/kb/waf/kb-1049"}}');var s=n(74848),r=n(28453);const c={sidebar_position:48},a="KB: 1048",o={},l=[];function d(e){const t={h1:"h1",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kb-1048",children:"KB: 1048"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"how-to-add-client-certificates",children:"How to add client certificates?"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,s.jsx)(t.p,{children:"The user wants to add a client certificate."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Solution"})}),"\n",(0,s.jsx)(t.p,{children:"The Certificate Revocation List (CRL) is key to making this security approach work with many users. Without the CRL, should a certificate become compromised you would need to re-issue the Certificate Authority (CA) and any client certificates. With a CRL, however, you can revoke a certificate - allowing sane user management for your back-end application."}),"\n",(0,s.jsx)(t.p,{children:'With the above part, only a valid client certificate will gain you access to the site(s) behind "listen VIP".'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Creating certificates"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"First log into the haltdos management console."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1048",src:n(51676).A+"",width:"1920",height:"527"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Go to stack > WAF > Client Certificate."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1048",src:n(9300).A+"",width:"1911",height:"840"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Click on add certificate button."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1048",src:n(5481).A+"",width:"1920",height:"804"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Configure the certificate, set the scope of certificate and click on save changes."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Go to stack > WAF > listener > SSL settings."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Enable the client certificate under option "Client Certificate Verification" and from next option named as "Client Certificate" where we can select that which certificate should be used with which listener.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1048",src:n(37866).A+"",width:"1884",height:"888"})}),"\n",(0,s.jsx)(t.p,{children:"In this way, we can configure the client certificate for allowing the clients to access the web application only if they have required certificate."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,i)&&!o.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},5481:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/addcerti-c10f7668b028fe846f717ef62837896a.png"},37866:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/certi-2e8c8eca98e6e8a52620a926a1f3bbbc.png"},9300:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/client-c9f0d4103d5047bf62189de354cd3d6e.png"},51676:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);