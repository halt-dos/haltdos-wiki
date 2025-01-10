/*! For license information please see 3f3bfa12.893759a6.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[59945],{65745:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenarios/adc/scenario-1","title":"Scenario 1","description":"SLB configuration under different Scenarios","source":"@site/versioned_docs/version-6.0/scenarios/adc/scenario-1.md","sourceDirName":"scenarios/adc","slug":"/scenarios/adc/scenario-1","permalink":"/v6/scenarios/adc/scenario-1","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"adc_sidebar","previous":{"title":"Haltdos ADC Deployment Scenarios","permalink":"/v6/scenarios/adc"},"next":{"title":"Scenario 2","permalink":"/v6/scenarios/adc/scenario-2"}}');var t=s(74848),i=s(28453);const a={},o="Scenario 1",c={},d=[];function l(e){const n={h1:"h1",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"scenario-1",children:"Scenario 1"})}),"\n",(0,t.jsx)(n.p,{children:"SLB configuration under different Scenarios"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Suppose company ABC is having a listener Test.com which is having a back-end server IP 15.0.0.2/24 which nee to be set on haltdos SLB device and the backend IP will be changed to 15.0.0.10 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(13618).A+"",width:"1011",height:"467"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 1: Configuration of the management port"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(44585).A+"",width:"1915",height:"896"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2: Configuration of VLAN"}),"\r\nUsers need to mention the VLAN ID and mention the backend server IP address."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(50112).A+"",width:"1914",height:"916"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 3: Configuration of Listener"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(1439).A+"",width:"481",height:"468"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Step 4: Verification of backend Server"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:s(4502).A+"",width:"1910",height:"899"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,l=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},13618:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario1-1-3c114afd0acced17a1e6fb935808a1b9.png"},44585:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario1-2-6e94063804d3936f99aebbe0d028ec23.png"},50112:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario1-3-d0efdb467f4a165827f1af6afc70c611.png"},1439:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario1-4-c3f134f0d72885c9473e21440e1ed6fe.png"},4502:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/scenario1-5-218e69dc6853b38097cf7867fb3df801.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);