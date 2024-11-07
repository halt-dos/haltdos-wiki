/*! For license information please see 2dbb79ec.e421399d.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44069],{4418:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>h,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"docs/waf/server_farm/monitors","title":"Server Monitors","description":"Overview","source":"@site/community/docs/waf/server_farm/monitors.md","sourceDirName":"docs/waf/server_farm","slug":"/docs/waf/server_farm/monitors","permalink":"/community/docs/waf/server_farm/monitors","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"community_sidebar","previous":{"title":"Load Balancing","permalink":"/community/docs/waf/server_farm/load_balancing"},"next":{"title":"WEB Policy","permalink":"/community/docs/waf/policy/web_policy"}}');var n=s(74848),i=s(28453);const h={sidebar_position:3},o="Server Monitors",l={},a=[{value:"Overview",id:"overview",level:3},{value:"How to you Use:",id:"how-to-you-use",level:3},{value:"Description",id:"description",level:3},{value:"Monitor Name",id:"monitor-name",level:4},{value:"Enable Health Check",id:"enable-health-check",level:4},{value:"Health Check Interval",id:"health-check-interval",level:4},{value:"Fail Threshold",id:"fail-threshold",level:4},{value:"Pass Threshold",id:"pass-threshold",level:4},{value:"Health Check Type:",id:"health-check-type",level:4},{value:"Check URI",id:"check-uri",level:4},{value:"Match Status",id:"match-status",level:4},{value:"Match Content",id:"match-content",level:4}];function c(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"server-monitors",children:"Server Monitors"})}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Monitoring provides a comprehensive overview of the status and performance of the individual real servers. If a monitor is attached to a server, then it will get applied to the server for monitoring purposes as per the health check specified in the monitor. Health Checks computes an overall health state for upstream server in the WAF. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Monitors",src:s(49395).A+"",width:"1918",height:"976"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-you-use",children:"How to you Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:"WAF"})," > ",(0,n.jsx)(t.strong,{children:"Server Farm"})," > ",(0,n.jsx)(t.strong,{children:"Server Monitors"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.strong,{children:"Add Monitor"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click on the monitor name to configure the Health Check and click on ",(0,n.jsx)(t.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Accepted value"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Monitor Name"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Enable Health Check"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health Check Interval"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"10"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Fail Threshold"}),(0,n.jsx)(t.td,{children:"Interger"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pass Threshold"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Health Check Type"}),(0,n.jsx)(t.td,{children:"Drop-down"}),(0,n.jsx)(t.td,{children:"TCP"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.h4,{id:"monitor-name",children:"Monitor Name"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify a user friendly name to monitor."}),"\n",(0,n.jsx)(t.h4,{id:"enable-health-check",children:"Enable Health Check"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to enable to periodically check the health of upstream servers by sending special health\u2011check requests to each server and verifying the correct response."}),"\n",(0,n.jsx)(t.h4,{id:"health-check-interval",children:"Health Check Interval"}),"\n",(0,n.jsx)(t.p,{children:"Set the seconds, say 10, then every 10 seconds WAF sends a request for \u201c/\u201d to each server. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check."}),"\n",(0,n.jsx)(t.h4,{id:"fail-threshold",children:"Fail Threshold"}),"\n",(0,n.jsx)(t.p,{children:"Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt)."}),"\n",(0,n.jsx)(t.h4,{id:"pass-threshold",children:"Pass Threshold"}),"\n",(0,n.jsx)(t.p,{children:"Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one."}),"\n",(0,n.jsx)(t.h4,{id:"health-check-type",children:"Health Check Type:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"TCP"}),":\r\nHealth check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SSL HELLO"}),":\r\nHealth check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HTTP"}),":\r\nHealth check sends HTTP request, if unable to receive response, then we make that server unhealthy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HTTPS"}),":\r\nHealth check sends HTTPS request, if unable to receive response, then we make that server as unhealthy"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"check-uri",children:"Check URI"}),"\n",(0,n.jsxs)(t.p,{children:["This option is only visible when ",(0,n.jsx)(t.strong,{children:"Health Check Type"})," is set to HTTP/HTTPs. This option allows user to specify the URI for the health check."]}),"\n",(0,n.jsx)(t.h4,{id:"match-status",children:"Match Status"}),"\n",(0,n.jsxs)(t.p,{children:["This option is only visible when ",(0,n.jsx)(t.strong,{children:"Health Check Type"})," is set to HTTP/HTTPs. This option allows user to specify the HTTP status code that need to be checked during the health check."]}),"\n",(0,n.jsx)(t.h4,{id:"match-content",children:"Match Content"}),"\n",(0,n.jsxs)(t.p,{children:["This option is only visible when ",(0,n.jsx)(t.strong,{children:"Health Check Type"})," is set to HTTP/HTTPs. This option allows users to specify the content to match in the response."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,t,s)=>{var r=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var r,i={},a=null,c=null;for(r in void 0!==s&&(a=""+s),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)h.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:a,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},74848:(e,t,s)=>{e.exports=s(21020)},49395:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/monitor2-e9925e9c11d611196908f7b5ee23ff1a.png"},28453:(e,t,s)=>{s.d(t,{R:()=>h,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function h(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:h(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);