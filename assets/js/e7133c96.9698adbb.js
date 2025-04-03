/*! For license information please see e7133c96.9698adbb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[5824],{78160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"kb/platform/kb-3002","title":"KB: 3002","description":"How to configure sync?","source":"@site/docs/kb/platform/kb-3002.md","sourceDirName":"kb/platform","slug":"/kb/platform/kb-3002","permalink":"/kb/platform/kb-3002","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"kb_sidebar","previous":{"title":"KB: 3001","permalink":"/kb/platform/kb-3001"},"next":{"title":"KB: 3003","permalink":"/kb/platform/kb-3003"}}');var s=t(74848),r=t(28453);const i={sidebar_position:2},c="KB: 3002",a={},l=[{value:"How to configure sync?",id:"how-to-configure-sync",level:3},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}];function d(e){const n={admonition:"admonition",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kb-3002",children:"KB: 3002"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-configure-sync",children:"How to configure sync?"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"The user wants to configure config sync from Haltdos console for reflecting configuration changes of one machine to other."}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"First, log into Haltdos Management Console."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sync",src:t(95259).A+"",width:"1893",height:"908"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Stacks"})," > ",(0,s.jsx)(n.strong,{children:"Integration"})," > ",(0,s.jsx)(n.strong,{children:"Config Sync"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sync",src:t(46972).A+"",width:"1425",height:"678"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Client can configure the config sync by entering information(IP, port, auth key) of peer machine."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sync",src:t(66319).A+"",width:"1425",height:"678"})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["Client can generate auth key by going ",(0,s.jsx)(n.strong,{children:"Stacks"})," > ",(0,s.jsx)(n.strong,{children:"Integration"}),"> ",(0,s.jsx)(n.strong,{children:"API Token"})," > ",(0,s.jsx)(n.strong,{children:"Generate API token"}),". API key of first machine needs to be entered in second machine for setting communication between the machines."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"sync",src:t(93954).A+"",width:"1516",height:"873"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var o=t(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,r={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,o)&&!a.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:l,ref:d,props:r,_owner:c.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},93954:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/kb_3002_api_token-f854a2d6b12948933565e5dbc2840f51.png"},46972:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/kb_3002_config_sync-af39e183a705ca012071eff2c10bb8b2.png"},66319:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/kb_3002_config_sync_conf-061c6dfc988cffe188f47803d910b302.png"},95259:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/kb_3002_overview-514fe66074ab76537f1117f91945d036.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);