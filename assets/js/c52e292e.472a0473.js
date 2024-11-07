/*! For license information please see c52e292e.472a0473.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[34872],{465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"cloud/waf/listener/security-profile/rules/rules","title":"Rules","description":"Configure custom rules for your website","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/security-profile/rules/rules.md","sourceDirName":"cloud/waf/listener/security-profile/rules","slug":"/cloud/waf/listener/security-profile/rules/","permalink":"/v7/cloud/waf/listener/security-profile/rules/","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"cloud_sidebar","previous":{"title":"XML Policy","permalink":"/v7/cloud/waf/listener/security-profile/policy/xml"},"next":{"title":"Form Validation","permalink":"/v7/cloud/waf/listener/security-profile/rules/form"}}');var s=r(74848),n=r(28453);const i={},a="Rules",l={},u=[];function c(e){const t={h1:"h1",header:"header",hr:"hr",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rules",children:"Rules"})}),"\n",(0,s.jsx)(t.p,{children:"Configure custom rules for your website"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many different types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE)."}),"\n",(0,s.jsx)(t.p,{children:"However, there are instances where you might want to write your own rules to augment platform-managed ruleset rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request."}),"\n",(0,s.jsx)(t.p,{children:"Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, \"Condition 1 and Condition 2 or Condition 3\" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used."}),"\n",(0,s.jsx)(t.p,{children:"Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var o=r(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var o,n={},u=null,c=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,o)&&!l.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:s,type:e,key:u,ref:c,props:n,_owner:a.current}}t.Fragment=n,t.jsx=u,t.jsxs=u},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var o=r(96540);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);