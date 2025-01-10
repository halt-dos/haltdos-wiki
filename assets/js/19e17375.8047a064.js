/*! For license information please see 19e17375.8047a064.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[68573],{50848:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"cloud/waf/listener/profiles/rules/deception_rules","title":"Deception Rules","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/rules/deception_rules.md","sourceDirName":"cloud/waf/listener/profiles/rules","slug":"/cloud/waf/listener/profiles/rules/deception_rules","permalink":"/cloud/waf/listener/profiles/rules/deception_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"cloud_sidebar","previous":{"title":"Correlation Rules","permalink":"/cloud/waf/listener/profiles/rules/correlation_rules"},"next":{"title":"Script Rule","permalink":"/cloud/waf/listener/profiles/rules/script_rules"}}');var s=n(74848),l=n(28453);const i={sidebar_position:10},o="Deception Rules",c={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Decoy URI</strong>",id:"decoy-uri",level:5},{value:"<strong>Decoy Methods</strong>",id:"decoy-methods",level:5},{value:"<strong>Fields</strong>",id:"fields",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"deception-rules",children:"Deception Rules"})}),"\n",(0,s.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.\nThe goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.\nThe attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way."}),"\n",(0,s.jsx)(r.p,{children:"The rule will have to do the following :\nIntercept HTTP responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["For GET requests, the parameters will be added to existing ",(0,s.jsx)(r.code,{children:"<a href>"})," link values."]}),"\n",(0,s.jsx)(r.li,{children:"For POST requests, the parameters will be added as hidden input type parameters of existing forms."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Deception Rule",src:n(91543).A+"",width:"1910",height:"900"})}),"\n",(0,s.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Go to ",(0,s.jsx)(r.strong,{children:"WAF"})," > ",(0,s.jsx)(r.strong,{children:"Listener"})," > ",(0,s.jsx)(r.strong,{children:"Profiles"})," > ",(0,s.jsx)(r.strong,{children:"Rules"})," > ",(0,s.jsx)(r.strong,{children:"Deception Rules"}),"."]}),"\n",(0,s.jsx)(r.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,s.jsx)(r.li,{children:"Click on save changes"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.h5,{id:"rule-name",children:(0,s.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-message",children:(0,s.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-priority",children:(0,s.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(r.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"uri",children:(0,s.jsx)(r.strong,{children:"URI"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"method",children:(0,s.jsx)(r.strong,{children:"Method"})}),"\n",(0,s.jsx)(r.p,{children:"Users are allowed to select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-action",children:(0,s.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,s.jsx)(r.p,{children:"The following actions are available to the User-"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Drop & Record Request / Record Request / Temprorary  Blacklist Src IP / Tarpit Src IP / Redirect / Terminate Connection / Block User Session\n\n    Default: Drop & Record Request  \n"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"DROP & RECORD REQUEST"})," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated, but the request will not be allowed through the WAF."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"RECORD REQUEST"})," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"TEMPORARY BLACKLIST SOURCE IP"})," - If the request satisfies the rule, then the user is temporarily blacklisted."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"TARPIT SRC.IP"})," - If the request satisfies the rule, the end-user IP will be tarpit."]}),"\n"]}),"\n",(0,s.jsx)(r.h5,{id:"decoy-uri",children:(0,s.jsx)(r.strong,{children:"Decoy URI"})}),"\n",(0,s.jsx)(r.p,{children:"Users can specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: /login\n\n    Default: Blank  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"decoy-methods",children:(0,s.jsx)(r.strong,{children:"Decoy Methods"})}),"\n",(0,s.jsx)(r.p,{children:"Users can specify the HTTP methods for the rule to be created."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: GET / POST\n\n    Default: GET  \n"})}),"\n",(0,s.jsx)(r.h5,{id:"fields",children:(0,s.jsx)(r.strong,{children:"Fields"})}),"\n",(0,s.jsx)(r.p,{children:"Users can specify the fields for which the rule will be applicable."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,s.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,s.jsx)(r.a,{href:"/cloud/waf/listener/profiles/rules/ruleCond",children:(0,s.jsx)(r.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,l={},d=null,a=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(l[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===l[t]&&(l[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:a,props:l,_owner:o.current}}r.Fragment=l,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},91543:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/deceptionRules-df31b9a34e8e52aacd64ba25a238372e.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},l=t.createContext(s);function i(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);