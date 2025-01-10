/*! For license information please see 1c9fb11f.268f5642.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[49292],{51546:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scenarios/llb/scenario-4","title":"Scenario 4","description":"LLB configuration under different Scenarios","source":"@site/versioned_docs/version-6.0/scenarios/llb/scenario-4.md","sourceDirName":"scenarios/llb","slug":"/scenarios/llb/scenario-4","permalink":"/v6/scenarios/llb/scenario-4","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"llb_sidebar","previous":{"title":"Scenario 3","permalink":"/v6/scenarios/llb/scenario-3"},"next":{"title":"Scenario 5","permalink":"/v6/scenarios/llb/scenario-5"}}');var t=n(74848),o=n(28453);const i={},a="Scenario 4",c={},l=[{value:"Steps",id:"steps",level:3}];function d(e){const s={h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"scenario-4",children:"Scenario 4"})}),"\n",(0,t.jsx)(s.p,{children:"LLB configuration under different Scenarios"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"Suppose, ABC org. is having two WAN connections with static and DHCP configured WAN IPs. Some of the websites are not accessible from WAN 1. The user wants traffic for those domains should always move from WAN 2."}),"\n",(0,t.jsx)(s.p,{children:"For example, let's assume the user is having two LAN connections and two WAN connections with static IP addresses. LAN 1 is using the 10.0.0.0/24 subnetwork and LAN 2 is using the 10.0.10.0/24 subnetwork. some of the LAN 2 host devices are not able to access a few website from WAN 1 which is DHCP enabled WAN Interface, so they want the IP traffic for that website should move from WAN 1 which is having static pubic IP of 15.0.23.36/30 . We have to create some policy-based routing."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Diagram",src:n(84703).A+"",width:"1049",height:"519"})}),"\n",(0,t.jsx)(s.p,{children:"As per the previous scenarios, we have already discussed how can one configure WAN/LAN links ( Refer Scenario 1 & Scenario 2 )"}),"\n",(0,t.jsx)(s.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Step 1: Add a Policy based rule"})}),"\n",(0,t.jsx)(s.p,{children:"For example, we assume a website that is not accessible from WAN 1 is  having public IP address 151.0.12.11."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Diagram",src:n(99428).A+"",width:"1354",height:"709"})}),"\n",(0,t.jsx)(s.p,{children:"In this way, we can set up the rule for website traffic that should be come in and go out from other WAN link."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,s,n)=>{var r=n(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,r)&&!c.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:a.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},84703:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/scenario4-1-6afea19a39074e75bfb9aba2291010b2.png"},99428:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/scenario4-2-2b7d9a87e78723b057a322e0f60852dc.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);