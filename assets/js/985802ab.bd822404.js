"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||s;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:2},o="Virtual LAN",i={unversionedId:"enterprise/platform/system/instance/network_settings/virtual_lan",id:"version-7.0/enterprise/platform/system/instance/network_settings/virtual_lan",title:"Virtual LAN",description:"Creating and managing multiple VLANs on Haltdos appliance",source:"@site/versioned_docs/version-7.0/enterprise/platform/system/instance/network_settings/virtual_lan.md",sourceDirName:"enterprise/platform/system/instance/network_settings",slug:"/enterprise/platform/system/instance/network_settings/virtual_lan",permalink:"/enterprise/platform/system/instance/network_settings/virtual_lan",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"Ethernet",permalink:"/enterprise/platform/system/instance/network_settings/ethernet"},next:{title:"Link Bonds",permalink:"/enterprise/platform/system/instance/network_settings/link_bonds"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Group Name</strong>",id:"group-name",level:5},{value:"<strong>VLAN ID</strong>",id:"vlan-id",level:5},{value:"<strong>Link</strong>",id:"link",level:5},{value:"<strong>Addresses</strong>",id:"addresses",level:5},{value:"<strong>Enable DHCP4</strong>",id:"enable-dhcp4",level:5},{value:"<strong>Enable DHCP6</strong>",id:"enable-dhcp6",level:5},{value:"<strong>Local Link</strong>",id:"local-link",level:5},{value:"<strong>Gateway4</strong>",id:"gateway4",level:5},{value:"<strong>Gateway6</strong>",id:"gateway6",level:5},{value:"<strong>Nameservers</strong>",id:"nameservers",level:5}],c={toc:u},d="wrapper";function k(e){var{components:t}=e,l=s(e,["components"]);return(0,r.kt)(d,a({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"virtual-lan"}),"Virtual LAN"),(0,r.kt)("p",null,"Creating and managing multiple VLANs on Haltdos appliance"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This section shows how users can create and maintain multiple VLANs on Haltdos appliance / virtual instance. Apart from creating VLANs, users can also configure custom routing and route policies on traffic coming on VLANs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vlan",src:n(8249).Z,width:"1854",height:"972"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > Network > VLans")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"name"}),(0,r.kt)("strong",{parentName:"h5"},"Name")),(0,r.kt)("p",null,"This option allows users to set a user-friendly name for the VLANs."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"group-name"}),(0,r.kt)("strong",{parentName:"h5"},"Group Name")),(0,r.kt)("p",null,"This option allows users to set a group name that group name will be identified by the application hence it can be same as Name."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"vlan-id"}),(0,r.kt)("strong",{parentName:"h5"},"VLAN ID")),(0,r.kt)("p",null,"This option allows users to write a VLAN ID in decimal number system. This VLAN ID tag will be added into the packets that are moving outside the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"link"}),(0,r.kt)("strong",{parentName:"h5"},"Link")),(0,r.kt)("p",null,"This link option allows users to select interface for the VLAN configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"addresses"}),(0,r.kt)("strong",{parentName:"h5"},"Addresses")),(0,r.kt)("p",null,"This option allows users to set an IP addresses to the interface. This Interface should not be configured from the ",(0,r.kt)("strong",{parentName:"p"},"Ethernet")," section again."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"enable-dhcp4"}),(0,r.kt)("strong",{parentName:"h5"},"Enable DHCP4")),(0,r.kt)("p",null,"This option allows users to enable automatic IPv4 address configuration using DHCPv4."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"enable-dhcp6"}),(0,r.kt)("strong",{parentName:"h5"},"Enable DHCP6")),(0,r.kt)("p",null,"This option allows users to enable automatic IPv6 address configuration using DHCPv6."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"local-link"}),(0,r.kt)("strong",{parentName:"h5"},"Local Link")),(0,r.kt)("p",null,"This option allows users to set the local link for the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IPv4 / IPv6\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"gateway4"}),(0,r.kt)("strong",{parentName:"h5"},"Gateway4")),(0,r.kt)("p",null,"This option allows users to set an IPv4 gateway address. This gateway address will be used when packet destination address belongs to other networks."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"gateway6"}),(0,r.kt)("strong",{parentName:"h5"},"Gateway6")),(0,r.kt)("p",null,"This option allows users to set an IPv6 gateway address. This gateway address will be used packet's destination address belongs to other network."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"nameservers"}),(0,r.kt)("strong",{parentName:"h5"},"Nameservers")),(0,r.kt)("p",null,"This option allows users to set the name server or DNS server IP address."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}k.isMDXComponent=!0},8249:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vlan-c78e03165b1217dc27e1692a47248884.png"}}]);