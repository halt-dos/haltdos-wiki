"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[79669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:2},l="Operational",s={unversionedId:"professional/docs/waf/operational",id:"version-7.0/professional/docs/waf/operational",title:"Operational",description:"Configure Operational settings of Listeners.",source:"@site/versioned_docs/version-7.0/professional/docs/waf/operational.md",sourceDirName:"professional/docs/waf",slug:"/professional/docs/waf/operational",permalink:"/professional/docs/waf/operational",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"professional_sidebar",previous:{title:"Listeners",permalink:"/professional/docs/waf/listeners"},next:{title:"Security",permalink:"/professional/docs/waf/security"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable IPv6</strong>",id:"enable-ipv6",level:5},{value:"<strong>Enable HTTP 2.0</strong>",id:"enable-http-20",level:5},{value:"<strong>Enable Host Check</strong>",id:"enable-host-check",level:5},{value:"<strong>Web-socket Enabled</strong>",id:"web-socket-enabled",level:5},{value:"<strong>Enable Logging</strong>",id:"enable-logging",level:5},{value:"<strong>Enable Static Extension Logging</strong>",id:"enable-static-extension-logging",level:5},{value:"<strong>Enable Error Handling</strong>",id:"enable-error-handling",level:5},{value:"<strong>Connection Pool Size</strong>",id:"connection-pool-size",level:5},{value:"<strong>Client Keep-Alive Timeout</strong>",id:"client-keep-alive-timeout",level:5},{value:"<strong>Upstream Keep-Alive Timeout</strong>",id:"upstream-keep-alive-timeout",level:5},{value:"<strong>Max Requests per Connection</strong>",id:"max-requests-per-connection",level:5},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Limit Maximum Collection</strong>",id:"limit-maximum-collection",level:5},{value:"<strong>Client Body Timeout</strong>",id:"client-body-timeout",level:5},{value:"<strong>Client Header Timeout</strong>",id:"client-header-timeout",level:5},{value:"<strong>Client Send Timeout</strong>",id:"client-send-timeout",level:5},{value:"<strong>Static Extensions</strong>",id:"static-extensions",level:5},{value:"<strong>Maximum HTTP Body Size</strong>",id:"maximum-http-body-size",level:5},{value:"<strong>Maximum HTTP Header Size</strong>",id:"maximum-http-header-size",level:5},{value:"<strong>Proxy HTTP Version </strong>",id:"proxy-http-version-",level:5},{value:"<strong>Proxy Buffers</strong>",id:"proxy-buffers",level:5},{value:"<strong>Proxy Buffer Size</strong>",id:"proxy-buffer-size",level:5},{value:"<strong>Log Format</strong>",id:"log-format",level:5},{value:"<strong>Client IP Location</strong>",id:"client-ip-location",level:5},{value:"<strong>Host Header</strong>",id:"host-header",level:5},{value:"<strong>Server Aliases</strong>",id:"server-aliases",level:5},{value:"<strong>Virtual IPs</strong>",id:"virtual-ips",level:5},{value:"<strong>Add Port</strong>",id:"add-port",level:5}],u={toc:c},d="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)(d,r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"operational"}),"Operational"),(0,o.kt)("p",null,"Configure Operational settings of Listeners."),(0,o.kt)("hr",null),(0,o.kt)("h3",r({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"Users are allowed to configure many operational settings for the Listeners. Users can configure most common settings like timeout settings, operation modes, header/body timeouts, error handling, and request logging. Users can also add server aliases and VIPs to the configured listener with the help of operational settings"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Operational",src:n(79033).Z,width:"1888",height:"990"}),"\n",(0,o.kt)("img",{alt:"Operational",src:n(59264).Z,width:"1888",height:"990"}),"\n",(0,o.kt)("img",{alt:"Operational",src:n(93638).Z,width:"1888",height:"990"})),(0,o.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,o.kt)("li",{parentName:"ol"},"Then go to ",(0,o.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,o.kt)("strong",{parentName:"li"},"Settings"),".  "),(0,o.kt)("li",{parentName:"ol"},"Configure the settings."),(0,o.kt)("li",{parentName:"ol"},"Click on Save changes.  ")),(0,o.kt)("h3",r({},{id:"description"}),"Description"),(0,o.kt)("h5",r({},{id:"enable-ipv6"}),(0,o.kt)("strong",{parentName:"h5"},"Enable IPv6")),(0,o.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled  \n")),(0,o.kt)("h5",r({},{id:"enable-http-20"}),(0,o.kt)("strong",{parentName:"h5"},"Enable HTTP 2.0")),(0,o.kt)("p",null,"Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1\nThis option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  "),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled  \n")),(0,o.kt)("h5",r({},{id:"enable-host-check"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Host Check")),(0,o.kt)("p",null,"Enforce host (SNI) validation for incoming request."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled  \n")),(0,o.kt)("h5",r({},{id:"web-socket-enabled"}),(0,o.kt)("strong",{parentName:"h5"},"Web-socket Enabled")),(0,o.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled  \n")),(0,o.kt)("h5",r({},{id:"enable-logging"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Logging")),(0,o.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled  \n")),(0,o.kt)("h5",r({},{id:"enable-static-extension-logging"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Static Extension Logging")),(0,o.kt)("p",null,"This option allows user to specify whether to do log requests for static extension."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled  \n")),(0,o.kt)("h5",r({},{id:"enable-error-handling"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Error Handling")),(0,o.kt)("p",null,"This option allows user to specify whether to enable error handling by firewall."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Enabled  \n")),(0,o.kt)("h5",r({},{id:"connection-pool-size"}),(0,o.kt)("strong",{parentName:"h5"},"Connection Pool Size")),(0,o.kt)("p",null,"This option allows user to specify the connection pool size with upstream."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 20000\n\nMin: 0\n\nDefault: 0  \n")),(0,o.kt)("h5",r({},{id:"client-keep-alive-timeout"}),(0,o.kt)("strong",{parentName:"h5"},"Client Keep-Alive Timeout")),(0,o.kt)("p",null,"This option specify the timeout of keep-alive connections of clients. Set 0 to disable."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 0  \n")),(0,o.kt)("h5",r({},{id:"upstream-keep-alive-timeout"}),(0,o.kt)("strong",{parentName:"h5"},"Upstream Keep-Alive Timeout")),(0,o.kt)("p",null,"This option specify timeout of keep-alive connections of upstream. Set 0 to disable."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 0\n\nDefault: 0  \n")),(0,o.kt)("h5",r({},{id:"max-requests-per-connection"}),(0,o.kt)("strong",{parentName:"h5"},"Max Requests per Connection")),(0,o.kt)("p",null,"This option specify maximum allowed requests per keep-alive connection."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 90000000\n\nMin: 0\n\nDefault: 1000 \n")),(0,o.kt)("h5",r({},{id:"operational-mode"}),(0,o.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,o.kt)("p",null,"Specify operational mode for the listener"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Drop-Down\n\nDefault: Reverse Proxy  \n")),(0,o.kt)("h5",r({},{id:"limit-maximum-collection"}),(0,o.kt)("strong",{parentName:"h5"},"Limit Maximum Collection")),(0,o.kt)("p",null,"Specify max allowed concurrent connections. Set 0 to disable"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0  \n")),(0,o.kt)("h5",r({},{id:"client-body-timeout"}),(0,o.kt)("strong",{parentName:"h5"},"Client Body Timeout")),(0,o.kt)("p",null,"This option specify the timeout for receiving the request body."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds\n")),(0,o.kt)("h5",r({},{id:"client-header-timeout"}),(0,o.kt)("strong",{parentName:"h5"},"Client Header Timeout")),(0,o.kt)("p",null,"Specify timeout for receiving request header"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds\n")),(0,o.kt)("h5",r({},{id:"client-send-timeout"}),(0,o.kt)("strong",{parentName:"h5"},"Client Send Timeout")),(0,o.kt)("p",null,"Specify timeout for send response"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 10\n\nDefault: 300  \n\nMetric: Seconds\n")),(0,o.kt)("h5",r({},{id:"static-extensions"}),(0,o.kt)("strong",{parentName:"h5"},"Static Extensions")),(0,o.kt)("p",null,"This option specify the list of allowed static extensions that don't require security validation."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Specify the list of allowed static extensions that don't require security validation.\n\nDefault: png, gif, ico, etc.\n")),(0,o.kt)("h5",r({},{id:"maximum-http-body-size"}),(0,o.kt)("strong",{parentName:"h5"},"Maximum HTTP Body Size")),(0,o.kt)("p",null,"This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4073741824L\n\nMin: 1024\n\nDefault: 10485760  \n\nMetric: Bytes\n")),(0,o.kt)("admonition",r({},{title:"Note",type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"In the case of HTTP/0.9, no headers get transmitted.")),(0,o.kt)("h5",r({},{id:"maximum-http-header-size"}),(0,o.kt)("strong",{parentName:"h5"},"Maximum HTTP Header Size")),(0,o.kt)("p",null,"This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.\nIt comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 40960\n\nMin: 1024\n\nDefault: 4096  \n\nMetric: Bytes\n")),(0,o.kt)("h5",r({},{id:"proxy-http-version-"}),(0,o.kt)("strong",{parentName:"h5"},"Proxy HTTP Version ")),(0,o.kt)("p",null,"Specify http version used while connecting upstream server."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Drop-Down\n\nDefault: ANY  \n")),(0,o.kt)("h5",r({},{id:"proxy-buffers"}),(0,o.kt)("strong",{parentName:"h5"},"Proxy Buffers")),(0,o.kt)("p",null,"This option specify the number of buffers used for reading a response from the server for a single connection."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 64\n\nMin: 8 \n\nDefault: 8\n\nMetric: Count\n")),(0,o.kt)("h5",r({},{id:"proxy-buffer-size"}),(0,o.kt)("strong",{parentName:"h5"},"Proxy Buffer Size")),(0,o.kt)("p",null,"This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 4096\n\nMin: 8\n\nDefault: 8 \n\nMetric: KB\n")),(0,o.kt)("h5",r({},{id:"log-format"}),(0,o.kt)("strong",{parentName:"h5"},"Log Format")),(0,o.kt)("p",null,"This option specify the request log format."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: String\n\nDefault: NULL  \n")),(0,o.kt)("h5",r({},{id:"client-ip-location"}),(0,o.kt)("strong",{parentName:"h5"},"Client IP Location")),(0,o.kt)("p",null,"This option specify the location of the client IP."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: SRC-IP / X-FORWARED-FOR / X-REAL-IP / X-PROXYUSER-IP\n\nDefault: SRC IP  \n")),(0,o.kt)("h5",r({},{id:"host-header"}),(0,o.kt)("strong",{parentName:"h5"},"Host Header")),(0,o.kt)("p",null,"This option specify the host header allowed by the backend, if it's different from the listener subdomain. This allows the incoming request to alter the host header in each request and transmit it to the backend server."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,o.kt)("h5",r({},{id:"server-aliases"}),(0,o.kt)("strong",{parentName:"h5"},"Server Aliases")),(0,o.kt)("p",null,"This option specify aliases means familiar name for the listener."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Listener Identity either domain name or IP address\n\nDefault: NULL  \n")),(0,o.kt)("h5",r({},{id:"virtual-ips"}),(0,o.kt)("strong",{parentName:"h5"},"Virtual IPs")),(0,o.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer    \n\nDefault: NULL \n")),(0,o.kt)("h5",r({},{id:"add-port"}),(0,o.kt)("strong",{parentName:"h5"},"Add Port")),(0,o.kt)("p",null,"This option helps you to add HTTP/S ports for Advance Settings. Here you can be unique port either HTTP or HTTPS enabled configuration without changing backend server port."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer    \n\nDefault: Blank\n")),(0,o.kt)("admonition",r({},{title:"Note",type:"note"}),(0,o.kt)("p",{parentName:"admonition"},"Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.")))}f.isMDXComponent=!0},79033:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Operational1-ed9804b48e4a2a2cbdb6c496721bc0fa.png"},59264:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Operational2-e83aeaba552b03b4c3ee4a62d639f59f.png"},93638:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Operational3-88908f218388394a521d2a0fce4dd5ae.png"}}]);