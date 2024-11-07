/*! For license information please see 7641edd3.003814fb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[77053],{88182:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enterprise/adc/listeners/listener_settings","title":"Listener Settings","description":"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers.","source":"@site/versioned_docs/version-6.0/enterprise/adc/listeners/listener_settings.md","sourceDirName":"enterprise/adc/listeners","slug":"/enterprise/adc/listeners/listener_settings","permalink":"/v6/enterprise/adc/listeners/listener_settings","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"adc_sidebar","previous":{"title":"Listeners","permalink":"/v6/enterprise/adc/listeners/"},"next":{"title":"SSL Settings","permalink":"/v6/enterprise/adc/listeners/ssl_settings"}}');var t=n(74848),r=n(28453);const o={sidebar_position:1},l="Listener Settings",c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable Http 2.0",id:"enable-http-20",level:4},{value:"Enable WebSocket",id:"enable-websocket",level:4},{value:"Enable HTTP Keepalive",id:"enable-http-keepalive",level:4},{value:"Enable Device Detection",id:"enable-device-detection",level:4},{value:"Enable Logging",id:"enable-logging",level:4},{value:"Log Format",id:"log-format",level:4},{value:"Client connection Timeout",id:"client-connection-timeout",level:4},{value:"Client Resume Timeout",id:"client-resume-timeout",level:4},{value:"Max Concurrent Connections",id:"max-concurrent-connections",level:4},{value:"Client Keep-Alive Timeout",id:"client-keep-alive-timeout",level:4},{value:"HTTP Request Timeout",id:"http-request-timeout",level:4},{value:"User Session Duration",id:"user-session-duration",level:4},{value:"Session Cookie",id:"session-cookie",level:4},{value:"Max Concurrent User Sessions",id:"max-concurrent-user-sessions",level:4},{value:"Max Session Exceeded Action",id:"max-session-exceeded-action",level:4},{value:"MAX Session Forward URL",id:"max-session-forward-url",level:4},{value:"Remote IP Header",id:"remote-ip-header",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4}];function a(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"listener-settings",children:"Listener Settings"})}),"\n",(0,t.jsx)(s.p,{children:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Users are allowed to configure many operational settings for the Listeners."})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Listener settings1",src:n(55167).A+"",width:"1256",height:"643"})}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.a,{href:"/enterprise/adc",children:(0,t.jsx)(s.strong,{children:"SLB"})})," > ",(0,t.jsx)(s.a,{href:"/v6/enterprise/adc/listeners/",children:(0,t.jsx)(s.strong,{children:"Listeners"})})," > ",(0,t.jsx)(s.strong,{children:"Operational Settings"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Configure your settings"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Click Save Changes."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Listener settings2",src:n(18308).A+"",width:"1229",height:"665"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"PARAMETERS"}),(0,t.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(s.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable IPv6"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Enabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable Http 2.0"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Disabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable WebSocket"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Disabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable HTTP Keepalive"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Disabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable Device Detection"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Disabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable Logging"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"Enabled"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Log Format"}),(0,t.jsx)(s.td,{children:"Drop Down"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Client Connection Timeout"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"30"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Client Resume Timeout"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Max Concurrent Connections"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Client Keep-Alive Timeout"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"HTTP Request Timeout"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"10"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"User Session Duration"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"60"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Session Cookie"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Max Concurrent User Sessions"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MAX SESSION EXCEEDED ACTION"}),(0,t.jsx)(s.td,{children:"Drop-down"}),(0,t.jsx)(s.td,{children:"Redirect"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"MAX SESSION FORWARD URL"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Remote IP Header"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Server Aliases"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Blank"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Virtual IPs"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Blank"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Listener settings3",src:n(72205).A+"",width:"1238",height:"571"})}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(s.h4,{id:"enable-ipv6",children:"Enable IPv6"}),"\n",(0,t.jsx)(s.p,{children:"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."}),"\n",(0,t.jsx)(s.h4,{id:"enable-http-20",children:"Enable Http 2.0"}),"\n",(0,t.jsx)(s.p,{children:"This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP2 today."}),"\n",(0,t.jsx)(s.h4,{id:"enable-websocket",children:"Enable WebSocket"}),"\n",(0,t.jsx)(s.p,{children:"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."}),"\n",(0,t.jsx)(s.h4,{id:"enable-http-keepalive",children:"Enable HTTP Keepalive"}),"\n",(0,t.jsx)(s.p,{children:"This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection."}),"\n",(0,t.jsx)(s.h4,{id:"enable-device-detection",children:"Enable Device Detection"}),"\n",(0,t.jsx)(s.p,{children:"This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules."}),"\n",(0,t.jsx)(s.h4,{id:"enable-logging",children:"Enable Logging"}),"\n",(0,t.jsx)(s.p,{children:"This option allows user to enable access logs in the case of service type HTTP & TCP.s"}),"\n",(0,t.jsx)(s.h4,{id:"log-format",children:"Log Format"}),"\n",(0,t.jsx)(s.p,{children:"This option allows users to request information to be logged. All logs in JSON format. Users can select from SRC, PORT, COUNTRY, METHODE, URI, UA, UPSTREAM, STATUS, REQUEST / RESPONSE SIZE, DEVICE & OS. All these logs method works for service type HTTP only, SRC, PORT, COUNTRY, & UPSTREAM works for service type TCP only."}),"\n",(0,t.jsx)(s.h4,{id:"client-connection-timeout",children:"Client connection Timeout"}),"\n",(0,t.jsx)(s.p,{children:"Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side."}),"\n",(0,t.jsx)(s.h4,{id:"client-resume-timeout",children:"Client Resume Timeout"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume."}),"\n",(0,t.jsx)(s.h4,{id:"max-concurrent-connections",children:"Max Concurrent Connections"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable."}),"\n",(0,t.jsx)(s.h4,{id:"client-keep-alive-timeout",children:"Client Keep-Alive Timeout"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients."}),"\n",(0,t.jsx)(s.h4,{id:"http-request-timeout",children:"HTTP Request Timeout"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."}),"\n",(0,t.jsx)(s.h4,{id:"user-session-duration",children:"User Session Duration"}),"\n",(0,t.jsx)(s.p,{children:"Users can specify max allowed user session duration in minutes."}),"\n",(0,t.jsx)(s.h4,{id:"session-cookie",children:"Session Cookie"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users."}),"\n",(0,t.jsx)(s.h4,{id:"max-concurrent-user-sessions",children:"Max Concurrent User Sessions"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable."}),"\n",(0,t.jsx)(s.h4,{id:"max-session-exceeded-action",children:"Max Session Exceeded Action"}),"\n",(0,t.jsx)(s.p,{children:"Users can specify the action to take when max session count exceeds."}),"\n",(0,t.jsx)(s.h4,{id:"max-session-forward-url",children:"MAX Session Forward URL"}),"\n",(0,t.jsx)(s.p,{children:"Users can specify the redirected URL when max session count exceeds."}),"\n",(0,t.jsx)(s.h4,{id:"remote-ip-header",children:"Remote IP Header"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP."}),"\n",(0,t.jsx)(s.h4,{id:"server-aliases",children:"Server Aliases"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener."}),"\n",(0,t.jsx)(s.h4,{id:"virtual-ips",children:"Virtual IPs"}),"\n",(0,t.jsx)(s.p,{children:"This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,s,n)=>{var i=n(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var i,r={},d=null,a=null;for(i in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,i)&&!c.hasOwnProperty(i)&&(r[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:t,type:e,key:d,ref:a,props:r,_owner:l.current}}s.Fragment=r,s.jsx=d,s.jsxs=d},74848:(e,s,n)=>{e.exports=n(21020)},55167:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/listenersettings1-5965b89257c2a7319305ee61ef8ee437.png"},18308:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/listenersettings2-4946dadcd178a701e7a2723c24bde11a.png"},72205:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/listenersettings3-9643646ba4041e736a6f8c495026e8fd.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);