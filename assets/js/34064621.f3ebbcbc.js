/*! For license information please see 34064621.f3ebbcbc.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78445],{2729:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"enterprise/waf/listener/listener","title":"Listener","description":"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/listener.md","sourceDirName":"enterprise/waf/listener","slug":"/enterprise/waf/listener/","permalink":"/v6/enterprise/waf/listener/","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Machine Learning","permalink":"/v6/enterprise/waf/machine-learning"},"next":{"title":"Settings","permalink":"/v6/enterprise/waf/listener/settings"}}');var s=r(74848),i=r(28453);const o={},l="Listener",c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"listener",children:"Listener"})}),"\n",(0,s.jsx)(n.p,{children:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Listener",src:r(99415).A+"",width:"1280",height:"412"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Listener",src:r(98846).A+"",width:"540",height:"520"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-",children:"How to Use :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Stack"})," > ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add Listener button."})]}),"\n",(0,s.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save. Changes"})]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Accepted Values"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sub Domain"}),(0,s.jsx)(n.td,{children:"Website Name"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reference"}),(0,s.jsx)(n.td,{children:"Clone existing Listener setting for new sub-domain"}),(0,s.jsx)(n.td,{children:"Empty"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Service Type"}),(0,s.jsx)(n.td,{children:"Drop-down"}),(0,s.jsx)(n.td,{children:"HTTP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Origin Servers & port"}),(0,s.jsx)(n.td,{children:"Server IP\u2019s with listening port(Ex. 8.8.8.8:80)"}),(0,s.jsx)(n.td,{children:"Blank"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["1.",(0,s.jsx)(n.strong,{children:"Sub Domain"})," :\r\nThis option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty."]}),"\n",(0,s.jsxs)(n.p,{children:["2.",(0,s.jsx)(n.strong,{children:"Reference"})," :\r\nThis option allows user to create new listener with different sub-domain by modifying an existing listener. It clones the same configuration in the new listener."]}),"\n",(0,s.jsxs)(n.p,{children:["3.",(0,s.jsx)(n.strong,{children:"Service Type"}),":\r\nThis option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP, UDP."]}),"\n",(0,s.jsxs)(n.p,{children:["4.",(0,s.jsx)(n.strong,{children:"Origin Servers"}),":\r\nThis option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},98846:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/addlistener-1192d49157abd8034087b895040f2b0d.png"},99415:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/listener-dfd8c9bcab9c86e457b0c9ed52075169.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);