/*! For license information please see 95a3b582.50fb3986.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[95656],{63634:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"cloud/waf/listener/listener","title":"Listener","description":"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers.","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/listener.md","sourceDirName":"cloud/waf/listener","slug":"/cloud/waf/listener/","permalink":"/v7/cloud/waf/listener/","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"cloud_sidebar","previous":{"title":"Match Finder","permalink":"/v7/cloud/waf/zones/match_finder"},"next":{"title":"Security Profile","permalink":"/v7/cloud/waf/listener/security-profile/"}}');var t=i(74848),s=i(28453);const o={sidebar_position:1},l="Listener",c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"listener",children:"Listener"})}),"\n",(0,t.jsx)(n.p,{children:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Listeners are used for configuring the websites and servers to increase throughput, optimize resource use, reduce response time, and avoid overload of any single resource."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Stack  > WAF > Zones > Listeners"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Add Listener"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SETTINGS"}),(0,t.jsx)(n.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(n.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sub Domain"}),(0,t.jsx)(n.td,{children:"Website Name"}),(0,t.jsx)(n.td,{children:"Blank"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Reference"}),(0,t.jsx)(n.td,{children:"Clone existing Listener setting for new sub-domain"}),(0,t.jsx)(n.td,{children:"Empty"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Service Type"}),(0,t.jsx)(n.td,{children:"Dropdown"}),(0,t.jsx)(n.td,{children:"Http"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Origin Servers & port"}),(0,t.jsx)(n.td,{children:"Server IP\u2019s with listening port(Ex. 8.8.8.8:80)"}),(0,t.jsx)(n.td,{children:"Blank"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Sub Domain"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Reference"})}),"\n",(0,t.jsx)(n.p,{children:"This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Service Type"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the type of service for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Origin Servers"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations."}),"\n",(0,t.jsx)(n.p,{children:"Following configurations can be managed by clicking on the newly added listener name."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,i)=>{var r=i(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var r,s={},d=null,a=null;for(r in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);