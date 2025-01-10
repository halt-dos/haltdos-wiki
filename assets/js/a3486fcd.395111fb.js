/*! For license information please see a3486fcd.395111fb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[9602],{19006:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"enterprise/platform/stacks/instance/dhcp_settings","title":"DHCP Settings","description":"Configuring DHCP settings on Haltdos solution","source":"@site/versioned_docs/version-6.0/enterprise/platform/stacks/instance/dhcp_settings.md","sourceDirName":"enterprise/platform/stacks/instance","slug":"/enterprise/platform/stacks/instance/dhcp_settings","permalink":"/v6/enterprise/platform/stacks/instance/dhcp_settings","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"platform_sidebar","previous":{"title":"NTP","permalink":"/v6/enterprise/platform/stacks/instance/integration/ntp"},"next":{"title":"Virtual Machines","permalink":"/v6/enterprise/platform/stacks/instance/virtual_machines"}}');var r=t(74848),i=t(28453);const o={sidebar_position:7},d="DHCP Settings",l={},a=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4},{value:"Description",id:"description-1",level:3}];function c(e){const s={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"dhcp-settings",children:"DHCP Settings"})}),"\n",(0,r.jsx)(s.p,{children:"Configuring DHCP settings on Haltdos solution"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:"The Dynamic Host Configuration Protocol (DHCP) is a network management protocol used on Internet Protocol (IP) networks for automatically assigning IP addresses and other communication parameters to devices connected to the network using a client-server architecture."}),"\n",(0,r.jsx)(s.p,{children:"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"dhcp",src:t(85698).A+"",width:"1262",height:"608"})}),"\n",(0,r.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.strong,{children:"Stack > Instances > Instance > DHCP"})]}),"\n",(0,r.jsx)(s.li,{children:"Configure your settings"}),"\n",(0,r.jsx)(s.li,{children:"Click Save Changes"}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"PARAMETERS"}),(0,r.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,r.jsx)(s.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enable"}),(0,r.jsx)(s.td,{children:"ENABLED / DISABLED"}),(0,r.jsx)(s.td,{children:"DISABLED"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Name"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Local Link"}),(0,r.jsx)(s.td,{children:"IPv4 / IPv6"}),(0,r.jsx)(s.td,{children:"IPv4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Interface"}),(0,r.jsx)(s.td,{children:"Drop-down"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Subnet Network"}),(0,r.jsx)(s.td,{children:"Drop-down"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Nameserver"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Network Mask"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"255.255.255.0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Default Gateway"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NTP Server"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enable IP Lease"}),(0,r.jsx)(s.td,{children:"ENABLED / DISABLED"}),(0,r.jsx)(s.td,{children:"DISABLED"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Default Lease Time"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"3600"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Maximum Lease Time"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"7200"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Allowed IP Range"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BlackList Mac Address"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Enable"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to enable/disable the current configuration."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Name"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the desired name for the network setting."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Local Link"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Interface"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Subnet Network"})}),"\n",(0,r.jsx)(s.p,{children:"This feature allows you to share the subnet mask for the subnetwork."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nameserver"}),"\r\nName Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Network Mask"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the network mask which will be assigned to devices on the network."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Default Gateway"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the default gateway IP as it will be assigned to devices in the network."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"NTP Server"})}),"\n",(0,r.jsx)(s.p,{children:"The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. Users are allowed to mention the NTP."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Enable IP Lease"})}),"\n",(0,r.jsx)(s.p,{children:"A DHCP lease is a temporary assignment of an IP address to a device on the network. When using DHCP to manage a pool of IP addresses, each client served on the network is only \u201crenting\u201d its IP address. Thus, IP addresses managed by a DHCP server are only assigned for a limited period of time. Users are allowed to set the DHCP IP lease which will be assigned to the PC."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Default Lease Time"})}),"\n",(0,r.jsx)(s.p,{children:"When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients."}),"\n",(0,r.jsx)(s.p,{children:"During the lease time, the DHCP server cannot assign that IP address to any other clients."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Maximum Lease Time"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the maximum lease time for the IP assigned to the host device."}),"\n",(0,r.jsx)(s.p,{children:"**Allowed IP Range  **"}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to set the IP range which is allowed to the host device within the network."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"BlackList Mac Address"}),"\r\nThis option allows user to block access for IP alllocation. MAC addresses listed in the Blacklist are denied access, while all other clients are allowed access"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Mac IP Binding"})}),"\n",(0,r.jsx)(s.p,{children:"Mac-binding essentially means binding together the MAC and IP addresses, so that all requests from that IP address are served only by the computer having that particular MAC address. In effect, it means that if the IP address or the MAC address changes, the device can no longer access the Internet."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"PARAMETERS"}),(0,r.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,r.jsx)(s.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MAC Address"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IP Address"}),(0,r.jsx)(s.td,{children:"IP String"}),(0,r.jsx)(s.td,{children:"Empty"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Description"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"Empty"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"description-1",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"MAC Address"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to mention the MAC address which need to be bind with a IP address for MAC IP Binding."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"IP Address"})}),"\n",(0,r.jsx)(s.p,{children:"This option allows users to mention the IP address which need to be bind with MAC Address."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Description"})}),"\n",(0,r.jsx)(s.p,{children:"This field allows users to mention a short description about the MAC IP binding or the reason for the binding."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,s,t)=>{var n=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,t){var n,i={},a=null,c=null;for(n in void 0!==t&&(a=""+t),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(c=s.ref),s)o.call(s,n)&&!l.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:r,type:e,key:a,ref:c,props:i,_owner:d.current}}s.Fragment=i,s.jsx=a,s.jsxs=a},74848:(e,s,t)=>{e.exports=t(21020)},85698:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/dhcp1-225fb8efaea218a4b5517797fe814e56.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(96540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);