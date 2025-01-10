/*! For license information please see 644946f9.4202e8e2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[21913],{41553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"troubleshooting/case-9004","title":"Configuring Maintenance Mode","description":"---","source":"@site/docs/troubleshooting/case-9004.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/case-9004","permalink":"/troubleshooting/case-9004","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Handiling HTTP Errors","permalink":"/troubleshooting/case-9003"},"next":{"title":"Managing Internal Gateway Error","permalink":"/troubleshooting/case-9005"}}');var o=t(74848),s=t(28453);const i={},a="Configuring Maintenance Mode",c={},l=[{value:"Case: 9004",id:"case-9004",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuring-maintenance-mode",children:"Configuring Maintenance Mode"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"case-9004",children:"Case: 9004"}),"\n",(0,o.jsx)(n.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsx)(n.p,{children:"The client has to put the website in maintenance mode, and wants to ensure that his/her custom designed page should be displayed."}),"\n",(0,o.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Steps to Solve"})}),"\n",(0,o.jsx)(n.p,{children:"The client can achieve the above scenario by implementing the error rules feature of WAF."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(67194).A+"",width:"957",height:"673"})}),"\n",(0,o.jsx)(n.p,{children:"As you can notice, we have created another error rule for this scenario, here we have a different custom error page and 5xx error code."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(59569).A+"",width:"732",height:"742"})}),"\n",(0,o.jsx)(n.p,{children:"The client can use this feature to mask its 5XX HTTP error code with custom designed error pages, mainly helpful in cases of scheduled maintenance routines."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},59569:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/troubleshooting_502_error_page_output-57ed188d9d9cc18d0622b383c4ee32fd.png"},67194:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/troubleshooting_502_error_rule-8ba85d53a4933e7b229d34ed955c9568.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);