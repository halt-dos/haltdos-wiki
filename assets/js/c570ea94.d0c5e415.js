"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[35929],{3905:(t,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>g});var e=a(67294);function l(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function r(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function d(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=e.createContext({}),o=function(t){var n=e.useContext(i),a=n;return t&&(a="function"==typeof t?t(n):d(d({},n),t)),a},u=function(t){var n=o(t.components);return e.createElement(i.Provider,{value:n},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},N=e.forwardRef((function(t,n){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=o(a),N=l,g=m["".concat(i,".").concat(N)]||m[N]||k[N]||r;return a?e.createElement(g,d(d({ref:n},u),{},{components:a})):e.createElement(g,d({ref:n},u))}));function g(t,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=a.length,d=new Array(r);d[0]=N;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=t,p[m]="string"==typeof t?t:l,d[1]=p;for(var o=2;o<r;o++)d[o]=a[o];return e.createElement.apply(null,d)}return e.createElement.apply(null,a)}N.displayName="MDXCreateElement"},98196:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>N,frontMatter:()=>d,metadata:()=>i,toc:()=>u});a(67294);var e=a(3905);function l(){return l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},l.apply(this,arguments)}function r(t,n){if(null==t)return{};var a,e,l=function(t,n){if(null==t)return{};var a,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||(l[a]=t[a]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)a=r[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const d={sidebar_position:3},p="Detection",i={unversionedId:"enterprise/ddos/profile/detection",id:"version-7.0/enterprise/ddos/profile/detection",title:"Detection",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/ddos/profile/detection.md",sourceDirName:"enterprise/ddos/profile",slug:"/enterprise/ddos/profile/detection",permalink:"/enterprise/ddos/profile/detection",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ddos_sidebar",previous:{title:"DPI Settings",permalink:"/enterprise/ddos/profile/dpi_settings"},next:{title:"Connections",permalink:"/enterprise/ddos/profile/connections/"}},o={},u=[{value:"How Haltdos Detection Works",id:"how-haltdos-detection-works",level:4},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Alarm Name",id:"alarm-name",level:5},{value:"Alarm Type",id:"alarm-type",level:5},{value:"1. Threshold",id:"1-threshold",level:5},{value:"Threshold",id:"threshold",level:5},{value:"Consecutive Threshold",id:"consecutive-threshold",level:5}],m={toc:u},k="wrapper";function N(t){var{components:n}=t,d=r(t,["components"]);return(0,e.kt)(k,l({},m,d,{components:n,mdxType:"MDXLayout"}),(0,e.kt)("h1",l({},{id:"detection"}),"Detection"),(0,e.kt)("hr",null),(0,e.kt)("p",null,"Detection is a process to analyze the network traffic in which packets are monitored in different fields. "),(0,e.kt)("h4",l({},{id:"how-haltdos-detection-works"}),"How Haltdos Detection Works"),(0,e.kt)("p",null,"User can set custom threshold values according to their network requirement. Detection is used to set the Alarm so that if any threshold value get breach user received an alert alarm for that."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alarm_type",src:a(45121).Z,width:"1499",height:"922"})),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alarm_type",src:a(54089).Z,width:"1544",height:"875"})),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alarm_type",src:a(92626).Z,width:"1549",height:"871"})),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alarm_type",src:a(31819).Z,width:"1555",height:"192"})),(0,e.kt)("h3",l({},{id:"how-to-use"}),"How to Use"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Go to ",(0,e.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > Detection"))),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Configure the settings")),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("p",{parentName:"li"},"Click on ",(0,e.kt)("strong",{parentName:"p"},"Save Changes")))),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Detection"),(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Anomaly Level"),(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Consecutive Threshold"),(0,e.kt)("th",l({parentName:"tr"},{align:null}),"Actions"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound Connection Flood (cps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound DNS Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound Generic Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound Generic Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound HTTP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound HTTP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound ICMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound ICMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IGMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IGMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv4 Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv4 Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv4 Fragmented Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv6 Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv6 Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv6 Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound IPv6 Fragmented Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound NTP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound NTP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound SIP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound SIP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound SNMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound SNMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP ACK Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP FIN Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP RST Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound TCP SYN Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound UDP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Inbound UDP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound Connection Flood (cps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound DNS Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound DNS Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound Generic Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound Generic Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound HTTP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound HTTP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound ICMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound ICMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IGMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IGMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv4 Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv4 Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv4 Fragmented Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv6 Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv6 Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound IPv6 Fragmented Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound NTP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound NTP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound SIP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound SIP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound SNMP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound SNMP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP ACK Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP FIN Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP RST Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound TCP SYN Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound UDP Flood (bps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Outbound UDP Flood (pps)"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Threshold"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"--"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"0"),(0,e.kt)("td",l({parentName:"tr"},{align:null}),"Edit")))),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alaram_type",src:a(10148).Z,width:"610",height:"421"})),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"ddos_detection_alaram_type",src:a(47962).Z,width:"612",height:"398"})),(0,e.kt)("h3",l({},{id:"description"}),"Description"),(0,e.kt)("h5",l({},{id:"alarm-name"}),"Alarm Name"),(0,e.kt)("p",null,"This field contains the name of Alarm which user choose to edit"),(0,e.kt)("h5",l({},{id:"alarm-type"}),"Alarm Type"),(0,e.kt)("p",null,"In this field user can choose what type of alarm they want to set. In Haltdos there are two type of Alarm types"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"Threshold"),(0,e.kt)("li",{parentName:"ol"},"Anomaly")),(0,e.kt)("h5",l({},{id:"1-threshold"}),"1. Threshold"),(0,e.kt)("h5",l({},{id:"threshold"}),"Threshold"),(0,e.kt)("p",null,"User can specify the threshold value(in bps/pps according to the alarm type) which help in monitoring the network. If the set threshold value is breached user will get the alert alarm."),(0,e.kt)("h5",l({},{id:"consecutive-threshold"}),"Consecutive Threshold"),(0,e.kt)("p",null,"In this field user can specify the consecutive value of threshold. Consecutive Threshold counts the breach attempts, if the breach attempts match with the input value alert alarm will be generated. By specifying this filed user can avoid false alerting."))}N.isMDXComponent=!0},10148:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/ddosdetection-1cfeb2638040eb7bb07f51266ff7421f.png"},47962:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/ddosdetection1-d738d8191c21e64c0de8cd96974442f1.png"},45121:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/detect-8adb8277fff1e9d61ba3703f7ac3e2e8.png"},54089:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/detection1-5b18ba5f11831360ea8f17319c5e2f28.png"},92626:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/detection2-95559d6294132edbfed179285f6bf97d.png"},31819:(t,n,a)=>{a.d(n,{Z:()=>e});const e=a.p+"assets/images/detection3-d67d2722ca55fd6b91d07439df22f2b3.png"}}]);