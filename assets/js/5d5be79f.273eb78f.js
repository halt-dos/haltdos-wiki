/*! For license information please see 5d5be79f.273eb78f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[14284],{54655:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"docs/waf/ssl_settings","title":"SSL Settings","description":"Overview","source":"@site/community/docs/waf/ssl_settings.md","sourceDirName":"docs/waf","slug":"/docs/waf/ssl_settings","permalink":"/community/docs/waf/ssl_settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"community_sidebar","previous":{"title":"Operational Settings","permalink":"/community/docs/waf/operational"},"next":{"title":"Geo Fencing","permalink":"/community/docs/waf/geo_fencing"}}');var t=i(74848),r=i(28453);const o={sidebar_position:1},l="SSL Settings",d={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4},{value:"Enable SSL Offloading",id:"enable-ssl-offloading",level:5},{value:"SSL Certificate",id:"ssl-certificate",level:5},{value:"SSL Cipher Suites",id:"ssl-cipher-suites",level:5},{value:"SSL Session Caching",id:"ssl-session-caching",level:5},{value:"SSL Session Timeout",id:"ssl-session-timeout",level:5}];function a(e){const s={h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"ssl-settings",children:"SSL Settings"})}),"\n",(0,t.jsx)(s.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"It provides functionality to support SSL offloading based on configurations. As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"SSL Settings",src:i(21397).A+"",width:"1907",height:"904"})}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Go To ",(0,t.jsx)(s.strong,{children:"WAF"})," > ",(0,t.jsx)(s.strong,{children:"SSL Settings"})]}),"\n",(0,t.jsx)(s.li,{children:"Configure your Settings"}),"\n",(0,t.jsxs)(s.li,{children:["Click ",(0,t.jsx)(s.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameters"}),(0,t.jsx)(s.th,{children:"Accepted value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable SSL Offloading"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SSL Certificate"}),(0,t.jsx)(s.td,{children:"Drop-down"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SSL Cipher Suites"}),(0,t.jsx)(s.td,{children:"Drop-down"}),(0,t.jsx)(s.td,{children:"Intermediate"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SSL Session Caching"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SSL Session Timeout"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"5"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.h5,{id:"enable-ssl-offloading",children:"Enable SSL Offloading"}),"\n",(0,t.jsx)(s.p,{children:"Users are allowed to specify if the solution should offload SSL traffic."}),"\n",(0,t.jsx)(s.h5,{id:"ssl-certificate",children:"SSL Certificate"}),"\n",(0,t.jsx)(s.p,{children:"Users are allowed to specify SSL certificate for Encryption / Decryption."}),"\n",(0,t.jsx)(s.h5,{id:"ssl-cipher-suites",children:"SSL Cipher Suites"}),"\n",(0,t.jsx)(s.p,{children:"Users are allowed to specify the security / compatibility of SSL with modern web browsers."}),"\n",(0,t.jsx)(s.h5,{id:"ssl-session-caching",children:"SSL Session Caching"}),"\n",(0,t.jsx)(s.p,{children:"Users are allowed to specify the ssl session caching"}),"\n",(0,t.jsx)(s.h5,{id:"ssl-session-timeout",children:"SSL Session Timeout"}),"\n",(0,t.jsx)(s.p,{children:"Users are allowed to specify the ssl session timeout."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,s,i)=>{var n=i(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,i){var n,r={},c=null,a=null;for(n in void 0!==i&&(c=""+i),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,n)&&!d.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:t,type:e,key:c,ref:a,props:r,_owner:l.current}}s.Fragment=r,s.jsx=c,s.jsxs=c},74848:(e,s,i)=>{e.exports=i(21020)},21397:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/ssl_settings-0c67d9af26b894350ee47a1e7da8e144.png"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var n=i(96540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);