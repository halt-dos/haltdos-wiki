/*! For license information please see faa6cc61.585dde2c.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2736],{8058:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/ddos/geo_inspection","title":"Geo Inspection","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/ddos/geo_inspection.md","sourceDirName":"enterprise/ddos","slug":"/enterprise/ddos/geo_inspection","permalink":"/v6/enterprise/ddos/geo_inspection","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"ddos_sidebar","previous":{"title":"Signature","permalink":"/v6/enterprise/ddos/profile/signature"},"next":{"title":"Bot Protection","permalink":"/v6/enterprise/ddos/bot_protection"}}');var n=i(74848),r=i(28453);const o={sidebar_position:2},l="Geo Inspection",d={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Blacklisted Countries</strong>",id:"blacklisted-countries",level:5},{value:"<strong>Blacklisted IP Prefixes</strong>",id:"blacklisted-ip-prefixes",level:5},{value:"<strong>Whitelisted IP Prefixes</strong>",id:"whitelisted-ip-prefixes",level:5}];function a(e){const t={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"geo-inspection",children:"Geo Inspection"})}),"\n",(0,n.jsx)(t.p,{children:"Overview"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"geo_filtering",src:i(6930).A+"",width:"1518",height:"421"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:(0,n.jsx)(t.strong,{children:"How to Use:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Stack > Resource > DDoS > Geo Filtering"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configure the settings as per requirement."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click on Save to change the settings."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Settings"}),(0,n.jsx)(t.th,{children:"Accepted Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted Countries"}),(0,n.jsx)(t.td,{children:"Countries"}),(0,n.jsx)(t.td,{children:"Drop Down"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP Address with CIDR"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Whitelisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP Address with CIDR"}),(0,n.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:(0,n.jsx)(t.strong,{children:"Description:"})}),"\n",(0,n.jsx)(t.h5,{id:"blacklisted-countries",children:(0,n.jsx)(t.strong,{children:"Blacklisted Countries"})}),"\n",(0,n.jsx)(t.p,{children:"Select the list of countries from the drop-down list that will be permanently disallowed"}),"\n",(0,n.jsx)(t.h5,{id:"blacklisted-ip-prefixes",children:(0,n.jsx)(t.strong,{children:"Blacklisted IP Prefixes"})}),"\n",(0,n.jsx)(t.p,{children:"Specify multiple IP prefixes that will be permanently disallowed"}),"\n",(0,n.jsx)(t.h5,{id:"whitelisted-ip-prefixes",children:(0,n.jsx)(t.strong,{children:"Whitelisted IP Prefixes"})}),"\n",(0,n.jsx)(t.p,{children:"Specify multiple IP prefixes. Traffic to / from these IPs will permanently bypass all configured mitigations"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,t,i)=>{var s=i(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var s,r={},c=null,a=null;for(s in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:a,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},6930:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/ddos21-a36e11ccb930c97bae11b908cc9d7be7.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);