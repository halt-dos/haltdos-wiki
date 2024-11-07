/*! For license information please see 446d5468.78e743fa.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60344],{71749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/kb-9001","title":"KB-9001","description":"How to configure Website?","source":"@site/community/kb/kb-9001.md","sourceDirName":"kb","slug":"/kb/kb-9001","permalink":"/community/kb/kb-9001","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"community_sidebar","previous":{"title":"WAF CE Knowledge Base","permalink":"/community/kb"},"next":{"title":"KB-9002","permalink":"/community/kb/kb-9002"}}');var i=n(74848),o=n(28453);const r={},a="KB-9001",l={},c=[{value:"<strong>How to configure Website?</strong>",id:"how-to-configure-website",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"kb-9001",children:"KB-9001"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-configure-website",children:(0,i.jsx)(t.strong,{children:"How to configure Website?"})}),"\n",(0,i.jsx)(t.h4,{id:"problem-statement",children:(0,i.jsx)(t.strong,{children:"Problem Statement"})}),"\n",(0,i.jsx)(t.p,{children:"User wants to configure their application on the Haltdos CE WAF. They have to install community edition of Haltdos WAF using the Installation guide. Post installation they can use below steps to onboard their application on Haltdos WAF CE."}),"\n",(0,i.jsx)(t.h4,{id:"solution",children:(0,i.jsx)(t.strong,{children:"Solution"})}),"\n",(0,i.jsx)(t.p,{children:"The user need to follow below steps to configure a new application on the Haltdos WAF CE."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://SERVER_IP_ADDRESS:9000)"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsx)(t.p,{children:"User can log in first time with credential which they have set at the time of registering the license."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(43098).A+"",width:"1920",height:"972"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Post login, users need to add their application alias under operational settings using following path: ",(0,i.jsx)(t.strong,{children:"Home > WAF > Operational"}),". Users can add their server alias and click on ",(0,i.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Operational Settings",src:n(99722).A+"",width:"1892",height:"928"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Post adding server alias in the operational settings, user need to add the backend server using following path: ",(0,i.jsx)(t.strong,{children:"Home > WAF > Server Farm > Servers"}),". User can get details about how to configure a backend server using following link : ",(0,i.jsx)(t.a,{href:"/community/docs/waf/server_farm/servers",children:"Servers"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Servers",src:n(77144).A+"",width:"1918",height:"860"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["Post adding backend details in server farm, user need to set SSL security using SSL settings option. First user need to add SSL certificate using following path: ",(0,i.jsx)(t.strong,{children:"Home > SSL Certificate"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SSL Certificate",src:n(9112).A+"",width:"1906",height:"915"})}),"\n",(0,i.jsxs)(t.p,{children:["User can get help of guide of SSL certificate here - ",(0,i.jsx)(t.a,{href:"/community/docs/ssl_certificates",children:"SSL certificate"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SSl settings",src:n(54939).A+"",width:"1907",height:"904"})}),"\n",(0,i.jsxs)(t.p,{children:["After adding certificate on the above option, User need to go to following path to enable SSL settings : ",(0,i.jsx)(t.strong,{children:"Home > WAF > SSL Settings"}),". User can get help of following document to understand how to configure SSL settings on Haltdos WAF CE : ",(0,i.jsx)(t.a,{href:"/community/docs/waf/ssl_settings",children:"SSL Settings"})]}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Post enabling the SSL for the website user should enable a redirection rule using following path : ",(0,i.jsx)(t.strong,{children:"Home > WAF > Rules > Redirection Rule"}),". To configure the rule, User can take help from the ",(0,i.jsx)(t.a,{href:"/community/docs/waf/rules/redirection_rules",children:(0,i.jsx)(t.strong,{children:"Redirection rule"})})," document."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Redirection rule",src:n(45823).A+"",width:"1915",height:"942"})}),"\n",(0,i.jsx)(t.p,{children:"Now, all the HTTP request that are coming on Haltdos WAF CE will be redirected to HTTPs."}),"\n",(0,i.jsx)(t.p,{children:"In this way, users can onboard their application on Haltdos WAF CE."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,o={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},99722:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CE_operational_settings-a90f6a4b3b26a0fb7c021718d1085a84.png"},77144:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/CE_servers-cbc3d657653f6e1d39d2ea8b78b0315e.png"},43098:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},45823:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/redirection_rules-5f9fb50f719e1a201804619527359e24.png"},9112:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_certificates-bb324fb81d3aa6df1dc958849ff29b94.png"},54939:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ssl_settings-0c67d9af26b894350ee47a1e7da8e144.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);