/*! For license information please see 6f3c4abb.87bd6bd1.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2176],{6794:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"kb/gslb/kb-4007","title":"KB: 4007","description":"What happens when GSLB is configured to authoritative/recursive","source":"@site/docs/kb/gslb/kb-4007.md","sourceDirName":"kb/gslb","slug":"/kb/gslb/kb-4007","permalink":"/kb/gslb/kb-4007","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 4006","permalink":"/kb/gslb/kb-4006"}}');var t=n(74848),i=n(28453);const o={},c="KB: 4007",l={},h=[{value:"<strong>What happens when GSLB is configured to authoritative/recursive</strong>",id:"what-happens-when-gslb-is-configured-to-authoritativerecursive",level:3},{value:"Authoritative Mode",id:"authoritative-mode",level:4},{value:"Recursive Mode",id:"recursive-mode",level:4}];function a(e){const s={br:"br",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"kb-4007",children:"KB: 4007"})}),"\n",(0,t.jsx)(s.h3,{id:"what-happens-when-gslb-is-configured-to-authoritativerecursive",children:(0,t.jsx)(s.strong,{children:"What happens when GSLB is configured to authoritative/recursive"})}),"\n",(0,t.jsx)(s.p,{children:"In the Haltdos Global Server Load Balancer (GSLB), when you configure it to be authoritative or recursive, the backend behavior changes in terms of DNS resolution and how it handles client requests. Here's what happens in each case:"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h4,{id:"authoritative-mode",children:"Authoritative Mode"}),"\n",(0,t.jsxs)(s.p,{children:["When GSLB is set as an ",(0,t.jsx)(s.strong,{children:"authoritative"})," DNS server, it directly responds to DNS queries for a specific domain."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"kb-4007",src:n(56075).A+"",width:"1431",height:"738"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Backend Process:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"A client (or a resolver) queries the authoritative GSLB for a domain."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The GSLB checks its internal policies, such as:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Load balancing algorithms"})," (e.g., Round Robin, Least Connections, etc.)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Health monitoring"})," of backend servers"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Geolocation-based routing"})," (sending users to the nearest or most optimal server)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Based on these factors, the GSLB responds with the most suitable selected ways for the server."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Example Scenario"}),":",(0,t.jsx)(s.br,{}),"\n","A user wants to access example.com, and the GSLB is authoritative for example.com. When a DNS query is made:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The GSLB receives the query."}),"\n",(0,t.jsx)(s.li,{children:"It evaluates backend server health and policies."}),"\n",(0,t.jsx)(s.li,{children:"It responds with the best server\u2019s IP (e.g., 192.168.1.10)."}),"\n",(0,t.jsx)(s.li,{children:"The client connects to 192.168.1.10."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"recursive-mode",children:"Recursive Mode"}),"\n",(0,t.jsxs)(s.p,{children:["When GSLB is set as a ",(0,t.jsx)(s.strong,{children:"recursive"})," DNS server, it does not serve authoritative records but instead performs DNS resolution on behalf of the client."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"kb-4007",src:n(44402).A+"",width:"1410",height:"869"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Backend Process"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The client queries the GSLB for a domain (e.g., example.com)."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The GSLB, acting as a recursive resolver, looks up the domain from other DNS servers."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"It follows the normal DNS resolution process:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If cached, it returns the cached response."}),"\n",(0,t.jsx)(s.li,{children:"If not cached, it queries root DNS servers \u2192 TLD servers \u2192 authoritative servers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"After resolving the query, it returns the response to the client."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Example Scenario"}),":\r\nA user queries example.com, and the GSLB is recursive:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The GSLB receives the query."}),"\n",(0,t.jsx)(s.li,{children:"It checks its cache."}),"\n",(0,t.jsx)(s.li,{children:"If not cached, it queries DNS servers."}),"\n",(0,t.jsx)(s.li,{children:"It gets the response and returns it to the client."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,s,n)=>{var r=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,s,n){var r,i={},h=null,a=null;for(r in void 0!==n&&(h=""+n),void 0!==s.key&&(h=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,r)&&!l.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:t,type:e,key:h,ref:a,props:i,_owner:c.current}}s.Fragment=i,s.jsx=h,s.jsxs=h},74848:(e,s,n)=>{e.exports=n(21020)},56075:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/kb_4007_auth-89755a762b5d15d7b8388babe3dcd302.png"},44402:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/kb_4007_recur-2b631fddd24030c6d553055de733f557.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);