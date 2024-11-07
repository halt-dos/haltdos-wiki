/*! For license information please see 02382ae6.df57e577.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[75962],{94205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"kb/waf/kb-1008","title":"KB: 1008","description":"----------","source":"@site/versioned_docs/version-7.0/kb/waf/kb-1008.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1008","permalink":"/v7/kb/waf/kb-1008","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"kb_sidebar","previous":{"title":"KB: 1007","permalink":"/v7/kb/waf/kb-1007"},"next":{"title":"KB: 1009","permalink":"/v7/kb/waf/kb-1009"}}');var s=t(74848),r=t(28453);const o={sidebar_position:8},l="KB: 1008",a={},c=[{value:"Securing File Uploads in web application",id:"securing-file-uploads-in-web-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={a:"a",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kb-1008",children:"KB: 1008"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"securing-file-uploads-in-web-application",children:"Securing File Uploads in web application"}),"\n",(0,s.jsx)(n.h4,{id:"problem-statement",children:(0,s.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,s.jsx)(n.p,{children:"The client requires to have a safe and secure file upload for Web Applications"}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:(0,s.jsx)(n.strong,{children:"Solution"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"/v7/enterprise/waf/listener/profiles/policy/web_policy",children:(0,s.jsx)(n.strong,{children:"Web Policy"})}),"  page and configure the file extensions that should be allowed or restricted for  file upload on the Web Application."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"kb-1008",src:t(38316).A+"",width:"1816",height:"883"}),"\r\n",(0,s.jsx)(n.img,{alt:"kb-1008",src:t(59016).A+"",width:"1816",height:"356"}),"\r\n2. Specify the anticipated max file size that will be uploaded in Maximum HTTP Body Size on ",(0,s.jsx)(n.a,{href:"/v7/enterprise/waf/listener/settings",children:(0,s.jsx)(n.strong,{children:"Settings"})})," page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1008",src:t(23649).A+"",width:"1816",height:"964"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Client can also secure the file uploads by enabling ",(0,s.jsx)(n.a,{href:"/v7/enterprise/waf/listener/profiles/anti_virus",children:(0,s.jsx)(n.strong,{children:"Anti Virus"})})," scanning on the application from  page. Haltdos has a built-in antivirus which can secure the files uploaded on the Application."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1008",src:t(55592).A+"",width:"1816",height:"950"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"All malicious files will be restricted from upload and the request details can be viewed on Incident page."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var i=t(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,r={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},55592:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/antivirus_kb_1008_4-0935558f9c9fc9896b4e51dc240fc60a.png"},23649:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/settings_kb_1008_3-9c7fc31c8340c3b30542983881770811.png"},59016:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/web1_kb_1008_2-136ae64b166ddda63926118641cb15b9.png"},38316:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/web_kb_1008_1-2f67ded011d060cdc919643035d94afe.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);