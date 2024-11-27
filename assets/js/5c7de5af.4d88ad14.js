/*! For license information please see 5c7de5af.4d88ad14.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[55525],{48057:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/rules","title":"Rules","description":"Configure custom rules for your website","source":"@site/docs/enterprise/waf/listener/profiles/rules/rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/","permalink":"/enterprise/waf/listener/profiles/rules/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"waf_sidebar","previous":{"title":"XML Policy","permalink":"/enterprise/waf/listener/profiles/policy/xml_policy"},"next":{"title":"Error Rules","permalink":"/enterprise/waf/listener/profiles/rules/error_rules"}}');var i=s(74848),t=s(28453);const l={sidebar_position:6},o="Rules",a={},u=[{value:"Configure custom rules for your website",id:"configure-custom-rules-for-your-website",level:3}];function c(e){const r={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"rules",children:"Rules"})}),"\n",(0,i.jsx)(r.h3,{id:"configure-custom-rules-for-your-website",children:"Configure custom rules for your website"}),"\n",(0,i.jsx)(r.p,{children:"Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE).\r\nHowever, there are instances where you might want to write your own rules to augment platform-managed rule set rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request."}),"\n",(0,i.jsx)(r.p,{children:"Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, \"Condition 1 and Condition 2 or Condition 3\" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used."}),"\n",(0,i.jsx)(r.p,{children:"Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases."}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/error_rules",children:(0,i.jsx)(r.strong,{children:"Error Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/form_rules",children:(0,i.jsx)(r.strong,{children:"Form Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/firewall_rules",children:(0,i.jsx)(r.strong,{children:"Firewall Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/ratelimit_rules",children:(0,i.jsx)(r.strong,{children:"Rate Limit Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/whitelist_rules",children:(0,i.jsx)(r.strong,{children:"Whitelist Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/response_rules",children:(0,i.jsx)(r.strong,{children:"Response Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/behavior_rules",children:(0,i.jsx)(r.strong,{children:"Behavior Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/tamper_rules",children:(0,i.jsx)(r.strong,{children:"Tamper Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/correlation_rules",children:(0,i.jsx)(r.strong,{children:"Correlation Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/deception_rules",children:(0,i.jsx)(r.strong,{children:"Deception Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/script_rules",children:(0,i.jsx)(r.strong,{children:"Script Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/log_rules",children:(0,i.jsx)(r.strong,{children:"Log Rules"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/enterprise/waf/listener/profiles/rules/defacementRule",children:(0,i.jsx)(r.strong,{children:"Defacement Rules"})})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21020:(e,r,s)=>{var n=s(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,s){var n,t={},u=null,c=null;for(n in void 0!==s&&(u=""+s),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,n)&&!a.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:i,type:e,key:u,ref:c,props:t,_owner:o.current}}r.Fragment=t,r.jsx=u,r.jsxs=u},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>o});var n=s(96540);const i={},t=n.createContext(i);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);