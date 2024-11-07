/*! For license information please see f50baff8.85f79eaa.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43737],{69242:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scenarios/adc/scenario-3","title":"Scenario 3","description":"SLB configuration under different Scenarios","source":"@site/versioned_docs/version-6.0/scenarios/adc/scenario-3.md","sourceDirName":"scenarios/adc","slug":"/scenarios/adc/scenario-3","permalink":"/v6/scenarios/adc/scenario-3","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Scenario 2","permalink":"/v6/scenarios/adc/scenario-2"},"next":{"title":"**Application Delivery Controller**","permalink":"/v6/kb/adc/"}}');var s=r(74848),i=r(28453);const a={},o="Scenario 3",c={},d=[];function l(e){const n={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scenario-3",children:"Scenario 3"})}),"\n",(0,s.jsx)(n.p,{children:"SLB configuration under different Scenarios"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Suppose company ABC is having two listeners example1.com and example2.com that are having two back-end server IPs 10.11.0.100/24 and 10.11.0.110/24 which are connected with the haltdos SLB using two links which are further bound with LACP  which logically become 1 interface with IP 10.11.0.11/24. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(5732).A+"",width:"1046",height:"473"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 1: Configuration of the management port"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(42591).A+"",width:"1678",height:"843"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 2: Configuration of VLAN"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(45654).A+"",width:"1630",height:"781"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(85737).A+"",width:"1628",height:"786"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 3: Configuration of the listener"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(91264).A+"",width:"541",height:"527"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 4: Verify the back-end server"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:r(69595).A+"",width:"1650",height:"327"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,l=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},5732:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-1-7e4ba428e35908019972873ceffaa0b4.png"},42591:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-2-339c944b2dc87133d2ed05678269fdc2.png"},45654:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-3-645153520d01c1645dc55368ae743718.png"},85737:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-4-546034303b7e0c0d6de92c232ce97d75.png"},91264:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-5-c36ea2965134d64d0a04f3fa7631f125.png"},69595:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/scenario3-6-aa650e82a4f4f2ad9028dfe04979cab3.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);