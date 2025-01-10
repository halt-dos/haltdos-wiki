/*! For license information please see f0047c6e.4c9d798f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[13360],{15378:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/error_rules","title":"Error Rules","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/rules/error_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/error_rules","permalink":"/v7/enterprise/adc/listeners/rules/error_rules","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"adc_sidebar","previous":{"title":"Rules","permalink":"/v7/enterprise/adc/listeners/rules/"},"next":{"title":"Header Rules","permalink":"/v7/enterprise/adc/listeners/rules/header_rules"}}');var t=n(74848),l=n(28453);const i={sidebar_position:1},o="Error Rules",d={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:4},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"error-rules",children:"Error Rules"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Error Rules is a feature of Haltdos SLB that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"errorrules",src:n(95405).A+"",width:"1827",height:"749"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to Stack > ",(0,t.jsx)(r.a,{href:"/v7/enterprise/adc",children:(0,t.jsx)(r.strong,{children:"SLB"})})," > ",(0,t.jsx)(r.a,{href:"/v7/enterprise/adc/listeners/",children:(0,t.jsx)(r.strong,{children:"Listeners"})})," > ",(0,t.jsx)(r.strong,{children:"Rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Error rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Add Rule"})," button."]}),"\n",(0,t.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.h5,{id:"rule-name",children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"User can mention the rule name. This will help the user to identify the rule and its usage."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-message",children:(0,t.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,t.jsx)(r.p,{children:"User can enter a rule message to add a description on the rule name."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-enabled",children:(0,t.jsx)(r.strong,{children:"Rule Enabled"})}),"\n",(0,t.jsx)(r.p,{children:"Users can enable or disable the rule."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Enabled \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-priority",children:(0,t.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,t.jsx)(r.p,{children:"User can define the rule's priority among various other custom error rules."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,t.jsx)(r.h4,{id:"rule-condition",children:(0,t.jsx)(r.strong,{children:"Rule Condition"})}),"\n",(0,t.jsx)(r.h5,{id:"http-response-codes",children:(0,t.jsx)(r.strong,{children:"HTTP Response Codes"})}),"\n",(0,t.jsx)(r.p,{children:"User can mention the HTTP response code based on the custom error rule name."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530\n\n    Default: NONE  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-action",children:(0,t.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,t.jsx)(r.p,{children:"Specifies the action to be executed when this is gets triggered"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: NO ACTION / SEND CUSTOM RESPONSE\n\n    Default: NO ACTION  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"custom-error-page",children:(0,t.jsx)(r.strong,{children:"Custom Error Page"})}),"\n",(0,t.jsx)(r.p,{children:"User can add custom error page that will be visible to end-users."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Custom Error Page\n\n    Default: Blank\n"})})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,l={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,s)&&!d.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:a,props:l,_owner:o.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},95405:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/errorrules-29e15860e38a70e7f8823fc8ead9cadb.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var s=n(96540);const t={},l=s.createContext(t);function i(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);