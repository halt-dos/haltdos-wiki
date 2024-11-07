/*! For license information please see 99babc54.160f8a71.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[34584],{10722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"enterprise/platform/system/instance/network_settings/ethernet","title":"Ethernet","description":"Listing of ethernet cards (NIC) on the hardware / VM","source":"@site/versioned_docs/version-7.0/enterprise/platform/system/instance/network_settings/ethernet.md","sourceDirName":"enterprise/platform/system/instance/network_settings","slug":"/enterprise/platform/system/instance/network_settings/ethernet","permalink":"/v7/enterprise/platform/system/instance/network_settings/ethernet","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"platform_sidebar","previous":{"title":"Network","permalink":"/v7/enterprise/platform/system/instance/network_settings/"},"next":{"title":"Virtual LAN","permalink":"/v7/enterprise/platform/system/instance/network_settings/virtual_lan"}}');var t=s(74848),i=s(28453);const l={sidebar_position:1},o="Ethernet",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Route</strong>",id:"route",level:3},{value:"Description",id:"description-1",level:3},{value:"<strong>Route Policy</strong>",id:"route-policy",level:3},{value:"Description",id:"description-2",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"ethernet",children:"Ethernet"})}),"\n",(0,t.jsx)(n.p,{children:"Listing of ethernet cards (NIC) on the hardware / VM"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"This section allows you to configure Ethernet settings on available NIC cards on the physical or virtual instance. You can configure IP addresses, gateway, routes and routing policies per interface."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Stack > Instances  > Network > Ethernet"})]}),"\n",(0,t.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Ethernet",src:s(58390).A+"",width:"1887",height:"962"})}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"System Name"})}),"\n",(0,t.jsx)(n.p,{children:"The System names are Network interface names that are dynamically provided by OS. By default, they are assigned on a first-come, first-served numerical basis."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"lo \u2013 Loopback interface."}),"\n",(0,t.jsx)(n.li,{children:"eth0 \u2013 My first Ethernet network interface on Linux."}),"\n",(0,t.jsx)(n.li,{children:"vboxnet0, vmnet1, vmnet8 \u2013 Virtual machine interface working in bridge mode or NAT mode on Linux."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Managed"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify if the interface is managed on OS level or not."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"System Name"})}),"\n",(0,t.jsx)(n.p,{children:"It will show the system name of the interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: ens160 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Bus Address"})}),"\n",(0,t.jsx)(n.p,{children:"This option shows the bus address of the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: ens160 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"MAC Address"})}),"\n",(0,t.jsx)(n.p,{children:"This option shows the MAC address of the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Current IP Addresses"})}),"\n",(0,t.jsx)(n.p,{children:"This option shows the Current IP Addresses of the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Name"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to change the desired name to the Interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: ens160 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Description"})}),"\n",(0,t.jsx)(n.p,{children:"This option helps users to write a short description for the Interface. Users can write any information like its segment, scope, subnet information, and other notes as well."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Role"})}),"\n",(0,t.jsx)(n.p,{children:"This feature helps users to select the exact working mechanism of the interface, either it'll be working in the LAN segment or it'll be part of the Wide Area Network. Users can also select the third option undefined."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: LAN / WAN / UNIDENTIFIED\n\n    Default: LAN \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enable DHCP4"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Host Configuration Protocol (DHCP)"})," is an application layer protocol that is used to provide:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Subnet Mask,"}),"\n",(0,t.jsx)(n.li,{children:"Router Address,"}),"\n",(0,t.jsx)(n.li,{children:"DNS Address,"}),"\n",(0,t.jsx)(n.li,{children:"Gateway IP."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Primary IP Address"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to add the primary IP address to the interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Gateway 4"})}),"\n",(0,t.jsx)(n.p,{children:"A gateway is a network node that forms a passage between two networks operating with different transmission protocols. This option helps the user to add the network gateway."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"IPv6 Address"})}),"\n",(0,t.jsx)(n.p,{children:"An IPv6 address is 128 bits in length and consists of eight, 16-bit fields, with each field bounded by a colon. Each field must contain a hexadecimal number, in contrast to the dotted-decimal notation of IPv4 addresses."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Secondary addresses"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to add their secondary IP addresses to the interface."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Local Link"})}),"\n",(0,t.jsx)(n.p,{children:"This option provides users to select the IP version of the interface. Either it is IPv4 or IPv6."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: IPV4 / IPv6\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Name Servers"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nameserver"})," is a server on the internet specialized in handling queries regarding the location of a domain name's various services. ",(0,t.jsx)(n.strong,{children:"Nameservers"})," are a fundamental part of the Domain Name System (DNS). They allow using domains instead of IP addresses."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h3,{id:"route",children:(0,t.jsx)(n.strong,{children:"Route"})}),"\n",(0,t.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Route From"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to select the source node for the route. Users can specify the network ID, Host IP as well as subnet in this area."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Route To"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to select the destination node point for the route. Users can specify the network ID, Host IP as well as subnet in this area."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Route Via"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to set the specific hop of their desire."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Route Type"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows users to set the type of route for this rule."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: DEFAULT / UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE\n\n    Default: DEFAULT \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Route Scope"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows us to set the credential."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: DEFAULT / GLOBAL / LINK / HOST\n\n    Default: DEFAULT \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Metric"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the metric value for the route defined in the rule."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h3,{id:"route-policy",children:(0,t.jsx)(n.strong,{children:"Route Policy"})}),"\n",(0,t.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy From"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the source IP location for which policy is being implemented."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy To"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the destination IP location for which policy is being implemented."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy Table"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the policy table for the policy rule."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Select Policy from table\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy Priority"})}),"\n",(0,t.jsx)(n.p,{children:"If the user has mentioned more than one policy rule under an interface, one can define the priority value for each rule. The less priority valued rule will be called first."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy Mark"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the policy mark for the policy rule."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Policy Service"})}),"\n",(0,t.jsx)(n.p,{children:"Users can specify the policy service for the policy rule."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Users need to add 2 default routes and 2 default policies while configuring a static WAN Interface."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},58390:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ethernet-3b6f3d489e4a5bdde9e5ab2508d885e7.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);