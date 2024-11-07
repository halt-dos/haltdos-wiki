/*! For license information please see aac15f0b.62e084eb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26866],{371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/platform/kb-3004","title":"KB: 3003","description":"How to configure DNS server IP on an Interface using Haltdos web Console?","source":"@site/versioned_docs/version-7.0/kb/platform/kb-3004.md","sourceDirName":"kb/platform","slug":"/kb/platform/kb-3004","permalink":"/v7/kb/platform/kb-3004","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"kb_sidebar","previous":{"title":"KB: 3002","permalink":"/v7/kb/platform/kb-3003"},"next":{"title":"KB: 3004","permalink":"/v7/kb/platform/kb-3005"}}');var o=t(74848),r=t(28453);const i={sidebar_position:3},a="KB: 3003",l={},c=[{value:"How to configure DNS server IP on an Interface using Haltdos web Console?",id:"how-to-configure-dns-server-ip-on-an-interface-using-haltdos-web-console",level:3},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kb-3003",children:"KB: 3003"})}),"\n",(0,o.jsx)(n.h3,{id:"how-to-configure-dns-server-ip-on-an-interface-using-haltdos-web-console",children:"How to configure DNS server IP on an Interface using Haltdos web Console?"}),"\n",(0,o.jsx)(n.h4,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsx)(n.p,{children:"Client wants to set Domain Name Server (DNS) IP that all the domain related queries can be solved. Users are allowed to set DNS server IP for port basis, i.e. if they wanted to add multiple DNS IP on single port they can add it using following steps."}),"\n",(0,o.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.p,{children:"The client can achieve the above requirement by configuring a DNS IP under Haltdos WAF."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"First, log into the haltdos management console."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"dns",src:t(28892).A+"",width:"1856",height:"1011"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Now go instances under the respective Stack."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"dns",src:t(33757).A+"",width:"1843",height:"442"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.strong,{children:"Stacks"})," > ",(0,o.jsx)(n.strong,{children:"Instances"})," > ",(0,o.jsx)(n.strong,{children:"Network"}),"> ",(0,o.jsx)(n.strong,{children:"Ethernet"})," > ",(0,o.jsx)(n.strong,{children:"Interface"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"dns",src:t(12628).A+"",width:"1423",height:"740"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Configure the settings and click on save changes and click on Deploy Configuration button."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"dns",src:t(4619).A+"",width:"1441",height:"732"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},33757:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dns2-53da253d424771550b169d10a55abc68.png"},12628:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dns3-a16c116961b8337a984ed0f1c60e0bfe.png"},4619:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/dns4-2785dadd0ce72088a0fae72ea45bc543.png"},28892:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kb8-2509711c674e06d8ec797ebdd0720a01.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);