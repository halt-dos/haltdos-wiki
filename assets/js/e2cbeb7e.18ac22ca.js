/*! For license information please see e2cbeb7e.18ac22ca.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8836],{20198:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"cloud/waf/listener/rules/redirectionalrules","title":"Redirection Rules","description":"These rules allow you to configure redirection for your application pages","source":"@site/docs/cloud/waf/listener/rules/redirectionalrules.md","sourceDirName":"cloud/waf/listener/rules","slug":"/cloud/waf/listener/rules/redirectionalrules","permalink":"/cloud/waf/listener/rules/redirectionalrules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"cloud_sidebar","previous":{"title":"Header Rules","permalink":"/cloud/waf/listener/rules/headerrules"},"next":{"title":"Transform Rules","permalink":"/cloud/waf/listener/rules/transformrule"}}');var s=n(74848),i=n(28453);const o={sidebar_position:3},l="Redirection Rules",d={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Message</strong>",id:"message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Match URL</strong>",id:"match-url",level:5},{value:"<strong>Forward URL</strong>",id:"forward-url",level:5},{value:"<strong>Response Code</strong>",id:"response-code",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"redirection-rules",children:"Redirection Rules"})}),"\n",(0,s.jsx)(r.p,{children:"These rules allow you to configure redirection for your application pages"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"Redirectional rules",src:n(28822).A+"",width:"1900",height:"972"})}),"\n",(0,s.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Go to ",(0,s.jsx)(r.strong,{children:"WAF"})," > ",(0,s.jsx)(r.strong,{children:"Listeners"})," > ",(0,s.jsx)(r.strong,{children:"Rules"})," > ",(0,s.jsx)(r.strong,{children:"Redirection Rules"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Click on ",(0,s.jsx)(r.strong,{children:"Add Rule"})," and set relevant parameters described in the table below."]}),"\n",(0,s.jsxs)(r.li,{children:["Click on ",(0,s.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.h5,{id:"rule-name",children:(0,s.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(r.p,{children:"Specify a user-friendly name to identify the rule. The rule name takes alphanumeric input."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(r.h5,{id:"message",children:(0,s.jsx)(r.strong,{children:"Message"})}),"\n",(0,s.jsx)(r.p,{children:"The user can add a short description of the rule. The description would explain the purpose of the rule."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(r.h5,{id:"rule-priority",children:(0,s.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(r.p,{children:"User can set the priority of the rule."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})}),"\n",(0,s.jsx)(r.h5,{id:"match-url",children:(0,s.jsx)(r.strong,{children:"Match URL"})}),"\n",(0,s.jsx)(r.p,{children:"Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: URL\n\n    Default: Blank\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The match URL should follow the format: [http(s)://",(0,s.jsx)(r.a,{href:"http://www.(",children:"www.("}),(0,s.jsx)(r.em,{children:").haltdos.io/("}),")]"]}),"\n",(0,s.jsx)(r.h5,{id:"forward-url",children:(0,s.jsx)(r.strong,{children:"Forward URL"})}),"\n",(0,s.jsxs)(r.p,{children:["The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.\nThe forward URL should follow the format: [http(s)://(",(0,s.jsx)(r.em,{children:").haltdos-1.io/("}),")]"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: URL\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(r.h5,{id:"response-code",children:(0,s.jsx)(r.strong,{children:"Response Code"})}),"\n",(0,s.jsx)(r.p,{children:"In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"    Accepted values: 301 - Permanent Redirect / 302 - Temporary Redirect\n\n    Default: 301 - Permanent Redirect\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"301 - Permanent Redirect"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"302 - Temporary Redirect"})}),"\n",(0,s.jsx)(r.h5,{id:"add-condition",children:(0,s.jsx)(r.strong,{children:"Add Condition"})}),"\n",(0,s.jsx)(r.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,s.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,s.jsx)(r.a,{href:"/cloud/waf/listener/rules/ruleCond",children:(0,s.jsx)(r.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,i={},c=null,a=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:l.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28822:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/list_redirection-e31c39be639ffc9a8de991c48c7e0151.png"},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);