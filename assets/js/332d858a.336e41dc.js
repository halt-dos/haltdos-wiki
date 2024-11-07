/*! For license information please see 332d858a.336e41dc.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66739],{52982:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/redirection_rules","title":"Redirection Rules","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/rules/redirection_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/redirection_rules","permalink":"/v7/enterprise/adc/listeners/rules/redirection_rules","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"adc_sidebar","previous":{"title":"Header Rules","permalink":"/v7/enterprise/adc/listeners/rules/header_rules"},"next":{"title":"Policy Rules","permalink":"/v7/enterprise/adc/listeners/rules/policy_rules"}}');var i=n(74848),t=n(28453);const l={sidebar_position:3},c="Redirection Rules",o={},d=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Match Criteria</strong>",id:"match-criteria",level:5},{value:"<strong>Forward URL</strong>",id:"forward-url",level:5},{value:"<strong>Response Code</strong>",id:"response-code",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"redirection-rules",children:"Redirection Rules"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"Redirection Rules is a feature of Haltdos SLB that allows application owners to redirect a request to another URL, temporarily or permanently on matching a particular URL pattern."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Redirection rule",src:n(57328).A+"",width:"1831",height:"756"})}),"\n",(0,i.jsx)(r.h4,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Go to Stack > ",(0,i.jsx)(r.a,{href:"/v7/enterprise/adc",children:(0,i.jsx)(r.strong,{children:"SLB"})})," > ",(0,i.jsx)(r.a,{href:"/v7/enterprise/adc/listeners/",children:(0,i.jsx)(r.strong,{children:"Listeners"})})," > ",(0,i.jsx)(r.strong,{children:"Rules"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Select the ",(0,i.jsx)(r.strong,{children:"Redirection Rules"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Click ",(0,i.jsx)(r.strong,{children:"Add Rule"})," button."]}),"\n",(0,i.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,i.jsxs)(r.li,{children:["Click ",(0,i.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(r.h5,{id:"rule-name",children:(0,i.jsx)(r.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(r.p,{children:"User can specify the rule name for redirection rule"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-message",children:(0,i.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(r.p,{children:"User can specify message that specifies the purpose for this particular rule."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-enabled",children:(0,i.jsx)(r.strong,{children:"Rule Enabled"})}),"\n",(0,i.jsx)(r.p,{children:"Specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Enabled  \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-priority",children:(0,i.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify the priority for this particular rule."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})}),"\n",(0,i.jsx)(r.h5,{id:"match-criteria",children:(0,i.jsx)(r.strong,{children:"Match Criteria"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify the URL that needs to be redirected."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank  \n"})}),"\n",(0,i.jsx)(r.h5,{id:"forward-url",children:(0,i.jsx)(r.strong,{children:"Forward URL"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify the URL where the match URL needs to be redirected."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: URL\n\n    Default: None   \n"})}),"\n",(0,i.jsx)(r.h5,{id:"response-code",children:(0,i.jsx)(r.strong,{children:"Response Code"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify the response code as temporary or permanent redirect."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: 301, 302\n\n    Default: 302 - Temporary Redirect  \n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"301"})," - Permanent Redirect"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"302"})," - Temporary Redirect"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,t={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!o.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:d,ref:a,props:t,_owner:c.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},57328:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/redirectionrule-d815105430675f431430b00777506756.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);