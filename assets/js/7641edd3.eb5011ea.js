"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:1},o="Listener Settings",s={unversionedId:"enterprise/adc/listeners/listener_settings",id:"version-6.0/enterprise/adc/listeners/listener_settings",title:"Listener Settings",description:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers.",source:"@site/versioned_docs/version-6.0/enterprise/adc/listeners/listener_settings.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/listener_settings",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/listener_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adc_sidebar",previous:{title:"Listeners",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/"},next:{title:"SSL Settings",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/ssl_settings"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable Http 2.0",id:"enable-http-20",level:4},{value:"Enable WebSocket",id:"enable-websocket",level:4},{value:"Enable HTTP Keepalive",id:"enable-http-keepalive",level:4},{value:"Enable Device Detection",id:"enable-device-detection",level:4},{value:"Enable Logging",id:"enable-logging",level:4},{value:"Log Format",id:"log-format",level:4},{value:"Client connection Timeout",id:"client-connection-timeout",level:4},{value:"Client Resume Timeout",id:"client-resume-timeout",level:4},{value:"Max Concurrent Connections",id:"max-concurrent-connections",level:4},{value:"Client Keep-Alive Timeout",id:"client-keep-alive-timeout",level:4},{value:"HTTP Request Timeout",id:"http-request-timeout",level:4},{value:"User Session Duration",id:"user-session-duration",level:4},{value:"Session Cookie",id:"session-cookie",level:4},{value:"Max Concurrent User Sessions",id:"max-concurrent-user-sessions",level:4},{value:"Max Session Exceeded Action",id:"max-session-exceeded-action",level:4},{value:"MAX Session Forward URL",id:"max-session-forward-url",level:4},{value:"Remote IP Header",id:"remote-ip-header",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4}],u={toc:c},d="wrapper";function m(e){var{components:t}=e,l=r(e,["components"]);return(0,a.kt)(d,i({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"listener-settings"}),"Listener Settings"),(0,a.kt)("p",null,"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers."),(0,a.kt)("hr",null),(0,a.kt)("h2",i({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Users are allowed to configure many operational settings for the Listeners.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Listener settings1",src:n(37687).Z,width:"1256",height:"643"})),(0,a.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",i({parentName:"p"},{href:"/adc/docs"}),(0,a.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,a.kt)("a",i({parentName:"p"},{href:"../listeners/"}),(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"p"},"Operational Settings"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Listener settings2",src:n(4679).Z,width:"1229",height:"665"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"PARAMETERS"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable IPv6"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable Http 2.0"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable WebSocket"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable HTTP Keepalive"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable Device Detection"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enable Logging"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Log Format"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Drop Down"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Client Connection Timeout"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"30")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Client Resume Timeout"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Max Concurrent Connections"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Client Keep-Alive Timeout"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"HTTP Request Timeout"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"User Session Duration"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"60")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Session Cookie"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Max Concurrent User Sessions"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"MAX SESSION EXCEEDED ACTION"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Redirect")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"MAX SESSION FORWARD URL"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Remote IP Header"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Server Aliases"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Virtual IPs"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"Blank")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Listener settings3",src:n(88530).Z,width:"1238",height:"571"})),(0,a.kt)("h4",i({},{id:"description"}),"Description:"),(0,a.kt)("h4",i({},{id:"enable-ipv6"}),"Enable IPv6"),(0,a.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,a.kt)("h4",i({},{id:"enable-http-20"}),"Enable Http 2.0"),(0,a.kt)("p",null,"This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP2 today."),(0,a.kt)("h4",i({},{id:"enable-websocket"}),"Enable WebSocket"),(0,a.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,a.kt)("h4",i({},{id:"enable-http-keepalive"}),"Enable HTTP Keepalive"),(0,a.kt)("p",null,"This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection."),(0,a.kt)("h4",i({},{id:"enable-device-detection"}),"Enable Device Detection"),(0,a.kt)("p",null,"This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules."),(0,a.kt)("h4",i({},{id:"enable-logging"}),"Enable Logging"),(0,a.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP.s"),(0,a.kt)("h4",i({},{id:"log-format"}),"Log Format"),(0,a.kt)("p",null,"This option allows users to request information to be logged. All logs in JSON format. Users can select from SRC, PORT, COUNTRY, METHODE, URI, UA, UPSTREAM, STATUS, REQUEST / RESPONSE SIZE, DEVICE & OS. All these logs method works for service type HTTP only, SRC, PORT, COUNTRY, & UPSTREAM works for service type TCP only."),(0,a.kt)("h4",i({},{id:"client-connection-timeout"}),"Client connection Timeout"),(0,a.kt)("p",null,"Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side."),(0,a.kt)("h4",i({},{id:"client-resume-timeout"}),"Client Resume Timeout"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume."),(0,a.kt)("h4",i({},{id:"max-concurrent-connections"}),"Max Concurrent Connections"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable."),(0,a.kt)("h4",i({},{id:"client-keep-alive-timeout"}),"Client Keep-Alive Timeout"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients."),(0,a.kt)("h4",i({},{id:"http-request-timeout"}),"HTTP Request Timeout"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."),(0,a.kt)("h4",i({},{id:"user-session-duration"}),"User Session Duration"),(0,a.kt)("p",null,"Users can specify max allowed user session duration in minutes."),(0,a.kt)("h4",i({},{id:"session-cookie"}),"Session Cookie"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users."),(0,a.kt)("h4",i({},{id:"max-concurrent-user-sessions"}),"Max Concurrent User Sessions"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable."),(0,a.kt)("h4",i({},{id:"max-session-exceeded-action"}),"Max Session Exceeded Action"),(0,a.kt)("p",null,"Users can specify the action to take when max session count exceeds."),(0,a.kt)("h4",i({},{id:"max-session-forward-url"}),"MAX Session Forward URL"),(0,a.kt)("p",null,"Users can specify the redirected URL when max session count exceeds."),(0,a.kt)("h4",i({},{id:"remote-ip-header"}),"Remote IP Header"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP."),(0,a.kt)("h4",i({},{id:"server-aliases"}),"Server Aliases"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener."),(0,a.kt)("h4",i({},{id:"virtual-ips"}),"Virtual IPs"),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic."))}m.isMDXComponent=!0},37687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings1-5965b89257c2a7319305ee61ef8ee437.png"},4679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings2-4946dadcd178a701e7a2723c24bde11a.png"},88530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings3-9643646ba4041e736a6f8c495026e8fd.png"}}]);