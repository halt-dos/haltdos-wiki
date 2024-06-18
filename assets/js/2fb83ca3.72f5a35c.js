"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[84952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:1},a="Listener Settings",l={unversionedId:"enterprise/adc/listeners/listener_settings",id:"version-7.0/enterprise/adc/listeners/listener_settings",title:"Listener Settings",description:"Make SLB listen on specific ports to accept connections and distribute across one or multiple origin servers.",source:"@site/versioned_docs/version-7.0/enterprise/adc/listeners/listener_settings.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/listener_settings",permalink:"/enterprise/adc/listeners/listener_settings",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adc_sidebar",previous:{title:"Listeners",permalink:"/enterprise/adc/listeners/"},next:{title:"SSL Settings",permalink:"/enterprise/adc/listeners/ssl_settings"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Enable IPv6</strong>",id:"enable-ipv6",level:5},{value:"<strong>Enable Http 2.0</strong>",id:"enable-http-20",level:5},{value:"<strong>Enable WebSocket</strong>",id:"enable-websocket",level:5},{value:"<strong>Enable HTTP Keepalive</strong>",id:"enable-http-keepalive",level:5},{value:"<strong>Enable Device Detection</strong>",id:"enable-device-detection",level:5},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Proxy Protocol</strong>",id:"proxy-protocol",level:5},{value:"<strong>Enable Logging</strong>",id:"enable-logging",level:5},{value:"<strong>Client connection Timeout</strong>",id:"client-connection-timeout",level:5},{value:"<strong>Client Resume Timeout</strong>",id:"client-resume-timeout",level:5},{value:"<strong>Max Concurrent Connections</strong>",id:"max-concurrent-connections",level:5},{value:"<strong>Client Keep-Alive Timeout</strong>",id:"client-keep-alive-timeout",level:5},{value:"<strong>HTTP Request Timeout</strong>",id:"http-request-timeout",level:5},{value:"<strong>User Session Duration</strong>",id:"user-session-duration",level:5},{value:"<strong>Session Cookie</strong>",id:"session-cookie",level:5},{value:"<strong>Max Concurrent User Sessions</strong>",id:"max-concurrent-user-sessions",level:5},{value:"<strong>Max Session Exceeded Action</strong>",id:"max-session-exceeded-action",level:5},{value:"<strong>Remote IP Header</strong>",id:"remote-ip-header",level:5},{value:"<strong>Server Aliases</strong>",id:"server-aliases",level:5},{value:"<strong>Virtual IPs</strong>",id:"virtual-ips",level:5},{value:"<strong>Add Port</strong>",id:"add-port",level:4},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>SSL Enabled</strong>",id:"ssl-enabled",level:5}],u={toc:c},d="wrapper";function h(e){var{components:t}=e,i=s(e,["components"]);return(0,r.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"listener-settings"}),"Listener Settings"),(0,r.kt)("p",null,"Make SLB listen on specific ports to accept connections and distribute across one or multiple origin servers."),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Users are allowed to configure many operational settings for the Listeners."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings1",src:n(39864).Z,width:"1830",height:"911"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings2",src:n(72542).Z,width:"1575",height:"865"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings3",src:n(60308).Z,width:"1548",height:"913"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",o({parentName:"li"},{href:"/enterprise/adc"}),(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",o({parentName:"li"},{href:"/enterprise/adc/listeners/"}),(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"li"},"Operational Settings")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",o({},{id:"description"}),"Description:"),(0,r.kt)("h5",o({},{id:"enable-ipv6"}),(0,r.kt)("strong",{parentName:"h5"},"Enable IPv6")),(0,r.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled \n")),(0,r.kt)("h5",o({},{id:"enable-http-20"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Http 2.0")),(0,r.kt)("p",null,"This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP/2 today."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"enable-websocket"}),(0,r.kt)("strong",{parentName:"h5"},"Enable WebSocket")),(0,r.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"enable-http-keepalive"}),(0,r.kt)("strong",{parentName:"h5"},"Enable HTTP Keepalive")),(0,r.kt)("p",null,"This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"enable-device-detection"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Device Detection")),(0,r.kt)("p",null,"This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"operational-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,r.kt)("p",null,"Users are allowed to specify Operational mode for the application. There are two modes can be selected:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values:  Reverse Proxy / IP Transparency\n\nDefault: Reverse Proxy \n")),(0,r.kt)("h5",o({},{id:"proxy-protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Proxy Protocol")),(0,r.kt)("p",null,"Users are allowed to specify Proxy protocol for the application."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: None / Proxy Protocol V1 / Proxy Protocol V2\n\nDefault: NONE \n")),(0,r.kt)("h5",o({},{id:"enable-logging"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Logging")),(0,r.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP\u2019s."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled \n")),(0,r.kt)("h5",o({},{id:"client-connection-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client connection Timeout")),(0,r.kt)("p",null,"Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 30 \n")),(0,r.kt)("h5",o({},{id:"client-resume-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Resume Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1 \n")),(0,r.kt)("h5",o({},{id:"max-concurrent-connections"}),(0,r.kt)("strong",{parentName:"h5"},"Max Concurrent Connections")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,r.kt)("h5",o({},{id:"client-keep-alive-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Keep-Alive Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 2 \n")),(0,r.kt)("h5",o({},{id:"http-request-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"HTTP Request Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 10 \n")),(0,r.kt)("h5",o({},{id:"user-session-duration"}),(0,r.kt)("strong",{parentName:"h5"},"User Session Duration")),(0,r.kt)("p",null,"Users can specify max allowed user session duration in minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 60 \n")),(0,r.kt)("h5",o({},{id:"session-cookie"}),(0,r.kt)("strong",{parentName:"h5"},"Session Cookie")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"max-concurrent-user-sessions"}),(0,r.kt)("strong",{parentName:"h5"},"Max Concurrent User Sessions")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,r.kt)("h5",o({},{id:"max-session-exceeded-action"}),(0,r.kt)("strong",{parentName:"h5"},"Max Session Exceeded Action")),(0,r.kt)("p",null,"Users can specify the action to take when max session count exceeds."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Drop / Send Custom Response / Redirect\n\nDefault: Drop \n")),(0,r.kt)("h5",o({},{id:"remote-ip-header"}),(0,r.kt)("strong",{parentName:"h5"},"Remote IP Header")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"server-aliases"}),(0,r.kt)("strong",{parentName:"h5"},"Server Aliases")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"virtual-ips"}),(0,r.kt)("strong",{parentName:"h5"},"Virtual IPs")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h4",o({},{id:"add-port"}),(0,r.kt)("strong",{parentName:"h4"},"Add Port")),(0,r.kt)("h5",o({},{id:"port"}),(0,r.kt)("strong",{parentName:"h5"},"Port")),(0,r.kt)("p",null,"Add Port here."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"ssl-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Enabled")),(0,r.kt)("p",null,"Select whether to enable or disable the SSL."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")))}h.isMDXComponent=!0},39864:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listenersetting-fef8374fa723aac77962b247603b5df1.png"},72542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listenersetting1-b604605348545316e66312c63a0d8493.png"},60308:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listenersetting2-d9167ea7dcd5aea3c6c7ec5b28015d99.png"}}]);