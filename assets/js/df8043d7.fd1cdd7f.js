/*! For license information please see df8043d7.fd1cdd7f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[19894],{82701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"kb/waf/kb-1042","title":"KB: 1042","description":"-----------","source":"@site/docs/kb/waf/kb-1042.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1042","permalink":"/kb/waf/kb-1042","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":42,"frontMatter":{"sidebar_position":42},"sidebar":"kb_sidebar","previous":{"title":"KB: 1041","permalink":"/kb/waf/kb-1041"},"next":{"title":"KB: 1043","permalink":"/kb/waf/kb-1043"}}');var r=n(74848),o=n(28453);const i={sidebar_position:42},a="KB: 1042",d={},l=[{value:"<strong>How do user set maximum HTTP body and header size?</strong>",id:"how-do-user-set-maximum-http-body-and-header-size",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function c(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1042",children:"KB: 1042"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"how-do-user-set-maximum-http-body-and-header-size",children:(0,r.jsx)(t.strong,{children:"How do user set maximum HTTP body and header size?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to set the size limit for the HTTP request. So that he can limit the body and header size of a HTTP header."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1042",src:n(55115).A+"",width:"1810",height:"966"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"listener"})," > ",(0,r.jsx)(t.strong,{children:"settings"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1042",src:n(18242).A+"",width:"1805",height:"962"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:'User can set the the maximum body value under "Maximum HTTP Body Size" option and max header size under "Maximum HTTP Header Size" option.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1042",src:n(81899).A+"",width:"1805",height:"962"})}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsx)(t.li,{children:"After doing the configuration, click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In this way, users can limit the HTTP body and header size for a listener."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!d.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},55115:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/overview_kb_1042_1-b66b77acbb01e13a8777400c8be88de8.png"},18242:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_1042_2-eb96ba4f24d3f34155587c5b66349547.png"},81899:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings_kb_1042_3-8adbf5e0145bdaab95cc06bdd4fdebfc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);