/*! For license information please see 8f0a19f5.45f6b73a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[85325],{24136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/platform/system/instance/network_settings/lan","title":"Virtual LAN","description":"Listing of ethernet cards (NIC) on the hardware / VM","source":"@site/docs/enterprise/platform/system/instance/network_settings/lan.md","sourceDirName":"enterprise/platform/system/instance/network_settings","slug":"/enterprise/platform/system/instance/network_settings/lan","permalink":"/enterprise/platform/system/instance/network_settings/lan","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"platform_sidebar","previous":{"title":"Ethernet","permalink":"/enterprise/platform/system/instance/network_settings/ethernet"},"next":{"title":"Link Bonds","permalink":"/enterprise/platform/system/instance/network_settings/bonds"}}');var t=r(74848),l=r(28453);const i={sidebar_position:2},a="Virtual LAN",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Name",id:"name",level:5},{value:"Group Name",id:"group-name",level:5},{value:"Vlan Id",id:"vlan-id",level:5},{value:"Link",id:"link",level:5},{value:"Addresses",id:"addresses",level:5},{value:"Enable DHCP4",id:"enable-dhcp4",level:5},{value:"Enable DHCP6",id:"enable-dhcp6",level:5},{value:"Local Link",id:"local-link",level:5},{value:"Gateway 4",id:"gateway-4",level:5},{value:"Gateway 6",id:"gateway-6",level:5},{value:"Name Servers",id:"name-servers",level:5}];function o(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"virtual-lan",children:"Virtual LAN"})}),"\n",(0,t.jsx)(n.p,{children:"Listing of ethernet cards (NIC) on the hardware / VM"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"This section allows you to configure Ethernet settings on available NIC cards on the physical or virtual instance. You can configure IP addresses, gateway, routes and routing policies per interface."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Stack > Infrastructure  > Network > Virtual LAN"})]}),"\n",(0,t.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ethernet",src:r(75218).A+"",width:"1908",height:"908"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h5,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"Enter the name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h5,{id:"group-name",children:"Group Name"}),"\n",(0,t.jsx)(n.p,{children:"Enter Group Name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h5,{id:"vlan-id",children:"Vlan Id"}),"\n",(0,t.jsx)(n.p,{children:"This option shows the bus address of the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: ens160 \n"})}),"\n",(0,t.jsx)(n.h5,{id:"link",children:"Link"}),"\n",(0,t.jsx)(n.p,{children:"Enter the link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: eth0\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.h5,{id:"addresses",children:"Addresses"}),"\n",(0,t.jsx)(n.p,{children:"Select the addresses"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h5,{id:"enable-dhcp4",children:"Enable DHCP4"}),"\n",(0,t.jsx)(n.p,{children:"DHCP4 can be Enable / Disable here."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"enable-dhcp6",children:"Enable DHCP6"}),"\n",(0,t.jsx)(n.p,{children:"DHCP6 can be Enable / Disable here."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"local-link",children:"Local Link"}),"\n",(0,t.jsx)(n.p,{children:"Select the local link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: IPv4 / IPv6\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h5,{id:"gateway-4",children:"Gateway 4"}),"\n",(0,t.jsx)(n.p,{children:"Enter the Gateway 4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.h5,{id:"gateway-6",children:"Gateway 6"}),"\n",(0,t.jsx)(n.p,{children:"Enter the Gateway 6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.h5,{id:"name-servers",children:"Name Servers"}),"\n",(0,t.jsx)(n.p,{children:"Enter Name Servers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,l={},d=null,o=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!c.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:o,props:l,_owner:a.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},75218:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/sysvlan-b16f88c5320aa313b9641bbe8d21c6f8.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);