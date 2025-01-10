/*! For license information please see c841f7cf.4233fc73.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18029],{26749:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"kb/waf/kb-1015","title":"KB:1015","description":"Problem Statement","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1015.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1015","permalink":"/v6/kb/waf/kb-1015","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"kb_sidebar","previous":{"title":"KB:1014","permalink":"/v6/kb/waf/kb-1014"},"next":{"title":"KB:1016","permalink":"/v6/kb/waf/kb-1016"}}');var s=r(74848),o=r(28453);const i={sidebar_position:15},a="KB:1015",c={},l=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kb1015",children:"KB:1015"})}),"\n",(0,s.jsx)(n.h1,{id:"how-to-configure-custom-html-error-page-received-from-haltdos-web-application-firewall",children:"How to configure custom HTML error page received from Haltdos Web Application Firewall."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,s.jsx)(n.p,{children:"The user wants to customize the error page from Haltdos WAF."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution"})}),"\n",(0,s.jsx)(n.p,{children:"1.Log into the Haltdos console."}),"\n",(0,s.jsx)(n.p,{children:"2.Go to Stack >Content > Web Pages"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1015",src:r(50180).A+"",width:"1916",height:"842"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:'Click on "Add Page" option and write HTML code for error page and save changes.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1015",src:r(50636).A+"",width:"1914",height:"827"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Now go into the listener by clicking on listener name, select error rule under rules drop down menu."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1015",src:r(33525).A+"",width:"1916",height:"843"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Configure the rule as per our requirement and select the error page we have created before."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1015",src:r(59226).A+"",width:"1899",height:"848"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Click on save changes.\r\nIn this way users can configure the error page rule to send custom error page response."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1015",src:r(80803).A+"",width:"1909",height:"889"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},50180:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kb15-47b1d3858d6de07213d03bf75b29eac6.png"},50636:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kb152-cc56e7b0e1b51b94024a48b5f4056f6c.png"},33525:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kb153-e8c1424d3a21c56a5b6d6dbc44ef870d.png"},59226:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kb154-acd5a68fa9f4a90558b5d4704aac1d66.png"},80803:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/kb155-76074c38d6cb9eecfdbcaa536606c23b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);