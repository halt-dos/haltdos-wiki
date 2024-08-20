"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[40768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var l=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:3},o="TCP Setting",s={unversionedId:"enterprise/platform/system/Infrastructure/instance/settings/tcp",id:"enterprise/platform/system/Infrastructure/instance/settings/tcp",title:"TCP Setting",description:"---",source:"@site/docs/enterprise/platform/system/Infrastructure/instance/settings/tcp.md",sourceDirName:"enterprise/platform/system/Infrastructure/instance/settings",slug:"/enterprise/platform/system/Infrastructure/instance/settings/tcp",permalink:"/enterprise/platform/system/Infrastructure/instance/settings/tcp",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Monitor Setting",permalink:"/enterprise/platform/system/Infrastructure/instance/settings/monitor"},next:{title:"SNMP",permalink:"/enterprise/platform/system/Infrastructure/instance/integration/snmp"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description",id:"description",level:3},{value:"Congestion Control Algorithm",id:"congestion-control-algorithm",level:5},{value:"Use SYN Cookies",id:"use-syn-cookies",level:5},{value:"Read Buffer",id:"read-buffer",level:5},{value:"Write Buffer",id:"write-buffer",level:5},{value:"Max TCP Orphans",id:"max-tcp-orphans",level:5},{value:"Enable Slow Start",id:"enable-slow-start",level:5},{value:"TCP SYNACK Retries",id:"tcp-synack-retries",level:5},{value:"TCP SYN Retries",id:"tcp-syn-retries",level:5},{value:"Enable Window Scaling",id:"enable-window-scaling",level:5},{value:"Enable Timestamps",id:"enable-timestamps",level:5},{value:"Enable Selective ACKs",id:"enable-selective-acks",level:5},{value:"Enable TCP SACKs",id:"enable-tcp-sacks",level:5},{value:"Enable Duplicate SACKs",id:"enable-duplicate-sacks",level:5},{value:"Enable TCP Fast Open",id:"enable-tcp-fast-open",level:5},{value:"TCP Backlog Connections",id:"tcp-backlog-connections",level:5},{value:"TCP Keepalive Probes",id:"tcp-keepalive-probes",level:5},{value:"TCP Keepalive Time",id:"tcp-keepalive-time",level:5},{value:"TCP Keepalive Interval",id:"tcp-keepalive-interval",level:5},{value:"TCP FIN Timeout",id:"tcp-fin-timeout",level:5}],u={toc:c},d="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,l.kt)(d,r({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",r({},{id:"tcp-setting"}),"TCP Setting"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"It shows the configuration regarding TCP Setting"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Monitor",src:n(24060).Z,width:"1914",height:"891"}),"  "),(0,l.kt)("h4",r({},{id:"how-to-use"}),"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Stack > Infrastructure > Instance > (Select Instance) > Setting > Monitor Setting")))),(0,l.kt)("li",{parentName:"ol"},"Configure your settings"),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save CHanges"))),(0,l.kt)("h3",r({},{id:"description"}),"Description"),(0,l.kt)("h5",r({},{id:"congestion-control-algorithm"}),"Congestion Control Algorithm"),(0,l.kt)("p",null,"Specify the algorithm to be used to avoid congestion"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: BBR / RENO / CUBIC\n\nDefault: BBR\n")),(0,l.kt)("h5",r({},{id:"use-syn-cookies"}),"Use SYN Cookies"),(0,l.kt)("p",null,"Enable this to use SYN cookies in case of SYN Flood"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable\n")),(0,l.kt)("h5",r({},{id:"read-buffer"}),"Read Buffer"),(0,l.kt)("p",null,"Specify the size of the incoming kernel socket buffer"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 65536\n")),(0,l.kt)("h5",r({},{id:"write-buffer"}),"Write Buffer"),(0,l.kt)("p",null,"Specify the size of the outgoing kernel socket buffer"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 65536\n")),(0,l.kt)("h5",r({},{id:"max-tcp-orphans"}),"Max TCP Orphans"),(0,l.kt)("p",null,"Specify the maximum number of TCP sockets not attached to any user file handle, held by system"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 4096\n")),(0,l.kt)("h5",r({},{id:"enable-slow-start"}),"Enable Slow Start"),(0,l.kt)("p",null,"Enable this behavior to time out the congestion window after an idle period"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"tcp-synack-retries"}),"TCP SYNACK Retries"),(0,l.kt)("p",null,"Specify the number of times SYNACKSs for a passive TCP connection attempt will be retransmitted"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 3\n")),(0,l.kt)("h5",r({},{id:"tcp-syn-retries"}),"TCP SYN Retries"),(0,l.kt)("p",null,"Specify the number of times SYNs for a active TCP connection attempt will be retransmitted"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 3\n")),(0,l.kt)("h5",r({},{id:"enable-window-scaling"}),"Enable Window Scaling"),(0,l.kt)("p",null,"Enable Window Scaling during TCP sessions"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"enable-timestamps"}),"Enable Timestamps"),(0,l.kt)("p",null,"Enable to turn timestamps off to reduce performance spikes related to timestamp generation"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"enable-selective-acks"}),"Enable Selective ACKs"),(0,l.kt)("p",null,"Enable the TCP selective ACKs option for better throughput"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"enable-tcp-sacks"}),"Enable TCP SACKs"),(0,l.kt)("p",null,"Enable to allow TCP to send SACKs"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"enable-duplicate-sacks"}),"Enable Duplicate SACKs"),(0,l.kt)("p",null,"Enable to allow TCP to send duplicate SACKs"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"enable-tcp-fast-open"}),"Enable TCP Fast Open"),(0,l.kt)("p",null,"Enable TCP Fast Open to send and accept data in the opening SYN Packet"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,l.kt)("h5",r({},{id:"tcp-backlog-connections"}),"TCP Backlog Connections"),(0,l.kt)("p",null,"Specify the maximum number of remembered connection requests, which have not received an acknowledgment from connecting client"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1500\n")),(0,l.kt)("h5",r({},{id:"tcp-keepalive-probes"}),"TCP Keepalive Probes"),(0,l.kt)("p",null,"Enable to allow TCP to send duplicate SACKs"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 5\n")),(0,l.kt)("h5",r({},{id:"tcp-keepalive-time"}),"TCP Keepalive Time"),(0,l.kt)("p",null,"Specify how often TCP sends out keepalive messages when keepalive is enabled"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1800\n")),(0,l.kt)("h5",r({},{id:"tcp-keepalive-interval"}),"TCP Keepalive Interval"),(0,l.kt)("p",null,"Specify how frequently the TCP probes are send out"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 60\n")),(0,l.kt)("h5",r({},{id:"tcp-fin-timeout"}),"TCP FIN Timeout"),(0,l.kt)("p",null,"Specify time an orphaned connection will remain in the FIN_WAIT_2 state before it is aborted at the local end"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 60\n")))}f.isMDXComponent=!0},24060:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/monitor_settings-ec0469b3bc6037a1602f31e33a3c6e58.png"}}]);