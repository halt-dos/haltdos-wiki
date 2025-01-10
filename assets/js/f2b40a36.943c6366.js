/*! For license information please see f2b40a36.943c6366.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10899],{27881:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"cloud/waf/listener/security-profile/rules/response","title":"Response Filtering","description":"These rules filter responses from applications and prevent sensitive data leaks","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/security-profile/rules/response.md","sourceDirName":"cloud/waf/listener/security-profile/rules","slug":"/cloud/waf/listener/security-profile/rules/response","permalink":"/v6/cloud/waf/listener/security-profile/rules/response","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"cloud_sidebar","previous":{"title":"Whitelist Rules","permalink":"/v6/cloud/waf/listener/security-profile/rules/whitelist"},"next":{"title":"Correlation Rules","permalink":"/v6/cloud/waf/listener/security-profile/rules/correlation"}}');var t=s(74848),i=s(28453);const l={sidebar_position:5},o="Response Filtering",c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function h(e){const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"response-filtering",children:"Response Filtering"})}),"\n",(0,t.jsx)(r.p,{children:"These rules filter responses from applications and prevent sensitive data leaks"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from backend application servers for HTTP requests on matching specified URL patterns."}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Follow the links: ",(0,t.jsx)(r.strong,{children:"WAF > Zones > Listener > Security Profiles > Rules > Response Filtering"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click on ",(0,t.jsx)(r.strong,{children:"Add Rule"})," and set relevant parameters described in the table below."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click on ",(0,t.jsx)(r.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"PARAMETERS"}),(0,t.jsx)(r.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(r.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Rule Name"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Rule Message"}),(0,t.jsx)(r.td,{children:"Description for the rule in string format"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Match URI"}),(0,t.jsx)(r.td,{children:"Relative URL path"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Rule Action"}),(0,t.jsx)(r.td,{children:"Choose from the dropdown"}),(0,t.jsx)(r.td,{children:"NO ACTION"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Search For"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Replace with"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"Specify a user-friendly name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Message"})}),"\n",(0,t.jsx)(r.p,{children:"The user can specify a short description of the rule. The description would explain the purpose of the rule."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Match URI"})}),"\n",(0,t.jsx)(r.p,{children:"Specify the URI for which this rule will be applied. Any requests made on this URI triggers this rule and the respective response shall be filtered according to the rule."}),"\n",(0,t.jsx)(r.p,{children:"The URI should be a relative URL and in the format: [/home/(*)]"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,t.jsx)(r.p,{children:"Specify the different actions to be taken by the rule."}),"\n",(0,t.jsx)(r.p,{children:"::: info\r\nReplace : String to be replaced for specific HTTP response\r\nReplace All : String to be replaced for all the HTTP response\r\nEmpty Response : Client will received as empty page in the response.\r\nTemporary Blacklist : Temporarily blacklist the request\r\nSend Challenge : Captcha validation\r\nNo Action : No action will be taken\r\n:::"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Search For"})}),"\n",(0,t.jsx)(r.p,{children:"This specifies the value that will be replaced with the search pattern. In order to use the PCRE regex capture group from the search string, use dollar ($) with positions such as $1, $2."}),"\n",(0,t.jsx)(r.p,{children:"Note: In order to escape the dollar in the field, use the dollar twice consecutively such as $$."})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var n,i={},d=null,h=null;for(n in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(h=r.ref),r)l.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:h,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>o});var n=s(96540);const t={},i=n.createContext(t);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);