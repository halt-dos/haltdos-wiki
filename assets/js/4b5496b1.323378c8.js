/*! For license information please see 4b5496b1.323378c8.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[42404],{33742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"kb/waf/kb-1001","title":"KB: 1001","description":"---","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1001.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1001","permalink":"/v6/kb/waf/kb-1001","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"kb_sidebar","previous":{"title":"WAF","permalink":"/v6/kb/waf/"},"next":{"title":"KB: 1002","permalink":"/v6/kb/waf/kb-1002"}}');var s=r(74848),i=r(28453);const o={sidebar_position:1},c="KB: 1001",a={},d=[];function h(e){const t={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"kb-1001",children:"KB: 1001"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h1,{id:"how-to-configure-http-redirection-",children:"How to configure HTTP Redirection ?"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Problem Statement 1"})}),"\n",(0,s.jsx)(t.p,{children:"The client wants to redirect its HTTP sites to the HTTPS site temporarily."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Solution"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Steps to Solve"})}),"\n",(0,s.jsx)(t.p,{children:"The client can achieve the above requirement by utilizing the redirection Rule feature of the WAF."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(81621).A+"",width:"949",height:"434"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(32070).A+"",width:"927",height:"745"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(29615).A+"",width:"872",height:"770"})}),"\n",(0,s.jsx)(t.p,{children:"As one can observe, the redirection rule in WAF is temporarily redirecting traffic that is coming on HTTP site to HTTPS site with the status code of 302, as per the settings made in the redirection rule."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Problem Statement  2"})}),"\n",(0,s.jsx)(t.p,{children:"The client requires to have a redirection rule for their HTTP website to HTTPS website with permanent redirection"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Solution"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Steps to Solve"})}),"\n",(0,s.jsx)(t.p,{children:"The above scenario can be achieved by setting the redirection rule with the response code of 301 : Permanent Redirect."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(81621).A+"",width:"949",height:"434"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(63158).A+"",width:"927",height:"745"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"kb-1001.md",src:r(15670).A+"",width:"819",height:"774"})}),"\n",(0,s.jsx)(t.p,{children:"As you can observe, We are getting the expected response with status code 301, as per the set configuration."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Please ensure to clear your cached data from browser to revert back from permanent redirect, as a local copy gets saved in cache, and will keep redirecting even if the rule is deleted from the WAF GUI."]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,h=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:h,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},29615:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/kb(2)-ea3735f28edf70e5c000ad9a99c2600a.png"},32070:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/kb2-d58559387d2d5868b9ef37cb0febab82.png"},15670:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/kbb-603ba85763e7a4b82f06fced2db59b3b.png"},63158:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/kbredirect-d58559387d2d5868b9ef37cb0febab82.png"},81621:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/redirectionrule-25ddb32bf46011332ecd81df47abaab8.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);