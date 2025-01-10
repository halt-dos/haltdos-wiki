/*! For license information please see 4feb94fd.4b24e3cf.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64081],{7425:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/policy_rules","title":"Policy Rules","description":"---","source":"@site/docs/enterprise/adc/listeners/rules/policy_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/policy_rules","permalink":"/enterprise/adc/listeners/rules/policy_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"adc_sidebar","previous":{"title":"Redirection Rules","permalink":"/enterprise/adc/listeners/rules/redirection_rules"},"next":{"title":"Upstream Rule","permalink":"/enterprise/adc/listeners/rules/upstream_rules"}}');var i=r(74848),l=r(28453);const t={sidebar_position:4},o="Policy Rules",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"Rule Action",id:"rule-action",level:5},{value:"Add Condition",id:"add-condition",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"policy-rules",children:"Policy Rules"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Policy rule",src:r(87942).A+"",width:"1422",height:"898"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Stack"})," > ",(0,i.jsx)(n.a,{href:"/enterprise/adc",children:(0,i.jsx)(n.strong,{children:"SLB"})})," > ",(0,i.jsx)(n.a,{href:"/enterprise/adc/listeners/",children:(0,i.jsx)(n.strong,{children:"Listeners"})})," > ",(0,i.jsx)(n.strong,{children:"Rules"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Policy Rule"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add Rule"})," button."]}),"\n",(0,i.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"rule-name",children:(0,i.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(n.p,{children:"User can define the rule name."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-message",children:(0,i.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(n.p,{children:"User can define the rule message."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-enabled",children:(0,i.jsx)(n.strong,{children:"Rule Enabled"})}),"\n",(0,i.jsx)(n.p,{children:"Users can enable and disable the rule."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-priority",children:(0,i.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(n.p,{children:"User can define the rule priority among various other policy rules."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"evaluation-phase",children:(0,i.jsx)(n.strong,{children:"Evaluation Phase"})}),"\n",(0,i.jsx)(n.p,{children:"Users are allowed to specify the phase for the rule i.e. Request/Response while evaluating the request."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Request Phase / Response Phase\n\n    Default: Request Phase \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-action",children:"Rule Action"}),"\n",(0,i.jsx)(n.p,{children:"User can define what action needs to be taken in case this rule is being satisfied."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,i.jsx)(n.h4,{id:"add-condition",children:"Add Condition"}),"\n",(0,i.jsx)(n.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,i.jsxs)(n.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,i.jsx)(n.a,{href:"/enterprise/adc/listeners/rules/conditions",children:(0,i.jsx)(n.strong,{children:"Conditions"})})]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var s=r(96540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,l={},d=null,a=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:i,type:e,key:d,ref:a,props:l,_owner:o.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},87942:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/policy_rule_1-6477aed368a8005d985638746424f3fd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(96540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);