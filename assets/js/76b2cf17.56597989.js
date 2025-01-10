/*! For license information please see 76b2cf17.56597989.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10175],{74024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenarios/adc/scenario-3","title":"Scenario 3","description":"SLB configuration under different Scenarios","source":"@site/docs/scenarios/adc/scenario-3.md","sourceDirName":"scenarios/adc","slug":"/scenarios/adc/scenario-3","permalink":"/scenarios/adc/scenario-3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Scenario 2","permalink":"/scenarios/adc/scenario-2"},"next":{"title":"Application Delivery Controller","permalink":"/kb/adc/"}}');var s=t(74848),i=t(28453);const a={},c="Scenario 3",o={},d=[];function l(e){const n={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"scenario-3",children:"Scenario 3"})}),"\n",(0,s.jsx)(n.p,{children:"SLB configuration under different Scenarios"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Suppose company ABC is having two listeners example1.com and example2.com that are having two back-end server IPs 10.11.0.100/24 and 10.11.0.110/24 which are connected with the haltdos SLB using two links which are further bound with LACP  which logically become 1 interface with IP 10.11.0.11/24. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(5732).A+"",width:"1046",height:"473"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 1: Configuration of the management port"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(14092).A+"",width:"1004",height:"919"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 2: Configuration of VLAN"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(41506).A+"",width:"1429",height:"907"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(97593).A+"",width:"1287",height:"912"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(91344).A+"",width:"1297",height:"907"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 3: Configuration of the listener"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(80689).A+"",width:"839",height:"530"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Step 4: Verify the back-end server"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Diagram",src:t(26464).A+"",width:"1430",height:"343"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},5732:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/scenario3-1-7e4ba428e35908019972873ceffaa0b4.png"},14092:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/ethernet_1-6cb7e2d2b644a610371f8c179e4f2550.png"},80689:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/listeners_2-7654e0c490ffb00c3bcf229bcf32ef06.png"},26464:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/server_group_1-c5911579619c9903d95f86b43244ad0b.png"},41506:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/vlan_1-a9832c46063532da8018252d49e83c17.png"},97593:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/vlan_2-a3cbe9822768b48156defd913f8ba7e5.png"},91344:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/vlan_3-dad633bbdd74223d122745923f867856.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);