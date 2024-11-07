/*! For license information please see 3b6dcba7.81825313.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[65529],{81158:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"kb/adc/kb-2016","title":"kb-2016","description":"How customer can apply different policies on the basis of specific OS, Device or Browser.","source":"@site/versioned_docs/version-6.0/kb/adc/kb-2016.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2016","permalink":"/v6/kb/adc/kb-2016","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"kb-2015","permalink":"/v6/kb/adc/kb-2015"},"next":{"title":"kb-2017","permalink":"/v6/kb/adc/kb-2017"}}');var i=n(74848),r=n(28453);const o={},c=void 0,d={},l=[{value:"<strong>How customer can apply different policies on the basis of specific OS, Device or Browser</strong>.",id:"how-customer-can-apply-different-policies-on-the-basis-of-specific-os-device-or-browser",level:3},{value:"<strong>Problem Statement I</strong>",id:"problem-statement-i",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Problem Statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4},{value:"<strong>Problem Statement III</strong>",id:"problem-statement-iii",level:4}];function a(e){const s={h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h3,{id:"how-customer-can-apply-different-policies-on-the-basis-of-specific-os-device-or-browser",children:[(0,i.jsx)(s.strong,{children:"How customer can apply different policies on the basis of specific OS, Device or Browser"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"problem-statement-i",children:(0,i.jsx)(s.strong,{children:"Problem Statement I"})}),"\n",(0,i.jsx)(s.p,{children:"The client requires device detection to be enabled on the listener level for Client OS."}),"\n",(0,i.jsx)(s.h4,{id:"solution",children:(0,i.jsx)(s.strong,{children:"Solution"})}),"\n",(0,i.jsx)(s.p,{children:"The above requirement can be achieved by enabling device detection option under listener in Haltdos SLB."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 1"}),":- First log into the Haltdos management portal."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(10717).A+"",width:"1844",height:"397"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 2"}),":- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB > listener > listener settings"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(69478).A+"",width:"1842",height:"953"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 3"}),":- Enable the device detection option."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8495).A+"",width:"1840",height:"948"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 4"}),":- To verify device detection:- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB>Listeners>Rules>Policy rule>Add rule>Add condition>Save changes"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(65648).A+"",width:"1833",height:"951"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 5"}),":- If the request comes from the chrome browser, the request will be drooped as we mention in above rule action."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(62553).A+"",width:"1853",height:"505"})}),"\n",(0,i.jsx)(s.h4,{id:"problem-statement-ii",children:(0,i.jsx)(s.strong,{children:"Problem Statement II"})}),"\n",(0,i.jsx)(s.p,{children:"The client requires device detection to be enabled on the listener level for Client Device."}),"\n",(0,i.jsx)(s.h4,{id:"solution-1",children:(0,i.jsx)(s.strong,{children:"Solution"})}),"\n",(0,i.jsx)(s.p,{children:"The above requirement can be achieved by enabling device detection option under listener in Haltdos SLB."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 1"}),":- First log into the Haltdos management portal."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(14370).A+"",width:"1844",height:"397"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 2"}),":- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB > listener name > listener settings"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(35499).A+"",width:"1842",height:"953"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 3"}),":- Enable device detection option."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(31900).A+"",width:"1840",height:"948"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 4"}),":- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB>Listeners>Rules>Policy rule>Add rule>Add condition>Save changes"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(61317).A+"",width:"1842",height:"948"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 5"}),":- If the request coming from chrome browser the request will be drooped as we mention in above rule action."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(91433).A+"",width:"1853",height:"505"})}),"\n",(0,i.jsx)(s.h4,{id:"problem-statement-iii",children:(0,i.jsx)(s.strong,{children:"Problem Statement III"})}),"\n",(0,i.jsx)(s.p,{children:"The client requires device detection to be enabled on the listener level for Client Browser."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 1"}),":- First log into the Haltdos management portal."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(36608).A+"",width:"1844",height:"397"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 2"}),":- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB > listener name > listener settings"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(14939).A+"",width:"1842",height:"953"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 3"}),":- Enable device detection option."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(722).A+"",width:"1840",height:"948"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 4"}),":- Go to ",(0,i.jsx)(s.strong,{children:"Stack > SLB > Listeners > Rules > Policy rule > Add rule > Add condition > Save changes"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(73229).A+"",width:"1851",height:"951"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Step 5"}),":- If the request coming from chrome browser the request will be drooped as we mention in above rule action."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(33284).A+"",width:"1853",height:"505"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,s,n)=>{var t=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,r={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,t)&&!d.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:i,type:e,key:l,ref:a,props:r,_owner:c.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},10717:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.1-01bf2b4be074a188ca4ff8d5eac22fe4.png"},91433:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.10-41e0883a7c43c764ac400fc1cd79d124.png"},36608:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.11-01bf2b4be074a188ca4ff8d5eac22fe4.png"},14939:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.12-265f71aa96dd765982a9e28c02035fca.png"},722:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.13-b9186e70faee662f6e07b0ee532a078c.png"},73229:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.14-1b08c4e56f7ca0859ae8ec4b22ce1885.png"},33284:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.15-41e0883a7c43c764ac400fc1cd79d124.png"},69478:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.2-265f71aa96dd765982a9e28c02035fca.png"},8495:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.3-b9186e70faee662f6e07b0ee532a078c.png"},65648:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.4-39e6c78ebae1648d87e9d1224a029432.png"},62553:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.5-41e0883a7c43c764ac400fc1cd79d124.png"},14370:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.6-01bf2b4be074a188ca4ff8d5eac22fe4.png"},35499:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.7-265f71aa96dd765982a9e28c02035fca.png"},31900:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.8-b9186e70faee662f6e07b0ee532a078c.png"},61317:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/adc16.9-4f21a11ed37e6566f33645a60b666e39.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);