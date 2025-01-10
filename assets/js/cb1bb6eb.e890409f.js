/*! For license information please see cb1bb6eb.e890409f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[57916],{30802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"kb/waf/kb-1012","title":"KB: 1012","description":"-----------","source":"@site/versioned_docs/version-7.0/kb/waf/kb-1012.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1012","permalink":"/v7/kb/waf/kb-1012","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"kb_sidebar","previous":{"title":"KB: 1011","permalink":"/v7/kb/waf/kb-1011"},"next":{"title":"KB: 1013","permalink":"/v7/kb/waf/kb-1013"}}');var o=n(74848),i=n(28453);const s={sidebar_position:12},a="KB: 1012",l={},c=[{value:"<strong>Pre-Emptive bot protection of applications that are configured behind Haltdos WAF</strong>",id:"pre-emptive-bot-protection-of-applications-that-are-configured-behind-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={a:"a",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"kb-1012",children:"KB: 1012"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"pre-emptive-bot-protection-of-applications-that-are-configured-behind-haltdos-waf",children:(0,o.jsx)(t.strong,{children:"Pre-Emptive bot protection of applications that are configured behind Haltdos WAF"})}),"\n",(0,o.jsx)(t.h4,{id:"problem-statement",children:(0,o.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,o.jsx)(t.p,{children:"The client requires that bad bots are mitigated while good bot crawlers are also allowed, as good bot crawlers are an important factor for the SEO ranking of web applications on SERP."}),"\n",(0,o.jsx)(t.h4,{id:"solution",children:(0,o.jsx)(t.strong,{children:"Solution"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"The above requirement can be achieved by enabling and deploying the bot protection feature of Haltdos WAF."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.strong,{children:"Apps"})," > ",(0,o.jsx)(t.strong,{children:"WAF"})," > ",(0,o.jsx)(t.strong,{children:"Listener"})," > ",(0,o.jsx)(t.strong,{children:"Profile"})," > ",(0,o.jsx)(t.a,{href:"/v7/enterprise/waf/listener/profiles/bot",children:(0,o.jsx)(t.strong,{children:"Bot Protection"})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"kb:1012",src:n(35688).A+"",width:"1816",height:"932"})}),"\n",(0,o.jsx)(t.p,{children:"We have built-in signatures that can identify bot reputation and can choose to either allow or drop the crawling bots. We also can whitelist certain bots like Google bot crawlers, Bing bot crawlers for the purpose of ranking on the Search Engine Result Page (SERP).\r\nBad and Suspicious crawlers can be dropped or rate limited respectively. Along with that users can also fine-tune bot request rates and track the duration of bots."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},35688:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/bot_kb_1012_1-3ef3d88248234a552b50eed43afe3d7c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);