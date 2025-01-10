/*! For license information please see 2e94335c.58fa5300.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[33073],{56127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scenarios/llb/scenario-2","title":"Scenario 2","description":"LLB configuration under different Scenarios","source":"@site/versioned_docs/version-7.0/scenarios/llb/scenario-2.md","sourceDirName":"scenarios/llb","slug":"/scenarios/llb/scenario-2","permalink":"/v7/scenarios/llb/scenario-2","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"llb_sidebar","previous":{"title":"Scenario 1","permalink":"/v7/scenarios/llb/scenario-1"},"next":{"title":"Scenario 3","permalink":"/v7/scenarios/llb/scenario-3"}}');var r=t(74848),i=t(28453);const o={},a="Scenario 2",c={},d=[{value:"Steps",id:"steps",level:3}];function l(e){const n={a:"a",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"scenario-2",children:"Scenario 2"})}),"\n",(0,r.jsx)(n.p,{children:"LLB configuration under different Scenarios"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Suppose, there is a company ABC which is having an internal network of 192.168.1.0/24. ABC company has two internet connections from two different service providers. one service provider is having static public IP of 131.21.26.35/30 and the second is having a static public IP address 103.25.26.32/32. Apart from this customer also wants to forward the internal traffic in a 75:25 ratio from both of the ISPs."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Haltdos LLB"})," is placed in between CPE and PE routers so that data traffic first arrives on ",(0,r.jsx)(n.strong,{children:"Haltdos LLB"})," then forwards the traffic to the relevant LAN link as per the policy specified."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(17534).A+"",width:"1064",height:"552"})}),"\n",(0,r.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 1 : Configuration of LAN Connection"})}),"\n",(0,r.jsx)(n.p,{children:"Go to Stack > Instances > Network > Ethernet. The User first needs to configure the LAN interface. Users can refer Ethernet configuration guide."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(3285).A+"",width:"1874",height:"923"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 2 : Configuration of Static WAN 1 Connection"})}),"\n",(0,r.jsx)(n.p,{children:"Users first need to move to Stack > Instances > Network > Ethernet. Select the WAN port from the link and configure the link as per the requirements. In the case of static WAN, connection users need to configure route and route policies to ensure the proper network connectivity. Users can refer Ethernet configuration guide.\r\nFor static WAN IP configuration Users need to mention some route policies which are mentioned below.\r\nUsers first move to the Stack > Instances > Network > Routing Table and create a routing table."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(67372).A+"",width:"1913",height:"922"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Creating Routes:"})," User: Users need to create a route policy as per the specified settings."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(79514).A+"",width:"1331",height:"268"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Creating Routing Policy:"})," Users will need to move to Stack > Instances > Network > Ethernet and select the WAN interface with static IP and configure the route and routing policies settings as mentioned below."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(84273).A+"",width:"1334",height:"277"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Step 4 : Creating Interface groups"})}),"\n",(0,r.jsx)(n.p,{children:"Interface Group is a grouping mechanism of physical Interfaces configured on Link Load Balancer including LAN & WAN. Users can follow the guide for Interface Groups."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(90408).A+"",width:"494",height:"443"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 5 : Add the interface to the LLB settings page."}),"\r\nAfter adding the interface into the interface group, we need to add an interface into LLB settings. The need to go to Stack > LLB >Settings and click on Add Interface option and fill in details and save changes. Users can also refer to this guide: ",(0,r.jsx)(n.a,{href:"/v7/enterprise/llb/llb_settings",children:"LLB Settings"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(20255).A+"",width:"1804",height:"766"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(23318).A+"",width:"518",height:"379"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(29852).A+"",width:"520",height:"376"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step 6: Configuring SNAT"}),"\r\nThe user needs to configure the SNAT so that natting could be performed. The user needs to move to Go to Stack > LLB > Rules > SNAT then configure the SNAT as per the org. requirements. Users can refer to this guide: Source NAT."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Diagram",src:t(42917).A+"",width:"1336",height:"717"})}),"\n",(0,r.jsxs)(n.p,{children:["In this way, the user can set up the basic ",(0,r.jsx)(n.a,{href:"/v7/enterprise/llb",children:(0,r.jsx)(n.strong,{children:"Haltdos LLB"})})," configuration with two ISP connections."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,i={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},17534:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-1-af0071fe70208cc723c3762688656d3b.png"},29852:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-10-89c683503a888e5fb7e1f51093359661.png"},42917:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-11-e5b15618d3cbc515dd8ddd1907cb492a.png"},3285:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-2-58dc4a608d514e5d54b2edfce2cd1f5b.png"},67372:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-3-6a5de8367832208a8f11168e515abb87.png"},79514:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-5-2621a2928ef32875b3dd8b65f45bc9b4.png"},84273:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-6-4cc2361242b0de1c9f417449df746464.png"},90408:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-7-7a10dbe6403b901842f7ecf77731d02e.png"},20255:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-8-ee258306e31e29e7a999c2e726b89afb.png"},23318:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/scenario1-9-1e7e0358dba0fc54ab0e5ec622e4dd17.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);