/*! For license information please see 9bfc6cbd.4a14e1ce.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64200],{19083:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/tamper_rules","title":"Tamper Rules","description":"Overview","source":"@site/docs/enterprise/waf/listener/profiles/rules/tamper_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/tamper_rules","permalink":"/enterprise/waf/listener/profiles/rules/tamper_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"waf_sidebar","previous":{"title":"Rule Condition","permalink":"/enterprise/waf/listener/profiles/rules/conditions"},"next":{"title":"Correlation Rules","permalink":"/enterprise/waf/listener/profiles/rules/correlation_rules"}}');var l=t(74848),s=t(28453);const i={sidebar_position:8},a="Tamper Rules",o={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Tamper Action</strong>",id:"tamper-action",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"Attribute Extraction",id:"attribute-extraction",level:3},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"**Extract From **",id:"extract-from-",level:5},{value:"<strong>Parameter</strong>",id:"parameter",level:5},{value:"<strong>Attribute Validation</strong>",id:"attribute-validation",level:3},{value:"<strong>URI</strong>",id:"uri-1",level:5},{value:"<strong>Method</strong>",id:"method-1",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase-1",level:5},{value:"<strong>Extract From</strong>",id:"extract-from",level:5},{value:"<strong>Parameter</strong>",id:"parameter-1",level:5}];function c(e){const r={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"tamper-rules",children:"Tamper Rules"})}),"\n",(0,l.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(r.p,{children:"The Tamper rule is a feature of Haltdos WAF that provides encryption for the user input fields to protect from browser based malware stealing user's credentials, It also validates hidden input fields."}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{alt:"Tamper Rule",src:t(25211).A+"",width:"1907",height:"884"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{alt:"Tamper Rule",src:t(62548).A+"",width:"1910",height:"900"})}),"\n",(0,l.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["Follow the links: ",(0,l.jsx)(r.strong,{children:"WAF"})," > ",(0,l.jsx)(r.strong,{children:"Listener"})," >  ",(0,l.jsx)(r.strong,{children:"Profiles"})," > ",(0,l.jsx)(r.strong,{children:"Rules"})," > ",(0,l.jsx)(r.strong,{children:"Tamper Rules"})]}),"\n",(0,l.jsx)(r.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,l.jsx)(r.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.h5,{id:"rule-name",children:(0,l.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alphanumeric input."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"rule-message",children:(0,l.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"rule-priority",children:(0,l.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,l.jsx)(r.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"tamper-action",children:(0,l.jsx)(r.strong,{children:"Tamper Action"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the tamper action to be taken for the request matched."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Encrypt / Obfuscate / Hash / Protect against Defacement\n\n    Default: Blank \n"})}),"\n",(0,l.jsx)(r.h5,{id:"rule-action",children:(0,l.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. Drop & Record Request, Record Request, Bypass Request, Temporary Blacklist Src IP, Redirect, Send Challenge, Send Response, Tarpit Src IP, No Action, Skip Learning, Send Empty Response."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Accepted values: DROP / RECORD / BYPASSED / TMP_BLACKLIST / REDIRECT / SEND_CAPTCHA / SEND_CRYPTO_CHALLENGE / SEND_RESPONSE / SEND_RESPONSE_WITHOUT_CODE / SET_RESPONSE_CODE / TARPIT / NO_ACTION / SKIP_LEARNING / EMPTY_RESPONSE / TERMINATE_CONNECTION / BLOCK_USER_SESSION\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h3,{id:"attribute-extraction",children:"Attribute Extraction"}),"\n",(0,l.jsx)(r.h5,{id:"uri",children:(0,l.jsx)(r.strong,{children:"URI"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:"example"})," - /login"]}),"\n"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"method",children:(0,l.jsx)(r.strong,{children:"Method"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"evaluation-phase",children:(0,l.jsx)(r.strong,{children:"Evaluation Phase"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Response Phase\n\n    Default: 0  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"extract-from-",children:"**Extract From **"}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the location from where you want to extract the attribute i.e. Field, Cookie, Header, Body, HTML."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Header Name / Header Value / Cookie Name / Cookie Value / Body Name/ Bdy Value / Argument Name / Argument Value / Body / HTML Head / HTML Footer\n\n    Default: 0  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"parameter",children:(0,l.jsx)(r.strong,{children:"Parameter"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the parameter which will be used for the rule for extraction."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h3,{id:"attribute-validation",children:(0,l.jsx)(r.strong,{children:"Attribute Validation"})}),"\n",(0,l.jsx)(r.h5,{id:"uri-1",children:(0,l.jsx)(r.strong,{children:"URI"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"method-1",children:(0,l.jsx)(r.strong,{children:"Method"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the HTTP method for the rule to validate when matched with the request."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"evaluation-phase-1",children:(0,l.jsx)(r.strong,{children:"Evaluation Phase"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Response Phase\n\n    Default: 0  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"extract-from",children:(0,l.jsx)(r.strong,{children:"Extract From"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to select the location from where you want to validate the attribute i.e. Header, Cookie, Body, Argument Name or Value."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: Header Name / Header Value / Cookie Name / Cookie Value / Body Name/ Bdy Value / Argument Name / Argument Value / Body / HTML Head / HTML Footer\n\n    Default: 0  \n"})}),"\n",(0,l.jsx)(r.h5,{id:"parameter-1",children:(0,l.jsx)(r.strong,{children:"Parameter"})}),"\n",(0,l.jsx)(r.p,{children:"Users are allowed to specify the parameter which will be used for the rule for extraction."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},21020:(e,r,t)=>{var n=t(96540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:l,type:e,key:d,ref:c,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},25211:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/WAFproTamperRule-45909d4517c0cb10bb8ed9766cabbb95.png"},62548:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/tamperRule2-3261eec6effa4a792edd078d94f1dc80.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const l={},s=n.createContext(l);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);