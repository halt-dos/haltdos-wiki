/*! For license information please see 20cf5270.eb599369.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[39874],{46887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"cloud/scan/overview","title":"Overview","description":"---","source":"@site/versioned_docs/version-7.0/cloud/scan/overview.md","sourceDirName":"cloud/scan","slug":"/cloud/scan/overview","permalink":"/v7/cloud/scan/overview","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"cloud_sidebar","previous":{"title":"NameServers","permalink":"/v7/cloud/dns/zone/nameservers"},"next":{"title":"Scan Profiles","permalink":"/v7/cloud/scan/scan_profiles"}}');var i=t(74848),o=t(28453);const r={sidebar_position:1},a="Overview",c={},l=[{value:"Authenticated Scanning",id:"authenticated-scanning",level:3}];function h(e){const n={h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["Haltdos Scanner is a ",(0,i.jsx)(n.strong,{children:"Website Vulnerability Scanner"})," that can quickly assess the security of a web application. It is a full-blown web application scanner, capable of performing comprehensive security assessments against any type of web application."]}),"\n",(0,i.jsx)(n.p,{children:"The scanner first crawls the target application then it sends various inputs into the parameters of the pages and looks for specific web vulnerabilities such as: SQL Injection, Cross-Site Scripting, Local File Inclusion, OS Command Injection and many more. Furthermore, the scanner also attempts to detect sensitive files from the server like backup files, old files, admin interfaces, archive files, etc."}),"\n",(0,i.jsx)(n.p,{children:"Haltdos Scanner supports both on-demand as well as scheduled scans."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"authenticated-scanning",children:"Authenticated Scanning"}),"\n",(0,i.jsx)(n.p,{children:"The Scanner can be configured to scan the target web application as an authenticated user. The authentication can be configured in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User/Password Authentication:"})," When this option is chosen, the scanner will first try to authenticate to the provided login URL and obtain a valid session cookie. This cookie will be used with all the HTTP requests done to the server, performing an authenticated scan. You have the option to check if the authentication was successful before actually starting the scan."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cookie Authentication:"})," With this option you can specify an already valid session cookie (or multiple cookies) that will be sent with each HTTP request to the server. You have to first obtain the session cookie by manually logging in to your target application with a web browser and transferring the cookie from the browser to the scanner (copy/paste)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Headers Authentication:"})," This option allows you to specify custom HTTP headers that will be sent with each request to the target application. These can be used for authentication (ex. JWT tokens, Basic Authentication, etc) or for other specific application functionality."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var s=t(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,o={},l=null,h=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)r.call(n,s)&&!c.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:i,type:e,key:l,ref:h,props:o,_owner:a.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);