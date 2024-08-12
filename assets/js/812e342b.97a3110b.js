"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:1},s="DHCP Networks",i={unversionedId:"enterprise/platform/system/instance/gateway/network",id:"enterprise/platform/system/instance/gateway/network",title:"DHCP Networks",description:"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses.",source:"@site/docs/enterprise/platform/system/instance/gateway/network.md",sourceDirName:"enterprise/platform/system/instance/gateway",slug:"/enterprise/platform/system/instance/gateway/network",permalink:"/v8/enterprise/platform/system/instance/gateway/network",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Monitor",permalink:"/v8/enterprise/platform/system/instance/monitor"},next:{title:"DHCP Settings",permalink:"/v8/enterprise/platform/system/instance/gateway/settings"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2},{value:"Network Name",id:"network-name",level:5},{value:"Network Name",id:"network-name-1",level:5},{value:"Default Gateway",id:"default-gateway",level:5},{value:"Allowed IP range",id:"allowed-ip-range",level:5},{value:"Description",id:"description-1",level:3}],d={toc:c},u="wrapper";function m(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)(u,a({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"dhcp-networks"}),"DHCP Networks"),(0,r.kt)("p",null,"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhcp",src:n(54913).Z,width:"1902",height:"900"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > > DHCP")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"network-name"}),"Network Name"),(0,r.kt)("p",null,"This option allows users to set the desired name for the network setting."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"network-name-1"}),"Network Name"),(0,r.kt)("p",null,"Select to deploy dhcp or not"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Local Link")),(0,r.kt)("p",null,"This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IPv4 / IPv6\n\nDefault: IPv4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Interface")),(0,r.kt)("p",null,"This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: eth0\n\nDefault: eth0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subnet Network")),(0,r.kt)("p",null,"This feature allows you to share the subnet mask for the subnetwork."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select Sub Network\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nameserver"),"\nName Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select Server\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Mask")),(0,r.kt)("p",null,"This option allows users to set the network mask which will be assigned to devices on the network."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"default-gateway"}),"Default Gateway"),(0,r.kt)("p",null,"This option allows users to set the default gateway IP as it will be assigned to devices in the network."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"allowed-ip-range"}),"Allowed IP range"),(0,r.kt)("p",null,"Select Allowed IP Range"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mac IP Binding")),(0,r.kt)("p",null,"Mac-binding essentially means binding together the MAC and IP addresses, so that all requests from that IP address are served only by the computer having that particular MAC address. In effect, it means that if the IP address or the MAC address changes, the device can no longer access the Internet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhcp",src:n(54929).Z,width:"916",height:"316"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"MAC Address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP Address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")))),(0,r.kt)("h3",a({},{id:"description-1"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MAC Address")),(0,r.kt)("p",null,"This option allows users to mention the MAC address which need to be bind with a IP address for MAC IP Binding."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IP Address")),(0,r.kt)("p",null,"This option allows users to mention the IP address which need to be bind with MAC Address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"This field allows users to mention a short description about the MAC IP binding or the reason for the binding."))}m.isMDXComponent=!0},54929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dhcpmac-96541cb459cbc9d3e6f4c8167c946c8d.png"},54913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dhcp_network-cdf2931f5614d90ea861c1750383050b.png"}}]);