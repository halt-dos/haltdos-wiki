/*! For license information please see 4a0942b0.ac19f68f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[45687],{355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"troubleshooting/case-9006","title":"Global Whitelisting","description":"---","source":"@site/versioned_docs/version-7.0/troubleshooting/case-9006.md","sourceDirName":"troubleshooting","slug":"/troubleshooting/case-9006","permalink":"/v7/troubleshooting/case-9006","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Managing Internal Gateway Error","permalink":"/v7/troubleshooting/case-9005"},"next":{"title":"Fine-tuning WAF","permalink":"/v7/troubleshooting/case-9007"}}');var o=n(74848),s=n(28453);const l={},r="Global Whitelisting",a={},c=[{value:"Case: 9006",id:"case-9006",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"global-whitelisting",children:"Global Whitelisting"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"case-9006",children:"Case: 9006"}),"\n",(0,o.jsx)(t.h3,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsx)(t.p,{children:"The client requires to whitelist a built-in signature for all the applications configured on Haltdos WAF."}),"\n",(0,o.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Go to Global Whitelist page to add a global whitelist for all applications configured on Haltdos WAF."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(42928).A+"",width:"1920",height:"995"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"Click on Add Rule to start creating a global whitelist rule."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(70861).A+"",width:"1920",height:"995"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsx)(t.li,{children:"Fill in the details and the URI and Rule Id. Rule Ids can be obtained from incident page or FP Finder."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(67157).A+"",width:"1920",height:"995"})}),"\n",(0,o.jsx)(t.p,{children:"4.Click on Save Changes to add the Global Whitelist rule applicable for all applications configured on Haltdos WAF."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var i=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,s={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:r.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},42928:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1_troubleshooting_global_whitelist-d99a9f23e32c451fb48b79c8c534370c.png"},70861:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2_troubleshooting_add_global_whitelist-62fc209b06d435021d770a45f534e57f.png"},67157:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3_troubleshooting_addwhitelist-ff5f65bd205dfb99f212256d948eadec.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var i=n(96540);const o={},s=i.createContext(o);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);