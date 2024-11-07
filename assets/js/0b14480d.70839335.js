/*! For license information please see 0b14480d.70839335.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[54830],{93949:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"enterprise/adc/listeners/server_groups/load_balancing","title":"Load Balancing","description":"---","source":"@site/docs/enterprise/adc/listeners/server_groups/load_balancing.md","sourceDirName":"enterprise/adc/listeners/server_groups","slug":"/enterprise/adc/listeners/server_groups/load_balancing","permalink":"/enterprise/adc/listeners/server_groups/load_balancing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"adc_sidebar","previous":{"title":"Servers","permalink":"/enterprise/adc/listeners/server_groups/servers"},"next":{"title":"SNMP","permalink":"/enterprise/adc/listeners/server_groups/snmp"}}');var r=s(74848),t=s(28453);const o={sidebar_position:2},l="Load Balancing",c={},a=[{value:"Overview",id:"overview",level:3},{value:"<strong>Load Balancing Algorithms</strong>",id:"load-balancing-algorithms",level:5},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Connection Reuse Policy</strong>",id:"connection-reuse-policy",level:5},{value:"<strong>Enable HTTP KeepAlive</strong>",id:"enable-http-keepalive",level:5},{value:"<strong>HTTP KeepAlive Timeout</strong>",id:"http-keepalive-timeout",level:5},{value:"<strong>Tunnel Timeout</strong>",id:"tunnel-timeout",level:5},{value:"<strong>Request Timeout</strong>",id:"request-timeout",level:5},{value:"<strong>Server Connect Timeout</strong>",id:"server-connect-timeout",level:5},{value:"<strong>Idle Connection Timeout</strong>",id:"idle-connection-timeout",level:5},{value:"<strong>Resume Connection Timeout</strong>",id:"resume-connection-timeout",level:5},{value:"<strong>Queue Timeout</strong>",id:"queue-timeout",level:5},{value:"<strong>Connection Pool Size</strong>",id:"connection-pool-size",level:5},{value:"<strong>Server Retries</strong>",id:"server-retries",level:5},{value:"<strong>Client IP Pool</strong>",id:"client-ip-pool",level:5},{value:"<strong>Algorithm</strong>",id:"algorithm",level:5},{value:"<strong>Sticky Session Cookie</strong>",id:"sticky-session-cookie",level:5},{value:"<strong>Adding Location</strong>",id:"adding-location",level:5}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerance configurations."}),"\n",(0,r.jsx)(n.h5,{id:"load-balancing-algorithms",children:(0,r.jsx)(n.strong,{children:"Load Balancing Algorithms"})}),"\n",(0,r.jsx)(n.p,{children:"This field specifies the load balancing algorithm according to the configured website."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ROUND ROBIN"}),":\nThis algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST CONNECTIONS"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST RESPONSE TIME"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have used least bandwidth for serving the client requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST BANDWIDTH"}),":This"," algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"IP HASH"}),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PERSISTENT HASH"}),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing, if a specified value does not exist then the request is served on the basis of client's IP address."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Least Requests:"}),"\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SNMP Metrics"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have the least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Stack"})," > ",(0,r.jsx)(n.a,{href:"/enterprise/adc",children:(0,r.jsx)(n.strong,{children:"SLB"})})," > ",(0,r.jsx)(n.a,{href:"/enterprise/adc/listeners/",children:(0,r.jsx)(n.strong,{children:"Listeners"})})," >",(0,r.jsx)(n.a,{href:"/enterprise/adc/listeners/server_groups/",children:"** Server Groups**"})," > ",(0,r.jsx)(n.strong,{children:"Select Server Name"})," > ",(0,r.jsx)(n.strong,{children:"Load Balancing"})]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Load balancing",src:s(52893).A+"",width:"1425",height:"905"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Load balancing",src:s(71686).A+"",width:"1431",height:"308"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,r.jsx)(n.h5,{id:"connection-reuse-policy",children:(0,r.jsx)(n.strong,{children:"Connection Reuse Policy"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify an HTTP connection reuse policy."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Always / Never / Safe / Aggressive\n\n    Default: Always \n"})}),"\n",(0,r.jsx)(n.h5,{id:"enable-http-keepalive",children:(0,r.jsx)(n.strong,{children:"Enable HTTP KeepAlive"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify enabling server connection keep-alive."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,r.jsx)(n.h5,{id:"http-keepalive-timeout",children:(0,r.jsx)(n.strong,{children:"HTTP KeepAlive Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify a keep-alive server connection timeout."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"tunnel-timeout",children:(0,r.jsx)(n.strong,{children:"Tunnel Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to set the maximum inactivity time on the client and server-side for Websocket tunnels"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 120 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"request-timeout",children:(0,r.jsx)(n.strong,{children:"Request Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to set the maximum inactivity time on the client and server-side for web-socket tunnels."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 10 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"server-connect-timeout",children:(0,r.jsx)(n.strong,{children:"Server Connect Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify a max time to wait for establishing server connection."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 4 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"idle-connection-timeout",children:(0,r.jsx)(n.strong,{children:"Idle Connection Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify idle server connection timeout."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 30 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"resume-connection-timeout",children:(0,r.jsx)(n.strong,{children:"Resume Connection Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify the time within which a lost server connection can resume."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"queue-timeout",children:(0,r.jsx)(n.strong,{children:"Queue Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify the maximum time to wait in the queue for a connection slot to be free."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"connection-pool-size",children:(0,r.jsx)(n.strong,{children:"Connection Pool Size"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify the maximum number of idling connections for a server. Set -1 for unlimited."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 32 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"server-retries",children:(0,r.jsx)(n.strong,{children:"Server Retries"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify the max number of connection retries."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"client-ip-pool",children:(0,r.jsx)(n.strong,{children:"Client IP Pool"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify list of client IP to use when connecting to upstream. Leave blank for auto."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.h5,{id:"algorithm",children:(0,r.jsx)(n.strong,{children:"Algorithm"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to specify the Server Group Algorithm."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Round Robin / Least Connection / Least Listener Connection / Least Response Time / Minium Jitter / IP Hash / Persistent Hash / Least Requests / SNMP Metrics \n\n    Default: Round Robin  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"sticky-session-cookie",children:(0,r.jsx)(n.strong,{children:"Sticky Session Cookie"})}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to specify enabling sticky session based on specified cookie."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: 5 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"adding-location",children:(0,r.jsx)(n.strong,{children:"Adding Location"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Load balancing2",src:s(53231).A+"",width:"685",height:"359"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Priority"}),"\nThe user can set the priority."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Location"}),(0,r.jsx)(n.br,{}),"\n","The user can set the location for which load balancing is done."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: SRC_IP / DST_IP / SRC_PORT / DST_PORT / URL / ARG_VAL / HEADER_VAL / COOKIE_VAL\n\n    Default: SRC_IP \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value"}),(0,r.jsx)(n.br,{}),"\n","The users are allowed to specify the location value. This option will only visible when location is selected to value fields."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: 5\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var i=s(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,t={},a=null,d=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},74848:(e,n,s)=>{e.exports=s(21020)},52893:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/load_balancing_1-f0e73244568c0045bbf48a719f785fc0.png"},71686:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/load_balancing_2-afe9e2e205094e24ca7b93ccaa48972d.png"},53231:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/load_balancing_3-375ac052b62f3f9372227f9bb4160859.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);