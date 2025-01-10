/*! For license information please see 7cdb347d.3b690994.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[80391],{6908:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"troubleshooting/case-9002","title":"Masking Server Error","description":"---","source":"@site/versioned_docs/version-6.0/troubleshooting/case-9002.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/case-9002","permalink":"/v6/troubleshooting/case-9002","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Managing False Positives","permalink":"/v6/troubleshooting/case-9001"},"next":{"title":"Handiling HTTP Errors","permalink":"/v6/troubleshooting/case-9003"}}');var o=t(74848),s=t(28453);const i={},a="Masking Server Error",l={},c=[{value:"Case: 9002",id:"case-9002",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}];function h(e){const r={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"masking-server-error",children:"Masking Server Error"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"case-9002",children:"Case: 9002"}),"\n",(0,o.jsx)(r.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsx)(r.p,{children:"Problem: The client is faced with an error handling issue on the application, that leads to the application displaying the internal server information on the web-page. This is a serious cause of concern for the client as exposure of internal server information may attract attackers and leave the application vulnerable."}),"\n",(0,o.jsx)(r.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Steps to Solve"})}),"\n",(0,o.jsx)(r.p,{children:"Implementing WAF error rules to mask the internal server information while the WAF is performing error handling on the fly."}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.img,{src:t(45639).A+"",width:"943",height:"675"}),"\nThe client can configure the error rules as per his requirements, by setting up an error code along with a custom error page associated to that particular error code."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:t(18883).A+"",width:"717",height:"716"})}),"\n",(0,o.jsx)(r.p,{children:"Here, the WAF has handled the above scenario by displaying the custom error page."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,h=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:h,props:s,_owner:a.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},45639:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/troubleshooting_404_error_rule-b7028ee589957b653cb0814837a9c5e9.png"},18883:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/troubleshooting_404_error_rule_output-30cedca97867564037d9ae7dfb79a223.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);