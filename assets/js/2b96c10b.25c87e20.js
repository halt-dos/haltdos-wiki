/*! For license information please see 2b96c10b.25c87e20.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76588],{65527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"cloud/waf/zones/fp_finder","title":"FP Finder","description":"False Positive Finder","source":"@site/versioned_docs/version-6.0/cloud/waf/zones/fp_finder.md","sourceDirName":"cloud/waf/zones","slug":"/cloud/waf/zones/fp_finder","permalink":"/v6/cloud/waf/zones/fp_finder","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"cloud_sidebar","previous":{"title":"User Group","permalink":"/v6/cloud/waf/zones/user_group"},"next":{"title":"Match Finder","permalink":"/v6/cloud/waf/zones/match_finder"}}');var s=n(74848),i=n(28453);const d={sidebar_position:5},o="FP Finder",l={},a=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Description</strong>",id:"description",level:4}];function c(e){const t={h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fp-finder",children:"FP Finder"})}),"\n",(0,s.jsx)(t.p,{children:"False Positive Finder"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:(0,s.jsx)(t.strong,{children:"Overview"})}),"\n",(0,s.jsx)(t.p,{children:"It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"SETTINGS"}),(0,s.jsx)(t.th,{children:"ACCEPTED VALUES"}),(0,s.jsx)(t.th,{children:"DEFAULT"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Matched Rules"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Matched URLs"}),(0,s.jsx)(t.td,{children:"URL"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Matched Payload"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:(0,s.jsx)(t.strong,{children:"Description"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Matched Rules"}),": Displays the rules for which False Positive is generated."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Matched URLs"}),": Displays all matched URLs for the query."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Matched Payload"}),": Displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action."]}),"\n",(0,s.jsx)(t.p,{children:"We can further download all events matched based on the filter from the event page."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);