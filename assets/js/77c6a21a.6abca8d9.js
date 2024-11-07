/*! For license information please see 77c6a21a.6abca8d9.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[54441],{34378:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/behavior_rules","title":"Behavior Rule","description":"Overview","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/rules/behavior_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/behavior_rules","permalink":"/v7/enterprise/waf/listener/profiles/rules/behavior_rules","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"waf_sidebar","previous":{"title":"Response Rule","permalink":"/v7/enterprise/waf/listener/profiles/rules/response_rules"},"next":{"title":"Tamper Rules","permalink":"/v7/enterprise/waf/listener/profiles/rules/tamper_rules"}}');var s=n(74848),t=n(28453);const l={sidebar_position:7},o="Behavior Rule",a={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function d(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"behavior-rule",children:"Behavior Rule"})}),"\n",(0,s.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"The Behavior rule allows application owners to identify the malicious user intent with the help of the behavioral engine."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Behavior Rule",src:n(5159).A+"",width:"1834",height:"940"})}),"\n",(0,s.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Follow the links: ",(0,s.jsx)(r.strong,{children:"WAF"})," > ",(0,s.jsx)(r.strong,{children:"Listener"})," > ",(0,s.jsx)(r.strong,{children:"Profiles"})," > ",(0,s.jsx)(r.strong,{children:"Rules"})," > ",(0,s.jsx)(r.strong,{children:"Behavior Rules"})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Click on ",(0,s.jsx)(r.strong,{children:"Save changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.h5,{id:"rule-name",children:(0,s.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-message",children:(0,s.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-priority",children:(0,s.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(r.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-action",children:(0,s.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. no action, drop, record, tarpit, temperory blacklist, etc."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: DROP / RECORD / BYPASSED / TMP_BLACKLIST / REDIRECT / SEND_CAPTCHA / SEND_CRYPTO_CHALLENGE / SEND_RESPONSE / SEND_RESPONSE_WITHOUT_CODE / SET_RESPONSE_CODE / TARPIT / NO_ACTION / SKIP_LEARNING / EMPTY_RESPONSE\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"add-condition",children:(0,s.jsx)(r.strong,{children:"Add Condition"})}),"\n",(0,s.jsx)(r.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,s.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,s.jsx)(r.a,{href:"/v7/enterprise/waf/listener/profiles/rules/conditions",children:(0,s.jsx)(r.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,r,n)=>{var i=n(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var i,t={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,i)&&!a.hasOwnProperty(i)&&(t[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===t[i]&&(t[i]=r[i]);return{$$typeof:s,type:e,key:c,ref:d,props:t,_owner:o.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},5159:(e,r,n)=>{n.d(r,{A:()=>i});const i=n.p+"assets/images/behavior_rule-3ccfd3ff76288a3abfa23e89cb7a3379.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var i=n(96540);const s={},t=i.createContext(s);function l(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);