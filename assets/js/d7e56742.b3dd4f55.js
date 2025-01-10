/*! For license information please see d7e56742.b3dd4f55.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11085],{14037:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"cloud/waf/listener/security-profile/rules/signatures","title":"signatures","description":"These are in-built rules of WAF.","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/security-profile/rules/signatures.md","sourceDirName":"cloud/waf/listener/security-profile/rules","slug":"/cloud/waf/listener/security-profile/rules/signatures","permalink":"/v6/cloud/waf/listener/security-profile/rules/signatures","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"cloud_sidebar","previous":{"title":"Access Log Rules","permalink":"/v6/cloud/waf/listener/security-profile/rules/log"},"next":{"title":"SSL Settings","permalink":"/v6/cloud/waf/listener/ssl-settings"}}');var n=s(74848),i=s(28453);const l={sidebar_position:10},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function h(e){const t={h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"#Signatures"}),"\n",(0,n.jsx)(t.p,{children:"These are in-built rules of WAF."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Follow the links: ",(0,n.jsx)(t.strong,{children:"WAF > Zones > Listeners > Security Profiles > Rules > Signatures"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can change the status of the signature to ",(0,n.jsx)(t.strong,{children:"AUTO, PROD, STAGED, DISABLED"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configurations will be deployed successfully."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"PARAMETERS"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"DEFAULT"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Id"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:"Type of rule"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name"}),(0,n.jsx)(t.td,{children:"Name of the signature"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsx)(t.td,{children:"Choose the status of the signature from the dropdown"}),(0,n.jsx)(t.td,{children:"Auto"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Timestamp"}),(0,n.jsx)(t.td,{children:"Date and Timestamp of the rule when last updated."}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Requests"}),(0,n.jsx)(t.td,{children:"Specifies the count of hits"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match"}),(0,n.jsx)(t.td,{children:"Specifies the count when the rule is matched."}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Action"}),(0,n.jsx)(t.td,{children:"Delete the rule"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Rule Id"}),": Predefined rule id for the signatures. The Id is unique for each rule."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Type"}),": It specifies the type of signature like Firewall, Response, etc."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Name"}),": It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Status"}),": It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Timestamp"}),": It specifies the date time stamp at which the rule has been updated."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Requests"}),": It specifies the number of times request matched with the current rule while learning-enabled with the current security profile."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Match"}),": It specifies the number of requests matched with the current rule in the current security profile."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Action"}),": It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile."]}),"\n",(0,n.jsxs)(t.p,{children:["We can reset learning by clicking the ",(0,n.jsx)(t.strong,{children:"Reset Learning"})," button at the top right of the page."]}),"\n",(0,n.jsxs)(t.p,{children:["We can also update the rule status at once by selecting multiple rules. After clicking on the ",(0,n.jsx)(t.strong,{children:"Update Status"})," button, select desired status to update."]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,t,s)=>{var r=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var r,i={},d=null,h=null;for(r in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:h,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);