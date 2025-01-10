/*! For license information please see a25d53a0.ae6cf8a4.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26110],{91382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1020","title":"KB: 1020","description":"Problem Statement","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1020.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1020","permalink":"/v6/kb/waf/kb-1020","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"kb_sidebar","previous":{"title":"KB: 1019","permalink":"/v6/kb/waf/kb-1019"},"next":{"title":"KB: 1021","permalink":"/v6/kb/waf/kb-1021"}}');var r=n(74848),i=n(28453);const o={sidebar_position:20},a="KB: 1020",l={},c=[];function d(e){const t={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1020",children:"KB: 1020"})}),"\n",(0,r.jsx)(t.h1,{id:"how-to-add-custom-listener-ports-post-creating-the-listener",children:"How to add custom listener ports post creating the listener?"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to add multiple listener ports on which Haltdos WAF should start listening. Users are allowed to add the listener port at the time of creation of listener. After creating a listener you  can still customize the listening ports."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsx)(t.p,{children:"1.First log into the Haltdos management portal."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1020",src:n(68681).A+"",width:"1809",height:"870"})}),"\n",(0,r.jsxs)(t.p,{children:["2.Go to ",(0,r.jsx)(t.strong,{children:"stack"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"listener"})," > ",(0,r.jsx)(t.strong,{children:"listener settings"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1020",src:n(79396).A+"",width:"1895",height:"854"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"By scrolling down on listener settings we can see the add port option, by clicking on which we                      can add custom listening port for our web application."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1020",src:n(34227).A+"",width:"1880",height:"852"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1020",src:n(59296).A+"",width:"555",height:"440"})}),"\n",(0,r.jsx)(t.p,{children:"4.After adding the port click on save changes."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1020",src:n(41745).A+"",width:"1874",height:"848"})}),"\n",(0,r.jsx)(t.p,{children:"In this way the user can add multiple custom listener ports."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},79396:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/enable-d4dc41d8ab1456290dbac33d28d06ef4.png"},34227:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/enablee-e4b36d950baf845d7ce976e06c71f77b.png"},68681:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},59296:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/qwe-388dbb330429e1142f52860952ba1a70.png"},41745:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/set-1d3084f82c70108ea0fd2e71a0dc7089.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);