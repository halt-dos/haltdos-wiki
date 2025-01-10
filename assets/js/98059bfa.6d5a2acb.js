/*! For license information please see 98059bfa.6d5a2acb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64887],{37363:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cloud/waf/listener/profiles/rules/correlation_rules","title":"Correlation Rules","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/rules/correlation_rules.md","sourceDirName":"cloud/waf/listener/profiles/rules","slug":"/cloud/waf/listener/profiles/rules/correlation_rules","permalink":"/cloud/waf/listener/profiles/rules/correlation_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"cloud_sidebar","previous":{"title":"Tamper Rules","permalink":"/cloud/waf/listener/profiles/rules/tamper_rules"},"next":{"title":"Deception Rules","permalink":"/cloud/waf/listener/profiles/rules/deception_rules"}}');var t=n(74848),l=n(28453);const i={sidebar_position:9},o="Correlation Rules",d={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Dependent Rule</strong>",id:"dependent-rule",level:4},{value:"<strong>Rule ID</strong>",id:"rule-id",level:5},{value:"<strong>Match</strong>",id:"match",level:5}];function h(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"correlation-rules",children:"Correlation Rules"})}),"\n",(0,t.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, \"(Condition 1 and Condition 2)\" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Correlation Rule",src:n(67512).A+"",width:"1900",height:"901"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Follow the links: ",(0,t.jsx)(r.strong,{children:"WAF"})," > ",(0,t.jsx)(r.strong,{children:"Listener"})," > ",(0,t.jsx)(r.strong,{children:"Profiles"})," > ",(0,t.jsx)(r.strong,{children:"Rules"})," > ",(0,t.jsx)(r.strong,{children:"Correlation Rules"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,t.jsx)(r.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.h5,{id:"rule-name",children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-message",children:(0,t.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,t.jsx)(r.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-priority",children:(0,t.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,t.jsx)(r.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"uri",children:(0,t.jsx)(r.strong,{children:"URI"})}),"\n",(0,t.jsx)(r.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Regex\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"method",children:(0,t.jsx)(r.strong,{children:"Method"})}),"\n",(0,t.jsx)(r.p,{children:"Users are allowed to select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-action",children:(0,t.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,t.jsx)(r.p,{children:"The following actions are available to the User-"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Record Request / DROP & RECORD REQUEST / BYPASS REQUEST / TEMPORARY BLACKLIST SRC IP / REDIRECT / SEND CAPCHA CHALLENEGE / SEND RESONSE WITH STATUUS CODE / SEND CUSTOM RESPONSES / CHANGE RESPONSE CODE / NO ACTION / SEND EMPTY RESPONSES\n\n    Default: Record Request    \n"})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"DROP & RECORD REQUEST"})," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"RECORD REQUEST"})," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"BYPASS REQUEST"})," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"TEMPORARY BLACKLIST SOURCE IP"})," - If the request satisfies the rule, then the user is temporarily blacklisted."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"REDIRECT"})," - If the request satisfies the rule, then the user is redirected to another page."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"SEND CAPTCHA CHALLENGE"})," - If the request satisfies the rule, then the user receives a challenge like a captcha."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"SEND RESPONSE WITH STATUS CODE"})," - If the request satisfies the rule, a custom HTML response will be returned with a status code."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"SEND CUSTOM RESPONSE"})," - If the request satisfies the rule, a custom HTML response will be returned."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"CHANGE RESPONSE CODE"})," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"TARPIT SRC.IP"})," - If the request satisfies the rule, the end-user IP will be tarpit."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"NO ACTION"})," - If the request satisfies the rule, then no action will be performed on the current request."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"SKIP LEARNING"})," -If the request satisfies the rule, then no learning will be performed on the current request."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"SEND EMPTY RESPONSE"})," - If the request satisfies the rule, the end-user will get empty response / blank page in return."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"dependent-rule",children:(0,t.jsx)(r.strong,{children:"Dependent Rule"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-id",children:(0,t.jsx)(r.strong,{children:"Rule ID"})}),"\n",(0,t.jsx)(r.p,{children:"Users can specify the rule ID for which condition should be created."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Select Rule\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"match",children:(0,t.jsx)(r.strong,{children:"Match"})}),"\n",(0,t.jsx)(r.p,{children:"Users can specify whether the rule should be matched or not matched."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: MATCH / NO MATCH\n\n    Default: MATCH\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,t.jsx)(r.a,{href:"/cloud/waf/listener/profiles/rules/ruleCond",children:(0,t.jsx)(r.strong,{children:"Conditions"})}),"."]})]})}function a(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,l={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,s)&&!d.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:h,props:l,_owner:o.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},67512:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/corelation_rules-683f8dffeb9fc3411bd388553b8b30a6.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(96540);const t={},l=s.createContext(t);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);