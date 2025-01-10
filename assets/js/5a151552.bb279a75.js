/*! For license information please see 5a151552.bb279a75.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89572],{4106:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"enterprise/adc/listeners/server_groups/load_balancing","title":"Load Balancing","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/server_groups/load_balancing.md","sourceDirName":"enterprise/adc/listeners/server_groups","slug":"/enterprise/adc/listeners/server_groups/load_balancing","permalink":"/v7/enterprise/adc/listeners/server_groups/load_balancing","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"adc_sidebar","previous":{"title":"Servers","permalink":"/v7/enterprise/adc/listeners/server_groups/servers"},"next":{"title":"SNMP","permalink":"/v7/enterprise/adc/listeners/server_groups/snmp"}}');var A=s(74848),t=s(28453);const r={sidebar_position:2},o="Load Balancing",l={},a=[{value:"Overview",id:"overview",level:2},{value:"Load Balancing Algorithms",id:"load-balancing-algorithms",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"Connection Reuse Policy",id:"connection-reuse-policy",level:5},{value:"Enable HTTP KeepAlive",id:"enable-http-keepalive",level:5},{value:"HTTP KeepAlive Timeout",id:"http-keepalive-timeout",level:5},{value:"Tunnel Timeout",id:"tunnel-timeout",level:5},{value:"Request Timeout",id:"request-timeout",level:5},{value:"Server Connect Timeout",id:"server-connect-timeout",level:5},{value:"Idle Connection Timeout",id:"idle-connection-timeout",level:5},{value:"Resume Connection Timeout",id:"resume-connection-timeout",level:5},{value:"Queue Timeout",id:"queue-timeout",level:5},{value:"Connection Pool Size",id:"connection-pool-size",level:5},{value:"Server Retries",id:"server-retries",level:5},{value:"Client IP Pool",id:"client-ip-pool",level:5},{value:"Algorithm",id:"algorithm",level:5},{value:"Sticky Session Cookie",id:"sticky-session-cookie",level:5},{value:"Adding Location",id:"adding-location",level:5}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.header,{children:(0,A.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"})}),"\n",(0,A.jsx)(n.hr,{}),"\n",(0,A.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,A.jsx)(n.p,{children:"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault\u2011tolerant configurations."}),"\n",(0,A.jsx)(n.h4,{id:"load-balancing-algorithms",children:"Load Balancing Algorithms"}),"\n",(0,A.jsx)(n.p,{children:"This field specifies the load balancing algorithm according to the configured website."}),"\n",(0,A.jsxs)(n.ol,{children:["\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"ROUND ROBIN"}),":\nThis algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"LEAST CONNECTIONS"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"LEAST LISTENER CONNECTIONS"}),":\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"LEAST RESPONSE TIME"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"MINIMUM JITTER"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum jitter. NOTE: For this algorithm to work, the server group should have ICMP monitor attached."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"IP HASH"}),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"PERSISTENT HASH"}),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing, if a specified value does not exists then the request is served on the basis of client's IP address."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"Least Requests:"}),"\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests."]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:[(0,A.jsx)(n.strong,{children:"SNMP Metrics"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached."]}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Load balancing",src:s(20485).A+"",width:"1831",height:"837"})}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Load balancing",src:s(64792).A+"",width:"1495",height:"448"})}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Load balancing2",src:s(39283).A+"",width:"1829",height:"479"})}),"\n",(0,A.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,A.jsxs)(n.ol,{children:["\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:["Go to Stack > ",(0,A.jsx)(n.strong,{children:"SLB"})," > ",(0,A.jsx)(n.a,{href:"/v7/enterprise/adc/listeners/",children:(0,A.jsx)(n.strong,{children:"Listeners"})})," >",(0,A.jsx)(n.a,{href:"/v7/enterprise/adc/listeners/server_groups/",children:"** Server Groups**"})," > ",(0,A.jsx)(n.strong,{children:"Select Server Name"})," > ",(0,A.jsx)(n.strong,{children:"Load Balancing"})]}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,A.jsxs)(n.li,{children:["\n",(0,A.jsxs)(n.p,{children:["Click ",(0,A.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,A.jsx)(n.h5,{id:"connection-reuse-policy",children:"Connection Reuse Policy"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify an HTTP connection reuse policy."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Always / Never / Safe / Aggressive\n\n    Default: Always \n"})}),"\n",(0,A.jsx)(n.h5,{id:"enable-http-keepalive",children:"Enable HTTP KeepAlive"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify enabling server connection keep-alive."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,A.jsx)(n.h5,{id:"http-keepalive-timeout",children:"HTTP KeepAlive Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify a keep-alive server connection timeout."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"tunnel-timeout",children:"Tunnel Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to set the maximum inactivity time on the client and server-side for Websocket tunnels"}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 120 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"request-timeout",children:"Request Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the maximum allowed time to wait for a complete HTTP request."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 10 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"server-connect-timeout",children:"Server Connect Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify a max time to wait for establishing server connection."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 4 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"idle-connection-timeout",children:"Idle Connection Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify idle server connection timeout."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 30 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"resume-connection-timeout",children:"Resume Connection Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the time within which a lost server connection can resume."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"queue-timeout",children:"Queue Timeout"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the maximum time to wait in the queue for a connection slot to be free."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"connection-pool-size",children:"Connection Pool Size"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the maximum number of idling connections for a server. Set -1 for unlimited."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 32 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"server-retries",children:"Server Retries"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the max number of connection retries."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"client-ip-pool",children:"Client IP Pool"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify list of client IP to use when connecting to upstream. Leave blank for auto."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,A.jsx)(n.h5,{id:"algorithm",children:"Algorithm"}),"\n",(0,A.jsx)(n.p,{children:"This option allows users to specify the Server Group Algorithm."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Round Robin / Least Connection / Least Listener Connection / Least Response Time / Minium Jitter / IP Hash / Persistent Hash / Least Requests / SNMP Metrics \n\n    Default: Round Robin  \n"})}),"\n",(0,A.jsx)(n.h5,{id:"sticky-session-cookie",children:"Sticky Session Cookie"}),"\n",(0,A.jsx)(n.p,{children:"Users are allowed to specify enabling sticky session based on specified cookie."}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: 5 \n"})}),"\n",(0,A.jsx)(n.h5,{id:"adding-location",children:"Adding Location"}),"\n",(0,A.jsx)(n.p,{children:(0,A.jsx)(n.img,{alt:"Load balancing3",src:s(88522).A+"",width:"513",height:"414"})}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsxs)(n.li,{children:[(0,A.jsx)(n.strong,{children:"Priority"}),(0,A.jsx)(n.br,{}),"\n","The user can set the priority."]}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsxs)(n.li,{children:[(0,A.jsx)(n.strong,{children:"Location"}),(0,A.jsx)(n.br,{}),"\n","The user can set the location for which load balancing is done."]}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: SRC_IP / DST_IP / SRC_PORT / DST_PORT / URL / ARG_VAL / HEADER_VAL / COOKIE_VAL\n\n    Default: SRC_IP \n"})}),"\n",(0,A.jsxs)(n.ul,{children:["\n",(0,A.jsxs)(n.li,{children:[(0,A.jsx)(n.strong,{children:"Value"}),(0,A.jsx)(n.br,{}),"\n","The users are allowed to specify the location value. This option will only visible when location is selected to val fields."]}),"\n"]}),"\n",(0,A.jsx)(n.pre,{children:(0,A.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: 5 \n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,A.jsx)(n,{...e,children:(0,A.jsx)(c,{...e})}):c(e)}},21020:(e,n,s)=>{var i=s(96540),A=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,t={},a=null,c=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:A,type:e,key:a,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},74848:(e,n,s)=>{e.exports=s(21020)},20485:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/loadbalancing-64ea97b984d246f71a65e4f0746dd3cd.png"},64792:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/loadbalancing1-015264ffe3e9e214f78682f526738a43.png"},39283:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/loadbalancing2-adbc074a7836d4fe4d734391bb7aeb50.png"},88522:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const A={},t=i.createContext(A);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);