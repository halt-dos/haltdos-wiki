/*! For license information please see 4cacede4.c7d67748.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50136],{93308:(d,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/ddos/profile/detection","title":"Detection","description":"Detection is a process to analyze the network traffic in which packets are monitored in different fields.","source":"@site/docs/enterprise/ddos/profile/detection.md","sourceDirName":"enterprise/ddos/profile","slug":"/enterprise/ddos/profile/detection","permalink":"/enterprise/ddos/profile/detection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"ddos_sidebar","previous":{"title":"HTTP Protocol","permalink":"/enterprise/ddos/profile/dpi_settings/http"},"next":{"title":"Connections","permalink":"/enterprise/ddos/profile/connections/"}}');var r=s(74848),n=s(28453);const l={sidebar_position:3},i="Detection",h={},c=[{value:"How Haltdos Detection Works",id:"how-haltdos-detection-works",level:4},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Alarm Name",id:"alarm-name",level:5},{value:"Alarm Type",id:"alarm-type",level:5},{value:"1. Threshold",id:"1-threshold",level:5},{value:"Threshold",id:"threshold",level:5},{value:"Consecutive Threshold",id:"consecutive-threshold",level:5}];function o(d){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...d.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"detection",children:"Detection"})}),"\n",(0,r.jsx)(e.p,{children:"Detection is a process to analyze the network traffic in which packets are monitored in different fields."}),"\n",(0,r.jsx)(e.h4,{id:"how-haltdos-detection-works",children:"How Haltdos Detection Works"}),"\n",(0,r.jsx)(e.p,{children:"User can set custom threshold values according to their network requirement. Detection is used to set the Alarm so that if any threshold value get breach user received an alert alarm for that."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alarm_type",src:s(66689).A+"",width:"1432",height:"903"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alarm_type",src:s(96688).A+"",width:"1544",height:"875"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alarm_type",src:s(62091).A+"",width:"1549",height:"871"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alarm_type",src:s(98434).A+"",width:"1555",height:"192"})}),"\n",(0,r.jsx)(e.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Go to ",(0,r.jsx)(e.strong,{children:"Apps > DDoS > Profile > Detection"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Configure the settings"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Click on ",(0,r.jsx)(e.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Detection"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Threshold"}),(0,r.jsx)(e.th,{children:"Anomaly Level"}),(0,r.jsx)(e.th,{children:"Consecutive Threshold"}),(0,r.jsx)(e.th,{children:"Actions"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound Connection Flood (cps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound DNS Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound Generic Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound Generic Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound HTTP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound HTTP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound ICMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound ICMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IGMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IGMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv4 Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv4 Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv4 Fragmented Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv6 Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv6 Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv6 Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound IPv6 Fragmented Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound NTP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound NTP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound SIP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound SIP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound SNMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound SNMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP ACK Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP FIN Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP RST Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound TCP SYN Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound UDP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Inbound UDP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound Connection Flood (cps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound DNS Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound DNS Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound Generic Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound Generic Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound HTTP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound HTTP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound ICMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound ICMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IGMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IGMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv4 Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv4 Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv4 Fragmented Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv6 Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv6 Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound IPv6 Fragmented Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound NTP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound NTP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound SIP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound SIP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound SNMP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound SNMP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP ACK Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP FIN Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP RST Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound TCP SYN Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound UDP Flood (bps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Outbound UDP Flood (pps)"}),(0,r.jsx)(e.td,{children:"Threshold"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"--"}),(0,r.jsx)(e.td,{children:"0"}),(0,r.jsx)(e.td,{children:"Edit"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alaram_type",src:s(22439).A+"",width:"610",height:"421"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"ddos_detection_alaram_type",src:s(13182).A+"",width:"612",height:"398"})}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h5,{id:"alarm-name",children:"Alarm Name"}),"\n",(0,r.jsx)(e.p,{children:"This field contains the name of Alarm which user choose to edit"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})}),"\n",(0,r.jsx)(e.h5,{id:"alarm-type",children:"Alarm Type"}),"\n",(0,r.jsx)(e.p,{children:"In this field user can choose what type of alarm they want to set. In Haltdos there are two type of Alarm types"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"    Accepted values: Threshold / Anomaly\n\n    Default: 1\n"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Threshold"}),"\n",(0,r.jsx)(e.li,{children:"Anomaly"}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"1-threshold",children:"1. Threshold"}),"\n",(0,r.jsx)(e.h5,{id:"threshold",children:"Threshold"}),"\n",(0,r.jsx)(e.p,{children:"User can specify the threshold value(in bps/pps according to the alarm type) which help in monitoring the network. If the set threshold value is breached user will get the alert alarm."}),"\n",(0,r.jsx)(e.h5,{id:"consecutive-threshold",children:"Consecutive Threshold"}),"\n",(0,r.jsx)(e.p,{children:"In this field user can specify the consecutive value of threshold. Consecutive Threshold counts the breach attempts, if the breach attempts match with the input value alert alarm will be generated. By specifying this filed user can avoid false alerting."})]})}function x(d={}){const{wrapper:e}={...(0,n.R)(),...d.components};return e?(0,r.jsx)(e,{...d,children:(0,r.jsx)(o,{...d})}):o(d)}},21020:(d,e,s)=>{var t=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(d,e,s){var t,n={},c=null,o=null;for(t in void 0!==s&&(c=""+s),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(o=e.ref),e)l.call(e,t)&&!h.hasOwnProperty(t)&&(n[t]=e[t]);if(d&&d.defaultProps)for(t in e=d.defaultProps)void 0===n[t]&&(n[t]=e[t]);return{$$typeof:r,type:d,key:c,ref:o,props:n,_owner:i.current}}e.Fragment=n,e.jsx=c,e.jsxs=c},74848:(d,e,s)=>{d.exports=s(21020)},22439:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/ddosdetection-1cfeb2638040eb7bb07f51266ff7421f.png"},13182:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/ddosdetection1-d738d8191c21e64c0de8cd96974442f1.png"},96688:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/detection1-5b18ba5f11831360ea8f17319c5e2f28.png"},62091:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/detection2-95559d6294132edbfed179285f6bf97d.png"},98434:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/detection3-d67d2722ca55fd6b91d07439df22f2b3.png"},66689:(d,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/securityprofile_detection_thresholds-656aa32d9efd9f8e14e5ab54ee080882.png"},28453:(d,e,s)=>{s.d(e,{R:()=>l,x:()=>i});var t=s(96540);const r={},n=t.createContext(r);function l(d){const e=t.useContext(n);return t.useMemo((function(){return"function"==typeof d?d(e):{...e,...d}}),[e,d])}function i(d){let e;return e=d.disableParentContext?"function"==typeof d.components?d.components(r):d.components||r:l(d.components),t.createElement(n.Provider,{value:e},d.children)}}}]);