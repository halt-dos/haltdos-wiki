/*! For license information please see 55285eeb.b3322931.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27892],{30633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"enterprise/waf/listener/Setting/challenge-response","title":"Challenge","description":"Configure Javascript challenge settings","source":"@site/docs/enterprise/waf/listener/Setting/challenge-response.md","sourceDirName":"enterprise/waf/listener/Setting","slug":"/enterprise/waf/listener/Setting/challenge-response","permalink":"/enterprise/waf/listener/Setting/challenge-response","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"waf_sidebar","previous":{"title":"Fingerprint","permalink":"/enterprise/waf/listener/Setting/fingerPrint"},"next":{"title":"Web Security","permalink":"/enterprise/waf/listener/Setting/security"}}');var i=t(74848),l=t(28453);const s={sidebar_position:5},c="Challenge",a={},o=[{value:"Overview",id:"overview",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Captcha Failed Threshold</strong>",id:"captcha-failed-threshold",level:5},{value:"<strong>Captcha Unanswered Threshold</strong>",id:"captcha-unanswered-threshold",level:5},{value:"<strong>Crypto Failed Threshold</strong>",id:"crypto-failed-threshold",level:5},{value:"<strong>Crypto Unanswered Threshold</strong>",id:"crypto-unanswered-threshold",level:5},{value:"<strong>Crypto Challenge difficulty</strong>",id:"crypto-challenge-difficulty",level:5}];function h(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"challenge",children:"Challenge"})}),"\n",(0,i.jsx)(n.p,{children:"Configure Javascript challenge settings"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Haltdos provides you the ability to send Javascript challenge at client side by either throwing a Captcha Challenge or a Crypto\nChallenge.\n",(0,i.jsx)(n.img,{alt:"Challenge",src:t(63609).A+"",width:"1907",height:"884"})]}),"\n",(0,i.jsx)(n.h1,{id:"how-to-use-",children:"How to Use :"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"WAF"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Advance Settings"})," > ",(0,i.jsx)(n.strong,{children:"Challenge"})]}),"\n",(0,i.jsx)(n.li,{children:"Perform changes to default configuration."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"captcha-failed-threshold",children:(0,i.jsx)(n.strong,{children:"Captcha Failed Threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the captcha failed threshold count i.e maximum attempts given to client for completing the captcha challenge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 3 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"captcha-unanswered-threshold",children:(0,i.jsx)(n.strong,{children:"Captcha Unanswered Threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the captcha unanswered threshold i.e maximum attempts given to client for refresing the captcha challenge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 3 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"crypto-failed-threshold",children:(0,i.jsx)(n.strong,{children:"Crypto Failed Threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the captcha failed threshold count i.e maximum attempts given to client for completing the crypto challenge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 3 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"crypto-unanswered-threshold",children:(0,i.jsx)(n.strong,{children:"Crypto Unanswered Threshold"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the captcha unanswered threshold i.e maximum attempts given to client for refresing the crypto challenge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 3 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"crypto-challenge-difficulty",children:(0,i.jsx)(n.strong,{children:"Crypto Challenge difficulty"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the Crypto challenge difficulty i.e the level of crypto challange that will be sent to the client.The range is 1 - 9."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,l={},o=null,h=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:i,type:e,key:o,ref:h,props:l,_owner:c.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},63609:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/WAFchallengeResponse-f7f07bb5aa5779110da6a0bfb521ac27.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);