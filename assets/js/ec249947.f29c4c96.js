/*! For license information please see ec249947.f29c4c96.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[40120],{21920:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"enterprise/ddos/profile/connections/tcp_settings","title":"TCP Settings","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/ddos/profile/connections/tcp_settings.md","sourceDirName":"enterprise/ddos/profile/connections","slug":"/enterprise/ddos/profile/connections/tcp_settings","permalink":"/v6/enterprise/ddos/profile/connections/tcp_settings","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ddos_sidebar","previous":{"title":"Connections","permalink":"/v6/enterprise/ddos/profile/connections/"},"next":{"title":"TCP Shield","permalink":"/v6/enterprise/ddos/profile/connections/tcp_shield"}}');var o=t(74848),s=t(28453);const r={sidebar_position:1},d="TCP Settings",c={},l=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>TCP Settings:</strong>",id:"tcp-settings-1",level:3},{value:"<strong>Agressive AGING</strong>",id:"agressive-aging",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>TCP</strong>",id:"tcp",level:5},{value:"<strong>Payload Length Misbehaviour Threshold</strong>",id:"payload-length-misbehaviour-threshold",level:5},{value:"<strong>Minimum payload length</strong>",id:"minimum-payload-length",level:5},{value:"<strong>Allow beyond max connection</strong>",id:"allow-beyond-max-connection",level:5},{value:"Note:- If Enabled, the new flows beyond the limit will not be tracked",id:"note--if-enabled-the-new-flows-beyond-the-limit-will-not-be-tracked",level:5},{value:"<strong>Max Inbound concurrent connections</strong>",id:"max-inbound-concurrent-connections",level:5},{value:"<strong>Max Outbound concurrent connections</strong>",id:"max-outbound-concurrent-connections",level:5},{value:"<strong>Max Connections Per Source</strong>",id:"max-connections-per-source",level:5},{value:"<strong>Out of order drops</strong>",id:"out-of-order-drops",level:5},{value:"<strong>Window size validation</strong>",id:"window-size-validation",level:5},{value:"<strong>Graceful Startup period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>Limit Tracking Connections on Ports</strong>",id:"limit-tracking-connections-on-ports",level:5},{value:"<strong>Connection FIN Time Wait</strong>",id:"connection-fin-time-wait",level:5},{value:"<strong>Connection proxy</strong>",id:"connection-proxy",level:5},{value:"<strong>Connection Proxy Trigger Threshold</strong>",id:"connection-proxy-trigger-threshold",level:5},{value:"Note:  Applicable only when Connection Proxy is enabled",id:"note--applicable-only-when-connection-proxy-is-enabled",level:5},{value:"<strong>Connection proxy advertised MSS</strong>",id:"connection-proxy-advertised-mss",level:5},{value:"<strong>Aggressive Aging Settings:</strong>",id:"aggressive-aging-settings",level:5},{value:"<strong>Description:</strong>",id:"description-1",level:3},{value:"<strong>Aggresive Aging Settings</strong>",id:"aggresive-aging-settings",level:5},{value:"<strong>Aging Enabled</strong>",id:"aging-enabled",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Incomplete connection timeout</strong>",id:"incomplete-connection-timeout",level:5}];function h(n){const e={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"tcp-settings",children:"TCP Settings"})}),"\n",(0,o.jsx)(e.p,{children:"Overview"}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsx)(e.p,{children:"In DDoS connection, you can configure Connection based protocols which will regulate the payload length, number of inbound & outbound connections, out of order drops, TCP ports, FIN time wait, TCP connection Proxy threshold & advertised MSS."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:t(70512).A+"",width:"1920",height:"908"})}),"\n",(0,o.jsx)(e.h3,{id:"how-to-use",children:(0,o.jsx)(e.strong,{children:"How to Use:"})}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Stack > Resource > DDoS > Profile > Connection"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Configure the settings"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Click on Save Changes"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:t(64330).A+"",width:"1571",height:"272"})}),"\n",(0,o.jsx)(e.h3,{id:"tcp-settings-1",children:(0,o.jsx)(e.strong,{children:"TCP Settings:"})}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Settings"}),(0,o.jsx)(e.th,{children:"Accepted Values"}),(0,o.jsx)(e.th,{children:"Default"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"TCP"}),(0,o.jsx)(e.td,{children:"Boolean"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Max Inbound concurrent connections"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"1000000"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Max Outbound concurrent connections"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"1000000"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Max Connections Per Source"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Out of order drops"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Window size validation"}),(0,o.jsx)(e.td,{children:"Boolean"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"PIayload Length Misbehaviour Threshold"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Minimum payload length"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Allow beyond max connections"}),(0,o.jsx)(e.td,{children:"Boolean"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Limit Tracking Connections on Ports"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"Blank"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Connection FIN Time Wait"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"10"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Connection proxy"}),(0,o.jsx)(e.td,{children:"Boolean"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Connection proxy trigger threshold"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"0"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Connection proxy advertised MSS"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"1460"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"agressive-aging",children:(0,o.jsx)(e.strong,{children:"Agressive AGING"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"tcp_aging",src:t(31443).A+"",width:"1523",height:"805"})}),"\n",(0,o.jsx)(e.h3,{id:"description",children:(0,o.jsx)(e.strong,{children:"Description:"})}),"\n",(0,o.jsx)(e.h5,{id:"tcp",children:(0,o.jsx)(e.strong,{children:"TCP"})}),"\n",(0,o.jsx)(e.p,{children:"Enable/Disable validation checks for IPv4/ IPv6 packets"}),"\n",(0,o.jsx)(e.h5,{id:"payload-length-misbehaviour-threshold",children:(0,o.jsx)(e.strong,{children:"Payload Length Misbehaviour Threshold"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the threshold limit for misbehaviour. IP address breaching the threshold is temporarily blacklisted"}),"\n",(0,o.jsx)(e.h5,{id:"minimum-payload-length",children:(0,o.jsx)(e.strong,{children:"Minimum payload length"})}),"\n",(0,o.jsx)(e.p,{children:"Specify minimum payload length of packets in TCP connection"}),"\n",(0,o.jsx)(e.h5,{id:"allow-beyond-max-connection",children:(0,o.jsx)(e.strong,{children:"Allow beyond max connection"})}),"\n",(0,o.jsx)(e.p,{children:"Specify if new TCP flows should be allowed beyond the max"}),"\n",(0,o.jsx)(e.h5,{id:"note--if-enabled-the-new-flows-beyond-the-limit-will-not-be-tracked",children:"Note:- If Enabled, the new flows beyond the limit will not be tracked"}),"\n",(0,o.jsx)(e.h5,{id:"max-inbound-concurrent-connections",children:(0,o.jsx)(e.strong,{children:"Max Inbound concurrent connections"})}),"\n",(0,o.jsx)(e.p,{children:"Sets the maximum inbound concurrent TCP connections to allow"}),"\n",(0,o.jsx)(e.h5,{id:"max-outbound-concurrent-connections",children:(0,o.jsx)(e.strong,{children:"Max Outbound concurrent connections"})}),"\n",(0,o.jsx)(e.p,{children:"Sets the maximum outbound concurrent TCP connections to allow"}),"\n",(0,o.jsx)(e.h5,{id:"max-connections-per-source",children:(0,o.jsx)(e.strong,{children:"Max Connections Per Source"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the max concurrent connections from a single source IP address"}),"\n",(0,o.jsx)(e.h5,{id:"out-of-order-drops",children:(0,o.jsx)(e.strong,{children:"Out of order drops"})}),"\n",(0,o.jsx)(e.p,{children:"Specify if system should drop TCP packets not belonging to a TCP flow"}),"\n",(0,o.jsx)(e.h5,{id:"window-size-validation",children:(0,o.jsx)(e.strong,{children:"Window size validation"})}),"\n",(0,o.jsx)(e.p,{children:"Specify if system should drop invalid window size header in TCP flow"}),"\n",(0,o.jsx)(e.h5,{id:"graceful-startup-period",children:(0,o.jsx)(e.strong,{children:"Graceful Startup period"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)"}),"\n",(0,o.jsx)(e.h5,{id:"limit-tracking-connections-on-ports",children:(0,o.jsx)(e.strong,{children:"Limit Tracking Connections on Ports"})}),"\n",(0,o.jsx)(e.p,{children:"Specify TCP port(s) that will be tracked for flow monitoring"}),"\n",(0,o.jsx)(e.h5,{id:"connection-fin-time-wait",children:(0,o.jsx)(e.strong,{children:"Connection FIN Time Wait"})}),"\n",(0,o.jsx)(e.p,{children:"This field specifies the time duration for tracking TCP connections after graceful termination. This allows any unsent packets to be transmitted without getting dropped"}),"\n",(0,o.jsx)(e.h5,{id:"connection-proxy",children:(0,o.jsx)(e.strong,{children:"Connection proxy"})}),"\n",(0,o.jsx)(e.p,{children:"Enable TCP connection proxy for protecting against TCP Flood attacks such as TCP SYN Flood, etc"}),"\n",(0,o.jsx)(e.h5,{id:"connection-proxy-trigger-threshold",children:(0,o.jsx)(e.strong,{children:"Connection Proxy Trigger Threshold"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the number of concurrent flows beyond with Connection Proxy should be enabled for subsequent concurrent TCP flows"}),"\n",(0,o.jsx)(e.h5,{id:"note--applicable-only-when-connection-proxy-is-enabled",children:"Note:  Applicable only when Connection Proxy is enabled"}),"\n",(0,o.jsx)(e.h5,{id:"connection-proxy-advertised-mss",children:(0,o.jsx)(e.strong,{children:"Connection proxy advertised MSS"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the connection proxy advertised MSS"}),"\n",(0,o.jsx)(e.h5,{id:"aggressive-aging-settings",children:(0,o.jsx)(e.strong,{children:"Aggressive Aging Settings:"})}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Settings"}),(0,o.jsx)(e.th,{children:"Accepted Values"}),(0,o.jsx)(e.th,{children:"Default"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Aging Enable"}),(0,o.jsx)(e.td,{children:"Boolen"}),(0,o.jsx)(e.td,{children:"False"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Connection Time Out"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"30"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"Incomplete Connection Time Out"}),(0,o.jsx)(e.td,{children:"Integer"}),(0,o.jsx)(e.td,{children:"30"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"description-1",children:(0,o.jsx)(e.strong,{children:"Description:"})}),"\n",(0,o.jsx)(e.h5,{id:"aggresive-aging-settings",children:(0,o.jsx)(e.strong,{children:"Aggresive Aging Settings"})}),"\n",(0,o.jsx)(e.h5,{id:"aging-enabled",children:(0,o.jsx)(e.strong,{children:"Aging Enabled"})}),"\n",(0,o.jsx)(e.p,{children:"Enable Aggressive Aging for protecting against TCP Connection flood attacks"}),"\n",(0,o.jsx)(e.h5,{id:"connection-timeout",children:(0,o.jsx)(e.strong,{children:"Connection Timeout"})}),"\n",(0,o.jsx)(e.p,{children:"Time after which the established inbound TCP connection will be considered stale and will be scheduled for deletion"}),"\n",(0,o.jsx)(e.h5,{id:"incomplete-connection-timeout",children:(0,o.jsx)(e.strong,{children:"Incomplete connection timeout"})}),"\n",(0,o.jsx)(e.p,{children:"Specify the half open TCP connection timeout"})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},21020:(n,e,t)=>{var i=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,t){var i,s={},l=null,h=null;for(i in void 0!==t&&(l=""+t),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(h=e.ref),e)r.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps)void 0===s[i]&&(s[i]=e[i]);return{$$typeof:o,type:n,key:l,ref:h,props:s,_owner:d.current}}e.Fragment=s,e.jsx=l,e.jsxs=l},74848:(n,e,t)=>{n.exports=t(21020)},64330:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/ddos10-82a62f47a222548d9c7e622793d466c4.png"},31443:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/ddos11-743e680cb17ebe83b3ff7e1308930e44.png"},70512:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/ddos9-4e39419d1dfb59caf0c25a94583cb33a.png"},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>d});var i=t(96540);const o={},s=i.createContext(o);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);