/*! For license information please see 3c2f43be.f089a200.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[85777],{8197:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"enterprise/ddos/listeners/rules/ratelimit","title":"Rate Limit Rules","description":"---","source":"@site/docs/enterprise/ddos/listeners/rules/ratelimit.md","sourceDirName":"enterprise/ddos/listeners/rules","slug":"/enterprise/ddos/listeners/rules/ratelimit","permalink":"/enterprise/ddos/listeners/rules/ratelimit","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"ddos_sidebar","previous":{"title":"Policy Rules","permalink":"/enterprise/ddos/listeners/rules/policy"},"next":{"title":"Cloud Signaling","permalink":"/enterprise/ddos/settings/cloud_signaling"}}');var i=r(74848),s=r(28453);const l={sidebar_position:5},d="Rate Limit Rules",c={},o=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Max Rate</strong>",id:"max-rate",level:5},{value:"<strong>Track Limit</strong>",id:"track-limit",level:5},{value:"<strong>Track Duration</strong>",id:"track-duration",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:5},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"rate-limit-rules",children:"Rate Limit Rules"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Rate limit rules are used to rate limit the user requests."}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"DDOS"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Rules"})," > ",(0,i.jsx)(n.strong,{children:"Rate Limit Rules"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the Rate Limit Rules."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add Rule"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click Save Changes"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rate Limit rule",src:r(54555).A+"",width:"1412",height:"841"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"SETTINGS"}),(0,i.jsx)(n.th,{children:"ACCEPTED VALUE"}),(0,i.jsx)(n.th,{children:"DEFAULT"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Rule Name"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Blank"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Rule Message"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Blank"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Rule Priority"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Rule Action"}),(0,i.jsx)(n.td,{children:"Drop Request"}),(0,i.jsx)(n.td,{children:"Drop Request"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Max Rate"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Track Limit"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"20"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Track Duration"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"rule-name",children:(0,i.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the rule name."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-message",children:(0,i.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the rule message."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-priority",children:(0,i.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-action",children:(0,i.jsx)(n.strong,{children:"Rule Action"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define what action needs to be taken when this rule condition is matched."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Drop & Record Request / Record Request / Bypass Request / Temprorary Blacklist Src IP / Send Captcha CHallenege\n\n\n    Default: Drop & Record Request\n"})}),"\n",(0,i.jsx)(n.h5,{id:"max-rate",children:(0,i.jsx)(n.strong,{children:"Max Rate"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the request rate for the page"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 10\n"})}),"\n",(0,i.jsx)(n.h5,{id:"track-limit",children:(0,i.jsx)(n.strong,{children:"Track Limit"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the track limit in order to track if the rate is exceeding the limit or not."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 20\n"})}),"\n",(0,i.jsx)(n.h5,{id:"track-duration",children:(0,i.jsx)(n.strong,{children:"Track Duration"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the time duration for which the rule will limit the request."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-condition",children:(0,i.jsx)(n.strong,{children:"Rule Condition"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Rate Limit rule",src:r(84417).A+"",width:"997",height:"564"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"SETTINGS"}),(0,i.jsx)(n.th,{children:"ACCEPTED VALUE"}),(0,i.jsx)(n.th,{children:"DEFAULT"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Find Location"}),(0,i.jsx)(n.td,{children:"Drop-Down"}),(0,i.jsx)(n.td,{children:"Source IP"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Find Parameter"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Blank"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Match Condition"}),(0,i.jsx)(n.td,{children:"Drop-Down"}),(0,i.jsx)(n.td,{children:"Contains"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Match Value"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Blank"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"find-location",children:(0,i.jsx)(n.strong,{children:"Find Location"})}),"\n",(0,i.jsx)(n.p,{children:"User can define the source location where this condition needs to be applied."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"find-parameter",children:(0,i.jsx)(n.strong,{children:"Find Parameter"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the parameter based on the location of the condition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"match-condition",children:(0,i.jsx)(n.strong,{children:"Match Condition"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"match-value",children:(0,i.jsx)(n.strong,{children:"Match Value"})}),"\n",(0,i.jsx)(n.p,{children:"The user can define what value needs to be matched with the match condition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var t=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,s={},o=null,a=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:o,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(21020)},54555:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/ratelimit-afd8bbac1a0131633a96d3fc6a1a2aa2.png"},84417:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/ratelimit2-d014db169c830b9d67ca22aa78775c8f.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);