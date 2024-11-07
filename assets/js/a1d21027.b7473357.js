/*! For license information please see a1d21027.b7473357.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[20169],{6433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"kb/waf/kb-1021","title":"KB: 1021","description":"-----------","source":"@site/docs/kb/waf/kb-1021.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1021","permalink":"/kb/waf/kb-1021","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21},"sidebar":"kb_sidebar","previous":{"title":"KB: 1020","permalink":"/kb/waf/kb-1020"},"next":{"title":"KB: 1022","permalink":"/kb/waf/kb-1022"}}');var o=t(74848),r=t(28453);const i={sidebar_position:21},l="KB: 1021",a={},c=[{value:"<strong>How to allow access to only few IPs for backend web application?</strong>",id:"how-to-allow-access-to-only-few-ips-for-backend-web-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function d(e){const n={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kb-1021",children:"KB: 1021"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"how-to-allow-access-to-only-few-ips-for-backend-web-application",children:(0,o.jsx)(n.strong,{children:"How to allow access to only few IPs for backend web application?"})}),"\n",(0,o.jsx)(n.h4,{id:"problem-statement",children:(0,o.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,o.jsx)(n.p,{children:"The user wants to allow only few IP address over the WAF to access the web application and block rest of all IP address from public facing internet."}),"\n",(0,o.jsx)(n.h4,{id:"solution",children:(0,o.jsx)(n.strong,{children:"Solution"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"kb-1021",src:t(91946).A+"",width:"1810",height:"966"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Go to  ",(0,o.jsx)(n.strong,{children:"Apps"})," > ",(0,o.jsx)(n.strong,{children:"WAF"})," > ",(0,o.jsx)(n.strong,{children:"listener"})," > ",(0,o.jsx)(n.strong,{children:"Profile"})," > ",(0,o.jsx)(n.strong,{children:"click on setting icon"})," > ",(0,o.jsx)(n.strong,{children:"Geo-filtering"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"kb-1021",src:t(85209).A+"",width:"1810",height:"962"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Under \"Blacklisted IP Prefixes\" option user can add the IP address with their CIDR value. User need to make sure that while adding the IP addresses it should start with '~' to achieve the mentioned scenario."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"kb-1021",src:t(78960).A+"",width:"1810",height:"962"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Now under ",(0,o.jsx)(n.strong,{children:"Incident"})," User can see the website is only accessible for IP 192.168.0.123 and rest all other IP addresses are blocked to access the website."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"kb-1021",src:t(69548).A+"",width:"1810",height:"962"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},85209:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/geo_kb_1021_2-8efb4d5043be05a988b480d6a844fb32.png"},78960:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/geo_kb_1021_3-fbe2d280da601f4a5472765ab1b29e44.png"},69548:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/incident_kb_1021_4-ebc567e1f5cd6d6545a1844354606772.png"},91946:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/overview_kb_1021_1-b66b77acbb01e13a8777400c8be88de8.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);