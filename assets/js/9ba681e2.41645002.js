/*! For license information please see 9ba681e2.41645002.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[52311],{47528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"kb/waf/kb-1067","title":"KB: 1067","description":"How to configure IP transparency through Haltdos Solution?","source":"@site/versioned_docs/version-7.0/kb/waf/kb-1067.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1067","permalink":"/v7/kb/waf/kb-1067","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":67,"frontMatter":{"sidebar_position":67},"sidebar":"kb_sidebar","previous":{"title":"KB: 1066","permalink":"/v7/kb/waf/kb-1066"},"next":{"title":"KB: 1068","permalink":"/v7/kb/waf/kb-1068"}}');var s=n(74848),o=n(28453);const i={sidebar_position:67},a="KB: 1067",l={},c=[{value:"<strong>How to configure IP transparency through Haltdos Solution?</strong>",id:"how-to-configure-ip-transparency-through-haltdos-solution",level:4},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}];function d(e){const t={h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kb-1067",children:"KB: 1067"})}),"\n",(0,s.jsx)(t.h4,{id:"how-to-configure-ip-transparency-through-haltdos-solution",children:(0,s.jsx)(t.strong,{children:"How to configure IP transparency through Haltdos Solution?"})}),"\n",(0,s.jsx)(t.h4,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsx)(t.p,{children:"Client wants to conceal the presence of the reverse proxy so that the origin server observes that the IP packets originate from the client\u2019s IP address."}),"\n",(0,s.jsx)(t.h4,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(t.p,{children:"The client can achieve the above requirement by utilizing the NTP integration under Haltdos WAF."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"First, log into the haltdos management console."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ip transperancy",src:n(79118).A+"",width:"1809",height:"870"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.strong,{children:"Stacks"})," > ",(0,s.jsx)(t.strong,{children:"WAF"})," > ",(0,s.jsx)(t.strong,{children:"Listener"})," > ",(0,s.jsx)(t.strong,{children:"Settings"})," > ",(0,s.jsx)(t.strong,{children:"Operational Settings"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ip transperancy",src:n(67269).A+"",width:"1814",height:"958"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Under operational settings client needs to specify IP Transparency under operational mode field. Configure the setting and click on save changes."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ip transperancy",src:n(37852).A+"",width:"1846",height:"952"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},79118:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ip1-ef27260554c01615e596a8f4a18f8419.png"},67269:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ip2-c3d3a81a7f864122cac8cdea220eda33.png"},37852:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ip3-07ce93f095cfbd10742640df86ce46fb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);