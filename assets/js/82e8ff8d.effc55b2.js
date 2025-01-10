/*! For license information please see 82e8ff8d.effc55b2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27398],{11095:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"cloud/waf/listener/profiles/rules/whitelist_rules","title":"Whitelist Rule","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/rules/whitelist_rules.md","sourceDirName":"cloud/waf/listener/profiles/rules","slug":"/cloud/waf/listener/profiles/rules/whitelist_rules","permalink":"/cloud/waf/listener/profiles/rules/whitelist_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"cloud_sidebar","previous":{"title":"Rate Limit Rules","permalink":"/cloud/waf/listener/profiles/rules/ratelimit_rules"},"next":{"title":"Response Filtering Rule","permalink":"/cloud/waf/listener/profiles/rules/response_rules"}}');var r=t(74848),n=t(28453);const l={sidebar_position:5},o="Whitelist Rule",a={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Custom Rule IDs</strong>",id:"custom-rule-ids",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"whitelist-rule",children:"Whitelist Rule"})}),"\n",(0,r.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.\nWhitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations.\nHere\u2019s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network.'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Whitelist Rule",src:t(77680).A+"",width:"1910",height:"900"})}),"\n",(0,r.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.strong,{children:"WAF"})," > ",(0,r.jsx)(s.strong,{children:"Listeners"})," > ",(0,r.jsx)(s.strong,{children:"Profiles"})," > ",(0,r.jsx)(s.strong,{children:"Rules"})," > ",(0,r.jsx)(s.strong,{children:"Whitelist Rules"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Click on the Add Rule button and a pop-up box will open."}),"\n",(0,r.jsx)(s.li,{children:"Configure the Fields that are present."}),"\n",(0,r.jsx)(s.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.h5,{id:"rule-name",children:(0,r.jsx)(s.strong,{children:"Rule Name"})}),"\n",(0,r.jsx)(s.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(s.h5,{id:"rule-message",children:(0,r.jsx)(s.strong,{children:"Rule Message"})}),"\n",(0,r.jsx)(s.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(s.h5,{id:"rule-priority",children:(0,r.jsx)(s.strong,{children:"Rule Priority"})}),"\n",(0,r.jsx)(s.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,r.jsx)(s.h5,{id:"uri",children:(0,r.jsx)(s.strong,{children:"URI"})}),"\n",(0,r.jsx)(s.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: Regex\n\n    Default: Blank  \n"})}),"\n",(0,r.jsx)(s.h5,{id:"method",children:(0,r.jsx)(s.strong,{children:"Method"})}),"\n",(0,r.jsx)(s.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: All\n"})}),"\n",(0,r.jsx)(s.h5,{id:"custom-rule-ids",children:(0,r.jsx)(s.strong,{children:"Custom Rule IDs"})}),"\n",(0,r.jsx)(s.p,{children:"Users are allowed to specify the rule/mitigation ID that needs to be whitelisted, so that action against that request will be allowed."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"    Accepted values: Select custom rule ID\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(s.h5,{id:"add-condition",children:(0,r.jsx)(s.strong,{children:"Add Condition"})}),"\n",(0,r.jsx)(s.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,r.jsxs)(s.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,r.jsx)(s.a,{href:"/cloud/waf/listener/profiles/rules/ruleCond",children:(0,r.jsx)(s.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,s,t)=>{var i=t(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var i,n={},d=null,c=null;for(i in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,i)&&!a.hasOwnProperty(i)&&(n[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===n[i]&&(n[i]=s[i]);return{$$typeof:r,type:e,key:d,ref:c,props:n,_owner:o.current}}s.Fragment=n,s.jsx=d,s.jsxs=d},74848:(e,s,t)=>{e.exports=t(21020)},77680:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/whitelistRule-88ffbb2a3db01f8370d19f0a976b5629.png"},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var i=t(96540);const r={},n=i.createContext(r);function l(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);