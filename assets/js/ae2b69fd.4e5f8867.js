/*! For license information please see ae2b69fd.4e5f8867.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[20080],{71579:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"kb/gslb/kb-4002","title":"kb-4002","description":"How to Configure Blacklist and Whitelist IP addresses through Haltdos GSLB Solution?","source":"@site/versioned_docs/version-6.0/kb/gslb/kb-4002.md","sourceDirName":"kb/gslb","slug":"/kb/gslb/kb-4002","permalink":"/v6/kb/gslb/kb-4002","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"kb-4001","permalink":"/v6/kb/gslb/kb-4001"},"next":{"title":"kb-4003","permalink":"/v6/kb/gslb/kb-4003"}}');var o=s(74848),r=s(28453);const i={},l=void 0,a={},d=[{value:"<strong>How to Configure Blacklist and Whitelist IP addresses through Haltdos GSLB Solution</strong>?",id:"how-to-configure-blacklist-and-whitelist-ip-addresses-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function c(e){const t={h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h3,{id:"how-to-configure-blacklist-and-whitelist-ip-addresses-through-haltdos-gslb-solution",children:[(0,o.jsx)(t.strong,{children:"How to Configure Blacklist and Whitelist IP addresses through Haltdos GSLB Solution"}),"?"]}),"\n",(0,o.jsx)(t.h4,{id:"problem-statement",children:(0,o.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,o.jsx)(t.p,{children:"Client wants Configure Blacklist and Whitelist IP addresses through haltdos Solution to restricts the requests coming from specified IP Prefixes permanently."}),"\n",(0,o.jsx)(t.h4,{id:"solution",children:(0,o.jsx)(t.strong,{children:"Solution"})}),"\n",(0,o.jsx)(t.p,{children:"The client can achieve the above requirement by utilising the Geo Filtering under Haltdos GSLB."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"First, log into the haltdos management console."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(29418).A+"",width:"1843",height:"657"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Click on GSLB > Select a Listener > Click on Geo Filtering ."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(60001).A+"",width:"1815",height:"605"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Type the IP addresses you want to block from accessing your DNS Server > Click Enter > Click Save Changes"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(38872).A+"",width:"1815",height:"510"})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Type the IP addresses you want to allow from accessing your DNS Server > Click Enter > Click Save Changes"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(87863).A+"",width:"1829",height:"502"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},21020:(e,t,s)=>{var n=s(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,r={},d=null,c=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},29418:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gslb2.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},60001:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gslb2.2-2e29bc9dd1319350bb6bf7218ef62c94.png"},38872:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gslb2.3-b760d9320515613ed1032d455be99748.png"},87863:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gslb2.4-236d7db5393899f759d12b71462a9ded.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);