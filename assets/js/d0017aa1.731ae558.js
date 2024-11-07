/*! For license information please see d0017aa1.731ae558.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[25532],{77006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enterprise/waf/listener/rules/variablerule","title":"Variable Rules","description":"Overview","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/rules/variablerule.md","sourceDirName":"enterprise/waf/listener/rules","slug":"/enterprise/waf/listener/rules/variablerule","permalink":"/v7/enterprise/waf/listener/rules/variablerule","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Upstream Rules","permalink":"/v7/enterprise/waf/listener/rules/upstreamrules"},"next":{"title":"Variables","permalink":"/v7/enterprise/waf/listener/variable"}}');var s=r(74848),t=r(28453);const l={},a="Variable Rules",o={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"<strong>Variable</strong>",id:"variable",level:5},{value:"<strong>Mutation action</strong>",id:"mutation-action",level:5},{value:"<strong>Value</strong>",id:"value",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"variable-rules",children:"Variable Rules"})}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsx)(n.p,{children:"Any parameter from the Request/Response can be stored in a variable."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"variable rule",src:r(26412).A+"",width:"1833",height:"877"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})," > ",(0,s.jsx)(n.strong,{children:"Rules"})," > ",(0,s.jsx)(n.strong,{children:"Variable Rules"})]}),"\n",(0,s.jsx)(n.li,{children:"Create rules with different conditions"}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"rule-name",children:(0,s.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(n.p,{children:"Users are allowed to specify a user-friendly name to identify the rule. The rule name takes alphanumeric input."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-message",children:(0,s.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(n.p,{children:"The user can add a short description of the rule. The description would explain the purpose of the rule."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-priority",children:(0,s.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(n.p,{children:"Set the priority of the rule. If two rules have the same priority, then selection will be random."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,s.jsx)(n.h5,{id:"evaluation-phase",children:(0,s.jsx)(n.strong,{children:"Evaluation Phase"})}),"\n",(0,s.jsx)(n.p,{children:"Users can set the evaluation phase either for request coming from end users or for response sending back to end users."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Request Phase / Response Phase\n\n    Default:  Request Phase \n"})}),"\n",(0,s.jsx)(n.h5,{id:"variable",children:(0,s.jsx)(n.strong,{children:"Variable"})}),"\n",(0,s.jsx)(n.p,{children:"User can select the variable which should be earlier created under variables."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"mutation-action",children:(0,s.jsx)(n.strong,{children:"Mutation action"})}),"\n",(0,s.jsx)(n.p,{children:"Users can specify the mutation action."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: SET / DELETE / INCREMENT / DECREMENT\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"value",children:(0,s.jsx)(n.strong,{children:"Value"})}),"\n",(0,s.jsx)(n.p,{children:"Users can specify the value for the rule."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"add-condition",children:(0,s.jsx)(n.strong,{children:"Add Condition"})}),"\n",(0,s.jsx)(n.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,s.jsxs)(n.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,s.jsx)(n.a,{href:"/v7/enterprise/waf/listener/profiles/rules/conditions",children:(0,s.jsx)(n.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,n,r)=>{var i=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,t={},d=null,c=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!o.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:d,ref:c,props:t,_owner:a.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},26412:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/variablerule-3e4ee7060c2bfb99234a65db7494404b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);