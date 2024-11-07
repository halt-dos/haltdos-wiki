/*! For license information please see 7d6906af.9ee7206f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[70922],{66795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"enterprise/ddos/profile/general_settings","title":"Profile Settings","description":"Settings for inspecting the packet","source":"@site/docs/enterprise/ddos/profile/general_settings.md","sourceDirName":"enterprise/ddos/profile","slug":"/enterprise/ddos/profile/general_settings","permalink":"/enterprise/ddos/profile/general_settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ddos_sidebar","previous":{"title":"Profile","permalink":"/enterprise/ddos/profile/"},"next":{"title":"DPI Settings","permalink":"/enterprise/ddos/profile/dpi_settings/"}}');var s=t(74848),r=t(28453);const o={sidebar_position:1},l="Profile Settings",a={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Inbound Countries</strong>",id:"inbound-countries",level:5},{value:"<strong>Outbound Countries</strong>",id:"outbound-countries",level:5},{value:"<strong>Session Expiry Time</strong>",id:"session-expiry-time",level:5},{value:"<strong>Graceful Startup Period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Anti-Scanning Threshold</strong>",id:"anti-scanning-threshold",level:5},{value:"<strong>Learning Packet Sampling Percentage</strong>",id:"learning-packet-sampling-percentage",level:5},{value:"<strong>Drop packet Sampling Percentage</strong>",id:"drop-packet-sampling-percentage",level:5},{value:"<strong>Offload Percentage</strong>",id:"offload-percentage",level:5}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"profile-settings",children:"Profile Settings"})}),"\n",(0,s.jsx)(n.p,{children:"Settings for inspecting the packet"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"General settings evaluates the data part and the headers of a packet that is transmitted through an inspection point, weeding out any non-compliant to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"general_setting",src:t(4116).A+"",width:"1415",height:"866"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Apps > DDoS > Profile > Profile Settings"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure the settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"inbound-countries",children:(0,s.jsx)(n.strong,{children:"Inbound Countries"})}),"\n",(0,s.jsx)(n.p,{children:'In this field, users can specify the list of inbound countries that will be permanently disallowed for inbound traffic on a profile basis. It also allows the users to use the "not" feature ex. "not India", which allows only network traffic from India. Apart from that all the inbound network traffic from other countries will be dropped.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.\n\n    Default: Blank\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more information about ISO 3166-1 alpha-2, please refer to this site: ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:(0,s.jsx)(n.strong,{children:"ISO 3166-1 alpha-2"})})]}),"\n",(0,s.jsx)(n.h5,{id:"outbound-countries",children:(0,s.jsx)(n.strong,{children:"Outbound Countries"})}),"\n",(0,s.jsx)(n.p,{children:'In this field, users can specify the list of outbound countries that will be permanently disallowed for outbound traffic on a profile basis. It also allows the users to use the "not" feature ex. "not America", which allows the outbound network traffic for America only. Traffic from other countries will be dropped.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"session-expiry-time",children:(0,s.jsx)(n.strong,{children:"Session Expiry Time"})}),"\n",(0,s.jsx)(n.p,{children:"In this field, users can specify the session expiry time (in seconds) for the established outbound connection if the connection is inactive. Haltdos DDoS will monitor the TCP connection session if it is inactive till the input time, the session expires and a new session needs to be established."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"graceful-startup-period",children:(0,s.jsx)(n.strong,{children:"Graceful Startup Period"})}),"\n",(0,s.jsx)(n.p,{children:"In this field, users can specify the graceful startup period(in seconds), which will help the application in the establishment of a successful connection with the server. The mitigation trigger will wait before starting mitigation on startup."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"ssl-renegotiation-threshold",children:(0,s.jsx)(n.strong,{children:"SSL Renegotiation Threshold"})}),"\n",(0,s.jsx)(n.p,{children:"In this field users can specify the maximum connection allowed to be established in a SSL negotiation. SSL renegotiation threshold value allow the number of connection can be made in one session."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"anti-scanning-threshold",children:(0,s.jsx)(n.strong,{children:"Anti-Scanning Threshold"})}),"\n",(0,s.jsx)(n.p,{children:"In this field, users can specify the threshold value(in pps) of Anti-scanning to limit packet scanning attempts. The Haltdos Anti-DDoS solution can limit the unusual scanning of the packet if anyone is doing so. Users can limit the scanning attempt by setting this threshold."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"learning-packet-sampling-percentage",children:(0,s.jsx)(n.strong,{children:"Learning Packet Sampling Percentage"})}),"\n",(0,s.jsx)(n.p,{children:"It will help users to collect Learning packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to learn its behavior."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"drop-packet-sampling-percentage",children:(0,s.jsx)(n.strong,{children:"Drop packet Sampling Percentage"})}),"\n",(0,s.jsx)(n.p,{children:"It will help users to collect Drop packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to analyze the dropped packet behavior."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"offload-percentage",children:(0,s.jsx)(n.strong,{children:"Offload Percentage"})}),"\n",(0,s.jsx)(n.p,{children:"Offloading of TLS packets for decryption, users can specify the offload percentage. Users can set a limit in percentage so that Haltdos Anti-DDoS solution collects the sample from the network traffic to analyze the behavior of TLS decryption."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var i=t(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,r={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},4116:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/securityprofile_profile_settings-57939ff4b4a1dc6101b81bffe35ddc01.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);