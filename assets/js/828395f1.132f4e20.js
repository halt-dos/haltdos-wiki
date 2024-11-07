/*! For license information please see 828395f1.132f4e20.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[77335],{22071:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/whitelist_rules","title":"Whitelist Rule","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/whitelist_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/whitelist_rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/whitelist_rules","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"waf_sidebar","previous":{"title":"Rate Limit Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/ratelimit_rules"},"next":{"title":"Response Rule","permalink":"/v6/enterprise/waf/listener/profiles/rules/response_rules"}}');var r=t(74848),l=t(28453);const n={sidebar_position:5},d="Whitelist Rule",a={},o=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Custom Rule IDs",id:"custom-rule-ids",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}];function h(e){const i={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"whitelist-rule",children:"Whitelist Rule"})}),"\n",(0,r.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.\r\nWhitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.\r\nHere\u2019s another use case: To reduce insider threat, a cyber attack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.'}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Whitelist Rule",src:t(3293).A+"",width:"1490",height:"589"})}),"\n",(0,r.jsx)(i.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Go to ",(0,r.jsx)(i.strong,{children:"WAF"})," > ",(0,r.jsx)(i.strong,{children:"Listeners"})," >  ",(0,r.jsx)(i.strong,{children:"Profiles"})," > ",(0,r.jsx)(i.strong,{children:"Rules"})," > ",(0,r.jsx)(i.strong,{children:"Whitelist Rules"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"Click on the Add Rule button and a pop-up box will open."}),"\n",(0,r.jsx)(i.li,{children:"Configure the Fields that are present."}),"\n",(0,r.jsx)(i.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Whitelist Rule",src:t(59995).A+"",width:"1126",height:"795"})}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Parameters"}),(0,r.jsx)(i.th,{children:"Accepted value"}),(0,r.jsx)(i.th,{children:"Default"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Rule Name"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Rule Message"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Rule Priority"}),(0,r.jsx)(i.td,{children:"Integer"}),(0,r.jsx)(i.td,{children:"0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"URI"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Method"}),(0,r.jsx)(i.td,{children:"Drop-down"}),(0,r.jsx)(i.td,{children:"ALL"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Custom Rule IDs"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Find Location"}),(0,r.jsx)(i.td,{children:"Drop-Down"}),(0,r.jsx)(i.td,{children:"Variable"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Find Parameter"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Match Condition"}),(0,r.jsx)(i.td,{children:"Drop-Down"}),(0,r.jsx)(i.td,{children:"Pattern Exists"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Match Value"}),(0,r.jsx)(i.td,{children:"String"}),(0,r.jsx)(i.td,{children:"Blank"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,r.jsx)(i.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,r.jsx)(i.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,r.jsx)(i.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,r.jsx)(i.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,r.jsx)(i.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,r.jsx)(i.h4,{id:"uri",children:"URI"}),"\n",(0,r.jsx)(i.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,r.jsx)(i.h4,{id:"method",children:"Method"}),"\n",(0,r.jsx)(i.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,r.jsx)(i.h4,{id:"custom-rule-ids",children:"Custom Rule IDs"}),"\n",(0,r.jsx)(i.p,{children:"Users are allowed to specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed."}),"\n",(0,r.jsx)(i.h4,{id:"find-location",children:"Find Location"}),"\n",(0,r.jsx)(i.p,{children:"Users can define the source location where this condition needs to be applied."}),"\n",(0,r.jsx)(i.h4,{id:"variable",children:"Variable"}),"\n",(0,r.jsx)(i.p,{children:"Users can select the variable."}),"\n",(0,r.jsx)(i.h4,{id:"match-condition",children:"Match Condition"}),"\n",(0,r.jsx)(i.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,r.jsx)(i.h4,{id:"match-value",children:"Match Value"}),"\n",(0,r.jsx)(i.p,{children:"The user can define what value needs to be matched with the match condition."})]})}function c(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,i,t)=>{var s=t(96540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,i,t){var s,l={},o=null,h=null;for(s in void 0!==t&&(o=""+t),void 0!==i.key&&(o=""+i.key),void 0!==i.ref&&(h=i.ref),i)n.call(i,s)&&!a.hasOwnProperty(s)&&(l[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===l[s]&&(l[s]=i[s]);return{$$typeof:r,type:e,key:o,ref:h,props:l,_owner:d.current}}i.Fragment=l,i.jsx=o,i.jsxs=o},74848:(e,i,t)=>{e.exports=t(21020)},3293:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/whitelisting_rule-75ba7f2b5c9c7feddc05b44542be82be.png"},59995:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/whitelisting_rule2-625e57d205deda5c2b9d8df5041ef721.png"},28453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>d});var s=t(96540);const r={},l=s.createContext(r);function n(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);