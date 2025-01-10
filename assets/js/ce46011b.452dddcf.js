/*! For license information please see ce46011b.452dddcf.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[36165],{19818:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"cloud/waf/listener/profiles/rules/ratelimit_rules","title":"Rate Limit Rules","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/rules/ratelimit_rules.md","sourceDirName":"cloud/waf/listener/profiles/rules","slug":"/cloud/waf/listener/profiles/rules/ratelimit_rules","permalink":"/cloud/waf/listener/profiles/rules/ratelimit_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"cloud_sidebar","previous":{"title":"Firewall Rule","permalink":"/cloud/waf/listener/profiles/rules/firewall_rules"},"next":{"title":"Whitelist Rule","permalink":"/cloud/waf/listener/profiles/rules/whitelist_rules"}}');var i=n(74848),s=n(28453);const l={sidebar_position:4},o="Rate Limit Rules",a={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Limit Rate</strong>",id:"limit-rate",level:5},{value:"<strong>Limit Burst</strong>",id:"limit-burst",level:5},{value:"<strong>Limit Duration</strong>",id:"limit-duration",level:5},{value:"<strong>Increment On</strong>",id:"increment-on",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"rate-limit-rules",children:"Rate Limit Rules"})}),"\n",(0,i.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Rate limit",src:n(42100).A+"",width:"1910",height:"900"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Warning"})," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."]}),"\n",(0,i.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Follow the links: ",(0,i.jsx)(r.strong,{children:"WAF"})," > ",(0,i.jsx)(r.strong,{children:"Listener"})," > ",(0,i.jsx)(r.strong,{children:"Profiles"})," > ",(0,i.jsx)(r.strong,{children:"Rules"})," > ",(0,i.jsx)(r.strong,{children:"Rate Limit Rule"})]}),"\n",(0,i.jsx)(r.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,i.jsx)(r.li,{children:"Click on Save Changes."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.h5,{id:"rule-name",children:(0,i.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: None\n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-message",children:(0,i.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format.\n\n    Default: None\n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-priority",children:(0,i.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify the priority for the rule for execution when matched with the request."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-action",children:(0,i.jsx)(r.strong,{children:"Rule Action"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha Challenege / Tarpit Src IP / Terminate Connection / Send Crypto Challenege / Redirect / Block User Session.\n\n    Default: Record Request\n"})}),"\n",(0,i.jsx)(r.h5,{id:"limit-rate",children:(0,i.jsx)(r.strong,{children:"Limit Rate"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Max: 1000000\n\n    Min: 0\n\n    Default: 10  \n"})}),"\n",(0,i.jsx)(r.p,{children:"Metric: Per Second"}),"\n",(0,i.jsx)(r.h5,{id:"limit-burst",children:(0,i.jsx)(r.strong,{children:"Limit Burst"})}),"\n",(0,i.jsx)(r.p,{children:"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Max: 1000000\n\n    Min: 0\n\n    Default: 20  \n"})}),"\n",(0,i.jsx)(r.p,{children:"Metric: Count"}),"\n",(0,i.jsx)(r.h5,{id:"limit-duration",children:(0,i.jsx)(r.strong,{children:"Limit Duration"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify the time duration for which the rule will limit the request."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Max: 3600\n\n    Min: 0\n\n    Default: 1  \n"})}),"\n",(0,i.jsx)(r.p,{children:"Metric: Second"}),"\n",(0,i.jsx)(r.h5,{id:"increment-on",children:(0,i.jsx)(r.strong,{children:"Increment On"})}),"\n",(0,i.jsx)(r.p,{children:"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Request / Request-Size / Response-Size / Total Band Width\n\n    Default: Request\n"})}),"\n",(0,i.jsx)(r.admonition,{title:"NOTE",type:"note",children:(0,i.jsx)(r.p,{children:"Always limit burst must be greater than or equal to limit rate."})}),"\n",(0,i.jsx)(r.h5,{id:"add-condition",children:(0,i.jsx)(r.strong,{children:"Add Condition"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,i.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,i.jsx)(r.a,{href:"/cloud/waf/listener/profiles/rules/ruleCond",children:(0,i.jsx)(r.strong,{children:"Conditions"})})]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,r,n)=>{var t=n(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,d=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},42100:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/rateLimitRule-4d42752cab34765757eae4bb4aabf333.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var t=n(96540);const i={},s=t.createContext(i);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);