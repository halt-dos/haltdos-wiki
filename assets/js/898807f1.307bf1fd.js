/*! For license information please see 898807f1.307bf1fd.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66502],{57506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/platform/stacks/stacks","title":"Stacks","description":"---","source":"@site/docs/enterprise/platform/stacks/stacks.md","sourceDirName":"enterprise/platform/stacks","slug":"/enterprise/platform/stacks/","permalink":"/enterprise/platform/stacks/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"pagination_prev":null},"sidebar":"platform_sidebar","next":{"title":"Events","permalink":"/enterprise/platform/stacks/events"}}');var r=n(74848),i=n(28453);const a={sidebar_position:0,pagination_prev:null},o="Stacks",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Stack Creation",id:"stack-creation",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"stacks",children:"Stacks"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Think of a Stack as a collection of services and settings that you create for a project or website. Many customers use just one Stack. If you manage multiple web properties that you'd like to track separately or require a different set of tools, then creating multiple stacks is the way to go."}),"\n",(0,r.jsx)(t.p,{children:"Stacks form the basis for creating, enabling, and using all Haltdos services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for your resources."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"stack-creation",children:"Stack Creation"}),"\n",(0,r.jsx)(t.p,{children:"A stack is equivalent to a license in the traditional appliance. Based on the provided license on your Haltdos appliance, appropriate stack would be configured. If your license includes virtual ADC, you can create your own vADC stack. If you are using Haltdos Centralized Management solution, you can manage multiple stacks as well."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To create a licensed Stack"})}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Home > Stacks"})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Click on Add Stack"}),"\n",(0,r.jsx)(t.li,{children:"Disable virtual ADC option"}),"\n",(0,r.jsx)(t.li,{children:"Enter valid license Id provided by Haltdos Support team."}),"\n",(0,r.jsx)(t.li,{children:"Click Save Changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To create a virtual Stack"})}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Home > Stacks"})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Click on Add Stack"}),"\n",(0,r.jsx)(t.li,{children:"Enable virtual ADC option for creating a virtual Stack (vADC)"}),"\n",(0,r.jsx)(t.li,{children:"Select an existing license that supports vADC."}),"\n",(0,r.jsx)(t.li,{children:"Click Save Changes."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Stack Subscriptions"})}),"\n",(0,r.jsx)(t.p,{children:"After the creation of the stack, the stack will be subscribed to all Apps issued to the stack. Haltdos provides various Apps like WAF, DDOS, LLB, SCAN, etc. Depending upon the license issued to you, your stack will support the respective features and capabilities. These capabilities may be further restricted based on allowed throughput limit, feature limit depending upon the subscribed license. A stack can support multiple Apps simultaneously. This means that the same stack can support capabilities of DDoS protection (DDoS App), Web Application Firewall (WAF), Server Load Balancer (SLB), etc. - all at the same time."}),"\n",(0,r.jsx)(t.admonition,{title:"NOTE:",type:"note",children:(0,r.jsx)(t.p,{children:"The limit on your stack depends upon allotted license. These limits can be increased by upgrading your current license. Contact Haltdos Sales or Support for more information."})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);