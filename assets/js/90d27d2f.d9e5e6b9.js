/*! For license information please see 90d27d2f.d9e5e6b9.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[67459],{72411:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenarios/adc/scenario-2","title":"Scenario 2","description":"SLB configuration under different Scenarios","source":"@site/versioned_docs/version-6.0/scenarios/adc/scenario-2.md","sourceDirName":"scenarios/adc","slug":"/scenarios/adc/scenario-2","permalink":"/v6/scenarios/adc/scenario-2","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Scenario 1","permalink":"/v6/scenarios/adc/scenario-1"},"next":{"title":"Scenario 3","permalink":"/v6/scenarios/adc/scenario-3"}}');var t=s(74848),i=s(28453);const a={},o="Scenario 2",c={},d=[];function h(e){const n={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"scenario-2",children:"Scenario 2"})}),"\n",(0,t.jsx)(n.p,{children:"SLB configuration under different Scenarios"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Suppose company ABC is having a listener example.com which is having a back-end server IP 14.2.2.10/24 which needs to be set on ",(0,t.jsx)(n.strong,{children:"Haltdos SLB"})," device and the backend IP will be changed to 14.2.2.20 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 20. The device is having a management IP of 14.2.3.10/24. Haltdos SLB device will be connected to the switch using two ports which need to be bound with LACP protocol and then should be configured with the same VLAN 20 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device can load balance the end-user requests between back-end servers as per the configuration specified."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(67617).A+"",width:"1026",height:"436"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1: Configuration of the management port"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(18634).A+"",width:"1912",height:"890"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 2: Configuration of LACP Link Bond"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(73843).A+"",width:"1641",height:"839"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 3: Configuration of VLAN"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(90236).A+"",width:"1633",height:"850"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 3: Configuration of the listener"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(3301).A+"",width:"490",height:"474"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 4: Verify the backend server"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(31502).A+"",width:"1920",height:"907"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,h=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:h,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},67617:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-1-cd70e24e96cfee749449c59ff6b04a78.png"},18634:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-2-13108bb324f8d72a2f5397ac8cd5cd1e.png"},73843:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-3-03bada60e903f7d57d76f358a7c6c865.png"},90236:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-4-37688de850124b0b30c43c31a74fd3d2.png"},3301:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-5-6cc60467e441a55aefb9b2b16fc3acab.png"},31502:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario2-6-4bb2d341af8ae1d2e6a854d34af1ed11.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);