/*! For license information please see 1b2f5baa.89bb982c.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[28029],{71461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"enterprise/waf/listener/Setting/fingerPrint","title":"Fingerprint","description":"User can specify fingerprint settings on this page for Listener","source":"@site/docs/enterprise/waf/listener/Setting/fingerPrint.md","sourceDirName":"enterprise/waf/listener/Setting","slug":"/enterprise/waf/listener/Setting/fingerPrint","permalink":"/enterprise/waf/listener/Setting/fingerPrint","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"waf_sidebar","previous":{"title":"Learning Setting","permalink":"/enterprise/waf/listener/Setting/learningSetting"},"next":{"title":"Challenge","permalink":"/enterprise/waf/listener/Setting/challenge-response"}}');var i=r(74848),s=r(28453);const o={sidebar_position:4},l="Fingerprint",c={},a=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Token Request URI</strong>",id:"token-request-uri",level:5},{value:"<strong>Token Rotation Duration</strong>",id:"token-rotation-duration",level:5},{value:"<strong>Token Error Margin Duration</strong>",id:"token-error-margin-duration",level:5},{value:"<strong>Token Name</strong>",id:"token-name",level:5},{value:"<strong>Allow Rooted Devices</strong>",id:"allow-rooted-devices",level:5},{value:"<strong>Allow Emulator</strong>",id:"allow-emulator",level:5},{value:"<strong>Bot Token Location</strong>",id:"bot-token-location",level:5},{value:"<strong>Token Encryption Key</strong>",id:"token-encryption-key",level:5},{value:"<strong>Fingerprint Expiry</strong>",id:"fingerprint-expiry",level:5},{value:"<strong>User Session Location</strong>",id:"user-session-location",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fingerprint",children:"Fingerprint"})}),"\n",(0,i.jsx)(n.p,{children:"User can specify fingerprint settings on this page for Listener"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Fingerprint Protection helps you quickly determine, manage, and mitigate automated requests."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"fingerprint",src:r(77041).A+"",width:"1907",height:"884"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"WAF"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Advanced Settings"})," > ",(0,i.jsx)(n.strong,{children:"Fingerprint"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"token-request-uri",children:(0,i.jsx)(n.strong,{children:"Token Request URI"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the URI for requesting a token. By default, it is /__verify/token/."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: /__verify/token/  \n"})}),"\n",(0,i.jsx)(n.h5,{id:"token-rotation-duration",children:(0,i.jsx)(n.strong,{children:"Token Rotation Duration"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the duration after which the token should be rotated. By default, it is 86400 seconds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 86400\n"})}),"\n",(0,i.jsx)(n.h5,{id:"token-error-margin-duration",children:(0,i.jsx)(n.strong,{children:"Token Error Margin Duration"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the duration for error margin for validating token. By default, it is 60 seconds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 60 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"token-name",children:(0,i.jsx)(n.strong,{children:"Token Name"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the name of the token to be validated. By default, it is X-Bot-Token."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: X-Bot-Token \n"})}),"\n",(0,i.jsx)(n.h5,{id:"allow-rooted-devices",children:(0,i.jsx)(n.strong,{children:"Allow Rooted Devices"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify enable it to allow rooted devices."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,i.jsx)(n.h5,{id:"allow-emulator",children:(0,i.jsx)(n.strong,{children:"Allow Emulator"})}),"\n",(0,i.jsx)(n.p,{children:"Enable it to allow emulator devices."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,i.jsx)(n.h5,{id:"bot-token-location",children:(0,i.jsx)(n.strong,{children:"Bot Token Location"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the location where the token is expected. By default, it is HEADER."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: HEADER / COOKIE / ARGS\n\n    Default: HEADER \n"})}),"\n",(0,i.jsx)(n.h5,{id:"token-encryption-key",children:(0,i.jsx)(n.strong,{children:"Token Encryption Key"})}),"\n",(0,i.jsx)(n.p,{children:"Users can specify the encryption key which will be used for token validation. By default, it is blank. To generate, click on Generate button and To download, click on the Download button."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select encryption key\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.h5,{id:"fingerprint-expiry",children:(0,i.jsx)(n.strong,{children:"Fingerprint Expiry"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the duration after which fingerprinting will be re-evaluated. By default, it is 86400 seconds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 86400\n"})}),"\n",(0,i.jsx)(n.p,{children:"Metrics: Seconds"}),"\n",(0,i.jsx)(n.h5,{id:"user-session-location",children:(0,i.jsx)(n.strong,{children:"User Session Location"})}),"\n",(0,i.jsx)(n.p,{children:"It is used to Specify the location where user session to track"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: NONE / Cookie / Header / Argument / Body / Variable\n\n    Default: NONE\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var t=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,s={},a=null,d=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},77041:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/WAFfingerpriting-3c94bc742cae642c798a69032f50de71.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);