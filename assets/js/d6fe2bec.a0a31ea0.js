/*! For license information please see d6fe2bec.a0a31ea0.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76626],{40347:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"enterprise/waf/listener/learning","title":"Learning","description":"Enable Machine Learning in WAF","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/learning.md","sourceDirName":"enterprise/waf/listener","slug":"/enterprise/waf/listener/learning","permalink":"/v7/enterprise/waf/listener/learning","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"waf_sidebar","previous":{"title":"Rule Staging","permalink":"/v7/enterprise/waf/listener/rulestaging"},"next":{"title":"Discovery","permalink":"/v7/enterprise/waf/listener/discovery"}}');var t=r(74848),s=r(28453);const a={sidebar_position:12},o="Learning",l={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Learning Mode</strong>",id:"learning-mode",level:5},{value:"<strong>Sampling Rate</strong>",id:"sampling-rate",level:5},{value:"<strong>Trigger Threshold</strong>",id:"trigger-threshold",level:5},{value:"<strong>Error Rate</strong>",id:"error-rate",level:5},{value:"<strong>Drop Rate</strong>",id:"drop-rate",level:5},{value:"<strong>IP Prefixes</strong>",id:"ip-prefixes",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"learning",children:"Learning"})}),"\n",(0,t.jsx)(n.p,{children:"Enable Machine Learning in WAF"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Haltdos\u2019s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production."}),"\n",(0,t.jsx)(n.p,{children:"This module also defends against 0-day attacks by assigning suspicion score to every request based on anomaly based machine learning techniques. The learning requires creation of baseline during normal operations to understand user and application behavior for every URL. Once the baseline has been set, the WAF solution starts to look for anomalous patterns and block malicious 0-day attacks. As an adaptive solution, the learning continues at the set sampling rate to improve the baseline for dynamic web applications."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"learning",src:r(78740).A+"",width:"1832",height:"669"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"WAF"})," > ",(0,t.jsx)(n.strong,{children:"Listeners"})," > ",(0,t.jsx)(n.strong,{children:"Learning"})]}),"\n",(0,t.jsx)(n.li,{children:"To configure your settings."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(n.h5,{id:"learning-mode",children:(0,t.jsx)(n.strong,{children:"Learning Mode"})}),"\n",(0,t.jsx)(n.p,{children:"This option specifies the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: LEARNING DISABLED / LEARNING ONLY / LEARN & MITIGATE\n\n    Default: LEARNING DISABLED \n"})}),"\n",(0,t.jsx)(n.h5,{id:"sampling-rate",children:(0,t.jsx)(n.strong,{children:"Sampling Rate"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to specify the rate of sampling of requests for learning. This allows anomaly based machine learning to generate baseline at the specified sampling rate."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 10 \n"})}),"\n",(0,t.jsx)(n.h5,{id:"trigger-threshold",children:(0,t.jsx)(n.strong,{children:"Trigger Threshold"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers is turned on for the learn URLs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100000 \n"})}),"\n",(0,t.jsx)(n.h5,{id:"error-rate",children:(0,t.jsx)(n.strong,{children:"Error Rate"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,t.jsx)(n.p,{children:"Metrics: Minutes"}),"\n",(0,t.jsx)(n.h5,{id:"drop-rate",children:(0,t.jsx)(n.strong,{children:"Drop Rate"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,t.jsx)(n.p,{children:"Metrics: Minutes"}),"\n",(0,t.jsx)(n.h5,{id:"ip-prefixes",children:(0,t.jsx)(n.strong,{children:"IP Prefixes"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the list of IPs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: IP Prefixes \n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var i=r(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,s={},c=null,d=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},78740:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/learning-ba393da02b0840c3a27344c73fc2aaab.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);