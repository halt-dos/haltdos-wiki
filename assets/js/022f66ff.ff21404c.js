/*! For license information please see 022f66ff.ff21404c.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[34289],{379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/defacementRule","title":"Defacement Rules","description":"Overview","source":"@site/docs/enterprise/waf/listener/profiles/rules/defacementRule.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/defacementRule","permalink":"/enterprise/waf/listener/profiles/rules/defacementRule","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"waf_sidebar","previous":{"title":"Log Rules","permalink":"/enterprise/waf/listener/profiles/rules/log_rules"},"next":{"title":"Rule Condition","permalink":"/enterprise/waf/listener/profiles/rules/ruleCond"}}');var r=t(74848),s=t(28453);const l={sidebar_position:13},o="Defacement Rules",a={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"Attribute",id:"attribute",level:4},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}];function c(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"defacement-rules",children:"Defacement Rules"})}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Defacement rules in a Web Application Firewall (WAF) are designed to identify and block suspicious activities or payloads that could alter website content maliciously."}),"\n",(0,r.jsx)(n.p,{children:"Haltdos WAF strengthens this protection by analyzing incoming requests for attack patterns, blocking unauthorized file uploads or injections, and monitoring content integrity using methods like checksum validation. It employs behavioral analysis and pre-configured rules to prevent common defacement tactics, such as exploiting admin panels or bypassing security controls. By proactively detecting and mitigating defacement attempts, Haltdos WAF ensures websites maintain their intended appearance and functionality while safeguarding content integrity."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Log Rules",src:t(39372).A+"",width:"1907",height:"884"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Follow the links: ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Listeners"})," > ",(0,r.jsx)(n.strong,{children:"Profiles"})," > ",(0,r.jsx)(n.strong,{children:"Rules"})," > ",(0,r.jsx)(n.strong,{children:"Log Rules"})]}),"\n",(0,r.jsx)(n.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h5,{id:"rule-name",children:(0,r.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"rule-message",children:(0,r.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"rule-priority",children:(0,r.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,r.jsx)(n.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"uri",children:(0,r.jsx)(n.strong,{children:"URI"})}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"method",children:(0,r.jsx)(n.strong,{children:"Method"})}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,r.jsx)(n.h4,{id:"attribute",children:"Attribute"}),"\n",(0,r.jsx)(n.h5,{id:"find-location",children:(0,r.jsx)(n.strong,{children:"Find Location"})}),"\n",(0,r.jsx)(n.p,{children:"Users can define the source location where this condition needs to be applied."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"find-parameter",children:(0,r.jsx)(n.strong,{children:"Find Parameter"})}),"\n",(0,r.jsx)(n.p,{children:"The user can define the parameter based on the location of the condition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.h5,{id:"match-condition",children:(0,r.jsx)(n.strong,{children:"Match Condition"})}),"\n",(0,r.jsx)(n.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: None / Pattern Exist / Pattern Doesn't Exist / Equals / Not Equals \n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"match-value",children:(0,r.jsx)(n.strong,{children:"Match Value"})}),"\n",(0,r.jsx)(n.p,{children:"The user can define what value needs to be matched with the match condition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,n,t)=>{var i=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,s={},d=null,c=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:c,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},39372:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/WAFproDefacement-018aa5f1fc8dad9d83291a55ce69de0b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);