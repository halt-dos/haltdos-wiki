/*! For license information please see cd6ca695.d9acb8aa.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[28152],{76124:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"kb/waf/waf","title":"WAF/WAAP","description":"This section describes the knowledge base of how to use Haltdos WAF / WAAP to adequately protect Web & API applications.","source":"@site/docs/kb/waf/waf.md","sourceDirName":"kb/waf","slug":"/kb/waf/","permalink":"/kb/waf/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"kb_sidebar","previous":{"title":"KB: 3010","permalink":"/kb/platform/kb-3012"},"next":{"title":"KB: 1001","permalink":"/kb/waf/kb-1001"}}');var a=i(74848),o=i(28453);const s={sidebar_position:0},t="WAF/WAAP",l={},c=[];function d(e){const r={a:"a",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"wafwaap",children:"WAF/WAAP"})}),"\n",(0,a.jsx)(r.p,{children:"This section describes the knowledge base of how to use Haltdos WAF / WAAP to adequately protect Web & API applications."}),"\n",(0,a.jsx)(r.p,{children:"Some of the WAF use cases are mentioned below:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1001",children:"Configuring HTTP Redirection"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1002",children:"Configure Machine Learning for 0-day protection"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1003",children:"How to add custom headers for origin servers ?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1004",children:"Sending custom header or cookies to the client"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1005",children:"Configuring multiple security profiles for complex applications"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1006",children:"Adding Health monitoring on backend servers"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1007",children:"Selecting appropriate Server Group based on the incoming request"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1008",children:"Configuring secure File upload"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1009",children:"Configuring passwords by enabling organization-specific password policy."})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1010",children:"Configuring AV Scanner for an application behind WAF"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1011",children:"Masking login credentials like passwords"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1012",children:"Preemptive bot protection by WAF"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1013",children:"Securing websites from brute force attack"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1014",children:"How to enable IPv6 support in the listener."})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1015",children:"How to configure custom HTML error page received from Haltdos Web Application Firewall."})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1016",children:"How do I configure a Syslog server on Haltdos WAF?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1017",children:"How to check Incident details in Haltdos WAF plateform?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1018",children:"How to change Web Application Firewall mode in between Record, Bypass & Mitigation? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1019",children:"How can user restrict the file upload of any particular file extension? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1020",children:"How to add custom listener ports post creating the listner?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1021",children:"How to allow access to only few IPs for backend web application? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1022",children:"How to change temperory blacklist duration? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1023",children:"How to change load balancing algorithem for any server group?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1024",children:"How to add a new server? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1025",children:"How to create/add a new server group in a listener? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1026",children:"How to mark any server as down true (soft down)? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1027",children:"How to mark any server as backup server? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1028",children:"How to upload SSL certificate and use them for a web application (listener)?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1029",children:"How to add a custom security profile? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1030",children:"How to mitigate bad reputation traffic with Haltdos WAF? "})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1031",children:"How to whitelist any IP or IP segment for a listener?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1032",children:"Modifying default signature status."})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1033",children:"How to configure JSON policies?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1034",children:"How to configure the allowed HTTP methods?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1035",children:"How to configure bot protection settings in order to ensure protection from reconnaissance and scraping activities?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1036",children:"How to configure Blacklist and Whitelist IP addresses?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1037",children:"How to allow/block and add suspicious crawlers?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1038",children:"How to rate limit the end user requests?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1039",children:"How to configure web extensions and restricted extensions and validation?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1040",children:"Mitigating XSS attack"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1041",children:"Mitigating SQL injection attack"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1042",children:"How do user set maximum HTTP body and header size ?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1043",children:"How to set/change the keep-alive timeout for server and client?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1044",children:"Condition based redirection."})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1045",children:"How to set maximum allowed Bot request rate from a single client IP?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1046",children:"How to set mitigation for Path/Directory traversal attack?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1047",children:"How to set mitigation for OS command Injection?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1048",children:"How to add client certificates?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1049",children:"How to add a listener?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1050",children:"How a user extract or set a custom variable by using Variable Rules in Haltdos WAF?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1051",children:"How to make form rule to offers a positive security model for Application Firewall ?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1052",children:"How to make Firewall rules that allow client to create custom security rules as per application logic?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1053",children:"How the rate limit rule restrict over-usage of client application by throttling requests on matching users?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1054",children:"How Whitelist rule allows to add exceptions on existing rules (custom and managed)?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1055",children:"How to create a response rule to filter responses from applications and prevent sensitive data leaks?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1056",children:"How to configure NTP through Haltdos Solution?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1057",children:"How to mask sensitive data content like CCN/SSN?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1058",children:"How to prevent sites from XML Bomb attack?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1059",children:"How to prevent Cross-site Request Forgery through Haltdos WAF?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1060",children:"How to configure TLS and SSL versions from Haltdos console?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1061",children:"How to prevent sites from JSON injection?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1062",children:"How to achieve better performance through Haltdos WAF?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1063",children:"How WAF mitigate RCE attacks?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1064",children:"How to whitelist request based on particular pattern?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1065",children:"How to set rule staging from Haltdos console for managing Signatures?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1066",children:"How to check the backend server down incident on Haltdos console?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1067",children:"How to configure IP transparency through Haltdos Solution?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1068",children:"Why do we need to configure web application to accept traffic from WAF only?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1069",children:"How to capture packet and trace them through tcp dump utility?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1070",children:"How to decrypt SSL/TLS traffic using Wireshark and private keys?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1071",children:"How to decrypt SSL/TLS using Wireshark and SSLKEYLOGFILE environment variable on Firefox or Google Chrome using Wireshark?"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1072",children:"What are the baseline security approaches for an application onboarded on Haltdos WAF"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1073",children:"Primary troubleshooting steps for issues found in applications onboarded on Haltdos WAF"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"/kb/waf/kb-1074",children:"Adding Admin/Member and configuring password"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},21020:(e,r,i)=>{var n=i(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,i){var n,o={},c=null,d=null;for(n in void 0!==i&&(c=""+i),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:t.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},74848:(e,r,i)=>{e.exports=i(21020)},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>t});var n=i(96540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);