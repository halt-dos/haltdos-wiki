/*! For license information please see 65ad6ed9.d0d4be18.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[62765],{40561:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"enterprise/plugins/dhcp/network","title":"Network","description":"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses.","source":"@site/docs/enterprise/plugins/dhcp/network.md","sourceDirName":"enterprise/plugins/dhcp","slug":"/enterprise/plugins/dhcp/network","permalink":"/enterprise/plugins/dhcp/network","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"plugins_sidebar","previous":{"title":"DHCP","permalink":"/enterprise/plugins/dhcp/"},"next":{"title":"Settings","permalink":"/enterprise/plugins/dhcp/settings"}}');var r=n(74848),i=n(28453);const d={sidebar_position:1},o="Network",h={},l=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2},{value:"Description",id:"description-1",level:3}];function c(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"network",children:"Network"})}),"\n",(0,r.jsx)(s.p,{children:"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"dhcp",src:n(30614).A+"",width:"1902",height:"900"})}),"\n",(0,r.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.strong,{children:"Stack > Instances > > DHCP"})]}),"\n",(0,r.jsx)(s.li,{children:"Configure your settings"}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"PARAMETERS"}),(0,r.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,r.jsx)(s.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enable"}),(0,r.jsx)(s.td,{children:"ENABLED / DISABLED"}),(0,r.jsx)(s.td,{children:"DISABLED"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Name"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Local Link"}),(0,r.jsx)(s.td,{children:"IPv4 / IPv6"}),(0,r.jsx)(s.td,{children:"IPv4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Interface"}),(0,r.jsx)(s.td,{children:"Drop-down"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Subnet Network"}),(0,r.jsx)(s.td,{children:"Drop-down"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Nameserver"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Mask"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"255.255.255.0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Default Gateway"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enable IP Lease"}),(0,r.jsx)(s.td,{children:"ENABLED / DISABLED"}),(0,r.jsx)(s.td,{children:"DISABLED"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Allowed IP Range"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Enable"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to enable/disable the current configuration."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Name"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the desired name for the network setting."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Local Link"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Interface"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Subnet Network"})}),"\n",(0,r.jsx)(s.p,{children:"This feature allows you to share the subnet mask for the subnetwork."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nameserver"}),"\r\nName Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Mask"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the network mask which will be assigned to devices on the network."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Default Gateway"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the default gateway IP as it will be assigned to devices in the network."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Enable IP Lease"})}),"\n",(0,r.jsx)(s.p,{children:"A DHCP lease is a temporary assignment of an IP address to a device on the network. When using DHCP to manage a pool of IP addresses, each client served on the network is only \u201crenting\u201d its IP address. Thus, IP addresses managed by a DHCP server are only assigned for a limited period of time. Users are allowed to set the DHCP IP lease which will be assigned to the PC."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Mac IP Binding"})}),"\n",(0,r.jsx)(s.p,{children:"Mac-binding essentially means binding together the MAC and IP addresses, so that all requests from that IP address are served only by the computer having that particular MAC address. In effect, it means that if the IP address or the MAC address changes, the device can no longer access the Internet."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"dhcp",src:n(26941).A+"",width:"916",height:"316"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"PARAMETERS"}),(0,r.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,r.jsx)(s.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MAC Address"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IP Address"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Description"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"MAC Address"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to mention the MAC address which need to be bind with a IP address for MAC IP Binding."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"IP Address"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to mention the IP address which need to be bind with MAC Address."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Description"})}),"\n",(0,r.jsx)(s.p,{children:"This field allows users to mention a short description about the MAC IP binding or the reason for the binding."})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,s,n)=>{var t=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,i={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)d.call(s,t)&&!h.hasOwnProperty(t)&&(i[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===i[t]&&(i[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:c,props:i,_owner:o.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},74848:(e,s,n)=>{e.exports=n(21020)},26941:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/dhcpmac-96541cb459cbc9d3e6f4c8167c946c8d.png"},30614:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/dhcp_network-cdf2931f5614d90ea861c1750383050b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);