/*! For license information please see 06c1b98d.61387bdb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[22526],{65851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"kb/gslb/kb-4001","title":"KB: 4001","description":"How to configure listener and its DNS service type through Haltdos GSLB Solution?","source":"@site/docs/kb/gslb/kb-4001.md","sourceDirName":"kb/gslb","slug":"/kb/gslb/kb-4001","permalink":"/kb/gslb/kb-4001","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"Global Server Load Balancing","permalink":"/kb/gslb/"},"next":{"title":"KB: 4002","permalink":"/kb/gslb/kb-4002"}}');var r=t(74848),i=t(28453);const o={},l="KB: 4001",c={},d=[{value:"<strong>How to configure listener and its DNS service type through Haltdos GSLB Solution?</strong>",id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function a(e){const n={br:"br",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kb-4001",children:"KB: 4001"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution",children:(0,r.jsx)(n.strong,{children:"How to configure listener and its DNS service type through Haltdos GSLB Solution?"})}),"\n",(0,r.jsx)(n.h4,{id:"problem-statement",children:(0,r.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(n.p,{children:"GSLB is running on a server with certain IP. Client wants to create a listener which can work as recursive DNS , authoritative DNS or Both."}),"\n",(0,r.jsx)(n.h4,{id:"solution",children:(0,r.jsx)(n.strong,{children:"Solution"})}),"\n",(0,r.jsx)(n.p,{children:"The client can achieve the above requirement by utilising the Listener settings under Haltdos GSLB."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-4001",src:t(70045).A+"",width:"1405",height:"748"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Now go to ",(0,r.jsx)(n.strong,{children:"Apps"})," > ",(0,r.jsx)(n.strong,{children:"GSLB"})," > Listener page will appear > Click on ",(0,r.jsx)(n.strong,{children:"Add Listener"})," > Type the listener Name > Click on ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on the ",(0,r.jsx)(n.strong,{children:"Listener"})," > ",(0,r.jsx)(n.strong,{children:"Setting"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-4001",src:t(30994).A+"",width:"1449",height:"681"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Type the ",(0,r.jsx)(n.strong,{children:"IP address"})," of the listener under ",(0,r.jsx)(n.strong,{children:"Addresses"})," > Press Enter."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kb-4001",src:t(70717).A+"",width:"1405",height:"748"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"DNS Service Type"})," from drop down i.e. ",(0,r.jsx)(n.strong,{children:"Recursive DNS"}),", ",(0,r.jsx)(n.strong,{children:"Authoritative DNS"})," or ",(0,r.jsx)(n.strong,{children:"Both"})," > Click on ",(0,r.jsx)(n.strong,{children:"Save Changes"}),".",(0,r.jsx)(n.br,{}),"\n","\u200b",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.img,{alt:"kb-4001",src:t(76765).A+"",width:"1405",height:"748"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,i={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},30994:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kb_4001_blank_listener-122cc4d4bfcfbd3d99ecd21244b3206c.png"},70717:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kb_4003_listener-41eee9175ebf33fb1e4fddb78b3df8bc.png"},76765:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kb_4003_setting-26cbd343c00ec352548b64f05d29ebf2.png"},70045:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/kb_4004_overview-705126122d1d8406e7c838768ee81344.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);