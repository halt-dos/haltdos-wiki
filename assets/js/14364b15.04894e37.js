/*! For license information please see 14364b15.04894e37.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[35515],{27970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"kb/adc/kb-2007","title":"KB: 2007","description":"how to set policy rules based on the client requirement?","source":"@site/docs/kb/adc/kb-2007.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2007","permalink":"/kb/adc/kb-2007","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2006","permalink":"/kb/adc/kb-2006"},"next":{"title":"KB: 2008","permalink":"/kb/adc/kb-2008"}}');var i=s(74848),r=s(28453);const l={},o="KB: 2007",c={},d=[{value:"<strong>how to set policy rules based on the client requirement?</strong>",id:"how-to-set-policy-rules-based-on-the-client-requirement",level:3},{value:"<strong>Problem Statement I</strong>",id:"problem-statement-i",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Problem Statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4},{value:"<strong>Problem Statement III</strong>",id:"problem-statement-iii",level:4},{value:"<strong>Solution</strong>",id:"solution-2",level:4}];function a(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kb-2007",children:"KB: 2007"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-set-policy-rules-based-on-the-client-requirement",children:(0,i.jsx)(n.strong,{children:"how to set policy rules based on the client requirement?"})}),"\n",(0,i.jsx)(n.h4,{id:"problem-statement-i",children:(0,i.jsx)(n.strong,{children:"Problem Statement I"})}),"\n",(0,i.jsx)(n.p,{children:"The client wants to drop the requests coming from particular client IP."}),"\n",(0,i.jsx)(n.h4,{id:"solution",children:(0,i.jsx)(n.strong,{children:"Solution"})}),"\n",(0,i.jsx)(n.p,{children:'The client can utilize the policy rule in SLB by selecting "Drop Request" as rule action based on different rule conditions.'}),"\n",(0,i.jsx)(n.p,{children:"This can be achieved by the following way"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Below picture shows that the listener page is opening properly."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(4340).A+"",width:"1004",height:"666"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Now Go to ",(0,i.jsx)(n.strong,{children:"Apps"})," > ",(0,i.jsx)(n.strong,{children:"SLB"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Rules"})," > ",(0,i.jsx)(n.strong,{children:"Policy rule"})," > ",(0,i.jsx)(n.strong,{children:"Add rule"})," > ",(0,i.jsx)(n.strong,{children:"Save changes"}),'. Select "Drop Request" as rule action.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(26764).A+"",width:"1809",height:"967"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Client needs to create at least one rule condition for implementing Policy Rule as shown in below picture."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(95861).A+"",width:"1809",height:"967"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"The below picture is showing the request is getting dropped on the bases of policy rule."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(77305).A+"",width:"1911",height:"948"})}),"\n",(0,i.jsx)(n.p,{children:"Here we can observe that the Policy rule is working as intended. As per rule action we are choosing that the SLB is dropping the request."}),"\n",(0,i.jsx)(n.h4,{id:"problem-statement-ii",children:(0,i.jsx)(n.strong,{children:"Problem Statement II"})}),"\n",(0,i.jsx)(n.p,{children:"The client wants to redirect the request coming from particular client IP."}),"\n",(0,i.jsx)(n.h4,{id:"solution-1",children:(0,i.jsx)(n.strong,{children:"Solution"})}),"\n",(0,i.jsxs)(n.p,{children:["The client can utilize the policy rule in SLB by selecting ",(0,i.jsx)(n.strong,{children:'"REDIRECT REQUEST"'})," as rule action based on different rule conditions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Step to solve"}),":-"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Apps"})," > ",(0,i.jsx)(n.strong,{children:"SLB"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Rules"})," > ",(0,i.jsx)(n.strong,{children:"Policy rule"})," > ",(0,i.jsx)(n.strong,{children:"Add rule"})," > ",(0,i.jsx)(n.strong,{children:"Save changes"}),'. Then select "REDIRECT REQUEST" as rule action.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(56931).A+"",width:"1809",height:"967"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In above image we are also taking one https site where we want to redirect the request ."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In below image we are seeing that our request is going to https site that mentioned in redirection url (take a look of rule details in above image)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(50251).A+"",width:"1912",height:"950"})}),"\n",(0,i.jsx)(n.h4,{id:"problem-statement-iii",children:(0,i.jsx)(n.strong,{children:"Problem Statement III"})}),"\n",(0,i.jsx)(n.p,{children:"The client wants to Bypass the request coming from particular client IP."}),"\n",(0,i.jsx)(n.h4,{id:"solution-2",children:(0,i.jsx)(n.strong,{children:"Solution"})}),"\n",(0,i.jsxs)(n.p,{children:["The client can utilize the policy rule in SLB by selecting ",(0,i.jsx)(n.strong,{children:'"BYPASS REQUEST"'})," as rule action based on different rule conditions."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Steps to solve"}),":-"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Client have to blacklist the particular IP if the request are coming from that particular IP will be blocked. (Go to ",(0,i.jsx)(n.strong,{children:"Apps"})," > ",(0,i.jsx)(n.strong,{children:"SLB"})," > ",(0,i.jsx)(n.strong,{children:"Listener"})," > ",(0,i.jsx)(n.strong,{children:"Profile"})," > ",(0,i.jsx)(n.strong,{children:"Setting icon"})," > ",(0,i.jsx)(n.strong,{children:"Geo Filtering"})," > ",(0,i.jsx)(n.strong,{children:"Blacklisted IP Prefixes"})," > ",(0,i.jsx)(n.strong,{children:"Click on save changes"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(21533).A+"",width:"1809",height:"967"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(59717).A+"",width:"1916",height:"969"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Apps"})," > ",(0,i.jsx)(n.strong,{children:"SLB"})," > ",(0,i.jsx)(n.strong,{children:"Listeners"})," > ",(0,i.jsx)(n.strong,{children:"Rules"})," > ",(0,i.jsx)(n.strong,{children:"Policy rule"})," > ",(0,i.jsx)(n.strong,{children:"Add rule"})," > ",(0,i.jsx)(n.strong,{children:"Save changes"}),'. Select "BYPASS REQUEST" as rule action**.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(53919).A+"",width:"1809",height:"967"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Below image shows that request coming from that particular IP is Bypassing the request on our default http site."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(24846).A+"",width:"1912",height:"950"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,n,s)=>{var t=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,r={},d=null,a=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:a,props:r,_owner:o.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},4340:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc8.1-0c6856d73150e7851f30f1cbff2a6e61.png"},24846:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc8.10-977808a1368f58a4d92ff4fd9df24b3a.png"},77305:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc8.4-4f434b8915e89b77750bea727cdd75c7.png"},50251:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc8.6-6a957c5602d6f61affc1cd28ee1d9557.png"},59717:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc8.8-d8c1057cd215b446435dc4cbea4acd50.png"},21533:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/geo_kb_2007_7-8cbf352b3173eacaa0fb5fc93b09418b.png"},26764:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy_rule_kb_2007_2-7e6bd3041de447a15f9d96339f53bdf7.png"},95861:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy_rule_kb_2007_3-5c15f1d78d4253f1ad796135eeb411a1.png"},56931:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy_rule_kb_2007_5-143a954368819fe3378989255410149a.png"},53919:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/policy_rule_kb_2007_9-730c6336003d412578979feb48547f31.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);