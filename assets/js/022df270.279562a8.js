/*! For license information please see 022df270.279562a8.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[22694],{81282:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"cloud/waf/listener/learning","title":"Learning","description":"---","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/learning.md","sourceDirName":"cloud/waf/listener","slug":"/cloud/waf/listener/learning","permalink":"/v7/cloud/waf/listener/learning","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"cloud_sidebar","previous":{"title":"Staging Settings","permalink":"/v7/cloud/waf/listener/advanced-settings/staging-settings"},"next":{"title":"SSL Certificates","permalink":"/v7/cloud/waf/ssl_certificates"}}');var t=r(74848),s=r(28453);const o={sidebar_position:9},a="Learning",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Threat Scoring &amp; Classification",id:"threat-scoring--classification",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function c(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"learning",children:"Learning"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Haltdos\u2019s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production."}),"\n",(0,t.jsx)(n.h3,{id:"threat-scoring--classification",children:"Threat Scoring & Classification"}),"\n",(0,t.jsx)(n.p,{children:"AI /ML component of WAF solution inspects network and HTTP Request payload to generate a score for every HTTP request, header, cookie and parameter. The score is further adjusted based on behaviour analysis and fingerprinting. The final score is used to weigh and classify request as being genuine, attack, bot (along with classification). Each request or response dropped by WAF is recorded as an Events and furnishes detailed information including scoring and classification."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"WAF > Zones > Listeners > Learning"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"PARAMETERS"}),(0,t.jsx)(n.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(n.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Learning Mode"}),(0,t.jsx)(n.td,{children:"Dropdown"}),(0,t.jsx)(n.td,{children:"Learning Disabled"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sampling Rate"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Trigger Threshold"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"100000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Error Rate"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Drop Rate"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"5"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Learning Mode"}),": Specify the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sampling Rate"}),": Specify the rate of sampling of requests for learning."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Trigger Threshold"}),": Specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers mitigations."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Error Rate"}),": Specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Drop Rate"}),": Specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21020:(e,n,r)=>{var i=r(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,s={},d=null,c=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:d,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);