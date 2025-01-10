/*! For license information please see 096c8421.fba77161.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[82792],{83540:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"cloud/waf/listener/loadBalancing/serverGroup/loadbalancing","title":"Load Balancing","description":"Load Balancing mechanism used for WAF","source":"@site/docs/cloud/waf/listener/loadBalancing/serverGroup/loadbalancing.md","sourceDirName":"cloud/waf/listener/loadBalancing/serverGroup","slug":"/cloud/waf/listener/loadBalancing/serverGroup/loadbalancing","permalink":"/cloud/waf/listener/loadBalancing/serverGroup/loadbalancing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"cloud_sidebar","previous":{"title":"Servers","permalink":"/cloud/waf/listener/loadBalancing/serverGroup/servers"},"next":{"title":"Health Monitors","permalink":"/cloud/waf/listener/loadBalancing/monitor"}}');var r=s(74848),t=s(28453);const o={sidebar_position:2},a="Load Balancing",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Load Balancing Algorithms",id:"load-balancing-algorithms",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Upstream Retries</strong>",id:"upstream-retries",level:5},{value:"<strong>Fail-over Threshold</strong>",id:"fail-over-threshold",level:5},{value:"<strong>Client IP Pool</strong>",id:"client-ip-pool",level:5},{value:"<strong>Algorithm</strong>",id:"algorithm",level:5},{value:"<strong>Sticky Session Cookie</strong>",id:"sticky-session-cookie",level:5},{value:"Location",id:"location",level:4},{value:"<strong>Priority</strong>",id:"priority",level:5},{value:"<strong>Location</strong>",id:"location-1",level:5},{value:"<strong>Value</strong>",id:"value",level:5}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"})}),"\n",(0,r.jsx)(n.p,{children:"Load Balancing mechanism used for WAF"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerant configurations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Load Balancing",src:s(88083).A+"",width:"1910",height:"900"})}),"\n",(0,r.jsx)(n.h3,{id:"load-balancing-algorithms",children:"Load Balancing Algorithms"}),"\n",(0,r.jsx)(n.p,{children:"This field specifies the load balancing algorithm according to the configured website."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ROUND ROBIN"}),":\nThis algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST CONNECTIONS"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST LISTENER CONNECTIONS"}),":\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LEAST RESPONSE TIME"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MINIMUM JITTER"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum jitter. NOTE: For this algorithm to work, the server group should have ICMP monitor attached."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"IP HASH"}),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PERSISTENT HASH"}),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Least Requests:"}),"\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SNMP Metrics"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Load Balancing",src:s(13592).A+"",width:"1910",height:"900"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Listeners"})," > ",(0,r.jsx)(n.strong,{children:"Server Groups"})," > ",(0,r.jsx)(n.strong,{children:"Load Balancing"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the configurations and ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h5,{id:"upstream-retries",children:(0,r.jsx)(n.strong,{children:"Upstream Retries"})}),"\n",(0,r.jsx)(n.p,{children:"This option used to specify the upstream retries. By default, the value is set to 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"fail-over-threshold",children:(0,r.jsx)(n.strong,{children:"Fail-over Threshold"})}),"\n",(0,r.jsx)(n.p,{children:"This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Max: 100\n\n    Min: 1\n\n    Default: 50  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"client-ip-pool",children:(0,r.jsx)(n.strong,{children:"Client IP Pool"})}),"\n",(0,r.jsx)(n.p,{children:"Specify list of client IP to use when connecting to upstream. Leave blank for auto"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: list of client IP\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.h5,{id:"algorithm",children:(0,r.jsx)(n.strong,{children:"Algorithm"})}),"\n",(0,r.jsx)(n.p,{children:"This option is used to specify the algorithm used by the server group. By default, the value is selected as Round Robin."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Round Robin / Least Connection / Least Listener Connection / Least Response Time / Minium Jitter / IP Hash / Persistent Hash / Least Requests / SNMP Metrics \n\n    Default: Round Robin\n"})}),"\n",(0,r.jsx)(n.h5,{id:"sticky-session-cookie",children:(0,r.jsx)(n.strong,{children:"Sticky Session Cookie"})}),"\n",(0,r.jsx)(n.p,{children:"Specify enabling sticky session based on specified cookie"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 1\n"})}),"\n",(0,r.jsx)(n.h4,{id:"location",children:"Location"}),"\n",(0,r.jsx)(n.h5,{id:"priority",children:(0,r.jsx)(n.strong,{children:"Priority"})}),"\n",(0,r.jsx)(n.p,{children:"Set the priority"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.h5,{id:"location-1",children:(0,r.jsx)(n.strong,{children:"Location"})}),"\n",(0,r.jsx)(n.p,{children:"Set the priority"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: SRC_IP / DST_IP / SRC_PORT / DST_PORT / URL / ARG_VAL / HEADER_VAL / COOKIE_VAL\n\n    Default: SRC_IP \n"})}),"\n",(0,r.jsx)(n.h5,{id:"value",children:(0,r.jsx)(n.strong,{children:"Value"})}),"\n",(0,r.jsx)(n.p,{children:"Set the location"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var i=s(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var i,t={},c=null,d=null;for(i in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:d,props:t,_owner:a.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},88083:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/loadBalancing1-2dcfee8e941f918ac36eba6782acfcf9.png"},13592:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/loadBalancing2-caa901608b106512766ef28d77212bbd.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);