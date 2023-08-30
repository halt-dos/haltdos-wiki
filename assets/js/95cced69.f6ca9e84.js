"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89140],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(r),f=a,b=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(b,o(o({ref:e},u),{},{components:r})):n.createElement(b,o({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34617:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={sidebar_position:6},l="Traffic Shaping",s={unversionedId:"enterprise/ddos/profile/traffic_shaping",id:"enterprise/ddos/profile/traffic_shaping",title:"Traffic Shaping",description:"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks.",source:"@site/docs/enterprise/ddos/profile/traffic_shaping.md",sourceDirName:"enterprise/ddos/profile",slug:"/enterprise/ddos/profile/traffic_shaping",permalink:"/enterprise/ddos/profile/traffic_shaping",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"ddos_sidebar",previous:{title:"Application Layer",permalink:"/enterprise/ddos/profile/Application Layer"},next:{title:"Network Rules",permalink:"/enterprise/ddos/profile/network_rules"}},p={},u=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Inbound Rate</strong>",id:"inbound-rate",level:5},{value:"<strong>Inbound Burst</strong>",id:"inbound-burst",level:5},{value:"<strong>Outbound Rate</strong>",id:"outbound-rate",level:5},{value:"<strong>Outbound Burst</strong>",id:"outbound-burst",level:5}],d={toc:u},c="wrapper";function f(t){var{components:e}=t,o=i(t,["components"]);return(0,n.kt)(c,a({},d,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"traffic-shaping"}),"Traffic Shaping"),(0,n.kt)("p",null,"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Traffic shaping is a computer network bandwidth management technique that delays some or all data-gram in line with a traffic profile to improve latency, optimize performance, or increase usable bandwidth for certain types of packets by delaying other types."),(0,n.kt)("p",null,"It support protocols IPv4, IPv6, TCP, UDP, ICMP, IGMP, DNS, SIP, SNMP, NTP, SMTP, IRC, FTP etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(42346).Z,width:"493",height:"869"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(25842).Z,width:"503",height:"835"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(85145).Z,width:"520",height:"332"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > Traffic Shaping"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaping",src:r(95005).Z,width:"993",height:"404"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Inbound  Rate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer(Mbps)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Inbound Burst"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer(Mbps)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Outbound Rate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer(Mbps)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Outbound Burst"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer(Mbps)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"inbound-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Inbound Rate")),(0,n.kt)("p",null,"User can specify the rate of Inbound network traffic which will be allowed for traffic shaping. Inbound rate value should not be exceed the Inbound burst value."),(0,n.kt)("h5",a({},{id:"inbound-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Inbound Burst")),(0,n.kt)("p",null,"User can specify the burst of Inbound network traffic which will be allowed for traffic shaping. "),(0,n.kt)("h5",a({},{id:"outbound-rate"}),(0,n.kt)("strong",{parentName:"h5"},"Outbound Rate")),(0,n.kt)("p",null,"User can specify the rate of Outbound network traffic which will be allowed for traffic shaping. Outbound rate value should not be exceed the Outbound burst value."),(0,n.kt)("h5",a({},{id:"outbound-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Outbound Burst")),(0,n.kt)("p",null,"User can specify the burst of Outbound network traffic which will be allowed for traffic shaping."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Users are allowed to configure the traffic shaping for Global level as well as protocol based (ex. DNS, ICMP, HTTP, IPV4 etc)."))}f.isMDXComponent=!0},42346:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/traffic1-39e93da2751311d5d1153ca08c9dc35d.png"},25842:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/traffic2-a60ba3dfc61818c8a1dbcabfe90198ff.png"},85145:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/traffic3-f1ae26cb764edd49a78cfdb72d3b6f0f.png"},95005:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/traffic4-b942a5717a5558cd1dd58b899199e00d.png"}}]);