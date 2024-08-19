"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[65749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var i=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={sidebar_position:0},l="Operational Settings",s={unversionedId:"community/waf/operational",id:"version-7.0/community/waf/operational",title:"Operational Settings",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/operational.md",sourceDirName:"community/waf",slug:"/community/waf/operational",permalink:"/v7/community/waf/operational",draft:!1,tags:[],version:"7.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"community_sidebar",previous:{title:"Next Steps",permalink:"/v7/community/getting-started/next"},next:{title:"SSL Settings",permalink:"/v7/community/waf/ssl_settings"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable HTTP 2.0",id:"enable-http-20",level:4},{value:"Enable Host Check",id:"enable-host-check",level:4},{value:"Web-socket Enabled",id:"web-socket-enabled",level:4},{value:"Enable Logging",id:"enable-logging",level:4},{value:"Enable Static Extension Logging",id:"enable-static-extension-logging",level:4},{value:"Enable Error Handling",id:"enable-error-handling",level:4},{value:"Security Mode",id:"security-mode",level:4},{value:"Application Type",id:"application-type",level:4},{value:"Connection Pool Size",id:"connection-pool-size",level:4},{value:"Client Keep-Alive Timeout",id:"client-keep-alive-timeout",level:4},{value:"Upstream Keep-Alive Timeout",id:"upstream-keep-alive-timeout",level:4},{value:"Operational Mode",id:"operational-mode",level:4},{value:"Limit MAX Collection",id:"limit-max-collection",level:4},{value:"Client Body Timeout",id:"client-body-timeout",level:4},{value:"Client Header Timeout",id:"client-header-timeout",level:4},{value:"Client Send Timeout",id:"client-send-timeout",level:4},{value:"Static Extensions",id:"static-extensions",level:4},{value:"Maximum HTTP Body Size",id:"maximum-http-body-size",level:4},{value:"Maximum HTTP Header Size",id:"maximum-http-header-size",level:4},{value:"Proxy HTTP Version",id:"proxy-http-version",level:4},{value:"Proxy Buffers",id:"proxy-buffers",level:4},{value:"Proxy Buffer Size",id:"proxy-buffer-size",level:4},{value:"Client IP Location",id:"client-ip-location",level:4},{value:"Host Header",id:"host-header",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4},{value:"Port",id:"port",level:4},{value:"Port",id:"port-1",level:5},{value:"SSL Enabled",id:"ssl-enabled",level:5}],u={toc:p},d="wrapper";function h(e){var{components:t}=e,a=o(e,["components"]);return(0,i.kt)(d,r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",r({},{id:"operational-settings"}),"Operational Settings"),(0,i.kt)("h3",r({},{id:"overview"}),"Overview"),(0,i.kt)("p",null,"Users are allowed to configure many operational settings for the Listeners configured under the WAF. These setting specifies all the operational configuration for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Operational Settings",src:n(75665).Z,width:"1907",height:"904"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Operational Settings",src:n(1934).Z,width:"1920",height:"987"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Operational Settings",src:n(56888).Z,width:"1920",height:"987"})),(0,i.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"WAF")," > ",(0,i.kt)("strong",{parentName:"li"},"Operational"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the settings."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Save changes"),".")),(0,i.kt)("h3",r({},{id:"description"}),"Description"),(0,i.kt)("h4",r({},{id:"enable-ipv6"}),"Enable IPv6"),(0,i.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,i.kt)("h4",r({},{id:"enable-http-20"}),"Enable HTTP 2.0"),(0,i.kt)("p",null,"Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1\nThis option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1 "),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable \n\nDefault: Disable  \n")),(0,i.kt)("p",null,"For more information about HTTP/2 , please refer this site : ",(0,i.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HTTP/2"}),(0,i.kt)("strong",{parentName:"a"},"HTTP 2.0"))),(0,i.kt)("h4",r({},{id:"enable-host-check"}),"Enable Host Check"),(0,i.kt)("p",null,"Enable Host Check to enforce validation of the host (SNI) for incoming requests, ensuring that the server name in the request matches the expected host. This helps improve security by verifying that requests are directed to the correct server."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable \n\nDefault: Disable  \n")),(0,i.kt)("h4",r({},{id:"web-socket-enabled"}),"Web-socket Enabled"),(0,i.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,i.kt)("p",null,"For more information about Web-socket , please refer this site : ",(0,i.kt)("a",r({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"}),(0,i.kt)("strong",{parentName:"a"},"Web-Socket"))),(0,i.kt)("h4",r({},{id:"enable-logging"}),"Enable Logging"),(0,i.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,i.kt)("h4",r({},{id:"enable-static-extension-logging"}),"Enable Static Extension Logging"),(0,i.kt)("p",null,"This option allows user to specify whether to do log requests for static extension. (logging of file extensions associated with static files served by a web server. In the context of web servers, static files are files that are served directly to the client without any server-side processing, such as HTML, CSS, JavaScript, images, and downloadable files like PDFs.)"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,i.kt)("h4",r({},{id:"enable-error-handling"}),"Enable Error Handling"),(0,i.kt)("p",null,"This option allows user to specify whether to enable error handling by firewall."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable  \n")),(0,i.kt)("h4",r({},{id:"security-mode"}),"Security Mode"),(0,i.kt)("p",null,"This option allows user to specify operational mode for every given security profile. Different operational modes are:  "),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Mitigation / Bypassed / Record.\n\nDefault: Bypass  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MITIGATION"),":  In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BYPASSED"),": In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RECORD"),": In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  ")),(0,i.kt)("p",null,"For more information about the modes of Haltdos WAF, Please refer to this link: ",(0,i.kt)("a",r({parentName:"p"},{href:"Halhttps://docs.haltdos.com/kb/waf/kb-1018/#how-to-change-waf-operational-mode-in-between-record-bypass--mitigation"}),(0,i.kt)("strong",{parentName:"a"},"How to change WAF operational mode in between Record, Bypass & Mitigation?"))),(0,i.kt)("h4",r({},{id:"application-type"}),"Application Type"),(0,i.kt)("p",null,"This option allows users to specify the type of application ( i.e. website or web service or web socket)."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Website / WebService / Web Socket.\n\nDefault: Website  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website")," is a collection of linked web pages (plus their associated resources) that share a unique domain name.   "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Web service")," is a collection of open protocols and standards used for exchanging data between applications or systems.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Web Socket")," is a communication protocol that provides full-duplex communication channels over a single, long-lived connection. It allows for real-time, bidirectional communication between a client and a server.")),(0,i.kt)("h4",r({},{id:"connection-pool-size"}),"Connection Pool Size"),(0,i.kt)("p",null,"This option allows user to specify the connection pool size with upstream."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 20000\n\nMin: 0\n\nDefault: 0 \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connection Pool"),": A connection pool is a cache of database or network connections maintained so that the connections can be reused when future requests to the database or network are required.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Upstream server")," refers to a backend server to which the web server forwards requests for processing."),(0,i.kt)("h4",r({},{id:"client-keep-alive-timeout"}),"Client Keep-Alive Timeout"),(0,i.kt)("p",null,"This option sets the duration (in seconds) for which the server keeps an idle connection open with a client. If set to 0, keep-alive connections are disabled, meaning the server will close the connection immediately after responding to a client's request."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 0\n\nMetric: Minutes  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keep-alive timeout")," determines how long the server should wait for the next request from the client before closing the connection. If the server does not receive a new request within this period, it closes the connection to free up resources.")),(0,i.kt)("h4",r({},{id:"upstream-keep-alive-timeout"}),"Upstream Keep-Alive Timeout"),(0,i.kt)("p",null,"This option sets the duration (in seconds) for which the server keeps an idle connection open with an upstream server. If set to 0, keep-alive connections are disabled, causing the server to close the connection immediately after receiving a response from the upstream server."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 0\n\nDefault: 0  \n\nMetric: Seconds \n")),(0,i.kt)("h4",r({},{id:"operational-mode"}),"Operational Mode"),(0,i.kt)("p",null,"This option allows users to specify operational mode for the listener."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Reverse Proxy / IP Transparency\n\nDefault: Reverse-Proxy  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reverse proxy")," is a server that sits between clients and one or more backend servers. It receives requests from clients on behalf of the backend servers and forwards those requests to the appropriate server.   "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Transparency")," refers to a networking configuration where the original client IP address (source IP) is preserved and visible to the backend servers, even when traffic passes through a reverse proxy or load balancer.")),(0,i.kt)("h4",r({},{id:"limit-max-collection"}),"Limit MAX Collection"),(0,i.kt)("p",null,"This option sets the maximum number of concurrent connections allowed. If set to 0, no limit is enforced on the number of concurrent connections."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 90000000\n\nMin: 0\n\nDefault: 0  \n\nMetric: Connections\n")),(0,i.kt)("h4",r({},{id:"client-body-timeout"}),"Client Body Timeout"),(0,i.kt)("p",null,"This option sets the maximum time allowed for receiving the request body from the client. If the request body is not fully received within this timeframe, the connection will be closed."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 300  \n\nMetrics: Seconds\n")),(0,i.kt)("h4",r({},{id:"client-header-timeout"}),"Client Header Timeout"),(0,i.kt)("p",null,"This option sets the maximum time allowed to receive the request header from the client. If the header is not completely received within this period, the connection will be terminated."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300 \n\nMetrics: Seconds\n")),(0,i.kt)("h4",r({},{id:"client-send-timeout"}),"Client Send Timeout"),(0,i.kt)("p",null,"This option sets the maximum time allowed to send the response to the client. If the response cannot be fully sent within this period, the connection will be terminated."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300 \n\nMetrics: Seconds\n")),(0,i.kt)("h4",r({},{id:"static-extensions"}),"Static Extensions"),(0,i.kt)("p",null,"This setting allows specifying a list of file extensions that are permitted to be served statically without undergoing security validation. Files with these extensions can be served directly without additional security checks."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: String  \n\nDefault: png, gif, ico, jpg, jpeg, js, css, woff, woff2, ttf, svg  \n")),(0,i.kt)("h4",r({},{id:"maximum-http-body-size"}),"Maximum HTTP Body Size"),(0,i.kt)("p",null,"This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.",(0,i.kt)("br",{parentName:"p"}),"\n","Note: In the case of HTTP/0.9, no headers get transmitted."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4073741824L\n\nMin: 1024\n\nDefault: 10485760  \n\nMetric: Bytes \n")),(0,i.kt)("h4",r({},{id:"maximum-http-header-size"}),"Maximum HTTP Header Size"),(0,i.kt)("p",null,"This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes. It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 40960\n\nMin: 1024\n\nDefault: 4096  \n\nMetric: Bytes\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTTP Headers")," are components of the HTTP protocol used for communication between a client (such as a web browser) and a server. "),(0,i.kt)("h4",r({},{id:"proxy-http-version"}),"Proxy HTTP Version"),(0,i.kt)("p",null,"This setting allows specifying the HTTP version used when connecting to the upstream server. It determines which version of the HTTP protocol is utilized for communication between the proxy server and the upstream server."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Any / HTTP 1.0 / HTTP 1.1.\n\nDefault: Any\n")),(0,i.kt)("h4",r({},{id:"proxy-buffers"}),"Proxy Buffers"),(0,i.kt)("p",null,"This option specify the number of buffers used for reading a response from the server for a single connection. (Proxy buffers refer to memory buffers used by a proxy server to temporarily store data during the process of receiving, processing, and forwarding requests and responses between clients and backend servers.)"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 64\n\nMin: 8\n\nDefault: 8  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge."),(0,i.kt)("h4",r({},{id:"proxy-buffer-size"}),"Proxy Buffer Size"),(0,i.kt)("p",null,"This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4096\n\nMin: 8\n\nDefault: 8  \n\nMetric: KB\n")),(0,i.kt)("h4",r({},{id:"client-ip-location"}),"Client IP Location"),(0,i.kt)("p",null,"This option specify the location of the client IP."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: X-FORWARDED-FOR / X-REAL-IP / SRC IP / X-PROXYUSER-IP\n\nDefault: SRC IP \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"X-FORWARDED-FOR")," header contains the IP address of the client that initiated the request, allowing the destination server to identify the original client's IP address even though the request was forwarded through intermediaries.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"X-REAL-IP")," Similar to the X-Forwarded-For header, the X-Real-IP header is typically added by the proxy server or load balancer to the HTTP request before forwarding it to the destination server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"X-PROXYUSER-IP")," header likely contains the IP address of the client that initiated the request, allowing the backend server to identify the true client IP address. However, since it's a custom header, its usage and interpretation may vary depending on the specific configuration of the proxy server or load balancer."))),(0,i.kt)("h4",r({},{id:"host-header"}),"Host Header"),(0,i.kt)("p",null,"This option specify the host header allowed by the backend, if it's different from the listener sub-domain. This allows the incoming request to alter the host header in each request and transmit it to the backend server."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,i.kt)("p",null,"It's used by the client to specify the domain name of the server it's attempting to connect to and the port number if it's different from the default (80 for HTTP and 443 for HTTPS)."),(0,i.kt)("h4",r({},{id:"server-aliases"}),"Server Aliases"),(0,i.kt)("p",null,"This option specify aliases means familiar name for the listener."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,i.kt)("h4",r({},{id:"virtual-ips"}),"Virtual IPs"),(0,i.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic. (They are typically used in network configurations to abstract away the underlying physical infrastructure and provide a consistent interface for clients to access services.)"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank  \n")),(0,i.kt)("h4",r({},{id:"port"}),"Port"),(0,i.kt)("p",null,"This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port."),(0,i.kt)("h5",r({},{id:"port-1"}),"Port"),(0,i.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,i.kt)("h5",r({},{id:"ssl-enabled"}),"SSL Enabled"),(0,i.kt)("p",null,"This option used to select whether the SSL enabled or Disabled, that is uploaded by the user in the SSL Certificate section."),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")))}h.isMDXComponent=!0},75665:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Lsettings-c9f7756e6a30ac6a3794ecc225d906d4.png"},1934:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Lsettings2-1d2767ba03b40c96c476db174f8e4935.png"},56888:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Lsettings3-4ccc9efa9781d40f51fd9d3d4ab54172.png"}}]);