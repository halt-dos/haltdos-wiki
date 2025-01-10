/*! For license information please see 72399af5.1a9b28cb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[91609],{46758:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"enterprise/ddos/listeners/rules/policy","title":"Policy Rules","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/ddos/listeners/rules/policy.md","sourceDirName":"enterprise/ddos/listeners/rules","slug":"/enterprise/ddos/listeners/rules/policy","permalink":"/v7/enterprise/ddos/listeners/rules/policy","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"ddos_sidebar","previous":{"title":"Header Rules","permalink":"/v7/enterprise/ddos/listeners/rules/header"},"next":{"title":"Rate Limit Rules","permalink":"/v7/enterprise/ddos/listeners/rules/ratelimit"}}');var s=r(74848),t=r(28453);const l={sidebar_position:4},o="Policy Rules",d={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:5},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"policy-rules",children:"Policy Rules"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Policy rule is the feature of Haltdos DDOS that allows application owners to set various policy rules based on their  requirements."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Polic Rule",src:r(53779).A+"",width:"1412",height:"841"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"DDOS"})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})," > ",(0,s.jsx)(n.strong,{children:"Rules"})," > ",(0,s.jsx)(n.strong,{children:"Policy Rules"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the ",(0,s.jsx)(n.strong,{children:"Policy Rule"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add Rule"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Save Changes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,s.jsx)(n.h5,{id:"rule-name",children:(0,s.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(n.p,{children:"User can define the rule name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-message",children:(0,s.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(n.p,{children:"User can define the rule message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-priority",children:(0,s.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(n.p,{children:"User can define the rule priority among various other policy rules."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-action",children:(0,s.jsx)(n.strong,{children:"Rule Action"})}),"\n",(0,s.jsx)(n.p,{children:"User can define what action needs to be taken in case this rule is being satisfied."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-condition",children:(0,s.jsx)(n.strong,{children:"Rule Condition"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Policy Condition",src:r(11034).A+"",width:"1041",height:"580"})}),"\n",(0,s.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"find-location",children:(0,s.jsx)(n.strong,{children:"Find Location"})}),"\n",(0,s.jsx)(n.p,{children:"User can define the source location where this condition needs to be applied."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Select source location\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"find-parameter",children:(0,s.jsx)(n.strong,{children:"Find Parameter"})}),"\n",(0,s.jsx)(n.p,{children:"The user can define the parameter based on the location of the condition."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"match-condition",children:(0,s.jsx)(n.strong,{children:"Match Condition"})}),"\n",(0,s.jsx)(n.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"match-value",children:(0,s.jsx)(n.strong,{children:"Match Value"})}),"\n",(0,s.jsx)(n.p,{children:"The user can define what value needs to be matched with the match condition."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var i=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,t={},c=null,a=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,i)&&!d.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},11034:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/policy_condition-3d68fe250caa740b7f6e7ad282b0d3c7.png"},53779:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/policy_rule-898b30627d5b7ab1e15086a4b7aa5460.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);