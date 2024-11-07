/*! For license information please see 16350207.4f883f72.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8319],{13022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1058","title":"KB: 1058","description":"Problem Statement","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1058.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1058","permalink":"/v6/kb/waf/kb-1058","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":58,"frontMatter":{"sidebar_position":58},"sidebar":"kb_sidebar","previous":{"title":"KB: 1057","permalink":"/v6/kb/waf/kb-1057"},"next":{"title":"KB: 1059","permalink":"/v6/kb/waf/kb-1059"}}');var r=t(74848),i=t(28453);const o={sidebar_position:58},l="KB: 1058",a={},c=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kb-1058",children:"KB: 1058"})}),"\n",(0,r.jsx)(n.h1,{id:"how-to-prevent-sites-from-xml-bomb-attack",children:"How to prevent sites from XML bomb attack?"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(n.p,{children:"Client wants to protect their sites from XML bomb attack which are protected by Haltdos solutions."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SOLUTION"})}),"\n",(0,r.jsx)(n.p,{children:"The client can achieve the above requirement by configuring XML policies."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"First, log into the haltdos management console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-1058",src:t(68681).A+"",width:"1809",height:"870"})}),"\n",(0,r.jsxs)(n.p,{children:["2.Go to ",(0,r.jsx)(n.strong,{children:"Stacks"})," > ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Listener"})," > ",(0,r.jsx)(n.strong,{children:"Profile"})," > ",(0,r.jsx)(n.strong,{children:"Profile default setting"})," > ",(0,r.jsx)(n.strong,{children:"Policy"})," > **XML Policy ** > ",(0,r.jsx)(n.strong,{children:"Configure the XML Policy"})," > ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-1058",src:t(538).A+"",width:"1843",height:"873"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Now send bulk XML to the respective listener."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Below WAF incident is showing dropped request when bulk XML payload hit the listener."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-1058",src:t(6644).A+"",width:"1129",height:"517"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-1058",src:t(11960).A+"",width:"1519",height:"768"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},68681:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},538:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/xml-c1bd59b9713350961cff93f5b0a17180.png"},11960:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/xmlincident-e58827896af8cb57ab0ba05b883739bd.png"},6644:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/xmlreport-7d1998a0a317d9572758022aa796856c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);