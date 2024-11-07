/*! For license information please see 31d9df2c.74cfbbb7.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[45561],{44711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/plugins/dhcp/settings","title":"Settings","description":"---","source":"@site/docs/enterprise/plugins/dhcp/settings.md","sourceDirName":"enterprise/plugins/dhcp","slug":"/enterprise/plugins/dhcp/settings","permalink":"/enterprise/plugins/dhcp/settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"plugins_sidebar","previous":{"title":"Network","permalink":"/enterprise/plugins/dhcp/network"},"next":{"title":"Haltdos Secure Web Gateway","permalink":"/enterprise/plugins/swg/"}}');var i=n(74848),r=n(28453);const o={sidebar_position:2},l="Settings",d={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}];function h(e){const t={br:"br",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"settings",children:"Settings"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This option allows to configure global settings for DHCP Network."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dhcp",src:n(12668).A+"",width:"1902",height:"900"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Stack"})," > ",(0,i.jsx)(t.strong,{children:"DHCP"})," > ",(0,i.jsx)(t.strong,{children:"Setiings."})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Edit existing configuration."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click on ",(0,i.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"SETTINGS"}),(0,i.jsx)(t.th,{children:"ACCEPTED VALUE"}),(0,i.jsx)(t.th,{children:"DEFAULT"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default Lease Time"}),(0,i.jsx)(t.td,{children:"Integer (Seconds)"}),(0,i.jsx)(t.td,{children:"3600"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Max Lease Time"}),(0,i.jsx)(t.td,{children:"Interger (Seconds)"}),(0,i.jsx)(t.td,{children:"7200"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Match Filter"}),(0,i.jsx)(t.td,{children:"Toggle"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Default Lease Time"}),(0,i.jsx)(t.br,{}),"\n","When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients."]}),"\n",(0,i.jsx)(t.p,{children:"During the lease time, the DHCP server cannot assign that IP address to any other clients."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Max Lease Time"}),(0,i.jsx)(t.br,{}),"\n","This option allows users to set the maximum lease time for the IP assigned to the host device."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Allowed IP Range"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to set the IP range which is allowed to the host device within the network."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Match Filter"})}),"\n",(0,i.jsx)(t.p,{children:"This Enables IP lookup on the basis of Client ID for IPv4 DHCP Server."})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:h,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},12668:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dhcp_setting-4853c6ecde36a77e9ff4fb75a7dc785b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);