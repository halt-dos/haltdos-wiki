/*! For license information please see 7c33878f.2a9a2200.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[91614],{49606:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"docs/waf/rules/whitelist_rules","title":"Whitelist Rules","description":"Overview","source":"@site/professional/docs/waf/rules/whitelist_rules.md","sourceDirName":"docs/waf/rules","slug":"/docs/waf/rules/whitelist_rules","permalink":"/professional/docs/waf/rules/whitelist_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"professional_sidebar","previous":{"title":"Rate Limit Rules","permalink":"/professional/docs/waf/rules/rate_limit_rules"},"next":{"title":"Log Rules","permalink":"/professional/docs/waf/rules/log_rules"}}');var r=s(74848),n=s(28453);const l={sidebar_position:8},d="Whitelist Rules",o={},a=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Custom Rule IDs</strong>",id:"custom-rule-ids",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Variable</strong>",id:"variable",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}];function h(e){const t={h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"whitelist-rules",children:"Whitelist Rules"})}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.\nWhitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.\nHere\u2019s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.'}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"whitelist_rules",src:s(50129).A+"",width:"1888",height:"990"}),"\n",(0,r.jsx)(t.img,{alt:"whitelist_rules",src:s(58261).A+"",width:"1888",height:"990"})]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Log into the Haltdos WAF Professional edition web UI console."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Then to ",(0,r.jsx)(t.strong,{children:"Listeners"})," ",(0,r.jsx)(t.strong,{children:"Rules"})," > ",(0,r.jsx)(t.strong,{children:"Whitelist Rules"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Add Rule"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Configure the rule and click on save changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameters"}),(0,r.jsx)(t.th,{children:"Accepted value"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Message"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Priority"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"URI"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Method"}),(0,r.jsx)(t.td,{children:"Drop-down"}),(0,r.jsx)(t.td,{children:"ALL"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Custom Rule IDs"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Find Location"}),(0,r.jsx)(t.td,{children:"Drop-Down"}),(0,r.jsx)(t.td,{children:"Variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Find Parameter"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match Condition"}),(0,r.jsx)(t.td,{children:"Drop-Down"}),(0,r.jsx)(t.td,{children:"Pattern Exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match Value"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.h5,{id:"rule-name",children:(0,r.jsx)(t.strong,{children:"Rule Name"})}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."}),"\n",(0,r.jsx)(t.h5,{id:"rule-message",children:(0,r.jsx)(t.strong,{children:"Rule Message"})}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,r.jsx)(t.h5,{id:"rule-priority",children:(0,r.jsx)(t.strong,{children:"Rule Priority"})}),"\n",(0,r.jsx)(t.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,r.jsx)(t.h5,{id:"uri",children:(0,r.jsx)(t.strong,{children:"URI"})}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,r.jsx)(t.h5,{id:"method",children:(0,r.jsx)(t.strong,{children:"Method"})}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,r.jsx)(t.h5,{id:"custom-rule-ids",children:(0,r.jsx)(t.strong,{children:"Custom Rule IDs"})}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the rule/mitigation ID that needs to be whitelisted, so that action against that request will be allowed."}),"\n",(0,r.jsx)(t.h5,{id:"find-location",children:(0,r.jsx)(t.strong,{children:"Find Location"})}),"\n",(0,r.jsx)(t.p,{children:"Users can define the source location where this condition needs to be applied."}),"\n",(0,r.jsx)(t.h5,{id:"variable",children:(0,r.jsx)(t.strong,{children:"Variable"})}),"\n",(0,r.jsx)(t.p,{children:"Users can select the variable."}),"\n",(0,r.jsx)(t.h5,{id:"match-condition",children:(0,r.jsx)(t.strong,{children:"Match Condition"})}),"\n",(0,r.jsx)(t.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,r.jsx)(t.h5,{id:"match-value",children:(0,r.jsx)(t.strong,{children:"Match Value"})}),"\n",(0,r.jsx)(t.p,{children:"The user can define what value needs to be matched with the match condition."})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,t,s)=>{var i=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var i,n={},a=null,h=null;for(i in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)l.call(t,i)&&!o.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:r,type:e,key:a,ref:h,props:n,_owner:d.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,s)=>{e.exports=s(21020)},50129:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/whitelist_rules1-626624e8de6100b5f7265fd7bb14822e.png"},58261:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/whitelist_rules2-a62029778f744857628a389977ef3635.png"},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var i=s(96540);const r={},n=i.createContext(r);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);