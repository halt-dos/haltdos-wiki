/*! For license information please see fbb6a2b6.8010e311.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[6502],{56647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1031","title":"KB: 1031","description":"-----------","source":"@site/docs/kb/waf/kb-1031.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1031","permalink":"/kb/waf/kb-1031","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":31,"frontMatter":{"sidebar_position":31},"sidebar":"kb_sidebar","previous":{"title":"KB: 1030","permalink":"/kb/waf/kb-1030"},"next":{"title":"KB: 1032","permalink":"/kb/waf/kb-1032"}}');var r=n(74848),i=n(28453);const o={sidebar_position:31},l="KB: 1031",a={},c=[{value:"<strong>How to whitelist any IP or IP segment for a listener?</strong>",id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1031",children:"KB: 1031"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener",children:(0,r.jsx)(t.strong,{children:"How to whitelist any IP or IP segment for a listener?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The user wants to whitelist any particular IP address which is getting blocked by some rules or policy."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsx)(t.p,{children:"The user can use the geo whitelisting option to whitelist any IP address or IP  addresses for a listener only."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listeners"})," > click on listener name > ",(0,r.jsx)(t.strong,{children:"Profile"})," > click on setting icon on profile > ",(0,r.jsx)(t.strong,{children:"Geo Filtering"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1031",src:n(50162).A+"",width:"1805",height:"962"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:'User can see the option named "WhiteListed IP Prefixes". by using this option user can add IPs which need to be whitelisted. after mentioning the IPs click on save changes.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1031",src:n(1326).A+"",width:"1805",height:"962"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},1326:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/geo_kb_1031_2-20337e6de368cc861aeeed45c8ab74ee.png"},50162:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/setting_kb_1031_1-f666a689df167c6ec0d2f65537a61420.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);