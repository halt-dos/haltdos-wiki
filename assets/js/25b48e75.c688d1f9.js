"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1},s="Ethernet",i={unversionedId:"enterprise/platform/system/Infrastructure/instance/network_settings/ethernet",id:"enterprise/platform/system/Infrastructure/instance/network_settings/ethernet",title:"Ethernet",description:"Listing of ethernet cards (NIC) on the hardware / VM",source:"@site/docs/enterprise/platform/system/Infrastructure/instance/network_settings/ethernet.md",sourceDirName:"enterprise/platform/system/Infrastructure/instance/network_settings",slug:"/enterprise/platform/system/Infrastructure/instance/network_settings/ethernet",permalink:"/enterprise/platform/system/Infrastructure/instance/network_settings/ethernet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Syslog",permalink:"/enterprise/platform/system/Infrastructure/instance/integration/syslog"},next:{title:"Routing Tables",permalink:"/enterprise/platform/system/Infrastructure/instance/routing/routingtables"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"System Name",id:"system-name",level:5},{value:"Managed",id:"managed",level:5},{value:"System Name",id:"system-name-1",level:5},{value:"Group Name",id:"group-name",level:5},{value:"Bus Address",id:"bus-address",level:5},{value:"MAC Address",id:"mac-address",level:5},{value:"Current IP Addresses",id:"current-ip-addresses",level:5},{value:"Name",id:"name",level:5},{value:"Description",id:"description-1",level:5},{value:"Role",id:"role",level:5},{value:"Enable DHCP4",id:"enable-dhcp4",level:4},{value:"Dynamic Host Configuration Protocol (DHCP)",id:"dynamic-host-configuration-protocol-dhcp",level:5},{value:"<strong>Route</strong>",id:"route",level:3},{value:"Description",id:"description-2",level:3},{value:"<strong>Route Policy</strong>",id:"route-policy",level:3},{value:"Description",id:"description-3",level:3}],c={toc:u},d="wrapper";function k(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)(d,a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"ethernet"}),"Ethernet"),(0,r.kt)("p",null,"Listing of ethernet cards (NIC) on the hardware / VM"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This section allows you to configure Ethernet settings on available NIC cards on the physical or virtual instance. You can configure IP addresses, gateway, routes and routing policies per interface. "),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Infrastructure  > Network > Ethernet")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save CHanges"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ethernet",src:n(74153).Z,width:"1900",height:"879"})),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"system-name"}),"System Name"),(0,r.kt)("p",null,"The System names are Network interface names that are dynamically provided by OS. By default, they are assigned on a first-come, first-served numerical basis. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lo \u2013 Loopback interface."),(0,r.kt)("li",{parentName:"ul"},"eth0 \u2013 My first Ethernet network interface on Linux."),(0,r.kt)("li",{parentName:"ul"},"vboxnet0, vmnet1, vmnet8 \u2013 Virtual machine interface working in bridge mode or NAT mode on Linux.")),(0,r.kt)("h5",a({},{id:"managed"}),"Managed"),(0,r.kt)("p",null,"Users can specify if the interface is managed on OS level or not."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"system-name-1"}),"System Name"),(0,r.kt)("p",null,"It will show the system name of the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: ens160 \n")),(0,r.kt)("h5",a({},{id:"group-name"}),"Group Name"),(0,r.kt)("p",null,"It will show the Group Name."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: ens160 \n")),(0,r.kt)("h5",a({},{id:"bus-address"}),"Bus Address"),(0,r.kt)("p",null,"This option shows the bus address of the system."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: ens160 \n")),(0,r.kt)("h5",a({},{id:"mac-address"}),"MAC Address"),(0,r.kt)("p",null,"This option shows the MAC address of the system."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: 2 \n")),(0,r.kt)("h5",a({},{id:"current-ip-addresses"}),"Current IP Addresses"),(0,r.kt)("p",null,"This option shows the Current IP Addresses of the system."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: 2 \n")),(0,r.kt)("h5",a({},{id:"name"}),"Name"),(0,r.kt)("p",null,"This option allows users to change the desired name to the Interface. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: ens160 \n")),(0,r.kt)("h5",a({},{id:"description-1"}),"Description"),(0,r.kt)("p",null,"This option helps users to write a short description for the Interface. Users can write any information like its segment, scope, subnet information, and other notes as well."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"role"}),"Role"),(0,r.kt)("p",null,"This feature helps users to select the exact working mechanism of the interface, either it'll be working in the LAN segment or it'll be part of the Wide Area Network. Users can also select the third option undefined."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LAN / WAN / UNIDENTIFIED\n\nDefault: LAN \n")),(0,r.kt)("h4",a({},{id:"enable-dhcp4"}),"Enable DHCP4"),(0,r.kt)("h5",a({},{id:"dynamic-host-configuration-protocol-dhcp"}),"Dynamic Host Configuration Protocol (DHCP)"),(0,r.kt)("p",null,"It is an application layer protocol that is used to provide:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Subnet Mask,"),(0,r.kt)("li",{parentName:"ol"},"Router Address, "),(0,r.kt)("li",{parentName:"ol"},"DNS Address,"),(0,r.kt)("li",{parentName:"ol"},"Gateway IP.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Primary IP Address")),(0,r.kt)("p",null,"This option allows users to add the primary IP address to the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway 4")),(0,r.kt)("p",null,"A gateway is a network node that forms a passage between two networks operating with different transmission protocols. This option helps the user to add the network gateway."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IPv6 Address")),(0,r.kt)("p",null,"An IPv6 address is 128 bits in length and consists of eight, 16-bit fields, with each field bounded by a colon. Each field must contain a hexadecimal number, in contrast to the dotted-decimal notation of IPv4 addresses."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Secondary addresses")),(0,r.kt)("p",null,"This option allows users to add their secondary IP addresses to the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Local Link")),(0,r.kt)("p",null,"This option provides users to select the IP version of the interface. Either it is IPv4 or IPv6."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IPV4 / IPv6\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name Servers")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nameserver")," is a server on the internet specialized in handling queries regarding the location of a domain name's various services. ",(0,r.kt)("strong",{parentName:"p"},"Nameservers")," are a fundamental part of the Domain Name System (DNS). They allow using domains instead of IP addresses. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h3",a({},{id:"route"}),(0,r.kt)("strong",{parentName:"h3"},"Route")),(0,r.kt)("h3",a({},{id:"description-2"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Route From")),(0,r.kt)("p",null,"This option allows users to select the source node for the route. Users can specify the network ID, Host IP as well as subnet in this area."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Route To")),(0,r.kt)("p",null,"This option allows users to select the destination node point for the route. Users can specify the network ID, Host IP as well as subnet in this area."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Route Via")),(0,r.kt)("p",null,"This option allows users to set the specific hop of their desire. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Route Type")),(0,r.kt)("p",null,"This option allows users to set the type of route for this rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: DEFAULT / UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE\n\nDefault: DEFAULT \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Route Scope")),(0,r.kt)("p",null,"This option allows us to set the credential."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: DEFAULT / GLOBAL / LINK / HOST\n\nDefault: DEFAULT \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metric")),(0,r.kt)("p",null,"Users can specify the metric value for the route defined in the rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h3",a({},{id:"route-policy"}),(0,r.kt)("strong",{parentName:"h3"},"Route Policy")),(0,r.kt)("h3",a({},{id:"description-3"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy From")),(0,r.kt)("p",null,"Users can specify the source IP location for which policy is being implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy To")),(0,r.kt)("p",null,"Users can specify the destination IP location for which policy is being implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Table")),(0,r.kt)("p",null,"Users can specify the policy table for the policy rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select Policy from table\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Priority")),(0,r.kt)("p",null,"If the user has mentioned more than one policy rule under an interface, one can define the priority value for each rule. The less priority valued rule will be called first."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Mark")),(0,r.kt)("p",null,"Users can specify the policy mark for the policy rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Service")),(0,r.kt)("p",null,"Users can specify the policy service for the policy rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Users need to add 2 default routes and 2 default policies while configuring a static WAN Interface.")))}k.isMDXComponent=!0},74153:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysEthernet-b51f0d6265443c139c3bde1a47ab104b.png"}}]);