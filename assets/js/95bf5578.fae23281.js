/*! For license information please see 95bf5578.fae23281.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[97962],{31717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"kb/waf/kb-1018","title":"KB: 1018","description":"How to change WAF operational mode in between Record, Bypass & Mitigation?","source":"@site/docs/kb/waf/kb-1018.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1018","permalink":"/kb/waf/kb-1018","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"sidebar_position":18},"sidebar":"kb_sidebar","previous":{"title":"KB: 1017","permalink":"/kb/waf/kb-1017"},"next":{"title":"KB: 1019","permalink":"/kb/waf/kb-1019"}}');var r=n(74848),s=n(28453);const i={sidebar_position:18},a="KB: 1018",l={},d=[{value:"<strong>How to change WAF operational mode in between Record, Bypass &amp; Mitigation?</strong>",id:"how-to-change-waf-operational-mode-in-between-record-bypass--mitigation",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function c(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1018",children:"KB: 1018"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-change-waf-operational-mode-in-between-record-bypass--mitigation",children:(0,r.jsx)(t.strong,{children:"How to change WAF operational mode in between Record, Bypass & Mitigation?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The User wants to change the profile mode to bypass, record or mitigation."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1018",src:n(56011).A+"",width:"1400",height:"741"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listener"})," > ",(0,r.jsx)(t.strong,{children:"Profiles"})," > ",(0,r.jsx)(t.strong,{children:"click on settings icon"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1018",src:n(15702).A+"",width:"1400",height:"741"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Click on first option operational mode and from the drop-down menu user can change the operational mode for the listener profile."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1018",src:n(22056).A+"",width:"1400",height:"741"})}),"\n",(0,r.jsx)(t.p,{children:"In this way user can select any of the operational mode from the three mode available."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"MITIGATION:"})," In this mode, all the mitigation & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"BYPASSED:"})," In this mode, all the requests get bypassed without any filtration of mitigation & rule sets."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"RECORD:"})," In this mode, all the mitigation & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var o=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,s={},d=null,c=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},22056:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/kb_1018_operational_mitigation-fa1791daebd2beabb43413aa9826276d.png"},15702:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/kb_1018_operational_record-5c07b4c30d0cf0de6edb381bedf81342.png"},56011:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/kb_1018_overview-6299468031baf14ff38b884e9778857e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);