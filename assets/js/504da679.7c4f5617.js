"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[33451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:5},l="UDP Protocol",p={unversionedId:"enterprise/ddos/profile/dpi_settings/udp-protocol",id:"version-7.0/enterprise/ddos/profile/dpi_settings/udp-protocol",title:"UDP Protocol",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/ddos/profile/dpi_settings/udp-protocol.md",sourceDirName:"enterprise/ddos/profile/dpi_settings",slug:"/enterprise/ddos/profile/dpi_settings/udp-protocol",permalink:"/enterprise/ddos/profile/dpi_settings/udp-protocol",draft:!1,tags:[],version:"7.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ddos_sidebar",previous:{title:"TCP Protocol",permalink:"/enterprise/ddos/profile/dpi_settings/tcp-protocol"},next:{title:"SNMP Protocol",permalink:"/enterprise/ddos/profile/dpi_settings/snmp-protocol"}},s={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Setting</strong>",id:"enable-setting",level:5},{value:"<strong>Invalid Minimum Datagram Length</strong>",id:"invalid-minimum-datagram-length",level:5},{value:"<strong>Invalid Maximum IPv4 Datagram Length</strong>",id:"invalid-maximum-ipv4-datagram-length",level:5},{value:"<strong>Invalid Maximum IPv6 Datagram Length</strong>",id:"invalid-maximum-ipv6-datagram-length",level:5},{value:"<strong>Bad Packet Length</strong>",id:"bad-packet-length",level:5},{value:"<strong>Invalid Checksum</strong>",id:"invalid-checksum",level:5}],d={toc:c},u="wrapper";function m(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(u,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"udp-protocol"}),"UDP Protocol"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Deep packet inspection of UDP header for bidirectional traffic"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dpi_settings",src:n(81870).Z,width:"930",height:"344"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > DPI Settings > Select DPI Settings"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"enable-setting"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Setting")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",a({},{id:"invalid-minimum-datagram-length"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Minimum Datagram Length")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",a({},{id:"invalid-maximum-ipv4-datagram-length"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Maximum IPv4 Datagram Length")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",a({},{id:"invalid-maximum-ipv6-datagram-length"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Maximum IPv6 Datagram Length")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",a({},{id:"bad-packet-length"}),(0,r.kt)("strong",{parentName:"h5"},"Bad Packet Length")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",a({},{id:"invalid-checksum"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Checksum")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")))}m.isMDXComponent=!0},81870:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/udp-beb1d9a764c2e43fa4dfba2166d0a681.png"}}]);