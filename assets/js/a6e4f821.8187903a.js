/*! For license information please see a6e4f821.8187903a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[42256],{77089:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/waf/listener/rules/capturerule","title":"Capture Rules","description":"The Capture Rule in Haltdos WAF handles SSL key logging during HTTPS communication.","source":"@site/docs/enterprise/waf/listener/rules/capturerule.md","sourceDirName":"enterprise/waf/listener/rules","slug":"/enterprise/waf/listener/rules/capturerule","permalink":"/enterprise/waf/listener/rules/capturerule","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"waf_sidebar","previous":{"title":"Forwarder Rules","permalink":"/enterprise/waf/listener/rules/forwarderrule"},"next":{"title":"Upstream Rules","permalink":"/enterprise/waf/listener/rules/upstreamrules"}}');var t=n(74848),i=n(28453);const l={sidebar_position:8},o="Capture Rules",a={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"capture-rules",children:"Capture Rules"})}),"\n",(0,t.jsx)(r.p,{children:"The Capture Rule in Haltdos WAF handles SSL key logging during HTTPS communication."}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"The WAF can record the session keys (also known as pre-master secrets) used during the SSL/TLS handshake for HTTPS traffic."}),"\n",(0,t.jsx)(r.p,{children:"SSL key log files can be extracted using generated keys, which are derived based on multiple parameters such as IP address, geo-location, and other configurable conditions. The log generation process is tailored to the specific criteria defined by the user. These keys, exchanged between the client and server during the SSL/TLS handshake, are used to encrypt and decrypt data in a secure session. Logging them enables decryption of HTTPS traffic later for purposes such as analysis, debugging, or security inspection."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"capture rules",src:n(799).A+"",width:"1401",height:"830"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to ",(0,t.jsx)(r.strong,{children:"WAF"})," > ",(0,t.jsx)(r.strong,{children:"Listeners"})," > ",(0,t.jsx)(r.strong,{children:"Rules"})," > ",(0,t.jsx)(r.strong,{children:"Capture Rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Click on ",(0,t.jsx)(r.strong,{children:"Add Rule"})," and set relevant parameters described in the table below."]}),"\n",(0,t.jsxs)(r.li,{children:["Click on ",(0,t.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The WAF can record the session keys (also known as pre-master secrets) used during the SSL/TLS handshake for HTTPS traffic."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"The WAF should only log SSL keys selectively, based on specific rules or conditions."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"If the WAF is set to log SSL keys for every connection, it can be very risky because it allows all encrypted data to be decrypted, and if those logs are ever leaked or misused, sensitive information could be exposed"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(r.p,{children:["User can refer to the ",(0,t.jsx)(r.a,{href:"/kb/waf/kb-1070",children:"KB-1070"})," for complete configuration,"]})}),"\n",(0,t.jsx)(r.h5,{id:"rule-name",children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-message",children:(0,t.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,t.jsx)(r.p,{children:"Specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-priority",children:(0,t.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,t.jsx)(r.p,{children:"Specify the priority for the rule for execution when matched with the request."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,t.jsxs)(r.p,{children:["Refer to ",(0,t.jsx)(r.a,{href:"/enterprise/waf/listener/rules/ruleCond",children:"Rule Condition"})," to configure the condition."]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,s)&&!a.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:d,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},799:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/captureruleconf-b3be1a6aeb3dafe0fc50630304f0ad05.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);