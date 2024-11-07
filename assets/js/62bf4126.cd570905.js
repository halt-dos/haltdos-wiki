/*! For license information please see 62bf4126.cd570905.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[69746],{17071:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"cloud/waf/listener/security-profile/rules/limiting","title":"Rate Limiting","description":"These rules restrict over-usage of your application by throttling requests on matching users.","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/security-profile/rules/limiting.md","sourceDirName":"cloud/waf/listener/security-profile/rules","slug":"/cloud/waf/listener/security-profile/rules/limiting","permalink":"/v6/cloud/waf/listener/security-profile/rules/limiting","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"cloud_sidebar","previous":{"title":"Firewall Rules","permalink":"/v6/cloud/waf/listener/security-profile/rules/firewall"},"next":{"title":"Whitelist Rules","permalink":"/v6/cloud/waf/listener/security-profile/rules/whitelist"}}');var n=i(74848),s=i(28453);const l={sidebar_position:3},o="Rate Limiting",d={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function h(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rate-limiting",children:"Rate Limiting"})}),"\n",(0,n.jsx)(t.p,{children:"These rules restrict over-usage of your application by throttling requests on matching users."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Manual configuration of rate limit rules is risky for adminstrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Follow the links: ",(0,n.jsx)(t.strong,{children:"WAF > Zones > Listener > Security Profiles > Rules > Rate Limit Rule"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Add Rule"})," and set relevant parameters described in the table below."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"PARAMETERS"}),(0,n.jsx)(t.th,{children:"ACCEPTED VALUES"}),(0,n.jsx)(t.th,{children:"DEFAULT"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Name"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Message"}),(0,n.jsx)(t.td,{children:"Description for the rule in String format"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match URI"}),(0,n.jsx)(t.td,{children:"Relative URL path"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Limit Rate"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Limit Burst"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Limit Duration"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Action"}),(0,n.jsx)(t.td,{children:"Choose from the dropdown"}),(0,n.jsx)(t.td,{children:"RECORD"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Limit On"}),(0,n.jsx)(t.td,{children:"Select from a pre-defined dropdown"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Rule Name"})}),"\n",(0,n.jsx)(t.p,{children:"Specify a user-friendly name for the rule which helps in identifying the rule. The rule name takes alpha-numeric input."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Message"})}),"\n",(0,n.jsx)(t.p,{children:"The user can specify a short description of the rule. The description would explain the purpose of the rule."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Match URI"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the URI for which this rule will be applied. Any requests made on this URI triggers this rule and the respective response shall be filtered according to the rule."}),"\n",(0,n.jsx)(t.p,{children:"The URI should be a relative URL and in the format: [/home/(*)]"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Limit Rate"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Limit Burst"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Limit Duration"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the time duration for which the rule will limit the request."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Rule Action"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the type of action to be taken such as Drop, Record, Temporary Blacklist, Send Challenge."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Limit On"})}),"\n",(0,n.jsx)(t.p,{children:"Specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsx)(t.p,{children:"Always limit burst must be greater than or equal to limit rate."})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,t,i)=>{var r=i(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var r,s={},c=null,h=null;for(r in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)l.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:h,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var r=i(96540);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);