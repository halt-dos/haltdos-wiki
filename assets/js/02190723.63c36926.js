/*! For license information please see 02190723.63c36926.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[49329],{9624:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/redirection_rules","title":"Redirection Rules","description":"---","source":"@site/docs/enterprise/adc/listeners/rules/redirection_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/redirection_rules","permalink":"/enterprise/adc/listeners/rules/redirection_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"adc_sidebar","previous":{"title":"Header Rules","permalink":"/enterprise/adc/listeners/rules/header_rules"},"next":{"title":"Policy Rules","permalink":"/enterprise/adc/listeners/rules/policy_rules"}}');var t=n(74848),i=n(28453);const l={sidebar_position:3},c="Redirection Rules",o={},d=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Match URI</strong>",id:"match-uri",level:5},{value:"<strong>Forward URL</strong>",id:"forward-url",level:5},{value:"<strong>Response Code</strong>",id:"response-code",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"redirection-rules",children:"Redirection Rules"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Redirection Rules is a feature of Haltdos SLB that allows application owners to redirect a request to another URL, temporarily or permanently on matching a particular URL pattern."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Redirection rule",src:n(98446).A+"",width:"1440",height:"891"})}),"\n",(0,t.jsx)(r.h4,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to ",(0,t.jsx)(r.strong,{children:"Stack"})," > ",(0,t.jsx)(r.a,{href:"/enterprise/adc",children:(0,t.jsx)(r.strong,{children:"SLB"})})," > ",(0,t.jsx)(r.a,{href:"/enterprise/adc/listeners/",children:(0,t.jsx)(r.strong,{children:"Listeners"})})," > ",(0,t.jsx)(r.strong,{children:"Rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Redirection Rules"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Add Rule"})," button."]}),"\n",(0,t.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(r.h5,{id:"rule-name",children:(0,t.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,t.jsx)(r.p,{children:"User can specify the rule name for redirection rule"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-message",children:(0,t.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,t.jsx)(r.p,{children:"User can specify message that specifies the purpose for this particular rule."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-enabled",children:(0,t.jsx)(r.strong,{children:"Rule Enabled"})}),"\n",(0,t.jsx)(r.p,{children:"Users can enable or disable the rule."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Enabled    \n"})}),"\n",(0,t.jsx)(r.h5,{id:"rule-priority",children:(0,t.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,t.jsx)(r.p,{children:"The user can specify the priority for this particular rule."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})}),"\n",(0,t.jsx)(r.h5,{id:"match-uri",children:(0,t.jsx)(r.strong,{children:"Match URI"})}),"\n",(0,t.jsx)(r.p,{children:"The user can specify the URL that needs to be redirected."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: URI\n\n    Default: Blank  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"forward-url",children:(0,t.jsx)(r.strong,{children:"Forward URL"})}),"\n",(0,t.jsx)(r.p,{children:"The user can specify the URL where the match URL needs to be redirected."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: URL\n\n    Default: None  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"response-code",children:(0,t.jsx)(r.strong,{children:"Response Code"})}),"\n",(0,t.jsx)(r.p,{children:"The user can specify the response code as temporary or permanent redirect."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: 301, 302\n\n    Default: 302 - Temporary Redirect  \n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"301"})," - Permanent Redirect"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"302"})," - Temporary Redirect"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,i={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!o.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:c.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},98446:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/redirection_rule-3911f6693af0eeb3a218a9d7924f0e0a.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var s=n(96540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);