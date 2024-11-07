/*! For license information please see a39c9020.06a8147a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50290],{47503:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"kb/adc/kb-2005","title":"KB: 2005","description":"How to add and remove headers in the request & response phase?","source":"@site/docs/kb/adc/kb-2005.md","sourceDirName":"kb/adc","slug":"/kb/adc/kb-2005","permalink":"/kb/adc/kb-2005","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"kb_sidebar","previous":{"title":"KB: 2004","permalink":"/kb/adc/kb-2004"},"next":{"title":"KB: 2006","permalink":"/kb/adc/kb-2006"}}');var r=s(74848),o=s(28453);const d={},i="KB: 2005",a={},l=[{value:"<strong>How to add and remove headers in the request &amp; response phase?</strong>",id:"how-to-add-and-remove-headers-in-the-request--response-phase",level:3},{value:"<strong>Problem Statement I</strong>",id:"problem-statement-i",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Problem Statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4}];function h(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"kb-2005",children:"KB: 2005"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-add-and-remove-headers-in-the-request--response-phase",children:(0,r.jsx)(n.strong,{children:"How to add and remove headers in the request & response phase?"})}),"\n",(0,r.jsx)(n.h4,{id:"problem-statement-i",children:(0,r.jsx)(n.strong,{children:"Problem Statement I"})}),"\n",(0,r.jsx)(n.p,{children:"The client wants to add headers and the request sent to the back-end server as well as modify the response sent to the client."}),"\n",(0,r.jsx)(n.h4,{id:"solution",children:(0,r.jsx)(n.strong,{children:"Solution"})}),"\n",(0,r.jsx)(n.p,{children:"The clients want to modify headers and modify response sent to the client."}),"\n",(0,r.jsx)(n.p,{children:"This can be achieved by the following way:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(50805).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Now go under added listener, select header rule from the rules drop-down menu."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(Apps>SLB>Listeners>Rules>Header rule>Add Rule>Save changes)"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(71489).A+"",width:"1809",height:"967"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Client can create rule on the basis of the rule condition also as shown in the below picture."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(3224).A+"",width:"1809",height:"967"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:'Below image showing the addition of a header named "test".'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(73023).A+"",width:"1363",height:"977"})}),"\n",(0,r.jsx)(n.h4,{id:"problem-statement-ii",children:(0,r.jsx)(n.strong,{children:"Problem Statement II"})}),"\n",(0,r.jsx)(n.p,{children:"The client wants to remove headers and the request sent to the back-end server."}),"\n",(0,r.jsx)(n.h4,{id:"solution-1",children:(0,r.jsx)(n.strong,{children:"Solution"})}),"\n",(0,r.jsx)(n.p,{children:"The clients wants to remove headers and modify response sent to the client ."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step to Solve"}),":-"]}),"\n",(0,r.jsx)(n.p,{children:"This can be achieved by the following way:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log into the Haltdos Console."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(50805).A+"",width:"1836",height:"963"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Now go under added listener, select header rule from the rules drop-down menu."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"(Apps > SLB > Listeners > Rules > Header rule > Add rule > Save changes)"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(78391).A+"",width:"1809",height:"967"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:'Below image showing the removal of a header named because in rule details we are choosing "REMOVE RESPONSE HEADER" .(Take a look on problem statement I in step 4 and also see the image)'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(36164).A+"",width:"1916",height:"969"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"header",src:s(96387).A+"",width:"1912",height:"964"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,s)=>{var t=s(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var t,o={},l=null,h=null;for(t in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:l,ref:h,props:o,_owner:i.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,s)=>{e.exports=s(21020)},73023:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc6.4-71b7c4ec36a93ea9e2445de0101d06b5.png"},36164:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc6.7-02352cb3c37934f401e940100353651d.png"},96387:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/adc6.8-3dd15c997aae51a78b7fd520e0d2291a.png"},71489:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/header_rule_kb_2005_2-bcd08914155f1287648e5e9d7841df02.png"},3224:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/header_rule_kb_2005_3-c08f5ab1697e11d29771c10a363be860.png"},78391:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/header_rule_kb_2005_4-ec32250746af895f0bae67910765bb80.png"},50805:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/overview_kb_2005_1-235dcc07fe1668182be616f50b2d5b5e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var t=s(96540);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);