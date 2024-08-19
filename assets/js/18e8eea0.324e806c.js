"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[37863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,k=d["".concat(i,".").concat(u)]||d[u]||h[u]||l;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},s="Monitor",i={unversionedId:"enterprise/llb/monitors/monitors",id:"enterprise/llb/monitors/monitors",title:"Monitor",description:"Link monitoring in Haltdos LLB",source:"@site/docs/enterprise/llb/monitors/monitors.md",sourceDirName:"enterprise/llb/monitors",slug:"/enterprise/llb/monitors/",permalink:"/enterprise/llb/monitors/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"llb_sidebar",previous:{title:"Group Ports",permalink:"/enterprise/llb/group_ports"},next:{title:"Routing",permalink:"/enterprise/llb/routing"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Monitor Name</strong>",id:"monitor-name",level:5},{value:"<strong>Update Static Route</strong>",id:"update-static-route",level:5},{value:"<strong>Use IPv6</strong>",id:"use-ipv6",level:5},{value:"<strong>Monitor Type</strong>",id:"monitor-type",level:5},{value:"<strong>Query Server</strong>",id:"query-server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Check Interval</strong>",id:"check-interval",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5},{value:"<strong>Fail Threshold</strong>",id:"fail-threshold",level:5},{value:"<strong>Pass Threshold</strong>",id:"pass-threshold",level:5},{value:"<strong>Latency Threshold</strong>",id:"latency-threshold",level:5},{value:"<strong>Jitter Threshold</strong>",id:"jitter-threshold",level:5},{value:"<strong>Packet Loss Threshold</strong>",id:"packet-loss-threshold",level:5}],d={toc:c},h="wrapper";function u(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(h,o({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"monitor"}),"Monitor"),(0,n.kt)("p",null,"Link monitoring in Haltdos LLB"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos allows users to configure custom monitoring that can monitor the interface groups. These monitors check the health of the link to assist in efficient load balancing across multiple WAN links."),(0,n.kt)("p",null,"If any of the links are monitored and marked as down, the traffic will not redirect to the same link unless the link comes up and complete the pass threshold."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adding_monitor",src:r(26481).Z,width:"1420",height:"932"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Stack >LLB > Monitors"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Monitor")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"monitor_settings",src:r(24020).Z,width:"867",height:"560"})),(0,n.kt)("h3",o({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description:")),(0,n.kt)("h5",o({},{id:"enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Enabled")),(0,n.kt)("p",null,"This option allows to enable or disable monitor rule. by default, It is set to disable."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,n.kt)("h5",o({},{id:"monitor-name"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor Name")),(0,n.kt)("p",null,"This option allows the user to set a name for his monitoring rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"update-static-route"}),(0,n.kt)("strong",{parentName:"h5"},"Update Static Route")),(0,n.kt)("p",null,"It specifies if the static route should be updated upon failure."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,n.kt)("h5",o({},{id:"use-ipv6"}),(0,n.kt)("strong",{parentName:"h5"},"Use IPv6")),(0,n.kt)("p",null,"It specifies if the monitor should use the IPv6 stack."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,n.kt)("h5",o({},{id:"monitor-type"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor Type")),(0,n.kt)("p",null,"It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected. Monitor can be configured for the mentioned protocols using the drop-down;"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: TCP / ICMP / DNS / HTTP / HTTPS / SCRIPTS\n\nDefault: TCP \n")),(0,n.kt)("p",null,"To enable monitor based on UDP, ARP or any other protocol, ",(0,n.kt)("strong",{parentName:"p"},"CUSTOM SCRIPT")," can be used."),(0,n.kt)("h5",o({},{id:"query-server"}),(0,n.kt)("strong",{parentName:"h5"},"Query Server")),(0,n.kt)("p",null,"This option can only be seen when ICMP/TCP other protocol is selected in the ",(0,n.kt)("strong",{parentName:"p"},"Monitor Type"),". It allows the user to set the query server IP Address to which the monitor request will send."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"It specifies the port number to connect the server when TCP protocol is selected in ",(0,n.kt)("strong",{parentName:"p"},"Monitor Type"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 80 \n")),(0,n.kt)("h5",o({},{id:"check-interval"}),(0,n.kt)("strong",{parentName:"h5"},"Check Interval")),(0,n.kt)("p",null,"This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 10 \n")),(0,n.kt)("h5",o({},{id:"timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Timeout")),(0,n.kt)("p",null,"It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1 \n")),(0,n.kt)("h5",o({},{id:"fail-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Fail Threshold")),(0,n.kt)("p",null,"This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1\n")),(0,n.kt)("h5",o({},{id:"pass-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Pass Threshold")),(0,n.kt)("p",null,"This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1 \n")),(0,n.kt)("h5",o({},{id:"latency-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Latency Threshold")),(0,n.kt)("p",null,"Latency is the time it takes for data to pass from one point on a network to another. This option specifies that Interface should be marked down if the latency threshold is breached. By default, the latency threshold is set to 0 which is its disable state."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",o({},{id:"jitter-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Jitter Threshold")),(0,n.kt)("p",null,"Jitter is when there is a time delay in sending data packets over your network connection. This option specifies that the interface should be marked down if the jitter threshold is breached. By default, it is set to 0 which is the disabled state."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,n.kt)("h5",o({},{id:"packet-loss-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Packet Loss Threshold")),(0,n.kt)("p",null,"Packet loss occurs when one or more packets of data traveling across a computer network fail to reach their destination. Packet loss is either caused by errors in data transmission, typically across wireless networks, or network congestion. It specifies interface should be marked down if the packet loss threshold is breached. Set 0 to disable."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")))}u.isMDXComponent=!0},24020:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb_monitor_2-ceb0fd7e99539f45eb707d7a7dffddfb.png"},26481:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb_monitors-2113cfd813a1fbc35895530a7c0fa25f.png"}}]);