/*! For license information please see 7e067826.3d30eea2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78152],{57799:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"cloud/waf/listener/server-groups/load-balancing","title":"Load Balancing","description":"Load Balancing mechanism used for WAF","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/server-groups/load-balancing.md","sourceDirName":"cloud/waf/listener/server-groups","slug":"/cloud/waf/listener/server-groups/load-balancing","permalink":"/v7/cloud/waf/listener/server-groups/load-balancing","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"cloud_sidebar","previous":{"title":"Servers","permalink":"/v7/cloud/waf/listener/server-groups/servers"},"next":{"title":"Monitors","permalink":"/v7/cloud/waf/listener/monitors"}}');var r=n(74848),t=n(28453);const o={sidebar_position:3},l="Load Balancing",d={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function c(e){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"load-balancing",children:"Load Balancing"})}),"\n",(0,r.jsx)(s.p,{children:"Load Balancing mechanism used for WAF"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(s.p,{children:"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault\u2011tolerant configurations."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Load Balancing Algorithms"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the load balancing algorithm according to the configured website."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ROUND ROBIN"}),": This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LEAST CONNECTIONS"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LEAST LISTENER CONNECTIONS"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the backend server."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LEAST RESPONSE TIME"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LEAST REQUEST"}),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"IP HASH"}),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"PERSIST HASH"}),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"COOKIE HASH"}),": This algorithm takes the cookie name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"HEADER HASH"}),": This algorithm takes the header name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Note: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address."}),"\n",(0,r.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Go to ",(0,r.jsx)(s.strong,{children:"WAF > Zones > Listeners > Server Groups > Load Balancing"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Set the configurations and ",(0,r.jsx)(s.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"PARAMETERS"}),(0,r.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,r.jsx)(s.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Web Socket Enabled"}),(0,r.jsx)(s.td,{children:"Enabled/Disabled"}),(0,r.jsx)(s.td,{children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Keep-Alive Enabled"}),(0,r.jsx)(s.td,{children:"Enabled/Disabled"}),(0,r.jsx)(s.td,{children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Keep-Alive Timeout"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"3600"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Connection Pool Size"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"32"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Max Keep-Alive Requests"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"100"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Upstream Retries"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Failover Threshold"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"50"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Algorithm"}),(0,r.jsx)(s.td,{children:"Dropdown"}),(0,r.jsx)(s.td,{children:"Round Robin"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Param"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"None"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Add Location"}),(0,r.jsx)(s.td,{children:"String & Integer"}),(0,r.jsx)(s.td,{children:"None & Src IP"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Web Socket Enabled"})}),"\n",(0,r.jsx)(s.p,{children:"This toggle button allows you to enable the Websocket support for servers in the server group."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Keep-Alive Enabled"})}),"\n",(0,r.jsx)(s.p,{children:"This toggle button allows you to enable keep-alive connections with servers in the server group."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Keep-Alive Timeout"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies upstream keep-alive connection timeout in seconds. By default, the value is set to 3600 seconds."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Connection Pool Size"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the connection pool size. By default, the value is set to 32."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Max Keep-Alive Requests"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the max allowed requests per keep-alive connection. By default, the value is set to 100 requests."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Upstream Retries"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the upstream retries. By default, the value is set to 1."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Failover Threshold"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the failover threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Algorithm"})}),"\n",(0,r.jsx)(s.p,{children:"This dropdown specifies the algorithm used by the server group. By default, the value is selected as Round Robin."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Param"})}),"\n",(0,r.jsx)(s.p,{children:"This field specifies the parameters for the location. Location will be specified with its Priority and Location like IP, Cookie, Port, Session, etc."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,s,n)=>{var i=n(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,n){var i,t={},a=null,c=null;for(i in void 0!==n&&(a=""+n),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(c=s.ref),s)o.call(s,i)&&!d.hasOwnProperty(i)&&(t[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===t[i]&&(t[i]=s[i]);return{$$typeof:r,type:e,key:a,ref:c,props:t,_owner:l.current}}s.Fragment=t,s.jsx=a,s.jsxs=a},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(96540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);