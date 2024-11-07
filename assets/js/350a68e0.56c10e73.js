/*! For license information please see 350a68e0.56c10e73.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[79355],{57431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"kb/waf/kb-1005","title":"KB:1005","description":"---------","source":"@site/versioned_docs/version-6.0/kb/waf/kb-1005.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1005","permalink":"/v6/kb/waf/kb-1005","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"kb_sidebar","previous":{"title":"KB:1004","permalink":"/v6/kb/waf/kb-1004"},"next":{"title":"KB:1006","permalink":"/v6/kb/waf/kb-1006"}}');var r=n(74848),s=n(28453);const o={sidebar_position:5},a="KB:1005",c={},l=[];function p(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"kb1005",children:"KB:1005"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"how-to-configure-multiple-security-profiles-for-complex-application-",children:"How to configure multiple security profiles for complex application ?"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,r.jsx)(t.p,{children:"The client wants the Application to behave for a set of user in different way or client wants to configure different type of Application behind the WAF."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Solution"})}),"\n",(0,r.jsx)(t.p,{children:"The client can achieve the above requirement by configuring different profile."}),"\n",(0,r.jsxs)(t.p,{children:["Example ",":We"," have DEFAULT ",(0,r.jsx)(t.a,{href:"/v6/enterprise/waf/listener/profiles/",children:(0,r.jsx)(t.strong,{children:"Profiles"})}),",in which we configured that application will not handle the POST request using ",(0,r.jsx)(t.a,{href:"/v6/enterprise/waf/listener/profiles/policy/web_policy",children:(0,r.jsx)(t.strong,{children:"Web Policy"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1005",src:n(34489).A+"",width:"1574",height:"647"})}),"\n",(0,r.jsx)(t.p,{children:"After Policy is applied,WAF will automatically block the POST request."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1005",src:n(38351).A+"",width:"1844",height:"894"})}),"\n",(0,r.jsx)(t.p,{children:"And now we are configuring the Profile for another set of users and in which we have configured that it will handle POST request."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1005",src:n(99334).A+"",width:"1546",height:"846"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1005",src:n(48729).A+"",width:"1535",height:"627"})}),"\n",(0,r.jsx)(t.p,{children:"After configuring the profile, WAF is allowing the POST request for the same application."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"kb-1005",src:n(42480).A+"",width:"1836",height:"929"})}),"\n",(0,r.jsx)(t.p,{children:"In the same way, the client can configure the Profile for different application types (i.e. websites, web socket)."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,p=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:p,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},34489:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kb5-5c59db516136fb56115990ca3a282e6e.png"},38351:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kb52-ddab7079249e9163f372a40a585e9ecb.png"},99334:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kb53-1ff6fc4ab049ea2c75925a73812b2e3e.png"},48729:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kb54-cd7fc57aed90af042ba2d037e0228fe0.png"},42480:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/kb55-1a303e1798756d97f94d6058fe7bb310.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);