/*! For license information please see b2cf78a8.9d444839.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[42006],{48516:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/adc/listeners/rules/upstream_rules","title":"Upstream Rule","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/rules/upstream_rules.md","sourceDirName":"enterprise/adc/listeners/rules","slug":"/enterprise/adc/listeners/rules/upstream_rules","permalink":"/v7/enterprise/adc/listeners/rules/upstream_rules","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"adc_sidebar","previous":{"title":"Policy Rules","permalink":"/v7/enterprise/adc/listeners/rules/policy_rules"},"next":{"title":"Rate Limit Rules","permalink":"/v7/enterprise/adc/listeners/rules/rate_limit_rules"}}');var i=n(74848),t=n(28453);const l={sidebar_position:5},o="Upstream Rule",d={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"**Rule Name **",id:"rule-name-",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Server Group</strong>",id:"server-group",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"upstream-rule",children:"Upstream Rule"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.p,{children:"If a user has defined server group and wants to use different groups depending upon different conditions then he can make use of Upstream Rules."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Upstream rule",src:n(57065).A+"",width:"1832",height:"833"})}),"\n",(0,i.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Go to Stack > ",(0,i.jsx)(r.a,{href:"/v7/enterprise/adc",children:(0,i.jsx)(r.strong,{children:"SLB"})})," > ",(0,i.jsx)(r.a,{href:"/v7/enterprise/adc/listeners/",children:(0,i.jsx)(r.strong,{children:"Listeners"})})," > ",(0,i.jsx)(r.strong,{children:"Rules"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Select the ",(0,i.jsx)(r.strong,{children:"Load Balancing Rules"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["Click ",(0,i.jsx)(r.strong,{children:"Add Rule"})," button."]}),"\n",(0,i.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,i.jsxs)(r.li,{children:["Click ",(0,i.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.h5,{id:"rule-name-",children:"**Rule Name **"}),"\n",(0,i.jsx)(r.p,{children:"User can specify the rule name."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-message",children:(0,i.jsx)(r.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(r.p,{children:"User can specify the rule message."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-enabled",children:(0,i.jsx)(r.strong,{children:"Rule Enabled"})}),"\n",(0,i.jsx)(r.p,{children:"Users can enable or disable the rule."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: 0 \n"})}),"\n",(0,i.jsx)(r.h5,{id:"rule-priority",children:(0,i.jsx)(r.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(r.p,{children:"User can specify the rule priority among other created rules in LB rules."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: Integer\n \n    Default: 0 \n"})}),"\n",(0,i.jsx)(r.h5,{id:"server-group",children:(0,i.jsx)(r.strong,{children:"Server Group"})}),"\n",(0,i.jsx)(r.p,{children:"User can specify which server group to associate with this particular rule."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: List of Server Group\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(r.h5,{id:"add-condition",children:(0,i.jsx)(r.strong,{children:"Add Condition"})}),"\n",(0,i.jsx)(r.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,i.jsxs)(r.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,i.jsx)(r.a,{href:"/v7/enterprise/adc/listeners/rules/conditions",children:(0,i.jsx)(r.strong,{children:"Conditions"})})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,t={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!d.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:c,ref:a,props:t,_owner:o.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},57065:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/upstream-641b10f3af1672764979e4325ea9c530.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(96540);const i={},t=s.createContext(i);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);