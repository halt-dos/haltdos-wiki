/*! For license information please see 49e6eb85.ee57af09.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[29047],{23291:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"cloud/waf/listener/profiles/rules/defacementRule","title":"Defacement Rules","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/rules/defacementRule.md","sourceDirName":"cloud/waf/listener/profiles/rules","slug":"/cloud/waf/listener/profiles/rules/defacementRule","permalink":"/cloud/waf/listener/profiles/rules/defacementRule","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"cloud_sidebar","previous":{"title":"Log Rules","permalink":"/cloud/waf/listener/profiles/rules/log_rules"},"next":{"title":"Rule Condition","permalink":"/cloud/waf/listener/profiles/rules/ruleCond"}}');var s=r(74848),t=r(28453);const i={sidebar_position:13},o="Defacement Rules",c={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"defacement-rules",children:"Defacement Rules"})}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"These rules prevent Haltdos WAF from logging sensitive information like passwords, etc., and adhere to your compliance policy."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Log Rules",src:r(83025).A+"",width:"1910",height:"900"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Follow the links: ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})," > ",(0,s.jsx)(n.strong,{children:"Profiles"})," > ",(0,s.jsx)(n.strong,{children:"Rules"})," > ",(0,s.jsx)(n.strong,{children:"Log Rules"})]}),"\n",(0,s.jsx)(n.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"rule-name",children:(0,s.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-message",children:(0,s.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-priority",children:(0,s.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(n.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"uri",children:(0,s.jsx)(n.strong,{children:"URI"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"method",children:(0,s.jsx)(n.strong,{children:"Method"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"evaluation-phase",children:(0,s.jsx)(n.strong,{children:"Evaluation Phase"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Request Phase / Response Phase\n\n    Default: Request phase  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-action",children:(0,s.jsx)(n.strong,{children:"Rule Action"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: No Action / Send Empty Response / Send Empty Response\n\n    Default: No Action  \n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var l=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var l,t={},d=null,a=null;for(l in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,l)&&!c.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:s,type:e,key:d,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},83025:(e,n,r)=>{r.d(n,{A:()=>l});const l=r.p+"assets/images/defacementRule-6adc8c04d49eb9c22024c33ccd0f5916.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var l=r(96540);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);