/*! For license information please see 64cb5460.0e485493.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78895],{86201:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"docs/waf/rules/whitelist_rules","title":"Whitelist Rules","description":"Overview","source":"@site/community/docs/waf/rules/whitelist_rules.md","sourceDirName":"docs/waf/rules","slug":"/docs/waf/rules/whitelist_rules","permalink":"/community/docs/waf/rules/whitelist_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"community_sidebar","previous":{"title":"Redirection Rules","permalink":"/community/docs/waf/rules/redirection_rules"},"next":{"title":"Behavior Rules","permalink":"/community/docs/waf/rules/behavior_rules"}}');var r=i(74848),n=i(28453);const l={sidebar_position:5},d="Whitelist Rules",h={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Custom Rule IDs",id:"custom-rule-ids",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"whitelist-rules",children:"Whitelist Rules"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.\r\nWhitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.\r\nHere\u2019s another use case: To reduce insider threat, a cyber attack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Whitelist Rule",src:i(73861).A+"",width:"1641",height:"982"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Log onto the Haltdos Community WAF portal."}),"\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Rules"})," > ",(0,r.jsx)(t.strong,{children:"Whitelist Rules"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Click on the Add Rule button and a pop-up box will open."}),"\n",(0,r.jsx)(t.li,{children:"Configure the Fields that are present."}),"\n",(0,r.jsx)(t.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Whitelist Rule",src:i(93843).A+"",width:"1055",height:"603"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameters"}),(0,r.jsx)(t.th,{children:"Accepted value"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Message"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rule Priority"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"URI"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Method"}),(0,r.jsx)(t.td,{children:"Drop-down"}),(0,r.jsx)(t.td,{children:"ALL"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Custom Rule IDs"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Find Location"}),(0,r.jsx)(t.td,{children:"Drop-Down"}),(0,r.jsx)(t.td,{children:"Variable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Find Parameter"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match Condition"}),(0,r.jsx)(t.td,{children:"Drop-Down"}),(0,r.jsx)(t.td,{children:"Pattern Exists"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Match Value"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,r.jsx)(t.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,r.jsx)(t.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,r.jsx)(t.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,r.jsx)(t.h4,{id:"uri",children:"URI"}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,r.jsx)(t.h4,{id:"method",children:"Method"}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. ANY, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,r.jsx)(t.h4,{id:"custom-rule-ids",children:"Custom Rule IDs"}),"\n",(0,r.jsx)(t.p,{children:"Users are allowed to specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed."}),"\n",(0,r.jsx)(t.h4,{id:"find-location",children:"Find Location"}),"\n",(0,r.jsx)(t.p,{children:"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"URL:"})," Select this if the specified value has to be searched in the URL part of the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Header Name:"})," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Header Value:"})," Select this if the specified value has to be searched in the Headers part of the HTTP Header values."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Headers:"})," Select this if the specified value has to be searched in the Headers part of the HTTP Header."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Specific Header Value Data"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cookie Name:"})," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cookie Value:"})," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cookies:"})," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Specific Cookie Value Data"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Body Argument Name:"})," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Body Argument Value:"})," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Body:"})," Select this if the specified value has to be searched in the Body part of the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Argument Name:"})," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Argument Value:"})," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Arguments:"}),"  Select this if the specified value has to be searched in the Arguments section in the HTTP Header."]}),"\n",(0,r.jsx)(t.h4,{id:"variable",children:"Variable"}),"\n",(0,r.jsx)(t.p,{children:"Users can select the variable."}),"\n",(0,r.jsx)(t.h4,{id:"match-condition",children:"Match Condition"}),"\n",(0,r.jsx)(t.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,r.jsx)(t.h4,{id:"match-value",children:"Match Value"}),"\n",(0,r.jsx)(t.p,{children:"The user can define what value needs to be matched with the match condition."})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,i)=>{var s=i(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,i){var s,n={},a=null,c=null;for(s in void 0!==i&&(a=""+i),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!h.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:r,type:e,key:a,ref:c,props:n,_owner:d.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},74848:(e,t,i)=>{e.exports=i(21020)},73861:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/whitelisting_rule-6132c0670cbc28a69e7bd541e6fd5a09.png"},93843:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/whitelisting_rule2-81288903cfc482a6a2f0d500d5e8af6f.png"},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var s=i(96540);const r={},n=s.createContext(r);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);