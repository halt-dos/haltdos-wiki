"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[62127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:1},l="Operational",s={unversionedId:"cloud/waf/listener/Setting/operational",id:"cloud/waf/listener/Setting/operational",title:"Operational",description:"Configure Operational settings of Listeners.",source:"@site/docs/cloud/waf/listener/Setting/operational.md",sourceDirName:"cloud/waf/listener/Setting",slug:"/cloud/waf/listener/Setting/operational",permalink:"/cloud/waf/listener/Setting/operational",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cloud_sidebar",previous:{title:"Listener",permalink:"/cloud/waf/listener/"},next:{title:"Rule Staging",permalink:"/cloud/waf/listener/Setting/ruleStaging"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable IPv6</strong>",id:"enable-ipv6",level:5},{value:"<strong>Enable HTTP 2.0</strong>",id:"enable-http-20",level:5},{value:"<strong>Enable Host Check</strong>",id:"enable-host-check",level:5},{value:"<strong>Web-socket Enabled</strong>",id:"web-socket-enabled",level:5},{value:"<strong>Enable Logging</strong>",id:"enable-logging",level:5},{value:"<strong>Enable Static Extension Logging</strong>",id:"enable-static-extension-logging",level:5},{value:"<strong>Enable Error Handling</strong>",id:"enable-error-handling",level:5},{value:"<strong>Connection Pool Size</strong>",id:"connection-pool-size",level:5},{value:"<strong>Client Keep-Alive Timeout</strong>",id:"client-keep-alive-timeout",level:5},{value:"<strong>Upstream Keep-Alive Timeout</strong>",id:"upstream-keep-alive-timeout",level:5},{value:"<strong>Max Requests per Connection</strong>",id:"max-requests-per-connection",level:5},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Limit MAX Collection</strong>",id:"limit-max-collection",level:5},{value:"<strong>Client Body Timeout</strong>",id:"client-body-timeout",level:5},{value:"<strong>Client Header Timeout</strong>",id:"client-header-timeout",level:5},{value:"<strong>Client Send Timeout</strong>",id:"client-send-timeout",level:5},{value:"<strong>Static Extensions</strong>",id:"static-extensions",level:5},{value:"<strong>Maximum HTTP Body Size</strong>",id:"maximum-http-body-size",level:5},{value:"<strong>Maximum HTTP Header Size</strong>",id:"maximum-http-header-size",level:5},{value:"<strong>Proxy HTTP Version </strong>",id:"proxy-http-version-",level:5},{value:"<strong>Proxy Buffers</strong>",id:"proxy-buffers",level:5},{value:"<strong>Proxy Buffer Size</strong>",id:"proxy-buffer-size",level:5},{value:"<strong>Log Format</strong>",id:"log-format",level:5},{value:"<strong>Client IP Location</strong>",id:"client-ip-location",level:5},{value:"<strong>Host Header</strong>",id:"host-header",level:5},{value:"<strong>Server Aliases</strong>",id:"server-aliases",level:5},{value:"<strong>Add Port</strong>",id:"add-port",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>SSL Enabled</strong>",id:"ssl-enabled",level:5}],u={toc:c},d="wrapper";function h(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"operational"}),"Operational"),(0,r.kt)("p",null,"Configure Operational settings of Listeners."),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Users are allowed to configure many operational settings for the ",(0,r.kt)("a",o({parentName:"p"},{href:"/cloud/waf/listener/"}),"Listeners"),". Users can configure most common settings like timeout settings, operation modes, header/body timeouts, error handling, and request logging. Users can also add server aliases and VIPs to the configured listener with the help of operational settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener Operational Settings",src:n(7921).Z,width:"1911",height:"986"}),"   "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener Operational Settings",src:n(68813).Z,width:"1911",height:"986"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener Operational Settings",src:n(91780).Z,width:"1911",height:"986"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Operational"),".  "),(0,r.kt)("li",{parentName:"ol"},"Configure the settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save changes. ")),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"enable-ipv6"}),(0,r.kt)("strong",{parentName:"h5"},"Enable IPv6")),(0,r.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable \n")),(0,r.kt)("h5",o({},{id:"enable-http-20"}),(0,r.kt)("strong",{parentName:"h5"},"Enable HTTP 2.0")),(0,r.kt)("p",null,"Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1\nThis option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",o({},{id:"enable-host-check"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Host Check")),(0,r.kt)("p",null,"Enforce host (SNI) validation for incoming request."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",o({},{id:"web-socket-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Web-socket Enabled")),(0,r.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",o({},{id:"enable-logging"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Logging")),(0,r.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable \n")),(0,r.kt)("h5",o({},{id:"enable-static-extension-logging"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Static Extension Logging")),(0,r.kt)("p",null,"This option allows user to specify whether to do log requests for static extension."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",o({},{id:"enable-error-handling"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Error Handling")),(0,r.kt)("p",null,"This option allows user to specify whether to enable error handling by firewall."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable \n")),(0,r.kt)("h5",o({},{id:"connection-pool-size"}),(0,r.kt)("strong",{parentName:"h5"},"Connection Pool Size")),(0,r.kt)("p",null,"This option allows user to specify the connection pool size with upstream."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 20000\n\nMin: 0\n\nDefault: 0 \n")),(0,r.kt)("h5",o({},{id:"client-keep-alive-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Keep-Alive Timeout")),(0,r.kt)("p",null,"This option specify the timeout of keep-alive connections of clients. Set 0 to disable.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 0  \n\nMetric: Minutes\n")),(0,r.kt)("h5",o({},{id:"upstream-keep-alive-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Upstream Keep-Alive Timeout")),(0,r.kt)("p",null,"This option specify timeout of keep-alive connections of upstream. Set 0 to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 0\n\nDefault: 0  \n\nMetric: Seconds\n")),(0,r.kt)("h5",o({},{id:"max-requests-per-connection"}),(0,r.kt)("strong",{parentName:"h5"},"Max Requests per Connection")),(0,r.kt)("p",null,"This option specify maximum allowed requests per keep-alive connection."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 90000000\n\nMin: 0\n\nDefault: 1000 \n")),(0,r.kt)("h5",o({},{id:"operational-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,r.kt)("p",null,"Specify operational mode for the listener"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Reverse Proxy / IP Transparency\n\nDefault: Reverse Proxy \n")),(0,r.kt)("h5",o({},{id:"limit-max-collection"}),(0,r.kt)("strong",{parentName:"h5"},"Limit MAX Collection")),(0,r.kt)("p",null,"Specify max allowed concurrent connections. Set 0 to disable"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 90000000\n\nMin: 0\n\nDefault: 0  \n\nMetric: Connections  \n")),(0,r.kt)("h5",o({},{id:"client-body-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Body Timeout")),(0,r.kt)("p",null,"This option specify the timeout for receiving the request body."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds  \n")),(0,r.kt)("h5",o({},{id:"client-header-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Header Timeout")),(0,r.kt)("p",null,"Specify timeout for receiving request header"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds  \n")),(0,r.kt)("h5",o({},{id:"client-send-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Client Send Timeout")),(0,r.kt)("p",null,"Specify timeout for send response"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds  \n")),(0,r.kt)("h5",o({},{id:"static-extensions"}),(0,r.kt)("strong",{parentName:"h5"},"Static Extensions")),(0,r.kt)("p",null,"This option specify the list of allowed static extensions that don't require security validation."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Specify the list of allowed static extensions\n\nDefault: png, gif, ico, jpg, jpeg, js, css, wpff, woff2, ttf, svg.   \n")),(0,r.kt)("h5",o({},{id:"maximum-http-body-size"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum HTTP Body Size")),(0,r.kt)("p",null,"This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4073741824L\n\nMin: 1024\n\nDefault: 10485760  \n\nMetric: Bytes \n")),(0,r.kt)("admonition",o({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"In the case of HTTP/0.9, no headers get transmitted.")),(0,r.kt)("h5",o({},{id:"maximum-http-header-size"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum HTTP Header Size")),(0,r.kt)("p",null,"This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.\nIt comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 40960\n\nMin: 1024\n\nDefault: 4096  \n\nMetric: Bytes \n")),(0,r.kt)("h5",o({},{id:"proxy-http-version-"}),(0,r.kt)("strong",{parentName:"h5"},"Proxy HTTP Version ")),(0,r.kt)("p",null,"Specify http version used while connecting upstream server."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: ANY, HTTP 1.0, HTTP 1.1.\n\nDefault: ANY \n")),(0,r.kt)("h5",o({},{id:"proxy-buffers"}),(0,r.kt)("strong",{parentName:"h5"},"Proxy Buffers")),(0,r.kt)("p",null,"This option specify the number of buffers used for reading a response from the server for a single connection."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 64\n\nMin: 8 \n\nDefault: 8\n\nMetric: Count \n")),(0,r.kt)("h5",o({},{id:"proxy-buffer-size"}),(0,r.kt)("strong",{parentName:"h5"},"Proxy Buffer Size")),(0,r.kt)("p",null,"This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4096\n\nMin: 8\n\nDefault: 8 \n\nMetric: KB\n")),(0,r.kt)("h5",o({},{id:"log-format"}),(0,r.kt)("strong",{parentName:"h5"},"Log Format")),(0,r.kt)("p",null,"This option specify the request log format."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"client-ip-location"}),(0,r.kt)("strong",{parentName:"h5"},"Client IP Location")),(0,r.kt)("p",null,"This option specify the location of the client IP."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: SRC-IP / X-FORWARED-FOR / X-REAL-IP / X-PROXYUSER-IP\n\nDefault: SRC IP\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-FORWARDED-FOR")," header contains the IP address of the client that initiated the request, allowing the destination server to identify the original client's IP address even though the request was forwarded through intermediaries.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-REAL-IP")," Similar to the X-Forwarded-For header, the X-Real-IP header is typically added by the proxy server or load balancer to the HTTP request before forwarding it to the destination server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-PROXYUSER-IP")," header likely contains the IP address of the client that initiated the request, allowing the backend server to identify the true client IP address. However, since it's a custom header, its usage and interpretation may vary depending on the specific configuration of the proxy server or load balancer."))),(0,r.kt)("h5",o({},{id:"host-header"}),(0,r.kt)("strong",{parentName:"h5"},"Host Header")),(0,r.kt)("p",null,"This option specify the host header allowed by the backend, if it's different from the listener subdomain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"server-aliases"}),(0,r.kt)("strong",{parentName:"h5"},"Server Aliases")),(0,r.kt)("p",null,"This option specify aliases means familiar name for the listener.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n    \n")),(0,r.kt)("h5",o({},{id:"add-port"}),(0,r.kt)("strong",{parentName:"h5"},"Add Port")),(0,r.kt)("p",null,"This option helps you to add HTTP/S ports for Advance Settings. Here you can be unique port either HTTP or HTTPS enabled configuration without changing backend server port."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"setting",src:n(37876).Z,width:"1910",height:"900"})),(0,r.kt)("admonition",o({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.")),(0,r.kt)("h5",o({},{id:"port"}),(0,r.kt)("strong",{parentName:"h5"},"Port")),(0,r.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank  \n")),(0,r.kt)("h5",o({},{id:"protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"This option used to select protocol.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: HTTP\n\nDefault: HTTP  \n")),(0,r.kt)("h5",o({},{id:"ssl-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Enabled")),(0,r.kt)("p",null,"This option used to select whether the SSL enabled or Disabled, that is uploaded by the user in the SSL Certificate section.  "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")))}h.isMDXComponent=!0},37876:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addPort-f0cb0883b4d26394fc43cca4e2dba33b.png"},7921:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/operationalSetting1-3238b75dafbba51dac300a0fbabcc478.png"},68813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/operationalSetting2-232b8c03294cf7bfcc605345e9990e17.png"},91780:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/operationalSetting3-6a1ca70148a16abfd6e7abf1e6768549.png"}}]);