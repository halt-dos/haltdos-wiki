/*! For license information please see ad81ab34.30057f1e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[80945],{80927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"cloud/waf/tools/match_finder","title":"Match Finder","description":"Overview","source":"@site/docs/cloud/waf/tools/match_finder.md","sourceDirName":"cloud/waf/tools","slug":"/cloud/waf/tools/match_finder","permalink":"/cloud/waf/tools/match_finder","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"cloud_sidebar","previous":{"title":"False Positive Finder","permalink":"/cloud/waf/tools/fp_finder"},"next":{"title":"Scan Importer","permalink":"/cloud/waf/tools/scan_importer"}}');var s=n(74848),o=n(28453);const i={sidebar_position:2},l="Match Finder",c={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}];function a(e){const t={br:"br",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"match-finder",children:"Match Finder"})}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"It Identifies, stores all the rules matched by WAF, and generates match finder details for a specific or all listener so that you can identify all matched, rules for the listener by listing the events."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"matchfinder",src:n(25564).A+"",width:"1900",height:"901"})}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.strong,{children:"WAF"})," > ",(0,s.jsx)(t.strong,{children:"Tool"})," > ",(0,s.jsx)(t.strong,{children:"Match Finder"})]}),"\n",(0,s.jsx)(t.li,{children:"Click on the Run Query button on the top right side."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Incident ID"}),(0,s.jsx)(t.br,{}),"\n","It displays the event ID logged for the certain request found to be malicious."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Matched Rule"}),(0,s.jsx)(t.br,{}),"\n","It displays all matched rule id for the query."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"URI"}),(0,s.jsx)(t.br,{}),"\n","It displays the matching URI for the current event."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Zone"}),(0,s.jsx)(t.br,{}),"\n","It displays the zone/sub-domain name that belongs to it."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Payload"}),(0,s.jsx)(t.br,{}),"\n","It displays the payload matched for the current event."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Action"}),(0,s.jsx)(t.br,{}),"\n","It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button.\r\nWe can further download all events matched based on the filter from the event page."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},25564:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mFinder2-88391038595b483ce523e35178f991b9.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);