"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:6},l="Traffic Shaping",s={unversionedId:"enterprise/ddos/profile/traffic_shaping",id:"enterprise/ddos/profile/traffic_shaping",title:"Traffic Shaping",description:"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks.",source:"@site/docs/enterprise/ddos/profile/traffic_shaping.md",sourceDirName:"enterprise/ddos/profile",slug:"/enterprise/ddos/profile/traffic_shaping",permalink:"/v8/enterprise/ddos/profile/traffic_shaping",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"ddos_sidebar",previous:{title:"Application Layer",permalink:"/v8/enterprise/ddos/profile/application_layer"},next:{title:"Network Rules",permalink:"/v8/enterprise/ddos/profile/network_rules"}},p={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Inbound Rate</strong>",id:"inbound-rate",level:5},{value:"<strong>Inbound Burst</strong>",id:"inbound-burst",level:5},{value:"<strong>Outbound Rate</strong>",id:"outbound-rate",level:5},{value:"<strong>Outbound Burst</strong>",id:"outbound-burst",level:5}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"traffic-shaping"}),"Traffic Shaping"),(0,n.kt)("p",null,"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Traffic shaping is a computer network bandwidth management technique that delays some or all data-gram in line with a traffic profile to improve latency, optimize performance, or increase usable bandwidth for certain types of packets by delaying other types."),(0,n.kt)("p",null,"It support protocols IPv4, IPv6, TCP, UDP, ICMP, IGMP, DNS, SIP, SNMP, NTP, SMTP, IRC, FTP etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(25769).Z,width:"1427",height:"900"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(47226).Z,width:"812",height:"792"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > Traffic Shaping"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(95005).Z,width:"993",height:"404"})),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"inbound-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Inbound Rate")),(0,n.kt)("p",null,"User can specify the rate of Inbound network traffic which will be allowed for traffic shaping. Inbound rate value should not be exceed the Inbound burst value."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",a({},{id:"inbound-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Inbound Burst")),(0,n.kt)("p",null,"User can specify the burst of Inbound network traffic which will be allowed for traffic shaping."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,n.kt)("h5",a({},{id:"outbound-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Outbound Rate")),(0,n.kt)("p",null,"User can specify the rate of Outbound network traffic which will be allowed for traffic shaping. Outbound rate value should not be exceed the Outbound burst value."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",a({},{id:"outbound-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Outbound Burst")),(0,n.kt)("p",null,"User can specify the burst of Outbound network traffic which will be allowed for traffic shaping."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Users are allowed to configure the traffic shaping for Global level as well as protocol based (ex. DNS, ICMP, HTTP, IPV4 etc)."))}d.isMDXComponent=!0},95005:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/traffic4-b942a5717a5558cd1dd58b899199e00d.png"},25769:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profile_traffic_shapping-5da9fabe811784299b4018d23592a77e.png"},47226:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/traffic_shaping-e0913db7b8cc0c7469d378c54a8fc455.png"}}]);