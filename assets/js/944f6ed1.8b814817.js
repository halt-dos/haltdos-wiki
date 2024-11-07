/*! For license information please see 944f6ed1.8b814817.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2408],{63909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"kb/adc/kb-2007","title":"kb-2007","description":"HOW TO SET  POLICY RULES BASED ON THE CLIENT REQUIREMENT?","source":"@site/versioned_docs/version-6.0/kb/adc/kb-2007.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2007","permalink":"/v6/kb/adc/kb-2007","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"kb-2006","permalink":"/v6/kb/adc/kb-2006"},"next":{"title":"kb-2008","permalink":"/v6/kb/adc/kb-2008"}}');var i=n(74848),r=n(28453);const o={},l=void 0,c={},a=[{value:"<strong>HOW TO SET  POLICY RULES BASED ON THE CLIENT REQUIREMENT</strong>?",id:"how-to-set--policy-rules-based-on-the-client-requirement",level:3},{value:"<strong>Problem Statement I</strong>",id:"problem-statement-i",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Steps to Solve</strong>",id:"steps-to-solve",level:5},{value:"<strong>Problem Statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4},{value:"<strong>Problem Statement III</strong>",id:"problem-statement-iii",level:4},{value:"<strong>Solution</strong>",id:"solution-2",level:4}];function d(e){const t={h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h3,{id:"how-to-set--policy-rules-based-on-the-client-requirement",children:[(0,i.jsx)(t.strong,{children:"HOW TO SET  POLICY RULES BASED ON THE CLIENT REQUIREMENT"}),"?"]}),"\n",(0,i.jsx)(t.h4,{id:"problem-statement-i",children:(0,i.jsx)(t.strong,{children:"Problem Statement I"})}),"\n",(0,i.jsx)(t.p,{children:"The client wants to drop the requests coming from particular client IP."}),"\n",(0,i.jsx)(t.h4,{id:"solution",children:(0,i.jsx)(t.strong,{children:"Solution"})}),"\n",(0,i.jsx)(t.p,{children:'The client can utilize the policy rule in SLB by selecting "Drop Request" as rule action based on different rule conditions.'}),"\n",(0,i.jsx)(t.h5,{id:"steps-to-solve",children:(0,i.jsx)(t.strong,{children:"Steps to Solve"})}),"\n",(0,i.jsx)(t.p,{children:"This can be achieved by the following way"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"step 1"}),":- Below picture shows that the listener page is opening properly."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(4340).A+"",width:"1004",height:"666"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),":- Now Go to ",(0,i.jsx)(t.strong,{children:'Stack > SLB>Listeners>Rules>Policy rule>Add rule>Save changes. Select "Drop Request" as rule action'})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(23247).A+"",width:"1906",height:"671"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),":- Client needs to create at least one rule condition for implementing Policy Rule as shown in below picture."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(84230).A+"",width:"1906",height:"909"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 4"}),":- The below picture is showing the request is getting dropped on the bases of policy rule."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(77305).A+"",width:"1911",height:"948"})}),"\n",(0,i.jsx)(t.p,{children:"Here we can observe that the Policy rule is working as intended. As per rule action we are choosing that the SLB is dropping the request."}),"\n",(0,i.jsx)(t.h4,{id:"problem-statement-ii",children:(0,i.jsx)(t.strong,{children:"Problem Statement II"})}),"\n",(0,i.jsx)(t.p,{children:"The client wants to redirect the request coming from particular client IP."}),"\n",(0,i.jsx)(t.h4,{id:"solution-1",children:(0,i.jsx)(t.strong,{children:"Solution"})}),"\n",(0,i.jsxs)(t.p,{children:["The client can utilize the policy rule in SLB by selecting ",(0,i.jsx)(t.strong,{children:'"REDIRECT REQUEST"'})," as rule action based on different rule conditions."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step to so;ve"}),":-"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1"}),":- Go to ",(0,i.jsx)(t.strong,{children:'Stack > SLB>Listeners>Rules>Policy rule>Add rule>Save changes. Select "REDIRECT REQUEST" as rule action'})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(80400).A+"",width:"1912",height:"950"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),":- In above image we are also taking one https site where we want to redirect the request ."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),":- In below image we are seeing that our request is going to https site that mentioned in redirection url (take a look of rule details in above image)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(50251).A+"",width:"1912",height:"950"})}),"\n",(0,i.jsx)(t.h4,{id:"problem-statement-iii",children:(0,i.jsx)(t.strong,{children:"Problem Statement III"})}),"\n",(0,i.jsx)(t.p,{children:"The client wants to Bypass the request coming from particular client IP."}),"\n",(0,i.jsx)(t.h4,{id:"solution-2",children:(0,i.jsx)(t.strong,{children:"Solution"})}),"\n",(0,i.jsxs)(t.p,{children:["The client can utilize the policy rule in SLB by selecting ",(0,i.jsx)(t.strong,{children:'"BYPASS REQUEST"'})," as rule action based on different rule conditions."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Steps to solve"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1"}),":- Client have to blacklist the particular IP if the request are coming from that particular IP will be blocked. (Go to ",(0,i.jsx)(t.strong,{children:"Stack > SLB > Listener > Profile > Setting icon > Geo Filtering > Blacklisted IP Prefixes > Click on save changes"}),")"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(29122).A+"",width:"1916",height:"969"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(59717).A+"",width:"1916",height:"969"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),":- Go to ",(0,i.jsx)(t.strong,{children:'Stack > SLB>Listeners>Rules>Policy rule>Add rule>Save changes. Select "BYPASS REQUEST" as rule action'}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(46652).A+"",width:"1912",height:"950"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),":- Below image shows that request coming from that particular IP is Bypassing the request on our default http site."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(24846).A+"",width:"1912",height:"950"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var s,r={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:a,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},4340:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.1-0c6856d73150e7851f30f1cbff2a6e61.png"},24846:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.10-977808a1368f58a4d92ff4fd9df24b3a.png"},23247:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.2-e56aeca89cc135d22486f5716b9d0f8f.png"},84230:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.3-4f7b5f81a95898b04dcdfdd48b220005.png"},77305:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.4-4f434b8915e89b77750bea727cdd75c7.png"},80400:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.5-861492dee02998c2c95f7a6203b909b5.png"},50251:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.6-6a957c5602d6f61affc1cd28ee1d9557.png"},29122:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.7-fe27ae8f5999bd83e31bb6df502bec8d.png"},59717:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.8-d8c1057cd215b446435dc4cbea4acd50.png"},46652:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/adc8.9-3248221451f7ecc58351ac115a174655.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);