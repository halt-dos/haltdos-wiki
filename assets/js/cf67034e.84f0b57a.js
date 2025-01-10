/*! For license information please see cf67034e.84f0b57a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[91243],{84821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scenarios/llb/scenario-5","title":"Scenario 5","description":"LLB configuration under different Scenarios","source":"@site/versioned_docs/version-6.0/scenarios/llb/scenario-5.md","sourceDirName":"scenarios/llb","slug":"/scenarios/llb/scenario-5","permalink":"/v6/scenarios/llb/scenario-5","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"llb_sidebar","previous":{"title":"Scenario 4","permalink":"/v6/scenarios/llb/scenario-4"}}');var t=r(74848),i=r(28453);const a={},o="Scenario 5",c={},l=[{value:"Steps to Configure",id:"steps-to-configure",level:3}];function d(e){const n={h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"scenario-5",children:"Scenario 5"})}),"\n",(0,t.jsx)(n.p,{children:"LLB configuration under different Scenarios"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Suppose, there is a organization which is having two ISPs from two different service providers. The first ISP link is having IP from network 2.2.2.0/28 and other is having network ID of 3.3.3.0/28.The ISP link that is having static IP addresses  (2.2.2.2) handle all the DMZ traffic.\r\nBoth ISPs are connected with LLB then there's one link which is connected to firewall. The connectivity between firewall and LLB have network of 172.16.2.0/16, firewall has IP 172.16.2.10 and 172.16.2.20 which respectively forward traffic to DMZ and LAN."}),"\n",(0,t.jsx)(n.p,{children:"Firewall later connected with DMZ and LAN network which have their own networks respectively 192.168.100.0/24 and 172.16.10.0/16."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(75177).A+"",width:"830",height:"698"})}),"\n",(0,t.jsx)(n.h3,{id:"steps-to-configure",children:"Steps to Configure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Port IP Configuration:"}),"\r\nWe need to configure 1 port as per mentioned diagram. WAN ports will be configured as static ports with static route and policies. LAN ports can be configured for mentioned IP without configuring any static route or policies."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WAN 1 IP Configuration:"}),"\r\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(10642).A+"",width:"1237",height:"743"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"WAN 2 IP Configuration:"}),"\r\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(32187).A+"",width:"1237",height:"758"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"LAN IP Configuration:"}),"\r\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(77380).A+"",width:"1238",height:"738"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interface Group Configuration:"}),"\r\nUser can add multiple group of interfaces. They need to go to Stack > LLB Interfaces."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(56973).A+"",width:"1706",height:"399"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(25206).A+"",width:"1692",height:"440"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"LLB Configuration:"}),"\r\nWe can pass the interface group and enable global load balancing by selecting this option."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(79007).A+"",width:"1708",height:"627"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(15592).A+"",width:"1690",height:"622"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SNAT Rule Configuration:"}),"\r\nWe need to Stack > LLB > Rules > Source NAT. We can configure as per our requirement then click on save changes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(63985).A+"",width:"1664",height:"858"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DNAT Rule Configuration:"}),"\r\nWe need to go to stack > LLB > Rule > DNAT Rule. Click on add rule button and after configuring you can save and functional the rule by clicking on save changes button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(42093).A+"",width:"1252",height:"654"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Policy Route Configuration:"}),"\r\nWe need to go to Stack > LLB > Rule > Policy Route. Click on Add Rule button and after configuring you can save and functional the rule by clicking on save changes button."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagram",src:r(62500).A+"",width:"1253",height:"745"})}),"\n",(0,t.jsx)(n.p,{children:"In this way, we can configure the LLB in given scenario."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var s,i={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},75177:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-1-eece111448f43e91ab2ecbf4fadf6d95.png"},42093:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-10-cecd82d6605b587d33261bb82b69b29d.png"},62500:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-11-e7349846468a390a7b55eb92126c8e88.png"},10642:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-2-335e6664372001efecbf1a148c84b011.png"},32187:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-3-6f6eda87556409d9ece91aaa4e14dfaa.png"},77380:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-4-15b50d2f226275ff91d3540c9b486479.png"},56973:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-5-affb9a5e8066c2690c0253b659a2978d.png"},25206:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-6-bb376d9e01a64935d635a0362e60c44e.png"},79007:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-7-22b3d9a2575b33554aced5c1c98fc8e1.png"},15592:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-8-a91564d9b7608484b3212fb3deb88753.png"},63985:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/scenario6-9-e76e1e9f839879b1a5b69ede5369e60e.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);