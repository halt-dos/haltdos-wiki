/*! For license information please see d36a6274.a317c2e8.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[23818],{56747:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"enterprise/adc/listeners/listeners","title":"Listeners","description":"Used to configure websites and servers.","source":"@site/versioned_docs/version-6.0/enterprise/adc/listeners/listeners.md","sourceDirName":"enterprise/adc/listeners","slug":"/enterprise/adc/listeners/","permalink":"/v6/enterprise/adc/listeners/","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Application Delivery Controller","permalink":"/v6/enterprise/adc"},"next":{"title":"Listener Settings","permalink":"/v6/enterprise/adc/listeners/listener_settings"}}');var s=r(74848),t=r(28453);const l={},o="Listeners",d={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Domain/ Virtual IP",id:"domain-virtual-ip",level:4},{value:"Reference",id:"reference",level:4},{value:"Service Type",id:"service-type",level:4},{value:"Origin Servers",id:"origin-servers",level:4}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"listeners",children:"Listeners"})}),"\n",(0,s.jsx)(n.p,{children:"Used to configure websites and servers."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Listeners are used for collecting set of websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Listener1",src:r(96170).A+"",width:"1813",height:"885"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Stack"})," > ",(0,s.jsx)(n.a,{href:"/enterprise/adc",children:(0,s.jsx)(n.strong,{children:"SLB"})})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add Listener"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Listener2",src:r(45153).A+"",width:"534",height:"516"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"SETTINGS"}),(0,s.jsx)(n.th,{children:"ACCEPTED VALUES"}),(0,s.jsx)(n.th,{children:"DEFAULT"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Domain/ Virtual IP"}),(0,s.jsx)(n.td,{children:"Website Name"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reference"}),(0,s.jsx)(n.td,{children:"Clone existing Listener setting for new sub-domain"}),(0,s.jsx)(n.td,{children:"Empty"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Service Type"}),(0,s.jsx)(n.td,{children:"Drop-down"}),(0,s.jsx)(n.td,{children:"HTTP"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Origin Servers & port"}),(0,s.jsx)(n.td,{children:"Server IPs with listening port(Ex. 8.8.8.8:80)"}),(0,s.jsx)(n.td,{children:"Blank"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,s.jsx)(n.h4,{id:"domain-virtual-ip",children:"Domain/ Virtual IP"}),"\n",(0,s.jsx)(n.p,{children:"This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection."}),"\n",(0,s.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(n.p,{children:"This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener."}),"\n",(0,s.jsx)(n.h4,{id:"service-type",children:"Service Type"}),"\n",(0,s.jsxs)(n.p,{children:["This field specifies the type of service for the subdomain i.e. ",(0,s.jsx)(n.strong,{children:"HTTP, TCP, UDP"}),". Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols."]}),"\n",(0,s.jsx)(n.h4,{id:"origin-servers",children:"Origin Servers"}),"\n",(0,s.jsx)(n.p,{children:"This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations."}),"\n",(0,s.jsx)(n.p,{children:"Following configurations can be managed by clicking on the newly added listener name."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var i=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var i,t={},c=null,a=null;for(i in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,i)&&!d.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:a,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},96170:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/listener1-42961d062b4e46127234df3e537f705e.png"},45153:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/listener2-1ac7087279ec31ceb5d72390a8a3951e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);