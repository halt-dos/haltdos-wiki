/*! For license information please see 8aa1f835.05549e6e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43114],{53433:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/error_rules","title":"Error Rules","description":"---","source":"@site/docs/enterprise/adc/listeners/rules/error_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/error_rules","permalink":"/enterprise/adc/listeners/rules/error_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"adc_sidebar","previous":{"title":"Rules","permalink":"/enterprise/adc/listeners/rules/"},"next":{"title":"Header Rules","permalink":"/enterprise/adc/listeners/rules/header_rules"}}');var t=n(74848),i=n(28453);const l={sidebar_position:1},o="Error Rules",d={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5},{value:"Add Condition",id:"add-condition",level:4}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"error-rules",children:"Error Rules"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Error Rules is a feature of Haltdos SLB that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"errorrules",src:n(15698).A+"",width:"1438",height:"899"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to ",(0,t.jsx)(r.strong,{children:"Stack"})," > ",(0,t.jsx)(r.a,{href:"/enterprise/adc",children:(0,t.jsx)(r.strong,{children:"SLB"})})," > ",(0,t.jsx)(r.a,{href:"/enterprise/adc/listeners/",children:(0,t.jsx)(r.strong,{children:"Listeners"})})," > ",(0,t.jsx)(r.strong,{children:"Rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Error rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Add Rule"})," button."]}),"\n",(0,t.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Configure the following parameters to set up the desired settings:"})}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.h5,{id:"rule-name",children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"User can mention the rule name. This will help the user to identify the rule and its usage."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-message",children:(0,t.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,t.jsx)(r.p,{children:"User can enter a rule message to add a description on the rule name."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-enabled",children:(0,t.jsx)(r.strong,{children:"Rule Enabled"})}),"\n",(0,t.jsx)(r.p,{children:"Users can enable or disable the rule."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Enabled \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-priority",children:(0,t.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,t.jsx)(r.p,{children:"User can define the rule's priority among various other custom error rules."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,t.jsx)(r.h5,{id:"http-response-codes",children:(0,t.jsx)(r.strong,{children:"HTTP Response Codes"})}),"\n",(0,t.jsx)(r.p,{children:"User can mention the HTTP response code based on the custom error rule name."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530\n\n    Default: NONE  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-action",children:(0,t.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,t.jsx)(r.p,{children:"Specifies the action to be executed when this is gets triggered"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: NO ACTION / SEND CUSTOM RESPONSE\n\n    Default: NO ACTION \n"})}),"\n",(0,t.jsx)(r.h5,{id:"custom-error-page",children:(0,t.jsx)(r.strong,{children:"Custom Error Page"})}),"\n",(0,t.jsx)(r.p,{children:"User can add custom error page that will be visible to end-users."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Custom Error Page\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(r.h4,{id:"add-condition",children:"Add Condition"}),"\n",(0,t.jsx)(r.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,t.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,t.jsx)(r.a,{href:"/enterprise/adc/listeners/rules/conditions",children:(0,t.jsx)(r.strong,{children:"Conditions"})})]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!d.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:a,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},15698:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/error_rule-5307e3d623f927e3b680363d6607fdcb.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);