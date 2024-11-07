/*! For license information please see 17aa6d14.bc3ef1ea.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[92580],{77263:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"kb/waf/kb-1073","title":"KB: 1073","description":"Primary troubleshooting steps for issues found in applications onboarded on Haltdos WAF","source":"@site/docs/kb/waf/kb-1073.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1073","permalink":"/kb/waf/kb-1073","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":73,"frontMatter":{"sidebar_position":73},"sidebar":"kb_sidebar","previous":{"title":"KB: 1072","permalink":"/kb/waf/kb-1072"},"next":{"title":"KB: 1074","permalink":"/kb/waf/kb-1074"}}');var i=s(74848),t=s(28453);const o={sidebar_position:73},c="KB: 1073",l={},d=[{value:"<strong>Primary troubleshooting steps for issues found in applications onboarded on Haltdos WAF</strong>",id:"primary-troubleshooting-steps-for-issues-found-in-applications-onboarded-on-haltdos-waf",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kb-1073",children:"KB: 1073"})}),"\n",(0,i.jsx)(n.h4,{id:"primary-troubleshooting-steps-for-issues-found-in-applications-onboarded-on-haltdos-waf",children:(0,i.jsx)(n.strong,{children:"Primary troubleshooting steps for issues found in applications onboarded on Haltdos WAF"})}),"\n",(0,i.jsxs)(n.p,{children:["When troubleshooting issues with applications onboarded on Haltdos WAF, use a systematic approach to identify and resolve the root cause. For instance, users will see a reference ID on the screen when Haltdos WAF blocks a request, which can be used to check incident details, including status code, URI, and source IP and much more information about the incident, under ",(0,i.jsxs)(n.strong,{children:["Apps > WAF > ",(0,i.jsx)(n.a,{href:"/enterprise/waf/incidents",children:"Incidents"})]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Below are some common cases-"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Internal Server Error (5xx)"})}),"\n",(0,i.jsxs)(n.p,{children:["a.  ",(0,i.jsx)(n.strong,{children:"Cause:"})," This error often indicates a problem with the\nbackend server of the application or an issue with how the WAF is\ninteracting with the backend server."]}),"\n",(0,i.jsxs)(n.p,{children:["b.  ",(0,i.jsx)(n.strong,{children:"Troubleshooting steps:"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Inspect WAF Logs:"})," Analyze the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/enterprise/waf/incidents",children:"Incidents"})})," logs to see if\nany security rules were triggered that might have affected\nthe request. ",(0,i.jsx)("br",{}),"\nA misconfiguration in the server configuration,\nincluding the server IP or port configured in ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/enterprise/waf/listener/loadBalancing/serverGroup/",children:"Server Group"})}),", could cause a server\nerror."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Try to connect to the Backend Server"}),": You can check if\nthe WAF Mitigation Instance can connect to the backend\nserver and verify the response using telnet and curl\nrequest through ",(0,i.jsx)(n.strong,{children:"CLI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Example- ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"telnet example.com 80"})}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"telnet",src:s(19146).A+"",width:"590",height:"105"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"curl --resolve example.com:443:93.184.216.34 https://example.com"})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"curl",src:s(51316).A+"",width:"866",height:"186"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check Application Logs:"})," After reviewing Incident Logs review the application's server\nlogs to identify any server-side errors or exceptions that\ncould have triggered the 500 error."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Review Configuration:"})," User can disable ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/community/docs/waf/operational/#enable-error-handling",children:"error handling"})})," to\nget the exact response from backend server."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Gateway Timeout (504)"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cause"}),": This error often indicates a problem with the backend server of the application or an issue with the WAF, where it is unable to receive a response from the backend within the configured connection timeout period."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Troubleshooting steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Inspect WAF Logs:"})," Analyze the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/enterprise/waf/incidents",children:"Incidents"})})," logs to see if WAF is getting response from the Backend Server."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Change the configured time period to get the response"})," You can try to increase the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/enterprise/waf/listener/loadBalancing/serverGroup/",children:"Connection Timeout"})})," and again try to send the request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check Application Logs:"})," Review the application\u2019s server logs to identify any server-side errors or exceptions that could have triggered the 504 error."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Forbidden Error (403)"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cause:"})," The HTTP 403 Forbidden error response status code\nindicates that the Haltdos WAF understood the request but\nrefused to process it. This could be due to the request being\nmalicious or the WAF consider it as malicious (a false\npositive)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Troubleshooting steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inspect WAF Logs:"})," Analyze the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/enterprise/waf/incidents",children:"Incidents"})})," logs to see if\nany security rules were triggered that might have affected\nthe request. There, you can identify the actual reason for\nthe blocked request, and the user can take the necessary\nsteps to whitelist the incident that occurred if needed."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Page Not Found (404)"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cause:"})," The HTTP 404 Not Found error response status code\nindicates that the server cannot find the requested resource, or\nthe links are broken."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Troubleshooting steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check requested URL:"})," Ensure the URL is typed correctly.\nSome URLs require a trailing slash (/) at the end, missing\nit can lead to a 404 error."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Check Application Logs:"})," Review the application's server\nlogs to identify any server-side errors or exceptions that\ncould have triggered the 404 error."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"No Response (444)"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description:"}),' If any policies have been configured on Haltdos WAF for Geo Filtering, such as IP Blacklist or Country Blacklist, users may see a "Site Can\'t Be Reached" message or something similar. Incident information related to these events can be viewed on the Haltdos Console under Incidents.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"not_found",src:s(326).A+"",width:"1929",height:"993"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cause:"})," The HTTP 444 status code typically indicates that the WAF has returned no response to the client and closed the connection."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Troubleshooting steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Inspect WAF Logs:"})," Analyze the Incident logs to see why the request has been blocked."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Review Configuration:"})," User can review the geo filtering policies to see if anything is misconfigured."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,n,s)=>{var r=s(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,t={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:a,props:t,_owner:c.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},51316:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/curl-7759699bf80213ef6653e60c65e8f527.png"},326:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/not_found-f129dd3aeb2a9358c9189ce591bbd321.png"},19146:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/telnet-c99914593976bc1de6145a5afd0c634c.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);