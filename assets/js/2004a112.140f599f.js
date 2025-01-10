/*! For license information please see 2004a112.140f599f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[88438],{44507:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"kb/waf/kb-1051","title":"KB: 1051","description":"How to make form rule to offers a positive security model for Application Firewall?","source":"@site/versioned_docs/version-7.0/kb/waf/kb-1051.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1051","permalink":"/v7/kb/waf/kb-1051","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":51,"frontMatter":{"sidebar_position":51},"sidebar":"kb_sidebar","previous":{"title":"KB: 1050","permalink":"/v7/kb/waf/kb-1050"},"next":{"title":"KB: 1052","permalink":"/v7/kb/waf/kb-1052"}}');var r=o(74848),s=o(28453);const i={sidebar_position:51},l="KB: 1051",a={},c=[{value:"<strong>How to make form rule to offers a positive security model for Application Firewall?</strong>",id:"how-to-make-form-rule-to-offers-a-positive-security-model-for-application-firewall",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb-1051",children:"KB: 1051"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-make-form-rule-to-offers-a-positive-security-model-for-application-firewall",children:(0,r.jsx)(t.strong,{children:"How to make form rule to offers a positive security model for Application Firewall?"})}),"\n",(0,r.jsx)(t.h4,{id:"problem-statement",children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"Client want to Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form."}),"\n",(0,r.jsx)(t.h4,{id:"solution",children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,r.jsx)(t.p,{children:"The user can make use of Haltdos WAF form rule features."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1051",src:o(40927).A+"",width:"1810",height:"966"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listener"})," > ",(0,r.jsx)(t.strong,{children:"Profile"})," > ",(0,r.jsx)(t.strong,{children:"Profile default setting"})," > ",(0,r.jsx)(t.strong,{children:"Profile Rule"})," > ",(0,r.jsx)(t.strong,{children:"Form Rule"})," > ",(0,r.jsx)(t.strong,{children:"Add Rule"})," > ",(0,r.jsx)(t.strong,{children:"Save changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1051",src:o(44656).A+"",width:"1794",height:"954"})}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsx)(t.li,{children:"Open the listener in the browser."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1051",src:o(71546).A+"",width:"1833",height:"984"})}),"\n",(0,r.jsx)(t.p,{children:"As we can see that from above picture the request has been blocked because we specify values or a range of values for various form fields of a web application form also we have to check the incidents to know about the detailed information of blocked request."}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Apps"})," > ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Incidents"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1051",src:o(73304).A+"",width:"1794",height:"954"})}),"\n",(0,r.jsx)(t.p,{children:"As we can see that from above picture the content size is 145 and in form rule we configure the rule details by following values"}),"\n",(0,r.jsx)(t.p,{children:"Request validation = Maximum  Body Length"}),"\n",(0,r.jsx)(t.p,{children:"Value = 2 , but here we set the maximum content size by 2 that is the reason the request gets blocked. In this way we can achieve form rule."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,o)=>{var n=o(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,s={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,o)=>{e.exports=o(21020)},71546:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/browser_kb_1051_3-4aaf3776ee374b23f9aec7b1323aeddb.png"},44656:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/form_rule_kb_1051_2-f7a7930ad267f139bfa1c715695a4689.png"},73304:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/incidents_kb_1051_4-820c58fdb97be01b5e7ff9a6175aa856.png"},40927:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/overview_kb_1051_1-b66b77acbb01e13a8777400c8be88de8.png"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);